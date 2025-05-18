import { BlurMarquee } from "@/components/ui/marquee/marquee";
import Text from "@/components/atom/text-module/text-module";
import { Detail } from "@/components/ui/detail-item/detail-item";
import { ColorDot } from "@/components/atom/color-dot";
import { LogoType } from "@/types/types";

export default function Page() {
  const exceptSkill: LogoType[] = ["Next.js", "Tailwind Css", "MFA"];
  return (
    <>
      <Detail>
        <Detail.title>ITSM NSD (NC)</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            본 프로젝트는 IT 서비스 운영에 필요한 업무 요청 및 관리 기능을
            효율적으로 지원하기 위해 React 기반으로 개발되었습니다.{" "}
            <ColorDot>*</ColorDot>공통 UI 컴포넌트를
          </Text.subDesc>
          <Text.subDesc>
            적극적으로 활용하여 서비스 전반의 일관성을 확보하고 재사용성을
            높였으며, React Query를 통해 데이터 관리의 안정성을 강화했습니다.
            특히,
          </Text.subDesc>
          <Text.subDesc>
            다양한 업무 유형에 맞춘 요청서 템플릿과 전용 입력 컴포넌트 개발을
            통해 사용자 편의성을 증대시키고 업무 처리 과정을 표준화하는 데
            중점을 두었습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>

      <div className="flex  gap-c-gap-xxl">
        <Detail className="flex-1/2">
          <Detail.title>Check</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> React: 사용자 인터페이스 구축을 위한
              JavaScript 라이브러리
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 공통 UI 컴포넌트: Input, Select, Modal 등
              재사용 가능한 UI 요소
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> Storybook: UI 컴포넌트 개발 및 문서화 도구
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>*</ColorDot> 요청서 템플릿: 업무 유형별 입력 항목,
              유효성 규칙, 조건부 렌더링 정의
            </Text.subDesc>
          </Detail.desc>
        </Detail>
        <Detail className="flex-1/2">
          <Detail.title>keyPoint</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              프로젝트 전반의 디자인
              <ColorDot>일관성 확보, UX 표준화, 재사용성 향상</ColorDot>을
              목표로 Input, Select, Modal 등 자주 사용되는 UI 요소를 공통
              컴포넌트로 구축했습니다.
            </Text.subDesc>
            <Text.subDesc>
              단순 스타일 통일을 넘어 유효성 검증, 에러 메시지 처리, 포커스 관리
              등 사용자 경험을 고려한 로직을 내부에 통합하여 개발자와 사용자
              모두에게 편리한 구조를 설계했습니다.
            </Text.subDesc>
            <Text.subDesc>
              Storybook을 활용하여 구축된 컴포넌트를 시각적으로 문서화하고
              다양한 사용 예시를 제공하여 팀 내 협업 효율성을 높였습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>

      <BlurMarquee exceptSkill={exceptSkill} />

      <div className="flex gap-c-gap-xxl">
        <Detail>
          <Detail.title>Learn</Detail.title>
          <Detail.desc>
            <Text.subDesc>
              <ColorDot>UI 모듈화 및 재사용성의 중요성</ColorDot>: 공통 컴포넌트
              구축을 통해 중복 코드 작성을 줄이고 개발 속도를 향상시킬 수
              있었으며, 유지보수 시 효율성을 크게 높일 수 있음을 확인했습니다
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>디자인 시스템 구축의 필요성</ColorDot>: 디자이너와의
              긴밀한 협업을 통해 컬러 팔레트, 타이포그래피, 인터랙션 규칙 등
              디자인 시스템의 기반을 마련하고 이를 코드에 반영함으로써 일관된
              UI를 구현하고 팀 내 디자인 가이드라인을 확립할 수 있었습니다.
            </Text.subDesc>
            <Text.subDesc>
              <ColorDot>Storybook의 효과적인 활용</ColorDot>: 컴포넌트의 시각적
              문서화는 개발자와 디자이너 간의 이해도를 높이고 효율적인
              커뮤니케이션을 가능하게 했으며, 신규 팀원의 학습 곡선을 낮추는
              데에도 기여했습니다.
            </Text.subDesc>
          </Detail.desc>
        </Detail>
      </div>
      <Detail>
        <Detail.title>Feel so good</Detail.title>
        <Detail.desc>
          <Text.subDesc>
            공통 UI 컴포넌트 구축 경험을 통해 UI 개발에서 재사용 가능한 컴포넌트
            설계가 개발 생산성과 유지보수성에 미치는 긍정적인 영향을 깊이
            체감했습니다.
          </Text.subDesc>
          <Text.subDesc>
            컴포넌트를 명확한 책임과 일관된 인터페이스를 가진 단위로
            추상화함으로써 코드의 중복을 줄이고, 신규 기능 개발 시 컴포넌트
            조합만으로 빠르게 UI를 구성할 수 있었습니다
          </Text.subDesc>
          <Text.subDesc>
            이 경험을 바탕으로 앞으로 UI 개발 시 컴포넌트 기반의 아키텍처를
            적극적으로 활용하고, 디자인 시스템과의 연계를 강화하여 더욱
            효율적이고 확장 가능한 개발 환경을 구축해 나가야겠다고 생각했습니다.
          </Text.subDesc>
        </Detail.desc>
      </Detail>
    </>
  );
}
