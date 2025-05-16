"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 cursor-pointer">
      {theme === "dark" ? (
        <Image width={40} height={40} src="/images/lightmode.png" alt="" />
      ) : (
        <Image width={40} height={40} src="/images/darkmode.png" alt="" />
      )}
    </button>
  );
}
