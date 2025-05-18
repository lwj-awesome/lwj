import Text from "@/components/atom/text-module/text-module";
import Project from "@/components/ui/project-box/project-box";

//  <Project.ImageBox src="/images/servicedesk2.png" />
export function ServiceDesk() {
  return (
    <Project href="/detail/nsd">
      <Project.img src="/images/servicedesk2.png" />
      <Project.content>
        <Text.subTitle>Rock-Paper-Scissors Game</Text.subTitle>
        <Text.description>
          Created an interactive Rock Paper Scissors game with HTML, CSS, and
          JavaScript. This project was a great learning experience in building
          dynamic web applications.
        </Text.description>
      </Project.content>
    </Project>
  );
}
