# Knowledge Graph — Varlıklar & İlişkiler

> Basit entity → relation → entity üçlüleri. Akıl yürütme için hızlı harita.

## Varlıklar
- **AdCommander** (ürün / SaaS)
- **Ajans/Freelancer** (birincil kullanıcı), **E-ticaret KOBİ** (ikincil)
- **Meta Marketing API**, **Google Ads API** (reklam platformları)
- **LLM/Görsel API** (hazır üretim sağlayıcıları)
- **Kampanya** (DRAFT/PAUSED/PENDING/LIVE/ERROR/ROLLED BACK durumları)
- **Reklam Hesabı** (OAuth ile bağlı), **Token** (şifreli, en az yetki)
- **Command Deck** (tasarım sistemi)
- Dosyalar: **intent.md**, **DESIGN.md**, **CLAUDE.md**, **.memory/**

## İlişkiler
- AdCommander —hizmet eder→ Ajans/Freelancer (çok hesap), E-ticaret KOBİ
- AdCommander —entegre olur→ Meta Marketing API, Google Ads API
- AdCommander —kullanır→ LLM/Görsel API (kreatif+metin üretimi)
- Ajans/Freelancer —OAuth ile bağlar→ Reklam Hesabı —tutar→ Token
- AdCommander —kurar→ Kampanya (DAİMA PAUSED başlar) —deploy edilir→ Meta+Google
- Kampanya —geçer→ policy ön-kontrol + insan onayı (yaz-onayla) —saklar→ rollback
- Command Deck —görselleştirir→ Guardrail'lar (PAUSED sakin, SANDBOX/LIVE rozeti, sürtünme)
- intent.md —kaynaktır→ DESIGN.md, CLAUDE.md, .memory/ (türevler)
- .memory/ —izler→ agentmemory modeli (dosya tabanlı, git-kalıcı)
