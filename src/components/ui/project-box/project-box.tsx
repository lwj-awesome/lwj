import Link from "next/link";
import { CommonComponentsProps } from "@/types/types";
import { projectContentStyle, projectLayoutStyle } from "./project-box-styles";

export default function Project({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href}>
      <div className={projectLayoutStyle}>{children}</div>
    </Link>
  );
}

function Image({ src }: { src: string }) {
  return <img src={src} alt="" width="280" />;
}

function Content({ children }: CommonComponentsProps) {
  return <div className={projectContentStyle}>{children}</div>;
}

Project.img = Image;
Project.content = Content;
