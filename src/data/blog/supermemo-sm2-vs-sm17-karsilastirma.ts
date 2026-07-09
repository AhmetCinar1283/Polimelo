import { BlogPost } from "../posts";

export const supermemo_sm2_vs_sm17_karsilastirma: BlogPost = {
    slug: "supermemo-sm2-vs-sm17-karsilastirma",
    title: {
      tr: "Aralıklı Tekrar Algoritmaları Karşılaştırması: SuperMemo SM-2 vs. SM-17 Mimarisi",
      en: "Spaced Repetition Algorithms Comparison: SuperMemo SM-2 vs. SM-17 Architecture"
    },
    description: {
      tr: "Aralıklı tekrar teorisinin ilk matematik modeli SM-2 ile modern veri tabanlı makine öğrenimi modeli SM-17 karşılaştırmasını ve bellek modellerini inceleyin.",
      en: "Examine the comparison and memory models between SM-2 (the first mathematical model of spaced repetition) and SM-17 (the modern data-driven machine learning model)."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "9 dk",
      en: "9 min"
    },
    date: {
      tr: "16 Nisan 2026",
      en: "April 16, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Aralıklı tekrar (spaced repetition) yönteminin kurucusu Polonyalı araştırmacı Dr. Piotr Woźniak, insan hafızasının unutma eğrisini modellemek için kırk yılı aşkın bir süre harcamıştır. 1980'lerin sonunda geliştirdiği ilk bilgisayarlı formül olan <strong>SM-2</strong>, günümüzde Anki, Quizlet ve kendi dil öğrenme uygulamamız <strong>Polyvo</strong> gibi birçok popüler platformun temelini oluşturmaktadır. Ancak aradan geçen yıllar ve biriken milyonlarca veri satırı, çok daha hassas bir model olan <strong>SM-17</strong> algoritmasını doğurmuştur.</p>

        <h3>Klasik SM-2 Modelinin Sınırları</h3>
        <p>SM-2 algoritması, her bir kart için bir sonraki tekrar aralığını (interval) doğrusal cebirsel adımlarla hesaplar. Ancak bu klasik yapının bazı zayıf yönleri vardır:</p>
        <ul>
          <li><strong>Geçmiş Verilerin Yok Sayılması:</strong> SM-2, bir sonraki aralığı belirlerken sadece son tekrarın sonucunu (q) ve mevcut Kolaylık Katsayısını (EF) dikkate alır. Kullanıcının o kartı geçmişte ne kadar istikrarlı bildiğini hesaba katmaz.</li>
          <li><strong>Dalgalanan E-Katsayısı (EF):</strong> Kullanıcının arka arkaya verdiği birkaç düşük puan, EF değerini hızla düşürür ve kartın gereğinden sık karşımıza çıkmasına neden olarak "hafıza tıkanıklığı" (ease hell) yaratır.</li>
          <li><strong>Sabit Interval Çarpanları:</strong> İlk iki tekrar aralığının sırasıyla 1 ve 6 gün olarak sabitlenmiş olması, her bilgi kartının zorluk derecesinin aynı olduğu varsayımına dayanır ki bu biyolojik olarak doğru değildir.</li>
        </ul>

        <h3>Modern SM-17 Yaklaşımı: Üç Boyutlu Hafıza Modeli</h3>
        <p>SM-17 algoritması sabit formüller yerine, her bir bilgi kartının durumunu üç temel hafıza değişkeni üzerinden dinamik olarak izler:</p>
        <ol>
          <li><strong>Retrievability (R - Hatırlanabilirlik):</strong> Bilginin tam o anda zihinden geri çağrılma olasılığıdır. Zaman geçtikçe %100'den sıfıra doğru düşer.</li>
          <li><strong>Stability (S - Kararlılık):</strong> Bellek izinin gücünü temsil eder. Kararlılık ne kadar yüksekse, Hatırlanabilirlik (R) o kadar yavaş düşer. Başarılı her tekrarda Kararlılık artar.</li>
          <li><strong>Difficulty (D - Zorluk):</strong> Kartın öğrenilmesinin ne kadar zor olduğunu gösteren 0 ile 1 arasında bir katsayıdır.</li>
        </ol>
        <p>SM-17, bu 3 parametreyi kullanarak her kullanıcı için özelleştirilmiş bir unutma eğrisi çizer ve bir sonraki tekrar zamanını, kullanıcının o kartı hatırlama olasılığının tam %90 olduğu anı hedefleyerek belirler.</p>

        <h3>Karşılaştırma Tablosu</h3>
        <table className="min-w-full border-collapse my-6 border border-neutral-700 text-sm">
          <thead>
            <tr className="bg-neutral-800 text-neutral-100">
              <th className="border border-neutral-700 p-2 text-left">Özellik</th>
              <th className="border border-neutral-700 p-2 text-left">SM-2 Algoritması</th>
              <th className="border border-neutral-700 p-2 text-left">SM-17 Algoritması</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-700 p-2 font-semibold">Temel Yaklaşım</td>
              <td className="border border-neutral-700 p-2">Sabit Matematiksel Formül</td>
              <td className="border border-neutral-700 p-2">Dinamik Bellek Simülasyonu</td>
            </tr>
            <tr className="bg-neutral-900/40">
              <td className="border border-neutral-700 p-2 font-semibold">Değişken Sayısı</td>
              <td className="border border-neutral-700 p-2">2 (EF, Repetitions)</td>
              <td className="border border-neutral-700 p-2">3 (Retrievability, Stability, Difficulty)</td>
            </tr>
            <tr>
              <td className="border border-neutral-700 p-2 font-semibold">Geçmiş Analizi</td>
              <td className="border border-neutral-700 p-2">Yok (Sadece son adım)</td>
              <td className="border border-neutral-700 p-2">Var (Tüm tekrar geçmişi)</td>
            </tr>
            <tr className="bg-neutral-900/40">
              <td className="border border-neutral-700 p-2 font-semibold">Hesaplama Gücü</td>
              <td className="border border-neutral-700 p-2">Çok Düşük (İstemci taraflı kolay)</td>
              <td className="border border-neutral-700 p-2">Yüksek (Veri analitiği gerektirir)</td>
            </tr>
          </tbody>
        </table>

        <h3>Polyvo'daki Tercihimiz ve Simülatör</h3>
        <p>Polyvo uygulamasının web sürümünde, hızlı ve internet bağlantısından bağımsız çalışabilmesi için SM-2 mimarisini tercih ettik. Ancak bu algoritmanın "hafıza tıkanıklığı" dezavantajını önlemek için E-Katsayısına 1.3 alt sınırı koyarak ve akıllı veri sınırlandırmaları ekleyerek optimize ettik. Ayrıca sitemizdeki <strong>Aralıklı Tekrar Simülatörü</strong> sayesinde kullanıcıların bu katsayıları değiştirerek bellek stabilitesini grafikler üzerinden görselleştirmesini sağladık. Bu derinlemesine çalışmalar, Polimelo'nun eğitim modüllerinin temelini oluşturmaktadır.</p>
      `,
      en: `
        <p>Dr. Piotr Woźniak, the pioneer of spaced repetition theory, dedicated over four decades to modeling the mathematical decay of human memory. In the late 1980s, he formulated the **SM-2** algorithm. Today, SM-2 remains the foundational engine powering popular platforms like Anki, Quizlet, and our own language learning application <strong>Polyvo</strong>. However, decades of cognitive research and millions of review data points eventually led to the development of the highly sophisticated **SM-17** model.</p>

        <h3>Limitations of the Classic SM-2 Model</h3>
        <p>The SM-2 algorithm calculates the next review interval for each card using linear algebraic formulas. While highly efficient, this classic approach suffers from several key limitations:</p>
        <ul>
          <li><strong>Disregard for Historical Patterns:</strong> SM-2 schedules intervals using only the immediate score (q) and the current Easiness Factor (EF). It ignores the user's historical performance stability for that specific item.</li>
          <li><strong>Easiness Factor Volatility (Ease Hell):</strong> A few consecutive low scores can drag the EF value down rapidly, scheduling card reviews at redundant, near-instant intervals, leading to review fatigue.</li>
          <li><strong>Hardcoded Initial Steps:</strong> Hardcoding the first two intervals to 1 and 6 days assumes all learning materials start with the same baseline difficulty, which is biologically inaccurate.</li>
        </ul>

        <h3>The Modern SM-17 Paradigm: Three-Dimensional Memory Model</h3>
        <p>Instead of relying on fixed formulas, the SM-17 algorithm models memory status as a coordinate inside a three-dimensional space defined by three distinct variables:</p>
        <ol>
          <li><strong>Retrievability (R):</strong> The probability of successfully recalling an item at a given moment. It starts at 100% and decays exponentially over time.</li>
          <li><strong>Stability (S):</strong> The strength of the memory trace. A higher stability means Retrievability (R) decays at a much slower rate. Successful reviews increase Stability.</li>
          <li><strong>Difficulty (D):</strong> A value mapped between 0 and 1 indicating the complexity of the item itself.</li>
        </ol>
        <p>Using these three metrics, SM-17 plots a customized forgetting curve for each user and schedules the next review at the exact day where Retrievability is predicted to be exactly 90%.</p>

        <h3>Comparison Matrix</h3>
        <table className="min-w-full border-collapse my-6 border border-neutral-700 text-sm">
          <thead>
            <tr className="bg-neutral-800 text-neutral-100">
              <th className="border border-neutral-700 p-2 text-left">Feature</th>
              <th className="border border-neutral-700 p-2 text-left">SM-2 Algorithm</th>
              <th className="border border-neutral-700 p-2 text-left">SM-17 Algorithm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-700 p-2 font-semibold">Approach</td>
              <td className="border border-neutral-700 p-2">Static Mathematical Formula</td>
              <td className="border border-neutral-700 p-2">Dynamic Memory Simulation</td>
            </tr>
            <tr className="bg-neutral-900/40">
              <td className="border border-neutral-700 p-2 font-semibold">Variables</td>
              <td className="border border-neutral-700 p-2">2 (EF, Repetitions)</td>
              <td className="border border-neutral-700 p-2">3 (Retrievability, Stability, Difficulty)</td>
            </tr>
            <tr>
              <td className="border border-neutral-700 p-2 font-semibold">History Analysis</td>
              <td className="border border-neutral-700 p-2">No (Only last state)</td>
              <td className="border border-neutral-700 p-2">Yes (Full historical records)</td>
            </tr>
            <tr className="bg-neutral-900/40">
              <td className="border border-neutral-700 p-2 font-semibold">Compute Complexity</td>
              <td className="border border-neutral-700 p-2">Extremely low (Client-side friendly)</td>
              <td className="border border-neutral-700 p-2">High (Requires background database analysis)</td>
            </tr>
          </tbody>
        </table>

        <h3>Implementation in Polyvo</h3>
        <p>For Polyvo's web deployment, we chose the SM-2 algorithm to ensure fast, offline-first client-side calculations. To address its drawbacks, we optimized it by introducing a lower limit of 1.3 for the Easiness Factor and adding review thresholds. In addition, we built our interactive **Spaced Repetition Simulator** to allow users to manipulate these variables and visualize memory stability curves in real-time. These structural models form the educational backbone of Polimelo.</p>
      `
    }
  };
