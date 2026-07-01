import { BlogPost } from "../posts";

export const supermemo_sm2_vs_sm17_karsilastirma: BlogPost = {
    slug: "supermemo-sm2-vs-sm17-karsilastirma",
    title: {
      tr: "Aralıklı Tekrar Algoritmaları: SuperMemo SM-2 vs SM-17",
      en: "Spaced Repetition Algorithms: SuperMemo SM-2 vs. SM-17"
    },
    description: {
      tr: "Aralıklı tekrar teorisinin ilk matematik modeli SM-2 ile modern veri tabanlı makine öğrenimi modeli SM-17 karşılaştırması.",
      en: "Comparing the classic SM-2 formula with the modern data-driven SM-17 machine learning model of spaced repetition."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "8 dk",
      en: "8 min"
    },
    date: {
      tr: "16 Nisan 2026",
      en: "April 16, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Aralıklı tekrarın babası Piotr Wozniak, hafızanın matematiksel seyir modelini çizmek için onlarca yıl çalışmıştır. Geliştirdiği ilk bilgisayarlı formül olan **SM-2**, bugün Anki ve Polyvo gibi birçok yazılımın temelini oluşturur. Ancak günümüzün gelişmiş veri setleri, daha karmaşık algoritmaları doğurmuştur: **SM-17**.</p>
        <h3>Klasik SM-2 Modelinin Sınırları</h3>
        <p>SM-2, aralıkları sadece sabit formüllere ve kullanıcının anlık puanına göre belirler. Kolaylık Katsayısı (EF) hızlı değişmez ve geçmişteki uzun vadeli unutma örüntülerini analiz edemez. Bu, bazen kelimelerin gereğinden sık veya nadir çıkmasına neden olur.</p>
        <h3>Modern SM-17 Yaklaşımı</h3>
        <p>SM-17, sabit katsayılar yerine üç boyutlu bir hafıza uzayı (Hatırlanabilirlik, Zorluk ve Kararlılık) tanımlar. Milyonlarca tekrar verisinden beslenen bir makine öğrenimi algoritması gibi çalışarak, her bireyin kendine has unutma eğrisini çok daha yüksek bir hassasiyetle tahmin eder.</p>
      `,
      en: `
<p>Dr. Piotr Wozniak devoted decades to modeling memory decay mathematically. His second digital attempt, the **SM-2** algorithm, serves as the engine for platforms like Anki and Polyvo. However, years of learning data eventually birthed the highly sophisticated **SM-17** algorithm.</p>
        <h3>Limitations of the SM-2 Model</h3>
        <p>SM-2 schedules intervals using fixed algebraic steps based on instant user quality ratings. Its Easiness Factor (EF) lacks memory of historical patterns, occasionally leading to redundant card reviews or unexpected forgetting spikes.</p>
        <h3>The Modern SM-17 Paradigm</h3>
        <p>SM-17 represents memory status as a coordinate inside a three-dimensional space: Retrievability, Stability, and Difficulty. By fitting individual response histories to global datasets, it forecasts memory decay rates with far greater precision.</p>
      `
    }
  };
