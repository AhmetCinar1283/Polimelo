import { BlogPost } from "../posts";

export const framer_motion_mikro_etkilesimler: BlogPost = {
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
  };
