"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function ThemeToggleButton() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="lg:px-4 py-2 cursor-pointer">
        <div className="relative w-[40px] h-[40px]">
          <Image fill src="/images/darkmode.png" alt="테마 변경" />
        </div>
      </button>
    );
  }

  return (
    <button onClick={toggleTheme} className="lg:px-4 py-2 cursor-pointer">
      {theme === "dark" ? (
        <div className="relative w-[40px] h-[40px]">
          <Image fill src="/images/lightmode.png" alt="라이트 모드로 변경" />
        </div>
      ) : (
        <div className="relative w-[40px] h-[40px]">
          <Image fill src="/images/darkmode.png" alt="다크 모드로 변경" />
        </div>
      )}
    </button>
  );
}
