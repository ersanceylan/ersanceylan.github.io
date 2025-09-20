"use client";

import { useState, useEffect } from "react";
const defaultLocale = "en";

export function useLocale() {
  const [locale, setLocale] = useState(defaultLocale);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check localStorage first
    const savedLocale = localStorage.getItem("preferred-locale");
    if (savedLocale && (savedLocale === "en" || savedLocale === "tr")) {
      setLocale(savedLocale);
      setIsLoaded(true);
      return;
    }

    // Detect from browser language
    const browserLanguage = navigator.language.toLowerCase();
    let detectedLocale = defaultLocale;

    if (browserLanguage.startsWith("tr")) {
      detectedLocale = "tr";
    } else if (browserLanguage.startsWith("en")) {
      detectedLocale = "en";
    }

    setLocale(detectedLocale);
    localStorage.setItem("preferred-locale", detectedLocale);
    setIsLoaded(true);
  }, []);

  const switchLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem("preferred-locale", newLocale);
    // Force page reload to apply new locale
    window.location.reload();
  };

  return { locale, switchLocale, isLoaded };
}
