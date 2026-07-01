import { BlogPost } from "../posts";

export const i18n_sitemap_ve_robots_txt_seo_yapilandirmasi: BlogPost = {
    slug: "i18n-sitemap-ve-robots-txt-seo-yapilandirmasi",
    title: {
      tr: "Çok Dilli (i18n) Sitelerde Sitemap ve Robots.txt Yapılandırması",
      en: "Sitemap and Robots.txt Configurations for Multilingual (i18n) Sites"
    },
    description: {
      tr: "Google'ın çok dilli siteleri tararken kullandığı hreflang etiketleri, robots.txt kuralları ve sitemap şablonları.",
      en: "How to configure robots.txt, dynamic sitemaps, and hreflang tag hierarchies for search engine optimization on multilingual websites."
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "6 dk",
      en: "6 min"
    },
    date: {
      tr: "29 Mart 2026",
      en: "March 29, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Web sitenizi birden fazla dilde yayınladığınızda, arama motorlarının bu dillerin her birini doğru indekslemesini sağlamak kritik bir SEO konusudur. Google, farklı dillerdeki aynı sayfaların kopya içerik (duplicate content) olarak algılanmaması için özel yapılandırmalar talep eder.</p>
        <h3>Hreflang Etiketlerinin Önemi</h3>
        <p>Her sayfanın HTML başlığında (head), o sayfanın diğer dillerdeki karşılıklarını gösteren <code>hreflang</code> etiketleri bulunmalıdır. Bu etiketler Google'a "Bu sayfa Türkçe versiyondur, İngilizce arayan kullanıcılara ise şu adresi göster" talimatını verir. Polimelo sitemap.xml dosyamızda bu yapıyı dinamik olarak kurguladık.</p>
        <h3>Robots.txt ve Tarama Bütçesi</h3>
        <p>Çok dilli sitelerde tarayıcı botlarının (Googlebot, AdSense Bot) tüm dil klasörlerinize erişebildiğinden emin olun. Robots.txt dosyanızda dil yollarını (örneğin <code>/tr/</code> ve <code>/en/</code>) engelleyecek yanlış kuralların bulunmadığını kontrol etmeli ve sitemap dosyanızın yerini net olarak belirtmelisiniz.</p>
      `,
      en: `
<p>When publishing a multilingual website, ensuring that search engines parse and categorize each language version correctly is paramount for SEO. Incorrect structure leads to pages competing with each other or being flagged as duplicates.</p>
        <h3>Hreflang Directives</h3>
        <p>Every language variant needs to link to its counterparts using <code>hreflang</code> metadata. This tells search bots: "This is the Turkish variant, show the English variant to users searching in English." We dynamically build these alternate nodes into our sitemap.</p>
        <h3>Tuning Robots.txt for Crawling</h3>
        <p>Verify that your robots.txt file does not restrict crawlers from scanning subroutes (like <code>/en/</code> or <code>/tr/</code>). The configuration should explicitly expose all paths and provide a direct pointer to the <code>sitemap.xml</code> root.</p>
      `
    }
  };
