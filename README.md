포트폴리오입니다.

개요: Next.js App Router 기반 현대적 웹 개발 패턴 적용 및 디자인 시스템을 기반한 포트폴리오 페이지
기술스택: Next.js App Router, TypeScript, React, Tailwind CSS, Design Tokens

주요 구현사항:
* 디자인 시스템 설계 및 토큰화: 색상, 타이포그래피, 간격 등 핵심 디자인 요소 토큰 기반 관리 시스템 구축
* 스크롤 기반 애니메이션 엔진 개발: ratio 기반 계산 알고리즘으로 라이브러리 없는 순수 JavaScript 애니메이션 구현
* Compound Pattern 적용: Detail.title, Detail.desc 등 dot notation 기반 직관적 컴포넌트 구조 설계
* 성능 최적화: 조건부 렌더링 및 transform/opacity 최적화로 부드러운 사용자 경험 구현

핵심 기술적 성과:
* calculateScroll 유틸 함수: 복잡한 스크롤 애니메이션 값을 수학적 계산으로  재사용 가능한 엔진 개발
* 토큰 기반 디자인 시스템: 디자인 변경 시 토큰 수정만으로 전체 프로젝트 일괄 적용 가능한 확장성 있는 인프라 구축
* 컴파운드 패턴:  높은 재사용성을 동시에 달성하는 컴포넌트 아키텍처 설계

성과/결과:
* 개발 생산성 향상: 디자인 토큰 기반 시스템으로 후반부 디자인 수정 시 작업 시간 대폭 단축
* 확장 가능한 컴포넌트 생태계: Compound Pattern 적용으로 새로운 컴포넌트 추가 시 기존 패턴 활용 가능
