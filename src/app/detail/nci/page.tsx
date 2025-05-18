import Marquee from "@/components/ui/marquee/marquee";

import { Detail } from "@/components/ui/detail-item/detail-item";
import { ColorDot } from "@/components/atom/color-dot";
import Text from "@/components/atom/text-module/text-module";

export default function Page() {
  return (
    <>
      <Detail>
        <Detail.title>ITSM NCI (NC)</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            게임 및 웹 서비스 운영 중 발생하는 장애 상황을
            <ColorDot>*</ColorDot>실시간으로 확인, 추적, 관리하여 선제적인
            대응과 빠른 인지를 가능하게 하는 장애 모니터링 시스템을 Next.js
            기반으로 구축하고, 기존 업무 요청/처리 시스템(NSD)과 통합된 관리자
            페이지를 개발하여 운영 효율성을 극대화하는 것을 목표로
            진행되었습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>

      <Detail>
        <Detail.title>Check</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            <ColorDot>*</ColorDot> Next.js: 현대적인 웹 애플리케이션 개발을 위한
            React 프레임워크
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>*</ColorDot> 장애 관리 시스템: 실시간 알림, 상태 변화
            모니터링, 이력 관리, 조치 내역 기록 기능
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>*</ColorDot>Solid Pattern & Compound Pattern: 공용 UI
            컴포넌트 리팩토링
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>*</ColorDot> 디자인 토큰: UI 스타일 및 테마를 중앙
            집중식으로 관리
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>*</ColorDot>Turborepo & pnpm: 모노레포 기반 프로젝트 관리
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>*</ColorDot> Module Federation: Next.js 앱 간 런타임 코드
            공유
          </Text.subDesc>
        </Detail.desc>
      </Detail>

      <div className="bg-c-box-layout-color rounded-c-border-radius p-c-padding  ">
        <div className="relative group h-fit overflow-hidden ">
          <div className="hover:blur-lg transition duration-300">
            <Marquee />
            <Marquee direction="right" />
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
            <div className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
              <p className="text-center text-lg font-semibold text-gray-900 bg-white/80 px-4 py-2 rounded shadow-md">
                올라오는 텍스트
              </p>
            </div>
          </div>
        </div>
      </div>
      <Detail>
        <Detail.title>keyPoint1 </Detail.title>
        <Detail.desc>
          <Text.subTitle>공용 UI 컴포넌트 리팩토링</Text.subTitle>
          <Text.subDesc>
            기존 공용 UI 컴포넌트의 유지보수성과 확장성 한계를 극복, 재사용성과
            유연성을 높이기 위해{" "}
            <ColorDot>Solid Pattern, Compound Pattern</ColorDot>을 적용하여
            컴포넌트 구조를 재설계했습니다.
          </Text.subDesc>
          <Text.subDesc>
            각 컴포넌트의 책임을 명확히 분리하고
            <ColorDot>(Solid)</ColorDot>, 내부 서브 컴포넌트 간의 유기적인
            조합과 제어를 가능하게 하여 <ColorDot>(Compound) </ColorDot>다양한
            UI 요구사항에 효과적으로 대응할 수 있도록 개선했습니다.
          </Text.subDesc>
          <Text.subDesc>
            또한,<ColorDot>디자인 토큰</ColorDot> 을 도입하여 UI 스타일 및
            테마를 중앙 집중식으로 관리함으로써 디자인 일관성을 더욱 강화하고
            유지보수 효율성을 높였습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>
      <div className="flex gap-c-gap-xxl ">
        <Detail className="flex-1/2">
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>SOLID 원칙의 중요성</ColorDot>: 단일 책임 원칙(SRP)을
              준수함으로써 변경에 대한 영향을 최소화할 수 있음을 확인했습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>Compound Component 패턴의 유용성</ColorDot>: 복잡한 UI
              구조에서 유연한 커스터마이징 옵션을 제공하여 컴포넌트의 활용도를
              높일 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>디자인 토큰의 효과</ColorDot>: 색상, 폰트, 간격 등 UI
              스타일 요소를 토큰으로 관리함으로써 일관된 디자인 시스템을
              구축하고, 테마 변경 및 유지보수를 용이하게 할 수 있었습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>

        <Detail className="flex-1/2">
          <Detail.title>Feel so good</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              기존 컴포넌트 구조의 개선과 더불어
              <ColorDot>디자인 토큰</ColorDot> 도입을 통해 코드의 가독성,
              유지보수성, 디자인 일관성이 더욱 크게 향상되었음을 체감했습니다.
            </Text.subDesc>
            <Text.subDesc>
              처음에는 패턴 적용과 디자인 토큰 설정에 대한 이해와 설계에
              어려움이 있었지만, 점진적인 리팩토링 과정을 통해{" "}
              <ColorDot>SOLID 원칙</ColorDot>,
              <ColorDot>Compound Pattern</ColorDot>, 그리고{" "}
              <ColorDot>디자인 토큰</ColorDot>의 장점을 명확히 이해하고 실제
              개발에 효과적으로 적용할 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              이 경험을 통해 앞으로 UI 개발 시 유지보수성, 확장성, 그리고 디자인
              시스템의 효율적인 관리를 최우선으로 고려하는 설계 방식을
              습관화해야겠다고 다짐했습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>

      <Detail>
        <Detail.title>keyPoint2</Detail.title>
        <Detail.desc>
          <Text.subTitle>
            모노레포 기반 아키텍처 및 Module Federation 도입
          </Text.subTitle>

          <Text.subDesc>
            프로젝트의 효율적인 관리와 팀 협업 증진을 위해Turborepo와 pnpm을
            활용한 <ColorDot>모노레포 아키텍처</ColorDot>를 도입하고, 독립적인
            배포 및 서비스 통합을 위해 <ColorDot>Module Federation</ColorDot>을
            적용했습니다.
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>모노레포</ColorDot>를 통해 장애 관리 시스템과 관리자
            페이지를 독립적으로 개발하면서도 공통 코드(유틸리티, 타입, UI
            컴포넌트, 디자인 토큰)를 효율적으로 공유하고 관리할 수 있게
            되었으며,
          </Text.subDesc>
          <Text.subDesc>
            <ColorDot>Module Federation</ColorDot>을 통해 서로 다른 Next.js 앱
            간에 UI/UX 일관성을 유지하면서도 독립적인 배포 및 확장이 가능한
            마이크로 프론트엔드 구조를 구축했습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>
      <div className="flex gap-c-gap-xxl ">
        <Detail className="flex-1/2">
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>모노레포</ColorDot>: 여러 프로젝트 간의 의존성 관리,
              코드 공유, 빌드 및 배포 관리를 효율적으로 수행할 수 있으며, 개발
              생산성과 협업 효율성을 높일 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>Module Federation</ColorDot>: 여러 개의 프론트엔드
              애플리케이션을 하나의 통합된 사용자 경험으로 제공할 수 있으며,
              서비스 확장성과 유지보수성을 향상시킬 수 있음을 확인했습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>기존 방식과의 비교</ColorDot>: 기존 UI 라이브러리 배포
              방식의 번거로움을 해결하고, 공용 컴포넌트 및 디자인 토큰 수정 시
              즉각적인 반영이 가능해져 개발 효율성이 크게 향상되었습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>

        <Detail className="flex-1/2">
          <Detail.title>Feel so good</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>모노레포와 Module Federation</ColorDot>을 도입하는
              과정에서 초기 설정 및 각 기술에 대한 이해가 필요했지만, 구축 후
              얻을 수 있는 개발 효율성, 유지보수성, 확장성의 이점을 명확히
              확인할 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              앞으로도 <ColorDot>MSA</ColorDot> 환경에서의 효율적인 프론트엔드
              개발 및 운영 방안에 대해 지속적으로 학습하고 적용해 나가야겠다고
              생각했습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>
    </>
  );
}
