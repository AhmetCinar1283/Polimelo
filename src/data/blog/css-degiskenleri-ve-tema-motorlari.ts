import { BlogPost } from "../posts";

export const css_degiskenleri_ve_tema_motorlari: BlogPost = {
    slug: "css-degiskenleri-ve-tema-motorlari",
    title: {
      tr: "Modern CSS Değişkenleri ile Dinamik Tema Motorları Tasarlamak",
      en: "Designing Dynamic Theme Engines with CSS Custom Properties"
    },
    description: {
      tr: "Sayfa yenilenmeden açık/koyu tema geçişleri yapabilen, CSS Custom Properties tabanlı esnek stil sistemleri kurgulamak.",
      en: "Building a theme engine using CSS Custom Properties to switch between dark and light modes dynamically without page flashes."
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
      tr: "5 Nisan 2026",
      en: "April 5, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Geleneksel temalandırma yöntemlerinde açık ve koyu temalar için ayrı CSS dosyaları yüklenirdi. Bu, tema geçişlerinde sayfanın göz kırpmasına (flicker) veya yavaş yüklenmesine sebep olurdu. Modern web geliştirmede ise bu sorun **CSS Değişkenleri (Custom Properties)** ile çözülür.</p>
        <h3>CSS Değişkenlerinin Dinamik Yapısı</h3>
        <p>SASS/LESS değişkenlerinin aksine, CSS Custom Properties (<code>--variable-name</code>) tarayıcı tarafından çalışma zamanında (runtime) okunur ve güncellenebilir. Örneğin root seçiciye tema sınıfları ekleyerek tüm sitenin renk paletini tek satır JavaScript ile değiştirebilirsiniz:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>document.documentElement.setAttribute('data-theme', 'dark');</code></pre>
        <h3>Polimelo Tema Mimarisi</h3>
        <p>Polimelo'da, renkleri <code>[ThemeContext.tsx](file:///c:/Users/ahmet/Desktop/Projects/myReactApps/polimelo/src/context/ThemeContext.tsx)</code> ile takip ediyor ve <code>documentElement.classList</code> üzerinden <code>dark</code> sınıfını atıyoruz. CSS dosyamızda ise <code>var(--bg)</code>, <code>var(--fg)</code> gibi değişkenler bu sınıfa göre otomatik güncelleniyor.</p>
      `,
      en: `
<p>Old style sheets loaded separate CSS files for dark and light modes, creating performance lags. Modern websites manage skin switches using native **CSS Custom Properties** (Variables).</p>
        <h3>Dynamic Styles at Runtime</h3>
        <p>Unlike pre-processor variables (like SASS/LESS), CSS Custom Properties (<code>--variable-name</code>) are reactive at runtime. Toggling themes is as simple as adding a class or dataset attribute to the document element:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>document.documentElement.setAttribute('data-theme', 'dark');</code></pre>
        <h3>Theme Architecture in Polimelo</h3>
        <p>In Polimelo, we wrap our root in a <code>ThemeContext</code> and toggle the <code>dark</code> class on the HTML container. CSS variables like <code>var(--bg)</code> and <code>var(--fg)</code> adjust instantly, generating smooth, flicker-free transitions.</p>
      `
    }
  };
