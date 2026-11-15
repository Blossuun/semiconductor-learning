# 작업 목록

사용법: 새 세션에서 `/task` 입력 → 다음 미완료 작업 1개 수행 → 직접 커밋 → `/clear`.
특정 작업은 `/task T-05`. 용어 추가는 `/term 주제`, 레슨 본문은 `/lesson 주제`.

여러 개를 한 번에: `/batch` (다음 10개) 또는 `/batch 5`, `/batch T-22 T-23`. 서브에이전트에 나눠 맡기고 끝나면 빌드 1회.
진행 칸: 동시 = 이어지는 `동시`끼리 한꺼번에 / 단독 = 혼자 순서대로 / 직접 = 본 세션이 직접 / 승인 = 본 세션이 하고 사용자 승인에서 멈춤

유형: A 뼈대 / B 공용 컴포넌트 / C 데이터 / D 레슨 콘텐츠 / E 배포
모델: F = Fable 무료 기간에 우선 처리 (디자인·설계 품질이 중요) / S = Sonnet, effort low로 충분

## 0. 사용자가 직접 (토큰 0)
프로젝트 폴더의 PowerShell에서 위에서부터 순서대로 실행한다.

- [x] U-01 이 폴더에 CLAUDE.md, TASKS.md, docs/, .claude/ 복사
- [x] U-02 `git init`
- [ ] U-03 `npm create astro@latest tmp-astro` (템플릿: minimal, TypeScript: strict, 의존성 설치: Yes, git 초기화: No)
      폴더에 이미 파일이 있어 임시 폴더에 만든다.
- [ ] U-04 임시 폴더 내용을 프로젝트 폴더로 옮기고 임시 폴더 삭제
      `Get-ChildItem tmp-astro -Force | Move-Item -Destination . -Force`
      `Remove-Item tmp-astro`
- [ ] U-05 `npx astro add mdx` (질문에는 모두 Yes)
- [ ] U-06 `npm run dev`로 브라우저에 빈 페이지가 뜨는지 확인 후 종료 (Ctrl+C)
- [ ] U-07 첫 커밋: `git add .` → `git commit -m "초기 설정"`
- [ ] U-08 GitHub에 빈 저장소 생성 후 연결: `git remote add origin <주소>` → `git push -u origin main`
- [ ] U-09 `claude update`로 최신 버전 확인 후 이 폴더에서 `claude` 실행
- [ ] U-10 Claude Code 안에서 확인
      `/model`: Fable에 "Requires usage credits" 표시가 없어야 함
      `/hooks`: 훅 3개(SessionStart, Read, Bash)가 보여야 함
      `/mcp`: 안 쓰는 서버 끄기
- [ ] U-11 `/task` 입력 → T-01 시작

## 1. 시제품 — Fable 기간 (11/17 16:59 KST까지)
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 |
|---|---|---|---|---|---|
| [x] T-01 | A | F | 기본 레이아웃(헤더·사이드바·본문), 색·글꼴 변수, 다크 모드 | 없음 | 빈 페이지가 레이아웃에 맞게 뜸 |
| [x] T-02 | B | F | StepAnimation 컴포넌트 (SVG 단계 전환, 이전·다음 버튼, 전환 모션) | 없음 | SVG 3장으로 전환 확인 |
| [x] T-03 | D | F | 포토 공정 SVG 단면도 5장 (도포→노광→현상→식각→제거) | 없음 | StepAnimation에서 재생됨 |
| [x] T-04 | B | F | TermCard 컴포넌트 (4개 국어 표시, 발음 버튼). 견본 용어 1개로 glossary.yaml 생성 | .claude/skills/term/SKILL.md | 용어 id를 넣으면 카드가 뜸 |
| [x] T-05 | B | F | Quiz 컴포넌트 (객관식, 정답·해설 표시) | 없음 | 문항 배열을 넣으면 동작 |
| [x] T-06 | D | F | 0단계 투어: 8장면 문구와 장면 구성안 | docs/spec.md | 장면 목록 파일 확정 |
| [x] T-07 | D | F | 0단계 투어: SVG 8장 + 페이지 조립 | T-06 결과 파일 | 투어 재생됨 |
| [x] T-08 | B | F | 용어집 페이지 (검색·모듈 필터) | glossary.yaml 앞 20줄 | 검색 동작 |

