import clsx from "clsx";

export const headerMainStyle = clsx(
  "h-[80px]",
  "flex",
  "justify-between",
  "items-center",
  "sm:px-[30px]",
  "sm:gap-[2rem]",
  "bg-custom-header-bg-color",
  "rounded-custom-border-radius"
);

export const headerContentStyle = clsx(
  "flex",
  "flex-row",
  "gap-[4rem]",
  "items-center"
);

export const headerMobileContentStyle = clsx(
  "sm:hidden",
  "flex",
  "flex-row",
  "justify-between",
  "items-center"
);
