"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Cpu, Code, ExternalLink, GraduationCap, Layers } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

// Sandbox Modülleri Verisi
const sandboxModules = [
  {
    id: "say-hello",
    code: "MODULE-REF: 01A",
    title: {
      tr: "WebAssembly Python Çalışma Zamanı Doğrulaması (Hello World)",
      en: "WebAssembly Python Runtime Verification (Hello World)",
    },
    abstract: {
      tr: "Tarayıcı çekirdeği içinde Pyodide ve WebAssembly aracılığıyla istemci taraflı Python 3.11 yürütme ortamlarını doğrulayan mimari test. TypeScript arayüzü ile bağımsız düşük seviyeli backend'ler arasındaki veri hattı köprüsünü kurar.",
      en: "A core architectural test validating client-side execution of Python 3.11 environments within the browser kernel via Pyodide and WebAssembly. Serves as the foundational bridge for pipeline communication between TypeScript UI threads and decoupled low-level backends.",
    },
    keywords: ["Pyodide Engine", "WebAssembly", "Web Workers", "Runtime Verification"],
    status: "Active",
    link: "https://laboratory.polimelo.com/lab/say-hello",
    accent: "#ef5a5a",
  },
  {
    id: "matrix-multiplier",
    code: "MODULE-REF: 02B",
    title: {
      tr: "Matris Çarpımı ve Vektör Uzayı Görselleştirici",
      en: "Matrix Multiplication & Vector Space Visualizer",
    },
    abstract: {
      tr: "Matris çarpımını adım adım görselleştiren etkileşimli bir çalışma alanı. Kullanıcılar A ve B matrisleri için değerler girebilir, C = A × B sonucunu hesaplayabilir ve mekanik sezgi oluşturmak için hücre bazında nokta çarpımını (dot product) izleyebilir.",
      en: "An interactive workspace for visualizing matrix multiplication step-by-step. Users can input values for matrices A and B, compute C = A × B, and trace the dot product calculation for individual cells to build mechanical intuition.",
    },
    keywords: ["Linear Algebra", "Dot Product", "Vector Spaces", "Interactive Compute"],
    status: "Active",
    link: "https://laboratory.polimelo.com/lab/matrix-multiplier",
    accent: "#44b855",
  },
  {
    id: "linear-regression",
    code: "MODULE-REF: 03C",
    title: {
      tr: "Etkileşimli Lineer Regresyon ve Gradyan Uydurma",
      en: "Interactive Linear Regression & Gradient Fitting",
    },
    abstract: {
      tr: "İstemci tarafında çalışan regresyon simülatörü. Kullanıcılar canvas koordinat düzlemine tıklayarak noktalar yerleştirir, en küçük kareler (least-squares) yöntemiyle y = mx + b doğrusu çizilir ve eğim, kesme noktası ile R-kare değerleri hesaplanır.",
      en: "A client-side regression simulator. Users plot custom coordinates on a canvas grid, and the model fits a line of best fit y = mx + b using least-squares, plotting the regression line and detailing slope, intercept, and R-squared parameters.",
    },
    keywords: ["Machine Learning", "Least Squares", "Regression Model", "HTML5 Canvas"],
    status: "Active",
    link: "https://laboratory.polimelo.com/lab/linear-regression",
    accent: "#f59e0b",
  },
];

