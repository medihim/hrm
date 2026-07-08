# Medihim HR Review Board

메디힘 HR 후보자 평가자료를 GitHub Pages에서 확인하기 위한 정적 HTML 파일 세트입니다.

## 페이지 구조

```text
index.html                         # 초기 진입 페이지: 비밀번호 입력창만 노출
404.html
.nojekyll
assets/css/style.css
assets/js/auth.js
hr/index.html                      # 비밀번호 인증 후 진입하는 HR 게이트 페이지
hr/interviewees/hansanghoon.html   # 한상훈 후보자 상세 평가 페이지
hr/interviewees/template.html      # 신규 인터뷰이 평가자료 템플릿
```

## 접속 흐름

```text
1. GitHub Pages URL 접속
2. index.html에서 비밀번호 입력
3. 비밀번호 인증 성공 시 hr/index.html 게이트 페이지 진입
4. 게이트 페이지에서 인터뷰이 카드/리스트 클릭
5. 후보자별 상세 평가자료 확인
```

## 비밀번호

```text
PW: 5153370
```

## GitHub Pages 설정

- Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Save

## 업로드 방법

ZIP 파일 압축을 푼 뒤, 압축 해제된 내부 파일 전체를 저장소 최상위에 업로드합니다.

정상 구조:

```text
index.html
404.html
.nojekyll
README.md
assets/
hr/
```

주의: `medihim_hr_github_upload/` 폴더 자체가 저장소 안에 한 번 더 들어가면 GitHub Pages가 초기 `index.html`을 찾지 못할 수 있습니다.

## 신규 인터뷰이 추가 방법

1. `hr/interviewees/template.html` 파일을 복사합니다.
2. 후보자 파일명으로 저장합니다. 예: `kimyounghee.html`
3. 후보자명, 포지션, 평가 내용, 의사결정 내용을 수정합니다.
4. `hr/index.html`의 인터뷰이 리스트에 후보자 카드를 추가합니다.
5. GitHub에 업로드 후 Pages URL에서 정상 이동되는지 확인합니다.

## 보안 주의

이 비밀번호 게이트는 정적 HTML/JavaScript 기반의 간단한 접근 게이트입니다. 강력한 보안 장치가 아닙니다. 민감한 개인정보, 이력서 원본, 주민등록번호, 연락처, 계약 조건 등은 공개 GitHub 저장소에 업로드하지 않는 것이 안전합니다.
