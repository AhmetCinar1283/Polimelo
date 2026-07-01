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
  content: { tr: string; en: string }; // HTML formatında zengin içerik
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sm2-algoritmasi-ve-ogrenme",
    title: {
      tr: "SM-2 Algoritması ve İnsan Beyninin Öğrenme Biçimi",
      en: "SM-2 Algorithm and How the Human Brain Learns"
    },
    description: {
      tr: "Aralıklı tekrar (Spaced Repetition) yönteminin arkasındaki matematiksel formülleri ve hafızanın bilimsel işleyişini inceleyin.",
      en: "Examine the mathematical formulas behind the Spaced Repetition method and the scientific functioning of human memory."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "10 Haziran 2026",
      en: "June 10, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Öğrenmek, bilginin beyne kaydedilmesi kadar, ihtiyaç duyulduğunda oradan geri çağrılabilmesi sürecidir. Ancak insan beyni, biyolojik yapısı gereği kullanmadığı bilgileri hızla unutmaya eğilimlidir. 19. yüzyılın sonlarında Alman psikolog Hermann Ebbinghaus tarafından ortaya konan <strong>"Unutma Eğrisi" (Forgetting Curve)</strong>, yeni öğrenilen bir bilginin tekrar edilmediği takdirde günler içinde nasıl silinip gittiğini bilimsel olarak kanıtlamıştır. Peki, bu unutma sürecini tersine çevirmek ve bilgiyi kalıcı hafızaya (long-term memory) aktarmak nasıl mümkündür? İşte burada devreye <strong>Aralıklı Tekrar (Spaced Repetition)</strong> ve onun en ünlü uygulaması olan <strong>SM-2 Algoritması</strong> giriyor.</p>

        <h3>Hafıza ve Sinaptik Bağlar</h3>
        <p>Beynimizde milyarlarca nöron bulunur ve her yeni bilgi, bu nöronlar arasında yeni sinaptik bağların kurulması anlamına gelir. Bir bilgiyi ilk kez okuduğumuzda kurulan bağ oldukça zayıftır. Eğer bilgi hemen arkasından tekrar tekrar okunursa (blok çalışma veya ezberleme), beyin bunu geçici bir elektrik aktivitesi olarak görür ve kısa süre sonra bağı zayıflatır. Ancak, bilgi tam unutulmak üzereyken (bağ kopma noktasına gelmişken) hatırlanmaya çalışılırsa, beyin "Bu bilgi hayati öneme sahip" sinyali üretir ve sinaptik bağı çok daha güçlü bir şekilde yeniden inşa eder. Her başarılı aralıklı tekrar, unutma süresini katlanarak uzatır.</p>

        <h3>SM-2 Algoritmasının Matematiksel Mantığı</h3>
        <p>Polimelo bünyesindeki dil öğrenme uygulamamız <strong>Polyvo</strong>'da aktif olarak kullandığımız SM-2 algoritması, Polonyalı araştırmacı Piotr Woźniak tarafından 1980'lerin sonunda geliştirilmiştir. Algoritma, her bir kelime veya bilgi kartı için bir sonraki tekrar zamanını (Interval) şu değişkenlere dayanarak hesaplar:</p>
        <ul>
          <li><strong>q (Quality - Cevap Kalitesi):</strong> Kullanıcının karta verdiği 0 ile 5 arasındaki not. (0: Tamamen unutulmuş, 5: Kusursuz hatırlama).</li>
          <li><strong>EF (Easiness Factor - Kolaylık Katsayısı):</strong> Kartın öğrenilme kolaylığını temsil eder. Başlangıç değeri 2.5'tir. Kart kolaylaştıkça büyür, zorlaştıkça küçülür.</li>
          <li><strong>n (Repetition - Tekrar Sayısı):</strong> Kartın üst üste kaç kez başarıyla hatırlandığı.</li>
        </ul>

        <p>Bir kartın sonraki tekrar aralığı (I), gün cinsinden şu formülle belirlenir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>I(1) = 1 gün
I(2) = 6 gün
n &gt; 2 için: I(n) = I(n-1) * EF</code></pre>

        <p>Her başarılı tekrardan (q &gt;= 3) sonra Kolaylık Katsayısı (EF) şu formüle göre güncellenir:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))</code></pre>
        <p>Eğer kullanıcı karta 3'ün altında bir not verirse (q &lt; 3), yani bilgiyi hatırlayamazsa, tekrar sayısı (n) sıfırlanır ve kart "öğrenme aşamasına" geri döner. Interval (aralık) yeniden 1 günden başlar, ancak EF değeri düşürülerek kartın daha sık karşımıza çıkması sağlanır.</p>

        <h3>Neden Blok Ezber yerine Aralıklı Tekrar?</h3>
        <p>Sınavdan önceki gece sabaha kadar çalışmak (cramming), bilgiyi kısa süreli belleğe yığar. Sınav geçtikten birkaç gün sonra ise bu bilgilerin neredeyse tamamı unutulur. SM-2 algoritması ise minimum çabayla maksimum hatırlama oranını hedefler. Günde saatlerce çalışmak yerine, algoritmanın belirlediği günde sadece 10-15 dakika ayırarak binlerce kelimeyi yıllar boyunca unutmayacak şekilde hafızanıza kazıyabilirsiniz. Polyvo'da geliştirdiğimiz sistem tam olarak bu bilimsel temele dayanmakta ve kullanıcılarımızın zamanını en verimli şekilde kullanmasını sağlamaktadır.</p>
      `,
      en: `
        <p>Learning is as much about recording information in the brain as it is about retrieving it when needed. However, the human brain naturally tends to forget unused information quickly. Established in the late 19th century by German psychologist Hermann Ebbinghaus, the <strong>\"Forgetting Curve\"</strong> scientifically proves how newly learned information fades away within days if not reviewed. So, how is it possible to reverse this forgetting process and transfer information to long-term memory? This is where <strong>Spaced Repetition</strong> and its most famous implementation, the <strong>SM-2 Algorithm</strong>, come into play.</p>

        <h3>Memory and Synaptic Connections</h3>
        <p>There are billions of neurons in our brain, and every piece of new information means the creation of new synaptic connections between these neurons. The connection established when we read information for the first time is quite weak. If the information is read repeatedly right after (cramming), the brain perceives this as temporary electrical activity and soon weakens the connection. However, if the brain attempts to recall the information just as it is about to be forgotten (when the connection is on the verge of breaking), it produces a signal that \"this information is vital\" and rebuilds the synaptic connection much stronger. Each successful spaced review exponentially extends the forgetting period.</p>

        <h3>Mathematical Logic of the SM-2 Algorithm</h3>
        <p>The SM-2 algorithm, which we actively use in our language learning application <strong>Polyvo</strong> under the Polimelo studio, was developed by Polish researcher Piotr Woźniak in the late 1980s. The algorithm calculates the next review time (Interval) for each word or flashcard based on the following variables:</p>
        <ul>
          <li><strong>q (Quality):</strong> The score from 0 to 5 given to the card by the user. (0: Completely forgotten, 5: Perfect recall).</li>
          <li><strong>EF (Easiness Factor):</strong> Represents how easy the card is to learn. The starting value is 2.5. It increases as the card gets easier and decreases as it gets harder.</li>
          <li><strong>n (Repetition Count):</strong> The number of times the card has been successfully recalled in a row.</li>
        </ul>

        <p>The next review interval (I) of a card, in days, is determined by the following formula:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>I(1) = 1 day
