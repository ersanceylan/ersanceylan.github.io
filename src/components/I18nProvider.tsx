"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useLocale } from "@/hooks/useLocale";

interface I18nContextType {
  t: (key: string, namespace?: string) => string;
  locale: string;
  switchLocale: (locale: string) => void;
  isLoaded: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface Messages {
  [key: string]: any;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { locale, switchLocale, isLoaded: localeLoaded } = useLocale();
  const [messages, setMessages] = useState<Messages>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messageModule = await import(`../messages/${locale}.json`);
        setMessages(messageModule.default);
        setIsLoaded(true);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        // Fallback to English
        try {
          const fallbackModule = await import(`../messages/en.json`);
          setMessages(fallbackModule.default);
          setIsLoaded(true);
        } catch (fallbackError) {
          console.error("Failed to load fallback messages", fallbackError);
        }
      }
    };

    if (localeLoaded) {
      loadMessages();
    }
  }, [locale, localeLoaded]);

  const t = (key: string, namespace?: string) => {
    if (!messages) return key;

    const keys = namespace ? `${namespace}.${key}` : key;
    const keyPath = keys.split(".");

    let value = messages;
    for (const k of keyPath) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider
      value={{ t, locale, switchLocale, isLoaded: isLoaded && localeLoaded }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslations must be used within an I18nProvider");
  }

  return (key: string) => context.t(key, namespace);
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
