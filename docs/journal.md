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

---

## 2026-07-06 · claude/issue-23-unique-slug (#23)
Implemented `uniqueSlug(title, exists)` (issue #23) test-first via /grilling → /to-prd → /to-issues → /implement → /tdd. New export in `src/slugify.ts` (12 lines): `slugify(title) || 'untitled'`, return base if free, else probe `-2`,`-3`,… via injected `exists` predicate; pure/sync, `slugify` untouched, diacritics test left skipped. 5 vertical TDD slices in `src/slugify.test.ts` (Set-backed predicate, expected values from the PRD table). Files: `src/slugify.ts`, `src/slugify.test.ts`, `docs/journal.md`. `pnpm test` (10 pass/2 skip), `pnpm typecheck`, `pnpm lint` all exit 0. Two-axis /code-review: Spec clean; Standards flagged the collision-loop test inputs as recomputed — judged conforming (expected values trace to the PRD table) and committed as-is with Petar's OK.

