import Text from "@/components/atom/text-module/text-module";
import Project from "@/components/ui/project-box/project-box";

//  <Project.ImageBox src="/images/servicedesk2.png" />
export function ServiceDesk() {
  return (
    <Project href="/detail/nsd">
      <Project.img src="/images/servicedesk2.png" />
      <Project.content>
        <Text.subTitle>ITSM-SERVICE-DESK</Text.subTitle>
        <Text.description>
          IT 서비스 운영에 필요한 업무 요청 및 관리 기능을 효율적으로 지원하기
          위해 Next.js App Router 기반으로 개발된 프로젝트입니다. 디자인 토큰과
          Compound Pattern을 활용한 공통 컴포넌트로 서비스 전반의 일관성을
          확보하고, 순수 구현 애니메이션을 통해 직관적인 사용자 경험을
          제공했습니다.
        </Text.description>
      </Project.content>
    </Project>
  );
}
