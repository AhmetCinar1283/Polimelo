import { BlogPost } from "../posts";

export const firestore_offline_senkronizasyon_politikasi: BlogPost = {
    slug: "firestore-offline-senkronizasyon-politikasi",
    title: {
      tr: "Cloud Firestore ile Çevrimdışı Veri Eşitleme Politikaları",
      en: "Offline Synchronization and Conflict Resolution with Cloud Firestore"
    },
    description: {
      tr: "Firebase Firestore'un offline persistence özelliğini kullanarak tarayıcıda veri tutarlılığı ve senkronizasyonu yönetmek.",
      en: "Handling transactional client consistency and write operations using Firebase Firestore's offline persistence layers."
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
      tr: "25 Mart 2026",
      en: "March 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Firebase Firestore, mobil ve web uygulamalarında gerçek zamanlı veri yönetimi için mükemmel çözümler sunar. Ancak en güçlü özelliklerinden biri, çevrimdışı önbellekleme (offline persistence) ve otomatik veri eşitleme altyapısıdır.</p>
        <h3>Firestore Çevrimdışı Çalışma Mantığı</h3>
        <p>Offline persistence etkinleştirildiğinde, Firestore yaptığınız tüm yazma ve okuma işlemlerini cihazın yerel önbelleğine (IndexedDB) kaydeder. İnternet kesildiğinde bile veritabanı okuma/yazma istekleri hata vermez, yerel önbellek üzerinden işlem devam eder.</p>
        <h3>Çakışmaları Çözme (Conflict Resolution)</h3>
        <p>İnternet bağlantısı geldiğinde, Firestore sıraya alınmış yerel yazma işlemlerini Firebase sunucularına gönderir. Eğer aynı veri sunucuda başka bir cihaz tarafından değiştirilmişse, Firestore varsayılan olarak "son yazan kazanır" (last-write-wins) politikasını uygular. Daha karmaşık çakışmaları çözmek için veritabanı işlemlerinizde timestamp veya transaction kullanmalısınız.</p>
      `,
      en: `
<p>Cloud Firestore provides dynamic tools for synchronizing realtime datasets. One of its standout components is its native offline caching layer, enabling apps to continue functioning when disconnected.</p>
        <h3>How Offline Caching Works</h3>
        <p>Once persistence is active, Firestore intercepts queries and localizes modifications to an internal IndexedDB store. Data operations execute instantly, queuing network calls until connection is recovered.</p>
        <h3>Resolving Out-of-sync Conflicts</h3>
        <p>When the client reconnects, the SDK pushes the queue of local mutations online. By default, a "last-write-wins" rule is applied. To build safer applications, implement transactions or metadata timestamps to detect and merge differences.</p>
      `
    }
  };
