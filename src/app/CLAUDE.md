# src/app

## globals.css
Tailwind v4 config buradadır (`@import "tailwindcss"` ve `@custom-variant dark`).

**CSS Değişkenleri**
| Değişken | Light | Dark |
|---|---|---|
| `--bg` | `#f4f3ef` | `#0d0d0d` |
| `--fg` | `#0d0d0d` | `#efefef` |
| `--fg-muted` | `#6b6b6b` | `#888` |
| `--border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` |
| `--card-bg` | `#ffffff` | `#161616` |

Dark mode: `html.dark` sınıfı ThemeContext tarafından yönetilir.

## layout.tsx
- `ThemeProvider` buraya sarılmıştır — her sayfaya otomatik aktarılır.
- Font: Geist Sans + Geist Mono (`--font-geist-sans`, `--font-geist-mono`)
- `lang="tr"`

## page.tsx (Anasayfa)
- Koyu hero (`#080808`) → `<Nav startsOverDark />`
- `AppFeatureSection` bileşeni: `flip` prop ile metin/görsel sırasını değiştirir
- Uygulama verileri dosyanın üst kısmındaki `apps` const'unda — yeni uygulama eklemek için oraya ekle

## syncron/page.tsx
- Her zaman koyu tema (`#080808` bg, `#4ade80` neon yeşil accent)
- Tema değişkenleri kullanılmaz; `Nav startsOverDark` ile açılır
- Mekanikler, puanlama, platform verileri dosya başındaki const'larda

## polyvo/page.tsx
- Tema uyumlu (`var(--bg)` vs.) — hem light hem dark çalışır
- Ana renk indigo: `#4f46e5` (ACCENT) ve `#818cf8` (ACCENT_LIGHT)
- Hero'da sağda 9:16 mobil ekran placeholder'ı (hafif rotate ile)
- Çalışma modları, oyunlar, özellikler, platformlar verileri dosya başındaki const'larda

## about/page.tsx
- Tema uyumlu
- Stüdyo hikayesi, değerler (tablolu liste), ürün kartları, iletişim CTA
- E-posta adresi `mailto:hello@polimelo.com` — gerçek adresle değiştir
- Geniş format stüdyo fotoğrafı placeholder (16:7 aspect ratio)
