import { CommonComponentsProps } from "@/types/types";
import Text from "../text-module/text-module";
import { experienceLayout } from "./experience-box.style";

export default function ExperienceBox({ children }: CommonComponentsProps) {
  return <div className={experienceLayout}>{children}</div>;
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
