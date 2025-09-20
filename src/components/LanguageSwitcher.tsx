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

  const flag = currentLocale === "tr" ? "🇺🇸" : "🇹🇷";

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-slate-900 underline dark:border-slate-900 rounded-md p-2 dark:hover:text-slate-100 transition-colors duration-200 cursor-pointer"
    >
      {flag} {displayText}
    </button>
  );
}
