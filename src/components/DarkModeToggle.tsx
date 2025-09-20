"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "./I18nProvider";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const t = useTranslations("theme");

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-sm font-medium text-slate-100 underline rounded-md p-2 transition-colors duration-200 cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
      {t("darkMode")}
    </button>
  );
}
