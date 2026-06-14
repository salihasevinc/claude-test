# Working — Güncel Bağlam & Açık Uçlar

> Volatil. En güncel durum; iş ilerledikçe üzerine yazılır.

## Şu anki durum
- 5 adımlık "ayağa kaldırma" planı yürürlükte. **Adım 1 TAMAM:** Next.js 15 (App
  Router) + TS strict + Tailwind v4 + ESLint kuruldu; DESIGN.md token'ları
  `src/app/globals.css` `@theme`'e döküldü; Inter + JetBrains Mono next/font ile
  yüklendi; Command Deck görünümlü ana sayfa (`src/app/page.tsx`) çalışıyor.
  `pnpm typecheck` + `pnpm build` temiz, `pnpm dev` HTTP 200.
- Aktif geliştirme branch'i: **main**. Paket yöneticisi: pnpm.

## 5 adım ilerleme
1. ✅ Temel + tasarım token'ları
2. ⬜ Kokpit kabuğu (sol ray 248px, üst çubuk 56px, env rozeti, ⌘K, routing)
3. ⬜ Dashboard: KPI döşemeleri + çoklu-hesap performans tablosu (mock veri-erişim katmanı)
4. ⬜ Kampanya yaşam döngüsü + oluşturma akışı (varyasyon üretimi mock, yaz-onayla modalı, PAUSED)
5. ⬜ Postgres (Prisma) + seed + mock katmanı DB'ye geçiş + test/README

## Açık uçlar (sonraya)
- `intent.md` netleştirme (sahip/tarih, "Tartış" aşaması) — ertelendi.
- Guardrail pekiştirme: `.claude/settings.json` hook + permission deny — sonraki faz.
- Gerçek Meta/Google API entegrasyonu: API onayı gerektiren ayrı faz, 5 adım dışı.

## Hatırlatma
Kesin paket/ORM seçimleri henüz yapılmadı. Yeni bilgi geldikçe semantic.md ve
profile.md güncellenmeli.
