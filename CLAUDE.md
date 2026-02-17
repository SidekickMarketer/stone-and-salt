# Stone & Salt — Agent Team Configuration
## Commercial-Primary Buildout | February 2026

---

## The Business

**Stone & Salt** is a year-round grounds management company serving commercial properties in Greater Cincinnati. We eliminate the vendor fragmentation problem—one contract covers landscaping, hardscapes, grounds maintenance, and snow removal.

**Positioning:** Commercial-primary. We lead with B2B grounds management; residential hardscape fills gaps between commercial sales cycles.

**Brand:**
- Name: Stone & Salt
- Tagline: "Four seasons. One call."
- Colors: Slate #2A2A2A, Eucalyptus #B3C3AD, Sun-Ochre #D5A056, Soft Cream #F6F4F1
- Voice: Professional, grounded, warm, sharp. "Boots not brochure."

---

## The Operator

**Partnership:** 50/50 owner-operators building reputation through reliability.
- Partner 1: Business operations, sales, client relationships
- Partner 2: Field operations, crew oversight, equipment

**Critical:** New company with no track record. Must build trust through professional presentation, documented processes, and owner accessibility.

---

## What's Locked vs. Flexible

### LOCKED (Do Not Change)
- Name: Stone & Salt
- Colors and typography
- Service area zones (Liberty Township, West Chester, Mason, Blue Ash, Loveland, Indian Hill)
- Pricing from PRICING_BENCHMARKS.md (already validated)
- Brand voice pillars (Professional, Grounded, Warm, Sharp)

### FLEXIBLE (Agents Determine)
- Website information architecture
- Commercial messaging hierarchy
- Lead qualification framework
- CRM/automation setup
- Proposal format details

---

## Design Problems to Solve

1. **Trust without track record:** Commercial property managers won't switch to unproven vendor without compelling reason
2. **Sales cycle management:** 3-6 month B2B cycles require pipeline discipline
3. **Service delivery documentation:** Commercial clients require timestamped logs for liability
4. **Seasonal transition:** Convert snow inquiries to grounds maintenance contracts
5. **Route optimization:** Properties across 45-min radius need efficient scheduling

---

## Research Files (Read Before Building)

All agents must read these files before starting:

```
/Users/kylenaughtrip/Code/stone-and-salt/
├── CONCEPT-BRIEF.md              (this business concept)
├── archive/manus-strategy/       (original strategy docs)
│   ├── 01_Strategy_and_Pricing.md
│   └── 02_Launch_Kit_Commercial.md
├── archive/manus-react-site/     (reference site structure)
├── CONSOLIDATION-ANALYSIS.md     (cross-reference analysis)
├── RESEARCH-SUMMARY.md           (validated findings)
└── research-prompts.md           (research framework)
```

**Google Drive Research (Reference Only):**
- PRICING_BENCHMARKS.md — Locked pricing matrix
- COMPREHENSIVE_MARKET_RESEARCH.md — 928-line market analysis
- SERVICE_AREA_ZONES.md — Geographic strategy
- BRAND_BIBLE.md — Voice, colors, messaging
- BUSINESS_SYSTEMS.md — Operations SOPs
- SNOW_LANDING_PAGE.md — Page copy reference

---

## Agent Team Configuration

### Wave 1: Strategy & Brand (Parallel)

**Agent 1: Brand & GTM Specialist**
- **Model:** Opus
- **Task:** Update all messaging for commercial-primary positioning
- **Deliverables:**
  - Commercial messaging framework (homepage hero, service descriptions)
  - Property manager outreach email sequences (3 emails)
  - Sales deck outline (10 slides)
  - "Why switch to us" positioning doc
  - B2B voice adjustments (more liability/predictability focus)
- **Must Read:** BRAND_BIBLE.md, CONCEPT-BRIEF.md, SNOW_LANDING_PAGE.md
- **Output:** `/output/01-brand-gtm-strategy.md`

**Agent 2: Operations Systems**
- **Model:** Sonnet
- **Task:** Refine operations for commercial B2B sales cycles
- **Deliverables:**
  - Lead qualification framework (property manager focused)
  - CRM setup recommendations (HubSpot vs Jobber)
  - Proposal template structure (commercial contracts)
  - Follow-up sequences for 3-6 month sales cycles
  - Service documentation system (timestamped logs)
