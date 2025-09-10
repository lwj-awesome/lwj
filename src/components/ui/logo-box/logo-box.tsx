import { Box, Text } from "@/components/ui";
import { LogoType } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";

interface LogoBoxProps {
  src: string;
  name: LogoType;
  except: LogoType[] | undefined;
}
export function LogoBox({ src, name, except }: LogoBoxProps) {
  return (
    <div className={clsx(except && except.includes(name) && "hidden")}>
      <Box
        colorType="box"
        className={clsx(
          "flex justify-around gap-c-gap-md items-center w-[100px] lg:w-[210px] h-[80px] px-3"
        )}
      >
        <Image src={src} width={50} height={50} alt="" />
        <Text.subTitle className="hidden lg:block">{name}</Text.subTitle>
      </Box>
    </div>
  );
}
