"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Form gönderimini 1.5 saniye simüle ediyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)] min-h-screen pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--fg-muted)] mb-4">
              İletişim
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Bize Ulaşın.
            </h1>
            <div className="h-px bg-[var(--border)] mt-6 mb-8" />
            <p className="text-lg text-[var(--fg-muted)] font-light max-w-xl">
              Fikirlerinizi, ürün geri bildirimlerinizi paylaşmak veya bizimle işbirliği yapmak için aşağıdaki formdan mesaj gönderebilirsiniz.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Form Column (Col-7) */}
            <div className="md:col-span-7 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8 shadow-xl relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase font-mono text-[var(--fg-muted)]">Ad Soyad *</label>
                      <input 
                        type="text" 
                        required
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Örn: Ahmet Cinar"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase font-mono text-[var(--fg-muted)]">E-posta Adresi *</label>
                      <input 
                        type="email" 
                        required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3 py-2.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="ahmet@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase font-mono text-[var(--fg-muted)]">Konu</label>
                      <input 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)}
                        className="px-3 py-2.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Örn: Polyvo Kelime Destesi Hakkında"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase font-mono text-[var(--fg-muted)]">Mesajınız *</label>
                      <textarea 
                        required
                        rows={5}
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        className="px-3 py-2.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 py-3 bg-[var(--fg)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2 rounded-md disabled:opacity-50"
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                      {!isSubmitting && <Send size={14} />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={52} className="text-emerald-500 mb-6 animate-bounce" />
                    <h3 className="text-xl font-bold text-[var(--fg)] mb-2">Mesajınız İletildi!</h3>
                    <p className="text-sm text-[var(--fg-muted)] max-w-xs leading-relaxed">
                      Bize ulaştığınız için teşekkür ederiz. Mesajınız başarıyla iletildi, en kısa sürede dönüş yapacağız.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2 bg-[var(--fg)] text-[var(--bg)] hover:opacity-90 font-semibold text-xs rounded-md transition-opacity cursor-pointer"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Info Column (Col-5) */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {/* Studio Info Card */}
              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-lg flex flex-col gap-6">
                <h3 className="text-sm font-bold uppercase font-mono text-[var(--fg-muted)] border-b border-[var(--border)] pb-2">
                  Stüdyo Detayları
                </h3>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--fg-muted)] font-mono uppercase">E-posta</h4>
                    <p className="text-sm font-bold text-[var(--fg)] mt-0.5">hello@polimelo.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--fg-muted)] font-mono uppercase">Lokasyon</h4>
                    <p className="text-sm font-bold text-[var(--fg)] mt-0.5">Ankara, Türkiye</p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--fg-muted)] font-mono uppercase">Yanıt Süresi</h4>
                    <p className="text-sm font-bold text-[var(--fg)] mt-0.5">Ortalama 24 saat içinde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mt-24">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors font-mono">
              ← Polimelo Anasayfa
            </Link>
            <Link href="/privacy" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Kullanım Koşulları
            </Link>
          </div>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo — İletişim
          </p>
        </footer>
      </main>
    </>
  );
}
