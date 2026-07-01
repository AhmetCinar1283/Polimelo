import { BlogPost } from "../posts";

export const html5_canvas_ile_vektor_gorsellestirme: BlogPost = {
    slug: "html5-canvas-ile-vektor-gorsellestirme",
    title: {
      tr: "HTML5 Canvas ile Vektör ve Matris Dönüşümlerini Görselleştirme",
      en: "Visualizing Vector and Matrix Transformations with HTML5 Canvas"
    },
    description: {
      tr: "Tarayıcı üzerinde doğrusal cebir kavramlarını (vektör uzayları, rotasyonlar) 2D Canvas API kullanarak çizdirme rehberi.",
      en: "A guide to drawing linear algebra concepts (vector spaces, coordinate rotation) in-browser using the 2D Canvas API."
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
      tr: "12 Nisan 2026",
      en: "April 12, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Lineer cebir ders kitaplarında gördüğümüz 2D/3D vektör rotasyonlarını veya matris dönüşümlerini zihinde canlandırmak zordur. Polimelo Lab'de geliştirdiğimiz vektör görselleştirici, tarayıcıda doğrudan çizim yapan asenkron bir **HTML5 Canvas** katmanı kullanır.</p>
        <h3>Matris Dönüşümlerini Çizdirmek</h3>
        <p>Bir grid çizgisini veya vektörü başka bir koordinat sistemine taşımak için matris çarpımı kullanılır. Canvas API'nin sunduğu <code>ctx.transform(a, b, c, d, e, f)</code> fonksiyonu, matris elemanlarını doğrudan donanım ivmeli (hardware accelerated) ekran kartına göndererek pürüzsüz animasyonlar sağlar.</p>
        <h3>Canvas vs SVG Performansı</h3>
        <p>Binlerce çizgi ve hareketli vektör barındıran simülasyonlarda DOM yükü oluşturan SVG yerine piksel tabanlı Canvas tercih edilmelidir. Canvas, WebGL veya standart 2D bağlamı (context) ile saniyede 60 kare (FPS) akıcılığında çizim yapmayı mümkün kılar.</p>
      `,
      en: `
<p>Understanding linear mappings or vector spaces from textbooks is notoriously dry. In Polimelo Lab, we solve this by building hardware-accelerated grid layers utilizing **HTML5 Canvas**.</p>
        <h3>Drawing Coordinate Transforms</h3>
        <p>Translating grid nodes or vector arrows between spaces requires matrix multiplication. Leveraging the native <code>ctx.transform(a, b, c, d, e, f)</code> Canvas API allows sending transform coefficients directly to the GPU, yielding smooth rendering updates.</p>
        <h3>Canvas vs. SVG for Simulations</h3>
        <p>For applications rendering thousands of vector matrices dynamically, Canvas is superior to SVG because it operates on a flat pixel buffer rather than overloading the DOM tree, maintaining stable 60 FPS updates.</p>
      `
    }
  };
