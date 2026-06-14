# Semantic — Kalıcı Gerçekler & Kararlar

## ⚠️ Guardrail'lar (uyulması zorunlu — gerçek para & hesap riski)
Kaynak: intent.md + CLAUDE.md + DESIGN.md (üçü hizalı).
- Kampanyalar **DAİMA `PAUSED`** durumda oluşturulur; otomatik "aktif/LIVE" başlatma yok.
- Meta/Google'a kurulum/değişiklik **insan onayı olmadan gönderilmez**; yüksek sürtünmeli
  onay (net özet + etkilenecek hesap/bütçe + **yaz-onayla**) ve **rollback** zorunlu.
- **Otomatik bütçe/teklif optimizasyonu veya otopilot YOK** — v1'de sadece öneri.
- Erişim token'ları/sırlar koda/log'a/repo'ya **asla** yazılmaz; şifreli saklama,
  en az yetki, rotasyon, denetim kaydı.
- Üretilen içerik yayından önce **policy ön-kontrolünden** geçer (yasaklı sektör/iddia).
- **SANDBOX/LIVE** ortam göstergesi her ekranda görünür kalır; geliştirme canlıya yazmaz.

## Kapsam dışı (v1'de yapılmayacak)
Meta/Google dışı mecralar; otomatik optimizasyon; kendi üretici model eğitimi;
çoklu dil/white-label/ajans alt-hesap hiyerarşisi; muhasebe entegrasyonları
(abonelik tahsilatı hariç).

## Başarı kriterleri (ölçülebilir hedefler)
≤10 dk hesap bağlama · ≥5 kreatif+metin varyasyonu · ≤5 dk kurulum ·
günde 1 metrik çekimi · lansmandan 90 gün içinde ≥10 ödeyen abone.

## Tasarım sistemi kararları ("Komuta Merkezi / Command Center" — DESIGN.md, 2026-06-14 yenilendi)
> DESIGN.md tümden sadeleştirildi (eski "Command Deck"/indigo arşivlendi).
- **Renk (anlam = renk):** primary mavi `#2563EB` = eylem/link/aktif; success
  `#10B981` = iyi performans/Apply; error `#EF4444` = hata/durdurulan reklam;
  neutral koyu lacivert `#0F172A` = header/sidebar/ana metin. Arka plan `#FCF8FA`,
  yüzey `#FFFFFF`, kenarlık `#E2E8F0`.
- **Korunan (guardrail gereği, kullanıcı kararı):** caution amber `#D97706`
  (SANDBOX & PENDING REVIEW) + container; ayrı info tonu `#0284C7`.
- **Tipografi:** Inter (arayüz; başlıklar 700+ ağırlık) + JetBrains Mono (sayı/ID,
  korundu). Sayılar tabular (tnum).
- **Bileşen:** radius standart **8px**; gölge düz/`shadow-sm`; ikon Material outline;
  kart = beyaz zemin + ince gri kenarlık.
- **Düzen:** desktop sidebar **240px** (eski 248), esnek ana içerik; 4px spacing
  (4·8·12·16·24·32·48); sayfa kenar padding ≥24px.
- **Guardrail-UI korunur (kaynak intent.md/CLAUDE.md):** PAUSED sakin/nötr; kampanya
  yaşam döngüsü DRAFT→PAUSED→PENDING→LIVE→ERROR/ROLLED BACK; para-harcatan eylem
  tek tıkla değil (yaz-onayla); SANDBOX/LIVE her ekranda; renge tek başına anlam yok
  (ikon/işaret ile yedekle). Yeni DESIGN.md bunları yazmasa da kaldırılmadı.
- Aynı metrik üründe her yerde aynı renkte (spend=mavi, revenue=yeşil, vb.).

## intent.md yaşam döngüsü
Oluştur → Tartış → Arşivle. Açık uçlar: Sahip adı ve tarih placeholder; "Tartış"
aşamasına resmi geçiş henüz yapılmadı (kullanıcı odağı başka yöne çevirdi).