## 2. 시제품 — Sonnet (기간 무관)
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 |
|---|---|---|---|---|---|
| [x] T-09 | B | S | VideoEmbed 컴포넌트 (YouTube, 지연 로딩) | 없음 | 영상 id로 임베드됨 |
| [x] T-10 | D | S | 레슨 템플릿 `src/content/_template.mdx` | .claude/skills/lesson/SKILL.md | 컴포넌트 4종이 들어간 견본 |
| [x] T-11 | C | S | `/term 포토 공정 10개` | 없음 | 누적 11개 |
| [x] T-12 | D | S | `/lesson 포토 공정` (검색 필요: 공식 영상 1개) | 없음 | 페이지 완성 |
| [x] T-13 | C | S | `/term 전공정 10개` | 없음 | 누적 21개 |
| [x] T-14 | C | S | `/term 후공정·HBM 10개` | 없음 | 누적 31개 |
| [x] T-15 | C | S | `/term 기초 원리 10개` | 없음 | 누적 41개 |
| [x] T-16 | C | S | `/term 현장 약어 10개` | 없음 | 누적 51개 |
| [x] T-17 | E | S | GitHub Pages 배포 워크플로 | astro.config.mjs | 주소로 접속됨 |

→ 여기서 사용자 검토 (톤·디자인). 통과하면 3단계 작업을 같은 표 형식으로 추가.

## 3-1. 디자인 전면 개편 — Fable 기간 (11/17 16:59 KST까지)
시제품 검토 결과: 디자인 불통과. 아래를 순서대로 끝낸 뒤 확장으로 넘어간다.
T-18 전에 `frontend-design` 플러그인을 켜 둔다.

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [x] T-18 | A | F | 배포된 홈·투어·용어집·데모 화면 비평 (`design:design-critique` 스킬, 내장 브라우저로 화면 확인). 결과를 `docs/design-review.md`에 문제 목록으로 저장 | 없음 | 문제 목록 파일 생성 | 직접 |
| [x] T-19 | A | F | 디자인 시스템 확정: 색(라이트·다크), 4개 국어 글꼴, 글자 크기, 간격, 모서리, 컴포넌트 규칙. Design System 아티팩트로 만들고 요약을 `docs/design-system.md`에 저장 | docs/design-review.md | 사용자 승인 | 승인 |
| [x] T-20 | A | F | Design 캔버스에 홈·투어·용어집·레슨 화면 시안 2안 작성 | docs/design-system.md | 사용자가 1안 선택, 선택 결과를 docs/design-system.md에 기록 | 승인 |
| [x] T-21 | A | F | `Base.astro`에 디자인 시스템 반영 (변수, 헤더 내비게이션, 사이드바, 다크 모드) | docs/design-system.md, src/layouts/Base.astro | 모든 페이지가 새 뼈대로 뜸 | 단독 |
| [x] T-22 | A | F | 정식 홈 화면 (소개, 학습 경로, 주요 페이지 진입) | docs/design-system.md, src/pages/index.astro | 시안과 일치 | 동시 |
| [x] T-23 | A | F | 레슨 라우트 추가 (`src/content/lessons/*.mdx`가 페이지로 뜨게) + 레슨 화면 레이아웃 | docs/design-system.md, src/content/lessons/photolithography.mdx 앞 30줄 | 포토 공정 레슨이 주소로 열림 | 동시 |
| [x] T-24 | B | F | `StepAnimation`, `Quiz`를 디자인 시스템에 맞춤 | docs/design-system.md, 해당 컴포넌트 2개 | 시안과 일치 | 동시 |
| [x] T-25 | B | F | `TermCard`, `VideoEmbed`를 디자인 시스템에 맞춤 | docs/design-system.md, 해당 컴포넌트 2개 | 시안과 일치 | 동시 |
| [x] T-26 | A | F | 투어·용어집 페이지 레이아웃을 시안에 맞춤 | docs/design-system.md, src/pages/tour.astro, src/pages/glossary.astro | 시안과 일치 | 동시 |
| [x] T-27 | D | F | SVG 도해(`TourScenes`, `PhotoProcessSteps`)의 색·선·글자를 새 팔레트에 맞춤 | docs/design-system.md, 해당 컴포넌트 2개 | 라이트·다크 모두 판독됨 | 동시 |
| [x] T-29 | D | F | 포토 레슨 보완: 단계 구성을 그림과 본문에서 하나로 통일, `PhotoProcessSteps` 그림을 레슨에 연결, 단계마다 "왜 하는가" 1문장 추가 | src/content/lessons/photolithography.mdx, src/components/PhotoProcessSteps.astro | 레슨에 그림이 뜨고 모든 단계에 이유가 있음 | 동시 |
| [x] T-30 | D | F | 투어 8장면에 "왜 하는가" 1문장씩 추가 (`docs/tour-scenes.md`의 "무엇만 보여 준다" 규칙도 고침) | docs/tour-scenes.md, src/components/TourScenes.astro 앞 60줄 | 모든 장면에 이유가 있음 | 동시 |
| [x] T-28 | A | F | 전체 점검: 모바일 폭, 다크 모드, 접근성 (`design:accessibility-review` 스킬) | docs/design-review.md | 문제 목록 0개 | 직접 |

