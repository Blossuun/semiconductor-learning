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
| [ ] T-31 | A | F | 용어 스키마에 예문 추가: `example_ko·en·ja·zh_cn·zh_tw` (현장에서 실제 쓸 법한 한 문장씩). 스키마·`/term` 절차·가이드 3곳 수정 (파일 3개, 사용자 승인됨) | src/content.config.ts, .claude/skills/term/SKILL.md, docs/content-guide.md | 빌드 통과 | 단독 |
| [ ] T-32 | B | F | `TermCard`에 언어별 예문 표시. 기기에 해당 언어 음성이 없으면 발음 버튼을 숨기고 읽기 표기를 강조 | src/components/TermCard.astro | 예문이 뜨고, 음성 없는 언어에서 오류 없음 | 동시 |
| [ ] T-33 | C | F | 기존 용어 51개에 예문 추가 (10개씩 나눠 진행) | glossary.yaml 해당 구간 | 예문 없는 용어 0개 | 동시 |
| [ ] T-34 | B | F | 현장 문장 데이터 `src/data/phrases.yaml` (상황, 5개 표기, 읽기) + `PhraseCard` 컴포넌트 + 견본 5문장 | docs/content-guide.md | 문장 id를 넣으면 카드가 뜸 | 동시 |
| [ ] T-35 | B | F | `TermQuiz` 컴포넌트: glossary에서 자동 출제해 4개 국어로 용어 맞히기 (단계 필터). 용어집 페이지에 배치 | src/pages/glossary.astro, src/components/Quiz.astro | 용어집에서 연습 가능 | 동시 |
| [ ] T-38 | D | F | 레슨 구조에 "더 깊이 알아보기" 절 추가 (원리 심화, 접어 두는 형태). `/lesson` 절차·템플릿 수정 후 포토 레슨에 적용 | .claude/skills/lesson/SKILL.md, src/content/_template.mdx, src/content/lessons/photolithography.mdx | 포토 레슨에 심화 절이 있음 | 동시 |
| [ ] T-36 | B | F | 학습 진도: 레슨 완료 표시를 localStorage에 저장하고 사이드바·홈에 진도 표시 | docs/design-system.md, src/layouts/Base.astro 해당 구간 | 새로 고침 후에도 진도 유지 | 단독 |
| [ ] T-37 | A | F | 길 찾기: 사이드바 단계별 목차, 레슨 이전·다음 이동, `TermCard`에서 용어집 항목으로 링크 | src/layouts/Base.astro 해당 구간, 레슨 라우트 파일 | 모든 레슨에서 앞뒤·목차 이동 가능 | 단독 |

→ 여기서 사용자 재검토 (구조). 통과하면 양산 시작.

## 3-3. 레슨 양산 — Sonnet (기간 무관)
레슨 1개 = SVG 단계 그림 + `/lesson 주제` + `/term 주제 10개`(예문 포함). 한 세션에 레슨 1개.
새 컴포넌트가 필요하면 유형 B 작업을 먼저 추가한다. 용어는 추가할 때 가능한 한 검증한다 (남은 것은 T-91).

| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [ ] T-40 | D | S | 1단계 레슨: 도체·부도체·반도체 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-41 | D | S | 1단계 레슨: 도핑 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-42 | D | S | 1단계 레슨: PN 접합 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-43 | D | S | 1단계 레슨: 트랜지스터(MOSFET) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-44 | D | S | 2단계 레슨: 메모리와 로직 (DRAM·NAND·HBM vs 로직) (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-45 | D | S | 2단계 레슨: 산업 구조 (IDM·팹리스·파운드리·OSAT·소부장) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-46 | D | S | 3단계 레슨: 팹과 클린룸 (공장 구조, 방진복) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-47 | D | S | 3단계 레슨: 웨이퍼 이송 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-48 | D | S | 4단계 레슨: 웨이퍼 제조 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-49 | D | S | 4단계 레슨: 산화 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-50 | D | S | 4단계 레슨: 식각 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-51 | D | S | 4단계 레슨: 증착 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-52 | D | S | 4단계 레슨: 이온 주입 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-53 | D | S | 4단계 레슨: 금속 배선 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-54 | D | S | 4단계 레슨: CMP·세정 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-55 | D | S | 5단계 레슨: 계측·검사 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-56 | D | S | 5단계 레슨: 수율 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-57 | D | S | 6단계 레슨: EDS | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-58 | D | S | 6단계 레슨: 패키징 | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-59 | D | S | 6단계 레슨: TSV·HBM 적층 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-60 | D | S | 6단계 레슨: 하이브리드 본딩 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-61 | D | S | 7단계 레슨: EUV (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-62 | D | S | 7단계 레슨: GAA (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-63 | D | S | 7단계 레슨: HBM4 (검색 필요) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-64 | D | S | 8단계 레슨: 현장 약어 (`PhraseCard` 사용) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-65 | D | S | 8단계 레슨: 현장 은어 (검색 필요, `PhraseCard` 사용) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |
| [ ] T-66 | D | S | 8단계 레슨: 회의·보고 문장 4개 국어 (`PhraseCard` 사용, 문장 20개) | .claude/skills/lesson/SKILL.md | 페이지 완성 | 동시 |

## 4. 공개
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 | 진행 |
|---|---|---|---|---|---|---|
| [ ] T-90 | E | S | README (한·영), 라이선스 파일 (코드 MIT, 콘텐츠 CC BY-SA 4.0) | 없음 | 파일 생성 | 동시 |
| [ ] T-91 | C | S | `verified: false` 용어 검수 (검색 필요, 10개씩 나눠 진행) | 없음 | 미확인 0개 | 단독 |