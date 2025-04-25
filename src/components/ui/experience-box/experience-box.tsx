import { CommonComponentsProps } from "@/types/types";
import styles from "./experience-box.module.css";

export default function ExperienceBox({ children }: CommonComponentsProps) {
  return <div className={styles.box_layout}>{children}</div>;
}

function ExperienceTitle({ children }: CommonComponentsProps) {
  return <div className={styles.box_title}>{children}</div>;
}

function ExperienceContent({ children }: CommonComponentsProps) {
  return <span className={styles.box_content}>{children}</span>;
}

ExperienceBox.Title = ExperienceTitle;
ExperienceBox.Content = ExperienceContent;