// Akademik Dersler Verisi
const courses = [
  {
    id: "linear-algebra",
    title: {
      tr: "Lineer Cebir ve Seyrek Sistemler",
      en: "Linear Algebra & Sparse Systems",
    },
    category: "mathematics",
    description: {
      tr: "Verimli hesaplama boru hatları için temel matematiksel yapılar. Vektör uzayları, matrisler ve seyrek temsil modellerini inceler.",
      en: "Foundational mathematical structures for efficient computational pipelines. Explores vector spaces, matrices, and sparse representation models.",
    },
    difficulty: { tr: "Orta Seviye", en: "Intermediate" },
    tags: ["Math", "Linear Algebra", "Data Formats"],
    lectures: [
      {
        slug: "sparse-matrices",
        title: {
          tr: "Seyrek Matrisler ve CSR Veri Temsili",
          en: "Sparse Matrices & CSR Data Representation",
        },
        code: "MATH-LA-01",
        description: {
          tr: "Sıkıştırılmış Seyrek Satır (CSR) temsil haritalaması, indeks işaretçileri, depolama verimliliği hesaplamaları ve seyrek matris-vektör çarpımı (SpMV).",
          en: "Compressed Sparse Row (CSR) representation mapping, index pointers, storage efficiency calculations, and sparse matrix-vector multiplication (SpMV).",
        },
        difficulty: { tr: "Orta Seviye", en: "Intermediate" },
        duration: { tr: "15 dk", en: "15 mins" },
      },
    ],
  },
  {
    id: "neural-networks",
    title: {
      tr: "Yapay Sinir Ağlarına Derin Dalış",
      en: "Neural Networks Deep Dive",
    },
    category: "artificial-intelligence",
    description: {
      tr: "Derin öğrenme ilkel modellerinin sıfırdan teorik türetimleri ve somut uygulamaları.",
      en: "Theoretical derivations and concrete implementations of deep learning primitives from scratch.",
    },
    difficulty: { tr: "İleri Seviye", en: "Advanced" },
    tags: ["AI", "Neural Networks", "Calculus"],
    lectures: [
      {
        slug: "backpropagation",
        title: {
          tr: "İlk Prensiplerden Geri Yayılım (Backpropagation)",
          en: "Backpropagation from First Principles",
        },
        code: "AI-NN-01",
        description: {
          tr: "Hata delta terimlerinin matematiksel türetilmesi, çıktı katmanı gradyanları, gizli katman geri yayılımı ve zincir kuralı kullanarak ağırlık/bias güncellemeleri.",
          en: "Mathematical derivation of error delta terms, output layer gradients, hidden layer backpropagation, and weight/bias updates using the chain rule.",
        },
        difficulty: { tr: "İleri Seviye", en: "Advanced" },
        duration: { tr: "25 dk", en: "25 mins" },
      },
    ],
  },
];

