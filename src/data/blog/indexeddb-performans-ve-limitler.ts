import { BlogPost } from "../posts";

export const indexeddb_performans_ve_limitler: BlogPost = {
    slug: "indexeddb-performans-ve-limitler",
    title: {
      tr: "Tarayıcıda Dev Veri Depolama: IndexedDB Performans Sınırları",
      en: "Large Scale Client Storage: IndexedDB Performance Limits"
    },
    description: {
      tr: "Tarayıcı veritabanlarının depolama kapasiteleri, performans darboğazları ve büyük verileri yönetme teknikleri.",
      en: "Storage quotas, transactional throughput bottlenecks, and optimization patterns for browser databases."
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
      tr: "29 Nisan 2026",
      en: "April 29, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>LocalStorage, 5MB'lık dar sınırı ve senkron (engellemeli) yapısıyla büyük veri işlemlerinde yetersiz kalır. Tarayıcıda veri yönetimi yaparken gerçek bir ilişkisel/doküman veritabanı performansına ihtiyaç duyduğumuzda tek seçeneğimiz asenkron çalışan **IndexedDB**'dir.</p>
        <h3>Depolama Limitleri (Storage Quota)</h3>
        <p>IndexedDB depolama limiti, cihazın disk boyutuna ve tarayıcıya göre dinamik olarak değişir. Genellikle tarayıcılar disk boş alanının %10-20'sine kadar veri depolama hakkı tanır. Ancak mobil WebView ortamlarda bu limitler daha sıkı olabileceğinden uygulamanızda mutlaka yer kaplama durumunu <code>navigator.storage.estimate()</code> ile takip etmelisiniz.</p>
        <h3>Performans İpuçları</h3>
        <p>Her okuma ve yazma işlemini tek tek başlatmak yerine verileri toplu (bulk transactions) işleyin. Ayrıca indeksleme yaparken sadece sorgularda filtreleme için kullanacağınız kritik alanları indeksleyin; aşırı indeksleme yazma performansını olumsuz etkiler.</p>
      `,
      en: `
<p>LocalStorage, with its 5MB limit and synchronous runtime thread blocking, is ill-suited for rich data processing. For true query power, developers must turn to **IndexedDB**, a client-side transactional object database.</p>
        <h3>Quota Estimations</h3>
        <p>IndexedDB size allocations depend on free disk capacity. Browsers typically allow web origins to request up to 20% of remaining storage. In mobile environments, quotas are tighter, making it crucial to query <code>navigator.storage.estimate()</code> to prevent memory failures.</p>
        <h3>Performance Optimizations</h3>
        <p>To maximize throughput, minimize database opens, batch writes inside single transactions, and index only fields used in query filters. Bloating object stores with unnecessary indexes degrades overall write speeds.</p>
      `
    }
  };
