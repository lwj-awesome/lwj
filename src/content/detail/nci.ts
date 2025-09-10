import { ContentProps } from "@/types/types";

export const CHECK_DATA: ContentProps[] = [
  {
    key: 1,
    highlight: "Next.js:",
    text: " 현대적인 웹 애플리케이션 개발을 위한 React 프레임워크",
  },
  {
    key: 2,
    text: " 실시간 알림, 상태 변화 모니터링, 이력 관리, 조치 내역 기록 기능",
    highlight: "장애 관리 시스템:",
  },
  {
    key: 3,
    text: " 공용 UI 컴포넌트 리팩토링",
    highlight: "Solid Pattern & Compound Pattern:",
  },
  {
    key: 4,
    text: " UI 스타일 및 테마를 중앙 집중식으로 관리",
    highlight: "디자인 토큰:",
  },
  {
    key: 5,
    text: " 모노레포 기반 프로젝트 관리",
    highlight: "Turborepo & pnpm:",
  },
  {
    key: 6,
    text: " Next.js 앱 간 런타임 코드 공유",
    highlight: "Module Federation:",
  },
];

export const KEY_POINT_1: ContentProps[] = [
  {
    key: 1,
    text: "  기존 공용 UI 컴포넌트의 유지보수성과 확장성 한계를 극복, 재사용성과 유연성을 높이기 위해 Solid Pattern, Compound Pattern을 적용하여 컴포넌트 구조를 재설계 했습니다.",
    subTitle: "공용 UI 컴포넌트 리팩토링",
  },
  {
    key: 2,
    text: "각 컴포넌트의 책임을 명확히 분리하고 (Solid) , 내부 서브 컴포넌트 간의 유기적인 조합과 제어를 가능하게 하여 (Compound) 다양한 UI 요구사항에 효과적으로 대응할 수 있도록 개선했습니다.",
  },
  {
    key: 3,
    text: " 또한, 디자인 토큰 을 도입하여 UI 스타일 및 테마를 중앙 집중식으로 관리함으로써 디자인 일관성을 더욱 강화하고 유지보수 효율성을 높였습니다.",
  },
];

export const LEARN_1: ContentProps[] = [
  {
    key: 1,
    highlight: "SOLID 원칙의 중요성 :",
    text: " 단일 책임 원칙(SRP)을 준수함으로써 변경에 대한 영향을 최소화할 수 있음을 확인했습니다.",
  },
  {
    key: 2,
    text: "복잡한 UI 구조에서 유연한 커스터마이징 옵션을 제공하여 컴포넌트의 활용도를 높일 수 있었습니다",
    highlight: "Compound Component 패턴의 유용성:",
  },
  {
    key: 3,
    text: "색상, 폰트, 간격 등 UI 스타일 요소를 토큰으로 관리함으로써 일관된 디자인 시스템을 구축하고, 테마 변경 및 유지보수를 용이하게 할 수 있었습니다.",
    highlight: "디자인 토큰의 효과:",
  },
];

export const KEY_POINT_2: ContentProps[] = [
  {
    key: 1,
    text: "프로젝트의 효율적인 관리와 팀 협업 증진을 위해Turborepo와 pnpm을 활용한 모노레포 아키텍처 를 도입하였습니다.",
    subTitle: "모노레포 기반 아키텍처",
  },
  {
    key: 2,
    text: "모노레포 를 통해 장애 관리 시스템과 관리자 페이지를 독립적으로 개발하면서도 공통 코드(유틸리티, 타입, UI 컴포넌트, 디자인 토큰)를 효율적으로 공유하고 관리할 수 있게 되었으며,",
  },
  {
    key: 3,
    text: "Module Federation 을 활용한 마이크로 프론트엔드 구조 도입을 지원하여, 서로 다른 Next.js 앱 간에 UI/UX 일관성을 유지하면서도 독립적인 배포 및 확장이 가능한 시스템을 구축했습니다.",
  },
];

export const LEARN_2: ContentProps[] = [
  {
    key: 1,
    highlight: "모노레포:",
    text: "여러 프로젝트 간의 의존성 관리, 코드 공유, 빌드 및 배포 관리를 효율적으로 수행할 수 있으며, 개발 생산성과 협업 효율성을 높일 수 있었습니다.",
  },
  {
    key: 2,
    text: "기존 UI 라이브러리 배포 방식의 번거로움을 해결하고, 공용 컴포넌트 및 디자인 토큰 수정 시 즉각적인 반영이 가능해져 개발 효율성이 크게 향상되었습니다.",
    highlight: "기존 방식과의 비교:",
  },
  {
    key: 3,
    text: "팀원과의 협업을 통해 마이크로 프론트엔드 아키텍처의 구현 과정을 학습하고, 코드 분석 및 리뷰 참여를 통해 여러 프론트엔드 애플리케이션 간의 모듈 공유 방식과 독립적 배포의 장점을 실무적으로 이해했습니다.",
    highlight: "Module Federation을 경험:",
  },
];
