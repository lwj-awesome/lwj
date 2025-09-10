import { CommonComponentsProps } from "@/types/types";
import clsx from "clsx";

interface Boxprops extends CommonComponentsProps {
  colorType: "header" | "box" | "point" | "img" | "none";
  className?: string;
}
export function Box({ children, colorType, className }: Boxprops) {
  const colorMap: Record<Boxprops["colorType"], string> = {
    header: "bg-c-header-bg-color",
    box: "bg-c-box-bg-color",
    point: "bg-c-point-color",
    img: "border-[3px] border-c-border-color",
    none: "bg-c-box-layout-color",
  };
  return (
    <div
      className={clsx(
        "rounded-c-border-radius p-4",
        colorMap[colorType],
        className
      )}
    >
      {children}
    </div>
  );
}
