import clsx from "clsx";

export const headerStyle = clsx("w-full", "fixed", "z-1", "mt-[30px]");

export const headerMainStyle = clsx(
  "sm:w-[65vw]",
  "w-[80vw]",
  "h-[80px]",
  "mx-auto",
  "flex",
  "justify-between",
  "items-center",
  "sm:px-[30px]",
  "sm:gap-[8rem]",
  "bg-custom-header-bg-color",
  "rounded-custom-border-radius"
);

export const headerContentStyle = clsx(
  "sm:flex",
  "sm:flex-row",
  "sm:gap-[4rem]",
  "sm:items-center",
  "hidden"
);

export const headerMobileContentStyle = clsx(
  "sm:hidden",
  "flex",
  "flex-row",
  "justify-between",
  "items-center"
);
