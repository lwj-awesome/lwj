import Link from "next/link";
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
      <div className="flex flex-col gap-custom-gap-md">{children}</div>
    </Link>
  );
}

function Image() {
  return (
    <div className="h-[32rem] rounded-custom-border-radius border-1"></div>
  );
}
// function Image({ children }: CommonComponentsProps) {
//   return <div className={styles.project_imageLayout}></div>;
// }

function Title({ children }: CommonComponentsProps) {
  return (
    <Text.subTitle className="flex justify-between">{children}</Text.subTitle>
  );
}

function Description({ children }: CommonComponentsProps) {
  return (
    <Text as="h3" size="base" weight="bold">
      {children}
    </Text>
  );
}

Project.Image = Image;
Project.Title = Title;
Project.desc = Description;
