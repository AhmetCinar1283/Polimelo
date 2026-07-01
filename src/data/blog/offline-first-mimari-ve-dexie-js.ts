import { BlogPost } from "../posts";

export const offline_first_mimari_ve_dexie_js: BlogPost = {
    slug: "offline-first-mimari-ve-dexie-js",
    title: {
      tr: "Dexie.js ile Offline-First (Önce Çevrimdışı) Uygulama Mimarisi",
      en: "Offline-First Application Architecture with Dexie.js"
    },
    description: {
      tr: "İnternet kesintilerinde dahi çalışabilen web uygulamaları tasarlamak. Dexie.js ve IndexedDB kullanımı.",
      en: "Designing web applications that remain functional during network outages. Using Dexie.js and browser IndexedDB."
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
      tr: "15 Mayıs 2026",
      en: "May 15, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>İnternet bağlantısının dalgalı veya tamamen kesik olduğu durumlarda kullanıcıların uygulamanızı kullanmaya devam edebilmesini istemez misiniz? <strong>Offline-First</strong> yaklaşımı, verileri önce istemcinin yerel veritabanında (IndexedDB) barındırmayı, ardından ağ bağlantısı kurulduğunda bulut sunucularıyla eşitlemeyi hedefler. Polyvo projemizde bu mimariyi başarıyla kurguladık.</p>
        <h3>IndexedDB ve Dexie.js Kolaylığı</h3>
        <p>Tarayıcılardaki yerel veritabanı olan IndexedDB, düşük seviyeli ve kullanımı oldukça karmaşık bir API sunar. <strong>Dexie.js</strong> ise bu API'yi sararak modern Promise tabanlı, kullanımı son derece kolay ve verimli bir arayüz sağlar. Dexie ile veri sorgulamaları, index tanımları ve işlem yönetimi (transactions) çok basit hale gelir.</p>
        <h3>Senkronizasyon Stratejisi</h3>
        <p>Çevrimdışı modda yapılan tüm işlemler (yeni kelime ekleme, ilerleme kaydetme) yerel IndexedDB'ye yazılır. Cihaz online olduğunda, bir arka plan servisi (background sync) devreye girerek yerel verilerdeki son değişiklikleri (güncelleme zaman damgalarını kullanarak) Firebase Firestore ile eşitler. Bu sayede veri kayıpları tamamen engellenmiş olur.</p>
      `,
      en: `
<p>Do you want your users to access and interact with your web application even during sudden network disconnections? An <strong>Offline-First</strong> architecture achieves this by storing data locally in the browser database (IndexedDB) first, and then synchronizing with cloud servers when network connectivity is available. We implemented this in our Polyvo application.</p>
        <h3>Simplifying IndexedDB with Dexie.js</h3>
        <p>IndexedDB offers a low-level, complex transactional database API. <strong>Dexie.js</strong> wraps IndexedDB into a modern, Promise-based abstraction that makes handling index schemas, structured queries, and write transactions straightforward and efficient.</p>
        <h3>Synchronization Logic</h3>
        <p>All writes in offline mode (such as saving study decks or progress) are written to local stores. When internet connectivity is restored, background workers detect the state and push updates to Firebase Firestore, utilizing transaction logs and timestamps to resolve merge conflicts safely.</p>
      `
    }
  };
