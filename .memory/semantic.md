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

## Tasarım sistemi kararları ("Command Deck" — DESIGN.md)
- **Renk üç dünya, asla karışmaz:** marka (Command Indigo `#3A36DB`) = eylem;
  pozitif (`#0E9F6E` yeşil) = iyi performans; hata (`#DC2B3D` kırmızı) = kötü/yıkıcı.
  Marka indigosu ASLA "performans iyi" anlamına gelmez.
- Diğer semantik: warning/pending `#C77700` (amber), info `#1B7FD4` (mavi).
- **Tipografi:** Inter (arayüz) + JetBrains Mono (yalnız sayılar/ID). Tüm sayılar
  **tabular (tnum) + sağa hizalı** — kolonlar dikey hizalanır.
- **PAUSED sakin/nötr** görünür (güvenli varsayılan alarm rengi taşımaz). Kampanya
  yaşam döngüsü: DRAFT → PAUSED → PENDING → LIVE → ERROR / ROLLED BACK.
- Para-harcatan/geri-alınamaz eylem **tek tıkla sunulmaz** (onay kapısı).
- Renge **tek başına** anlam yüklenmez — ikon/biçim/işaret (▲▼, nokta) ile yedeklenir
  (renk körü güvenliği). WCAG AA korunur; solid renk üstüne küçük beyaz metin yok,
  `*-container` + `on-*-container` çifti kullanılır.
- Veri enstrümanı estetiği: glassmorphism/gradyan/ağır gölge YOK; katmanlar 1px
  saç-teli `outline` ile ayrılır. Klavye-öncelikli (⌘K her yerde).
- Düzen: 4px ızgara, sol ray 248px, üst çubuk 56px, içerik max 1440px, satır 44px
  (compact 36px). Hesap değiştirici birinci sınıf öğe.
- Aynı metrik üründe her yerde aynı renkte (spend=indigo, revenue=yeşil, vb.).

## intent.md yaşam döngüsü
Oluştur → Tartış → Arşivle. Açık uçlar: Sahip adı ve tarih placeholder; "Tartış"
aşamasına resmi geçiş henüz yapılmadı (kullanıcı odağı başka yöne çevirdi).
