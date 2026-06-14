# AdCommander — Proje Hafızası (.memory/)

Bu klasör, AdCommander için **kalıcı ajan hafızasıdır**. [agentmemory](https://github.com/rohitg00/agentmemory)
sisteminin modeli, ephemeral (geçici) web ortamına uygun şekilde **dosya tabanlı**
ve **git ile kalıcı** hale getirilmiştir. Canlı sunucu/MCP yerine, oturumlar arası
hatırlama git deposunda yaşar.

## Neden dosya tabanlı?
Claude Code web oturumları geçici bir container'da çalışır; kapanınca sıfırlanır.
Yalnızca git'e commit edilenler kalıcıdır. Bu yüzden hafıza, çalışan bir servis
değil, **commit edilen markdown dosyalarıdır**.

## Katmanlar (agentmemory 4-tier konsolidasyon modeli)
Ham gözlem → özet → kalıcı gerçek → tekrar eden iş akışı yönünde "soğur":

| Dosya | Katman | İçerik | Volatilite |
|---|---|---|---|
| `working.md` | Working | Güncel/ham bağlam, aktif görev, açık uçlar | Yüksek (sık değişir) |
| `episodic.md` | Episodic | Oturum özetleri / zaman çizelgesi (ne oldu) | Orta (append-only) |
| `semantic.md` | Semantic | Kalıcı gerçekler & kararlar (değişmez bilgi) | Düşük |
| `procedural.md` | Procedural | Tekrar eden iş akışları & "nasıl yapılır" | Düşük |
| `profile.md` | Profile | Proje zekâsı: stack, anahtar dosyalar, kavramlar | Düşük |
| `knowledge-graph.md` | Graph | Varlıklar + ilişkiler (entity/relation) | Düşük |

## Hafıza protokolü (Claude bunu izler)
- **Oturum başında OKU:** `profile.md` + `semantic.md` (kalıcı, yüksek sinyal) —
  bunlar CLAUDE.md'ye import edilir. Görev ilgiliyse `working.md`, `procedural.md`,
  `knowledge-graph.md`'yi de oku.
- **İş bitince YAZ:**
  - Yeni kalıcı bir gerçek/karar öğrenildiyse → `semantic.md`.
  - Tekrar edilebilir bir iş akışı belirlediyse → `procedural.md`.
  - Oturumda önemli bir şey olduysa → `episodic.md`'ye 1-2 satır (tarih + özet).
  - Aktif görev/açık uçlar değiştiyse → `working.md`'yi güncelle.
  - Yeni varlık/ilişki çıktıysa → `knowledge-graph.md`.
- **Tek hakikat kaynağı çelişkisi:** Ürün niyeti için `intent.md`, tasarım için
  `DESIGN.md` kazanır. Hafıza bunların **türevidir**, onların yerine geçmez.
- **Yüksek sinyal tut:** Kısa, madde işaretli, kanıttan türemiş. Tahmin yazma.
