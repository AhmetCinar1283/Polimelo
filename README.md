# Polimelo — Dijital Deneyimler Stüdyosu

Polimelo; öğrenmeyi, oynamayı ve keşfetmeyi kalıcı dijital deneyimlere dönüştüren minimalist bir dijital ürün stüdyosu ve deneysel portfolyo platformudur. Next.js 16, React 19 ve Tailwind CSS v4 mimarisiyle sıfırdan tasarlanan bu proje; akıllı öğrenme algoritmaları, etkileşimli sandbox modülleri ve çok dilli bir altyapı sunar.

---

## ✨ Öne Çıkan Modüller & Projeler

### 1. 🧠 Polyvo (Akıllı Dil Öğrenme)
* **Açıklama:** SuperMemo-2 (SM-2) aralıklı tekrar (spaced repetition) algoritması üzerine kurulmuş yenilikçi bir dil öğrenme modülü.
* **Özellikler:** Kelimelerin unutulma eşiğini (unutma eğrisini) milisaniyelik hesaplarla takip ederek, tam unutulma aşamasında aktif hatırlama (active recall) metodunu devreye sokar.

### 2. 🕹️ Syncron (Neon Bulmaca Oyunu)
* **Açıklama:** Retro arcade estetiğini minimalist modern çizgilerle birleştiren, grid tabanlı bir bulmaca oyunu.
* **Özellikler:** İki bağımsız nesneyi tek tuşla eş zamanlı hareket ettirme mekaniği üzerine kurulu, koordinasyon ve mantık odaklı seviyeler sunar. Framer Motion ile pürüzsüz mikro animasyonlar içerir.

### 3. 🧪 Polimelo Lab (Deneysel Sandbox)
* **Açıklama:** Yapay zeka, bilgisayar bilimleri ve matematik teorilerini görselleştiren açık kaynaklı bir deneysel laboratuvardır.
* **Özellikler:** Tarayıcı üzerinde doğrudan çalışan HTML5 Canvas, Web Workers ve WebAssembly destekli modüller ile akademik ders notlarını birleştirir.

### 4. 📈 Spaced Repetition Simülatörü
* **Açıklama:** Unutma eğrisini bükme felsefesini somutlaştıran interaktif bir grafik simülatörü.
* **Özellikler:** Kullanıcıların hatırlama kalitesi, kolaylık katsayısı (EF) gibi parametreleri değiştirerek bilginin hafızadaki 30 günlük seyir grafiğini gerçek zamanlı takip etmelerini sağlar.

---

## 🛠️ Teknolojik Altyapı

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
* **Kütüphaneler:**
  * **Tasarım & Stil:** [Tailwind CSS v4](https://tailwindcss.com/) & CSS Değişkenleri
  * **Animasyonlar:** [Framer Motion](https://www.framer.com/motion/) (Kart Yığınlama / Card Stacking scroll efektleri ve mikro etkileşimler)
  * **İkon Seti:** [Lucide React](https://lucide.dev/)
* **Çoklu Dil Desteği (i18n):** Context API tabanlı, dinamik dil geçişli Türkçe (`tr.ts`) ve İngilizce (`en.ts`) sözlük yapısı.
* **Tema Motoru:** Tarayıcı tercihi ve kullanıcı seçimine duyarlı, özel renk şemalı Açık/Koyu tema yönetimi.

---

## 📁 Proje Klasör Yapısı

```text
src/
├── app/                  # Sayfa yönlendirmeleri ve alt modül rotaları
│   ├── about/            # Stüdyo vizyonu ve hikayesi
│   ├── blog/             # Teknik makaleler ve geliştirme günlükleri
│   ├── contact/          # İletişim ve geri bildirim formu
│   ├── lab/              # Akademik simülasyonlar (Polimelo Lab)
│   ├── polyvo/           # Polyvo projesinin detayları
│   ├── syncron/          # Syncron projesinin detayları
│   └── spaced-repetition-calculator/ # SM-2 Algoritma Simülatörü
├── components/           # Navigasyon, Footer ve Çerez Bildirimi gibi ortak bileşenler
├── context/              # Dil (LanguageContext) ve Tema (ThemeContext) sağlayıcıları
├── data/                 # Blog yazıları ve statik veri kaynakları
└── dictionaries/         # Lokalizasyon dosyaları (tr.ts & en.ts)
```

---

## 🚀 Başlangıç & Kurulum

Yerel ortamınızda projeyi ayağa kaldırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Çalıştırın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızdan `http://localhost:3000` adresine giderek projeyi görüntüleyebilirsiniz.

3. **Üretim Derlemesi Alın (Build):**
   ```bash
   npm run build
   npm run start
   ```

---

## 📝 Lisans ve Katkıda Bulunma

Polimelo stüdyosunun altyapısı ve **Polimelo Lab** modülü açık kaynaklı bir vizyona sahiptir. Proje hakkında fikirlerinizi paylaşmak veya katkıda bulunmak için pull request gönderebilir ya da [İletişim](https://polimelo.com/contact) sayfamızdan bizimle iletişime geçebilirsiniz.
