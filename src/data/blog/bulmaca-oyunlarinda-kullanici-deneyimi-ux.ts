import { BlogPost } from "../posts";

export const bulmaca_oyunlarinda_kullanici_deneyimi_ux: BlogPost = {
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
  };
