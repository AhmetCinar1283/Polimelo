import { BlogPost } from "../posts";

export const polimelo_lab_interaktif_yapay_zeka_ogrenimi: BlogPost = {
    slug: "polimelo-lab-interaktif-yapay-zeka-ogrenimi",
    title: {
      tr: "Polimelo Lab'i Sunarız: Yapay Zeka ve Matematik İçin İnteraktif Deney Laboratuvarı",
      en: "Introducing Polimelo Lab: Interactive Sandbox for AI and Mathematics"
    },
    description: {
      tr: "Yapay zeka ve matematik kuramlarını görsel deneylerle anlatan, tarayıcıda doğrudan çalışan yeni açık kaynaklı akademik çalışma alanımızı keşfedin.",
      en: "Discover our new open-source academic workspace that visualizes AI and mathematical theories through interactive, in-browser simulations."
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
      tr: "24 Haziran 2026",
      en: "June 24, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Polimelo olarak kurulduğumuz günden bu yana karmaşık kavramları basitleştirmeye, öğrenmeyi eğlenceli ve akıcı hale getirmeye odaklandık. Dil öğrenimini aralıklı tekrarla buluşturan <strong>Polyvo</strong> ve eş zamanlılığı zihin açıcı bir bulmaca ritmine dönüştüren <strong>Syncron</strong> bu arayışın ilk adımlarıydı. Bugün ise öğrenim serüvenimizde yepyeni ve daha derin bir durağı paylaşıyoruz: <strong>Polimelo Lab (Polimelo Laboratuvarı)</strong>.</p>
        <p>Polimelo Lab (<strong><a href="https://laboratory.polimelo.com" target="_blank">laboratory.polimelo.com</a></strong>), özellikle yapay zeka, veri sistemleri, matris mekaniği ve makine öğrenimi gibi yoğun matematik içeren konularda kendimizi geliştirirken aldığımız notları, kuramsal çıkarımları ve tarayıcıda çalışan etkileşimli deney araçlarını (Sandbox) bir araya getirdiğimiz açık kaynaklı bir akademik merkezdir.</p>

        <h3>Neden Polimelo Lab?</h3>
        <p>Yapay zeka ve derin öğrenme alanlarında ilerlemek isteyen her geliştirici, er ya da geç bu sistemlerin arkasındaki yoğun matematiksel altyapıyla karşılaşır. Lineer cebir, çok değişkenli kalkülüs ve gradyan inişi (gradient descent) gibi teorik kavramlar sadece formüller üzerinden okunduğunda soyut ve kavraması zor kalabilmektedir. Polimelo Lab, bu teorik yapıları pratik ve etkileşimli görsel modüllerle somutlaştırmayı amaçlar.</p>
        <p>Bizim için bu proje iki temel amaca hizmet ediyor. Kendi öğrenimimizi pekiştirirken aynı zamanda topluluğa fayda sağlamayı ve açık kaynak ekosistemine nitelikli katkıda bulunmayı amaçlıyoruz. Detaylandırmak gerekirse bu iki temel amaç şunlardır:</p>
        <ol>
          <li><strong>Görselleştirerek Öğrenmek:</strong> Formülleri kendi ellerimizle kodlayıp, tarayıcıda anlık tepki veren grafiklere dönüştürerek konunun mantığını derinlemesine kavramak.</li>
          <li><strong>Açık Kaynaklı Portfolyo:</strong> Kendi yetkinliklerimizi akademik düzeyde kanıtlayan, temiz kodlanmış ve belgelenmiş bir portfolyo oluşturmak. İlerleyen süreçte bu yapının, diğer geliştiricilerin de kendi deney modüllerini ekleyebileceği modüler, kolektif bir dijital laboratuvar olmasını hayal ediyoruz.</li>
        </ol>

        <h3>İlk Çıkan Deneyler ve Simülatörler</h3>
        <p>Polimelo Lab'in ilk sürümünde, kullanıcıların tarayıcı üzerinden doğrudan deneyimleyebileceği ve parametrelerini değiştirebileceği şu an aktif olarak çalışan 3 interaktif sandbox modülü yer alıyor:</p>
        <ul>
          <li><strong>WebAssembly Python Runtime Verification (Hello World):</strong> Pyodide motoru sayesinde tarayıcı çekirdeğinde istemci taraflı Python 3.11 ortamını çalıştırıyor. UI ile Python çalışma zamanı arasındaki veri köprüsünü test ediyor.</li>
          <li><strong>Matris Çarpımı ve Vektör Uzayı Görselleştirici:</strong> Lineer cebirin temel taşı olan matris çarpımını (A × B = C) adım adım, hücre hücre hesaplayarak nokta çarpım (dot product) mekaniğini zihinde somutlaştırıyor.</li>
          <li><strong>Etkileşimli Lineer Regresyon ve Gradyan Uydurma:</strong> Koordinat düzlemine mouse ile tıkladığınız noktalara en küçük kareler (least-squares) yöntemiyle y = mx + b doğrusunu uyduran, eğim ve hata oranını anlık güncelleyen HTML5 Canvas simülasyonu.</li>
        </ul>

        <h3>Akademik Müfredat ve Matematiksel Derinlik</h3>
        <p>Deney simülatörlerinin yanı sıra, bu deneylerin teorik altyapısını oluşturan ders notlarını da LaTeX matematik diliyle web sitemize entegre ettik. Örneğin, <strong>Yapay Sinir Ağlarına Derin Dalış</strong> dersinde, hata delta terimlerinin zincir kuralı (chain rule) kullanılarak katmanlar arasında geriye doğru nasıl yayıldığını adım adım matematiksel olarak türetiyoruz:</p>
        <p className="bg-neutral-900 p-4 rounded-lg my-4 text-center overflow-x-auto block font-mono text-sm">$$\\delta^{(l)}_j = \\left( \\sum_{k} \\delta^{(l+1)}_k w^{(l+1)}_{kj} \\right) f'(z^{(l)}_j)$$</p>
        <p>Bu denklemde, $l$. katmandaki $j$. nöronun delta hatası $\\delta^{(l)}_j$, bir sonraki katmandan gelen hataların ağırlıklı toplamı ile aktivasyon fonksiyonunun türevinin çarpımı olarak hesaplanır. Regresyon simülatörümüzde bu hata türevlerini gradyan inişi (gradient descent) ile görselleştiriyoruz. Seyrek matrisler (Sparse Matrices) ve CSR veri yapısı dersinde ise bellek optimizasyonunun algoritmalarını inceliyoruz.</p>

        <h3>İstemci Tarafında Python Çalıştırmak: Pyodide Gücü</h3>
        <p>WebAssembly teknolojisi, web geliştiriciliğinin sınırlarını yeniden çiziyor. Polimelo Lab'deki Python simülatörümüzün arkasında çalışan **Pyodide** motoru, CPython çalışma zamanını WebAssembly (Wasm) formatında doğrudan tarayıcı sekmesinde çalıştırır. Bu sayede, herhangi bir uzak sunucuya ihtiyaç duymadan, Numpy veya Pandas gibi ağır bilimsel kütüphaneleri tarayıcıda sıfır gecikmeyle çalıştırabiliyoruz. Kullanıcının yazdığı kodlar uzak bir sunucuya gitmediği için hem tam veri gizliliği sağlıyoruz hem de sunucu maliyetlerimizi tamamen ortadan kaldırıyoruz. Bu mimari, Polimelo Lab'i tamamen sunucusuz (serverless) ve kendi kendine yeten bir akademik sandbox haline getiriyor.</p>

        <h3>Gelecek Planları</h3>
        <p>Polimelo Lab, kapalı kapılar ardında yapılan bir geliştirme değil, tamamen şeffaf ve açık kaynaklı bir süreçtir. Projenin kodlarını GitHub üzerinde paylaşıma açtık. Amacımız, ders yelpazesini derin öğrenmenin diğer katmanlarına (CNN, Transformer, Optimizer mekanizmaları vb.) yaymak ve topluluktan gelecek yeni simülasyonları da laboratuvara kabul etmektir. Kendi deneylerinizi eklemek veya kodları incelemek için siz de laboratuvarımızı ziyaret edebilir, akademik outline ve sandbox sayfalarımızı kurcalayabilirsiniz!</p>
      `,
      en: `
        <p>Since the day Polimelo was founded, we have focused on simplifying complex concepts, making learning fun and seamless. <strong>Polyvo</strong>, which matches language learning with spaced repetition, and <strong>Syncron</strong>, which transforms synchronicity into a mind-opening puzzle rhythm, were the first steps in this quest. Today, we are sharing a brand new and deeper milestone in our learning journey: <strong>Polimelo Lab (Polimelo Laboratory)</strong>.</p>
        <p>Polimelo Lab (<strong><a href="https://laboratory.polimelo.com" target="_blank">laboratory.polimelo.com</a></strong>) is an open-source academic hub where we compile study notes, theoretical derivations, and interactive browser-based sandbox tools, particularly in math-heavy topics like AI, data systems, matrix mechanics, and machine learning.</p>

        <h3>Why Polimelo Lab?</h3>
        <p>Every developer who wants to advance in AI and deep learning eventually encounters the heavy mathematical foundation behind these systems. Theoretical concepts like linear algebra, multivariable calculus, and gradient descent can remain abstract and difficult to grasp when studied solely from static formulas. Polimelo Lab aims to materialize these theoretical structures with practical and interactive visual modules.</p>
        <p>For us, this project serves two core purposes:</p>
        <ol>
          <li><strong>Learning by Visualizing:</strong> Deeply understanding the logic of a topic by coding the formulas ourselves and turning them into instantly responsive graphics in the browser.</li>
          <li><strong>Open-Source Portfolio:</strong> Building an academic-grade, clean-coded, and well-documented portfolio that demonstrates our capabilities. In the future, we envision this structure growing into a modular, collective digital laboratory where other developers can contribute their own experiment modules.</li>
        </ol>

        <h3>Initial Experiments and Simulators</h3>
        <p>The initial release of Polimelo Lab features 3 active interactive sandbox modules running entirely client-side:</p>
        <ul>
          <li><strong>WebAssembly Python Runtime Verification (Hello World):</strong> Runs a client-side Python 3.11 environment in the browser kernel powered by the Pyodide engine, testing the data bridge between the UI thread and the Python runtime.</li>
          <li><strong>Matrix Multiplication & Vector Space Visualizer:</strong> Visualizes matrix multiplication (A × B = C) step-by-step, calculating cell-by-cell to build concrete mechanical intuition for the dot product.</li>
          <li><strong>Interactive Linear Regression & Gradient Fitting:</strong> An HTML5 Canvas simulator that fits a line y = mx + b to coordinates plotted by clicking on the grid using least-squares, updating slope and error rates in real-time.</li>
        </ul>

        <h3>Academic Outlines and Mathematical Rigor</h3>
        <p>Along with visual simulators, we integrated study notes covering the theoretical backing of these experiments using LaTeX typesetting. For example, in our <strong>Neural Networks Deep Dive</strong> course, we mathematically derive how error delta terms backpropagate through layers using the chain rule:</p>
        <p className="bg-neutral-900 p-4 rounded-lg my-4 text-center overflow-x-auto block font-mono text-sm">$$\\delta^{(l)}_j = \\left( \\sum_{k} \\delta^{(l+1)}_k w^{(l+1)}_{kj} \\right) f'(z^{(l)}_j)$$</p>
        <p>In this equation, the error delta $\\delta^{(l)}_j$ for neuron $j$ at layer $l$ is calculated by multiplying the weighted sum of errors from the subsequent layer with the derivative of the activation function. We then map this gradient optimization process in real-time within our gradient fitting canvas simulator. In our Sparse Matrices & CSR course, we explore memory optimization formulas and algorithms.</p>

        <h3>Running Python Client-Side: The Power of Pyodide</h3>
        <p>WebAssembly technology is rewriting the boundaries of web development. The **Pyodide** engine behind our Python simulator compiles the CPython runtime into WebAssembly (Wasm) to run directly inside the browser tab. This enables us to execute heavy data science libraries like Numpy or Pandas client-side with zero latency, entirely eliminating remote server dependency. Because user code is processed locally, we secure total data privacy and wipe out execution hosting costs. This design makes Polimelo Lab a fully serverless, self-contained academic sandbox.</p>

        <h3>Future Outlines</h3>
        <p>Polimelo Lab is not a closed development process but a completely transparent and open-source project. We have published the source code on GitHub. Our goal is to extend the course list into other layers of deep learning (CNNs, Transformers, Optimizer mechanics, etc.) and accept new simulation modules contributed by the community. To check the code or run the modules, launch Polimelo Lab and explore our sandbox and courses!</p>
      `
    }
  };
