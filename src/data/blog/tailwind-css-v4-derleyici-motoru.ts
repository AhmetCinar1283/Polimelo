import { BlogPost } from "../posts";

export const tailwind_css_v4_derleyici_motoru: BlogPost = {
    slug: "tailwind-css-v4-derleyici-motoru",
    title: {
      tr: "Tailwind CSS v4: Rust Tabanlı Yeni Derleyici Motoru ve CSS-First Mimari",
      en: "Tailwind CSS v4: The New Rust-based Compiler Engine and CSS-First Architecture"
    },
    description: {
      tr: "PostCSS ihtiyacını ortadan kaldıran, derleme hızlarını 10 kat artıran ve tailwind.config.js dosyasını CSS değişkenleriyle değiştiren Tailwind v4 sürümünü inceleyin.",
      en: "Explore Tailwind v4, which removes PostCSS dependencies, boosts build speeds by 10x, and replaces tailwind.config.js with native CSS variables."
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
      tr: "8 Mayıs 2026",
      en: "May 8, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Tailwind CSS, web geliştirme dünyasında utility-first (yardımcı sınıf odaklı) stil yaklaşımını standartlaştırdı. Ancak özellikle büyük ölçekli projelerde, stil sınıflarının taranması ve CSS çıktısının üretilmesi JavaScript tabanlı motorlar nedeniyle derleme (build) sürelerini uzatabiliyordu. Tailwind CSS v4, tüm bu darboğazları aşmak için baştan aşağı yeniden yazıldı. Bu sürümdeki en radikal değişiklik, JavaScript tabanlı araçlardan vazgeçilerek **Rust tabanlı özel bir derleyici (compiler)** motorunun geliştirilmesidir.</p>

        <h3>10 Kat Daha Hızlı Derleme ve Rust Gücü</h3>
        <p>Rust tabanlı derleyici motoru, dosya sistemini tarama ve faydalı sınıfları (utility classes) belirleme işlemlerini paralel iş parçacıkları (multithreading) kullanarak yürütür. Bu sayede:</p>
        <ul>
          <li><strong>Anlık HMR (Hot Module Replacement):</strong> Geliştirme ortamında yaptığınız bir stil değişikliği tarayıcıya milisaniyeler içinde yansır.</li>
          <li><strong>Küçültülmüş CSS Çıktısı (Bundle Size):</strong> Kullanılmayan sınıfları çok daha hassas bir şekilde ayıklar (shaking) ve nihai CSS dosya boyutunu en aza indirir.</li>
          <li><strong>Sıfır PostCSS Bağımlılığı:</strong> v4 artık kendi içinde yerleşik bir parser ve bundler barındırdığından ek aracı kütüphanelere (PostCSS, Autoprefixer vb.) ihtiyaç duymaz.</li>
        </ul>

        <h3>CSS-First: tailwind.config.js Dosyasına Veda</h3>
        <p>Geleneksel Tailwind projelerinde renk paletleri, fontlar ve ekran sınırları (screens) <code>tailwind.config.js</code> dosyasında yapılandırılırdı. Tailwind CSS v4 ile bu karmaşık JavaScript konfigürasyonu tamamen tarih oluyor. Artık her şeyi ana CSS dosyanızın en tepesinde yerel CSS değişkenleri ve <code>@theme</code> direktifi ile tanımlıyorsunuz.</p>

        <p>Örnek v4 Tema Yapılandırması (globals.css):</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>@theme {
  --color-primary: #121316;
  --color-accent-red: #ef5a5a;
  --color-accent-green: #44b855;
  
  --font-serif: "Georgia", serif;
  
  --breakpoint-xs: 480px;
}</code></pre>

        <p>Yukarıdaki tanımlamayı yaptıktan sonra Tailwind derleyicisi bu değişkenleri otomatik olarak algılar ve projenin her yerinde <code>bg-primary</code>, <code>text-accent-red</code> veya <code>xs:flex</code> şeklinde kullanmanıza olanak tanır. Üstelik bu değerler standart CSS değişkeni (CSS Custom Properties) olarak tarayıcıya aktarıldığı için çalışma zamanında (runtime) Javascript müdahalesi olmadan dinamik tema değişimleri yapmayı kolaylaştırır.</p>

        <h3>Polimelo Arayüzündeki Pratik Etkileri</h3>
        <p>Polimelo dijital stüdyo sitemizi Tailwind CSS v4 sürümüne taşıdıktan sonra derleme sürelerimizde gözle görülür bir düşüş yaşadık. Özellikle koyu/açık tema geçişlerini CSS değişkenleri üzerinden yönetmek, Framer Motion animasyonlarımızla birleştiğinde tarayıcıda sıfır gecikme ile pürüzsüz geçişler sağladı. CSS konfigürasyonunun standartlaştırılması, kod tabanımızın sadeleşmesine ve geleceğe yönelik geliştirme süreçlerimizin hızlanmasına doğrudan katkı sağladı.</p>
      `,
      en: `
        <p>Tailwind CSS revolutionized web styling by making utility-first patterns a mainstream standard. However, in enterprise-scale applications, scanning directory files and rebuilding stylesheet bundles using Javascript parsers could induce latency in developer workflows. Tailwind CSS v4 was completely rebuilt from scratch to address these bottlenecks. The most significant shift in this release is the deprecation of JS-based engines in favor of a specialized **Rust-based compiler** engine.</p>

        <h3>10x Faster Builds Powered by Rust</h3>
        <p>The Rust-based compiler engine utilizes multithreaded file system scanning and token parsing, which drastically decreases file scanning overhead. Key benefits include:</p>
        <ul>
          <li><strong>Instant HMR (Hot Module Replacement):</strong> Style updates during local development reflect in the browser within single-digit milliseconds.</li>
          <li><strong>Aggressive Tree-shaking:</strong> It analyzes HTML/React markup with high precision, removing unused utilities to minimize compiled CSS bundle sizes.</li>
          <li><strong>Zero PostCSS Setup:</strong> v4 ships with its own fast parser and bundler, eliminating dependencies on PostCSS or Autoprefixer configuration scripts.</li>
        </ul>

        <h3>CSS-First: Farewell to tailwind.config.js</h3>
        <p>In legacy Tailwind applications, customizing design tokens like color schemes, fonts, and breakpoints required a complex <code>tailwind.config.js</code> file. In Tailwind CSS v4, this JS-based configuration is deprecated. Instead, you declare your customizations directly inside your main CSS stylesheet using standard CSS variables and the new <code>@theme</code> directive.</p>

        <p>Example v4 Theme Declaration (globals.css):</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>@theme {
  --color-primary: #121316;
  --color-accent-red: #ef5a5a;
  --color-accent-green: #44b855;
  
  --font-serif: "Georgia", serif;
  
  --breakpoint-xs: 480px;
}</code></pre>

        <p>Once declared, the Tailwind compiler automatically maps these tokens into standard utility classes like <code>bg-primary</code>, <code>text-accent-red</code>, and <code>xs:flex</code>. Because these are compiled into native CSS Custom Properties, dynamic theme changes (such as light/dark mode transitions) compile directly in the browser without requiring JavaScript runtime overrides.</p>

        <h3>Real-world Benefits for Polimelo</h3>
        <p>Upgrading Polimelo to Tailwind v4 reduced our overall build times significantly. Managing dark and light mode variables directly in CSS decoupled from JS bundles allowed us to implement smooth, hardware-accelerated transitions that pair beautifully with Framer Motion animations. Embracing a CSS-First architecture cleaned up our workspace configuration files and improved the codebase's long-term maintainability.</p>
      `
    }
  };
