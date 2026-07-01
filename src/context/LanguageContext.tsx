"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { tr } from "@/dictionaries/tr";
import { en } from "@/dictionaries/en";
import { usePathname, useRouter } from "next/navigation";

type Language = "tr" | "en";

const dictionaries = { tr, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang = "tr" }: { children: React.ReactNode; lang?: string }) {
  const [language, setLanguageState] = useState<Language>((lang === "tr" || lang === "en" ? lang : "tr") as Language);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (lang === "tr" || lang === "en") {
      setLanguageState(lang);
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("polimelo_lang", newLang);
    document.documentElement.setAttribute("lang", newLang);
    
    // Update the pathname with the new language prefix
    const segments = pathname.split("/");
    if (segments[1] === "tr" || segments[1] === "en") {
      segments[1] = newLang;
      router.push(segments.join("/"));
    } else {
      // If there is no lang prefix in pathname (e.g. root redirection page)
      router.push(`/${newLang}${pathname === "/" ? "" : pathname}`);
    }
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

