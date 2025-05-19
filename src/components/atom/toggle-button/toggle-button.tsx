"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="lg:px-4 py-2 cursor-pointer">
      {theme === "dark" ? (
        <div className="relative w-[40px] h-[40px]">
          <Image fill src="/images/lightmode.png" alt="" />
        </div>
      ) : (
        <div className="relative w-[40px] h-[40px]">
          <Image fill src="/images/darkmode.png" alt="" />
        </div>
      )}
    </button>
  );
}
