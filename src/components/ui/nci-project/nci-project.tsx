import Project from "../project-box/project-box";
import Text from "../text-module/text-module";

export function Nci() {
  return (
    <Project href="/detail/nci">
      <Project.img src="/images/nci2.png" />
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
