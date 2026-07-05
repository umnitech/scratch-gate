# Journal — append-only session log

<!-- Convention: every session appends ~5 lines when it finishes:
     ## <date> · <branch or issue #>
     what was done · files touched · commands run + exit codes · anything surprising.
     Append only — never rewrite old entries. Grep it; never load it whole.
     Parallel branches merge cleanly (union merge, see .gitattributes). -->

---

## 2026-07-04 · claude/s7-owned-path-probe-m105g7
S7 owned-path probe: added `tests/cloud-probe.txt` (single line marker) to exercise the CODEOWNERS-protected `/tests/` path via a cloud session. Files touched: `tests/cloud-probe.txt`, `docs/journal.md`. Opened PR "S7 probe: owned path via cloud" (not merged).

---

## 2026-07-04 · t6-prep
T6 staging (attended, Petar's Mac): added a **skipped** red test to `src/slugify.test.ts` (diacritics transliteration — the walk-away target unskips and implements it) and remapped `docker-compose.yml` to host port 5433 (probe f's `service postgresql start` owns 5432). Skipped-not-red because the wall itself forbids a red test on main (required `test` check) — the T6 spec's "pre-commit a red test" was written before the gate went live; scenarios.md updated to match. Companion ready-for-agent issue created separately.


## 2026-07-05 · claude/goal-command-cloud-fm1odj
Issue #18 (T6 walk-away): unskipped the diacritics test in `src/slugify.test.ts`, confirmed it failed red (`cr-me-br-l-e-la-fran-aise` vs `creme-brulee-a-la-francaise`, exit 1), then folded Latin diacritics to ASCII in `src/slugify.ts` via NFD normalize + strip combining marks (U+0300–U+036F) before the existing slug logic. Files touched: `src/slugify.ts`, `src/slugify.test.ts`, `docs/journal.md`. Commands: `pnpm test` exit 0 (3 passed), `pnpm typecheck` exit 0, `pnpm lint` exit 0. Non-Latin scripts out of scope per issue.
