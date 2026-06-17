"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// Gizlilik Politikası (Privacy Policy) sayfası
export default function PrivacyPage() {
  const { language, t } = useLanguage();

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        {/* Giriş ve Başlık Bölümü */}
        <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--fg-muted)] mb-6"
          >
            {t("legal.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[var(--fg)] mb-6"
          >
            {t("common.privacyPolicy")}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-[var(--border)] mb-10"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8 text-sm md:text-base leading-relaxed text-[var(--fg-muted)]"
          >
            <p className="italic">
              {language === "tr" ? "Son Güncelleme: 28 Mayıs 2026" : "Last Updated: May 28, 2026"}
            </p>

            {language === "tr" ? (
              <>
                <p>
                  Polimelo dijital stüdyosu olarak, kullanıcılarımızın gizlilik haklarına büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemiz (polimelo.com) ve alt projelerimiz olan Polyvo (polyvo.polimelo.com) ile Syncron (syncron.polimelo.com) uygulamalarında topladığımız bilgileri ve bunları nasıl kullandığımızı açıklamaktadır.
                </p>

                {/* Bölüm 1 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">1. Topladığımız Veriler</h2>
                  <p className="mb-2">
                    Hizmetlerimizi sunarken, iyileştirirken ve güvenliği sağlarken aşağıdaki veri türlerini toplayabiliriz:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-[var(--fg)]">Hesap Bilgileri:</strong> Polyvo veya Syncron platformlarında profil oluşturduğunuzda Firebase Authentication altyapısı üzerinden e-posta adresiniz ve şifreniz güvenli bir biçimde kaydedilir.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Uygulama ve Oyun İlerlemesi:</strong> Kelime desteleriniz, öğrenme istatistikleriniz (SM-2 algoritması verileri) ve Syncron oyunundaki bölüm ilerlemeleriniz Firebase Firestore bulut veritabanında saklanır.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Yerel Depolama (Offline Veriler):</strong> İnternetsiz çalışma (Offline-First) desteği sunmak amacıyla, tarayıcınızın IndexedDB mekanizması (Dexie.js) kullanılarak verileriniz cihazınızda yerel olarak önbelleğe alınır.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Analitik Veriler:</strong> Google Analytics 4 (GA4) aracılığıyla oyuna başlama, bölüm tamamlama ve uygulama içi navigasyon gibi anonim kullanıcı davranışları analiz edilir.
                    </li>
                  </ul>
                </div>

                {/* Bölüm 2 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">2. Reklamlar ve Üçüncü Taraf Hizmetleri (Google AdSense)</h2>
                  <p className="mb-3">
                    Sitemizde ve alt projelerimizde reklam sunmak amacıyla Google AdSense programını kullanmaktayız. Google, üçüncü taraf bir satıcı olarak, kullanıcılarımıza reklam sunmak için çerezlerden yararlanır.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Google, DoubleClick çerezlerini kullanarak kullanıcılarımızın web sitemize ve internetteki diğer sitelere yaptığı ziyaretlere dayalı olarak reklamlar sunar.
                    </li>
                    <li>
                      Kullanıcılar, Google Reklam ve İçerik Ağı gizlilik politikasını ziyaret ederek DoubleClick çerezinin kullanılmasını engelleyebilirler.
                    </li>
                    <li>
                      Reklamların ilgi alanlarınıza göre kişiselleştirilmesini istemiyorsanız, tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilir veya Google Reklam Ayarları sayfasını kullanabilirsiniz.
                    </li>
                  </ul>
                </div>

                {/* Bölüm 3 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">3. Verilerin Saklanması ve Güvenliği</h2>
                  <p>
                    Kişisel verileriniz Firebase'in yüksek güvenlikli ve endüstri standardı bulut altyapılarında şifrelenmiş olarak barındırılır. Verilerinize yetkisiz erişimi engellemek için gerekli teknik ve idari güvenlik önlemlerini uygulamaktayız. Yerel veritabanınızda (Dexie.js) tutulan veriler tamamen sizin cihazınızın kontrolündedir ve tarayıcı önbelleğini temizleyerek silinebilir.
                  </p>
                </div>

                {/* Bölüm 4 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">4. Kullanıcı Hakları (GDPR / KVKK)</h2>
                  <p>
                    Gizlilik yasaları uyarınca, bizimle paylaştığınız veriler üzerinde tam kontrole sahipsiniz. Dilediğiniz zaman hesabınızı ve tüm ilerleme verilerinizi kalıcı olarak silme, verilerinizin bir kopyasını isteme veya verilerinizin işlenmesine itiraz etme hakkınız saklıdır. Talepleriniz için bizimle iletişime geçebilirsiniz.
                  </p>
                </div>

                {/* Bölüm 5 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">5. İletişim</h2>
                  <p>
                    Bu Gizlilik Politikası ile ilgili herhangi bir sorunuz veya talebiniz olması durumunda bizimle e-posta yoluyla iletişime geçebilirsiniz:
                    <br />
                    <span className="font-semibold text-[var(--fg)]">hello@polimelo.com</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  As the Polimelo digital studio, we place great importance on the privacy rights of our users. This Privacy Policy describes the information we collect on our website (polimelo.com) and our sub-projects Polyvo (polyvo.polimelo.com) and Syncron (syncron.polimelo.com), and how we use it.
                </p>

                {/* Section 1 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">1. Data We Collect</h2>
                  <p className="mb-2">
                    We may collect the following types of data while offering, improving, and securing our services:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-[var(--fg)]">Account Information:</strong> When you create a profile on Polyvo or Syncron, your email address and password are saved securely via Firebase Authentication infrastructure.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Application & Game Progress:</strong> Your vocabulary decks, study statistics (SM-2 algorithm parameters), and levels completed in Syncron are stored in the Firebase Firestore cloud database.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Local Storage (Offline Data):</strong> To offer offline functionality (Offline-First), your data is cached locally on your device using browser IndexedDB mechanisms via Dexie.js.
                    </li>
                    <li>
                      <strong className="text-[var(--fg)]">Analytical Data:</strong> Anonymous user behaviors, such as game starts, level completions, and in-app navigation, are analyzed through Google Analytics 4 (GA4).
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">2. Advertisements and Third-Party Services (Google AdSense)</h2>
                  <p className="mb-3">
                    We use the Google AdSense program to serve advertisements on our site and alt projects. Google, as a third-party vendor, uses cookies to serve ads to our users.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Google's use of the DoubleClick cookie enables it and its partners to serve ads based on users' visits to our site and/or other sites on the Internet.
                    </li>
                    <li>
                      Users may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting Google Ad and Content Network privacy policy.
                    </li>
                    <li>
                      If you do not want advertisements to be personalized for your interests, you can disable cookies in your browser settings or use the Google Ad Settings page.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">3. Data Retention and Security</h2>
                  <p>
                    Your personal data is hosted with encryption in Firebase's highly secure and industry-standard cloud infrastructures. We apply necessary technical and administrative security measures to prevent unauthorized access to your data. Data stored in your local database (Dexie.js) is entirely under your device's control and can be deleted by clearing the browser cache.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">4. User Rights (GDPR / KVKK)</h2>
                  <p>
                    Under privacy regulations, you have full control over the data you share with us. You retain the right to permanently delete your account and all progress data, request a copy of your data, or object to the processing of your data at any time. You can contact us to submit your requests.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">5. Contact</h2>
                  <p>
                    If you have any questions or requests regarding this Privacy Policy, you can contact us via email:
                    <br />
                    <span className="font-semibold text-[var(--fg)]">hello@polimelo.com</span>
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </section>

        {/* Alt Bilgi ve Geri Dönüş */}
        <Footer />
      </main>
    </>
  );
}
