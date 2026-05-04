# Skill Registry — Portfolio

Generated: 2026-04-28

## User Skills

| Trigger | Skill | Source |
|---------|-------|--------|
| Creating a PR, opening a PR | branch-pr | ~/.claude/skills/branch-pr |
| Creating a GitHub issue, reporting a bug | issue-creation | ~/.claude/skills/issue-creation |
| "judgment day", "dual review", "doble review" | judgment-day | ~/.claude/skills/judgment-day |
| Writing Go tests, using teatest | go-testing | ~/.claude/skills/go-testing |
| Creating a new skill, documenting patterns for AI | skill-creator | ~/.claude/skills/skill-creator |

## Project Conventions

| Source | Path |
|--------|------|
| Global CLAUDE.md | ~/.claude/CLAUDE.md |

## Compact Rules

### branch-pr
- Every PR MUST link an approved issue — no exceptions
- Every PR MUST have exactly one `type:*` label
- Automated checks must pass before merge
- Blank PRs without issue linkage will be blocked by GitHub Actions

### issue-creation
- Blank issues are disabled — MUST use a template (bug report or feature request)
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues

### judgment-day
- Launch TWO independent blind judge sub-agents in PARALLEL
- Judges do NOT see each other's output (blind review)
- Resolve skills from registry BEFORE launching judges
- Synthesize findings, apply fixes, re-judge until both pass or escalate after 2 iterations

### go-testing
- Use table-driven tests as the standard pattern
- Use teatest for Bubbletea TUI component testing
- Use golden file testing for complex output comparisons
- Always run `go test -race` to detect race conditions

### skill-creator
- Follow Agent Skills spec structure (frontmatter + sections)
- Include: When to Use, Critical Patterns, Rules
- Don't create skills for trivial or one-off patterns
- Skills need clear triggers for auto-detection