→ 여기서 사용자 재검토. 통과하면 아래 확장 작업을 표로 추가.

## 3-2. 구조 보완 — Fable 기간 (11/17 16:59 KST까지)
목표("현장에서 4개 국어로 소통") 대비 빠진 구조를 채운다. 레슨 양산 전에 끝낸다.

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [x] T-31 | A | F | 용어 스키마에 예문 추가: `example_ko·en·ja·zh_cn·zh_tw` (현장에서 실제 쓸 법한 한 문장씩). 스키마·`/term` 절차·가이드 3곳 수정 (파일 3개, 사용자 승인됨) | src/content.config.ts, .claude/skills/term/SKILL.md, docs/content-guide.md | 빌드 통과 | 단독 |
| [x] T-32 | B | F | `TermCard`에 언어별 예문 표시. 기기에 해당 언어 음성이 없으면 발음 버튼을 숨기고 읽기 표기를 강조 | src/components/TermCard.astro | 예문이 뜨고, 음성 없는 언어에서 오류 없음 | 동시 |
| [x] T-33 | C | F | 기존 용어 51개에 예문 추가 (10개씩 나눠 진행) | glossary.yaml 해당 구간 | 예문 없는 용어 0개 | 동시 |
| [x] T-34 | B | F | 현장 문장 데이터 `src/data/phrases.yaml` (상황, 5개 표기, 읽기) + `PhraseCard` 컴포넌트 + 견본 5문장 | docs/content-guide.md | 문장 id를 넣으면 카드가 뜸 | 동시 |
| [x] T-35 | B | F | `TermQuiz` 컴포넌트: glossary에서 자동 출제해 4개 국어로 용어 맞히기 (단계 필터). 용어집 페이지에 배치 | src/pages/glossary.astro, src/components/Quiz.astro | 용어집에서 연습 가능 | 동시 |
| [x] T-38 | D | F | 레슨 구조에 "더 깊이 알아보기" 절 추가 (원리 심화, 접어 두는 형태). `/lesson` 절차·템플릿 수정 후 포토 레슨에 적용 | .claude/skills/lesson/SKILL.md, src/content/_template.mdx, src/content/lessons/photolithography.mdx | 포토 레슨에 심화 절이 있음 | 동시 |
| [x] T-36 | B | F | 학습 진도: 레슨 완료 표시를 localStorage에 저장하고 사이드바·홈에 진도 표시 | docs/design-system.md, src/layouts/Base.astro 해당 구간 | 새로 고침 후에도 진도 유지 | 단독 |
| [x] T-37 | A | F | 길 찾기: 사이드바 단계별 목차, 레슨 이전·다음 이동, `TermCard`에서 용어집 항목으로 링크 | src/layouts/Base.astro 해당 구간, 레슨 라우트 파일 | 모든 레슨에서 앞뒤·목차 이동 가능 | 단독 |

→ 여기서 사용자 재검토 (구조). 통과하면 양산 시작.

