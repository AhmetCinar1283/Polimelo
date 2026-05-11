@AGENTS.md

# Polimelo — Proje Genel Bakış

Polimelo, iki uygulamayı (Polyvo ve Syncron) tanıtan stüdyo sitesi.

## Teknoloji
- **Next.js 16.2.4** (App Router, Turbopack) — `node_modules/next/dist/docs/` oku
- **React 19**, **TypeScript**, **Tailwind v4**, **Framer Motion**
- Dark mode: `@custom-variant dark` (CSS), sınıf tabanlı (`html.dark`)

## Tema Sistemi
- `src/context/ThemeContext.tsx` — `ThemeProvider` ve `useTheme()` hook
- CSS değişkenleri: `--bg`, `--fg`, `--fg-muted`, `--border`, `--card-bg`
- Tema `localStorage`'a kaydedilir; sistem tercihi otomatik algılanır

## Sayfa Rotaları
| Rota | Dosya | Açıklama |
|---|---|---|
| `/` | `src/app/page.tsx` | Anasayfa — hero + uygulama feature section'ları |
| `/polyvo` | `src/app/polyvo/page.tsx` | Polyvo tanıtım sayfası |
| `/syncron` | `src/app/syncron/page.tsx` | Syncron tanıtım sayfası |
| `/about` | `src/app/about/page.tsx` | Hakkımızda sayfası |

## Paylaşılan Bileşenler
- `src/components/Nav.tsx` — Tüm sayfalarda kullanılan nav. `startsOverDark` prop'u koyu hero üzerinde beyaz metin sağlar, scroll sonrası tema rengine döner.

## Tasarım Kuralları
- Generic AI görünümünden kaçın: editöryal layout, büyük tipografi, asimetrik grid.
- Syncron sayfası her zaman siyah (`#080808`) + neon yeşil (`#4ade80`); tema değişkenlerini kullanma.
- Polyvo sayfası tema uyumlu, ana renk indigo (`#4f46e5`).
- Medya placeholder'ları kasıtlı tasarlanmış; kaldırma, görseller eklenince değiştirilecek.
- Yorum satırı yazma; kod yeterince açıklayıcı olmalı.

## Uygulama Dokümanları
`.claude/docs/apps/polyvo-about.md` ve `.claude/docs/apps/syncron-about.md`
