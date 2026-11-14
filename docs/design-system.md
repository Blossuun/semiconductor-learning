# 디자인 시스템 요약

- 원본(아티팩트): https://claude.ai/artifact/WPKbG84kEaqCFWtZvX1SA8
- 상태: 사용자 승인 (T-19, 2026-11-14)
- 근거: `docs/design-review.md`

## 선택한 시안: A안 길잡이형 (T-20, 2026-11-14)
- 시안: https://claude.ai/artifact/NCBRtFdzLBmoSVxCHPpYfi 의 A안 4개 화면. 아래 "언어 선택"과 다른 부분은 이 문서가 우선한다.
- 홈: 사이드바 없음. 본문 720px 가운데. 표제(display)와 안내(lead)는 반도체 학습을 말하고, 외국어는 한 줄 보조 설명으로만 언급 → 버튼 2개(주: 칩 하나 만들어 보기부터 시작, 보조: 용어집 보기) → "학습 경로" 0~8단계 세로 목록(한 카드 안에 56px 행: 번호 mono accent · 이름 18px 600 · 오른쪽 화살표) → 용어 카드 예시 1개 → 푸터.
- 투어·레슨: 왼쪽 사이드바(264px, 0~8단계 목차, 레슨에서는 현재 단계 아래에 레슨 이름을 들여 써서 표시) + 본문 720px. 본문 순서는 단계 표시(small) → h1 → lead → StepAnimation → (레슨) 이 레슨의 용어 → 확인 문제 → 이전/다음 레슨. 투어 끝에는 "다음: 1. 기초 원리" 보조 버튼.
- 용어집: 왼쪽 사이드바는 "단계로 고르기"(전체 + 0~8단계, 전체 옆에 용어 수). 본문은 h1 → 검색 입력 → "N개 용어 · 가나다순" → 접힌 행 목록. 누른 행은 그 자리에서 TermCard로 펼치고 테두리를 primary로 바꾼다.

## 언어 선택 (사용자 요청, 2026-11-14)
- 네 언어를 한꺼번에 보여 주지 않는다. 본문·제목·설명은 한국어이고, 외국어는 사용자가 고른 하나만 부가 정보로 보인다.
- 헤더의 언어 선택(높이 44px, 라벨 "함께 볼 언어"): 한국어만 / English / 日本語 / 简体中文 / 繁體中文. 기본값 English.
- 선택은 `localStorage`에 저장하고 `<html data-learn-lang="none|en|ja|zh-Hans|zh-Hant">`로 반영한다. 모든 언어 표기를 마크업에 두고 CSS로 선택한 언어만 보이게 한다(서버 없음).
- 적용 범위: TermCard, 용어집 행, 용어집 검색 안내 문구, 도해 캡션의 용어 병기. 선택하지 않은 언어는 어디에도 보이지 않는다.
- 용어집 검색은 선택과 관계없이 모든 언어 표기로 찾을 수 있다.

## 원칙
1. 길이 먼저 보인다: 어느 화면에서든 현재 위치와 다음 갈 곳이 보인다.
2. 주제는 반도체 학습이다. 외국어는 부가 정보로, 사용자가 고른 언어 하나만 한국어 옆에 보인다.
3. 그림이 주인공: 색은 도해와 현재 위치에만 쓴다.
4. 카드는 테두리 1px로 나눈다. 그림자는 화면 위에 뜨는 것에만. 한쪽 색 선 금지.
5. 누를 수 있는 것은 모두 44px 이상.

## 색 (CSS 변수 `--이름`, 라이트 / 다크)
| 토큰 | 라이트 | 다크 | 쓰는 곳 |
|---|---|---|---|
| bg | #f6f8fa | #0f141a | 페이지 바탕 |
| surface | #ffffff | #171d25 | 카드, 헤더, 입력 |
| surface-sunken | #eceff3 | #0b0f14 | 도해 무대, 칩 바탕 |
| border | #d5dbe3 | #2a3340 | 카드 테두리, 구분선 |
| border-strong | #7a8797 | #5d6b7d | 입력·보조 버튼 경계 |
| text | #17202b | #e6eaf0 | 본문, 제목 |
| text-muted | #556170 | #9ba7b6 | 라벨, 읽기, 보조 설명 |
| primary | #2447b8 | #8fb0ff | 링크, 주 버튼, 현재 위치, 진행 |
| primary-soft | #e3eafb | #1b2947 | 현재 메뉴·선택 바탕 |
| on-primary | #ffffff | #0f141a | primary 위 글자 |
| accent | #a8521a | #e39a5c | 단계 번호, 강조(한 화면 한두 곳) |
| accent-soft | #f8eadb | #3a2615 | 현장 메모 바탕 |
| success | #1a7a4c | #5fcf96 | 퀴즈 정답 |
| danger | #b3261e | #ff8a80 | 퀴즈 오답, 오류 |
| warning | #8a6100 | #f2c14e | 주의 |
| focus | #2447b8 | #8fb0ff | 초점 고리 2px, 2px 띄움 |

