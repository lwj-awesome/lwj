import Text from "@/components/atom/text-module/text-module";
import Image from "next/image";
import Link from "next/link";

type ProjectImageType = Record<"src" | "title" | "width" | "href", string>;
export function ProjectImage({ href, title, src, width }: ProjectImageType) {
  const commonStyle = `p-4 gap-1 w-[${width}] h-[350px] bg-c-box-bg-color flex flex-col  items-center   rounded-c-border-radius`;
  return (
    <Link className={commonStyle} href={href}>
      <div className="h-[95%] w-full">
        <Image
          width={300}
          height={300}
          alt=""
          src={src}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-c-border-radius)",
          }}
        />
      </div>
      <Text.subTitle>{title}</Text.subTitle>
    </Link>
  );
}
