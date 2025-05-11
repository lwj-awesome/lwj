import Link from "next/link";
import { CommonComponentsProps } from "@/types/types";
import Text from "../text-module/text-module";
import clsx from "clsx";

export default function Project({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const baseStyle = "flex flex-col gap-custom-gap-md";
  return (
    <Link href={href}>
      <div className={clsx(baseStyle, className)}>{children}</div>
    </Link>
  );
}

function ImageBorder() {
  return (
    <div className="h-[32rem] rounded-custom-border-radius border-1"></div>
  );
}

function ImageBox({ src }: { src: string }) {
  return (
    <div className="w-[25vw] rounded-custom-border-radius border-1">
      <img src={src} alt="" width="100%" height="100%" />
    </div>
  );
}

function Title({ children }: CommonComponentsProps) {
  return (
    <Text.subTitle className="flex justify-between">{children}</Text.subTitle>
  );
}

function Description({
  children,
  hasBar = true,
}: CommonComponentsProps & { hasBar?: boolean }) {
  return (
    <Text as="h3" size="base" weight="bold">
      {hasBar && "-"} {children}
    </Text>
  );
}
function DescriptionGroup({ children }: CommonComponentsProps) {
  return <div className="flex flex-col gap-2 pt-2.5">{children}</div>;
}

Project.Image = ImageBorder;
Project.ImageBox = ImageBox;
Project.Title = Title;
Project.desc = Description;
Project.descGroup = DescriptionGroup;
