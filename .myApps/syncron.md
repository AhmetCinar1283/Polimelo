# Syncron

**Syncron**, Next.js kullanılarak geliştirilmiş, zihni zorlayan ve aynı anda birden fazla objeyi kontrol etmeye dayalı, grid (ızgara) tabanlı bir bulmaca oyunudur. Web, Android ve Masaüstü (Electron) platformlarında eşzamanlı olarak çalışabilen bu oyun, hem oyuncuların algılarını test etmeyi hem de kendi bölümlerini yaratıp toplulukla paylaşmalarını sağlayan bir platform sunar.

## 🎯 Motivasyon ve Amacım

Geliştirici olarak temel motivasyonum, oyuncuların aynı anda farklı hareket kurallarına sahip (örneğin biri sağa giderken diğeri sola giden) nesneleri yönlendirerek çözüm aramasını gerektiren; mekanikleri basit, öğrenmesi kolay ancak ustalaşması zor bir oyun yaratmaktı.

Syncron, sadece eğlenceli bir bulmaca oyunu olmanın ötesinde, modern web teknolojilerinin (Next.js, Firebase, Electron, Capacitor) bir araya gelerek ne kadar güçlü ve **çoklu platform destekli (cross-platform)** bir deneyim sunabileceğini kanıtladığım bir projedir. Ayrıca, kullanıcıların yalnızca oynamakla kalmayıp **kendi bulmacalarını tasarlayabilmesi** (Level Editor), bu projeyi durağan bir oyun olmaktan çıkarıp topluluk odaklı, dinamik bir platforma dönüştürüyor.

## 🎮 Oyunun Temel Mekaniği

Oyuncu, tek bir yön tuşuna (veya ekrandaki kontrollere) basarak grid üzerindeki iki farklı objeyi **aynı anda** hareket ettirir.
- **Bağımsız Hareket Modları:** Her objenin kendi hareket kuralı vardır. Bir obje basılan yönde hareket ederken (normal), diğeri tam zıt yönde (reversed) hareket edebilir.
- **Hedef:** Her iki objeyi de engelleri aşarak aynı anda kendi hedef noktalarına (target cells) ulaştırmak.
- **Zorluk:** Objelerin hareketleri birbirine bağlı olduğu için, bir objenin doğru konuma gelmesi adına diğer objenin duvarlara takılmasını sağlamak veya özel zemin mekaniklerini stratejik olarak kullanmak gerekir.

## ✨ Öne Çıkan Özellikler

- **Çoklu Platform Desteği (Cross-Platform):** Web üzerinden kesintisiz oynanabilmesinin yanı sıra, Capacitor altyapısı ile native **Android** uygulaması ve Electron ile **Windows/macOS/Linux** masaüstü uygulaması olarak çalışabilir.
- **Zengin Oyun İçi Mekanikler:** 
  - Üzerinden geçerken kaymayı sağlayan **Buz Zeminler (Ice Slides)**
  - Objeleri haritanın başka bir noktasına anında ulaştıran **Işınlayıcılar (Teleporters)**
  - İtilebilen oyun içi kutular ve onları hareket ettiren **Taşıma Bantları (Conveyors)**
  - Çözümü daha da karmaşıklaştıran, enerjiyle çalışan özel hücreler (**Power Systems**)
- **Topluluk Odaklı Bölüm Tasarımı (Level Editor):** Oyuncuların kendi yaratıcılıklarını kullanarak yeni bölümler tasarlamasına, bunları buluta kaydetmesine ve admin onayından geçtikten sonra diğer oyuncularla paylaşmasına olanak tanıyan kapsamlı bir editör.
- **Çevrimdışı ve Bulut Senkronizasyonu:** İnternet bağlantısı olmasa dahi oynanabilirlik sunan **Dexie (IndexedDB)** altyapısı ve cihazlar arası ilerlemeyi eşitleyen **Firebase Firestore** entegrasyonu.
- **Neon ve Siberpunk Tasarım:** Uzay boşluğunda veya siberpunk bir evrende geçiyormuş hissi veren, göze hitap eden neon tasarımlı modern karanlık tema.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** Next.js 16 (App Router), React, TypeScript, Tailwind CSS
- **Backend & Veritabanı:** Firebase (Authentication, Firestore), Dexie.js (Local Offline DB)
- **Desktop & Mobil:** Electron (Masaüstü), Capacitor (Android)
- **Analitik ve Takip:** Oyuncu davranışlarını (bölüm başlama, başarı, pes etme) izlemek için Google Analytics 4 (GA4) entegrasyonu.

---
*Syncron, hem yenilikçi bir oyun tasarımının hem de modern "Full-Stack" web geliştirme süreçlerinin başarılı bir şekilde harmanlanmış halidir.*
