import { BlogPost } from "../posts";

export const capacitor_js_ile_native_kopruler_kurmak: BlogPost = {
    slug: "capacitor-js-ile-native-kopruler-kurmak",
    title: {
      tr: "Capacitor.js ile JavaScript ve Native Cihaz API'leri Arasında Köprü Kurma",
      en: "Bridge JavaScript and Native Device APIs with Capacitor.js"
    },
    description: {
      tr: "Cordova yerine neden Capacitor tercih edilmeli? Javascript projelerinizi mobil native API'lerle nasıl entegre edebilirsiniz?",
      en: "Why should you choose Capacitor over Cordova? How to integrate your Javascript projects with mobile native APIs."
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
      tr: "12 Mayıs 2026",
      en: "May 12, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Web teknolojileri ile mobil uygulama geliştirirken en büyük zorluk, cihazın yerel özelliklerine (kamera, bildirimler, GPS vb.) erişmektir. <strong>Capacitor.js</strong>, Ionic ekibi tarafından geliştirilen ve web kodunuz ile iOS/Android işletim sistemleri arasında modern köprüler kuran açık kaynaklı bir araçtır.</p>
        <h3>Neden Cordova Değil de Capacitor?</h3>
        <p>Cordova, projeyi sarmak için soyutlanmış bir yapı kullanırdı ve hata ayıklama (debugging) süreçleri son derece zordu. Capacitor ise mobil projeleri (Xcode ve Android Studio projeleri) doğrudan geliştiricinin yönetimine sunar. Web çıktınızı bu yerel projelere kopyalar ve yerel kod yazarak özel eklentiler (custom plugins) geliştirmenizi kolaylaştırır.</p>
        <h3>Nasıl Çalışır?</h3>
        <p>Capacitor, JavaScript katmanında bir <code>Capacitor.toNative()</code> çağrısı yapıldığında bunu arka plandaki Swift/Kotlin sınıflarına aktarır. İşlem tamamlandığında ise Promise yapısı üzerinden sonucu web arayüzünüze geri döndürür. Polyvo mobil sürümünde anlık bildirimler (push notifications) ve yerel ses çalma özelliklerini bu şekilde kurguladık.</p>
      `,
      en: `
<p>When developing mobile applications using web stacks, accessing hardware APIs (camera, geolocation, push notifications) can be challenging. <strong>Capacitor.js</strong>, built by the Ionic team, solves this by establishing modern, performant bridges between web assets and native iOS/Android engines.</p>
        <h3>Why Choose Capacitor over Cordova?</h3>
        <p>Unlike Cordova, which abstracted away native code directories, Capacitor keeps native Xcode and Android Studio directories visible and editable in your workspace. You can easily write custom Kotlin or Swift code to create platform-specific plugin bridges.</p>
        <h3>Under the Hood</h3>
        <p>When you trigger native features via Javascript, Capacitor serializes the requests and forwards them to platform-specific runtime classes. Once processed, responses are dispatched back to your React/Next.js layers using standard Javascript Promises.</p>
      `
    }
  };
