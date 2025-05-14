import clsx from "clsx";

export const commonImageStyle = clsx(
  "rounded-custom-image-radius",
  "h-[30rem]",
  "w-[30rem]",
  "h-[20rem]",
  "w-full"
);
export const commonContentStyle = clsx(
  "flex",
  "flex-col",
  "gap-custom-gap-lg",
  "px-[2rem]",
  "w-full"
);

export const detailLayoutStyle = clsx("p-[10rem]", "animate-fadeUp", "w-full");

export const firstArticleStyle = clsx("flex", "flex-row", "gap-custom-gap-md");

export const secondArticleStyle = clsx(
  "flex",
  "flex-row",
  "gap-[1.2rem]",
  "mt-[4rem]"
);

export const thirdArticleStyle = clsx(
  "flex",
  "flex-row",
  "gap-custom-gap-md",
  "mt-[4rem]"
);