도해 전용: diagram-stroke(#17202b / #e6eaf0), diagram-silicon(#5c6778 / #a3aebd), diagram-sand(#d9b877), diagram-copper(#d68a45), diagram-oxide(#7fa8d9 / #6f9bd1), diagram-resist(#b8477a / #e07aa8), diagram-light(#7a4fd6 / #b59bff). 외곽선 2px.

## 글꼴 (`lang` 속성으로 묶음 선택)
- `--font-sans-ko`: "IBM Plex Sans", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif
- `--font-sans-ja`: "IBM Plex Sans", "Noto Sans JP", "Hiragino Sans", "Yu Gothic", system-ui, sans-serif
- `--font-sans-sc`: "IBM Plex Sans", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif
- `--font-sans-tc`: "IBM Plex Sans", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif
- `--font-mono`: "IBM Plex Mono", ui-monospace, Consolas, Menlo, monospace (약어, 수치, 단계 번호)
- 굵기: 400 본문, 500 용어 보조·라벨, 600 소제목·버튼, 700 제목·용어 표제

## 글자 크기 (크기 / 줄 높이 / 굵기)
| 이름 | 값 | 쓰는 곳 |
|---|---|---|
| display | 44 / 52 / 700 | 홈 표제 한 곳 |
| h1 | 32 / 40 / 700 | 페이지 제목 |
| h2 | 24 / 32 / 700 | 구획 제목 |
| h3 | 20 / 28 / 600 | 소제목, 장면 제목 |
| lead | 18 / 30 / 400 | 제목 아래 안내 문단 |
| body | 16 / 28 / 400 | 본문, 입력 글자(16px 미만 금지) |
| small | 14 / 22 / 400 | 보조 설명, 라벨, 버튼(600) |
| caption | 12 / 18 / 500 | 배지, 단계 표시 |
| term-main | 24 / 32 / 700 | 용어 한국어 표제 |
| term-sub | 18 / 26 / 500 | 용어 다른 언어 표기 |
| reading | 13 / 20 / 400 | 후리가나, 병음 |
| mono | 14 / 22 / 500 | 약어, 수치, 진행 표시 |

## 간격·모서리·크기
- 간격: space-1 4 / 2 8 / 3 12 / 4 16 / 5 24 / 6 32 / 7 48 / 8 64 (px). 형제 사이는 `gap`.
- 모서리: radius-sm 4(칩) / radius-md 8(버튼·입력) / radius-lg 12(카드·도해 무대) / radius-full 999(발음 버튼·진행 점).
- 틀: header-h 56 / sidebar-w 264 / content-max 720 / touch-min 44 (px).
- 그림자: shadow-overlay만(모바일 서랍, 펼침 메뉴).
- 960px 미만: 사이드바는 서랍, 옆 여백 space-4.

## 화면 틀
- 헤더: 사이트 이름 · 주요 페이지 링크(학습 경로, 칩 하나 만들어 보기, 용어집) · 언어 선택 · 테마 전환. 현재 페이지는 primary 글자 + 아래 2px 선.
- 사이드바: 0~8단계 학습 경로 목차. 현재 항목은 primary-soft 바탕 + primary 글자. 목차가 없는 페이지에서는 그리지 않는다.
- 푸터: 한 줄 설명과 저장소 링크(small, text-muted).

## 컴포넌트 규칙
- Button: 높이 44, radius-md, small 600. 주(primary 바탕) / 보조(surface + border-strong) / 아이콘(44×44, aria-label). 비활성은 자리를 지킨다.
- TermCard: 한국어 표제(term-main) + 발음 버튼 + 약어 칩 + 단계 배지 → 뜻풀이(body) → 현장 메모(accent-soft 상자) → 구분선 → 선택한 언어 1행(라벨 72px · 표기 · 읽기는 아래 줄 · 발음 버튼 오른쪽 정렬). 뜻풀이가 외국어 표기보다 먼저 온다. 선택이 "한국어만"이면 언어 행과 구분선을 그리지 않는다. surface + border + radius-lg, 한쪽 색 선 없음. 용어집에서는 56px 접힌 행(한국어 표제 + 선택한 언어 표기 + 단계 배지)을 눌러 펼친다.
- StepAnimation: surface-sunken 무대 → 캡션(번호 mono accent + h3 제목 + body 설명, 그림 안에 제목 금지) → 진행 줄(이전 · 단계 점 + `3 / 8` · 다음). 마지막 장면에 다음 학습 링크.
- Quiz: 보기는 전체 폭 보조 버튼 모양. 선택 후 success/danger 테두리 + 아이콘 + 해설.
- VideoEmbed: 16:9 surface-sunken 틀, 44px 이상 재생 버튼, 아래에 제목·출처(small).
- 입력: 높이 44, 글자 16, border-strong, 라벨은 위(small).
- 도해(SVG): 외곽선 diagram-stroke 2px, 면은 diagram-*, 라벨은 375px 화면에서도 14px 이상으로 보이게.
- 공통: 초점 고리 focus 2px. 움직임 200ms 이하, `prefers-reduced-motion`이면 끈다. 아이콘은 24px 격자·선 2px·currentColor로 직접 그린 SVG.
