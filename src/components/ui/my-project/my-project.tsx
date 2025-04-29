import Link from "next/link";
import styles from "./my-project.module.css";
import { CommonComponentsProps } from "@/types/types";
import Text from "../text-module/text-module";

export default function Project({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className={styles.project_content}>{children}</div>
    </Link>
  );
}

function Image() {
  return <div className={styles.project_imageLayout}></div>;
}
// function Image({ children }: CommonComponentsProps) {
//   return <div className={styles.project_imageLayout}></div>;
// }

function Title({ children }: CommonComponentsProps) {
  return (
    <Text.subTitle className={styles.project_title}>{children}</Text.subTitle>
  );
}

function Description({ children }: CommonComponentsProps) {
  return (
    <Text
      as="h3"
      size="base"
      weight="bold"
      className={styles.project_description}
    >
      {children}
    </Text>
  );
}

Project.Image = Image;
Project.Title = Title;
Project.desc = Description;
