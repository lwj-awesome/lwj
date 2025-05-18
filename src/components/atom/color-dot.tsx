import { CommonComponentsProps } from "@/types/types";

export function ColorDot({ children }: CommonComponentsProps) {
  return <span className="text-c-point-color"> {children} </span>;
}
