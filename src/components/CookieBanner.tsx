"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Tarayıcı tarafında çalışırken localStorage kontrolü yapıyoruz
    const consent = localStorage.getItem("polimelo_cookie_consent");
    if (!consent) {
      // 1.5 saniye gecikmeyle banner'ı açıyoruz
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("polimelo_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("polimelo_cookie_consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] p-6 bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border)] shadow-2xl flex flex-col gap-4"
          style={{ borderRadius: "12px" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldAlert size={16} className="text-indigo-500 shrink-0 animate-pulse" />
              <h4 className="text-sm font-bold text-[var(--fg)]">
                {language === "tr" ? "Çerez Aydınlatma Metni" : "Cookie Consent Notice"}
              </h4>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] p-1 rounded-full hover:bg-[var(--border)] transition-colors cursor-pointer"
              aria-label={language === "tr" ? "Kapat" : "Close"}
            >
              <X size={14} />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs leading-relaxed text-[var(--fg-muted)]">
            {language === "tr" ? (
              <>
                Deneyiminizi optimize etmek, site trafiğini analiz etmek ve <strong>Google AdSense</strong> aracılığıyla kişiselleştirilmiş reklamlar sunmak amacıyla çerezler (cookies) kullanıyoruz. Kabul ederek çerez politikamızı onaylamış olursunuz. Detaylar için{" "}
                <Link
                  href={`/${language}/privacy`}
                  className="text-[var(--fg)] font-semibold underline hover:opacity-80 transition-opacity"
                >
                  Gizlilik Politikası
                </Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </>
            ) : (
              <>
                We use cookies to optimize your experience, analyze site traffic, and deliver personalized ads via <strong>Google AdSense</strong>. By accepting, you consent to our cookie policy. For details, you can review our{" "}
                <Link
                  href={`/${language}/privacy`}
                  className="text-[var(--fg)] font-semibold underline hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </Link>{" "}
                page.
              </>
            )}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-1.5 justify-end">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] border border-transparent hover:border-[var(--border)] transition-all cursor-pointer rounded-md"
            >
              {language === "tr" ? "Reddet" : "Decline"}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-xs font-semibold bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 transition-opacity cursor-pointer rounded-md"
            >
              {language === "tr" ? "Kabul Et" : "Accept"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

