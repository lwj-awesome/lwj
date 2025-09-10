import { ContentProps } from "@/types/types";

export const CHECK_DATA: ContentProps[] = [
  {
    key: 1,
    highlight: "React:",
    text: "사용자 인터페이스 구축을 위한 JavaScript 라이브러리",
  },
  {
    key: 2,
    text: "Input, Select, Modal 등 재사용 가능한 컴포넌트",
    highlight: "공통 UI 컴포넌트:",
  },
  {
    key: 3,
    text: "UI 컴포넌트 개발 및 문서화 도구",
    highlight: "Storybook:",
  },
  {
    key: 4,
    text: "업무 유형별 입력 항목, 유효성 규칙, 조건부 렌더링 정의",
    highlight: "요청서 템플릿:",
  },
];

export const KEY_POINT: ContentProps[] = [
  {
    key: 1,

    text: "프로젝트 전반의 디자인 일관성 확보, UX 표준화, 재사용성 향상 을 목표로 Input, Select, Modal 등 자주 사용되는 UI 요소를 공통 컴포넌트로 구축했습니다.",
  },
  {
    key: 2,
    text: "단순 스타일 통일을 넘어 유효성 검증, 에러 메시지 처리, 포커스 관리 등 사용자 경험을 고려한 로직을 내부에 통합하여 개발자와 사용자 모두에게 편리한 구조를 설계했습니다.",
  },
  {
    key: 3,
    text: "Storybook을 활용하여 구축된 컴포넌트를 시각적으로 문서화하고 다양한 사용 예시를 제공하여 팀 내 협업 효율성을 높였습니다.",
  },
];

export const LEARN: ContentProps[] = [
  {
    key: 1,
    highlight: "UI 모듈화 및 재사용성의 중요성:",
    text: "공통 컴포넌트 구축을 통해 중복 코드 작성을 줄이고 개발 속도를 향상시킬 수 있었으며, 유지보수 시 효율성을 크게 높일 수 있음을 확인했습니다",
  },
  {
    key: 2,
    text: "디자이너와의 긴밀한 협업을 통해 컬러 팔레트, 타이포그래피, 인터랙션 규칙 등 디자인 시스템의 기반을 마련하고 이를 코드에 반영함으로써 일관된 UI를 구현하고 팀 내 디자인 가이드라인을 확립할 수 있었습니다.",
    highlight: "디자인 시스템 구축의 필요성 :",
  },
  {
    key: 3,
    text: " 컴포넌트의 시각적 문서화는 개발자와 디자이너 간의 이해도를 높이고 효율적인 커뮤니케이션을 가능하게 했으며, 신규 팀원의 학습 곡선을 낮추는 데에도 기여했습니다.",
    highlight: "Storybook의 효과적인 활용:",
  },
];
