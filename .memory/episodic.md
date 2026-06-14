# Episodic — Oturum Zaman Çizelgesi

> Append-only. Her önemli olay: tarih + 1-2 satır özet.

## 2026-06-14
- `intent.md` derinlemesine incelendi; AdCommander niyeti, kullanıcı, başarı kriterleri,
  kapsam-dışı ve riskler anlaşıldı.
- Karar: tech stack = TypeScript/Next.js; birincil kullanıcı = ajanslar/freelancer.
  (intent.md'yi netleştirme planlandı ama uygulama ertelendi.)
- Dünya standartlarında CLAUDE.md en iyi pratikleri araştırıldı (claude-code-guide).
  AdCommander'a özel `CLAUDE.md` yazıldı (guardrail'lar en üstte, `@intent.md` import).
- Kullanıcı izniyle geliştirme `main` branch'ine taşındı; CLAUDE.md main'e merge+push.
  Bundan sonraki tüm talepler main'e gidecek.
- `DESIGN.md` (470 satır, "Command Deck" tasarım sistemi) kullanıcı tarafından eklendi,
  incelendi ve hafızaya işlendi.
- `agentmemory` modeli incelendi; ephemeral ortam nedeniyle **dosya tabanlı `.memory/`**
  adaptasyonu kuruldu (4 katman + profile + knowledge-graph) ve öğrenilenlerle dolduruldu.
- "Ayağa kaldırma" için 5 adımlık plan onaylandı (her adım lokalde çalışır/görünür).
  **Adım 1 tamamlandı:** Next.js 15 + TS strict + Tailwind v4 iskelesi, DESIGN.md
  token'ları, Inter/JetBrains Mono, Command Deck ana sayfası. build/typecheck/dev temiz.
