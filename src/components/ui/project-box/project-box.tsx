import Link from "next/link";
import { CommonComponentsProps } from "@/types/types";
import Image from "next/image";

export default function Project({
  children,
  href,
  width,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  width?: string;
}) {
  const customStyle = `flex gap-5 w-[${width}] bg-c-box-bg-color rounded-c-border-radius`;
  return (
    <Link href={href}>
      <div className={customStyle}>{children}</div>
    </Link>
  );
}

function ImageComponent({
  src,
  width = 200,
  height = 200,
}: {
  src: string;
  width?: number;
  height?: number;
}) {
  return <Image src={src} width={width} height={height} alt="" />;
}

function Content({ children }: CommonComponentsProps) {
  return <div className=" ">{children}</div>;
}

Project.img = ImageComponent;
Project.content = Content;
