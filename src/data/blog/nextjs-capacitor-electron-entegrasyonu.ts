import { BlogPost } from "../posts";

export const nextjs_capacitor_electron_entegrasyonu: BlogPost = {
    slug: "nextjs-capacitor-electron-entegrasyonu",
    title: {
      tr: "Next.js, Capacitor ve Electron: Tek Kod Tabanı ile Çoklu Platform",
      en: "Next.js, Capacitor, and Electron: Cross-Platform with a Single Codebase"
    },
    description: {
      tr: "Polimelo projelerinin arkasındaki modern teknoloji yığınını inceleyin. Tek bir React projesini Web, Android ve Masaüstüne nasıl dağıtıyoruz?",
      en: "Explore the modern tech stack behind Polimelo projects. How do we distribute a single React project to Web, Android, and Desktop?"
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "8 dk",
      en: "8 min"
    },
    date: {
      tr: "25 Mayıs 2026",
      en: "May 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Günümüzde bir dijital ürün geliştirirken sadece web tarayıcılarında var olmak yetersiz kalabiliyor. Kullanıcılar uygulamalarınıza telefonlarından (Android/iOS) erişmek, hatta masaüstünde (Windows/macOS) kesintisiz bir performansla çalıştırmak istiyorlar. Her platform için ayrı dillerde (Java/Kotlin, Swift, C#) yerel uygulamalar yazmak ise küçük stüdyolar için hem zaman hem de bütçe açısından yıkıcıdır. Polimelo stüdyosu olarak bu problemi çözmek için modern bir hibrit mimari kullanıyoruz: <strong>React/Next.js, Capacitor.js ve Electron</strong> entegrasyonu.</p>

        <h3>Teknolojik Mimari</h3>
        <p>Sistemimizin merkezinde, kullanıcı arayüzünü (UI) ve tüm iş mantığını (business logic) yöneten tek bir Next.js projesi yer alıyor. Bu projeyi üç farklı platforma şu şekilde dağıtıyoruz:</p>
        <ol>
          <li><strong>Web:</strong> Next.js'in <code>output: 'export'</code> özelliğini kullanarak statik HTML/JS/CSS dosyaları üretiyoruz. Bu çıktıları Cloudflare Pages veya Vercel üzerinde küresel olarak çok hızlı dağıtabiliyoruz.</li>
          <li><strong>Mobil (Android):</strong> Capacitor.js yardımıyla statik web çıktımızı alıp yerel bir Android projesinin (WebView) içerisine gömüyoruz. Capacitor, web kodumuzun telefonun yerel API'lerine (bildirimler, dosya sistemi vb.) erişmesini sağlayan köprüler kuruyor.</li>
          <li><strong>Masaüstü (Desktop):</strong> Electron kullanarak statik çıktımızı Chromium ve Node.js tabanlı masaüstü uygulamasına dönüştürüyoruz. Bu sayede oyunumuz Syncron, Steam'de yerel bir oyun gibi çalışabiliyor.</li>
        </ol>

        <h3>Next.js ve Static Export Zorlukları</h3>
        <p>Next.js varsayılan olarak sunucu taraflı çalışmaya (SSR - Server Side Rendering) odaklanır. Ancak mobil ve masaüstü paketleyiciler (Capacitor/Electron) bir Node.js sunucusuna sahip olmadıkları için tamamen statik dosyalara ihtiyaç duyarlar. Bu yüzden Next.js projemizde dinamik sunucu rotalarından kaçınmamız gerekti. Dinamik sayfalarımız (örneğin bu blog yazısının detayı olan <code>/blog/[slug]</code>) için derleme aşamasında tüm sayfaları HTML olarak üreten <code>generateStaticParams</code> fonksiyonunu kullandık.</p>
        <p>Statik export (çıktı) alırken karşılaştığımız bir diğer kritik zorluk ise Next.js'in varsayılan görsel optimizasyon (next/image) mekanizmasıydı. Bu mekanizma arka planda bir Node.js sunucusunun dinamik resim boyutlandırma yapmasını gerektirir. Çevrimdışı ve sunucusuz çalışan Capacitor/Electron WebView ortamlarında bu özellik derleme hatasına (build error) neden olur. Çözüm olarak, <code>next.config.js</code> dosyamıza resim optimizasyonunu devre dışı bırakan <code>images: { unoptimized: true }</code> kuralını ekledik. Bu sayede tüm görseller doğrudan ham halleriyle yerel WebView içerisinde yüklenerek uygulamanın kesintisiz açılmasını sağladı.</p>

        <h3>Çoklu Platformda Veri Paylaşımı ve Offline Desteği</h3>
        <p>Diğer bir büyük sorun ise yerel veritabanı yönetimiydi. Tarayıcıda verileri saklamak kolaydır, ancak uygulama kapandığında veya internet kesildiğinde mobil ve masaüstünde verilerin korunması gerekir. Bu sorunu <strong>Dexie.js (IndexedDB wrapper)</strong> kullanarak çözdük. IndexedDB, hem modern tarayıcılarda hem Capacitor WebView içinde hem de Electron ortamında standart olarak desteklendiği için tek bir kod yazarak tüm platformlarda yerel, çevrimdışı çalışan (Offline-First) bir veritabanı kurmuş olduk. Çevrimdışı öncelikli mimari, internet bağlantısı kopuk olsa dahi kullanıcının ilerlemesini yerel IndexedDB veritabanında depolar. Cihaz internete tekrar bağlandığında ise arka planda çalışan bir senkronizasyon servisi Firebase Firestore ile veri eşitlemesini güvenli ve çakışmasız (conflict-free) bir şekilde tetikler.</p>

        <h3>Platformlar Arası Köprü Kurulumu (Native Bridge API)</h3>
        <p>Platforma özel APIs (örneğin mobil cihazlarda titreşim motorunu tetiklemek veya masaüstünde yerel dosya sistemine doğrudan dosya kaydetmek) için kod tabanımızda soyut bir köprü arayüzü (bridge interface) tasarladık. Bu sayede platform bağımsız tek bir fonksiyon çağırarak yerel entegrasyonu sağlayabiliyoruz:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>async function triggerHapticFeedback() {
  if (Capacitor.isNativePlatform()) {
    await Haptics.vibrate();
  } else if (process.versions && process.versions.electron) {
    // Masaüstünde titreşim yoksa log bas veya alternatif aksiyon çalıştır
    console.log(\"Electron: vibration not supported on PC\");
  } else if (navigator.vibrate) {
    navigator.vibrate(100);
  }
}</code></pre>
        <p>Bu soyutlama katmanı, kodumuzun hiçbir platformda patlamamasını (runtime exception) garantiler. Next.js static HTML çıktısını ürettiğinde, bu arayüz hangi platformda çalıştığını otomatik olarak algılar ve ilgili native SDK'ları devreye sokar. Bu sayede her bir dağıtım paketi (APK, IPA, Windows EXE) sadece kendi ihtiyaç duyduğu JavaScript kodlarını yükler ve çalıştırma zamanında maksimum performansı elde etmiş olur.</p>

        <p>Eğer siz de ürünlerinizi hızlıca tüm cihazlara ulaştırmak isteyen bağımsız bir geliştiriciyseniz; Next.js + Capacitor + Electron üçlüsü, kod tekrarını sıfırlayan ve ürün geliştirme hızınızı 3 katına çıkaran mükemmel bir tercihtir. Bu modern hibrit mimari, pazara giriş sürenizi (time-to-market) ciddi ölçüde kısaltır ve tek kişilik ekiplerin bile devasa çoklu platform projelerini tek başına yönetebilmesini sağlar.</p>
      `,
      en: `
        <p>In today's digital landscape, existing only in web browsers can fall short. Users want to access your apps from their phones (Android/iOS), or run them with seamless performance on their desktop (Windows/macOS). Writing separate native apps in different languages (Java/Kotlin, Swift, C#) for each platform is devastating in terms of time and budget, especially for small studios. At Polimelo studio, we solve this problem using a modern hybrid architecture: <strong>React/Next.js, Capacitor.js, and Electron</strong> integration.</p>

        <h3>Technological Architecture</h3>
        <p>At the center of our system is a single Next.js project that handles the user interface (UI) and all business logic. We distribute this project to three different platforms as follows:</p>
        <ol>
          <li><strong>Web:</strong> By utilizing Next.js's <code>output: 'export'</code> config, we produce static HTML/JS/CSS files. We can distribute these assets globally at high speeds on Cloudflare Pages or Vercel.</li>
          <li><strong>Mobile (Android):</strong> With the help of Capacitor.js, we take our static web build and embed it inside a native Android project (WebView). Capacitor establishes bridges that let our web code access the phone's native APIs (notifications, file system, etc.).</li>
          <li><strong>Desktop:</strong> Using Electron, we turn our static build into a desktop application powered by Chromium and Node.js. This allows our game Syncron to run as a native game on Steam.</li>
        </ol>

        <h3>Next.js and Static Export Challenges</h3>
        <p>Next.js defaults to focusing on server-side rendering (SSR). However, since mobile and desktop packagers (Capacitor/Electron) do not have a Node.js server, they require completely static assets. Consequently, we had to avoid dynamic server-side routing in our Next.js project. For our dynamic pages (such as the detail of this blog post under <code>/blog/[slug]</code>), we used the <code>generateStaticParams</code> function to generate all pages as static HTML files during the build phase.</p>
        <p>Another critical bottleneck we encountered during static exports was Next.js's built-in image optimization (next/image). This engine relies on an active Node.js server running in the background to resize and serve images dynamically. Since the offline WebView wrapper has no local Node.js server environment, the build script fails. To resolve this, we configured <code>next.config.js</code> with <code>images: { unoptimized: true }</code>. This forces the engine to bypass dynamic processing and package images as-is, preventing runtime image load crashes inside the native frames.</p>

        <h3>Data Sharing and Offline Support Across Platforms</h3>
        <p>Another major challenge was local database management. Storing data in a browser is easy, but data must be preserved on mobile and desktop when the app closes or the internet connection drops. We solved this issue by using <strong>Dexie.js (IndexedDB wrapper)</strong>. Since IndexedDB is standardly supported in modern browsers, Capacitor WebViews, and Electron environments, we built a local, offline-first database that works across all platforms using a single codebase. This offline-first approach caches user achievements locally and syncs them seamlessly with Firebase Firestore in the background as soon as network availability is restored, ensuring zero data loss and conflict-free resolutions.</p>

        <h3>Establishing a Cross-Platform Native Bridge</h3>
        <p>For platform-specific features (such as triggering haptic feedback on mobile or writing files directly to the OS on desktop), we built a wrapper interface. This isolates device runtime configurations under a unified service API:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>async function triggerHapticFeedback() {
  if (Capacitor.isNativePlatform()) {
    await Haptics.vibrate();
  } else if (process.versions && process.versions.electron) {
    console.log(\"Electron: vibration not supported on PC\");
  } else if (navigator.vibrate) {
    navigator.vibrate(100);
  }
}</code></pre>
        <p>This abstraction layers prevents client-side execution errors when working with WebViews. Next.js outputs the unified index build which automatically detects environment headers at runtime and calls the native hardware APIs accordingly, securing smooth cross-platform delivery.</p>

        <p>If you are an independent developer looking to quickly deploy your products to all devices, the Next.js + Capacitor + Electron trio is an excellent choice that minimizes code duplication and accelerates product development speed by 3x.</p>
      `
    }
  };
