# Procedural — İş Akışları & "Nasıl Yapılır"

## Git iş akışı (GÜNCEL)
- **`main` branch'inde geliştir.** Kullanıcı 2026-06-14'te açık izin verdi; ayrı
  feature branch açma. Bundan sonraki tüm talepler main'e gider.
- Push: `git push -u origin main`. Ağ hatasında 2s/4s/8s/16s ile en fazla 4 kez dene.
- PR yalnızca kullanıcı açıkça isterse oluşturulur.
- Commit mesajları net ve açıklayıcı; model kimliği/araç adı commit'e yazılmaz.

## Niyet/tasarım değişikliği sırası
Önce hakikat kaynağını güncelle (`intent.md` veya `DESIGN.md`), sonra `CLAUDE.md`
ve `.memory/`'yi hizala, sonra kod. Kaynak ile çelişen kod yazma.

## Commit öncesi (iskele kurulunca geçerli)
Sıra: `pnpm lint` → `pnpm tsc --noEmit` → `pnpm test`. Hepsi geçmeden commit etme.

## Hafıza güncelleme (bu .memory/ sistemi)
Bkz. `.memory/README.md` protokolü. Özet: oturum başında profile+semantic oku;
iş bitince yeni gerçek→semantic, yeni akış→procedural, olay→episodic (tarihli),
aktif görev→working, yeni varlık/ilişki→knowledge-graph.

## Üretim & kurulum guvenliği (gelecekte kod yazılırken)
Kampanya PAUSED oluştur → policy ön-kontrol → yüksek sürtünmeli onay (yaz-onayla)
→ deploy → rollback bilgisi sakla. Token'lar şifreli; SANDBOX/LIVE her zaman görünür.
Kritik kurallar ileride hook/permission deny ile pekiştirilebilir (CLAUDE.md tek
başına garanti değildir — ~%80 uyum).