export default function LabCatalogPage() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const getModuleAccent = (moduleId: string) => {
    if (moduleId === "say-hello") {
      return theme === "dark" ? "#ef5a5a" : "#ac2323";
    }
    if (moduleId === "matrix-multiplier") {
      return theme === "dark" ? "#44b855" : "#21692b";
    }
    return "#f59e0b"; // linear-regression
  };

  const btnClass = `inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold transition-all rounded shadow-md border ${
    theme === "dark"
      ? "bg-[#d1d4db] text-[#121316] border-[#353740] hover:bg-white"
      : "bg-[#2d2c2a] text-[#fbfaf7] border-[#2d2c2a] hover:bg-[#0f0f0f]"
  }`;

  return (
    <>
      <Nav />

      <main 
        className="bg-[var(--bg)] text-[var(--fg)] min-h-screen transition-colors duration-300"
        style={{
          "--bg": theme === "dark" ? "#121316" : "#fbfaf7",
          "--fg": theme === "dark" ? "#d1d4db" : "#2b2a27",
          "--fg-muted": theme === "dark" ? "#7a7e85" : "#66625d",
          "--card-bg": theme === "dark" ? "#1a1b20" : "#f3efe6",
          "--border": theme === "dark" ? "#353740" : "#2d2c2a",
          "--accent-red": theme === "dark" ? "#ef5a5a" : "#ac2323",
        } as React.CSSProperties}
      >
        {/* HEADER SECTION */}
        <section className="pt-40 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent-red)]" />
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--fg-muted)]">
              {t("lab.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-[var(--fg)] mb-8 font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("lab.title")}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-[var(--border)] mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-[var(--fg-muted)] font-light leading-relaxed max-w-3xl font-serif italic"
          >
            {t("lab.desc")}
          </motion.p>
        </section>

        {/* SECTION 1: SANDBOX MODULES */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-4">
            <Cpu size={22} className="text-[var(--accent-red)]" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("lab.sandboxTitle")}
            </h2>
          </div>
          
          <p className="text-[var(--fg-muted)] text-sm mb-8 leading-relaxed max-w-2xl">
            {t("lab.sandboxDesc")}
          </p>

          <div className="grid gap-6 md:grid-cols-1">
            {sandboxModules.map((module, i) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 transition-all duration-300 hover:border-[var(--fg-muted)]"
                style={{
                  borderLeft: `4px solid ${getModuleAccent(module.id)}`,
                }}
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--border)] text-[var(--fg-muted)]">
                        {module.code}
                      </span>
                      <span className="text-xs font-mono text-[var(--fg-muted)] flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {module.status}
                      </span>
                    </div>

                    <h3 
                      className="text-xl md:text-2xl font-bold text-[var(--fg)] mb-3 font-serif"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {module.title[language]}
                    </h3>

                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6 font-serif text-justify">
                      {module.abstract[language]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {module.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-muted)]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col justify-end items-end w-full md:w-auto min-w-[200px]">
                  <a
                    href={module.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnClass}
                  >
                    {t("lab.launchModule")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 2: ACADEMIC COURSES */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-4">
            <GraduationCap size={24} className="text-[var(--accent-red)]" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t("lab.theoryTitle")}
            </h2>
          </div>

          <p className="text-[var(--fg-muted)] text-sm mb-8 leading-relaxed max-w-2xl">
            {t("lab.theoryDesc")}
          </p>

          <div className="space-y-12">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 md:p-8"
              >
                {/* Course Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-[var(--border)]/40 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[var(--fg-muted)] uppercase tracking-wider block mb-1">
                      {course.category === "mathematics" ? "MATHEMATICAL STRUCTURES" : "DEEP LEARNING THEORY"}
                    </span>
                    <h3 className="text-2xl font-bold font-serif" style={{ fontFamily: "Georgia, serif" }}>
                      {course.title[language]}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--fg-muted)]">
                      {t("lab.difficulty")}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] font-bold">
                      {course.difficulty[language]}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[var(--fg-muted)] mb-8 font-serif">
                  {course.description[language]}
                </p>

                {/* Course Lectures List */}
                <div className="space-y-4">
                  {course.lectures.map((lecture) => (
                    <div
                      key={lecture.slug}
                      className="p-5 bg-[var(--bg)] border border-[var(--border)] rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[var(--fg-muted)]/40 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] text-neutral-400 font-semibold uppercase">
                            {lecture.code}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            • {t("lab.duration")} {lecture.duration[language]}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold font-serif text-[var(--fg)] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                          {lecture.title[language]}
                        </h4>
                        <p className="text-xs text-[var(--fg-muted)] leading-relaxed font-serif">
                          {lecture.description[language]}
                        </p>
                      </div>

                      <a
                        href={`https://laboratory.polimelo.com/courses/${course.id}/${lecture.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--fg)] hover:text-[var(--accent-red)] border-b border-transparent hover:border-[var(--accent-red)] transition-all duration-300 pb-0.5"
                      >
                        {t("lab.readLecture")} <ExternalLink size={12} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 2.5: DETAILED LAB ARCHITECTURE AND MATHEMATICS */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-20 border-t border-[var(--border)] pt-20 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--fg)] mb-8 text-center font-serif" style={{ fontFamily: "Georgia, serif" }}>
            {language === "tr" ? "Hesaplamalı Laboratuvar Altyapısı ve Metodoloji" : "Computational Lab Infrastructure & Methodology"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[var(--fg-muted)] leading-relaxed font-serif text-justify">
            <div>
              <h3 className="text-lg font-bold text-[var(--fg)] mb-3">{language === "tr" ? "İstemci Tarafında Python ve Pyodide Mimarisi" : "Client-Side Python & Pyodide Architecture"}</h3>
              <p className="mb-4">
                {language === "tr" 
                  ? "Geleneksel web uygulamalarında Python kodlarını çalıştırmak, uzak sunucuda (server-side) izole sanal makineler veya sandbox kapları (Docker) kurmayı gerektirir. Bu yaklaşım hem yüksek sunucu maliyeti yaratır hem de ağ gecikmelerine neden olur. Polimelo Lab, tarayıcı çekirdeğinde istemci taraflı Python 3.11 yorumlayıcısını barındıran Pyodide motorunu kullanır."
                  : "Traditionally, executing custom Python scripts requires hosting virtual environments or containerized microservices (Docker) on remote web servers, inducing significant cloud upkeep fees and network latency. Polimelo Lab utilizes the Pyodide runtime to execute Python 3.11 directly inside the client's browser thread."}
              </p>
              <p>
                {language === "tr"
                  ? "CPython derleyicisinin Emscripten aracılığıyla WebAssembly (WASM) bytecode'una derlenmesiyle çalışan Pyodide, NumPy ve Pandas gibi popüler bilimsel paketleri de tarayıcıya WASM modülleri olarak yükler. Bu sayede, kullanıcının girdiği kodlar hiçbir sunucuya iletilmeden doğrudan cihazın kendi işlemcisinde (CPU) milisaniyeler seviyesinde güvenli ve izole bir şekilde yürütülür."
                  : "By compiling the CPython core using Emscripten to WebAssembly (WASM) binaries, Pyodide loads core scientific libraries like NumPy and Pandas as WASM blobs. Scripts compile and evaluate directly on local hardware, maximizing user data privacy and reducing latency to millisecond thresholds."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--fg)] mb-3">{language === "tr" ? "Lineer Cebir Görselleştirmeleri ve Regresyon Matematiksel Modeli" : "Linear Algebra Visualizations & Regression Models"}</h3>
              <p className="mb-4">
                {language === "tr"
                  ? "Laboratuvardaki lineer cebir görselleştiricisi, matris işlemlerinin ve koordinat dönüşümlerinin geometrik izdüşümlerini çıkarır. Nokta çarpım (dot product) hücresel animasyonu, doğrusal dönüşümlerin vektör uzaylarında oluşturduğu değişimi (rotasyon, ölçekleme ve kayma) donanım ivmeli (GPU) HTML5 Canvas API kullanarak saniyede 60 kare hızında canlandırır."
                  : "The matrix multiplier and vector sandbox translate linear algebra equations into interactive geometries. The cellular dot product animation renders coordinate system mappings (such as scaling, shearing, and rotation) using hardware-accelerated GPU graphics buffers at a fluid 60 frames per second."}
              </p>
              <p>
                {language === "tr"
                  ? "Gradyan uydurma modülü ise etkileşimli lineer regresyon modelini çalıştırır. Kullanıcıların ekrana yerleştirdiği veri noktalarına en küçük kareler (least-squares) yöntemiyle y = mx + b doğrusunu uydurur. Eğim (m) ve kesme noktası (b), hata karesi toplamını en aza indiren kısmi türev formülleriyle asenkron olarak hesaplanır ve anlık olarak çizdirilir."
                  : "The linear regression simulator models predictive curve fitting. Using plotted data coordinates, the application fits a line of best fit y = mx + b using the Ordinary Least Squares (OLS) mathematical model. The slope (m) and intercept (b) are calculated asynchronously using partial derivatives to minimize squared residual sums."}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OPEN SOURCE PHILOSOPHY */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg flex flex-col md:flex-row justify-between items-center gap-8 border"
            style={{
              backgroundColor: theme === "dark" ? "rgba(239, 90, 90, 0.05)" : "rgba(172, 35, 35, 0.05)",
              borderColor: theme === "dark" ? "rgba(239, 90, 90, 0.2)" : "rgba(172, 35, 35, 0.2)"
            }}
          >
            <div className="flex-1">
              <span className={`font-mono text-xs font-bold block mb-2 uppercase tracking-widest ${
                theme === "dark" ? "text-[#ef5a5a]" : "text-[#ac2323]"
              }`}>
                {t("lab.openSourceNote")}
              </span>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed font-serif text-justify">
                {t("lab.openSourceDesc")}
              </p>
            </div>
            <a
              href="https://github.com/AhmetCinar1283/Polimelo"
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
            >
              <Code size={14} /> {t("lab.viewOnGithub")}
            </a>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
