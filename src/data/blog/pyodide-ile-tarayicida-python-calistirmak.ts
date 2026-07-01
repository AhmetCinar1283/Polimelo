import { BlogPost } from "../posts";

export const pyodide_ile_tarayicida_python_calistirmak: BlogPost = {
    slug: "pyodide-ile-tarayicida-python-calistirmak",
    title: {
      tr: "Pyodide Nedir? Web Tarayıcısında İstemci Taraflı Python",
      en: "What is Pyodide? Client-side Python in the Web Browser"
    },
    description: {
      tr: "WebAssembly tabanlı Pyodide motoru sayesinde tarayıcıda NumPy ve Pandas gibi Python kütüphanelerini nasıl çalıştıracağınızı öğrenin.",
      en: "Learn how to execute Python code and scientific packages like NumPy and Pandas in-browser using WebAssembly-based Pyodide."
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
      tr: "8 Nisan 2026",
      en: "April 8, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Web geliştirme dünyasında Python ve JavaScript genellikle farklı sunucularda çalışır. Ancak WebAssembly'nin gücü sayesinde artık Python derleyicisini ve popüler veri analizi kütüphanelerini doğrudan tarayıcı içerisine yükleyebiliyoruz. Bunu sağlayan en popüler araç **Pyodide** motorudur.</p>
        <h3>Pyodide'in Mimari Yapısı</h3>
        <p>Pyodide, standart CPython yorumlayıcısını WebAssembly'ye derler. Ayrıca NumPy, Pandas ve SciPy gibi C-uzantılı bilimsel Python paketlerini de WASM ikilileri olarak tarayıcıda çalışabilir hale getirir. JavaScript ile Python arasında çift yönlü veri köprüleri (data binding) kurarak veri paylaşımını kolaylaştırır.</p>
        <h3>Polimelo Lab'deki Entegrasyonu</h3>
        <p>Polimelo Lab altındaki Python modülümüzde, kullanıcının girdiği Python kodları hiçbir sunucuya gönderilmeden tamamen tarayıcı işlemcisinde Pyodide tarafından koşturulur. Bu, hem sunucu yükünü sıfıra indirir hem de kullanıcı veri gizliliğini en üst seviyede tutar.</p>
      `,
      en: `
<p>Historically, Python and JavaScript operated on separate stacks. Using WebAssembly, we can compile Python interpreters and numerical toolkits to execute in sandboxed browser tabs. **Pyodide** makes this possible.</p>
        <h3>Pyodide Architecture</h3>
        <p>Pyodide compiles the standard CPython interpreter into WebAssembly binaries. It also ports native C-extended libraries like NumPy, Pandas, and SciPy to WASM. Pyodide sets up bidirectional data sharing, allowing Javascript code to call Python variables natively.</p>
        <h3>Use Case: Polimelo Lab</h3>
        <p>Our client-side Python terminal loads Pyodide on boot. When users run scripts, execution is handled entirely in their browser tab without sending requests to external web servers, protecting code privacy while eliminating cloud computing costs.</p>
      `
    }
  };
