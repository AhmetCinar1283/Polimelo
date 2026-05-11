# src/context

## ThemeContext.tsx
`ThemeProvider` ve `useTheme()` hook'u içerir.

- `useTheme()` → `{ theme, toggleTheme, setTheme }`
- `theme`: `"light"` | `"dark"`
- `localStorage` anahtarı: `"polimelo-theme"`
- Provider mount olmadan önce `useState("light")` ile başlar (hydration mismatch önlemek için `mounted` flag kullanılır)
- `html` elementine `dark` sınıfı eklenir/kaldırılır — Tailwind `dark:` prefix bu sınıfı takip eder

Tüm Client Component'larda `useTheme()` ile temaya erişilebilir. Provider `layout.tsx`'e sarılmıştır.
