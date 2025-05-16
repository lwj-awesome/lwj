import clsx from "clsx";

export const pictureLayoutStyle = clsx(
  "sm:w-full",
  "flex",
  "sm:flex-row",
  "sm:justify-around",
  "sm:items-center",
  "sm:p-custom-padding-xxl"
);

export const textLayoutStyle = clsx(
  "flex",
  "flex-col",
  "gap-custom-gap-md",
  "items-center"
);
export const dotStyle = clsx("text-custom-point-color");

export const pictureImgStyle = clsx(
  "sm:w-[20rem]",
  "sm:h-[20rem]",
  "sm:rounded-custom-border-radius",
  "sm:border-3 border-custom-point-color",
  "sm:block",
  "hidden"
);