## 3-3. 레슨 양산 — Sonnet (기간 무관)
레슨 1개 = SVG 단계 그림 + `/lesson 주제` + `/term 주제 10개`(예문 포함). 한 세션에 레슨 1개.
새 컴포넌트가 필요하면 유형 B 작업을 먼저 추가한다. 용어는 추가할 때 가능한 한 검증한다 (남은 것은 T-91).

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [x] T-40 | D | S | 1단계 레슨: 도체·부도체·반도체 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-41 | D | S | 1단계 레슨: 도핑 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-42 | D | S | 1단계 레슨: PN 접합 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-43 | D | S | 1단계 레슨: 트랜지스터(MOSFET) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-44 | D | S | 2단계 레슨: 메모리와 로직 (DRAM·NAND·HBM vs 로직) (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-45 | D | S | 2단계 레슨: 산업 구조 (IDM·팹리스·파운드리·OSAT·소부장) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-46 | D | S | 3단계 레슨: 팹과 클린룸 (공장 구조, 방진복) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-47 | D | S | 3단계 레슨: 웨이퍼 이송 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-48 | D | S | 4단계 레슨: 웨이퍼 제조 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-49 | D | S | 4단계 레슨: 산화 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-50 | D | S | 4단계 레슨: 식각 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-51 | D | S | 4단계 레슨: 증착 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-52 | D | S | 4단계 레슨: 이온 주입 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-53 | D | S | 4단계 레슨: 금속 배선 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-54 | D | S | 4단계 레슨: CMP·세정 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-55 | D | S | 5단계 레슨: 계측·검사 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-56 | D | S | 5단계 레슨: 수율 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-57 | D | S | 6단계 레슨: EDS | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-58 | D | S | 6단계 레슨: 패키징 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-59 | D | S | 6단계 레슨: TSV·HBM 적층 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-60 | D | S | 6단계 레슨: 하이브리드 본딩 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-61 | D | S | 7단계 레슨: EUV (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-62 | D | S | 7단계 레슨: GAA (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-63 | D | S | 7단계 레슨: HBM4 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-64 | D | S | 8단계 레슨: 현장 약어 (`PhraseCard` 사용) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-65 | D | S | 8단계 레슨: 현장 은어 (검색 필요, `PhraseCard` 사용) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [x] T-66 | D | S | 8단계 레슨: 회의·보고 문장 4개 국어 (`PhraseCard` 사용, 문장 20개) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |

## 4. 공개
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [x] T-90 | E | S | README (한·영), 라이선스 파일 (코드 MIT, 콘텐츠 CC BY-SA 4.0) | 없음 | 파일 생성 | 동시 |
| [x] T-91 | C | S | `verified: false` 용어 검수 (검색 필요, 10개씩 나눠 진행) | 없음 | 미확인 0개 | 단독 |

## 5. 1차 사용성 평가 후속 (11/15 평가)
막힘 4건(T-100~T-103)을 먼저 끝낸다. 그림 작업(T-103, T-108, T-109)은 Fable 기간(11/17 16:59 KST) 안에 한다.

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [x] T-100 | A | S | 레슨 `order`를 단계 안에서 겹치지 않게 다시 매김. 1단계: 도체 → 도핑 → PN 접합 → MOSFET. 2단계: 메모리와 로직 → 산업 구조. 4단계: 웨이퍼 제조 → 산화 → 포토 → 식각 → 증착 → 이온 주입 → 금속 배선 → CMP·세정. 중복이면 빌드 오류 | 레슨 파일의 앞 6줄, `src/pages/lessons/[slug].astro` | 목차와 "다음 레슨"이 위 순서로 나옴 | 단독 |
| [x] T-101 | A | S | 첫 화면 학습 경로 1~8단계를 레슨으로 연결 (단계를 누르면 레슨 목록이 펼쳐짐). "용어 카드 예시"에 한 줄 설명 추가 | `src/pages/index.astro` | 첫 화면에서 28개 레슨에 모두 도달 | 동시 |
| [x] T-102 | A | S | 투어와 용어집이 레슨 페이지와 같은 목차를 쓰게 함. 투어 끝 버튼을 첫 레슨 링크로 변경 | `src/pages/tour.astro`, `src/layouts/Base.astro` 목차 구간 | 투어에서 "준비 중"이 사라지고 다음 레슨으로 이동됨 | 동시 |
| [x] T-103 | D | F | PN 접합 단계 그림 3장 제작 (접합 전, 공핍층 형성, 순방향·역방향). 회의·보고 문장 레슨의 빈 단계 그림 영역 삭제 | `pn-junction.mdx`, 식각 레슨 그림 1장 (형식 참고) | "그림 자리" 글자 0건 | 단독 |
| [x] T-104 | D | S | "일상 비유 1개:" 머리말 17건 삭제, `/lesson` 스킬 문구 수정 | `.claude/skills/lesson/SKILL.md` | 검색 결과 0건 | 단독 |
| [x] T-105 | B | F | 언어 여러 개 동시 표시: 헤더 선택을 체크 방식으로 바꾸고 "전체" 추가. `PhraseCard`는 기본 전체 표시 | `src/layouts/Base.astro` 언어 구간, `TermCard`, `PhraseCard` | 한 카드에서 4개 외국어 표기를 함께 볼 수 있음 | 단독 |
| [x] T-106 | B | S | 용어집 검색에 현장 메모·약어 포함. 용어 맞히기를 상단 링크 또는 별도 페이지로 분리. 카드에 출처 링크 표시 | `src/pages/glossary.astro` | "밴드갭", "절연체" 검색 시 결과가 나옴 | 단독 |
| [x] T-107 | C | S | 표제어 정리: 현장에서 약어로 부르는 용어(HBM, TSV, OHT, MES, FDC, SPC, CMP, DRAM, MOSFET 등)는 약어를 표제어로, 풀어 쓴 이름을 부제로. GAA 읽는 법 메모 재확인 (검색 필요) | `glossary.yaml`에서 `abbr`가 있는 항목 | 약어 표제어로 표시됨 | 단독 |
| [x] T-108 | D | F | 첫 레슨 단계 그림을 수도관 비유로 다시 그리고, 에너지 띠 그림은 "더 깊이 알아보기"로 이동 | `conductor-insulator-semiconductor.mdx` | 비유와 그림이 일치 | 동시 |
| [x] T-109 | D | F | 선만 있는 그림 5개 레슨(EDS, 수율, 메모리와 로직, 팹과 클린룸, 패키징)을 색면 방식으로 다시 그림. 라벨 겹침과 최소 글자 크기 점검 (레슨 1개씩 나눠 진행) | 해당 레슨, 식각 레슨 그림 1장 | 휴대폰에서 라벨이 읽힘 | 동시 |
| [x] T-110 | D | S | 레슨 말투를 "~합니다"로 통일 (단계별로 나눠 진행). 개념 레슨의 "앞뒤 공정" 제목을 "앞뒤 레슨과 어떻게 이어지는가"로 변경 | 해당 단계 레슨 | 투어와 레슨 말투 일치 | 단독 |
| [x] T-111 | C | S | 용어 추가: 3단계 10개(클린룸, 방진복, 에어샤워, 로트 등), 5단계 10개(계측, 검사, 결함, 웨이퍼 맵 등), 공통 10개(잉곳, 레시피, 인터락, 다운, 핫랏, 스크랩 등) | 없음 | 단계별 용어 6개 이상, 누적 108개 | 단독 |
| [x] T-112 | D | S | 영상 보강: 포토·EUV 영상을 공정 원리 설명 영상으로 교체, 4·6단계 레슨에 공식 채널 영상 1개씩 추가, 미리보기 이미지 표시 (검색 필요, 레슨 3개씩 나눠 진행) | `src/components/VideoEmbed.astro` | 4·6단계 레슨 12개에 영상이 있음 | 단독 |

## 6. 2차 리뷰 후속 (11/15 리뷰)
T-113과 T-114를 끝내면 공개 기준을 충족한다. 화면 구성을 바꾸는 T-117, T-118은 Fable 기간(11/17 16:59 KST) 안에 한다.

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [ ] T-113 | C | S | 미검증 용어 30개 검수: 5개 표기와 읽기를 확인하고 출처를 단다 (검색 필요, 10개씩 나눠 진행). bunny suit, bin, sub-fab 표기 우선 확인 | `glossary.yaml`에서 `verified: false` 항목 | 미검증 0개, 출처 없는 용어 0개 | 단독 |
| [x] T-114 | B | S | 용어집 목록: 언어 표기 사이 간격 추가, 약어를 표제어로 표시(`TermCard`와 같은 규칙), 미검증 용어에 "확인 전" 표시 | `src/pages/glossary.astro`, `TermCard.astro` 19~30행 | 언어 전체 표시에서 표기가 구분되고 목록에 "HBM"이 표제어로 나옴 | 단독 |
| [x] T-115 | D | S | "일상 비유:" 머리말 7건 삭제. 첫 화면 소개 문장을 "여러 개 고를 수 있습니다"로 수정 | 해당 레슨 7개의 16~17행, `src/pages/index.astro` 48행 | "일상 비유" 검색 결과 0건 | 단독 |
| [x] T-116 | C | S | 공통 용어 10개의 단계 재분류(현장 말은 8단계, 잉곳은 4단계). GAA 읽는 법 메모 확인 후 수정 또는 삭제 (검색 필요) | `glossary.yaml`에서 `module: 0` 항목과 `gaa` | 0단계 용어 0개 | 단독 |
| [x] T-117 | B | F | 레슨 안 용어 카드를 한 줄 목록으로 접어 두고 누르면 펼치기 (용어집 목록과 같은 방식) | `src/components/TermCard.astro`, `src/layouts/Lesson.astro` | 첫 레슨 페이지 길이가 절반 이하로 줄어듦 | 단독 |
| [x] T-118 | B | F | 투어 장면마다 핵심 용어 1~2개를 선택 언어로 표시하고 용어집으로 연결. 그림과 버튼이 한 화면(높이 768)에 들어오게 여백 조정 | `src/components/TourScenes.astro`, `docs/tour-scenes.md` | 8장면 모두에 외국어 표기가 나옴 | 동시 |
| [x] T-119 | A | S | 휴대폰 폭에서 그림 속 글자 크기 점검, 퀴즈를 다 풀면 완료를 권하는 흐름 추가 | `StepAnimation.astro`, `Quiz.astro`, `LessonComplete.astro` | 휴대폰에서 라벨이 11px 이상 | 동시 |