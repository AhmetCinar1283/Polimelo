import { BlogPost } from "../posts";

export const sm2_algoritmasi_ve_ogrenme: BlogPost = {
    slug: "sm2-algoritmasi-ve-ogrenme",
    title: {
      tr: "SM-2 Algoritması ve İnsan Beyninin Öğrenme Biçimi",
      en: "SM-2 Algorithm and How the Human Brain Learns"
    },
    description: {
      tr: "Aralıklı tekrar (Spaced Repetition) yönteminin arkasındaki matematiksel formülleri ve hafızanın bilimsel işleyişini inceleyin.",
      en: "Examine the mathematical formulas behind the Spaced Repetition method and the scientific functioning of human memory."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "10 Haziran 2026",
      en: "June 10, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Öğrenmek, bilginin beyne kaydedilmesi kadar, ihtiyaç duyulduğunda oradan geri çağrılabilmesi sürecidir. Ancak insan beyni, biyolojik yapısı gereği kullanmadığı bilgileri hızla unutmaya eğilimlidir. 19. yüzyılın sonlarında Alman psikolog Hermann Ebbinghaus tarafından ortaya konan <strong>"Unutma Eğrisi" (Forgetting Curve)</strong>, yeni öğrenilen bir bilginin tekrar edilmediği takdirde günler içinde nasıl silinip gittiğini bilimsel olarak kanıtlamıştır. Peki, bu unutma sürecini tersine çevirmek ve bilgiyi kalıcı hafızaya (long-term memory) aktarmak nasıl mümkündür? İşte burada devreye <strong>Aralıklı Tekrar (Spaced Repetition)</strong> ve onun en ünlü uygulaması olan <strong>SM-2 Algoritması</strong> giriyor.</p>

        <h3>Hafıza ve Sinaptik Bağlar</h3>
        <p>Beynimizde milyarlarca nöron bulunur ve her yeni bilgi, bu nöronlar arasında yeni sinaptik bağların kurulması anlamına gelir. Bir bilgiyi ilk kez okuduğumuzda kurulan bağ oldukça zayıftır. Eğer bilgi hemen arkasından tekrar tekrar okunursa (blok çalışma veya ezberleme), beyin bunu geçici bir elektrik aktivitesi olarak görür ve kısa süre sonra bağı zayıflatır. Ancak, bilgi tam unutulmak üzereyken (bağ kopma noktasına gelmişken) hatırlanmaya çalışılırsa, beyin "Bu bilgi hayati öneme sahip" sinyali üretir ve sinaptik bağı çok daha güçlü bir şekilde yeniden inşa eder. Her başarılı aralıklı tekrar, unutma süresini katlanarak uzatır. Bu fizyolojik süreç, nöronlar arasındaki elektriksel ve kimyasal sinyal iletim gücünün artması anlamına gelen uzun süreli güçlenmenin (long-term potentiation) en somut yansımasıdır.</p>

        <h3>SM-2 Algoritmasının Matematiksel Mantığı</h3>
        <p>Polimelo bünyesindeki dil öğrenme uygulamamız <strong>Polyvo</strong>'da aktif olarak kullandığımız SM-2 algoritması, Polonyalı araştırmacı Piotr Woźniak tarafından 1980'lerin sonunda geliştirilmiştir. Algoritma, her bir kelime veya bilgi kartı için bir sonraki tekrar zamanını (Interval) şu değişkenlere dayanarak hesaplar:</p>
        <ul>
          <li><strong>q (Quality - Cevap Kalitesi):</strong> Kullanıcının karta verdiği 0 ile 5 arasındaki not. (0: Tamamen unutulmuş, 5: Kusursuz hatırlama).</li>
          <li><strong>EF (Easiness Factor - Kolaylık Katsayısı):</strong> Kartın öğrenilme kolaylığını temsil eder. Başlangıç değeri 2.5'tir. Kart kolaylaştıkça büyür, zorlaştıkça küçülür.</li>
          <li><strong>n (Repetition - Tekrar Sayısı):</strong> Kartın üst üste kaç kez başarıyla hatırlandığı.</li>
        </ul>

        <p>Bir kartın sonraki tekrar aralığı (I), gün cinsinden şu formülle belirlenir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>I(1) = 1 gün
I(2) = 6 gün
n &gt; 2 için: I(n) = I(n-1) * EF</code></pre>

        <p>Her başarılı tekrardan (q &gt;= 3) sonra Kolaylık Katsayısı (EF) şu formüle göre güncellenir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))</code></pre>
        <p>Eğer kullanıcı karta 3'ün altında bir not verirse (q &lt; 3), yani bilgiyi hatırlayamazsa, tekrar sayısı (n) sıfırlanır ve kart "öğrenme aşamasına" geri döner. Interval (aralık) yeniden 1 günden başlar, ancak EF değeri düşürülerek kartın daha sık karşımıza çıkması sağlanır.</p>

        <h3>EF Güncelleme Mantığı ve E-Factor Sınırları</h3>
        <p>Yukarıdaki formülde dikkat çeken detay şudur: q = 4 girildiğinde EF değeri değişmez (EF' = EF). q = 5 girildiğinde ise EF değeri 0.1 puan artar. q &lt; 4 durumlarında ise EF değeri düşüşe geçer. Algoritmada EF değerinin 1.3'ün altına düşmesine izin verilmez. Çünkü 1.3 altındaki değerler kartların sürekli tekrar edilmesine neden olarak hafıza tıkanıklığı yaratır. Polyvo üzerinde uyguladığımız TypeScript kodu şu şekildedir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>function calculateSM2(card, quality) {
  let { repetitions, easinessFactor, interval } = card;
  if (quality &gt;= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easinessFactor);
    repetitions++;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easinessFactor &lt; 1.3) easinessFactor = 1.3;
  return { repetitions, easinessFactor, interval };
}</code></pre>

        <h3>Neden Blok Ezber yerine Aralıklı Tekrar?</h3>
        <p>Sınavdan önceki gece sabaha kadar çalışmak (cramming), bilgiyi kısa süreli belleğe yığar. Sınav geçtikten birkaç gün sonra ise bu bilgilerin neredeyse tamamı unutulur. SM-2 algoritması ise minimum çabayla maksimum hatırlama oranını hedefler. Günde saatlerce çalışmak yerine, algoritmanın belirlediği günde sadece 10-15 dakika ayırarak binlerce kelimeyi yıllar boyunca unutmayacak şekilde hafızanıza kazıyabilirsiniz. Polyvo'da geliştirdiğimiz sistem tam olarak bu bilimsel temele dayanmakta ve kullanıcılarımızın zamanını en verimli şekilde kullanmasını sağlamaktadır.</p>
      `,
      en: `
        <p>Learning is as much about recording information in the brain as it is about retrieving it when needed. However, the human brain naturally tends to forget unused information quickly. Established in the late 19th century by German psychologist Hermann Ebbinghaus, the <strong>\"Forgetting Curve\"</strong> scientifically proves how newly learned information fades away within days if not reviewed. So, how is it possible to reverse this forgetting process and transfer information to long-term memory? This is where <strong>Spaced Repetition</strong> and its most famous implementation, the <strong>SM-2 Algorithm</strong>, come into play.</p>

        <h3>Memory and Synaptic Connections</h3>
        <p>There are billions of neurons in our brain, and every piece of new information means the creation of new synaptic connections between these neurons. The connection established when we read information for the first time is quite weak. If the information is read repeatedly right after (cramming), the brain perceives this as temporary electrical activity and soon weakens the connection. However, if the brain attempts to recall the information just as it is about to be forgotten (when the connection is on the verge of breaking), it produces a signal that \"this information is vital\" and rebuilds the synaptic connection much stronger. Each successful spaced review exponentially extends the forgetting period.</p>

        <h3>Mathematical Logic of the SM-2 Algorithm</h3>
        <p>The SM-2 algorithm, which we actively use in our language learning application <strong>Polyvo</strong> under the Polimelo studio, was developed by Polish researcher Piotr Woźniak in the late 1980s. The algorithm calculates the next review time (Interval) for each word or flashcard based on the following variables:</p>
        <ul>
          <li><strong>q (Quality):</strong> The score from 0 to 5 given to the card by the user. (0: Completely forgotten, 5: Perfect recall).</li>
          <li><strong>EF (Easiness Factor):</strong> Represents how easy the card is to learn. The starting value is 2.5. It increases as the card gets easier and decreases as it gets harder.</li>
          <li><strong>n (Repetition Count):</strong> The number of times the card has been successfully recalled in a row.</li>
        </ul>

        <p>The next review interval (I) of a card, in days, is determined by the following formula:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>I(1) = 1 day
