import clsx from "clsx";

export const boxLayout = (color: boolean) =>
  clsx(
    "min-w-[350px]",
    "rounded-custom-border-radius",
    `${color ? "bg-custom-point-color" : "bg-custom-box-bg-color"}`,
    "p-custom-padding"
  );
