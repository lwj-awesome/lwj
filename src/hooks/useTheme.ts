"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "light";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (!theme) return;
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme: theme || "light", toggleTheme };
}