I(2) = 6 days
For n &gt; 2: I(n) = I(n-1) * EF</code></pre>

        <p>After each successful review (q &gt;= 3), the Easiness Factor (EF) is updated using the following formula:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))</code></pre>
        <p>If the user scores the card below 3 (q &lt; 3), meaning they failed to recall it, the repetition count (n) is reset, and the card returns to the \"learning phase.\" The interval starts again at 1 day, but the EF value is decreased to ensure the card appears more frequently.</p>

        <h3>EF Update Dynamics and E-Factor Lower Bound</h3>
        <p>An important detail in the SM-2 algorithm is that when quality q = 4 is reported, the EF remains unchanged (EF' = EF). Recording a perfect score of q = 5 increases the EF by 0.1, whereas scores lower than 4 lead to a reduction in EF. Woźniak's algorithm enforces a lower limit of 1.3 for the Easiness Factor. If EF drops below this boundary, cards are repeated too frequently, clogging the user's daily review schedule. The typescript engine we use in Polyvo is structured as follows:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>function calculateSM2(card, quality) {
  let { repetitions, easinessFactor, interval } = card;
  if (quality &gt;= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easinessFactor);
    repetitions++;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easinessFactor &lt; 1.3) easinessFactor = 1.3;
  return { repetitions, easinessFactor, interval };
}</code></pre>

        <h3>Why Spaced Repetition Over Cramming?</h3>
        <p>Studying all night before an exam (cramming) piles information into short-term memory. A few days after the exam is over, almost all of this information is forgotten. The SM-2 algorithm, on the other hand, aims for maximum retention with minimum effort. Instead of studying for hours a day, you can save thousands of words to your memory for years by spending just 10-15 minutes on the day determined by the algorithm. The system we developed in Polyvo is based exactly on this scientific foundation, ensuring our users use their time most efficiently.</p>
      `
    }
  };
