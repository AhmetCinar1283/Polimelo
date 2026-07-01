import { BlogPost } from "../posts";

export const siberpunk_tasarim_estetigi: BlogPost = {
    slug: "siberpunk-tasarim-estetigi",
    title: {
      tr: "Web Arayüzlerinde Siberpunk Estetiği ve Neon Tasarım Rehberi",
      en: "Applying Cyberpunk Aesthetics and Neon Styling in Web Interfaces"
    },
    description: {
      tr: "Karanlık temalar, yoğun kontrast renk şemaları, HSL neon filtreleri ve dijital tasarımın karanlık yönünü keşfedin.",
      en: "Exploring dark theme contrasts, HSL drop shadows, neon bloom effects, and the dark side of digital interface design."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "25 Nisan 2026",
      en: "April 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Siberpunk tasarım estetiği, yüksek teknoloji ile düşük yaşam standartlarının çarpışmasını yansıtır. Web tasarımdaki izdüşümü ise; derin siyah arka planlar, yüksek doygunlukta neon renkler (cyan, magenta, neon green) ve retro-fütüristik çizgi şemalarıdır. Syncron oyunumuzun görsel dili bu prensiplere dayanır.</p>
        <h3>Neon Glow (Işıma) Etkisi</h3>
        <p>CSS ile neon ışıltısı tasarlamak için <code>box-shadow</code> ve <code>drop-shadow</code> filtrelerini birlikte kullanmalısınız. Renkleri tanımlarken **HSL** (Hue, Saturation, Lightness) renk formatını tercih etmek, gölgelerin opaklıklarını ve parlaklıklarını dinamik hesaplarken büyük kolaylık sağlar:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>.neon-glow {
  box-shadow: 0 0 10px hsla(140, 80%, 50%, 0.5),
              0 0 20px hsla(140, 80%, 50%, 0.2);
}</code></pre>
        <h3>Tipografi Tercihleri</h3>
        <p>Yüksek kontrastlı, sert köşeli sans-serif veya monospaced fontlar siberpunk atmosferini destekler. Ayrıca kod satırlarını andıran ince ızgara (grid) overlay çizgileri eklemek, derinlik hissini artırır.</p>
      `,
      en: `
<p>Cyberpunk styling represents the juxtaposition of high tech and low life. Translated into UI design, this manifests as deep void backdrops, hyper-saturated neon glows (cyans, magentas, neon greens), and retro-futuristic grid guidelines. We utilized these rules to structure our game Syncron.</p>
        <h3>Implementing Neon Bloom in CSS</h3>
        <p>To style high-quality glowing elements, stack multiple layers of translucent shadows. Declaring colors in **HSL** (Hue, Saturation, Lightness) syntax is optimal, allowing you to quickly define glow shades with varying alphas:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>.neon-glow {
  box-shadow: 0 0 10px hsla(140, 80%, 50%, 0.5),
              0 0 20px hsla(140, 80%, 50%, 0.2);
}</code></pre>
        <h3>Visual Hierarchy</h3>
        <p>Use clean, high-contrast sans-serif or monospaced font pairings (like Geist Mono). Adding structural scanlines or subtle grid overlays adds texture, simulating hardware terminal screens.</p>
      `
    }
  };
