"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 cursor-pointer">
      {theme === "dark" ? (
        <img src="/images/lightmode.png" width={40} />
      ) : (
        <img src="/images/darkmode.png" width={40} />
      )}
    </button>
  );
}
