# 반도체 4개 국어 학습 사이트

[English](README.en.md) | 한국어

반도체 입문자가 기초부터 공정 전체까지 한국어·영어·일본어·중국어(간체/번체)로 익히는 무료 공개 학습 사이트입니다.
Astro 정적 사이트(MDX)이며 GitHub Pages로 배포합니다. 서버와 DB는 없습니다.

**사이트 바로 가기: https://blossuun.github.io/semiconductor-learning/**

## 개발

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # ./dist/ 에 정적 사이트 생성
npm run preview  # 빌드 결과 미리보기
```

## 구조

- `src/data/glossary.yaml`: 용어 데이터(유일한 원본)
- `src/components/`: 공용 Astro 컴포넌트
- `src/pages/`, 레슨 MDX: 학습 콘텐츠

## 라이선스

- 코드: [MIT](LICENSE)
- 콘텐츠(레슨 본문, 용어 데이터, 도해): [CC BY-SA 4.0](LICENSE-CONTENT.md)

콘텐츠를 사용·재배포할 때는 출처를 표시하고 같은 라이선스로 공유해야 합니다.
