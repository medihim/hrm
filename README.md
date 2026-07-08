# 메디힘 HR 후보자 평가 페이지

GitHub Pages 업로드용 정적 HTML 패키지입니다.

## 파일 구조

```text
medihim_hr_github_upload/
├── index.html                         # 비밀번호 게이트 페이지
├── 404.html                           # 게이트 페이지와 동일한 fallback
├── .nojekyll                          # GitHub Pages 정적 파일 처리
├── assets/
│   ├── css/style.css                   # 공통 스타일
│   └── js/auth.js                      # 게이트 인증 스크립트
└── hr/
    ├── index.html                      # HR 후보자 평가 대시보드
    └── interviewees/
        ├── hansanghoon.html            # 한상훈 후보자 평가 페이지
        └── template.html               # 신규 후보자 평가 템플릿
```

## 접속 비밀번호

- PW: `5153370`

## GitHub 업로드 방법

1. 저장소 루트에 위 파일/폴더 전체를 업로드합니다.
2. GitHub 저장소에서 Settings → Pages로 이동합니다.
3. Branch를 `main` 또는 사용하는 브랜치로 설정하고 `/root`를 선택합니다.
4. 발급된 GitHub Pages URL로 접속합니다.
5. 게이트 페이지에서 비밀번호 입력 후 HR 페이지로 이동합니다.

## 신규 인터뷰이 추가 방법

1. `hr/interviewees/template.html`을 복사합니다.
2. 예: `hr/interviewees/kimyounghee.html`로 저장합니다.
3. 후보자 내용을 수정합니다.
4. `hr/index.html`의 후보자 카드 영역에 링크를 추가합니다.

## 보안 주의

이 방식은 정적 HTML 기반의 간단한 비밀번호 게이트입니다. 실제 보안 인증이 아닙니다. 민감한 개인정보, 이력서 원본, 계약조건, 주민번호, 연락처 등은 공개 GitHub Pages에 올리지 않는 것을 권장합니다. 필요한 경우 private repository, Google Drive 권한공유, Notion 권한관리, 또는 서버 인증 기반 페이지를 사용하세요.
