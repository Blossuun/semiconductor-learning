# 콘텐츠 가이드

## 레슨 구성
1. 한 줄 요약과 비유
2. StepAnimation — 공정 단면도 단계 전환
3. VideoEmbed — 공식 영상 1개
4. 본문 (쉬운 한국어, 짧은 문장, 전문용어는 첫 등장 시 풀이)
5. TermCard — 해당 레슨 용어
6. Quiz — 5문항

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
