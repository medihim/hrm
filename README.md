# 메디힘 HR 평가자료 GitHub Pages

본 폴더는 메디힘 HR 후보자 평가자료를 GitHub Pages로 배포하기 위한 정적 HTML 파일 세트입니다.

## 접속 구조

```text
index.html
→ 비밀번호 입력
→ hr/index.html
→ 후보자별 상세 평가 페이지
```

## 비밀번호

```text
5153370
```

주의: 본 비밀번호 방식은 정적 HTML/JS 기반의 간단한 접근 게이트입니다. 강력한 보안이 아닙니다. 민감한 개인정보, 이력서 원본, 계약자료 등은 공개 저장소에 업로드하지 마세요.

## 폴더 구조

```text
index.html
404.html
.nojekyll
README.md
assets/
  css/style.css
  js/auth.js
hr/
  index.html
  interviewees/
    hansanghoon.html
    template.html
```

## GitHub Pages 설정

Settings → Pages → Build and deployment

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

ZIP 파일을 그대로 올리지 말고, 압축을 푼 뒤 내부 파일들이 저장소 최상위에 바로 위치하도록 업로드하세요.

## 이번 업데이트 v4

한상훈 후보자 상세 페이지에 다음 내용을 반영했습니다.

1. 한상훈의 역량
2. 최준혁 대표의 End-to-End 운영 요구
3. 용성남의 데이터 아키텍터 기반 운영 Fit 검증 관점
4. 3개월 한시적 채용 조건
5. POC Operations & CRM Data Lead 역할 정의
6. 100점 KPI 스코어카드
7. 30/60/90일 Gate Review
8. KO 및 리스크 통제 기준

## 신규 후보자 추가 방법

1. `hr/interviewees/template.html` 파일을 복사합니다.
2. 후보자명으로 파일명을 변경합니다.
3. 내부 내용을 후보자별로 수정합니다.
4. `hr/index.html`의 후보자 카드 섹션에 링크를 추가합니다.
5. GitHub에 업로드합니다.
