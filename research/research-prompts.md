# Stone & Salt Deep Research Prompts
## Generated from Concept Brief — February 15, 2026

---

## PROMPT 1: Competitor Pricing Validation (HIGH PRIORITY)

**Research Question:**
What are the actual market rates for landscaping services in the Cincinnati northern suburbs (Liberty Township, West Chester, Mason, Oxford OH)?

**Specific services to research:**
1. **Estate mowing** — properties 10-30 acres (most critical)
2. **Standard residential mowing** — 0.5-2 acres
3. **Commercial snow removal** — per-push and seasonal contract rates
4. **Residential snow removal** — driveway clearing, per-push rates
5. **Hardscaping** — patios, retaining walls (per sq ft or project ranges)

**Research methods:**
- Visit competitor websites in target geography (search "landscaping [city]", "lawn care [city]", "snow removal [city]")
- Check Thumbtack.com for Cincinnati landscaping pros and their pricing
- Check HomeAdvisor for market rate estimates
- Call 3-5 companies as a "secret shopper" requesting quotes for:
  - "15-acre property needs mowing, what's your seasonal rate?"
  - "Commercial lot snow removal, what's your per-push price?"

**Output format:**
For each service, provide:
- Price range found (low, high, typical)
- 3-5 specific competitor names with their stated rates
- How they position (premium vs. commodity)
- Your confidence level in the data (high/medium/low)
- Any pricing models discovered (per-acre, per-hour, flat fee, etc.)

**Filename:** `research/competitor-pricing.md`

---

## PROMPT 2: Equipment Lease vs. Buy Analysis (HIGH PRIORITY)

**Research Question:**
What are the current costs to acquire or lease equipment for estate mowing in the Cincinnati area?

**Equipment to research:**
1. **Compact tractor with 60-72 inch mower deck**
   - John Deere 1025R or comparable
   - Kubota BX series or comparable
2. **Commercial zero-turn mower** (alternative to tractor)
   - 60+ inch deck
   - Brands: Scag, Exmark, Toro, John Deere
3. **Trailers** — 16-20ft for equipment transport

**Research methods:**
- Check local John Deere, Kubota, Mahindra dealer websites for pricing
- Search "equipment lease Cincinnati" for commercial lease rates
- Check EquipmentShare or similar rental platforms for short-term rates
- Look at used equipment market (Facebook Marketplace, Craigslist, auction sites)

**Output format:**
For each equipment type:
- Purchase price (new): range
- Purchase price (used 2-5 years): range
- Lease rate (if available): monthly cost, term requirements
- Rental rate (daily/weekly): for short-term needs
- Recommended acquisition strategy with rationale

**Filename:** `research/equipment-costs.md`

---

## PROMPT 3: Ohio Business Licensing & Insurance (MEDIUM PRIORITY)

**Research Question:**
What legal and insurance requirements must be met to operate a landscaping business in Ohio?

**Specific areas:**
1. **Business registration** — LLC formation, costs, timeline
2. **Licensing** — any state or local licenses required for landscaping
3. **Insurance requirements:**
   - General liability (typical coverage amounts, cost range)
   - Commercial auto insurance (if using personal trucks for business)
   - Workers compensation (if/when hiring employees)
   - Any industry-specific coverage
4. **Tax obligations** — Ohio sales tax on landscaping services

**Research methods:**
- Ohio Secretary of State business registration website
- Ohio Department of Insurance for requirements
- Local county/city business license requirements (Butler County, Warren County)
- Insurance broker websites or quotes for GL insurance

**Output format:**
- Step-by-step checklist to legally operate
- Cost estimates for each requirement
- Timeline to complete
- Any exemptions or special considerations

**Filename:** `research/legal-requirements.md`

---

## PROMPT 4: Estate Property Market Size Validation (LOW PRIORITY)

**Research Question:**
How many estate properties (10+ acres) exist in the target service area?

**Geography:**
- Oxford OH (Butler County)
- Waynesville OH (Warren County)
- Liberty Township OH (Butler County)
- Mason OH (Warren County)

**Research methods:**
- County property tax records (public data)
- Zillow/Redfin filters for 10+ acre properties
- Google Maps satellite view sampling (count visible large properties)
- Real estate agent insights (local knowledge)

**Output format:**
- Estimated count of 10+ acre properties per area
- Confidence level in estimate
- Any trends (growing, stable, declining)
- Demographic insights if available (owner-occupied vs. rental, age of owners)

**Filename:** `research/market-size.md`

---

## Research Execution Order

**Batch 1 (Parallel — Run These First):**
- Prompt 1: Competitor Pricing (CRITICAL for pricing decisions)
- Prompt 2: Equipment Costs (CRITICAL for launch planning)

**Batch 2 (After Batch 1):**
- Prompt 3: Legal/Insurance (can run parallel with Batch 1 if time permits)

**Batch 3 (Optional):**
- Prompt 4: Market Size (nice-to-have, not launch-blocking)

---

## Quality Checklist

Before saving each research output, verify:
- [ ] Specific numbers (not "typical rates are...")
- [ ] Named companies with sources
- [ ] Date of research noted
- [ ] "I couldn't find" sections for gaps (better than invented data)

If output is thin, use re-run triggers from `~/Code/_templates/research-quality-checklist.md`.
