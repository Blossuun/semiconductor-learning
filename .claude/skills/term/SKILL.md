---
name: term
description: 용어집에 용어를 추가한다
disable-model-invocation: true
argument-hint: [주제 또는 용어 목록]
effort: low
---

`src/data/glossary.yaml` 끝에 용어를 추가한다. 대상: $ARGUMENTS

## 절차
1. 중복 확인: 추가할 각 용어의 영어 표기를 `Grep`으로 glossary.yaml에서 찾는다. 파일 전체를 읽지 않는다.
2. 아래 스키마로 항목을 작성해 파일 끝에 덧붙인다 (`Bash`의 `cat >>` 사용, 기존 내용을 다시 쓰지 않는다).
3. 발음 파일을 만든다: `python scripts/make-audio.py` (바뀐 용어만 새로 만든다. `/batch` 안에서는 본 세션이 마무리 때 실행하므로 건너뛴다).
4. 추가한 id 목록만 한 줄로 보고한다.

## 스키마
```yaml
- id: photolithography        # 영어 소문자, 하이픈
  ko: 포토 공정
  en: photolithography
  ja: フォトリソグラフィ
  ja_reading: ふぉとりそぐらふぃ
  zh_cn: 光刻
  zh_cn_pinyin: guāngkè
  zh_tw: 微影
  zh_tw_pinyin: wéiyǐng
  abbr: Photo, Litho           # 없으면 생략
  field_usage: "현장에서는 '포토'로 줄여 부름"   # 없으면 생략
  example_ko: 이번 로트는 포토 공정에서 노광 불량이 나서 재작업한다.   # 없으면 생략, 현장에서 실제 쓸 법한 한 문장
  example_en: This lot had exposure defects in photolithography, so it will be reworked.   # 없으면 생략
  example_ja: 今回のロットはフォトリソグラフィで露光不良が出たため、再作業する。   # 없으면 생략
  example_zh_cn: 这批次在光刻工序出现曝光不良，需要返工。   # 없으면 생략
  example_zh_tw: 這批次在微影製程出現曝光不良，需要重工。   # 없으면 생략
  definition_ko: 빛으로 회로 무늬를 웨이퍼에 옮겨 그리는 공정   # 쉬운 말, 한 문장
  module: 4                    # 커리큘럼 단계 0~8
  verified: false
```

## 규칙
- 간체와 번체는 글자만 바꾸지 말고 지역별 실제 용어를 쓴다 (예: 光刻 / 微影, 刻蚀 / 蝕刻).
- 확신이 없는 표기만 웹 검색으로 확인한다. 확인한 항목은 `verified: true`와 `sources: [url]`을 적는다.
- 모든 용어를 검색하지 않는다. 미확인 항목은 `verified: false`로 두고 공개 전 검수에서 처리한다.
- 현장 표현이 공식 용어와 다르면 현장 표현을 `field_usage`에 적는다.

## 검수 출처 (표기 확인에 실제로 쓸모 있던 곳)
한 출처가 5개 언어를 다 담지 않는다. 언어별로 따로 찾고, 페이지 본문에서 그 표기를 직접 본 것만 확인으로 친다(검색 결과 요약은 근거가 아니다).
- 번체: 國家教育研究院 樂詞網. `https://terms.naer.edu.tw/search/?query_term=<영어>&query_field=title&query_op=` 를 브라우저로 연다(fetch는 빈 응답). 영어 표제어 → 대만 공식 번역이 분야별로 나온다. 가장 적중률이 높다.
- 일본어: SEAJ 半導体製造装置用語集 `https://www.seaj.or.jp/semi/yogo/` (factory, metrology, lithography, assembly, test 편). 장비·공장 운영 용어에 강하다. 그다음 SEMI Japan(`semi.org/jp`), SCREEN·HORIBA·KIOXIA 제품/기술 페이지.
- 한국어: SK hynix 뉴스룸 검색 `https://news.skhynix.co.kr/?s=<용어>` (결과 발췌에 "재작업(rework)", "로트(Lot)"처럼 영어 병기가 나온다), 삼성전자 반도체 뉴스룸 용어 글(`news.samsungsemiconductor.com/kr/?p=1632`, `?p=3821`).
- 영어: 영어 위키백과 `Semiconductor_device_fabrication` 한 문서에 inspection, defect, ingot, recipe, scrap이 다 나온다.
- 간체·번체·일본어 보조: 위키백과 API `list=search&srsearch=insource:"표기" 문맥어&srprop=snippet` (`origin=*`). 원문에 쓰인 글자 그대로 찾으므로 간체/번체를 구분할 수 있다. 중국어 위키백과 화면 표시는 자동 변환이라 근거로 쓰지 않는다. 일반 문서라 근거는 약하다.
- 쓸모없었던 곳: Google Patents(본문이 읽히지 않음), 术语在线, 百度, PDF 논문, 취업 커뮤니티·블로그.
- 현장 말(hot lot, hold, split lot, down 등)의 한·일·중 표기는 공개 웹에 거의 없다. 찾지 못하면 `verified: false`로 두고 사람 검수로 넘긴다.
