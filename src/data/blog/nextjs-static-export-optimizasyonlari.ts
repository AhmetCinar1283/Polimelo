import { BlogPost } from "../posts";

export const nextjs_static_export_optimizasyonlari: BlogPost = {
    slug: "nextjs-static-export-optimizasyonlari",
    title: {
      tr: "Next.js Static Export (Statik Çıktı) İpuçları ve Sınırlar",
      en: "Next.js Static Export Tips and Architecture Boundaries"
    },
    description: {
      tr: "output: 'export' ayarını yaparken dikkat edilmesi gereken dinamik rota yönetimi ve veri çekme stratejileri.",
      en: "Dynamic routing strategies and API fetching policies to consider when using the output: 'export' setting."
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
      tr: "2 Mayıs 2026",
      en: "May 2, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Next.js, sunucu tarafında çalışan dinamik bir Node.js uygulaması olarak tasarlanmıştır. Ancak bazı projelerde (örneğin Polimelo gibi portfolyo veya basit uygulamalarda) sunucu maliyetlerini sıfırlamak ve maksimum hıza ulaşmak için sitenizi statik HTML/CSS/JS dosyaları olarak dışa aktarmak istersiniz. Bunun için <code>next.config.ts</code> dosyasına <code>output: 'export'</code> ekleriz.</p>
        <h3>Statik Export ile Neler Yapılamaz?</h3>
        <p>Sunucu tabanlı özellikler (Next.js Middleware, dinamik API rotaları (API Routes), sunucu bileşenlerinde runtime veri çekme vb.) statik export modunda çalışmaz. Her sayfa derleme aşamasında (build-time) statik dosyalara dönüştürülmek zorundadır. Bu yüzden dinamik rotalar için mutlaka <code>generateStaticParams()</code> fonksiyonu ile olası tüm parametreleri tanımlamanız gerekir.</p>
        <h3>Arama Parametreleri (Search Params) ve Çözümler</h3>
        <p>Derleme anında URL'deki query parametrelerini (örneğin <code>?ref=google</code>) okuyamazsınız. Bu gibi durumları çözmek için query parametrelerini sayfa yüklendikten sonra istemci tarafında (Client Component - <code>useSearchParams</code>) yakalamak ve arayüzü ona göre güncellemek gerekir.</p>
      `,
      en: `
<p>Next.js defaults to a dynamic server-rendered runtime. However, for portfolios and serverless deployments like Polimelo, compilation to static assets via <code>output: 'export'</code> is highly cost-effective and performs exceptionally fast on global CDNs.</p>
        <h3>Static Export Trade-offs</h3>
        <p>Node.js runtime server features (like Middleware, dynamic runtime headers, or runtime API endpoints) are not supported. Every page route must resolve to HTML pages at build-time. For dynamic paths, this means utilizing <code>generateStaticParams()</code> to pre-render all URLs.</p>
        <h3>Handling Client Parameters</h3>
        <p>Since URL search queries (like <code>?id=123</code>) are unavailable during static HTML compilation, you must handle them on the client side. Accessing query states via <code>useSearchParams</code> within wrapper Client Components is the standard practice.</p>
      `
    }
  };
