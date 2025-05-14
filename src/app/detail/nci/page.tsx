import Text from "@/components/ui/text-module/text-module";
import Marquee from "@/components/ui/marquee/marquee";
import {
  commonContentStyle,
  commonImageStyle,
  detailLayoutStyle,
  firstArticleStyle,
  secondArticleStyle,
  thirdArticleStyle,
} from "../common.styles";

export default function Page() {
  return (
    <div className={detailLayoutStyle}>
      <Text.title>A B C D E</Text.title>
      <article className={firstArticleStyle}>
        <img className={commonImageStyle} src="/images/see.jpg" alt="" />
        <div className={commonContentStyle}>
          <Text.subTitle>
            장애 관리 시스템 및 통합 관리자 페이지 구축
          </Text.subTitle>
          <Text.description>
            게임 및 웹 서비스 운영 중 발생하는 장애 상황을 실시간으로 확인,
            추적, 관리할 수 있는 장애 모니터링 시스템을 Next.js 기반으로
            구축하였습니다.
          </Text.description>
          <Text.description>
            시스템은 장애 발생 시 실시간 알림, 상태 변화 모니터링, 장애 이력
            확인 및 상세 조회, 조치 내역 기록 등의 기능으로 구성되었으며, 장애
            발생에 대한 선제 대응 및 빠른 인지가 가능하도록 설계했습니다. 또한
            기존에 구축했던 업무 요청/처리 시스템과 통합된 관리자 페이지를
            별도로 개발하여, 운영 담당자가 하나의 인터페이스에서 모든 관리
            업무를 수행할 수 있도록 UX 흐름을 통일하였습니다. 통합 관리자
            페이지에서는 장애 이력 관리, 업무 요청 현황 확인, 상태 변경 처리 등
            복수의 ITSM 업무를 통합적으로 제어할 수 있어 운영 효율성을
            높였습니다.
          </Text.description>
        </div>
      </article>
      <Marquee />

      <article className={secondArticleStyle}>
        <div className={commonContentStyle}>
          <Text.subTitle>
            공용 UI 컴포넌트 마이그레이션 (Solid & Compound Pattern 적용)
          </Text.subTitle>
          <Text.description>
            기존 프로젝트에서 구축한 Input, Select, Modal 등의 공통 UI
            컴포넌트를 Solid Pattern, Compound Pattern에 기반하여 구조적으로
            리팩토링하였습니다.
          </Text.description>
          <Text.description>
            Solid 패턴을 통해 각 컴포넌트가 단일 책임 원칙을 명확히 따르도록
            구조를 분리하였고, Compound 패턴을 도입하여 하위 요소 간의 조합과
            제어를 유연하게 구성할 수 있도록 개선했습니다. 예를 들어, Select
            컴포넌트는 내부적으로 SelectTrigger, SelectOption, SelectList 등의
            서브 컴포넌트로 나뉘며, 유연하게 커스터마이징 가능한 구조를 통해
            다양한 화면 요구사항에 대응할 수 있도록 했습니다. 또한 상태 제어,
            포커스 이동, 유효성 처리 등 사용자 경험을 고려한 내부 로직을
            컴포넌트에 내장함으로써, 사용성과 유지보수성을 동시에
            향상시켰습니다.
          </Text.description>
        </div>
        <img className={commonImageStyle} src="images/see.jpg" alt="" />
      </article>
      <Marquee direction="right" />

      <article className={thirdArticleStyle}>
        <img className={commonImageStyle} src="images/see.jpg" alt="" />
        <div className={commonContentStyle}>
          <Text.subTitle>
            모노레포 기반 아키텍처 및 Module Federation 도입
          </Text.subTitle>

          <Text.description>
            전체 프로젝트는 Turborepo와 pnpm을 활용한 모노레포 구조로
            관리하였으며, 이를 통해 장애 관리 시스템과 관리자 페이지를 각각
            독립적으로 개발, 테스트, 배포할 수 있도록 구성했습니다. 각 앱은
            자체적인 도메인을 가지되, 내부적으로는 공통 유틸리티, 타입 정의, UI
            컴포넌트를 공유할 수 있도록 packages/ 단위로 구성하여 중복 방지와
            통일성을 확보했습니다.
          </Text.description>
          <Text.description>
            특히 Module Federation을 도입하여, 서로 다른 Next.js 앱 간
            런타임에서의 코드 공유 및 마이크로 프론트엔드 구조를 구현하였으며,
            이를 통해 각 앱을 독립적으로 배포하면서도 서비스 상에서는 일관된
            UI/UX를 유지할 수 있도록 하였습니다. 이러한 구조는 기능별 책임 분리,
            배포 속도 향상, 서비스 확장성 확보에 크게 기여하였으며, 실제 운영
            환경에서도 안정적인 병합 및 서비스 연결을 가능하게 했습니다.
          </Text.description>
        </div>
      </article>
    </div>
  );
}
