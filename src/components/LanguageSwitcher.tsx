"use client";

import { useI18n } from "@/components/I18nProvider";
import { FaLanguage } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { locale: currentLocale, switchLocale } = useI18n();

  const handleLanguageSwitch = () => {
    const newLocale = currentLocale === "tr" ? "en" : "tr";
    switchLocale(newLocale);
  };

  const displayText = currentLocale === "tr" ? "english" : "türkçe";

  // const flag = currentLocale === "tr" ? "🇺🇸" : "🇹🇷";

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2 text-sm font-medium text-slate-100 underline rounded-md p-2 transition-colors duration-200 cursor-pointer"
    >
      <FaLanguage className="mr-2" />
      <span className="text-sm">{displayText}</span>
    </button>
  );
}

{
  /* <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-sm font-medium text-slate-100 underline rounded-md p-2 transition-colors duration-200 cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
      {t("darkMode")}
    </button> */
}
