import Text from "@/components/atom/text-module/text-module";
import Project from "@/components/ui/project-box/project-box";

export function Giggy() {
  return (
    <Project href="/detail/giggy">
      <Project.img src="/images/giggy/giggy-main.png" />
      <Project.content>
        <Text.subTitle>giggy</Text.subTitle>
        <Text.description>
          호주 내 구인 및 구직 연결을 효율적으로 지원하기 위해 Next.js App
          Router 기반으로 개발된 프로젝트입니다. 디자인 토큰과 shadcn/ui를
          활용한 공통 컴포넌트로 서비스 전반의 일관성을 확보하고, 호주
          현지인과의 회의를 통해 수집한 요구사항을 반영하여 직관적인 사용자
          경험을 제공했습니다.
        </Text.description>
      </Project.content>
    </Project>
  );
}
