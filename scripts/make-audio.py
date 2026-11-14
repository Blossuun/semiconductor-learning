"""용어·예문·현장 문장의 발음 mp3를 만든다.

사용: python scripts/make-audio.py
- src/data/glossary.yaml, src/data/phrases.yaml을 읽는다.
- public/audio/terms/<id>/<칸>.mp3, public/audio/phrases/<id>/<칸>.mp3로 저장한다.
- 글자나 음성이 바뀌지 않은 파일은 건너뛴다(scripts/audio-manifest.json으로 판단).
필요: pip install edge-tts pyyaml
"""

import asyncio
import hashlib
import json
import sys
from pathlib import Path

import edge_tts
import yaml

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "audio"
MANIFEST = ROOT / "scripts" / "audio-manifest.json"

RATE = "-10%"
VOICES = {
    "ko": "ko-KR-SunHiNeural",
    "en": "en-US-JennyNeural",
    "ja": "ja-JP-NanamiNeural",
    "zh_cn": "zh-CN-XiaoxiaoNeural",
    "zh_tw": "zh-TW-HsiaoChenNeural",
}
LANGS = list(VOICES)


def load(name):
    with open(ROOT / "src" / "data" / name, encoding="utf-8") as f:
        return yaml.safe_load(f) or []


def collect():
    """(상대 경로, 음성, 글자) 목록을 만든다."""
    jobs = []
    for term in load("glossary.yaml"):
        for lang in LANGS:
            for field in (lang, f"example_{lang}"):
                text = term.get(field)
                if text:
                    jobs.append((f"terms/{term['id']}/{field}.mp3", VOICES[lang], str(text)))
    for phrase in load("phrases.yaml"):
        for lang in LANGS:
            text = phrase.get(lang)
            if text:
                jobs.append((f"phrases/{phrase['id']}/{lang}.mp3", VOICES[lang], str(text)))
    return jobs


def digest(voice, text):
    return hashlib.sha1(f"{voice}|{RATE}|{text}".encode("utf-8")).hexdigest()[:16]


async def synth(rel, voice, text, sem):
    path = OUT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, voice, rate=RATE).save(str(path))
                if path.stat().st_size > 0:
                    return True
            except Exception as error:  # 네트워크 오류는 다시 시도한다
                last = error
            await asyncio.sleep(1 + attempt * 2)
    print(f"실패: {rel} ({last if 'last' in locals() else '빈 파일'})", file=sys.stderr)
    path.unlink(missing_ok=True)
    return False


async def main():
    jobs = collect()
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.exists() else {}
    todo = [
        (rel, voice, text)
        for rel, voice, text in jobs
        if manifest.get(rel) != digest(voice, text) or not (OUT / rel).exists()
    ]
    print(f"전체 {len(jobs)}개, 새로 만들 것 {len(todo)}개")

    sem = asyncio.Semaphore(6)
    results = await asyncio.gather(*(synth(rel, voice, text, sem) for rel, voice, text in todo))
    failed = 0
    for (rel, voice, text), ok in zip(todo, results):
        if ok:
            manifest[rel] = digest(voice, text)
        else:
            failed += 1

    # 더는 쓰지 않는 파일을 지운다
    wanted = {rel for rel, _, _ in jobs}
    removed = 0
    for path in OUT.rglob("*.mp3"):
        rel = path.relative_to(OUT).as_posix()
        if rel not in wanted:
            path.unlink()
            removed += 1
    manifest = {rel: value for rel, value in manifest.items() if rel in wanted}

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    print(f"만듦 {len(todo) - failed}개, 실패 {failed}개, 지움 {removed}개")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    asyncio.run(main())
