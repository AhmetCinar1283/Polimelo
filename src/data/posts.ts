export interface BlogPost {
  slug: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  category: { 
    tr: "Eğitim" | "Oyun Tasarımı" | "Yazılım"; 
    en: "Education" | "Game Design" | "Software"; 
  };
  readTime: { tr: string; en: string };
  date: { tr: string; en: string };
  author: string;
  content: { tr: string; en: string };
}

import { sm2_algoritmasi_ve_ogrenme } from "./blog/sm2-algoritmasi-ve-ogrenme";
import { dil_ogreniminde_aktif_geri_cagirma } from "./blog/dil-ogreniminde-aktif-geri-cagirma";
import { puzzle_oyunu_tasarlamak } from "./blog/puzzle-oyunu-tasarlamak";
import { puzzle_oyunlarinda_zorluk_ayarlama } from "./blog/puzzle-oyunlarinda-zorluk-ayarlama";
import { nextjs_capacitor_electron_entegrasyonu } from "./blog/nextjs-capacitor-electron-entegrasyonu";
import { kullanici_verilerini_dogru_analiz_etme } from "./blog/kullanici-verilerini-dogru-analiz-etme";
import { polimelo_lab_interaktif_yapay_zeka_ogrenimi } from "./blog/polimelo-lab-interaktif-yapay-zeka-ogrenimi";

// Archived / Hidden posts (still accessible via URL but not listed on index page)
import { webassembly_tarayicida_performans_analizi } from "./blog/webassembly-tarayicida-performans-analizi";
import { react_19_compiler_ve_yenilikler } from "./blog/react-19-compiler-ve-yenilikler";
import { offline_first_mimari_ve_dexie_js } from "./blog/offline-first-mimari-ve-dexie-js";
import { capacitor_js_ile_native_kopruler_kurmak } from "./blog/capacitor-js-ile-native-kopruler-kurmak";
import { tailwind_css_v4_derleyici_motoru } from "./blog/tailwind-css-v4-derleyici-motoru";
import { framer_motion_mikro_etkilesimler } from "./blog/framer-motion-mikro-etkilesimler";
import { nextjs_static_export_optimizasyonlari } from "./blog/nextjs-static-export-optimizasyonlari";
import { indexeddb_performans_ve_limitler } from "./blog/indexeddb-performans-ve-limitler";
import { siberpunk_tasarim_estetigi } from "./blog/siberpunk-tasarim-estetigi";
import { yapay_sinir_aglari_matematigi } from "./blog/yapay-sinir-aglari-matematigi";
import { supermemo_sm2_vs_sm17_karsilastirma } from "./blog/supermemo-sm2-vs-sm17-karsilastirma";
import { html5_canvas_ile_vektor_gorsellestirme } from "./blog/html5-canvas-ile-vektor-gorsellestirme";
import { pyodide_ile_tarayicida_python_calistirmak } from "./blog/pyodide-ile-tarayicida-python-calistirmak";
import { css_degiskenleri_ve_tema_motorlari } from "./blog/css-degiskenleri-ve-tema-motorlari";
import { bulmaca_oyunlarinda_kullanici_deneyimi_ux } from "./blog/bulmaca-oyunlarinda-kullanici-deneyimi-ux";
import { i18n_sitemap_ve_robots_txt_seo_yapilandirmasi } from "./blog/i18n-sitemap-ve-robots-txt-seo-yapilandirmasi";
import { firestore_offline_senkronizasyon_politikasi } from "./blog/firestore-offline-senkronizasyon-politikasi";
import { webview_ortamlarinda_guvenli_auth_yonetimi } from "./blog/webview-ortamlarinda-guvenli-auth-yonetimi";

export const BLOG_POSTS: BlogPost[] = [
  sm2_algoritmasi_ve_ogrenme,
  dil_ogreniminde_aktif_geri_cagirma,
  puzzle_oyunu_tasarlamak,
  puzzle_oyunlarinda_zorluk_ayarlama,
  nextjs_capacitor_electron_entegrasyonu,
  kullanici_verilerini_dogru_analiz_etme,
  polimelo_lab_interaktif_yapay_zeka_ogrenimi,
  react_19_compiler_ve_yenilikler,
  tailwind_css_v4_derleyici_motoru,
  framer_motion_mikro_etkilesimler,
  supermemo_sm2_vs_sm17_karsilastirma
];

export const ARCHIVED_BLOG_POSTS: BlogPost[] = [
  webassembly_tarayicida_performans_analizi,
  offline_first_mimari_ve_dexie_js,
  capacitor_js_ile_native_kopruler_kurmak,
  nextjs_static_export_optimizasyonlari,
  indexeddb_performans_ve_limitler,
  siberpunk_tasarim_estetigi,
  yapay_sinir_aglari_matematigi,
  html5_canvas_ile_vektor_gorsellestirme,
  pyodide_ile_tarayicida_python_calistirmak,
  css_degiskenleri_ve_tema_motorlari,
  bulmaca_oyunlarinda_kullanici_deneyimi_ux,
  i18n_sitemap_ve_robots_txt_seo_yapilandirmasi,
  firestore_offline_senkronizasyon_politikasi,
  webview_ortamlarinda_guvenli_auth_yonetimi
];
