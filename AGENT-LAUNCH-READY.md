# Agent Team Launch Ready
## Stone & Salt Commercial-Primary Buildout

---

## ✅ What's Been Created

### Core Documents
| File | Purpose | Status |
|------|---------|--------|
| `CONCEPT-BRIEF.md` | Updated for commercial-primary, locked pricing | ✅ Ready |
| `CLAUDE.md` | Agent team configuration, waves, dependencies | ✅ Ready |
| `kickoff-prompt.md` | Detailed instructions for each agent | ✅ Ready |

### Research Archive
| File | Contents |
|------|----------|
| `CONSOLIDATION-ANALYSIS.md` | Cross-reference of all materials |
| `RESEARCH-SUMMARY.md` | Validated findings from Google Drive |
| `archive/manus-strategy/` | Original Manus docs (archived) |
| `archive/manus-react-site/` | React site code (archived) |

### Existing Assets (From Google Drive)
All validated and ready for agents to reference:
- PRICING_BENCHMARKS.md — Locked pricing
- BRAND_BIBLE.md — Voice, colors, messaging
- BUSINESS_SYSTEMS.md — Operations SOPs
- SNOW_LANDING_PAGE.md — Page copy
- All competitor research

---

## 🚀 Agent Team Structure

### Wave 1: Strategy (Run First)

**Agent 1: Brand & GTM (Opus)**
- Update messaging for commercial-primary
- Property manager email sequences (3 emails)
- Sales deck outline (10 slides)
- "Why switch to us" positioning
- **Output:** `/output/01-brand-gtm-strategy.md`

**Agent 2: Operations (Sonnet)**
- Lead qualification framework
- CRM recommendation (HubSpot vs Jobber)
- Follow-up sequences for 3-6 month cycles
- Service documentation system
- Proposal template structure
- **Output:** `/output/02-operations-systems.md`

### Wave 2: Build (After Wave 1 Review)

**Agent 3: Website (Opus)**
- Restore pages from `full-site-backup` branch
- Update navigation for commercial-primary
- Implement new messaging
- Add commercial-specific elements
- SEO optimization
- **Output:** `/output/website/` (working codebase)

**Agent 4: Financial (Sonnet)**
- Update projections for commercial-primary
- Cash flow with sales cycle delays
- Unit economics
- Break-even analysis
- **Output:** `/output/04-financial-model.md`

### Wave 3: Synthesis (After Wave 2 Review)

**Agent 5: Lead Synthesis (Opus)**
- Review all outputs
- Resolve conflicts
- Business plan synthesis
- Launch readiness checklist
- **Output:** `/output/05-business-plan.md`, `DECISION.md`

---

## 📋 How to Launch

### Step 1: Start Wave 1
```bash
cd /Users/kylenaughtrip/Code/stone-and-salt
tmux
claude --permission-mode plan
```

**Paste:** Contents of `kickoff-prompt.md`

**Agents will spawn:**
- Brand & GTM Agent (Wave 1)
- Operations Agent (Wave 1)

**Time:** ~60 minutes elapsed
**Cost:** ~$10-15

### Step 2: Review Wave 1
Read outputs:
- `/output/01-brand-gtm-strategy.md`
- `/output/02-operations-systems.md`

**Check:**
- [ ] Messaging feels right for commercial
- [ ] Property manager pain points addressed
- [ ] CRM recommendation makes sense
- [ ] Lead qualification captures what you need

### Step 3: Start Wave 2
In same Claude session:
```
"Wave 1 complete. Spawn Wave 2 agents: Website Build and Financial Model."
```

**Agents will spawn:**
- Website Agent (Wave 2)
- Financial Agent (Wave 2)

**Time:** ~90 minutes elapsed
**Cost:** ~$10-15

### Step 4: Review Wave 2
Read outputs:
- `/output/website/` — Review site locally
- `/output/04-financial-model.md`

**Check:**
- [ ] Website builds without errors
- [ ] Navigation reflects commercial-primary
- [ ] All pages render on mobile
- [ ] Forms functional
- [ ] Financial model makes sense

### Step 5: Start Wave 3
```
"Wave 2 complete. Spawn Wave 3: Lead Synthesis."
```

**Agent will spawn:**
- Lead Synthesis Agent (Wave 3)

**Time:** ~30 minutes elapsed
**Cost:** ~$5-8

### Step 6: Final Review
Review:
- `/output/05-business-plan.md`
- `DECISION.md`

**Then:**
- Deploy website
- Start commercial outreach
- Execute launch checklist

---

## ⚠️ Critical Before Launch

These items still need YOUR action:

| Item | Status | Your Action |
|------|--------|-------------|
| LLC formation | ❓ Unknown | Form LLC (if not done) |
| $2M GL insurance | ❓ Unknown | Get quotes, bind coverage |
| Real phone number | Placeholder | Get number, update all files |
| Partner pricing sign-off | Not finalized | Confirm with partner |
| Equipment lease/buy | Not acquired | Get tractor for estate mowing |

---

## 🎯 What Agents Won't Do

Agents will NOT:
- ❌ Form your LLC
- ❌ Get insurance quotes
- ❌ Buy equipment
- ❌ Make sales calls
- ❌ Get you a phone number

Agents WILL:
- ✅ Build website and systems
- ✅ Create messaging and copy
- ✅ Design processes and templates
- ✅ Prepare everything for launch

---

## 💰 Estimated Costs

| Phase | Cost | Time |
|-------|------|------|
| Wave 1 (Brand + Ops) | $10-15 | 60 min |
| Wave 2 (Website + Financial) | $10-15 | 90 min |
| Wave 3 (Synthesis) | $5-8 | 30 min |
| **Total** | **$25-38** | **~3 hours elapsed** |

---

## 🚦 Ready to Launch?

**You need to decide:**

**Option A: Launch agents now**
- Start immediately
- Website ready in ~3 hours
- You'll need to handle LLC/insurance/phone in parallel

**Option B: Handle prerequisites first**
- Get phone number
- Confirm LLC status
- Get insurance quotes
- Then run agents
- **Risk:** Delay = miss spring commercial sales cycle

**My recommendation: Option A**
The 3-6 month commercial sales cycle means you need to start outreach NOW. Website can launch with placeholder phone, updated when real number available.

---

## 📁 File Locations

All documents ready at:
```
/Users/kylenaughtrip/Code/stone-and-salt/
├── CONCEPT-BRIEF.md              ← Updated for commercial-primary
├── CLAUDE.md                      ← Agent team config
├── kickoff-prompt.md              ← Paste this into Claude
├── AGENT-LAUNCH-READY.md          ← This file
├── CONSOLIDATION-ANALYSIS.md      ← Research cross-reference
├── RESEARCH-SUMMARY.md            ← Validated findings
└── archive/                       ← Manus materials archived
```

---

## 🎬 Next Step

**To start:**
```bash
cd /Users/kylenaughtrip/Code/stone-and-salt
claude --permission-mode plan
# Paste contents of kickoff-prompt.md
```

**Or tell me:**
- "Launch agents now" → I'll start the session
- "Wait, I need to check something first" → What do you need?
- "Just run the website agent" → Skip to Wave 2 only
