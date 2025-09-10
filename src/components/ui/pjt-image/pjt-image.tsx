import { Text } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

type ProjectImageType = Record<"src" | "title" | "width" | "href", string>;
export function ProjectImage({ href, title, src }: ProjectImageType) {
  const commonStyle = `p-4 gap-1   w-full  h-[350px] bg-c-box-bg-color flex flex-col  items-center   rounded-c-border-radius`;
  return (
    <Link className={commonStyle} href={href}>
      <div className="h-[95%] w-full">
        <Image
          width={300}
          height={300}
          alt=""
          src={src}
          className="object-cover w-full h-full rounded-c-border-radius"
        />
      </div>
      <Text.subTitle>{title}</Text.subTitle>
    </Link>
  );
}
