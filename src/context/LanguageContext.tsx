"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { tr } from "@/dictionaries/tr";
import { en } from "@/dictionaries/en";

type Language = "tr" | "en";

const dictionaries = { tr, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read preference on client mount to prevent server hydration mismatches
    const storedLang = localStorage.getItem("polimelo_lang") as Language | null;
    if (storedLang === "tr" || storedLang === "en") {
      setLanguageState(storedLang);
      document.documentElement.setAttribute("lang", storedLang);
    } else {
      // Auto-detect browser language: if TR is preferred, use TR; otherwise default to EN
      const userLangs = navigator.languages || [navigator.language];
      const prefersTurkish = userLangs.some(lang => lang.toLowerCase().startsWith("tr"));
      const detected: Language = prefersTurkish ? "tr" : "en";
      
      setLanguageState(detected);
      document.documentElement.setAttribute("lang", detected);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("polimelo_lang", lang);
    document.documentElement.setAttribute("lang", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  // Safe translation resolver supporting nested paths (e.g., 'common.projects') and variables (e.g. {year})
  const t = (path: string, variables?: Record<string, string | number>): string => {
    const keys = path.split(".");
    let value: any = dictionaries[language];
    
    for (const key of keys) {
      if (value && typeof value === "object") {
        value = value[key];
      } else {
        return path;
      }
    }

    if (typeof value !== "string") {
      return path;
    }

    if (variables) {
      let result = value;
      for (const [varName, varVal] of Object.entries(variables)) {
        result = result.replace(new RegExp(`{${varName}}`, "g"), String(varVal));
      }
      return result;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
