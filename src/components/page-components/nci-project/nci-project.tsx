import Project from "@/components/ui/project-box/project-box";
import Text from "../../atom/text-module/text-module";

export function Nci() {
  return (
    <Project href="/detail/nci">
      <Project.img src="/images/nci2.png" />
      <Project.content>
        <Text.subTitle>NCI 장애관리 시스템</Text.subTitle>
        <Text.description>
          게임 및 웹 서비스 장애 상황을 실시간으로 모니터링하고 추적할 수 있는
          관리 시스템을 Next.js App Router 기반으로 구축한 프로젝트입니다.
          디자인 토큰과 순수 구현 애니메이션, Compound Pattern을 적용하여
          운영진이 직관적으로 사용할 수 있는 효율적인 관리자 페이지를
          개발했습니다.
        </Text.description>
      </Project.content>
    </Project>
  );
}
