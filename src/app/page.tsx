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
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content="0;url=/tr" />
        <title>Polimelo</title>
      </head>
      <body className="bg-[#080808] text-white flex items-center justify-center min-h-screen font-sans">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Polimelo</h1>
          <p className="text-gray-400 mb-6">Yönlendiriliyorsunuz... / Redirecting...</p>
          <div className="space-x-4">
            <a href="/tr" className="text-indigo-400 hover:underline">Türkçe Ana Sayfa</a>
            <span className="text-gray-600">|</span>
            <a href="/en" className="text-indigo-400 hover:underline">English Homepage</a>
          </div>
        </div>
      </body>
    </html>
  );
}
