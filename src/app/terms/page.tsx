"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";

// Kullanım Koşulları (Terms of Service) sayfası
export default function TermsPage() {
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
            Yasal Belgeler
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[var(--fg)] mb-6"
          >
            Kullanım Koşulları
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
              Son Güncelleme: 28 Mayıs 2026
            </p>

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
                Syncron oyunumuzda yer alan **Level Editor (Bölüm Tasarımcısı)** ve Polyvo üzerindeki **Özel Deste Tasarımcısı** araçları sayesinde kendi içeriklerinizi oluşturup toplulukla paylaşabilirsiniz.
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
          </motion.div>
        </section>

        {/* Alt Bilgi ve Geri Dönüş */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors font-mono"
            >
              ← Polimelo Anasayfa
            </Link>
            <Link
              href="/blog"
              className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono"
            >
              Blog
            </Link>
          </div>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo
          </p>
        </footer>
      </main>
    </>
  );
}
