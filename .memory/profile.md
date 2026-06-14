# Profile — Proje Zekâsı

## Proje
**AdCommander** — Meta & Google Ads için kreatif/metin üretimi, otomatik kampanya
kurulumu ve performans analizini tek panelde toplayan, aylık abonelikli SaaS.
Greenfield (sıfırdan kuruluyor). Estetik kimliği: **"Command Deck"** mission-control.

## Birincil kullanıcı
Çok hesap yöneten küçük/orta ajanslar ve freelance performans uzmanları
(rol: kampanya yöneticisi / performans uzmanı). Tüm v1 ürün kararları bu role göre:
**çok-hesap yönetimi + operasyonel hız** önceliklidir. İkincil: e-ticaret KOBİ'leri.

## Tech stack (kararlaştırılan)
- TypeScript (strict), Next.js (App Router), React, Node.
- Postgres veritabanı.
- Harici: Meta Marketing API, Google Ads API, üretim için hazır LLM/görsel API'leri.
- Kesin paket/ORM seçimleri iskele aşamasında netleşecek.

## Anahtar dosyalar (hakikat kaynakları)
- `intent.md` — niyet sözleşmesi; ürün niyetinde tek hakikat kaynağı (çelişkide kazanır).
- `DESIGN.md` — "Command Deck" tasarım sistemi (renk/tipo/bileşen token'ları + kurallar).
- `CLAUDE.md` — Claude için oturum yönergeleri + guardrail'lar; `@intent.md` import eder.
- `.memory/` — bu kalıcı hafıza klasörü.

## v1 yetenekleri
1. OAuth ile Meta+Google hesap bağlama (≤10 dk).
2. Tek brief'ten ≥5 kreatif + metin varyasyonu (hazır API'ler).
3. Onaylı kampanyayı Meta+Google'a kurma (≤5 dk, PAUSED başlar).
4. Günlük metrik çekimi (harcama, CTR, CPC, CPA/ROAS) + tek ekran.

## Repo durumu (2026-06-14)
- Branch: **main** üzerinde geliştiriliyor (kullanıcı açık izin verdi).
- Henüz kod/iskele yok; intent.md, DESIGN.md, CLAUDE.md ve .memory/ mevcut.
