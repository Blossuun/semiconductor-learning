# 콘텐츠 가이드

## 레슨 구성
1. 한 줄 요약과 비유
2. StepAnimation — 공정 단면도 단계 전환
3. VideoEmbed — 공식 영상 1개
4. 본문 (쉬운 한국어, 짧은 문장, 전문용어는 첫 등장 시 풀이)
5. 실무 심화 — 접힘(`<details>`) 4개: 핵심 식과 수치 / 공정 변수와 맞교환(표) / 대표 불량과 원인·계측(표) / 출처(확인 연월 포함). 모든 수치는 2곳 이상에서 확인한다. 현장 표현 레슨은 제외한다.
6. TermCard — 해당 레슨 용어
7. Quiz — 기본 5문항 + 실무 심화 계산·판단 문항 1~2개

## 용어집 스키마
```yaml
- id: photolithography
  ko: 포토 공정
  en: photolithography
  ja: フォトリソグラフィ
  ja_reading: ふぉとりそぐらふぃ
  zh_cn: 光刻
  zh_cn_pinyin: guāngkè
  zh_tw: 微影
  zh_tw_pinyin: wéiyǐng
  abbr: Photo, Litho
  field_usage: "현장에서는 '포토'로 줄여 부름"
  example_ko: 이번 로트는 포토 공정에서 노광 불량이 나서 재작업한다.
  example_en: This lot had exposure defects in photolithography, so it will be reworked.
  example_ja: 今回のロットはフォトリソグラフィで露光不良が出たため、再作業する。
  example_zh_cn: 这批次在光刻工序出现曝光不良，需要返工。
  example_zh_tw: 這批次在微影製程出現曝光不良，需要重工。
  definition_ko: 빛으로 회로 무늬를 웨이퍼에 옮겨 그리는 공정
  module: 4
  sources: [url1, url2]
```

## 콘텐츠 규칙
- 저작권: 기업 뉴스룸·교재의 이미지와 문장을 복사하지 않는다. 영상은 공식 채널 임베드만.
- 검증: 용어는 공식 용어집 2곳 이상으로 교차 확인한다.
- 현장 표현: 공식 자료와 실무자 후기가 다르면 실무자 후기를 채택하고 그 사실을 field_usage에 적는다.
- 최신성: 수치·세대명은 작성 시점의 공식 자료로 확인하고 sources에 남긴다.
- 간체와 번체는 글자만 바꾸지 말고 지역별 실제 용어를 쓴다 (예: 光刻 / 微影, 刻蚀 / 蝕刻).

## 참고 자료
- 삼성반도체 뉴스룸 8대 공정: https://news.samsungsemiconductor.com/kr/tag/8%EB%8C%80%EA%B3%B5%EC%A0%95/
- SK하이닉스 뉴스룸: https://news.skhynix.co.kr/
- Purdue Semiconductor Fabrication 101: https://engineering.purdue.edu/online/programs/masters-degrees/semiconductors/semiconductor-fabrication-101
- SEAJ 半導体製造装置用語集: https://www.seaj.or.jp/semi/yogo/wafer_process/
- Kioxia 技術用語集: https://www.kioxia.com/ja-jp/rd/glossary.html
- Applied Materials (다국어, 교차 확인용): https://www.appliedmaterials.com/
