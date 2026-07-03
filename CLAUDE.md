# scratch-gate — CLAUDE.md

<!-- Generated from umnitech/platform templates at stamp time. Committed to the repo, so it loads
     EVERYWHERE — desktop, Claude Code on the web, containers. This file is about THE WORK.
     It is the only behavioral context an AFK agent has: keep it complete but ruthless. -->

Throwaway test bed for the umnitech delivery platform (gate, identity, cloud probes) — fixture app only, no real product. · Sensitivity: none

## Before acting
Read the tail of `docs/journal.md` and the open issues — that is the current state. The issue you
are working on defines "done" (its acceptance criteria). If no issue covers your task, say so
instead of inventing scope.

## Commands
- dev: none (fixture has no dev server)
- test: `pnpm test`            # single files while working; full suite before any commit
- typecheck: `pnpm typecheck`
- lint: `pnpm lint`

## Working rules
- Build test-first at the seams the issue/PRD names (`/implement` drives `/tdd`).
- State assumptions; if multiple interpretations exist, present them — never pick silently.
- Minimum code that solves the task. No speculative abstractions. Surgical diffs: every changed
  line traces to the issue; don't touch adjacent code, comments, or formatting.
- Expected test values come from an independent source of truth — never recomputed the way the
  code computes them.
- **Never touch real client data or production credentials. Test keys and synthetic data only.**
- When you finish: append to `docs/journal.md` — what was done, files touched, commands run with
  exit codes, anything surprising — then commit to the current branch.

## Agent skills
### Issue tracker
Issues and PRDs live in this repo's GitHub Issues (`gh` locally; built-in GitHub tools for reads in
cloud sessions). See `docs/agents/issue-tracker.md`.
### Triage labels
Five canonical labels; `ready-for-agent` = delegable, `ready-for-human` = needs a human.
See `docs/agents/triage-labels.md`.
### Domain docs
Single-context: `CONTEXT.md` + `docs/adr/` at the repo root, created lazily when the project earns
them. See `docs/agents/domain.md`.

## Structure
- `src/` — fixture code (one module + its test), `tests/` — probe files (CODEOWNERS-protected path)
- `.github/workflows/` — the gate (`build`,`lint`,`test`,`gitleaks`) + `auto-approve.yml` + advisory `review.yml`
- `docs/` — journal, decisions, agent configs

## Project specifics
This repo exists to be probed and deleted. PRs here exercise the merge wall (ruleset 18493075):
approvals=1 auto-satisfied by github-actions bot, 4 required checks, CODEOWNERS on `/tests/` and
`/auth/`. `docker-compose.yml` exists solely for the T5 cloud-capability probe (Postgres timing).
