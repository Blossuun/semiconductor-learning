// SessionStart 훅: TASKS.md에서 첫 번째 미완료 작업 한 줄만 꺼내 맥락에 넣는다.
// Claude가 TASKS.md 전체를 읽지 않아도 되게 하는 것이 목적.
import fs from 'node:fs';
import path from 'node:path';

const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
try {
  const lines = fs.readFileSync(path.join(root, 'TASKS.md'), 'utf8').split('\n');
  const next = lines.find((l) => /^\|\s*\[ \]\s*T-\d+/.test(l));
  if (next) {
    const c = next.split('|').map((s) => s.trim()).filter(Boolean);
    console.log(
      `다음 미완료 작업: ${c[0].replace('[ ]', '').trim()} / 유형 ${c[1]} / 모델 ${c[2]} / 작업: ${c[3]} / 읽을 파일: ${c[4]} / 완료 기준: ${c[5]}`
    );
  } else {
    console.log('TASKS.md에 미완료 작업이 없다.');
  }
} catch {
  // TASKS.md가 없으면 아무것도 넣지 않는다.
}
