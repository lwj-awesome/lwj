import Link from "next/link";
import { CommonComponentsProps } from "@/types/types";
import { Box } from "@/components/atom/box/box-layout";
import Image from "next/image";

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
      <Box
        colorType="none"
        className="h-[420px] flex flex-col gap-c-gap-lg items-center"
      >
        {children}
      </Box>
    </Link>
  );
}

function ImageComponent({ src }: { src: string }) {
  return <Image src={src} width={200} height={200} alt="" />;
}

function Content({ children }: CommonComponentsProps) {
  return (
    <div className="flex flex-col gap-c-gap-md items-center">{children}</div>
  );
}

Project.img = ImageComponent;
Project.content = Content;
