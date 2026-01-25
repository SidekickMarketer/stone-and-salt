# Project Rules (Read First)

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- No new dependencies unless explicitly requested

## Anti-Reversion Rules (CRITICAL)
- Do NOT revert, remove, or simplify code that already exists unless explicitly asked
- Do NOT replace working implementations with "placeholder" or "simplified" versions
- Do NOT remove features, comments, or logic you didn't add in this session
- If you think something should be removed, ASK first — do not delete
- Preserve all existing functionality unless the task specifically requires changing it

## Quality Gates
- Must pass: npm run lint && npm run typecheck && npm run build
- No console errors on key routes

## Agent Behavior
- State your plan before making changes (3-5 bullets max)
- Make changes in small, reviewable patches
- After changes: list files touched + what changed + what to test
