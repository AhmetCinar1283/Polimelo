import { BlogPost } from "../posts";

export const yapay_sinir_aglari_matematigi: BlogPost = {
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
  };
