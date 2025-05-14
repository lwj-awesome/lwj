import Text from "@/components/ui/text-module/text-module";
import Marquee from "@/components/ui/marquee/marquee";
import {
  commonContentStyle,
  commonImageStyle,
  detailLayoutStyle,
  secondArticleStyle,
} from "../common.styles";

export default function Page() {
  return (
    <>
      <div className={detailLayoutStyle}>
        <Text.title>A B C D E</Text.title>
        <article className="flex flex-row  gap-custom-gap-md flex flex-col">
          <img className={commonImageStyle} src="images/see.jpg" alt="" />
          <div className={commonContentStyle}>
            <Text.subTitle>NSD ITSM SERVICEDESK</Text.subTitle>
            <Text.description>
              업무 요청 및 관리를 위한 ITSM NSD SERVICEDESK 개발 및 운영
            </Text.description>
            <Text.description>
              ITSM 서비스 내에서 업무 요청 및 관리 기능을 담당하는 서비스를
              React 기반으로 설계 및 구현하였습니다. 공통 UI 컴포넌트를
              적극적으로 활용하여 서비스 전반의 UI 일관성과 재사용성을
              확보하였고, 각 업무 성격에 맞는 요청서 템플릿 및 전용 입력
              컴포넌트를 개발하여 요청 처리의 표준화 및 업무 효율성 향상을
              도모했습니다.
            </Text.description>
            <Text.description>
              템플릿은 반복되는 요청 유형(예: 계정 생성, 접근 권한 부여 등)에
              맞춰 입력 항목, 유효성 규칙, 조건부 렌더링 로직 등을 정의하여
              설계하였고, 이에 따라 사용자는 간편하고 명확한 방식으로 요청을
              작성할 수 있도록 UX를 개선했습니다.
            </Text.description>
            <Text.description>
              요청 정보의 캐싱, 상태 관리, 비동기 처리 등은 React Query를 활용해
              구현하여 데이터 동기화와 사용자 경험의 안정성을 확보하였고, 각
              요청서와 연계된 컴포넌트는 지속적인 유지보수와 확장성을 고려해
              설계하였습니다. 전반적으로 ITSM 시스템의 핵심 가치인 표준화,
              일관성, 효율성을 반영한 기능 개발에 집중하여, 업무 프로세스의
              구조적 정리와 개발 생산성 개선에 기여했습니다.
            </Text.description>
          </div>
        </article>
        <Marquee />
        <Marquee direction="right" />

        <article className={secondArticleStyle}>
          <div className={commonContentStyle}>
            <Text.subTitle>ITSM SERVICEDESK with STORYBOOK</Text.subTitle>
            <Text.description>
              공용 UI 컴포넌트를 구축하여 디자인 일관성과 UX 표준화 달성,
              재사용성을 기반으로 유지보수 효율 향상
            </Text.description>
            <Text.description>
              프로젝트 전반의 디자인 일관성 확보와 UX 통일성을 위해 Input,
              Select, Modal 등 자주 사용되는 UI 요소를 공통 컴포넌트로
              추상화하였습니다. 단순히 스타일을 통일하는 수준을 넘어, 컴포넌트
              내부에 유효성 검증, 에러 메시지 출력, 포커스 이동 UX 등 실제 사용
              시 고려되어야 할 사용자 경험 요소까지 세심하게 반영하여, 개발자와
              사용자 모두에게 편리한 구조를 설계했습니다.
            </Text.description>
            <Text.description>
              디자이너와의 긴밀한 협업을 통해 컬러 팔레트, 타이포그래피,
              컴포넌트 간 인터랙션 규칙 등 디자인 시스템의 기반이 되는 규칙을
              정의하고 이를 코드에 반영하였으며, 이를 통해 팀 내에서 디자인
              가이드라인의 명확한 기준을 형성할 수 있었습니다. 특히, 구축한 공통
              컴포넌트들은 Storybook을 활용하여 시각적으로 문서화하고 컴포넌트별
              Props, 상태별 렌더링, 인터랙션 예시 등을 구조화함으로써,
              디자이너와 개발자 간의 피드백 루프를 단축하고 협업의 효율성을 크게
              향상시켰습니다.
            </Text.description>
            <Text.description>
              Storybook을 통해 신규 컴포넌트 도입 시 명확한 레퍼런스를 제공하고,
              컴포넌트 사용법 및 변형 가능한 형태를 명시함으로써, 팀원들이
              일관된 방식으로 UI를 활용하고 유지보수할 수 있도록 기여했습니다.
              이러한 공통 컴포넌트를 기반으로 신규 기능 또는 화면을 구현할 때
              일관된 UI를 빠르게 적용할 수 있었고, 추후 디자인 개편 시에도 단일
              컴포넌트 수정만으로 전체 서비스에 반영되어 유지보수 효율을 크게
              개선할 수 있었습니다. 결과적으로 개발 생산성, UI 품질, 유지보수성
              측면에서 긍정적인 효과를 가져왔으며, 구성원 간 협업 흐름 또한
              원활해지는 경험을 얻었습니다.
            </Text.description>
          </div>
          <img className={commonImageStyle} src="images/see.jpg" alt="" />
        </article>
      </div>
    </>
  );
}
