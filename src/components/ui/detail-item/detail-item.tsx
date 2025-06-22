import Text from "@/components/atom/text-module/text-module";
import { CommonComponentsProps } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";

export function Detail({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <div className={clsx(`flex flex-col gap-c-gap-lg my-10`, className)}>
      {children}
    </div>
  );
}

function HilightTitle({ children }: { children: string }) {
  return (
    <div className="w-fit border-b-10 border-b-c-border-color pb-c-padding-md">
      <Text.title>{children}</Text.title>
    </div>
  );
}
function Description({ children }: CommonComponentsProps) {
  return <div className="flex flex-col gap-c-gap-md">{children}</div>;
}

function ImageComponent({
  src,
  clasName,
  width = 200,
  height = 200,
}: {
  src: string;
  clasName?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={clsx("flex items-center justify-center", clasName)}>
      <Image src={src} width={width} height={height} alt="" />
    </div>
  );
}

Detail.title = HilightTitle;
Detail.desc = Description;
Detail.img = ImageComponent;
