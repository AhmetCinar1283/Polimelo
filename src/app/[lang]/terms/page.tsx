"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// Kullanım Koşulları (Terms of Service) sayfası
export default function TermsPage() {
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
            {t("common.termsOfService")}
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
                  Polimelo web sitesine (polimelo.com) ve alt hizmetlerimiz olan Polyvo (polyvo.polimelo.com) ile Syncron (syncron.polimelo.com) uygulamalarına hoş geldiniz. Bu platformları ziyaret ederek veya kullanarak, aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen koşulları dikkatlice okuyunuz.
                </p>

                {/* Bölüm 1 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">1. Koşulların Kabulü</h2>
                  <p>
                    Bu hizmetleri kullanarak, yürürlükteki tüm yasalara uyacağınızı ve bu koşullarla yasal olarak bağlı olduğunuzu beyan edersiniz. Eğer bu koşulların herhangi bir kısmını kabul etmiyorsanız, uygulamaları ve web sitemizi kullanmayı durdurmalısınız.
                  </p>
                </div>

                {/* Bölüm 2 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">2. Hesap Oluşturma ve Güvenlik</h2>
                  <p className="mb-2">
                    Hizmetlerimizin bazı özelliklerinden (ilerleme kaydetme, özel deste oluşturma, seviye tasarlama vb.) yararlanmak için hesap oluşturmanız gerekebilir.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Hesap şifrenizin gizliliğini korumak tamamen sizin sorumluluğunuzdadır.
                    </li>
                    <li>
                      Hesabınız üzerinden yapılan tüm işlemlerden siz sorumlu tutulursunuz. Yetkisiz bir hesap kullanımı fark ettiğinizde derhal bize bildirmelisiniz.
                    </li>
                  </ul>
                </div>

                {/* Bölüm 3 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">3. Kullanıcı Tarafından Üretilen İçerik ve Level Editor</h2>
                  <p className="mb-3">
                    Syncron oyunumuzda yer alan <strong>Level Editor (Bölüm Tasarımcısı)</strong> ve Polyvo üzerindeki <strong>Özel Deste Tasarımcısı</strong> araçları sayesinde kendi içeriklerinizi oluşturup toplulukla paylaşabilirsiniz.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Tasarladığınız bölümler ve desteler; hakaret, telif hakkı ihlali, reklam, uygunsuz veya yasa dışı unsurlar barındırmamalıdır.
                    </li>
                    <li>
                      Polimelo yönetimi, bu kurallara uymayan kullanıcı içeriklerini herhangi bir bildirim yapmaksızın silme, düzenleme veya yayından kaldırma hakkını saklı tutar.
                    </li>
                    <li>
                      Kendi ürettiğiniz içerikleri diğer kullanıcılarla paylaşarak, bu içeriklerin Polimelo platformunda yayınlanması için bize ücretsiz, kalıcı ve küresel bir lisans vermiş olursunuz.
                    </li>
                  </ul>
                </div>

                {/* Bölüm 4 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">4. Fikri Mülkiyet Hakları</h2>
                  <p>
                    Aksinin belirtildiği durumlar hariç; web sitemizde ve uygulamalarımızda yer alan tüm kodlar, algoritmalar, tasarımlar, arayüz elemanları, logolar, müzik ve grafikler Polimelo'nun mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. Yazılı iznimiz olmadan bu materyallerin kopyalanması, dağıtılması veya ticari amaçlarla kullanılması yasaktır.
                  </p>
                </div>

                {/* Bölüm 5 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">5. Sorumluluk Sınırlandırması</h2>
                  <p>
                    Polimelo ve alt projeleri "olduğu gibi" ve "kullanılabilir olduğu sürece" esasıyla sunulmaktadır. Hizmetlerimizin kesintisiz, tamamen hatasız veya güvenli olacağını garanti etmiyoruz. Uygulamalarımızın kullanımından kaynaklanabilecek veri kayıpları veya yazılımsal aksaklıklardan stüdyomuz sorumlu tutulamaz.
                  </p>
                </div>

                {/* Bölüm 6 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">6. Koşullarda Değişiklik</h2>
                  <p>
                    Bu Kullanım Koşullarını zaman zaman güncelleme hakkımız saklıdır. Değişiklikler sitemizde yayınlandığı an yürürlüğe girer. Sitemizi veya uygulamalarımızı kullanmaya devam etmeniz, güncel kullanım koşullarını kabul ettiğiniz anlamına gelir.
                  </p>
                </div>

                {/* Bölüm 7 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">7. İletişim</h2>
                  <p>
                    Bu Kullanım Koşulları ile ilgili sorularınız için bizimle e-posta yoluyla iletişime geçebilirsiniz:
                    <br />
                    <span className="font-semibold text-[var(--fg)]">hello@polimelo.com</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Welcome to the Polimelo website (polimelo.com) and our sub-services Polyvo (polyvo.polimelo.com) and Syncron (syncron.polimelo.com). By visiting or using these platforms, you agree to comply with and be bound by the following terms. Please read these terms carefully.
                </p>

                {/* Section 1 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">1. Acceptance of Terms</h2>
                  <p>
                    By using these services, you represent that you will comply with all applicable laws and are legally bound by these terms. If you do not agree with any part of these terms, you must cease using the applications and our website.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">2. Account Creation and Security</h2>
                  <p className="mb-2">
                    To benefit from certain features of our services (saving progress, creating custom decks, designing levels, etc.), you may need to create an account.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Maintaining the confidentiality of your account password is entirely your responsibility.
                    </li>
                    <li>
                      You are held responsible for all activities that occur under your account. You must notify us immediately of any unauthorized account use.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">3. User Generated Content and Level Editor</h2>
                  <p className="mb-3">
                    Through our <strong>Level Editor</strong> in Syncron and the <strong>Custom Deck Builder</strong> in Polyvo, you can create and share your own content with the community.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Levels and decks you design must not contain offensive material, copyright infringements, advertising, inappropriate, or unlawful elements.
                    </li>
                    <li>
                      Polimelo administration reserves the right to delete, edit, or remove user content that violates these rules without prior notice.
                    </li>
                    <li>
                      By sharing your custom content with other users, you grant us a free, perpetual, and global license to publish this content on the Polimelo platform.
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">4. Intellectual Property Rights</h2>
                  <p>
                    Except where stated otherwise, all code, algorithms, designs, interface elements, logos, music, and graphics contained in our website and apps are the property of Polimelo and are protected by copyright laws. Copying, distributing, or using these materials for commercial purposes without our written permission is strictly prohibited.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">5. Limitation of Liability</h2>
                  <p>
                    Polimelo and its sub-projects are provided on an \"as is\" and \"as available\" basis. We do not guarantee that our services will be uninterrupted, completely error-free, or secure. Our studio cannot be held responsible for software failures or data loss arising from the use of our applications.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">6. Changes to Terms</h2>
                  <p>
                    We reserve the right to update these Terms of Service from time to time. Changes become effective immediately upon being published on our site. Your continued use of the site or apps constitutes your acceptance of the updated terms.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-3">7. Contact</h2>
                  <p>
                    For questions regarding these Terms of Service, you can contact us via email:
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
