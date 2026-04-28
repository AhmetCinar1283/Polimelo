# Polyvo — İngilizce Öğrenmenin Akıllı Yolu

## Vizyon

Polyvo, kelime ezberini kalıcı öğrenmeye dönüştürmek için tasarlanmış bir İngilizce öğrenme uygulamasıdır. Sıradan flashcard uygulamalarının ötesine geçen Polyvo; bilişsel bilimlerin en güçlü öğrenme yöntemlerinden biri olan **aralıklı tekrar** (spaced repetition) sistemini, oyun temelli aktivitelerle ve zengin içerik formatlarıyla birleştirerek kullanıcıların İngilizce kelime dağarcıklarını kısa sürede ve kalıcı biçimde geliştirmelerine yardımcı olur.

Temel inancımız şudur: Doğru zamanda, doğru yöntemle çalışmak — saatler süren tekrarsız ezberden çok daha etkilidir.

---

## Ne İşe Yarar?

### Akıllı Tekrar Sistemi (SM-2)
Polyvo, her kelimeyi ne zaman unutmak üzere olduğunuzu hesaplar ve tam o an önünüze getirir. Bildiğiniz kelimeleri boşuna tekrarlamazsınız; zorlandıklarınız daha sık gelir. Zamanla tüm kelimeler uzun süreli belleğe yerleşir.

### Çoklu Çalışma Modları
Kullanıcılar farklı öğrenme tarzlarına göre çalışma modunu seçebilir:

- **Flashcard** — Klasik kart çevirme; İngilizce → Türkçe veya Türkçe → İngilizce yönünde, telaffuz, tanım, eş anlamlı ve örnek cümle desteğiyle
- **Cloze (Boşluk Doldurma)** — Cümle içinde geçen kelimeleri bağlamdan tahmin etme; kelimeyi izole değil, kullanımı içinde öğrenme
- **Test** — Çoktan seçmeli sorularla bilgi ölçme ve pekiştirme
- **Deeplearn** — Gelişmiş seans modu; kart sırası ve oturum yönetimi üzerinde tam kontrol

### Oyun Merkezi
Öğrenmeyi oyuna dönüştüren 4 aktif oyun:

| Oyun | Açıklama |
|---|---|
| **PolyFlip** | Eşleştirme kartı oyunu; kelime çiftlerini hafızada bulma |
| **FlapyChicken** | Flappy Bird tarzı; uçan tavukla doğru kelimeyi seçme yarışı |
| **Tug of War** | Kelime yazma yarışı; AI rakiple hız ve doğruluk sınavı |
| **Bil ve Fethet** | Altıgen harita üzerinde toprak fethi; her doğru cevap yeni alan kazandırır |

Oyunlar da SM-2 sistemine bağlıdır; oyun içinde yapılan doğru/yanlış tercihler öğrenme ilerlemenizi günceller.

---

## Öne Çıkan Özellikler

- **Çevrimdışı Çalışma** — İnternet bağlantısı olmadan tam işlevsellik; veriler yerel cihazda saklanır, bağlantı gelince otomatik senkronize edilir
- **Kişisel Deste (Deck) Yönetimi** — Kullanıcılar kendi kart destelerini oluşturabilir, düzenleyebilir, klasörlere ayırabilir ve paylaşabilir
- **Topluluk İçerikleri** — Diğer kullanıcıların hazırladığı desteler keşfedilebilir ve doğrudan çalışılabilir
- **Hatırlatıcı ve Görev Sistemi** — Belirli desteler için tarih bazlı çalışma hatırlatıcıları oluşturulabilir
- **İlerleme Takibi** — Her kelimenin öğrenme aşaması (başlangıç → tekrar → mezun) ayrı ayrı izlenir

---

## Kimler İçin?

- Sınavlara (YDS, YÖKDİL, IELTS, TOEFL) hazırlanan öğrenciler
- İngilizce kelime dağarcığını sistematik biçimde geliştirmek isteyen yetişkinler
- Öğrencilerine kişisel kelime listeleri hazırlamak isteyen öğretmenler
- Oyunlaştırılmış öğrenmeyi tercih eden herkes

---

## Platform

Polyvo; **web** (polyvo.polimelo.com) üzerinden tarayıcıda ve **Android** uygulaması olarak kullanılabilir. İki platform da tam özellikli ve senkronizedir; biri üzerinde başlanan çalışma diğerinde kaldığı yerden devam eder.

---

## Teknik Özet (AI'a not — teknik referans, pazarlama metnine dahil edilmez)

- **Framework:** Next.js (static export), Android via Capacitor
- **Backend:** Firebase (Firestore, Auth, Cloud Functions)
- **Yerel depolama:** Dexie (IndexedDB) — çevrimdışı queue + sync
- **Algoritma:** SM-2 spaced repetition (özelleştirilmiş, learning/review/graduated aşamaları)
- **İçerik tipleri:** flashcard, cloze, test, subtitle
- **State:** Redux Toolkit
- **UI:** MUI + özel tema sistemi
