import { BlogPost } from "../posts";

export const tailwind_css_v4_derleyici_motoru: BlogPost = {
    slug: "tailwind-css-v4-derleyici-motoru",
    title: {
      tr: "Tailwind CSS v4: Rust Tabanlı Yeni Derleyici ve Performans",
      en: "Tailwind CSS v4: The New Rust-based Compiler and Performance"
    },
    description: {
      tr: "PostCSS ihtiyacını kaldıran ve derleme hızlarını 10 kat artıran Tailwind CSS v4 mimarisini inceleyin.",
      en: "Explore the Tailwind CSS v4 architecture that removes PostCSS dependencies and speeds up compilation times by 10x."
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "5 dk",
      en: "5 min"
    },
    date: {
      tr: "8 Mayıs 2026",
      en: "May 8, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Tailwind CSS v4, stil motorunu baştan aşağı yeniledi. En büyük değişiklik, JavaScript tabanlı derleme süreçlerinden vazgeçilerek **Rust tabanlı özel bir derleyici (compiler)** geliştirilmiş olmasıdır. Bu yenilik, büyük projelerdeki derleme (build) sürelerini milisaniyeler seviyesine indiriyor.</p>
        <h3>Sıfır Yapılandırma (Zero Configuration)</h3>
        <p>v4 ile birlikte artık karmaşık <code>tailwind.config.js</code> dosyalarına gerek kalmadı. CSS dosyanızın en tepesine ekleyeceğiniz <code>@theme</code> direktifleri ile tüm özelleştirmelerinizi (renkler, fontlar vb.) doğrudan standart CSS kuralları içinde tanımlayabiliyorsunuz. PostCSS bağımlılıkları da ortadan kalktığı için proje kurulumu çok daha sadeleşti.</p>
        <h3>Polimelo Arayüzündeki Etkisi</h3>
        <p>Polimelo portfolyomuzu v4 sürümüne yükselttikten sonra, yerel geliştirme sunucusunun (dev server) stil değişikliklerini tarayıcıya yansıtma hızı anlık hale geldi. Ayrıca üretim çıktısındaki CSS dosyası boyutu önemli ölçüde küçüldü.</p>
      `,
      en: `
<p>Tailwind CSS v4 reinvents utility styling from the ground up. The highlight is the new **Rust-based engine**, which deprecates old Javascript parsing and cuts build times down to milliseconds in large-scale applications.</p>
        <h3>Zero Configuration Files</h3>
        <p>In v4, the complex <code>tailwind.config.js</code> is no longer needed. Theme tokens (colors, animations, fonts) are now declared directly inside your index CSS file using the <code>@theme</code> directive. This eliminates PostCSS dependencies, resulting in faster and cleaner bundlers.</p>
        <h3>Impact on Polimelo</h3>
        <p>After upgrading Polimelo to Tailwind v4, style hot-reloading (HMR) became instantaneous. In addition, the compiled CSS bundle size decreased significantly, speeding up initial page loads.</p>
      `
    }
  };
