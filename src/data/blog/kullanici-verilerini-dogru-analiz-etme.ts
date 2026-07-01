import { BlogPost } from "../posts";

export const kullanici_verilerini_dogru_analiz_etme: BlogPost = {
    slug: "kullanici-verilerini-dogru-analiz-etme",
    title: {
      tr: "Dijital Ürünlerde Kullanıcı Verilerini Doğru Analiz Etme",
      en: "Analyzing User Data Correctly in Digital Products"
    },
    description: {
      tr: "Kullanıcı deneyimini iyileştirmek için hangi verileri, gizlilik kurallarına (KVKK/GDPR) sadık kalarak nasıl analiz etmeliyiz?",
      en: "Which data should we analyze to improve user experience, and how, while adhering strictly to privacy rules (GDPR/KVKK)?"
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "20 Mayıs 2026",
      en: "May 20, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Bir web sitesi veya uygulama yayına alındığında geliştiricinin işi bitmez, aksine yeni başlar. Kullanıcılar uygulamanın neresinde zorlanıyor? Hangi butonlar çalışıyor ama hiç tıklanmıyor? Uygulamanın en çok kullanılan özelliği hangisi? Bu soruların cevapları, varsayımlarda değil, <strong>kullanıcı verilerinin doğru analiz edilmesinde</strong> yatar. Ancak günümüzde veri toplamak, sadece kod eklemekten ibaret değildir; ciddi bir etik ve yasal sorumluluk (GDPR, KVKK) taşır.</p>

        <h3>1. Doğru Metrikleri Seçmek (Vanity Metrics vs Actionable Metrics)</h3>
        <p>Analitik araçlarını açtığınızda karşınıza yüzlerce grafik çıkar. Birçok geliştirici, sadece kulağa hoş gelen ama ürün geliştirmeye hiçbir faydası olmayan \"gösteriş metriklerine\" (vanity metrics) odaklanır. Örneğin, sitenizin toplam tıklanma sayısı veya sayfa görüntüleme sayısı tek başına bir şey ifade etmez. Odaklanmanız gereken metrikler <strong>eyleme dökülebilir metrikler</strong> (actionable metrics) olmalıdır:</p>
        <ul>
          <li><strong>Hemen Çıkma Oranı (Bounce Rate):</strong> Kullanıcılar sitenize girip 3 saniye sonra kapatıyorsa, ilk izlenim veya yüklenme hızında sorun vardır.</li>
          <li><strong>Dönüşüm Oranı (Conversion Rate):</strong> Sitenizi ziyaret edenlerin yüzde kaçı Polyvo veya Syncron uygulamasına tıklayıp oynamaya başladı?</li>
          <li><strong>Kullanıcı Elde Tutma (Retention Rate):</strong> Bugün kayıt olan bir kullanıcı, 7 gün sonra uygulamayı tekrar açıyor mu?</li>
        </ul>

        <h3>2. Gizlilik Odaklı Analiz (GDPR & KVKK Uyumluluğu)</h3>
        <p>Polimelo olarak en hassas olduğumuz konulardan biri kullanıcı gizliliğidir. AdSense onayı almak ve en önemlisi kullanıcılarımızın güvenini kazanmak için analitik süreçlerimizde şu kuralları uyguluyoruz:</p>
        <ul>
          <li><strong>Anonimleştirme ve IP Maskeleme:</strong> Toplanan IP adreslerini ve cihaz kimliklerini kesinlikle kişisel verilerle eşleştirmiyoruz. Kullanıcı davranışlarını tamamen anonim ID'ler üzerinden takip ediyoruz.</li>
          <li><strong>Çerez Politikaları ve Açıklık:</strong> Sitemizdeki Google Analytics ve AdSense çerezlerinin ne amaçla kullanıldığını Gizlilik Politikamızda şeffafça belirttik. Kullanıcıların çerezleri reddetme hakkını saklı tutuyoruz.</li>
          <li><strong>Gereksiz Veri Toplamama:</strong> Kullanıcının adını, soyadını veya hassas kişisel bilgilerini analitik araçlarımıza asla göndermiyoruz. Sadece "Oyun bitti", "Kart çevrildi" gibi fonksiyonel olayları (event tracking) takip ediyoruz.</li>
        </ul>

        <h3>Güvenli Etkinlik İzleme Mimarisi</h3>
        <p>Kullanıcı verilerini KVKK uyumlu olarak izlemek için geliştirdiğimiz kod tabanında özel bir izleyici wrapper mimarisi kullanıyoruz. Bu mimari, kullanıcıya ait kişisel bilgileri (PII - Personally Identifiable Information) otomatik olarak filtreler ve sadece fonksiyonel verileri sunucuya gönderir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>function trackGameAction(action, levelId, duration) {
  // GDPR safe: PII (isim, e-posta, konum vb.) gönderilmez
  analytics.logEvent(\"game_action\", {
    action_type: action,
    level_id: levelId,
    duration_seconds: Math.round(duration)
  });
}</code></pre>
        <p>Ayrıca çerezsiz analitik alternatiflerine de yöneliyoruz. Geleneksel reklam ağlarının aksine, Plausible veya Umami gibi çerezsiz ve IP saklamayan modern analitik platformlarını kullanarak kullanıcı haklarını maksimum düzeyde koruyoruz. Bu sayede, ziyaretçilerimizden hiçbir kişisel tanımlayıcı çerez talep etmeden, sadece genel sayfa trafiği ve tıklanma istatistiklerini güvenli bir şekilde gözlemleyebiliyoruz.</p>

        <h3>KVKK/GDPR Uyumlu Çerez İzin Yönetimi</h3>
        <p>Gizlilik kurallarına uyum sadece arka planda veri gizlemekle bitmez. Kullanıcı sitenize ilk girdiğinde karşılaştığı çerez izin banner'ının (Cookie Consent Banner) tasarımı da kritik bir öneme sahiptir. AdSense kurallarına göre, Avrupa Ekonomik Alanı (EEA) ve Birleşik Krallık'taki kullanıcılara reklam sunabilmek için Google sertifikalı bir **Consent Management Platform (CMP)** kullanılması zorunludur. Eğer bu onay sistemi kurulmazsa, Google reklam yayımını durdurur ve ciddi bir gelir kaybına yol açar. Polimelo olarak, sitemizde Google ile tam entegre çalışan ve IAB Europe TCF v2.2 standartlarına uygun bir izin yönetim mekanizması uyguluyoruz. Bu izin mekanizması, kullanıcının seçimine saygı duyarken Google botlarının site içeriğini tarayıp dizine eklemesini (indexing) engellemez, böylece hem SEO hem de yasal uyumluluk dengesini korumuş oluruz.</p>

        <h3>3. Veriye Dayalı A/B Testleri</h3>
        <p>Topladığımız veriler doğrudan ürün kararlarimizi şekillendiriyor. Örneğin Polyvo'da, kullanıcıların "Cloze (Boşluk Doldurma)" test modunu, klasik "Flashcard" moduna göre daha uzun süre kullandıklarını gördük. Bu veri üzerine bir A/B testi kurguladık. Kullanıcıların yarısına varsayılan olarak Flashcard modunu, diğer yarısına ise Cloze modunu gösterdik. Sonuçlar netti: Cloze modunu kullanan grubun retention oranı %12 daha yüksekti. Bu veriden yola çıkarak, Cloze modundaki cümle veri havuzumuzu iki katına çıkardık ve yapay zeka destekli cümle üretim mekanizmasını buraya entegre ettik.</p>
        <p>Sonuç olarak; veri analizi, kullanıcıların sesini doğrudan duyamadığınız dijital dünyada onların davranışlarını okuyarak en iyi deneyimi sunmanızı sağlayan pusulanızdır. Ancak bu pusulayı kullanırken kullanıcı güvenini sarsmayacak şekilde gizlilik ilkelerine sadık kalmak en kritik önceliğimizdir.</p>
      `,
      en: `
        <p>When a website or application is launched, the developer's job does not end; in fact, it has just begun. Where are users struggling in the app? Which buttons are active but never clicked? What is the most used feature of the app? The answers to these questions lie in <strong>correctly analyzing user data</strong>, not in assumptions. However, collecting data today is not just about adding code; it carries a serious ethical and legal responsibility (GDPR, KVKK).</p>

        <h3>1. Choosing the Right Metrics (Vanity Metrics vs. Actionable Metrics)</h3>
        <p>When you open analytical tools, you encounter hundreds of charts. Many developers focus only on \"vanity metrics\" that sound nice but have no benefit for product development. For example, your site's total clicks or page views alone do not mean much. The metrics you focus on should be <strong>actionable metrics</strong>:</p>
        <ul>
          <li><strong>Bounce Rate:</strong> If users enter your site and close it 3 seconds later, there is a problem with the first impression or page speed.</li>
          <li><strong>Conversion Rate:</strong> What percentage of visitors clicked and started playing Polyvo or Syncron?</li>
          <li><strong>Retention Rate:</strong> Does a user who registered today open the app again 7 days later?</li>
        </ul>

        <h3>2. Privacy-First Analysis (GDPR & KVKK Compliance)</h3>
        <p>At Polimelo, user privacy is one of our highest priorities. To obtain AdSense approval and, most importantly, earn our users' trust, we apply the following rules in our analytical processes:</p>
        <ul>
          <li><strong>Anonymization and IP Masking:</strong> We strictly do not match collected IP addresses and device IDs with personal data. We track user behaviors using completely anonymous IDs.</li>
          <li><strong>Cookie Policies and Openness:</strong> We clearly state the purpose of Google Analytics and AdSense cookies on our site in our Privacy Policy. We protect our users' right to reject cookies.</li>
          <li><strong>No Unnecessary Data Collection:</strong> We never send the user's name, surname, or sensitive personal information to our analytical tools. We only track functional events (event tracking) like \"Game finished\" or \"Card flipped\".</li>
        </ul>

        <h3>Secure Event Tracking Architecture</h3>
        <p>To capture user statistics in compliance with GDPR, we implemented an isolated analytics wrapper. This wrapper strips any Personally Identifiable Information (PII) before transmission and only logs generic interactions:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>function trackGameAction(action, levelId, duration) {
  // GDPR safe: PII (name, email, location etc.) is never sent
  analytics.logEvent(\"game_action\", {
    action_type: action,
    level_id: levelId,
    duration_seconds: Math.round(duration)
  });
}</code></pre>
        <p>Furthermore, we are exploring cookieless analytics tools such as Plausible and Umami. These privacy-first services record traffic patterns without storing persistent cookie IDs or tracking users across external domains, providing an optimal balance between metrics and user rights.</p>

        <h3>GDPR/KVKK Compliant Consent Management</h3>
        <p>Compliance with privacy regulations does not end with backend data filtering. The design of the Cookie Consent Banner that greets users when they first visit your website is also of critical importance. Under AdSense guidelines, publishers serving ads to users in the European Area (EEA) and the UK must deploy a Google-certified **Consent Management Platform (CMP)**. At Polimelo, we implement a consent framework that integrates with Google APIs and complies strictly with the IAB Europe TCF v2.2 standards. This cookie banner respects user preferences while allowing Google crawlers to analyze site content for indexing, thereby securing both search visibility and regulatory alignment.</p>

        <h3>3. Transforming Insights into Product Decisions (A/B Testing)</h3>
        <p>The data we collect directly shapes our product decisions. For instance, in Polyvo, we observed that users spent more time in the \"Memory (Cloze)\" or \"Cloze (Fill in the Blank)\" test mode compared to the classic \"Flashcard\" mode. Based on this, we set up an A/B test. We split our new user cohort: half received the Flashcard layout as the landing screen, while the other half launched directly into the Cloze mode. The results were clear: retention in the Cloze cohort was 12% higher. Following this, we doubled our sentence data pool in Cloze mode and integrated our AI-powered sentence generation mechanism there.</p>
        <p>Data analysis is your compass in the digital world where you cannot hear users' voices directly, allowing you to provide the best experience by reading their behaviors. While doing so, preserving user trust via strict privacy practices remains our absolute baseline.</p>
      `
    }
  };
