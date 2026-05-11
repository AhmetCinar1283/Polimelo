# src/components

## Nav.tsx
Tüm sayfalarda kullanılan sabit üst navigasyon.

**Props**
- `startsOverDark?: boolean` — Hero bölümü koyu arka planlıysa `true` yap. Nav ilk yüklenişte beyaz metin gösterir; 60px scroll sonrası tema renklerine geçer + frosted glass arka plan aktif olur.

**Kullanım**
```tsx
// Koyu hero olan sayfalarda (anasayfa, syncron)
<Nav startsOverDark />

// Açık arka planlı sayfalarda (polyvo, about)
<Nav />
```

**İçerik:** Logo (Polimelo.), Projeler linki, Hakkımızda linki, dark/light toggle butonu.
