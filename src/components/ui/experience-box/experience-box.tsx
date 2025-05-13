import { CommonComponentsProps } from "@/types/types";
import Text from "../text-module/text-module";

export default function ExperienceBox({ children }: CommonComponentsProps) {
  return (
    <div className="border-1 border-custom-border-color rounded-custom-border-radius min-h-[10rem] p-custom-padding flex flex-col gap-custom-gap-lg">
      {children}
    </div>
  );
}

function ExperienceTitle({ children }: CommonComponentsProps) {
  return (
    <Text.subTitle className="flex justify-between">{children}</Text.subTitle>
  );
}

function ExperienceContent({ children }: CommonComponentsProps) {
  return <Text.description>{children}</Text.description>;
}

ExperienceBox.Title = ExperienceTitle;
ExperienceBox.Content = ExperienceContent;