- **Must Read:** BUSINESS_SYSTEMS.md, CONCEPT-BRIEF.md
- **Output:** `/output/02-operations-systems.md`

### Wave 2: Build (Parallel)

**Agent 3: Website Build**
- **Model:** Opus
- **Task:** Restore full website from backup + implement commercial-primary messaging
- **Deliverables:**
  - Restore pages from `full-site-backup` branch:
    - `/services/hardscapes`
    - `/services/maintenance`
    - `/services/estate-maintenance`
    - `/areas`
  - Update navigation for commercial-primary:
    1. Commercial Grounds (priority)
    2. Snow Removal
    3. Hardscapes
    4. Residential
  - Implement copy from SNOW_LANDING_PAGE.md and Brand Agent outputs
  - Add commercial-specific elements:
    - Insurance documentation section
    - "Request Site Assessment" CTAs
    - Service area pages for SEO
    - Lead qualification form
  - Ensure mobile-responsive, SEO-optimized
- **Must Read:** All brand docs, current website code, SNOW_LANDING_PAGE.md
- **Output:** `/output/website/` (working codebase)

**Agent 4: Financial Model Update**
- **Model:** Sonnet
- **Task:** Update projections for commercial-primary model
- **Deliverables:**
  - Updated revenue model (6-8 commercial contracts = $325K path)
  - Cash flow projection (3-6 month sales cycle impact)
  - Unit economics by service line
  - Break-even analysis with commercial focus
- **Must Read:** CONCEPT-BRIEF.md, existing financial docs
- **Output:** `/output/04-financial-model.md`

### Wave 3: Synthesis

**Agent 5: Lead Synthesis**
- **Model:** Opus
- **Task:** Review all outputs, resolve conflicts, create launch checklist
- **Deliverables:**
  - Business plan synthesis
  - Conflict resolution (if any between agents)
  - Launch readiness checklist
  - First 30-day action items
  - Updated DECISION.md
- **Must Read:** All Wave 1 and Wave 2 outputs
- **Output:** `/output/05-business-plan.md`, `DECISION.md`

---

## Wave Conflict Checks

**Lead must verify before spawning Wave 2:**
- [ ] Brand messaging framework is complete
- [ ] Operations systems are compatible with messaging
- [ ] Website agent has clear navigation hierarchy

**Lead must verify before spawning Wave 3:**
- [ ] Website builds without errors
- [ ] All service pages have consistent messaging
- [ ] Operations systems support the website lead flow

---

## Universal Rules for All Agents

1. **Commercial-primary mindset:** Everything serves B2B property managers first
2. **Use real data:** Reference PRICING_BENCHMARKS.md for all pricing mentions
3. **Professional voice:** Follow BRAND_BIBLE.md voice pillars
4. **Show reasoning:** Explain why decisions were made
5. **Flag conflicts:** If research contradicts, flag it immediately
6. **Owner-accessible positioning:** Emphasize "You get my cell. I answer."
7. **Documentation focus:** Commercial clients need timestamps, logs, proof

---

## Output Directory Structure

```
/Users/kylenaughtrip/Code/stone-and-salt/output/
├── 01-brand-gtm-strategy.md       # Wave 1: Brand Agent
├── 02-operations-systems.md        # Wave 1: Operations Agent
├── 03-website/                     # Wave 2: Website Agent
│   ├── src/
│   ├── package.json
│   └── README.md
├── 04-financial-model.md           # Wave 2: Financial Agent
└── 05-business-plan.md             # Wave 3: Lead Synthesis
```

---

## Key Metrics for Success

**Brand Agent:**
- Messaging passes "boots not brochure" test
- Property manager email sequence gets 15%+ open rate

**Operations Agent:**
- Lead qualification framework captures all critical data
- CRM recommendation fits 3-6 month B2B sales cycles

**Website Agent:**
- Passes Lighthouse 90+
- All pages render on mobile
- Contact forms functional

**Financial Agent:**
- $325K Year 1 path is mathematically sound
- Cash flow accounts for sales cycle delays

---

## Critical Success Factors

1. **Trust signals:** Insurance, documentation, owner accessibility
2. **Speed to lead:** 4-hour response time standard
3. **Documentation:** Timestamped service logs for liability
4. **Predictability:** Fixed pricing, annual contracts, no surprises
5. **Accountability:** Single point of contact, owner cell number
