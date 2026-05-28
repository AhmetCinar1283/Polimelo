# Polyvo: Akıllı İngilizce Öğrenme Platformu

**Canlı Demo:** [polyvo.polimelo.com](https://polyvo.polimelo.com)

## Proje Hakkında
Polyvo, kelime ezberini sıkıcı bir rutin olmaktan çıkarıp kalıcı ve eğlenceli bir öğrenme deneyimine dönüştürmek için geliştirdiğim bir İngilizce kelime öğrenme platformudur. Bilişsel bilimlerin en etkili yöntemlerinden biri olan **Aralıklı Tekrar (Spaced Repetition)** sistemini temel alan bu uygulama, öğrenme sürecini oyunlaştırarak dil öğrenmeyi bir alışkanlık haline getirmeyi hedefler. Hem web üzerinden hem de Android uygulaması olarak kullanılabilmektedir.

## Motivasyonum (Neden Geliştirdim?)
Dil öğrenirken karşılaşılan en büyük sorunlardan biri "öğrenilen kelimelerin hızla unutulmasıdır". Geleneksel kelime kartı uygulamalarının bu sorunu çözmede yetersiz kaldığını ve çoğunun kullanıcıyı motive etmekten uzak, sıkıcı bir deneyim sunduğunu fark ettim. 

Polyvo'yu geliştirirken iki temel amacım vardı:
1. **Bilimsel ve Etkili Öğrenme:** Kelimelerin unutulma eğrisini hesaplayarak tam unutulmak üzereyken tekrar edilmesini sağlayan SM-2 algoritmasını entegre etmek.
2. **Eğlence ve Etkileşim:** Öğrenme sürecini oyunlaştırma (gamification) ile destekleyerek kullanıcıların sıkılmadan pratik yapmasını sağlamak.

Ayrıca teknik bir meydan okuma olarak; çevrimdışı (offline-first) çalışabilen, veri senkronizasyonunu kusursuz yöneten ve tek bir kod tabanından hem web hem de mobil (Android) uygulama üretebilen tam donanımlı (full-stack) bir sistem inşa etmek istedim.

## Öne Çıkan Özellikler

- **Akıllı Tekrar Algoritması (SM-2):** Kullanıcının zorlandığı kelimeleri daha sık, iyi bildiklerini ise daha nadir karşına çıkararak uzun süreli belleğe aktarımı optimize eder. Kullanıcının her kelimesi için tek tek işlem yapılır ki kelime atlanmaz.
- **Zengin Çalışma Modları:** Klasik Flashcard (kelime kartı) deneyiminin yanı sıra, bağlam içinde öğrenmeyi sağlayan **Cloze (Boşluk Doldurma)**, **Testler** ve özelleştirilebilir **Deeplearn** seansları sunar.
- **Öğrenmeyi Oyunlaştıran Mini Oyunlar:** Kelime ezberlemeyi eğlenceli hale getiren 4 farklı oyun entegre edilmiştir:
  - *PolyFlip:* Hafıza tabanlı eşleştirme.
  - *FlapyChicken:* Hız ve refleks odaklı kelime seçimi.
  - *Tug of War:* Yapay zeka rakibe karşı kelime yazma yarışı.
  - *Bil ve Fethet:* Stratejik bir harita üzerinde doğru cevaplarla toprak kazanma.
- **Offline-First (Çevrimdışı Çalışma):** İnternet bağlantısı olmasa dahi uygulama tam performansla çalışır. İnternet bağlantısı sağlandığında tüm veriler otomatik olarak bulutla senkronize edilir.
- **Kişiselleştirme ve Topluluk:** Kullanıcıların kendi kelime destelerini oluşturabilmesi ve topluluk tarafından paylaşılan desteleri keşfedebilmesi.
- **Pdf Okuyucu:** Pdf okuyucu sayesinde öğrenmek istenilen dilde kitaplar okuyarak oradan kullanıcı kendi kelime destelerini oluşturup polyvo ekosistemine katabilir.

## Teknik Altyapı ve Kullandığım Teknolojiler

Bu projeyi modern web ve mobil teknolojilerini harmanlayarak geliştirdim:

- **Frontend & UI:** Next.js (Static Export), React, Redux Toolkit (State Management), Material-UI (MUI) ve özel tema sistemi.
- **Mobil Adaptasyon:** Android platformu için kapasitör (Capacitor) kullanılarak web uygulamasının native mobil deneyime dönüştürülmesi.
- **Backend & Veritabanı:** Firebase (Firestore, Authentication, Cloud Functions), Cloudflare (worker, D1, KV).
- **Yerel Veri Yönetimi:** Çevrimdışı çalışma ve veri senkronizasyonu için Dexie (IndexedDB) mimarisi.

Polyvo, sadece bir dil öğrenme aracı değil; modern web teknolojilerinin kapasitesini, veri senkronizasyonunu ve kullanıcı deneyimini (UX) en üst düzeyde tutmayı hedeflediğim, baştan sona kendi tasarlayıp geliştirdiğim kapsamlı bir üründür.
