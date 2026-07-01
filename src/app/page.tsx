"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if there is a saved preference
    const storedLang = localStorage.getItem("polimelo_lang");
    if (storedLang === "tr" || storedLang === "en") {
      router.replace(`/${storedLang}`);
      return;
    }
    
    // Auto-detect browser language: default to 'tr' if preferred, else 'en'
    const userLangs = navigator.languages || [navigator.language];
    const prefersTurkish = userLangs.some(lang => lang.toLowerCase().startsWith("tr"));
    const detected = prefersTurkish ? "tr" : "en";
    
    // Save to local storage for consistency
    localStorage.setItem("polimelo_lang", detected);
    router.replace(`/${detected}`);
  }, [router]);

  return (
    <html lang="tr">
      <head>
        <meta name="robots" content="noindex, follow" />
        <title>Polimelo</title>
      </head>
      <body className="bg-[#080808]"></body>
    </html>
  );
}
