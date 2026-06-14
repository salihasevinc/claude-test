# AdCommander — CLAUDE.md

Bu proje, Meta & Google Ads için kreatif/metin üretimi, otomatik kampanya kurulumu
ve performans analizini tek panelde toplayan abonelik bazlı bir SaaS'tır.
**Tek hakikat kaynağı ürün niyeti için @intent.md** — çelişki olursa intent.md kazanır.
Tasarım/ürün mimarisi kararları için **@DESIGN.md** ("Komuta Merkezi" tasarım sistemi).

## Proje hafızası (.memory/)
Kalıcı, git ile saklanan ajan hafızası `.memory/` içindedir (agentmemory modelinin
dosya tabanlı uyarlaması). **Oturum başında @.memory/profile.md ve @.memory/semantic.md
oku.** Görev ilgiliyse `.memory/working.md`, `procedural.md`, `knowledge-graph.md`'ye bak.
Yeni kalıcı gerçek/karar/akış öğrenince ilgili katmanı güncelle. Protokol:
@.memory/README.md.

## ⚠️ Guardrail'lar (uyulması zorunlu — gerçek para & hesap riski)
- **NEVER** bir kampanyayı otomatik "aktif/yayında" başlatma. Kampanyalar DAİMA
  `paused` (duraklatılmış) durumda oluşturulur.
- **NEVER** insan onayı olmadan Meta/Google'a kurulum/değişiklik gönderme. Yayın
  öncesi açık bir onay ekranı + geri alma (rollback) yolu zorunlu.
- **NEVER** otomatik bütçe/teklif optimizasyonu veya kurallı otopilot ekleme —
  v1'de sadece öneri sunulur, otomatik müdahale yoktur.
- **NEVER** erişim token'larını/sırları kod, log veya repo'ya yaz. Token'lar
  şifreli saklanır, en az yetki ilkesi, rotasyon + denetim kaydı.
- Üretilen reklam içeriği yayından önce **policy ön-kontrolünden** geçmeli
  (yasaklı sektör/iddia filtreleri).

## Kapsam (v1 / MVP)
- Yetenekler: (1) OAuth ile hesap bağlama, (2) brief'ten ≥5 kreatif+metin varyasyonu,
  (3) onaylı kampanyayı Meta+Google'a kurma, (4) günlük metrik çekimi & tek ekran.
- **Kapsam DIŞI (yapma):** Meta/Google dışı mecralar; otomatik bütçe optimizasyonu;
  kendi üretici model eğitimi (hazır API kullan); çoklu dil/white-label/alt-hesap
  hiyerarşisi; muhasebe entegrasyonları (abonelik tahsilatı hariç).
- Birincil kullanıcı: çok hesap yöneten ajanslar/freelancer'lar → çok-hesap yönetimi
  ve operasyonel hız tüm ürün kararlarında önceliklidir.

## Tech stack
- TypeScript (strict), Next.js (App Router), React, Node.
- Postgres veritabanı.
- Harici: Meta Marketing API, Google Ads API, üretim için hazır LLM/görsel API'leri.
- (Kesin paket/ORM seçimleri iskele aşamasında netleşecek.)

## Komutlar
> Repo henüz iskelelenmedi; aşağıdaki komutlar scaffold landikten sonra geçerlidir.
- Dev: `pnpm dev`
- Build: `pnpm build`
- Type-check: `pnpm tsc --noEmit`
- Lint: `pnpm lint`
- Test: `pnpm test`
- Commit öncesi sıra: lint → typecheck → test.

## Kod konvansiyonları
- TypeScript strict; `any` kullanma, `unknown` ile daralt.
- Named export tercih et; bileşenler domain'e göre klasörlenir.
- Next.js: varsayılan Server Component; `'use client'` yalnız gerektiğinde.
- Async fonksiyonlar hataları açıkça ele alır.
- Sırlar `.env` / ortam değişkenlerinde; örnek için `.env.example` tut.

## Repo etiketi
- Branch: `feature/...`, `fix/...`, `docs/...`.
- Küçük, odaklı commit'ler; net mesajlar.
- Niyet değişirse önce `intent.md` güncellenir, sonra kod.

## Gotchas / dikkat
- Reklam API'leri rate-limit'li ve pahalı → önbellek, kuyruk, kotalar düşün;
  gereksiz çağrı yapma.
- Meta App Review / Google Ads API erişimi onay sürer → önce sandbox/test token.
- Yanlış kurulum gerçek para harcatır → paused + onay + rollback kuralı her zaman.
