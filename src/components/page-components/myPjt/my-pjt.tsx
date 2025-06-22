import Text from "@/components/atom/text-module/text-module";
import Project from "@/components/ui/project-box/project-box";

export function MyPjt() {
  return (
    <Project href="/detail/myPjt">
      <Project.img width={300} src="/images/myPJT.png" />
      <Project.content>
        <Text.subTitle>MY PROJECT</Text.subTitle>
        <Text.description>
          Next.js App Router 기반으로 디자인 토큰, 순수 스크롤 애니메이션,
          Compound Pattern 등 현대적인 웹 개발 기법을 적용한 프로젝트입니다.
          라이브러리에 의존하지 않는 순수 구현을 통해 기술의 본질을 이해하고,
          체계적인 설계로 확장성과 재사용성을 확보했습니다.
        </Text.description>
      </Project.content>
    </Project>
  );
}