I(2) = 6 days
For n &gt; 2: I(n) = I(n-1) * EF</code></pre>

        <p>After each successful review (q &gt;= 3), the Easiness Factor (EF) is updated using the following formula:</p>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-lg my-4 overflow-x-auto block font-mono text-sm"><code>EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))</code></pre>
        <p>If the user scores the card below 3 (q &lt; 3), meaning they failed to recall it, the repetition count (n) is reset, and the card returns to the \"learning phase.\" The interval starts again at 1 day, but the EF value is decreased to ensure the card appears more frequently.</p>

        <h3>Why Spaced Repetition Over Cramming?</h3>
        <p>Studying all night before an exam (cramming) piles information into short-term memory. A few days after the exam is over, almost all of this information is forgotten. The SM-2 algorithm, on the other hand, aims for maximum retention with minimum effort. Instead of studying for hours a day, you can save thousands of words to your memory for years by spending just 10-15 minutes on the day determined by the algorithm. The system we developed in Polyvo is based exactly on this scientific foundation, ensuring our users use their time most efficiently.</p>
      `
    }
  },
  {
    slug: "dil-ogreniminde-aktif-geri-cagirma",
    title: {
      tr: "Dil Öğreniminde Aktif Geri Çağırma (Active Recall)",
      en: "Active Recall in Language Learning"
    },
    description: {
      tr: "Sadece kelime listesi okuyarak dil öğrenemezsiniz. Beyni zorlayan aktif hatırlama tekniklerinin neden daha etkili olduğunu keşfedin.",
      en: "You cannot learn a language just by reading vocabulary lists. Discover why active recall techniques that challenge the brain are far more effective."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "6 dk",
      en: "6 min"
    },
    date: {
      tr: "8 Haziran 2026",
      en: "June 8, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Birçoğumuz yabancı dil öğrenirken saatlerce kelime listelerine bakmış, sayfaların altını renkli kalemlerle çizmiş veya kelime kartlarının hem önünü hem arkasını aynı anda okumuşuzdur. Ancak günler sonra o kelimelerle karşılaştığımızda anlamlarını hatırlamakta zorlanırız. Bunun sebebi, uyguladığımız yöntemlerin <strong>"Pasif Çalışma" (Passive Review)</strong> kategorisine girmesidir. Öğrenmeyi kalıcı kılmanın ve yabancı bir dili akıcı konuşabilmenin sırrı ise <strong>Aktif Geri Çağırma (Active Recall)</strong> tekniğinde saklıdır.</p>

        <h3>Pasif Çalışma Neden İşe Yaramaz?</h3>
        <p>Bir kitabı okurken veya bir kelime listesine bakarken beynimiz "tanıma" (recognition) modundadır. Bilgi gözümüzün önünde olduğu için onu bildiğimizi sanırız. Buna psikolojide <strong>"akıcılık illüzyonu" (illusion of competence)</strong> denir. Ancak bilgi önümüzden çekildiğinde ve onu kendi zihnimizden üretmemiz istendiğinde başarısız oluruz. Pasif çalışma, beyni yormadığı için konforludur ama nöronlar arasındaki bağları güçlendirmez.</p>

        <h3>Aktif Geri Çağırma Nedir?</h3>
        <p>Aktif Geri Çağırma, bir bilgiyi pasif olarak tüketmek yerine, zihnimizi o bilgiyi kendi kaynaklarından üretmeye (hatırlamaya) zorlama sürecidir. Beyne bilgi sokmaya çalışmak yerine, beyinden bilgi çekmeye çalışırız. Örneğin:</p>
        <ul>
          <li>Bir kelimenin Türkçe karşılığına doğrudan bakmak yerine, İngilizce tanımından kelimeyi tahmin etmeye çalışmak.</li>
          <li>Bir cümledeki boşluğu (Cloze test), seçenekler olmadan kendi hafızamızdan doldurmaya çabalamak.</li>
          <li>Kelimeyle ilgili kendi başımıza örnek bir cümle kurmaya çalışmak.</li>
        </ul>
        <p>Zihin hatırlamak için ne kadar zorlanırsa, bilginin uzun süreli belleğe geçiş süreci o kadar hızlanır. Hata yapmak bile bu sürecin bir parçasıdır; çünkü yanlış hatırlayıp doğrusunu gördüğümüzde beyin aradaki farkı kaydeder ve bir sonraki seferde daha güçlü bir bağ kurar.</p>

        <h3>Polyvo'da Aktif Geri Çağırma Uygulamaları</h3>
        <p>Dil öğrenme platformumuz <strong>Polyvo</strong>'yu tasarlarken, pasif hiçbir çalışma metoduna yer vermedik. Uygulama içerisindeki tüm modlar aktif geri çağırmayı tetikler:</p>
        <ol>
          <li><strong>Klasik Kart Çevirme (Flashcard):</strong> Kartın ön yüzünde sadece kelime veya cümle yer alır. Kullanıcı anlamı tahmin etmeden arka yüzü göremez. Zihin önce aramaya zorlanır.</li>
          <li><strong>Boşluk Doldurma (Cloze):</strong> Cümle içindeki kritik kelimeler gizlenir. Kullanıcı kelimeyi bağlamdan yola çıkarak kendi üretmek zorundadır.</li>
          <li><strong>Kelime Yazma Oyunları (Tug of War vb.):</strong> Kelimeyi sadece tanımak yetmez, harf hatası yapmadan klavyeden yazmak gerekir. Bu, motor becerileri ve aktif yazma hafızasını tetikler.</li>
        </ol>

        <h3>Dil Öğrenenler İçin Öneriler</h3>
        <p>Yeni bir dil öğrenirken defterlerinizi tekrar tekrar okumaktan vazgeçin. Kendinize sorular sorun, kelime listelerinin anlam kısımlarını kapatıp kendinizi test edin. Unutmayın, öğrenirken beyninizin yorulduğunu hissediyorsanız, doğru yoldasınız demektir. Polyvo tam da bu yorucu ama son derece verimli süreci oyunlaştırarak sizin için kolaylaştırmayı amaçlar.</p>
      `,
      en: `
        <p>Many of us have spent hours looking at vocabulary lists while learning a foreign language, underlining pages with colorful pens, or reading both sides of flashcards at the same time. Yet, when we encounter those words days later, we struggle to recall their meanings. This is because the methods we apply fall under the <strong>\"Passive Review\"</strong> category. The secret to permanent learning and speaking a foreign language fluently lies in the <strong>Active Recall</strong> technique.</p>

        <h3>Why Doesn't Passive Review Work?</h3>
        <p>While reading a book or looking at a vocabulary list, our brain is in \"recognition\" mode. Because the information is right in front of our eyes, we assume we know it. In psychology, this is called the <strong>\"illusion of competence\"</strong>. However, when the information is removed and we are asked to produce it from our own mind, we fail. Passive review is comfortable because it doesn't strain the brain, but it does not strengthen the connections between neurons.</p>

        <h3>What is Active Recall?</h3>
        <p>Active Recall is the process of forcing our mind to produce (recall) information from its own resources instead of passively consuming it. Instead of trying to put information into the brain, we try to pull information out of it. For example:</p>
        <ul>
          <li>Instead of looking directly at a word's translation, trying to guess the word from its description.</li>
          <li>Trying to fill in a blank in a sentence (Cloze test) from your own memory without multiple-choice options.</li>
          <li>Trying to construct an example sentence with the word on our own.</li>
        </ul>
        <p>The harder the mind struggles to recall, the faster the transition of information to long-term memory. Making mistakes is even part of this process; because when we recall incorrectly and see the correct version, the brain records the difference and builds a stronger connection next time.</p>

        <h3>Active Recall Implementations in Polyvo</h3>
        <p>While designing our language learning platform <strong>Polyvo</strong>, we did not include any passive study methods. All modes within the application trigger active recall:</p>
        <ol>
          <li><strong>Classic Card Flipping (Flashcard):</strong> Only the word or sentence is on the front side of the card. The user cannot see the back side without guessing the meaning. The mind is forced to search first.</li>
          <li><strong>Fill in the Blanks (Cloze):</strong> Critical words in the sentence are hidden. The user must produce the word based on the context.</li>
          <li><strong>Word Typing Games (Tug of War, etc.):</strong> Recognizing the word is not enough; it must be typed from the keyboard without spelling errors. This triggers motor skills and active writing memory.</li>
        </ol>

        <h3>Recommendations for Language Learners</h3>
        <p>Stop reading your notebooks over and over again when learning a new language. Ask yourself questions, cover the meaning sections of vocabulary lists, and test yourself. Remember, if you feel your brain is tired while learning, you are on the right track. Polyvo aims to make this tiring but extremely productive process easy for you by gamifying it.</p>
      `
    }
  },
  {
    slug: "puzzle-oyunu-tasarlamak",
    title: {
      tr: "Sıfırdan Puzzle Oyunu Tasarlamak: Mekanikler ve Ritim",
      en: "Designing a Puzzle Game from Scratch: Mechanics and Rhythm"
    },
    description: {
      tr: "Siberpunk esintili bulmaca oyunumuz Syncron'un tasarım sürecinden yola çıkarak, sürükleyici bulmaca mekanikleri oluşturmanın sırları.",
      en: "Secrets of creating immersive puzzle mechanics, based on the design process of our cyberpunk-inspired puzzle game Syncron."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "8 dk",
      en: "8 min"
    },
    date: {
      tr: "3 Haziran 2026",
      en: "June 3, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Bir bulmaca (puzzle) oyunu tasarlamak, oyuncuya bir problem sunmak ve onu çözmesini beklemekten çok daha fazlasıdır. İyi tasarlanmış bir bulmaca oyunu; oyuncuyla geliştirici arasında sessiz bir diyalogdur. Geliştirici kuralları koyar, oyuncu ise bu kuralların sınırlarını keşfederek zihinsel bir tatmin yaşar. Bu yazıda, siberpunk esintili ızgara (grid) tabanlı bulmaca oyunumuz <strong>Syncron</strong>'un geliştirme sürecinden yola çıkarak, başarılı bir bulmaca oyunu tasarlamanın temel prensiplerini ele alacağız.</p>

        <h3>1. Tek Bir Güçlü Çekirdek Mekanik (Core Mechanic)</h3>
        <p>Harika bir bulmaca oyunu karmaşık kurallarla başlamaz. Aksine, anlaşılması son derece kolay ama ustalaşması zor tek bir temel mekaniğe dayanır. Portal'da portal açmak, Tetris'te blokları döndürmek gibi. Syncron'da bizim seçtiğimiz çekirdek mekanik <strong>"Eş Zamanlılık" (Synchronicity)</strong> oldu. Oyuncu yön tuşuna bastığında tek bir karakteri değil, haritadaki iki farklı nesneyi aynı anda hareket ettirir. Bazen bu nesnelerden biri zıt (reversed) yönde gider. Kural basittir: "Sağa basarsan A sağa, B sola gider." Ancak bu basit kural, iki nesnenin duvarlara çarpma konumlarına göre birbirine göre olan mesafelerini değiştirme imkanı sunarak muazzam bir derinlik yaratır.</p>

        <h3>2. Mekaniklerin Katmanlandırılması ve Yeni Unsurlar</h3>
        <p>Sadece çekirdek mekanikle 50 seviye tasarlarsanız, oyun bir süre sonra monotonlaşır. Oyuncunun ilgisini canlı tutmak için yeni kurallar ve engeller (katmanlar) eklemelisiniz. Ancak bunları tek seferde değil, zamana yayarak tanıtmalısınız. Syncron'da süreci şöyle kurguladık:</p>
        <ul>
          <li><strong>İlk Seviyeler:</strong> Sadece eş zamanlı hareket ve duvarlar.</li>
          <li><strong>Sonraki Seviyeler:</strong> Momentum koruyan kaygan buz zeminler.</li>
          <li><strong>Orta Seviyeler:</strong> Objeleri yönlendiren konveyör bantları ve ışınlanma portalları.</li>
          <li><strong>İleri Seviyeler:</strong> Butonlar, kutu itme mekanikleri ve lazer engelleri.</li>
        </ul>
        <p>Her yeni unsur, çekirdek mekanikle etkileşime girmelidir. Örneğin, konveyör bandının üzerindeki bir kutuyu iterken, diğer nesneyi lazerin önüne siper etmek gibi kombinasyonlar oyuncuya "Keşfetme" hazzı yaşatır.</p>

        <h3>3. "Aha!" Anı (The Aha! Moment)</h3>
        <p>Bir bulmaca oyununun kalitesi, oyuncunun çözümü bulduğu andaki zihinsel patlamayla ölçülür. Oyuncu seviyeyi rastgele tuşlara basarak (deneme-yanılma ile) değil, zihninde planlama yaparak çözmelidir. Bunun için seviye tasarlarken önce oyuncuyu bir açmaza sokarız. Yol kapalı görünür, iki obje aynı anda hedefe ulaşamıyor gibidir. Oyuncu haritayı inceler, nesnelerin konumunu senkronize etmek için duvarları nasıl kullanacağını fark eder ve hamleleri sırayla yapar. Çözüme ulaştığında hissettiği şey şans değil, kendi zekasının başarısıdır. İşte bu his, Polimelo olarak bizim tüm oyunlarımızda hedeflediğimiz yegane duygudur.</p>

        <h3>4. Görsel ve İşitsel Ritim</h3>
        <p>Mekanikler kadar sunum da bulmaca çözme ritmini etkiler. Syncron'da karanlık siberpunk atmosferi, neon yeşili çizgilerle minimalist bir yapıda birleştirdik. Oyuncu hamle yaptığında çıkan tatlı mekanik sesler, ızgara üzerindeki pürüzsüz kayma animasyonları ve seviye tamamlandığında tetiklenen neon parlamalar, zihinsel yorgunluğu azaltan ve oyunda kalma süresini artıran mikro-ödüllerdir. Eğer siz de bir bulmaca oyunu tasarlamak istiyorsanız, kurallarınızı olabildiğince saf tutun, oyuncuyu aptal yerine koymayın ama onu gereksiz yere de cezalandırmayın.</p>
      `,
      en: `
        <p>Designing a puzzle game is much more than presenting a problem to the player and expecting them to solve it. A well-designed puzzle game is a silent dialogue between the player and the developer. The developer sets the rules, and the player experiences a sense of mental satisfaction by exploring the boundaries of these rules. In this article, drawing from the development process of our cyberpunk-themed grid-based puzzle game <strong>Syncron</strong>, we will discuss the basic principles of designing a successful puzzle game.</p>

        <h3>1. A Single Strong Core Mechanic</h3>
        <p>Great puzzle games do not start with complex rules. On the contrary, they rely on a single core mechanic that is extremely easy to understand but hard to master. Like opening portals in Portal or rotating blocks in Tetris. In Syncron, the core mechanic we chose is <strong>\"Synchronicity\"</strong>. When the player presses a directional key, they move not just one character, but two different objects on the map at the same time. Sometimes one of these objects moves in the opposite (reversed) direction. The rule is simple: \"If you press right, A goes right, and B goes left.\" However, this simple rule creates tremendous depth by allowing you to change the relative distance between the two objects based on their collisions with walls.</p>

        <h3>2. Layering Mechanics and New Elements</h3>
        <p>If you design 50 levels with only the core mechanic, the game eventually becomes monotonous. You must add new rules and obstacles (layers) to keep the player's interest alive. However, you should introduce them over time, not all at once. In Syncron, we structured the process as follows:</p>
        <ul>
          <li><strong>Initial Levels:</strong> Only simultaneous movement and walls.</li>
          <li><strong>Next Levels:</strong> Slippery ice floors that preserve momentum.</li>
          <li><strong>Middle Levels:</strong> Conveyor belts that redirect objects and teleportation portals.</li>
          <li><strong>Advanced Levels:</strong> Buttons, box-pushing mechanics, and laser obstacles.</li>
        </ul>
        <p>Every new element must interact with the core mechanic. For example, pushing a box on a conveyor belt while using the other object to shield yourself from a laser is a combination that gives the player the joy of \"discovery.\"</p>

        <h3>3. The \"Aha!\" Moment</h3>
        <p>The quality of a puzzle game is measured by the mental spark the player experiences when they find the solution. The player should solve the level by planning in their mind, not by pressing random keys (trial-and-error). To achieve this, when designing a level, we first place the player in a dilemma. The path seems closed, and the two objects seemingly cannot reach the target simultaneously. The player studies the map, realizes how to use the walls to synchronize the objects' positions, and makes the moves in sequence. When they reach the solution, what they feel is not luck, but the success of their own intelligence. This feeling is the sole emotion we aim for in all of our games at Polimelo.</p>

        <h3>4. Visual and Auditory Rhythm</h3>
        <p>Presentation affects the puzzle-solving rhythm as much as the mechanics. In Syncron, we combined a dark cyberpunk atmosphere with neon green lines in a minimalist structure. The satisfying mechanical sounds when the player moves, the smooth sliding animations on the grid, and the neon glows triggered upon completing a level are micro-rewards that reduce mental fatigue and increase session duration. If you want to design a puzzle game, keep your rules as pure as possible, don't treat the player as foolish, but don't punish them unnecessarily either.</p>
      `
    }
  },
  {
    slug: "puzzle-oyunlarinda-zorluk-ayarlama",
    title: {
      tr: "Puzzle Oyunlarında Oyuncu Geri Bildirimlerine Göre Zorluk Ayarlama",
      en: "Tuning Difficulty in Puzzle Games Based on Player Feedback"
    },
    description: {
      tr: "Bir bulmaca ne zaman çok zor veya ne zaman sıkıcıdır? Veriler ve oyuncu testleriyle ideal zorluk dengesini (Flow State) bulmak.",
      en: "When is a puzzle too hard or when is it boring? Finding the ideal difficulty balance (Flow State) using playtest data."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "1 Haziran 2026",
      en: "June 1, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Bulmaca oyunları geliştiren her tasarımcının kabusu şudur: <i>"Bu seviye benim için çok kolay ama oyuncular çözebilecek mi, yoksa ilk dakikada oyunu kapatacaklar mı?"</i> Tasarımcı olarak kendi oyununuzun kurallarını ve çözümlerini ezbere bildiğiniz için objektifliğinizi yitirirsiniz. Bir bulmacanın zorluk derecesini doğru ayarlamak, sadece hislerle değil, <strong>oyuncu testleri (playtesting)</strong> ve <strong>telemetri verilerinin analiziyle</strong> yürütülen bilimsel bir süreçtir.</p>

        <h3>Akış Kuramı (Flow State) ve Zorluk Dengesi</h3>
        <p>Psikolog Mihaly Csikszentmihalyi tarafından ortaya atılan <strong>Akış Kuramı (Flow)</strong>, bir insanın yaptığı eylemden en çok keyif aldığı zihinsel durumu tanımlar. Oyun tasarımında akış dengesi şöyledir:</p>
        <ul>
          <li>Eğer oyun oyuncunun becerisine göre <strong>çok zorsa</strong>, oyuncu endişe duyar ve sinirlenerek oyunu bırakır (Frustration).</li>
          <li>Eğer oyun oyuncunun becerisine göre <strong>çok kolaysa</strong>, oyuncu sıkılır ve ilgisini kaybeder (Boredom).</li>
        </ul>
        <p>Hedefimiz, oyuncuyu bu iki uçurumun arasındaki dar "Akış Kanalı" içinde tutmaktır. Seviye ilerledikçe zorluk artmalı, ancak oyuncunun becerisi de aynı oranda gelişmelidir.</p>

        <h3>Zorluğu Ölçmek: Telemetri Verileri</h3>
        <p>Syncron'un geliştirme sürecinde, seviyelerin zorluk derecesini ölçmek için Firebase Analytics üzerinden anonim oynanış verileri topladık. Takip ettiğimiz temel metrikler şunlardı:</p>
        <ol>
          <li><strong>Tamamlama Oranı (Completion Rate):</strong> Seviyeye giren oyuncuların yüzde kaçı seviyeyi bitirebildi?</li>
          <li><strong>Ortalama Hamle Sayısı (Average Moves):</strong> Seviye kaç hamlede çözüldü? (Tasarımcının optimal hamle sayısıyla karşılaştırma).</li>
          <li><strong>Yeniden Başlatma Sayısı (Reset Count):</strong> Oyuncu seviyeyi kaç kez sıfırladı? (Yüksek reset sayısı frustration belirtisidir).</li>
          <li><strong>Geçirilen Ortalama Süre (Time Spent):</strong> Seviyede ne kadar süre harcandı?</li>
        </ol>

        <p>Bu verileri analiz ederken ilginç sonuçlarla karşılaştık. Örneğin, bizim "çok basit" diye 5. seviyeye koyduğumuz bir bulmacada oyuncuların %40'ının takıldığını ve ortalama 15 kez reset attığını gördük. Detaylı incelediğimizde, o seviyede henüz öğretilmeyen bir mekanik kombinasyonunun kullanıldığını fark ettik. Seviyenin geometrisini hafifçe değiştirerek ve ızgaradaki bir engeli kaldırarak tamamlama oranını %90'a çıkardık ve oyuncuların oyundan kopmasını engelledik.</p>

        <h3>Oyuncu Geri Bildirimlerini Yorumlamak</h3>
        <p>Veriler bize "nerede" sorun olduğunu söyler ama "neden" olduğunu söylemez. Bunun için beta testlerindeki nitel (qualitative) geri bildirimleri kullandık. Oyuncuların "Bu seviye imkansız görünüyor" dediği anlarda aslında mekaniğin görsel ipucunu (visual cue) anlamadıklarını gördük. Işınlanma kapılarının renk kodlarını netleştirip neon ışıklandırmayı belirginleştirdiğimizde, seviye koduna hiç dokunmadan zorluk algısını düşürmeyi başardık. Sonuç olarak; bulmaca oyunlarında zorluk statik değildir. Oyuncularınızdan gelen verileri dinleyin, kibirli olmayın ve oyununuzu onların deneyimlerine göre esnetin.</p>
      `,
      en: `
        <p>The nightmare of every puzzle game designer is: <i>\"This level is very easy for me, but will players be able to solve it, or will they close the game in the very first minute?\"</i> As a designer, because you know the rules and solutions of your own game by heart, you lose your objectivity. Correctly adjusting the difficulty level of a puzzle is a scientific process conducted not just by feelings, but through <strong>playtesting</strong> and <strong>analysis of telemetry data</strong>.</p>

        <h3>Flow State and Difficulty Balance</h3>
        <p>The <strong>Flow Theory</strong>, put forward by psychologist Mihaly Csikszentmihalyi, defines the mental state in which a person enjoys the activity they are doing the most. The flow balance in game design is as follows:</p>
        <ul>
          <li>If the game is <strong>too difficult</strong> for the player's skill, the player experiences anxiety, gets frustrated, and quits (Frustration).</li>
          <li>If the game is <strong>too easy</strong> for the player's skill, the player gets bored and loses interest (Boredom).</li>
        </ul>
        <p>Our goal is to keep the player within the narrow \"Flow Channel\" between these two cliffs. As the levels progress, the difficulty should increase, but the player's skill should develop at the same rate.</p>

        <h3>Measuring Difficulty: Telemetry Data</h3>
        <p>During the development process of Syncron, we collected anonymous gameplay data via Firebase Analytics to measure the difficulty of the levels. The primary metrics we tracked were:</p>
        <ol>
          <li><strong>Completion Rate:</strong> What percentage of players who entered the level were able to finish it?</li>
          <li><strong>Average Moves:</strong> How many moves did it take to solve the level? (Comparison with the designer's optimal move count).</li>
          <li><strong>Reset Count:</strong> How many times did the player restart the level? (A high reset count indicates frustration).</li>
          <li><strong>Time Spent:</strong> How much time was spent on the level?</li>
        </ol>

        <p>We encountered interesting results while analyzing this data. For example, we noticed that 40% of players got stuck and reset an average of 15 times on a level we placed as Level 5, thinking it was \"very simple.\" When examined in detail, we realized a combination of mechanics was used that hadn't been taught yet. By slightly modifying the geometry of the level and removing a grid obstacle, we increased the completion rate to 90%, preventing players from abandoning the game.</p>

        <h3>Interpreting Player Feedback</h3>
        <p>Data tells us \"where\" the problem is, but not \"why.\" For this, we used qualitative feedback from beta tests. We saw that when players said \"This level looks impossible,\" they actually failed to perceive the visual cues of the mechanic. By clarifying the color codes of teleportation gates and making the neon lighting more distinct, we managed to lower the difficulty perception without touching the level design or code at all. Consequently, difficulty in puzzle games is not static. Listen to the data coming from your players, put aside your ego, and stretch your game according to their experiences.</p>
      `
    }
  },
  {
    slug: "nextjs-capacitor-electron-entegrasyonu",
    title: {
      tr: "Next.js, Capacitor ve Electron: Tek Kod Tabanı ile Çoklu Platform",
      en: "Next.js, Capacitor, and Electron: Cross-Platform with a Single Codebase"
    },
    description: {
      tr: "Polimelo projelerinin arkasındaki modern teknoloji yığınını inceleyin. Tek bir React projesini Web, Android ve Masaüstüne nasıl dağıtıyoruz?",
      en: "Explore the modern tech stack behind Polimelo projects. How do we distribute a single React project to Web, Android, and Desktop?"
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
      tr: "25 Mayıs 2026",
      en: "May 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Günümüzde bir dijital ürün geliştirirken sadece web tarayıcılarında var olmak yetersiz kalabiliyor. Kullanıcılar uygulamalarınıza telefonlarından (Android/iOS) erişmek, hatta masaüstünde (Windows/macOS) kesintisiz bir performansla çalıştırmak istiyorlar. Her platform için ayrı dillerde (Java/Kotlin, Swift, C#) yerel uygulamalar yazmak ise küçük stüdyolar için hem zaman hem de bütçe açısından yıkıcıdır. Polimelo stüdyosu olarak bu problemi çözmek için modern bir hibrit mimari kullanıyoruz: <strong>React/Next.js, Capacitor.js ve Electron</strong> entegrasyonu.</p>

        <h3>Teknolojik Mimari</h3>
        <p>Sistemimizin merkezinde, kullanıcı arayüzünü (UI) ve tüm iş mantığını (business logic) yöneten tek bir Next.js projesi yer alıyor. Bu projeyi üç farklı platforma şu şekilde dağıtıyoruz:</p>
        <ol>
          <li><strong>Web:</strong> Next.js'in <code>output: 'export'</code> özelliğini kullanarak statik HTML/JS/CSS dosyaları üretiyoruz. Bu çıktıları Cloudflare Pages veya Vercel üzerinde küresel olarak çok hızlı dağıtabiliyoruz.</li>
          <li><strong>Mobil (Android):</strong> Capacitor.js yardımıyla statik web çıktımızı alıp yerel bir Android projesinin (WebView) içerisine gömüyoruz. Capacitor, web kodumuzun telefonun yerel API'lerine (bildirimler, dosya sistemi vb.) erişmesini sağlayan köprüler kuruyor.</li>
          <li><strong>Masaüstü (Desktop):</strong> Electron kullanarak statik çıktımızı Chromium ve Node.js tabanlı masaüstü uygulamasına dönüştürüyoruz. Bu sayede oyunumuz Syncron, Steam'de yerel bir oyun gibi çalışabiliyor.</li>
        </ol>

        <h3>Next.js ve Static Export Zorlukları</h3>
        <p>Next.js varsayılan olarak sunucu taraflı çalışmaya (SSR - Server Side Rendering) odaklanır. Ancak mobil ve masaüstü paketleyiciler (Capacitor/Electron) bir Node.js sunucusuna sahip olmadıkları için tamamen statik dosyalara ihtiyaç duyarlar. Bu yüzden Next.js projemizde dinamik sunucu rotalarından kaçınmamız gerekti. Dinamik sayfalarımız (örneğin bu blog yazısının detayı olan <code>/blog/[slug]</code>) için derleme aşamasında tüm sayfaları HTML olarak üreten <code>generateStaticParams</code> fonksiyonunu kullandık.</p>

        <h3>Çoklu Platformda Veri Paylaşımı ve Offline Desteği</h3>
        <p>Diğer bir büyük sorun ise yerel veritabanı yönetimiydi. Tarayıcıda verileri saklamak kolaydır, ancak uygulama kapandığında veya internet kesildiğinde mobil ve masaüstünde verilerin korunması gerekir. Bu sorunu <strong>Dexie.js (IndexedDB wrapper)</strong> kullanarak çözdük. IndexedDB, hem modern tarayıcılarda hem Capacitor WebView içinde hem de Electron ortamında standart olarak desteklendiği için tek bir kod yazarak tüm platformlarda yerel, çevrimdışı çalışan (Offline-First) bir veritabanı kurmuş olduk. Cihaz internete bağlandığında ise Firebase Firestore ile senkronizasyon tetikleniyor.</p>

        <p>Eğer siz de ürünlerinizi hızlıca tüm cihazlara ulaştırmak isteyen bağımsız bir geliştiriciyseniz; Next.js + Capacitor + Electron üçlüsü, kod tekrarını sıfırlayan ve ürün geliştirme hızınızı 3 katına çıkaran mükemmel bir tercihtir.</p>
      `,
      en: `
        <p>In today's digital landscape, existing only in web browsers can fall short. Users want to access your apps from their phones (Android/iOS), or run them with seamless performance on their desktop (Windows/macOS). Writing separate native apps in different languages (Java/Kotlin, Swift, C#) for each platform is devastating in terms of time and budget, especially for small studios. At Polimelo studio, we solve this problem using a modern hybrid architecture: <strong>React/Next.js, Capacitor.js, and Electron</strong> integration.</p>

        <h3>Technological Architecture</h3>
        <p>At the center of our system is a single Next.js project that handles the user interface (UI) and all business logic. We distribute this project to three different platforms as follows:</p>
        <ol>
          <li><strong>Web:</strong> By utilizing Next.js's <code>output: 'export'</code> config, we produce static HTML/JS/CSS files. We can distribute these assets globally at high speeds on Cloudflare Pages or Vercel.</li>
          <li><strong>Mobile (Android):</strong> With the help of Capacitor.js, we take our static web build and embed it inside a native Android project (WebView). Capacitor establishes bridges that let our web code access the phone's native APIs (notifications, file system, etc.).</li>
          <li><strong>Desktop:</strong> Using Electron, we turn our static build into a desktop application powered by Chromium and Node.js. This allows our game Syncron to run as a native game on Steam.</li>
        </ol>

        <h3>Next.js and Static Export Challenges</h3>
        <p>Next.js defaults to focusing on server-side rendering (SSR). However, since mobile and desktop packagers (Capacitor/Electron) do not have a Node.js server, they require completely static assets. Consequently, we had to avoid dynamic server-side routing in our Next.js project. For our dynamic pages (such as the detail of this blog post under <code>/blog/[slug]</code>), we used the <code>generateStaticParams</code> function to generate all pages as static HTML files during the build phase.</p>

        <h3>Data Sharing and Offline Support Across Platforms</h3>
        <p>Another major challenge was local database management. Storing data in a browser is easy, but data must be preserved on mobile and desktop when the app closes or the internet connection drops. We solved this issue by using <strong>Dexie.js (IndexedDB wrapper)</strong>. Since IndexedDB is standardly supported in modern browsers, Capacitor WebViews, and Electron environments, we built a local, offline-first database that works across all platforms using a single codebase. When the device connects to the internet, synchronization with Firebase Firestore is triggered.</p>

        <p>If you are an independent developer looking to quickly deploy your products to all devices, the Next.js + Capacitor + Electron trio is an excellent choice that minimizes code duplication and accelerates product development speed by 3x.</p>
      `
    }
  },
  {
    slug: "kullanici-verilerini-dogru-analiz-etme",
    title: {
      tr: "Dijital Ürünlerde Kullanıcı Verilerini Doğru Analiz Etme",
      en: "Analyzing User Data Correctly in Digital Products"
    },
    description: {
      tr: "Kullanıcı deneyimini iyileştirmek için hangi verileri, gizlilik kurallarına (KVKK/GDPR) sadık kalarak nasıl analiz etmeliyiz?",
      en: "Which data should we analyze to improve user experience, and how, while adhering strictly to privacy rules (GDPR/KVKK)?"
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
      tr: "20 Mayıs 2026",
      en: "May 20, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
        <p>Bir web sitesi veya uygulama yayına alındığında geliştiricinin işi bitmez, aksine yeni başlar. Kullanıcılar uygulamanın neresinde zorlanıyor? Hangi butonlar çalışıyor ama hiç tıklanmıyor? Uygulamanın en çok kullanılan özelliği hangisi? Bu soruların cevapları, varsayımlarda değil, <strong>kullanıcı verilerinin doğru analiz edilmesinde</strong> yatar. Ancak günümüzde veri toplamak, sadece kod eklemekten ibaret değildir; ciddi bir etik ve yasal sorumluluk (GDPR, KVKK) taşır.</p>

        <h3>1. Doğru Metrikleri Seçmek (Vanity Metrics vs Actionable Metrics)</h3>
        <p>Analitik araçlarını açtığınızda karşınıza yüzlerce grafik çıkar. Birçok geliştirici, sadece kulağa hoş gelen ama ürün geliştirmeye hiçbir faydası olmayan \"gösteriş metriklerine\" (vanity metrics) odaklanır. Örneğin, sitenizin toplam tıklanma sayısı veya sayfa görüntüleme sayısı tek başına bir şey ifade etmez. Odaklanmanız gereken metrikler <strong>eyleme dökülebilir metrikler</strong> (actionable metrics) olmalıdır:</p>
        <ul>
          <li><strong>Hemen Çıkma Oranı (Bounce Rate):</strong> Kullanıcılar sitenize girip 3 saniye sonra kapatıyorsa, ilk izlenim veya yüklenme hızında sorun vardır.</li>
          <li><strong>Dönüşüm Oranı (Conversion Rate):</strong> Sitenizi ziyaret edenlerin yüzde kaçı Polyvo veya Syncron uygulamasına tıklayıp oynamaya başladı?</li>
          <li><strong>Kullanıcı Elde Tutma (Retention Rate):</strong> Bugün kayıt olan bir kullanıcı, 7 gün sonra uygulamayı tekrar açıyor mu?</li>
        </ul>

        <h3>2. Gizlilik Odaklı Analiz (GDPR & KVKK Uyumluluğu)</h3>
        <p>Polimelo olarak en hassas olduğumuz konulardan biri kullanıcı gizliliğidir. AdSense onayı almak ve en önemlisi kullanıcılarımızın güvenini kazanmak için analitik süreçlerimizde şu kuralları uyguluyoruz:</p>
        <ul>
          <li><strong>Anonimleştirme:</strong> Toplanan IP adreslerini ve cihaz kimliklerini kesinlikle kişisel verilerle eşleştirmiyoruz. Kullanıcı davranışlarını tamamen anonim ID'ler üzerinden takip ediyoruz.</li>
          <li><strong>Çerez Politikaları ve Açıklık:</strong> Sitemizdeki Google Analytics ve AdSense çerezlerinin ne amaçla kullanıldığını Gizlilik Politikamızda şeffafça belirttik. Kullanıcıların çerezleri reddetme hakkını saklı tutuyoruz.</li>
          <li><strong>Gereksiz Veri Toplamama:</strong> Kullanıcının adını, soyadını veya hassas kişisel bilgilerini analitik araçlarımıza asla göndermiyoruz. Sadece \"Oyun bitti\", \"Kart çevrildi\" gibi fonksiyonel olayları (event tracking) takip ediyoruz.</li>
        </ul>

        <h3>3. Analizden Ürüne Dönüşüm</h3>
        <p>Topladığımız veriler doğrudan ürün kararlarımızı şekillendiriyor. Örneğin Polyvo'da, kullanıcıların \"Cloze (Boşluk Doldurma)\" test modunu, klasik \"Flashcard\" moduna göre daha uzun süre kullandıklarını gördük. Bu veri üzerine, Cloze modundaki cümle veri havuzumuzu iki katına çıkardık ve yapay zeka destekli cümle üretim mekanizmasını buraya entegre ettik. Sonuç olarak retention oranımız %12 artış gösterdi. Veri analizi, kullanıcıların sesini doğrudan duyamadığınız dijital dünyada onların davranışlarını okuyarak en iyi deneyimi sunmanızı sağlayan pusulanızdır.</p>
      `,
      en: `
        <p>When a website or application is launched, the developer's job does not end; in fact, it has just begun. Where are users struggling in the app? Which buttons are active but never clicked? What is the most used feature of the app? The answers to these questions lie in <strong>correctly analyzing user data</strong>, not in assumptions. However, collecting data today is not just about adding code; it carries a serious ethical and legal responsibility (GDPR, KVKK).</p>

        <h3>1. Choosing the Right Metrics (Vanity Metrics vs. Actionable Metrics)</h3>
        <p>When you open analytical tools, you encounter hundreds of charts. Many developers focus only on \"vanity metrics\" that sound nice but have no benefit for product development. For example, your site's total clicks or page views alone do not mean much. The metrics you focus on should be <strong>actionable metrics</strong>:</p>
        <ul>
          <li><strong>Bounce Rate:</strong> If users enter your site and close it 3 seconds later, there is a problem with the first impression or page speed.</li>
          <li><strong>Conversion Rate:</strong> What percentage of visitors clicked and started playing Polyvo or Syncron?</li>
          <li><strong>Retention Rate:</strong> Does a user who registered today open the app again 7 days later?</li>
        </ul>

        <h3>2. Privacy-First Analysis (GDPR & KVKK Compliance)</h3>
        <p>At Polimelo, user privacy is one of our highest priorities. To obtain AdSense approval and, most importantly, earn our users' trust, we apply the following rules in our analytical processes:</p>
        <ul>
          <li><strong>Anonymization:</strong> We strictly do not match collected IP addresses and device IDs with personal data. We track user behaviors using completely anonymous IDs.</li>
          <li><strong>Cookie Policies and Openness:</strong> We clearly state the purpose of Google Analytics and AdSense cookies on our site in our Privacy Policy. We protect our users' right to reject cookies.</li>
          <li><strong>No Unnecessary Data Collection:</strong> We never send the user's name, surname, or sensitive personal information to our analytical tools. We only track functional events (event tracking) like \"Game finished\" or \"Card flipped\".</li>
        </ul>

        <h3>3. Transforming Insights into Product Decisions</h3>
        <p>The data we collect directly shapes our product decisions. For instance, in Polyvo, we observed that users spent more time in the \"Cloze (Fill in the Blank)\" test mode compared to the classic \"Flashcard\" mode. Based on this insight, we doubled our sentence data pool in Cloze mode and integrated our AI-powered sentence generation mechanism there. Consequently, our retention rate increased by 12%. Data analysis is your compass in the digital world where you cannot hear users' voices directly, allowing you to provide the best experience by reading their behaviors.</p>
      `
    }
  },
  {
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
        <p>Bizim için bu proje iki temel amaca hizmet ediyor:</p>
        <ol>
          <li><strong>Görselleştirerek Öğrenmek:</strong> Formülleri kendi ellerimizle kodlayıp, tarayıcıda anlık tepki veren grafiklere dönüştürerek konunun mantığını derinlemesine kavramak.</li>
          <li><strong>Açık Kaynaklı Portfolyo:</strong> Kendi yetkinliklerimizi akademik düzeyde kanıtlayan, temiz kodlanmış ve belgelenmiş bir portfolyo oluşturmak. İlerleyen süreçte bu yapının, diğer geliştiricilerin de kendi deney modüllerini ekleyebileceği modüler, kolektif bir dijital laboratuvar olmasını hayal ediyoruz.</li>
        </ol>

        <h3>İlk Çıkan Deneyler ve Simülatörler</h3>
        <p>Polimelo Lab'in ilk sürümünde şu an aktif olarak çalışan 3 interaktif sandbox modülü yer alıyor:</p>
        <ul>
          <li><strong>WebAssembly Python Runtime Verification (Hello World):</strong> Pyodide motoru sayesinde tarayıcı çekirdeğinde istemci taraflı Python 3.11 ortamını çalıştırıyor. UI ile Python çalışma zamanı arasındaki veri köprüsünü test ediyor.</li>
          <li><strong>Matris Çarpımı ve Vektör Uzayı Görselleştirici:</strong> Lineer cebirin temel taşı olan matris çarpımını (A × B = C) adım adım, hücre hücre hesaplayarak nokta çarpım (dot product) mekaniğini zihinde somutlaştırıyor.</li>
          <li><strong>Etkileşimli Lineer Regresyon ve Gradyan Uydurma:</strong> Koordinat düzlemine mouse ile tıkladığınız noktalara en küçük kareler (least-squares) yöntemiyle y = mx + b doğrusunu uyduran, eğim ve hata oranını anlık güncelleyen HTML5 Canvas simülasyonu.</li>
        </ul>

        <h3>Akademik Müfredat ve Formüller</h3>
        <p>Deney simülatörlerinin yanı sıra, bu deneylerin teorik altyapısını oluşturan ders notlarını da LaTeX matematik diliyle web sitemize entegre ettik. Örneğin, <strong>Yapay Sinir Ağlarına Derin Dalış</strong> dersinde, hata delta terimlerinin zincir kuralı (chain rule) kullanılarak katmanlar arasında nasıl geri yayıldığını adım adım matematiksel olarak türetiyor, ardından bunu lineer regresyon simülatöründe gradient fitting ile görselleştiriyoruz. Seyrek matrisler (Sparse Matrices) ve CSR veri yapısı dersinde ise bellek optimizasyonunun formüllerini ve algoritmalarını inceliyoruz.</p>

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
        <p>Along with visual simulators, we integrated study notes covering the theoretical backing of these experiments using LaTeX typesetting. For example, in our <strong>Neural Networks Deep Dive</strong> course, we mathematically derive the backpropagation of error delta terms through layers using the chain rule, which is then visualized in the gradient fitting simulator. In our Sparse Matrices & CSR course, we explore memory optimization formulas and algorithms.</p>

        <h3>Future Outlines</h3>
        <p>Polimelo Lab is not a closed development process but a completely transparent and open-source project. We have published the source code on GitHub. Our goal is to extend the course list into other layers of deep learning (CNNs, Transformers, Optimizer mechanics, etc.) and accept new simulation modules contributed by the community. To check the code or run the modules, launch Polimelo Lab and explore our sandbox and courses!</p>
      `
    }
  }
,
  {
    slug: "webassembly-tarayicida-performans-analizi",
    title: {
      tr: "WebAssembly ile Tarayıcıda Performans Analizi ve Gelecek",
      en: "Performance Analysis and the Future of WebAssembly in the Browser"
    },
    description: {
      tr: "Tarayıcıda C++ ve Rust gibi dilleri çalıştırmanın gücünü ve WebAssembly'nin JS performansına kıyasla sunduğu avantajları keşfedin.",
      en: "Explore the power of running low-level languages like C++ and Rust in the browser and the performance benefits WebAssembly brings compared to JavaScript."
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
      tr: "22 Mayıs 2026",
      en: "May 22, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>WebAssembly (WASM), modern tarayıcıların JavaScript dışında derlenmiş ikili (binary) kodları çalıştırmasını sağlayan devrim niteliğinde bir web standardıdır. JavaScript'in yorumlanma ve derlenme (JIT) aşamalarındaki gecikmeleri ortadan kaldırarak, tarayıcıda neredeyse yerel (near-native) hızlarda hesaplama yapılmasına olanak tanır. Polimelo Lab'deki interaktif modüllerimizde bu teknolojiyi aktif olarak kullanmaktayız.</p>
        <h3>JS ve WASM Performans Karşılaştırması</h3>
        <p>JavaScript tek iş parçacıklı (single-threaded) ve dinamik tipli bir dildir. Bu, çalışma zamanında sürekli tip kontrolleri yapılmasına neden olur. WebAssembly ise statik tipli ve optimize edilmiş ikili formattadır. CPU talimatlarına çok daha yakın olduğu için yoğun matematiksel döngüler, 3D çizimler ve veri analizlerinde JavaScript'ten 10 ila 100 kat daha hızlı sonuç üretebilir.</p>
        <h3>Hangi Alanlarda WASM Tercih Edilmelidir?</h3>
        <p>Tüm sitenizi WebAssembly ile yazmak mantıklı değildir; arayüz ve DOM etkileşimleri için JavaScript hala en iyi seçenektir. Ancak video işleme, fizik motorları, tarayıcı tabanlı oyunlar ve yapay zeka çıkarımları (AI inference) gibi CPU yükü yüksek modüllerde Rust veya C++ kodlarınızı WASM'e derleyerek sisteme entegre etmelisiniz.</p>
      `,
      en: `
<p>WebAssembly (WASM) is a revolutionary web standard that allows modern browsers to run compiled binary code alongside JavaScript. By eliminating the latency of JavaScript interpretation and JIT compilation, WASM enables near-native execution speed. We actively use this technology in our interactive sandboxes within Polimelo Lab.</p>
        <h3>JS vs. WASM Performance Comparison</h3>
        <p>JavaScript is a single-threaded, dynamically-typed language, which leads to overhead during runtime type checks. In contrast, WebAssembly is statically-typed and distributed in an optimized binary format. Being closer to raw CPU instructions, it performs heavy mathematical iterations, 3D rendering, and data analysis 10x to 100x faster than JS.</p>
        <h3>When Should You Use WASM?</h3>
        <p>Rebuilding your entire site in WASM is counterproductive, as JavaScript remains ideal for DOM manipulation. However, for CPU-heavy tasks like video encoding, physics simulation, browser-based games, and client-side AI inference, compiling Rust or C++ codebases into WASM is the gold standard.</p>
      `
    }
  },
  {
    slug: "react-19-compiler-ve-yenilikler",
    title: {
      tr: "React 19 Compiler: Otomatik Performans Optimizasyonları",
      en: "React 19 Compiler: Automatic Performance Optimizations"
    },
    description: {
      tr: "React 19 ile gelen yeni derleyici motorunun useMemo ve useCallback ihtiyacını nasıl ortadan kaldırdığını inceleyin.",
      en: "Examine how the new React 19 Compiler engine automatically eliminates the need for manual useMemo and useCallback hooks."
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
      tr: "18 Mayıs 2026",
      en: "May 18, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>React 19 sürümünün en heyecan verici yeniliklerinden biri şüphesiz <strong>React Compiler</strong> (kod adı React Forget) motorudur. Geleneksel React geliştirmede, gereksiz re-render'ları engellemek için kodumuza manuel olarak <code>useMemo</code>, <code>useCallback</code> ve <code>React.memo</code> eklemek zorundaydık. React 19 ise bu süreci derleme (build) aşamasında tamamen otomatik hale getiriyor.</p>
        <h3>Derleyicinin Çalışma Mantığı</h3>
        <p>React Compiler, bileşen kodlarınızı analiz ederek hangi verilerin hangi render adımlarında değiştiğini tespit eder. Yalnızca değişen verilerin etki ettiği alt düğümleri (DOM) güncelleyecek şekilde kod seviyesinde otomatik memoization uygular. Bu sayede kod tabanımız hem kısalır hem de okunabilirliği artar.</p>
        <h3>Geliştiricilere Etkileri</h3>
        <p>Artık bağımlılık dizileri (dependency arrays) ile vakit kaybetmenize veya memoization hatalarından kaynaklanan bellek sızıntılarını ayıklamanıza gerek kalmadı. React 19, geliştirici konforunu (developer experience) en üst düzeye çıkarırken en optimum performansı da beraberinde getiriyor.</p>
      `,
      en: `
<p>One of the most exciting breakthroughs in React 19 is the integration of the <strong>React Compiler</strong> (formerly known as React Forget). In previous versions, developers had to manually optimize renders using hooks like <code>useMemo</code> and <code>useCallback</code>. React 19 automates this entire cycle during compilation.</p>
        <h3>How the Compiler Works</h3>
        <p>The compiler parses your component syntax tree to determine which values mutate and when. It then injects memoization directives under the hood, targeting only the DOM nodes affected by changes. This results in shorter, cleaner, and less error-prone codebases.</p>
        <h3>Impact on Developers</h3>
        <p>You no longer need to spend time configuring dependency arrays or debugging performance issues related to stale closure references. React 19 elevates developer experience (DX) while delivering optimal out-of-the-box runtime performance.</p>
      `
    }
  },
  {
    slug: "offline-first-mimari-ve-dexie-js",
    title: {
      tr: "Dexie.js ile Offline-First (Önce Çevrimdışı) Uygulama Mimarisi",
      en: "Offline-First Application Architecture with Dexie.js"
    },
    description: {
      tr: "İnternet kesintilerinde dahi çalışabilen web uygulamaları tasarlamak. Dexie.js ve IndexedDB kullanımı.",
      en: "Designing web applications that remain functional during network outages. Using Dexie.js and browser IndexedDB."
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
      tr: "15 Mayıs 2026",
      en: "May 15, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>İnternet bağlantısının dalgalı veya tamamen kesik olduğu durumlarda kullanıcıların uygulamanızı kullanmaya devam edebilmesini istemez misiniz? <strong>Offline-First</strong> yaklaşımı, verileri önce istemcinin yerel veritabanında (IndexedDB) barındırmayı, ardından ağ bağlantısı kurulduğunda bulut sunucularıyla eşitlemeyi hedefler. Polyvo projemizde bu mimariyi başarıyla kurguladık.</p>
        <h3>IndexedDB ve Dexie.js Kolaylığı</h3>
        <p>Tarayıcılardaki yerel veritabanı olan IndexedDB, düşük seviyeli ve kullanımı oldukça karmaşık bir API sunar. <strong>Dexie.js</strong> ise bu API'yi sararak modern Promise tabanlı, kullanımı son derece kolay ve verimli bir arayüz sağlar. Dexie ile veri sorgulamaları, index tanımları ve işlem yönetimi (transactions) çok basit hale gelir.</p>
        <h3>Senkronizasyon Stratejisi</h3>
        <p>Çevrimdışı modda yapılan tüm işlemler (yeni kelime ekleme, ilerleme kaydetme) yerel IndexedDB'ye yazılır. Cihaz online olduğunda, bir arka plan servisi (background sync) devreye girerek yerel verilerdeki son değişiklikleri (güncelleme zaman damgalarını kullanarak) Firebase Firestore ile eşitler. Bu sayede veri kayıpları tamamen engellenmiş olur.</p>
      `,
      en: `
<p>Do you want your users to access and interact with your web application even during sudden network disconnections? An <strong>Offline-First</strong> architecture achieves this by storing data locally in the browser database (IndexedDB) first, and then synchronizing with cloud servers when network connectivity is available. We implemented this in our Polyvo application.</p>
        <h3>Simplifying IndexedDB with Dexie.js</h3>
        <p>IndexedDB offers a low-level, complex transactional database API. <strong>Dexie.js</strong> wraps IndexedDB into a modern, Promise-based abstraction that makes handling index schemas, structured queries, and write transactions straightforward and efficient.</p>
        <h3>Synchronization Logic</h3>
        <p>All writes in offline mode (such as saving study decks or progress) are written to local stores. When internet connectivity is restored, background workers detect the state and push updates to Firebase Firestore, utilizing transaction logs and timestamps to resolve merge conflicts safely.</p>
      `
    }
  },
  {
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
  },
  {
    slug: "tailwind-css-v4-derleyici-motoru",
    title: {
      tr: "Tailwind CSS v4: Rust Tabanlı Yeni Derleyici ve Performans",
      en: "Tailwind CSS v4: The New Rust-based Compiler and Performance"
    },
    description: {
      tr: "PostCSS ihtiyacını kaldıran ve derleme hızlarını 10 kat artıran Tailwind CSS v4 mimarisini inceleyin.",
      en: "Explore the Tailwind CSS v4 architecture that removes PostCSS dependencies and speeds up compilation times by 10x."
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "5 dk",
      en: "5 min"
    },
    date: {
      tr: "8 Mayıs 2026",
      en: "May 8, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Tailwind CSS v4, stil motorunu baştan aşağı yeniledi. En büyük değişiklik, JavaScript tabanlı derleme süreçlerinden vazgeçilerek **Rust tabanlı özel bir derleyici (compiler)** geliştirilmiş olmasıdır. Bu yenilik, büyük projelerdeki derleme (build) sürelerini milisaniyeler seviyesine indiriyor.</p>
        <h3>Sıfır Yapılandırma (Zero Configuration)</h3>
        <p>v4 ile birlikte artık karmaşık <code>tailwind.config.js</code> dosyalarına gerek kalmadı. CSS dosyanızın en tepesine ekleyeceğiniz <code>@theme</code> direktifleri ile tüm özelleştirmelerinizi (renkler, fontlar vb.) doğrudan standart CSS kuralları içinde tanımlayabiliyorsunuz. PostCSS bağımlılıkları da ortadan kalktığı için proje kurulumu çok daha sadeleşti.</p>
        <h3>Polimelo Arayüzündeki Etkisi</h3>
        <p>Polimelo portfolyomuzu v4 sürümüne yükselttikten sonra, yerel geliştirme sunucusunun (dev server) stil değişikliklerini tarayıcıya yansıtma hızı anlık hale geldi. Ayrıca üretim çıktısındaki CSS dosyası boyutu önemli ölçüde küçüldü.</p>
      `,
      en: `
<p>Tailwind CSS v4 reinvents utility styling from the ground up. The highlight is the new **Rust-based engine**, which deprecates old Javascript parsing and cuts build times down to milliseconds in large-scale applications.</p>
        <h3>Zero Configuration Files</h3>
        <p>In v4, the complex <code>tailwind.config.js</code> is no longer needed. Theme tokens (colors, animations, fonts) are now declared directly inside your index CSS file using the <code>@theme</code> directive. This eliminates PostCSS dependencies, resulting in faster and cleaner bundlers.</p>
        <h3>Impact on Polimelo</h3>
        <p>After upgrading Polimelo to Tailwind v4, style hot-reloading (HMR) became instantaneous. In addition, the compiled CSS bundle size decreased significantly, speeding up initial page loads.</p>
      `
    }
  },
  {
    slug: "framer-motion-mikro-etkilesimler",
    title: {
      tr: "Framer Motion ile Kullanıcı Deneyimini Artıran Mikro Animasyonlar",
      en: "Micro-interactions That Enhance UX Using Framer Motion"
    },
    description: {
      tr: "Kullanıcı etkileşimlerini pürüzsüz kılmak için Framer Motion kütüphanesini kullanma rehberi.",
      en: "A guide on using Framer Motion to create smooth micro-interactions that elevate overall user experience."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "6 dk",
      en: "6 min"
    },
    date: {
      tr: "5 Mayıs 2026",
      en: "May 5, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Kullanıcı arayüzlerinde animasyon, sadece görsellikten ibaret değildir. Doğru kurgulanmış mikro etkileşimler, kullanıcının eylemlerine anlamlı geri bildirimler vererek uygulamanın daha "canlı" ve premium hissettirmesini sağlar. React ekosisteminin en popüler animasyon kütüphanesi olan <strong>Framer Motion</strong>, bu süreçte bize büyük kolaylıklar sunar.</p>
        <h3>Fizik Tabanlı Yay Animasyonları (Spring Physics)</h3>
        <p>Zaman tabanlı (duration) animasyonlar genellikle yapay görünür. Framer Motion, varsayılan olarak gerçek dünya fizik yasalarına göre çalışan yay (spring) animasyonları kullanır. Bileşenlerin kütlesi (mass), sürtünme katsayısı (damping) ve gerginliği (stiffness) gibi değerleri ayarlayarak son derece organik hareketler elde edebilirsiniz.</p>
        <h3>Syncron ve Polyvo Animasyon Detayları</h3>
        <p>Syncron oyunumuzda karelerin grid üzerinde kayarken momentumlarını korumasını ve duvarlara çarptıklarında hafifçe esnemelerini Framer Motion'ın spring efektleri ile kodladık. Bu ufak dokunuşlar, oyun hissini (game feel) çok ciddi şekilde iyileştirdi.</p>
      `,
      en: `
<p>In digital design, animations are not merely decorative. Well-designed micro-interactions provide intuitive feedback to user actions, making interfaces feel tactile and responsive. <strong>Framer Motion</strong> makes orchestrating these animations in React very intuitive.</p>
        <h3>Organic Motion via Spring Physics</h3>
        <p>Linear duration-based transitions often feel robotic. Framer Motion defaults to physics-based animations that simulate weight, friction, and tension (stiffness/damping). This results in fluid, natural animations that mimic real-world physical feedback.</p>
        <h3>Case Study: Syncron</h3>
        <p>In our game Syncron, the neon tiles slide on the grid preserving momentum, bouncing slightly when they hit walls. Configuring spring physics in Framer Motion allowed us to fine-tune this visual feel, improving engagement metrics.</p>
      `
    }
  },
  {
    slug: "nextjs-static-export-optimizasyonlari",
    title: {
      tr: "Next.js Static Export (Statik Çıktı) İpuçları ve Sınırlar",
      en: "Next.js Static Export Tips and Architecture Boundaries"
    },
    description: {
      tr: "output: 'export' ayarını yaparken dikkat edilmesi gereken dinamik rota yönetimi ve veri çekme stratejileri.",
      en: "Dynamic routing strategies and API fetching policies to consider when using the output: 'export' setting."
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
      tr: "2 Mayıs 2026",
      en: "May 2, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Next.js, sunucu tarafında çalışan dinamik bir Node.js uygulaması olarak tasarlanmıştır. Ancak bazı projelerde (örneğin Polimelo gibi portfolyo veya basit uygulamalarda) sunucu maliyetlerini sıfırlamak ve maksimum hıza ulaşmak için sitenizi statik HTML/CSS/JS dosyaları olarak dışa aktarmak istersiniz. Bunun için <code>next.config.ts</code> dosyasına <code>output: 'export'</code> ekleriz.</p>
        <h3>Statik Export ile Neler Yapılamaz?</h3>
        <p>Sunucu tabanlı özellikler (Next.js Middleware, dinamik API rotaları (API Routes), sunucu bileşenlerinde runtime veri çekme vb.) statik export modunda çalışmaz. Her sayfa derleme aşamasında (build-time) statik dosyalara dönüştürülmek zorundadır. Bu yüzden dinamik rotalar için mutlaka <code>generateStaticParams()</code> fonksiyonu ile olası tüm parametreleri tanımlamanız gerekir.</p>
        <h3>Arama Parametreleri (Search Params) ve Çözümler</h3>
        <p>Derleme anında URL'deki query parametrelerini (örneğin <code>?ref=google</code>) okuyamazsınız. Bu gibi durumları çözmek için query parametrelerini sayfa yüklendikten sonra istemci tarafında (Client Component - <code>useSearchParams</code>) yakalamak ve arayüzü ona göre güncellemek gerekir.</p>
      `,
      en: `
<p>Next.js defaults to a dynamic server-rendered runtime. However, for portfolios and serverless deployments like Polimelo, compilation to static assets via <code>output: 'export'</code> is highly cost-effective and performs exceptionally fast on global CDNs.</p>
        <h3>Static Export Trade-offs</h3>
        <p>Node.js runtime server features (like Middleware, dynamic runtime headers, or runtime API endpoints) are not supported. Every page route must resolve to HTML pages at build-time. For dynamic paths, this means utilizing <code>generateStaticParams()</code> to pre-render all URLs.</p>
        <h3>Handling Client Parameters</h3>
        <p>Since URL search queries (like <code>?id=123</code>) are unavailable during static HTML compilation, you must handle them on the client side. Accessing query states via <code>useSearchParams</code> within wrapper Client Components is the standard practice.</p>
      `
    }
  },
  {
    slug: "indexeddb-performans-ve-limitler",
    title: {
      tr: "Tarayıcıda Dev Veri Depolama: IndexedDB Performans Sınırları",
      en: "Large Scale Client Storage: IndexedDB Performance Limits"
    },
    description: {
      tr: "Tarayıcı veritabanlarının depolama kapasiteleri, performans darboğazları ve büyük verileri yönetme teknikleri.",
      en: "Storage quotas, transactional throughput bottlenecks, and optimization patterns for browser databases."
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
      tr: "29 Nisan 2026",
      en: "April 29, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>LocalStorage, 5MB'lık dar sınırı ve senkron (engellemeli) yapısıyla büyük veri işlemlerinde yetersiz kalır. Tarayıcıda veri yönetimi yaparken gerçek bir ilişkisel/doküman veritabanı performansına ihtiyaç duyduğumuzda tek seçeneğimiz asenkron çalışan **IndexedDB**'dir.</p>
        <h3>Depolama Limitleri (Storage Quota)</h3>
        <p>IndexedDB depolama limiti, cihazın disk boyutuna ve tarayıcıya göre dinamik olarak değişir. Genellikle tarayıcılar disk boş alanının %10-20'sine kadar veri depolama hakkı tanır. Ancak mobil WebView ortamlarda bu limitler daha sıkı olabileceğinden uygulamanızda mutlaka yer kaplama durumunu <code>navigator.storage.estimate()</code> ile takip etmelisiniz.</p>
        <h3>Performans İpuçları</h3>
        <p>Her okuma ve yazma işlemini tek tek başlatmak yerine verileri toplu (bulk transactions) işleyin. Ayrıca indeksleme yaparken sadece sorgularda filtreleme için kullanacağınız kritik alanları indeksleyin; aşırı indeksleme yazma performansını olumsuz etkiler.</p>
      `,
      en: `
<p>LocalStorage, with its 5MB limit and synchronous runtime thread blocking, is ill-suited for rich data processing. For true query power, developers must turn to **IndexedDB**, a client-side transactional object database.</p>
        <h3>Quota Estimations</h3>
        <p>IndexedDB size allocations depend on free disk capacity. Browsers typically allow web origins to request up to 20% of remaining storage. In mobile environments, quotas are tighter, making it crucial to query <code>navigator.storage.estimate()</code> to prevent memory failures.</p>
        <h3>Performance Optimizations</h3>
        <p>To maximize throughput, minimize database opens, batch writes inside single transactions, and index only fields used in query filters. Bloating object stores with unnecessary indexes degrades overall write speeds.</p>
      `
    }
  },
  {
    slug: "siberpunk-tasarim-estetigi",
    title: {
      tr: "Web Arayüzlerinde Siberpunk Estetiği ve Neon Tasarım Rehberi",
      en: "Applying Cyberpunk Aesthetics and Neon Styling in Web Interfaces"
    },
    description: {
      tr: "Karanlık temalar, yoğun kontrast renk şemaları, HSL neon filtreleri ve dijital tasarımın karanlık yönünü keşfedin.",
      en: "Exploring dark theme contrasts, HSL drop shadows, neon bloom effects, and the dark side of digital interface design."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "7 dk",
      en: "7 min"
    },
    date: {
      tr: "25 Nisan 2026",
      en: "April 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Siberpunk tasarım estetiği, yüksek teknoloji ile düşük yaşam standartlarının çarpışmasını yansıtır. Web tasarımdaki izdüşümü ise; derin siyah arka planlar, yüksek doygunlukta neon renkler (cyan, magenta, neon green) ve retro-fütüristik çizgi şemalarıdır. Syncron oyunumuzun görsel dili bu prensiplere dayanır.</p>
        <h3>Neon Glow (Işıma) Etkisi</h3>
        <p>CSS ile neon ışıltısı tasarlamak için <code>box-shadow</code> ve <code>drop-shadow</code> filtrelerini birlikte kullanmalısınız. Renkleri tanımlarken **HSL** (Hue, Saturation, Lightness) renk formatını tercih etmek, gölgelerin opaklıklarını ve parlaklıklarını dinamik hesaplarken büyük kolaylık sağlar:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>.neon-glow {
  box-shadow: 0 0 10px hsla(140, 80%, 50%, 0.5),
              0 0 20px hsla(140, 80%, 50%, 0.2);
}</code></pre>
        <h3>Tipografi Tercihleri</h3>
        <p>Yüksek kontrastlı, sert köşeli sans-serif veya monospaced fontlar siberpunk atmosferini destekler. Ayrıca kod satırlarını andıran ince ızgara (grid) overlay çizgileri eklemek, derinlik hissini artırır.</p>
      `,
      en: `
<p>Cyberpunk styling represents the juxtaposition of high tech and low life. Translated into UI design, this manifests as deep void backdrops, hyper-saturated neon glows (cyans, magentas, neon greens), and retro-futuristic grid guidelines. We utilized these rules to structure our game Syncron.</p>
        <h3>Implementing Neon Bloom in CSS</h3>
        <p>To style high-quality glowing elements, stack multiple layers of translucent shadows. Declaring colors in **HSL** (Hue, Saturation, Lightness) syntax is optimal, allowing you to quickly define glow shades with varying alphas:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>.neon-glow {
  box-shadow: 0 0 10px hsla(140, 80%, 50%, 0.5),
              0 0 20px hsla(140, 80%, 50%, 0.2);
}</code></pre>
        <h3>Visual Hierarchy</h3>
        <p>Use clean, high-contrast sans-serif or monospaced font pairings (like Geist Mono). Adding structural scanlines or subtle grid overlays adds texture, simulating hardware terminal screens.</p>
      `
    }
  },
  {
    slug: "yapay-sinir-aglari-matematigi",
    title: {
      tr: "Derin Öğrenmeye Giriş: Yapay Sinir Ağlarının Arkasındaki Matematik",
      en: "Introduction to Deep Learning: The Math Behind Neural Networks"
    },
    description: {
      tr: "Yapay sinir ağlarındaki ağırlık güncellemelerini, aktivasyon fonksiyonlarını ve geriye yayılım (backpropagation) formüllerini öğrenin.",
      en: "Understand weight optimization steps, activation functions, and the backpropagation chain-rule formulas in deep learning."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "9 dk",
      en: "9 min"
    },
    date: {
      tr: "20 Nisan 2026",
      en: "April 20, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Yapay sinir ağları, temelde yüksek boyutlu matris çarpımları ve türev tabanlı optimizasyonlardan oluşan matematiksel yapılardır. Gelişmiş yapay zeka modellerinin nasıl öğrendiğini anlamak için lineer cebir ve kalkülüs kurallarını bilmek gerekir. Bu yazıda, geriye yayılımın (backpropagation) matematiksel türetimini inceleyeceğiz.</p>
        <h3>İleri Besleme (Forward Propagation) ve Aktivasyon</h3>
        <p>Girdiler (X), ağırlıklar (W) ile çarpılıp sapma (bias) değeri eklendikten sonra doğrusal olmayan (non-linear) bir aktivasyon fonksiyonundan (ReLU, Sigmoid vb.) geçirilir. Bu doğrusal olmama durumu, ağın karmaşık, doğrusal olmayan ilişkileri öğrenmesini sağlar:</p>
        <p className="italic text-center">[z = W cdot X + b]</p>
        <p className="italic text-center">[a = sigma(z)]</p>
        <h3>Hata Azaltma ve Geriye Yayılım (Backpropagation)</h3>
        <p>Modelin tahmin hatası (Loss), gradyan inişi (gradient descent) yöntemi ve zincir kuralı (chain rule) kullanılarak ağdaki tüm ağırlıklara göre türetilir. Her geriye yayılım adımında, ağırlıklar hata yönünün tersine doğru güncellenerek modelin doğruluk oranı artırılır.</p>
      `,
      en: `
<p>At their core, neural networks are multidimensional matrix operations combined with derivative-based optimization. Comprehending how deep learning models learn requires exploring linear algebra and calculus. In this write-up, we derive backpropagation mathematically.</p>
        <h3>Forward Pass and Non-Linearities</h3>
        <p>Input variables (X) are multiplied by weight parameters (W), offset by biases (b), and passed to non-linear activation layers (such as ReLU or Sigmoid). This non-linearity allows the network to model highly complex mathematical functions:</p>
        <p className="italic text-center">[z = W cdot X + b]</p>
        <p className="italic text-center">[a = sigma(z)]</p>
        <h3>Error Correction and Backpropagation</h3>
        <p>Model errors are propagated backward using calculus chain-rule derivatives. We compute gradients representing how output loss reacts to weight fluctuations, updating parameters in the opposite direction of the gradient to iteratively minimize error.</p>
      `
    }
  },
  {
    slug: "supermemo-sm2-vs-sm17-karsilastirma",
    title: {
      tr: "Aralıklı Tekrar Algoritmaları: SuperMemo SM-2 vs SM-17",
      en: "Spaced Repetition Algorithms: SuperMemo SM-2 vs. SM-17"
    },
    description: {
      tr: "Aralıklı tekrar teorisinin ilk matematik modeli SM-2 ile modern veri tabanlı makine öğrenimi modeli SM-17 karşılaştırması.",
      en: "Comparing the classic SM-2 formula with the modern data-driven SM-17 machine learning model of spaced repetition."
    },
    category: {
      tr: "Eğitim",
      en: "Education"
    },
    readTime: {
      tr: "8 dk",
      en: "8 min"
    },
    date: {
      tr: "16 Nisan 2026",
      en: "April 16, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Aralıklı tekrarın babası Piotr Wozniak, hafızanın matematiksel seyir modelini çizmek için onlarca yıl çalışmıştır. Geliştirdiği ilk bilgisayarlı formül olan **SM-2**, bugün Anki ve Polyvo gibi birçok yazılımın temelini oluşturur. Ancak günümüzün gelişmiş veri setleri, daha karmaşık algoritmaları doğurmuştur: **SM-17**.</p>
        <h3>Klasik SM-2 Modelinin Sınırları</h3>
        <p>SM-2, aralıkları sadece sabit formüllere ve kullanıcının anlık puanına göre belirler. Kolaylık Katsayısı (EF) hızlı değişmez ve geçmişteki uzun vadeli unutma örüntülerini analiz edemez. Bu, bazen kelimelerin gereğinden sık veya nadir çıkmasına neden olur.</p>
        <h3>Modern SM-17 Yaklaşımı</h3>
        <p>SM-17, sabit katsayılar yerine üç boyutlu bir hafıza uzayı (Hatırlanabilirlik, Zorluk ve Kararlılık) tanımlar. Milyonlarca tekrar verisinden beslenen bir makine öğrenimi algoritması gibi çalışarak, her bireyin kendine has unutma eğrisini çok daha yüksek bir hassasiyetle tahmin eder.</p>
      `,
      en: `
<p>Dr. Piotr Wozniak devoted decades to modeling memory decay mathematically. His second digital attempt, the **SM-2** algorithm, serves as the engine for platforms like Anki and Polyvo. However, years of learning data eventually birthed the highly sophisticated **SM-17** algorithm.</p>
        <h3>Limitations of the SM-2 Model</h3>
        <p>SM-2 schedules intervals using fixed algebraic steps based on instant user quality ratings. Its Easiness Factor (EF) lacks memory of historical patterns, occasionally leading to redundant card reviews or unexpected forgetting spikes.</p>
        <h3>The Modern SM-17 Paradigm</h3>
        <p>SM-17 represents memory status as a coordinate inside a three-dimensional space: Retrievability, Stability, and Difficulty. By fitting individual response histories to global datasets, it forecasts memory decay rates with far greater precision.</p>
      `
    }
  },
  {
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
  },
  {
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
  },
  {
    slug: "css-degiskenleri-ve-tema-motorlari",
    title: {
      tr: "Modern CSS Değişkenleri ile Dinamik Tema Motorları Tasarlamak",
      en: "Designing Dynamic Theme Engines with CSS Custom Properties"
    },
    description: {
      tr: "Sayfa yenilenmeden açık/koyu tema geçişleri yapabilen, CSS Custom Properties tabanlı esnek stil sistemleri kurgulamak.",
      en: "Building a theme engine using CSS Custom Properties to switch between dark and light modes dynamically without page flashes."
    },
    category: {
      tr: "Yazılım",
      en: "Software"
    },
    readTime: {
      tr: "5 dk",
      en: "5 min"
    },
    date: {
      tr: "5 Nisan 2026",
      en: "April 5, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Geleneksel temalandırma yöntemlerinde açık ve koyu temalar için ayrı CSS dosyaları yüklenirdi. Bu, tema geçişlerinde sayfanın göz kırpmasına (flicker) veya yavaş yüklenmesine sebep olurdu. Modern web geliştirmede ise bu sorun **CSS Değişkenleri (Custom Properties)** ile çözülür.</p>
        <h3>CSS Değişkenlerinin Dinamik Yapısı</h3>
        <p>SASS/LESS değişkenlerinin aksine, CSS Custom Properties (<code>--variable-name</code>) tarayıcı tarafından çalışma zamanında (runtime) okunur ve güncellenebilir. Örneğin root seçiciye tema sınıfları ekleyerek tüm sitenin renk paletini tek satır JavaScript ile değiştirebilirsiniz:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>document.documentElement.setAttribute('data-theme', 'dark');</code></pre>
        <h3>Polimelo Tema Mimarisi</h3>
        <p>Polimelo'da, renkleri <code>[ThemeContext.tsx](file:///c:/Users/ahmet/Desktop/Projects/myReactApps/polimelo/src/context/ThemeContext.tsx)</code> ile takip ediyor ve <code>documentElement.classList</code> üzerinden <code>dark</code> sınıfını atıyoruz. CSS dosyamızda ise <code>var(--bg)</code>, <code>var(--fg)</code> gibi değişkenler bu sınıfa göre otomatik güncelleniyor.</p>
      `,
      en: `
<p>Old style sheets loaded separate CSS files for dark and light modes, creating performance lags. Modern websites manage skin switches using native **CSS Custom Properties** (Variables).</p>
        <h3>Dynamic Styles at Runtime</h3>
        <p>Unlike pre-processor variables (like SASS/LESS), CSS Custom Properties (<code>--variable-name</code>) are reactive at runtime. Toggling themes is as simple as adding a class or dataset attribute to the document element:</p>
        <pre className="bg-neutral-900 p-4 rounded block font-mono text-xs"><code>document.documentElement.setAttribute('data-theme', 'dark');</code></pre>
        <h3>Theme Architecture in Polimelo</h3>
        <p>In Polimelo, we wrap our root in a <code>ThemeContext</code> and toggle the <code>dark</code> class on the HTML container. CSS variables like <code>var(--bg)</code> and <code>var(--fg)</code> adjust instantly, generating smooth, flicker-free transitions.</p>
      `
    }
  },
  {
    slug: "bulmaca-oyunlarinda-kullanici-deneyimi-ux",
    title: {
      tr: "Bulmaca Oyunlarında Oyuncu Psikolojisi ve UX Tasarımı",
      en: "Player Psychology and UX Design in Puzzle Games"
    },
    description: {
      tr: "Kullanıcıyı sıkmadan veya pes ettirmeden zihinsel meydan okumalar sunmanın tasarımı.",
      en: "Designing intellectual challenges that keep players engaged without causing premature fatigue or frustration."
    },
    category: {
      tr: "Oyun Tasarımı",
      en: "Game Design"
    },
    readTime: {
      tr: "6 dk",
      en: "6 min"
    },
    date: {
      tr: "2 Nisan 2026",
      en: "April 2, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Bulmaca oyunları tasarlarken en kritik denge, oyuncunun zekasını sınarken onu oyundan soğutmamaktır. Bir bulmaca çok kolay olduğunda "sıkıcı", çözülemez göründüğünde ise "moral bozucu" olur. Bu dengeyi korumak için oyuncu psikolojisini ve kullanıcı deneyimi (UX) prensiplerini iyi bilmek gerekir.</p>
        <h3>Görsel İpuçları ve Sezgisellik</h3>
        <p>Oyuncuya kuralları uzun metinlerle okutmak yerine seviye tasarımları ile sezgisel olarak öğretmelisiniz. Örneğin Syncron'da, buz zeminin kaygan olduğunu anlatmak yerine ilk seviyede oyuncuyu bu zemine basmaya zorlayarak sonucu gözleriyle görmesini sağladık. Sezgisel görsel semboller, bulmaca karmaşıklığını azaltır.</p>
        <h3>Aha! Hissi ve Ödüllendirme</h3>
        <p>Oyuncunun bulmacayı çözdüğü an hissettiği zihinsel patlama en büyük ödüldür. Bu anı taçlandırmak için seviye sonlarında ekranda tetiklenen neon efektler, tatlı sesler ve akıcı geçiş animasyonları gibi mikro ödüller sunarak oynama motivasyonunu canlı tutuyoruz.</p>
      `,
      en: `
<p>Designing puzzle layouts is a fine balancing act: testing the player's brain without inducing frustration. If a level is too simple, it is boring; if it is impossible, it leads to quitting. Maintaining this equilibrium requires analyzing player psychology.</p>
        <h3>Visual Cues over Tutorials</h3>
        <p>Avoid walls of text. Show, don't tell. In Syncron, instead of writing instructions on ice behavior, we crafted the opening level to force a slide, allowing players to learn the rule organically through experience.</p>
        <h3>The Joy of Epiphany</h3>
        <p>The core reward of a puzzle game is the intellectual spark when the solution clicks. We reinforce this "Aha!" moment with micro-rewards: satisfying sound effects, glowing neon bursts, and slick animations that keep players engaged.</p>
      `
    }
  },
  {
    slug: "i18n-sitemap-ve-robots-txt-seo-yapilandirmasi",
    title: {
      tr: "Çok Dilli (i18n) Sitelerde Sitemap ve Robots.txt Yapılandırması",
      en: "Sitemap and Robots.txt Configurations for Multilingual (i18n) Sites"
    },
    description: {
      tr: "Google'ın çok dilli siteleri tararken kullandığı hreflang etiketleri, robots.txt kuralları ve sitemap şablonları.",
      en: "How to configure robots.txt, dynamic sitemaps, and hreflang tag hierarchies for search engine optimization on multilingual websites."
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
      tr: "29 Mart 2026",
      en: "March 29, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Web sitenizi birden fazla dilde yayınladığınızda, arama motorlarının bu dillerin her birini doğru indekslemesini sağlamak kritik bir SEO konusudur. Google, farklı dillerdeki aynı sayfaların kopya içerik (duplicate content) olarak algılanmaması için özel yapılandırmalar talep eder.</p>
        <h3>Hreflang Etiketlerinin Önemi</h3>
        <p>Her sayfanın HTML başlığında (head), o sayfanın diğer dillerdeki karşılıklarını gösteren <code>hreflang</code> etiketleri bulunmalıdır. Bu etiketler Google'a "Bu sayfa Türkçe versiyondur, İngilizce arayan kullanıcılara ise şu adresi göster" talimatını verir. Polimelo sitemap.xml dosyamızda bu yapıyı dinamik olarak kurguladık.</p>
        <h3>Robots.txt ve Tarama Bütçesi</h3>
        <p>Çok dilli sitelerde tarayıcı botlarının (Googlebot, AdSense Bot) tüm dil klasörlerinize erişebildiğinden emin olun. Robots.txt dosyanızda dil yollarını (örneğin <code>/tr/</code> ve <code>/en/</code>) engelleyecek yanlış kuralların bulunmadığını kontrol etmeli ve sitemap dosyanızın yerini net olarak belirtmelisiniz.</p>
      `,
      en: `
<p>When publishing a multilingual website, ensuring that search engines parse and categorize each language version correctly is paramount for SEO. Incorrect structure leads to pages competing with each other or being flagged as duplicates.</p>
        <h3>Hreflang Directives</h3>
        <p>Every language variant needs to link to its counterparts using <code>hreflang</code> metadata. This tells search bots: "This is the Turkish variant, show the English variant to users searching in English." We dynamically build these alternate nodes into our sitemap.</p>
        <h3>Tuning Robots.txt for Crawling</h3>
        <p>Verify that your robots.txt file does not restrict crawlers from scanning subroutes (like <code>/en/</code> or <code>/tr/</code>). The configuration should explicitly expose all paths and provide a direct pointer to the <code>sitemap.xml</code> root.</p>
      `
    }
  },
  {
    slug: "firestore-offline-senkronizasyon-politikasi",
    title: {
      tr: "Cloud Firestore ile Çevrimdışı Veri Eşitleme Politikaları",
      en: "Offline Synchronization and Conflict Resolution with Cloud Firestore"
    },
    description: {
      tr: "Firebase Firestore'un offline persistence özelliğini kullanarak tarayıcıda veri tutarlılığı ve senkronizasyonu yönetmek.",
      en: "Handling transactional client consistency and write operations using Firebase Firestore's offline persistence layers."
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
      tr: "25 Mart 2026",
      en: "March 25, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Firebase Firestore, mobil ve web uygulamalarında gerçek zamanlı veri yönetimi için mükemmel çözümler sunar. Ancak en güçlü özelliklerinden biri, çevrimdışı önbellekleme (offline persistence) ve otomatik veri eşitleme altyapısıdır.</p>
        <h3>Firestore Çevrimdışı Çalışma Mantığı</h3>
        <p>Offline persistence etkinleştirildiğinde, Firestore yaptığınız tüm yazma ve okuma işlemlerini cihazın yerel önbelleğine (IndexedDB) kaydeder. İnternet kesildiğinde bile veritabanı okuma/yazma istekleri hata vermez, yerel önbellek üzerinden işlem devam eder.</p>
        <h3>Çakışmaları Çözme (Conflict Resolution)</h3>
        <p>İnternet bağlantısı geldiğinde, Firestore sıraya alınmış yerel yazma işlemlerini Firebase sunucularına gönderir. Eğer aynı veri sunucuda başka bir cihaz tarafından değiştirilmişse, Firestore varsayılan olarak "son yazan kazanır" (last-write-wins) politikasını uygular. Daha karmaşık çakışmaları çözmek için veritabanı işlemlerinizde timestamp veya transaction kullanmalısınız.</p>
      `,
      en: `
<p>Cloud Firestore provides dynamic tools for synchronizing realtime datasets. One of its standout components is its native offline caching layer, enabling apps to continue functioning when disconnected.</p>
        <h3>How Offline Caching Works</h3>
        <p>Once persistence is active, Firestore intercepts queries and localizes modifications to an internal IndexedDB store. Data operations execute instantly, queuing network calls until connection is recovered.</p>
        <h3>Resolving Out-of-sync Conflicts</h3>
        <p>When the client reconnects, the SDK pushes the queue of local mutations online. By default, a "last-write-wins" rule is applied. To build safer applications, implement transactions or metadata timestamps to detect and merge differences.</p>
      `
    }
  },
  {
    slug: "webview-ortamlarinda-guvenli-auth-yonetimi",
    title: {
      tr: "Capacitor ve Hybrid Webview Ortamlarında Güvenli Yetkilendirme (Auth) Yönetimi",
      en: "Secure Authentication in Capacitor and Hybrid WebView Environments"
    },
    description: {
      tr: "Mobil WebView uygulamalarında JWT, OAuth ve kullanıcı oturum verilerini sızmalara karşı koruma rehberi.",
      en: "Best practices for protecting JWT, OAuth, and user session storage against security breaches in mobile hybrid applications."
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
      tr: "22 Mart 2026",
      en: "March 22, 2026"
    },
    author: "Polimelo Stüdyo",
    content: {
      tr: `
<p>Capacitor veya Cordova ile geliştirilen hibrit mobil uygulamalar, web kodunuzu yerel bir WebView (sistem tarayıcısı) içinde çalıştırır. Arayüz web tabanlı olduğu için, standart web güvenlik açıkları (XSS vb.) mobil uygulamanızı da tehdit edebilir. Bu nedenle oturum yönetimi (Auth) yaparken çok dikkatli olunmalıdır.</p>
        <h3>Neden LocalStorage Güvenli Değildir?</h3>
        <p>LocalStorage, asenkron ve şifrelenmemiş düz metin olarak çalışır. WebView içindeki bir XSS açığı ile tüm session token'larınız (JWT) kolayca çalınabilir. Hibrit mobil uygulamalarda hassas verileri LocalStorage yerine cihazın güvenli saklama alanında (Android Keystore, iOS Keychain) barındırmalısınız.</p>
        <h3>Güvenli Depolama (Secure Storage) Çözümleri</h3>
        <p>Capacitor için geliştirilmiş <code>@capacitor-community/secure-storage</code> gibi eklentiler, verilerinizi işletim sisteminin native şifreleme altyapısına yazar. Oturum anahtarlarınızı bu şekilde saklayarak, web katmanı hacklense dahi token'larınızın çalınmasını tamamen engelleyebilirsiniz.</p>
      `,
      en: `
<p>Hybrid applications running inside mobile WebViews present unique security considerations. Because the UI layer is web-based, vulnerabilities like Cross-Site Scripting (XSS) can compromise app security, making secure auth crucial.</p>
        <h3>Why LocalStorage is Vulnerable</h3>
        <p>LocalStorage stores keys in unencrypted plain text. An XSS exploit can read this storage, leaking JWT access tokens. In hybrid environments, authentication credentials must be kept in hardware-backed storage (Keystore/Keychain).</p>
        <h3>Implementing Secure Storage</h3>
        <p>Using plugins like <code>@capacitor-community/secure-storage</code> allows writing credentials directly to native Keystores. Keeping your session tokens encrypted here protects them even if the web client layer is compromised.</p>
      `
    }
  }
];
