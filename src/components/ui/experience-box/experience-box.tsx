import { CommonComponentsProps } from "@/types/types";
import styles from "./experience-box.module.css";
import Text from "../text-module/text-module";

export default function ExperienceBox({ children }: CommonComponentsProps) {
  return <div className={styles.box_layout}>{children}</div>;
}

function ExperienceTitle({ children }: CommonComponentsProps) {
  return <Text.subTitle className={styles.box_title}>{children}</Text.subTitle>;
}

function ExperienceContent({ children }: CommonComponentsProps) {
  return (
    <Text.description className={styles.box_content}>
      {children}
    </Text.description>
  );
}

ExperienceBox.Title = ExperienceTitle;
ExperienceBox.Content = ExperienceContent;
