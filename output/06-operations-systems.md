# Stone & Salt Operations & Service Design
## Commercial-Primary Year-Round Grounds Management | February 15, 2026

---

## Table of Contents

1. [CRM & Pipeline Configuration](#1-crm--pipeline-configuration)
2. [Proposal System](#2-proposal-system)
3. [Service Documentation System](#3-service-documentation-system)
4. [Scheduling & Route Optimization](#4-scheduling--route-optimization)
5. [Crew Scaling Plan](#5-crew-scaling-plan)
6. [Quality Control](#6-quality-control)
7. [Seasonal Transitions](#7-seasonal-transitions)
8. [Q4 Budget Season Playbook](#8-q4-budget-season-playbook)
9. [Technology Stack Recommendation](#9-technology-stack-recommendation)

---

## 1. CRM & Pipeline Configuration

### 1A. Platform Recommendation: GHL for CRM + Jobber for Field Operations

Stone & Salt needs two systems, not one. No single platform does both CRM/sales pipeline management AND field service management well at this price point. The correct architecture is:

**GoHighLevel (GHL)** -- CRM, prospect pipeline, phone/SMS, email outreach, client communication
**Jobber** -- Field service scheduling, GPS-tracked service documentation, invoicing, client portal, route optimization

Why not a single platform:

| Platform | CRM/Sales Pipeline | Field Service | GPS Documentation | QuickBooks Integration | Cost/Month | Verdict |
|----------|-------------------|---------------|-------------------|----------------------|------------|---------|
| **GHL (already paying $97/mo via Sidekick)** | Excellent -- custom pipelines, automation, phone/SMS, email sequences | None. GHL is not a field service tool. | None | No native integration | $0 incremental (shared with Sidekick) | Use for CRM/sales only |
| **Jobber (Growing plan)** | Basic -- contacts and quotes, but no pipeline stages or outbound automation | Excellent -- scheduling, dispatch, crew tracking, GPS check-in/out | Yes -- GPS timestamped, photo documentation per visit | Yes -- two-way sync, auto-invoice | $59/mo | Use for field operations |
| **Aspire** | Good pipeline | Excellent commercial field service | Yes | Yes | $300+/mo minimum, typically $500+ | Too expensive for Year 1. Designed for $1M+ operations. Revisit at $500K revenue. |
| **LMN** | Weak | Good estimating + scheduling | Limited | Yes | $200-350/mo | Better for estimating than operations. Does not justify the cost over Jobber for a 2-person crew. |
| **ServiceTitan** | Moderate | Excellent for HVAC/plumbing, not optimized for landscape | Yes | Yes | $250+/mo minimum | Wrong industry fit. Designed for dispatch-heavy home services, not route-based grounds management. |

**The decision: GHL ($0 incremental) + Jobber Growing ($59/mo) = $59/month total cost.**

This stack delivers everything the website promises (GPS-tracked documented service, client portal access, timestamped logs) at less than half the cost of any single commercial-grade alternative. The two systems connect through QuickBooks (Jobber syncs invoices) and through manual or Zapier-based contact syncing.

When to upgrade to Aspire: When revenue exceeds $500,000 and crew count exceeds 5. Aspire's job costing, multi-crew scheduling, and property management integrations become worth $500+/month at that scale. Until then, the extra cost buys complexity Stone & Salt does not need.

---

### 1B. Prospect Pipeline (GHL)

The commercial sales cycle runs 3-6 months from first contact to signed contract. The pipeline must reflect this reality -- not a 3-stage "lead, quote, closed" funnel.

**Pipeline: Commercial Prospect Pipeline**

| Stage | Definition | Typical Duration | Automation Trigger |
|-------|-----------|-----------------|-------------------|
| **1. Identified** | Company researched, contact found, not yet contacted. | 1-7 days | None (manual entry) |
| **2. First Contact** | Initial outreach sent (email, LinkedIn, call, or direct mail). No response yet. | 1-14 days | Auto-task: Follow-up call in 3 days if no response. Move to Nurture after 3 unreturned touches. |
| **3. Conversation** | Decision-maker has responded. Meeting or call scheduled or in progress. | 1-4 weeks | Auto-task: Send capability packet within 24 hours of first conversation. Schedule site assessment within 5 business days. |
| **4. Site Assessment Scheduled** | Date set to walk the property. | 1-2 weeks | Auto-task: Send confirmation email + calendar invite. Reminder 24 hours before. |
| **5. Site Assessment Complete** | Property walked. Notes and photos captured. Ready to build proposal. | 1-3 days | Auto-task: Create proposal within 48 hours. Auto-notify Kyle. |
| **6. Proposal Sent** | Written proposal delivered to decision-maker. | 1-8 weeks (this is where deals stall) | Auto-task: Follow-up call 5 days after delivery. Second follow-up at 14 days. Third at 30 days. If no response after 45 days, move to Nurture. |
| **7. Under Review** | Client has confirmed receipt and is evaluating (may be getting competing bids, waiting for board/owner approval). | 2-12 weeks | Auto-task: Check-in every 14 days. If Q4, send "budget season" reminder. |
| **8. Negotiation** | Terms being discussed, scope adjustments, pricing questions. | 1-4 weeks | Manual management. Auto-task: If stalled 14+ days, escalate to Kyle. |
| **9. Verbal Commit** | Client says yes, contract not yet signed. | 1-2 weeks | Auto-task: Send contract for signature within 24 hours. Follow-up at 3 days if unsigned. |
| **10. Contract Signed** | Signed agreement in hand. | -- | Auto-trigger: Create client record in Jobber. Move to Client Delivery Pipeline. Send onboarding welcome email. Notify Chris for onboarding walkthrough scheduling. |
| **Nurture** | Not ready now, but relationship maintained for future opportunity. | Ongoing | Auto-task: Monthly touchpoint (email or call). Auto-escalate to active pipeline during Q4 budget season (September). |
| **Lost** | Chose a competitor, budget eliminated, or property sold. | -- | Auto-task: "Why did we lose?" note required. Follow-up in 12 months. |

**Key pipeline metrics to track in GHL:**
- Stage-to-stage conversion rates (target: 50%+ from Proposal Sent to Contract Signed, per research benchmark)
- Average days in each stage
- Total pipeline value (sum of estimated annual contract values in stages 5-9)
- Proposals sent per month (target: 5+ by Month 3)
- Win rate by lead source (LSA, outreach, referral, networking)

---

### 1C. Client Delivery Pipeline (Jobber)

Once a contract is signed, the relationship moves from GHL (sales) to Jobber (delivery). This pipeline tracks the ongoing service relationship.

**Pipeline: Client Delivery**

| Stage | Definition | Trigger |
|-------|-----------|---------|
| **Onboarding** | Contract signed. Site walkthrough with Chris scheduled. Property documented in Jobber (access points, contact procedures, special requirements, photos). | Contract Signed in GHL |
| **Active -- Grounds Season** | Regular scheduled service. Weekly/bi-weekly mowing, seasonal bed work, cleanup. | March through November |
| **Active -- Snow Season** | Snow response per contract specifications. Pre-treatment, plowing, salting, sidewalks. | November through March |
| **Active -- Year-Round** | Both grounds and snow under contract. No seasonal handoff -- same team, continuous. | Year-round contracts |
| **Contract Renewal** | 60 days before contract expiration. Renewal proposal generated. | Auto-trigger at 60 days before expiration |
| **At Risk** | Quality complaint, missed service, or client expressing dissatisfaction. | Manual flag by Kyle or Chris |
| **Churned** | Contract cancelled or not renewed. | Manual entry. Requires exit interview notes. |

---

### 1D. Custom Fields for Commercial Property Data

**In GHL (prospect/client record):**

| Field Name | Type | Purpose |
|-----------|------|---------|
| Property Type | Dropdown: Office Park, Retail Center, Medical Facility, Corporate Campus, HOA Common Area, Industrial, Mixed-Use | Segmentation and proposal templating |
| Property Management Company | Text | Links to parent PM company (one PM company = multiple properties) |
| Number of Properties Managed | Number | Identifies multi-property opportunities |
| Estimated Annual Contract Value | Currency | Pipeline value calculation |
| Current Vendor | Text | Know who you are displacing |
| Contract Renewal Month | Dropdown: Jan-Dec | Timing outreach to bid cycles |
| Decision-Maker Title | Text | PM, Facilities Director, Board Member, Owner |
| Board Approval Required | Yes/No | Flags longer sales cycles (HOAs especially) |
| Insurance Requirements | Text | Document their minimums before proposal |
| Lead Source | Dropdown: Google LSA, Google PPC, Outbound Email, Cold Call, LinkedIn, Referral, IFMA/IREM Event, Direct Mail, Home Show, Website | CAC tracking |
| Estimated Lot Size (acres) | Number | Pricing estimation |
| Sidewalk Linear Feet (est.) | Number | Snow pricing variable |
| Snow Trigger Threshold | Dropdown: 1", 2", 3", Custom | Contract spec |
| Salt Surcharge Accepted | Yes/No | Contract protection |

**In Jobber (active client/property record):**

| Field Name | Type | Purpose |
|-----------|------|---------|
| Property Address | Address | Service location (may differ from billing address) |
| Access Instructions | Long text | Gate codes, locked areas, after-hours access, key locations |
| Emergency Contact (On-Site) | Text + Phone | Who to call if issue at property |
| Mowing Frequency | Dropdown: Weekly, Bi-weekly, 28-visit, 32-visit | Schedule driver |
| Special Conditions | Long text | Slopes, drainage issues, pet areas, restricted zones, ADA paths |
| Photo Documentation Required | Yes/No/Enhanced | Some contracts require more photos |
| Snow Contract Type | Dropdown: Seasonal Fixed, Per-Event, Readiness + Variable, None | Determines billing method |
| Snow Trigger | Text | "2 inch accumulation" or "1 inch on sidewalks, 2 inch on lots" |
| Pre-Treatment Authorized | Yes/No | Some clients opt out of brine pre-treatment |
| Irrigation System | Yes/No + Notes | Avoidance zones, spring activation, winterization |
| Last Quality Inspection Date | Date | Triggers periodic inspections |
| Client Satisfaction Score | 1-5 | Updated after each quarterly review |

---

### 1E. Automation Triggers

All automations run in GHL (CRM side) unless noted as Jobber.

**Outreach & Follow-Up:**

| Trigger | Action | Timing |
|---------|--------|--------|
| New contact added to Stage 1 (Identified) | Auto-enroll in Instantly.ai 3-email sequence (from brand audit) | Immediately |
| 3 outreach touches with no response | Move to Nurture, tag "No Response -- First Attempt" | After 14 days of silence |
| Nurture contact reaches September 1 | Auto-task: "Budget season follow-up call" assigned to Kyle | September 1 annually |
| Proposal sent | Auto-task: Follow-up call in 5 days | 5 days post-send |
| Proposal sent, no response at 14 days | Auto-task: Second follow-up (email + call) | 14 days post-send |
| Proposal sent, no response at 30 days | Auto-task: "Final check-in" call | 30 days post-send |
| Proposal sent, no response at 45 days | Move to Nurture, tag "Proposal -- No Response" | 45 days post-send |

**Client Lifecycle:**

| Trigger | Action | Timing |
|---------|--------|--------|
| Contract signed | Welcome email with onboarding checklist, site walkthrough scheduling link | Same day |
| First service completed (Jobber) | Auto-email: "How was your first service?" (internal feedback, not public review) | 24 hours after |
| 30 days of active service | Auto-email: Google review request | 30 days after first service |
| 90 days of active service | Auto-task: "Ask for referral" assigned to Kyle | 90 days |
| First successful snow event cleared | Auto-email: "Your property was serviced at [time]" with photo summary | Same day (Jobber notification) |
| 60 days before contract expiration | Auto-task: "Prepare renewal proposal" assigned to Kyle. Auto-email: renewal notice to client. | 60 days before |
| Complaint logged | Auto-task: Kyle must respond within 4 hours. Auto-escalate to Chris for field investigation. | Immediately |

---

## 2. Proposal System

### 2A. Commercial Grounds Proposal Template Structure

Every commercial grounds proposal follows this structure. The proposal is the single most important sales document -- it is what gets reviewed by boards, owners, and procurement teams. It must look professional, read clearly, and eliminate ambiguity.

**Proposal Document Structure (8-10 pages):**

**Page 1: Cover**
- Stone & Salt logo, Slate + Eucalyptus palette
- "Commercial Grounds Management Proposal"
- Property name and address
- Prepared for: [Decision-maker name and title]
- Prepared by: [Kyle's name], Owner
- Date
- "Confidential -- prepared exclusively for [property/company name]"

**Page 2: Executive Summary**
- 3-4 sentence overview of what is being proposed
- Annual contract value (bold)
- Contract term (12 months with renewal option)
- Key differentiator statement: "One vendor. Four seasons. Documented service for every visit."

**Page 3: Property Assessment Summary**
- Site assessment date
- Total maintained area (acres)
- Key property features documented during walkthrough: turf areas, bed count and linear footage, sidewalk/walkway linear footage, parking areas, signage/entrance areas, irrigation system (if applicable), slopes/drainage notes
- 4-6 photos from the site assessment
- Conditions noted (problem areas, deferred maintenance, drainage issues, tree hazards)

**Page 4-5: Scope of Work -- Grounds Maintenance**

Structure tiers around visit frequency, not features:

**Tier 1: Standard Program (28 visits/season)**
- 28 mowing visits (approximately weekly, April through October)
- 2 seasonal cleanups (spring + fall)
- 1 mulch application (beds, 2-3" depth)
- Monthly bed weeding (during growing season)
- Edging of walks and curbs each visit
- Debris and trash removal each visit
- Blowing of hard surfaces each visit

**Tier 2: Premium Program (32 visits/season)**
- Everything in Standard, PLUS:
- 4 additional mowing visits (extends season: late March start, mid-November end)
- 2 additional seasonal cleanups (4 total)
- 2 mulch touch-ups (mid-season refresh)
- Bi-monthly shrub/hedge trimming
- Monthly property condition report with photos
- Priority scheduling (serviced before 10:00 AM)

**Tier 3: Enterprise Program (32+ visits with dedicated crew)**
- Everything in Premium, PLUS:
- Dedicated crew assignment (same crew every visit)
- Weekly property condition report
- Quarterly on-site review meeting with property manager
- Irrigation monitoring and seasonal activation/winterization (if applicable)
- Annual landscape enhancement recommendation with budget
- 24-hour response for storm damage or emergency service
- Named account manager (Kyle) with direct cell

**Explicit Exclusions (listed on every proposal):**
- Irrigation repair (monitoring included in Premium/Enterprise, repairs billed separately)
- Tree removal or pruning above 10 feet (referred to arborist partner)
- Landscape design and new installation (quoted separately)
- Pest and disease treatment (quoted separately; requires licensed applicator)
- Hardscape repair or installation (quoted separately)
- Snow and ice management (see companion snow proposal or year-round contract)

This exclusion list prevents "scope creep" disputes and makes the proposal directly comparable to competitors who hide exclusions.

**Page 6: Scope of Work -- Snow & Ice (if bundled)**
- See Section 2B below for snow-specific scope

**Page 7: Pricing**
- Annual contract value, stated as monthly billing amount
- Example: "$24,000 annually -- billed at $2,000/month, 12 equal payments"
- Add-on pricing menu (one-time services available at these rates):
  - Mulch application (beyond included): $X per cubic yard installed
  - Shrub replacement: $X per plant installed
  - Spring/fall aeration + overseeding: $X per 1,000 sq ft
  - Storm cleanup: $65/hour per crew member + disposal
- Multi-year pricing: "2-year agreement available with annual adjustment capped at 3%"

**Page 8: Terms & Conditions**
- Contract term: 12 months, auto-renewing with 60-day written cancellation notice
- Payment terms: Net-30 from invoice date
- Insurance: Stone & Salt carries $2M GL, commercial auto, and workers' comp. Client added as additional insured upon request.
- Service documentation: Every visit logged with GPS coordinates, timestamps, crew identification, and photos. Records available on request.
- Material cost provisions: "Annual pricing assumes current material costs. Material costs exceeding a 15% year-over-year increase may result in a corresponding adjustment with 30-day written notice."
- Dispute resolution: 30-day cure period for claimed service deficiency. Written notice required.
- Indemnification: Mutual indemnification, standard hold-harmless language (attorney-reviewed)

**Page 9: About Stone & Salt**
- 50/50 owner-operated partnership
- Liberty Township base, serving Butler/Warren/Hamilton counties
- $2M GL insurance
- "Trusted by Mike's Carwash for year-round grounds management"
- Direct owner contact information
- GPS-documented service commitment

**Page 10: Signature Page**
- Authorized signatures for both parties
- Effective date and term
- Property address(es) covered

---

### 2B. Snow & Ice Proposal Template Structure

Snow proposals are separate documents (even if bundled with grounds) because they have different risk profiles, pricing mechanics, and legal considerations. Snow contracts carry slip-and-fall liability -- the proposal must be airtight on scope, triggers, and documentation.

**Proposal Document Structure (6-8 pages):**

**Page 1: Cover** (same format as grounds proposal, titled "Snow & Ice Management Proposal")

**Page 2: Snow & Ice Service Scope**

Two contract architectures offered (per research recommendation):

**Option A: Fixed Seasonal Contract (Maximum Predictability)**
- Fixed price for the season (November 1 through March 31)
- Unlimited plowing events at specified trigger
- All salt/ice melt applications included
- Sidewalk clearing included
- Pre-treatment before forecasted events included
- 24/7 response for contract clients
- "Your cost is the same whether Cincinnati gets 10 inches or 30 inches"

**Option B: Readiness + Per-Event Variable (Shared Risk)**
- Monthly readiness fee (November through March): covers equipment staging, route planning, weather monitoring, crew standby
- Per-event fee based on accumulation tiers:
  - 2-4 inches: $X per push
  - 4-8 inches: $X per push (typically 1.5x the 2-4" rate)
  - 8+ inches: $X per push (typically 2x the 2-4" rate)
- Salt application: $X per application (metered)
- Sidewalk clearing: $X per event
- "You pay less in mild winters, more in heavy winters. Your readiness fee guarantees priority response regardless."

**Page 3: Service Specifications**
- Trigger threshold: "Plowing begins at [X] inches of accumulation" (standard: 2 inches)
- Service window: "Lots cleared before [time, typically 6:00 AM] on business days. 24/7 monitoring for events exceeding trigger."
- Sidewalk standard: "All pedestrian walkways, entrances, and ADA-accessible paths cleared within [X] hours of event conclusion"
- Pre-treatment: "Brine or treated salt applied before forecasted freezing precipitation when conditions warrant"
- Post-event: "Final salt application and cleanup pass after event conclusion"
- Re-trigger: "If additional accumulation exceeds trigger after initial clearing, crews return for a second pass at no additional charge under seasonal contracts"
- Documentation: "Every service event documented with GPS coordinates, arrival/departure timestamps, photos of cleared surfaces, and material application quantities. Reports available within 24 hours of event."

**Page 4: Site Map**
- Annotated property map showing:
  - Plowing routes and snow stacking locations
  - Sidewalk clearing areas
  - Priority areas (entrances, ADA paths, emergency exits)
  - Salt application zones
  - Obstacles and hazards noted during assessment
- This map is both a sales tool and an operational document. It shows the client you have studied their property and prevents "you missed this area" disputes.

**Page 5: Pricing**
- Option A total and monthly billing breakdown
- Option B readiness fee + per-event rate card
- Salt surcharge clause: "Pricing based on pre-season bulk salt rate of $[X]/ton. Actual material costs exceeding this baseline by more than 15% will be passed through at cost plus 10% handling, with 14-day written notice."
- Multi-year: "2-year snow agreement available with readiness fee adjustment capped at 3% annually"

**Page 6: Insurance & Liability**
- $2M GL with snow-specific endorsement
- Client named as additional insured
- Certificate of insurance attached
- Service documentation as liability protection: "Our GPS-timestamped service logs provide your defense documentation in the event of a slip-and-fall claim"

**Page 7: Terms (snow-specific)**
- Season: November 1 through March 31
- Billing: Monthly (seasonal) or within 48 hours of event (per-event)
- Payment: Net-30
- Cancellation: 30-day written notice (seasonal contracts are non-refundable after November 15 -- crews and salt are committed)
- Force majeure: Extraordinary conditions exceeding equipment capacity (ice storms, multi-day blizzards) may require supplemental resources billed at agreed overflow rates

**Page 8: Signatures**

---

### 2C. Estate Mowing Proposal Template Structure

Simpler than commercial grounds because scope is narrower -- mowing and basic maintenance for large residential properties.

**Proposal Structure (4-5 pages):**

1. **Cover**
2. **Property Assessment** -- Acreage, terrain notes, obstacles, access requirements, photos
3. **Service Scope** -- Visit count (28 or 32), mowing standard, trimming, blowing, edging, seasonal cleanup inclusions
4. **Pricing** -- Per-visit rate, seasonal total, monthly billing option, add-on menu
5. **Terms + Signatures** -- Lighter terms than commercial (no indemnification required for residential)

---

### 2D. Site Assessment Checklist

Used during every property walkthrough. Completed on-site using Jobber's mobile app (forms feature) or a printed clipboard form that gets entered into Jobber immediately after.

**Site Assessment Form:**

**Property Information**
- [ ] Property name
- [ ] Address
- [ ] Contact name, title, phone, email
- [ ] Property type (office, retail, medical, HOA, industrial, mixed-use, residential estate)
- [ ] Property management company (if applicable)
- [ ] Current vendor (if known)
- [ ] Contract renewal date (if known)

**Grounds Assessment**
- [ ] Total lot size (acres, estimated or measured)
- [ ] Maintained turf area (acres)
- [ ] Bed count and total linear footage
- [ ] Mulch type and last application date
- [ ] Sidewalk/walkway linear footage
- [ ] Curb/edging linear footage
- [ ] Parking area (square footage or lot count)
- [ ] Trees -- count, species if notable, canopy coverage
- [ ] Slopes or terrain challenges
- [ ] Drainage issues observed
- [ ] Irrigation system: Yes/No, type, condition, zone count
- [ ] Signage areas requiring detail work
- [ ] Fence lines or perimeter features
- [ ] Trash receptacle count
- [ ] Quality of current maintenance (1-5 scale with notes)
- [ ] Problem areas noted (bare spots, weed pressure, drainage, erosion, pest damage)

**Snow Assessment (if applicable)**
- [ ] Lot square footage (paved surfaces)
- [ ] Sidewalk linear footage
- [ ] Number of building entrances
- [ ] ADA-accessible paths
- [ ] Snow stacking locations identified
- [ ] Drainage/refreezing risk areas
- [ ] Obstacles in lot (medians, light poles, curb islands)
- [ ] After-hours access requirements
- [ ] Historical trigger threshold used
- [ ] Salt sensitivity (near landscaping, water features, etc.)

**Photos (minimum)**
- [ ] Front entrance / primary facade
- [ ] Parking lot overview
- [ ] Representative bed area
- [ ] Representative turf area
- [ ] Any problem areas
- [ ] Sidewalk/walkway representative
- [ ] Snow stacking location candidates (if applicable)

**Notes**
- [ ] Decision-maker's stated priorities
- [ ] Budget range discussed (or "not discussed")
- [ ] Timeline for decision
- [ ] Competitors bidding (if mentioned)
- [ ] Red flags (unreasonable expectations, payment history concerns, excessive scope for budget)

---

### 2E. Proposal Delivery and Follow-Up

**How to deliver proposals:**

1. **In-person walkthrough preferred (for contracts over $20,000/year).** Schedule a 30-minute meeting at the property or their office. Walk through the printed proposal page by page. Leave a bound copy. Email the PDF within 2 hours of the meeting as a follow-up.

2. **PDF via email (for contracts under $20,000 or when in-person is not possible).** Send a professional PDF with a brief cover email: "Attached is the proposal we discussed for [property name]. I am available for questions at [phone] or we can schedule a walkthrough of the document at your convenience."

3. **Never send a proposal without a conversation first.** A proposal that arrives without context gets filed, not read.

**Follow-up cadence after proposal delivery:**

| Day | Action | Method |
|-----|--------|--------|
| Day 0 | Deliver proposal | In-person or email |
| Day 1 | Confirmation email: "Received the proposal? Any initial questions?" | Email |
| Day 5 | Follow-up call: "Have you had a chance to review? Happy to walk through any section." | Phone |
| Day 14 | Second follow-up: "Checking in. If timing is not right, I understand -- when should I circle back?" | Email |
| Day 30 | Third follow-up: "Want to make sure this is still on your radar. Let me know if anything has changed." | Phone |
| Day 45 | Final follow-up: "Closing the loop. If this is not a fit right now, no hard feelings. I will check back during budget season in September." | Email |

The research says 51% close rate at proposal stage. That means roughly half of proposals convert -- but they convert on the client's timeline, not yours. Patience plus persistence.

---

## 3. Service Documentation System

### 3A. Platform: Jobber

Jobber delivers exactly what the website promises: GPS-tracked, timestamped service documentation with photo capture. Here is how to configure it.

**Per-Visit Documentation (Jobber visit workflow):**

Every crew member (including Kyle and Chris as owner-operators) follows this workflow for every visit:

1. **Arrival Check-In** -- Open Jobber app, tap "Start" on the scheduled job. Jobber captures:
   - GPS coordinates at check-in
   - Timestamp of arrival
   - Crew member identification

2. **Service Execution** -- Complete all contracted work per the property's service scope.

3. **Photo Documentation** -- Take photos through the Jobber app:
   - **Minimum 2 photos per visit** (pre-condition if notable, post-condition always)
   - **Snow events: minimum 4 photos** (lot before if possible, lot after, sidewalks after, salt application evidence)
   - Photos are automatically GPS-tagged and timestamped by Jobber

4. **Service Notes** -- Enter brief notes in Jobber:
   - Services performed (mowing, edging, blowing, bed work, etc.)
   - Conditions noted (irrigation leak, dead plant, drainage issue, pest activity, damaged hardscape)
   - Anything that deviates from standard service
   - Example: "Mowed, edged, blew walks. Noted brown patch in SE turf quadrant -- possible grub damage. Recommend inspection."

5. **Departure Check-Out** -- Tap "Complete" in Jobber. Captures:
   - GPS coordinates at check-out
   - Timestamp of departure
   - Total time on-site automatically calculated

**Per-Snow-Event Documentation (Enhanced):**

Snow documentation is the highest-liability documentation Stone & Salt produces. A slip-and-fall lawsuit can hinge on whether service was performed and when.

| Data Point | How Captured | Why It Matters |
|-----------|-------------|----------------|
| Event start time (storm begins) | Manual entry from weather monitoring | Establishes timeline of conditions |
| Crew dispatch time | Jobber start timestamp | Proves response time met contract spec |
| Arrival at property | Jobber GPS check-in | Proves presence |
| Service performed | Notes: "Plowed lot to bare pavement, cleared sidewalks, applied X bags salt" | Proves scope of work |
| Photos: lot cleared | Jobber photo (GPS + timestamp) | Visual proof of condition after service |
| Photos: sidewalks cleared | Jobber photo (GPS + timestamp) | ADA compliance evidence |
| Photos: salt applied | Jobber photo (GPS + timestamp) | Proves de-icing performed |
| Departure time | Jobber GPS check-out | Proves complete service window |
| Return visit (if re-trigger) | Separate Jobber visit entry | Proves ongoing monitoring |
| Weather data | Screenshot or log from weather monitoring service | Corroborates conditions |

**Document retention: Keep all service records for a minimum of 6 years.** Ohio's statute of limitations for personal injury (slip-and-fall) is 2 years, but property damage and contract claims can extend longer. Jobber retains data as long as the account is active. Export annually to a local backup (Google Drive or external drive).

---

### 3B. Client Access to Documentation

Three tiers of documentation sharing:

**Tier 1: Automatic (all clients)**
- Jobber sends an automatic "visit completed" notification to the client's email after each visit
- Notification includes: date, time, crew, services performed, any notes
- Client can view visit history in the Jobber client portal (they get a login)

**Tier 2: Monthly Report (Premium and Enterprise contracts)**
- Kyle compiles a monthly property report:
  - Visit count for the month
  - Services performed (summary)
  - Conditions noted and recommended actions
  - Photos (4-6 representative images)
  - Upcoming scheduled work
  - Any budget impact items
- Delivered via email as a PDF, first week of the following month
- Template stored in Google Docs, populated from Jobber data export

**Tier 3: On-Demand (all clients, upon request)**
- Client can request any specific visit record at any time
- Kyle pulls the Jobber visit detail (GPS, timestamps, photos, notes) and sends within 24 hours
- For snow events specifically, proactively send the documentation email after every event -- do not wait for a request. The research is clear: property managers need this for liability defense. Be the vendor who sends it before they ask.

---

### 3C. How Documentation Protects Against Liability

Snow and ice liability is the single biggest legal risk in this business. The research emphasizes this repeatedly. Stone & Salt's documentation system is designed as a legal shield:

**Scenario: Tenant slips on a sidewalk at 8:00 AM, files a claim.**

Stone & Salt's defense record includes:
1. Weather monitoring log showing storm started at 2:00 AM
2. Crew dispatch log showing crew activated at 3:00 AM (within contract spec)
3. GPS check-in at property at 3:45 AM
4. Photos of cleared sidewalk at 4:15 AM (GPS-tagged, timestamped)
5. Notes: "All sidewalks cleared, salt applied to all pedestrian surfaces, lot plowed to bare pavement"
6. GPS check-out at 4:30 AM
7. If re-accumulation occurred after service: weather data showing additional precipitation between 4:30 AM and 8:00 AM (beyond Stone & Salt's control unless re-trigger was activated)

**This documentation package is what the property manager's attorney needs.** It proves Stone & Salt performed its contractual obligation. Without it, the property manager is exposed. This is why documentation is THE differentiator -- not because it is a nice marketing angle, but because it is the reason a sophisticated property manager chooses Stone & Salt over a cheaper vendor who shows up without logging anything.

---

## 4. Scheduling & Route Optimization

### 4A. Daily/Weekly Mowing Schedule

**Scheduling principle: Geographic clustering, not alphabetical or chronological.**

Stone & Salt's service area spans a 45-minute radius. Without route discipline, driving time eats profitability. The goal is to cluster properties geographically so the crew spends maximum time mowing and minimum time driving.

**Weekly Route Structure (during growing season):**

| Day | Zone | Properties | Notes |
|-----|------|-----------|-------|
| **Monday** | Liberty Township + West Chester | 4-6 properties | Core zone, closest to home base. Start the week here for operational momentum. |
| **Tuesday** | Mason + Deerfield Township | 4-6 properties | Slightly north. Natural extension from Monday's zone. |
| **Wednesday** | Blue Ash + Sharonville | 3-5 properties | Commercial-dense corridor. Office parks, retail. |
| **Thursday** | Loveland + Indian Hill | 3-5 properties | East side. Estate properties tend to be here. Longer drive, larger lots, fewer stops. |
| **Friday** | Overflow, catch-up, site assessments, proposals | Variable | Rain delay makeup. New prospect site walks. Proposal delivery. Equipment maintenance. |

**Daily schedule structure:**

| Time | Activity |
|------|----------|
| 6:30 AM | Load equipment, review route in Jobber, confirm access notes |
| 7:00 AM | Depart for first property |
| 7:30 AM - 12:00 PM | Morning route (2-3 properties) |
| 12:00 PM - 12:30 PM | Lunch / equipment check |
| 12:30 PM - 4:30 PM | Afternoon route (2-3 properties) |
| 4:30 PM - 5:30 PM | Return, unload, basic equipment cleaning, fuel |
| 5:30 PM - 6:30 PM | Kyle: Admin -- enter notes, send client updates, follow up on proposals, review next day's route |

**Jobber handles route optimization** within its scheduling module. Input all properties with addresses and estimated service times. Jobber will sequence the day's stops to minimize drive time. Review and adjust manually for access constraints (gates that open at certain hours, noise restrictions at medical facilities, etc.).

---

### 4B. Handling the 45-Minute Service Radius Efficiently

The 45-minute radius is a constraint that becomes manageable with discipline:

**Rule 1: Never drive 45 minutes for one property.** If a property is on the edge of the service area, it goes on a day when other properties are clustered nearby. If it cannot be clustered, it must justify its own drive time with contract value. A $1,000/month contract can absorb a 45-minute drive. A $350/month residential cannot.

**Rule 2: Use geographic minimums.** Before accepting a contract in Loveland or Indian Hill (eastern edge), confirm there are at least 2 other properties within 15 minutes that justify the day-long commitment to that zone.

**Rule 3: Growth should fill gaps, not extend radius.** When evaluating new prospects, prioritize properties that are BETWEEN existing clients, not beyond them. A new office park in Mason that sits between two existing West Chester clients is worth more than a larger contract in Anderson Township that extends the route by 20 minutes.

**Rule 4: Track drive-time-to-service-time ratio.** Target: no more than 30% of the workday spent driving. If the ratio exceeds 35%, the route needs restructuring or a property needs to be moved to a different day.

---

### 4C. Snow Event Response Protocol

Snow does not follow a schedule. The response protocol must work at 2:00 AM on a Saturday.

**Weather Monitoring:**
- Primary: Weather Underground (free, hyperlocal, hourly precipitation forecasting)
- Secondary: National Weather Service Cincinnati (official advisories and warnings)
- Both bookmarked on Kyle's phone and Chris's phone
- Check forecast at 6:00 PM nightly from November 1 through March 31
- If any precipitation above 30% probability overnight, set alarm for 3:00 AM check

**Trigger Thresholds (contract-dependent, standard defaults):**

| Condition | Action | Timeline |
|-----------|--------|----------|
| Forecast shows >50% chance of 2"+ overnight | Pre-treatment: Apply brine to priority lots and sidewalks before precipitation begins | Before precipitation starts |
| Accumulation reaches 2" (or contract trigger) | Activate plowing crews | Crews depart within 30 minutes of trigger confirmation |
| During active storm with continuing accumulation | Continuous service: cycle through route, return to re-clear as needed | Ongoing until event ends |
| Storm ends | Final pass: all lots plowed to bare pavement, all sidewalks cleared, all surfaces salted | Complete within 2 hours of last measurable accumulation |
| Post-event | Documentation: send event summary to all contract clients | Within 4 hours of completion |

**Crew Activation Protocol:**

1. Kyle monitors weather. When trigger conditions are met, texts Chris: "Snow activation. [Expected accumulation]. [Start time]. Confirming route."
2. Chris confirms equipment readiness: trucks plowed-up, salt loaded, fuel topped off (this should be pre-staged anytime a forecast shows >30% probability of measurable snow)
3. Both depart on pre-planned routes. Routes are set before the season begins -- not decided at 3:00 AM.
4. Jobber has all snow properties pre-loaded with visit templates. Tap "Start" on arrival, "Complete" on departure. Photos during and after.

**Pre-Season Route Planning (September, before first event):**

- Map all snow contract properties on a single route map
- Sequence properties by priority:
  - Tier 1 (clear first): Medical facilities, high-traffic retail, properties with early-morning occupancy
  - Tier 2 (clear second): Office parks, corporate campuses
  - Tier 3 (clear last): HOA common areas, low-traffic industrial
- Assign Tier 1 to Chris (most experienced operator, handles highest-liability properties)
- Assign Tier 2-3 to Kyle (or split if routes overlap efficiently)
- Estimate total route time at full capacity. If total exceeds 4 hours per operator per cycle, the route is at capacity. Either hire overflow support or stop selling snow contracts.

---

### 4D. The 4-Hour Response Guarantee -- How to Deliver It

The website promises a 4-hour response guarantee during business hours. This is a competitive advantage that becomes a liability if it is not operationally backed.

**"Response" means:** A decision-maker has acknowledged the request and provided a specific action plan within 4 hours. It does NOT mean the problem is resolved in 4 hours -- it means the client is not waiting in silence.

**How to deliver it:**

1. **GHL routes all inbound calls and texts to Kyle's cell phone.** Kyle's phone is the primary business line. It is always on. It is always answered or returned within 2 hours.

2. **If Kyle is on a mower or in a meeting:** GHL voicemail transcription sends the message as a text. Kyle reads it at the next break and responds. Maximum delay: 2 hours between voicemail and callback.

3. **If the request requires field action (emergency tree down, irrigation blowout, etc.):** Kyle calls Chris immediately. Chris provides an ETA or redirects to the appropriate response. Kyle calls the client back with: "Chris will be at your property by [specific time]. I will follow up with you by [specific time] to confirm it is resolved."

4. **After business hours (6:00 PM - 7:00 AM):** Voicemail states: "You have reached Stone & Salt. For snow emergencies, press 1 to reach our emergency line. For all other requests, leave a message and we will return your call by 8:00 AM." Snow emergencies route to Chris's phone.

5. **Track response time in GHL.** Every client communication should have a timestamp. Monthly review: are we hitting 4 hours? If average response time creeps above 3 hours, it is time to adjust workflows or hire admin support.

---

## 5. Crew Scaling Plan

### 5A. Months 1-4: Two Owner-Operators

**Work Split:**

| Function | Kyle (Business Operations) | Chris (Field Operations) |
|----------|--------------------------|-------------------------|
| **Field work (mowing, grounds)** | 50% of mowing hours. Kyle runs a mower alongside Chris. | 50% of mowing hours. Chris is the lead operator. |
| **Field work (snow)** | Drives plow truck on Route B | Drives plow truck + operates Bobcat on Route A (priority properties) |
| **Field work (hardscape)** | Labor support on installations | Lead installer, operates Bobcat, manages material staging |
| **Sales/outreach** | 100%. All prospect calls, emails, site assessments, proposals, networking events. Done before 7:00 AM, after 4:30 PM, and on Fridays. | 0%. Chris does not sell. |
| **Client communication** | 100%. All inbound client calls, complaint resolution, scheduling discussions. | 0% unless Kyle is unavailable. Chris handles field-specific questions when Kyle routes them. |
| **Scheduling/admin** | 100%. Jobber schedule management, invoicing, QuickBooks reconciliation. | 0%. |
| **Equipment maintenance** | 0%. | 100%. Chris owns equipment readiness: blade changes, oil, filters, trailer maintenance, plow prep. |
| **Quality control** | Reviews Jobber photos and notes for every visit. Flags issues. | In-field quality during service. Handles Chris's own quality standards on every property. |

**Critical discipline in Months 1-4:** Kyle's biggest risk is spending so much time mowing that sales activity drops. The financial model shows that Months 1-4 are the seed-planting period -- the proposals sent in March and April close in July and August. If Kyle skips sales calls because he is on a mower, the Q3-Q4 revenue ramp fails.

**Solution:** Fridays are sacred for sales. Kyle does not mow on Fridays. Fridays are site assessments, proposal writing, prospect calls, networking, and admin. If rain cancels a mowing day earlier in the week, Kyle uses that day for sales, not catch-up mowing (use Thursday or the following Monday for catch-up).

---

### 5B. Month 5+: First Hire

**Role: Grounds Maintenance Crew Member (Laborer/Operator)**

The first hire replaces Kyle on the mower, freeing Kyle for full-time sales, client management, and business operations. This is not a luxury hire -- it is the hire that unlocks revenue growth.

**Wage: $20/hour ($41,600 annual at 40 hours/week)**

| Wage Level | Rationale |
|-----------|-----------|
| Ohio minimum wage (2026): $11/hr | Irrelevant. You cannot attract reliable labor at $11/hr in this market. |
| Industry average (Cincinnati): $14-17/hr | Gets you unreliable workers who leave for $1/hr more. |
| Stone & Salt target: $20/hr | Attracts workers with 1-2 years experience who value stable employment. Competitive with warehouse and construction alternatives. |
| Premium rate (experienced): $22/hr | Reserved for candidates with commercial landscape experience, equipment proficiency, and demonstrated reliability. |

**Year-round employment is the real incentive.** Most landscape companies in Cincinnati lay off crews in November. Stone & Salt can offer year-round employment because snow operations continue through winter. A $20/hour year-round position beats a $22/hour seasonal position for every worker who has bills in January.

**Loaded labor cost:** $20/hr + workers' comp (~15%) + payroll taxes (~8%) = approximately $24.60/hr loaded cost, or $51,168 annually. This is already accounted for in the financial model's hiring timeline.

**What triggers hiring:**

| Trigger | Threshold | Why |
|---------|-----------|-----|
| **Contract count** | 5th commercial grounds contract signed (beyond Mike's Carwash) | At 5+ properties on a weekly cycle, two operators are at capacity. Adding one more property without a third crew member means either quality drops or response time slips. |
| **Revenue** | Monthly revenue exceeds $20,000 | Revenue must support the loaded cost ($4,264/month) with margin remaining. |
| **Schedule compression** | Mowing days consistently extend past 5:00 PM or Friday catch-up becomes the norm | If the schedule is routinely compressed, you are one rain day away from missed service -- which kills the reliability promise. |
| **Kyle's sales time** | Kyle is spending fewer than 10 hours/week on sales activities | If Kyle is mowing 40+ hours/week, the pipeline is starving. The first hire is as much about sales capacity as field capacity. |

**Whichever trigger hits first, hire.** Do not wait for all four.

---

### 5C. Training Protocol for New Crew

**Week 1: Ride-Along**
- New hire rides with Chris on every property
- Chris demonstrates: mowing patterns (zero missed strips), edging standard, blowing standard, Jobber check-in/check-out, photo documentation, equipment operation, property-specific notes
- New hire operates equipment under supervision on the last 2 days

**Week 2: Supervised Solo**
- New hire operates independently on 2-3 lower-complexity properties
- Chris inspects completed work the same day (or Kyle reviews Jobber photos)
- Feedback is immediate and specific: "The bed edge here needs to be tighter. See this photo from last week for the standard."

**Week 3+: Independent with Spot Checks**
- New hire runs a partial route independently
- Chris or Kyle performs an unannounced inspection on 1-2 of the new hire's properties per week for the first month
- Quality issues result in immediate ride-along on that property the following week

**Training Non-Negotiables (every new hire, written in the employee handbook):**

1. **Jobber check-in/check-out on every visit.** No exceptions. If it is not in Jobber, it did not happen. If a visit is not logged, it cannot be billed, and it cannot defend a liability claim.
2. **Minimum 2 photos per visit.** Post-service condition, plus any condition worth noting.
3. **No property damage goes unreported.** If you nick a sprinkler head, hit a curb, damage a fence -- tell Chris immediately. We fix it proactively. We do not wait for the client to find it.
4. **Equipment cleaning at end of every day.** Deck scraped, blades inspected, air filters checked weekly, oil checked weekly.
5. **Uniform worn on every job.** Stone & Salt polo and hat. No exceptions for "quick stops."

---

### 5D. Subcontractor Overflow Plan

Capacity constraints are real, and turning away work costs more than sharing margin with a trusted sub.

**When to use subcontractors:**
- A large snow event exceeds 2-person crew capacity
- A commercial grounds contract requires simultaneous service at multiple properties (happens when routes are overloaded)
- A hardscape project overlaps with peak maintenance season and no crew bandwidth exists
- An emergency (equipment breakdown, crew member illness) threatens scheduled service

**Who to call:**

Identify 2-3 subcontractors BEFORE you need them. Do this in Month 1-2, not during a crisis.

**Ideal sub profile:**
- Licensed and insured (verify COI annually)
- Experience with commercial properties (not residential-only operators)
- Owns their own equipment (do not lend equipment to subs)
- Willing to work under Stone & Salt's documentation standards (Jobber or equivalent check-in/check-out)
- Available on short notice for snow events

**How to find them:**
- Talk to Chris's construction network. Other contractors often know landscape operators.
- Contact the 2-3 equipment dealers in the area (Koenig Equipment in Lebanon, Baxla Tractor in Seaman) -- they know who is buying commercial equipment and who is reliable.
- Check Facebook Marketplace and Craigslist for landscape operators advertising services -- vet them, meet them, keep them on the list.
- Outpost Property Services in Liberty Township (identified in the pricing validation research) focuses on specialty projects -- they may be available for overflow grounds work.

**Sub rates:** Typically pay subs 60-70% of your billing rate. On an $18,000/year grounds contract billed at $1,500/month, you would pay the sub $900-$1,050/month and retain $450-$600 as management margin. This preserves margin while keeping the client relationship (client contracts with Stone & Salt, not the sub).

**Critical rule:** The sub works under your brand, your documentation standards, and your quality expectations. The client never knows a sub was deployed unless you choose to tell them. Stone & Salt remains the accountable vendor.

---

## 6. Quality Control

### 6A. Property Inspection Checklist

**Post-Service Inspection (performed by opposite owner from who serviced):**

Frequency: 1 random property per day, 5 per week. Every property inspected at least once per month.

| Inspection Item | Standard | Score (1-5) | Notes |
|----------------|----------|-------------|-------|
| Mowing stripe consistency | Straight, overlapping lines, no missed strips | | |
| Edge definition | Clean edge along all walks, curbs, and beds within 1/4" | | |
| Bed cleanliness | No weeds visible, mulch at specified depth, clean bed edge | | |
| Hard surface cleanliness | All walks, curbs, and parking surfaces blown clean of clippings/debris | | |
| Trimming | All posts, signs, trees, fences, and obstacles trimmed to matching height | | |
| Trash/debris removal | Property free of litter, fallen branches, and visible debris | | |
| Equipment damage | No ruts, no curb damage, no irrigation head damage, no landscape bed damage | | |
| Documentation compliance | Visit logged in Jobber with GPS, timestamps, and minimum 2 photos | | |
| Notes accuracy | Conditions noted match observed reality | | |
| Overall property appearance | Would a property manager walking the property be satisfied? | | |

**Scoring:** 4.0+ average = excellent. 3.0-3.9 = acceptable, address specific items. Below 3.0 = ride-along with crew member on next visit, coaching required.

**Quarterly Property Review (all commercial clients):**

Kyle schedules a 15-30 minute meeting with each commercial property manager quarterly.

Agenda:
1. Service summary: visits completed, conditions noted, work performed
2. Photo comparison: property condition at start of quarter vs. end
3. Issues resolved: any complaints, repairs, or adjustments made
4. Upcoming recommendations: mulch refresh, plant replacement, drainage fix, fall prep
5. Client satisfaction: "On a scale of 1-5, how are we doing? What would make it a 5?"
6. Document the meeting in GHL as a note on the client record.

**Annual Contract Renewal Meeting (60 days before expiration):**

Kyle schedules a 45-minute meeting to:
1. Review full-year performance: visit count, photos, any incidents, resolution
2. Present renewal proposal: same scope with any adjustments, pricing for next year (capped at 3% increase for multi-year)
3. Discuss scope additions: does the property need anything additional? Landscape refresh? Irrigation upgrade? Enhanced snow coverage?
4. Confirm budget alignment with PM's annual budget submission (especially if timed for Q4 budget season)
5. Obtain signature or verbal commitment to continue

---

### 6B. Client Communication Cadence

| Communication | Frequency | Method | Owner |
|--------------|-----------|--------|-------|
| Visit completion notice | Every visit | Automatic (Jobber) | System |
| Snow event documentation | Every snow event | Email with GPS log + photos within 4 hours | Kyle |
| Monthly property report | Monthly (Premium/Enterprise) | PDF via email | Kyle |
| Quarterly review meeting | Quarterly | In-person at property or video call | Kyle |
| Contract renewal conversation | Annual (60 days before) | In-person meeting | Kyle |
| "How are we doing?" check-in | After first 30 days, then semi-annually | Phone call or email | Kyle |
| Holiday/season greeting | 2x/year (holiday card in December, spring kickoff note in March) | Physical card (December) + email (March) | Kyle |
| Referral ask | After 90 days, after each successful seasonal transition | Phone call or in-person | Kyle |

---

### 6C. Complaint and Service Failure Protocol

**Step 1: Acknowledge within 4 hours.** Client contacts Stone & Salt with a complaint. Kyle responds within 4 hours (per the response guarantee) with: "Thank you for letting us know. I take this seriously. Here is what I am going to do: [specific next step]."

**Step 2: Investigate within 24 hours.** Chris inspects the property or reviews Jobber documentation. Determine: Was the complaint valid? Was service actually substandard? Was there a misunderstanding about scope?

**Step 3: Resolve within 48 hours.**
- If Stone & Salt was at fault: Fix the issue at no charge. Provide a written summary of what happened and what will be different going forward. If the failure was severe (missed snow event, property damage), offer a service credit.
- If the complaint is about scope (client expected something not in the contract): Walk through the contract scope with the client. If it is reasonable to add the service, add it and adjust pricing. If it is unreasonable, explain clearly what is and is not included.
- If the complaint is unfounded (service was performed correctly): Share the Jobber documentation -- GPS logs, timestamps, photos. "Here is the record of our visit on [date]. The crew arrived at [time], completed [services], and documented the property condition. If you are seeing something different now, let us investigate what may have changed."

**Step 4: Follow up in 7 days.** Kyle calls the client: "I wanted to check back on the issue from last week. Is everything resolved to your satisfaction?"

**Step 5: Document everything in GHL.** Every complaint gets a note in the client record: date, nature of complaint, investigation findings, resolution, follow-up date, client satisfaction with resolution.

**Pattern recognition:** If the same property generates 3+ complaints in a quarter, schedule an in-person meeting to reset expectations. If the same crew member is tied to repeated complaints, address through training or, if necessary, personnel action.

---

## 7. Seasonal Transitions

### 7A. Spring Ramp-Up (March 1 - April 15)

**6 weeks before first mow (mid-February):**

| Week | Tasks |
|------|-------|
| **Feb 15-28** | Equipment: Chris services all mowing equipment (oil change, blade sharpen/replace, air filter, hydro fluid check, grease all fittings, tire pressure). Inspect trailer: lights, brakes, ramps, tie-downs. |
| **Feb 15-28** | Admin: Kyle reviews all active contracts. Confirm scope, pricing, and property access for each. Email clients: "Spring kickoff scheduled for the week of [date]. Looking forward to another season." |
| **Feb 15-28** | Supplies: Order mulch (confirm supplier and delivery date for first mulch applications). Order fertilizer, seed, edging material. Confirm salt inventory for any remaining winter events. |
| **Mar 1-7** | Route planning: Update Jobber with spring schedule. Sequence daily routes. Confirm property access (gates, keys, codes -- some may have changed). |
| **Mar 1-7** | Hiring: If triggers from Section 5B are met, post job listing now for April start. Run Indeed + Craigslist + Facebook job postings. |
| **Mar 8-15** | First cleanups: Begin spring cleanup on all commercial properties. Remove winter debris, inspect beds, edge bed lines, assess turf condition. Document condition with photos (this becomes the "before" for the quarterly report). |
| **Mar 15-Apr 1** | First mows: Begin mowing cycle as turf growth supports it. Cincinnati turf typically starts growing mid-to-late March depending on temperatures. |
| **Apr 1-15** | Mulch season: First round of mulch applications on all contracted properties. Schedule mulch deliveries to align with route days (Liberty/West Chester Monday delivery, Mason/Blue Ash Wednesday delivery). |

---

### 7B. Summer Peak Management (June - August)

**Key challenges:**
- Extended mowing hours (turf grows fastest June-July, may require 2 cuts/week on some properties or "every 5 days" cycles)
- Heat management for crew (hydration, adjusted start times, mandatory midday break)
- Irrigation monitoring (for properties with irrigation systems)
- Drought protocols (if rainfall drops below 1"/week for 3+ consecutive weeks)

**Drought protocol:**
- Notify clients: "Due to sustained dry conditions, turf growth has slowed. We are adjusting mowing frequency to every 10 days to avoid scalping dormant turf. Bed maintenance, edging, and blowing continue on the regular schedule. Normal mowing resumes when rainfall returns."
- Do NOT mow dormant turf at regular frequency. Mowing brown, stressed turf damages it and makes you look like you do not know what you are doing.
- Increase irrigation monitoring frequency for equipped properties.
- Offer supplemental watering services as an add-on if applicable.

**Summer upsell opportunities:**
- Mid-season mulch touch-up (second application for Premium/Enterprise clients)
- Landscape enhancement proposals (new plantings, bed expansion) -- these conversations plant seeds for fall installation
- Aeration and overseeding scheduling (schedule for September delivery, book in July-August)

---

### 7C. Fall Transition (September 1 - November 30)

This is the busiest and most important transition. Three things happen simultaneously: snow prep, fall cleanups, and contract renewals.

**September:**

| Task | Owner | Deadline |
|------|-------|----------|
| Snow contract proposals go out to all existing commercial clients | Kyle | September 15 |
| New prospect snow proposals go out (from pipeline) | Kyle | September 30 |
| Snow equipment inspection: plows, spreaders, salt bins, brine equipment | Chris | September 30 |
| Salt procurement: secure pre-season bulk salt pricing, place order for 20-30 tons minimum | Kyle | September 30 |
| Pre-season snow route planning: map all contracted properties, assign priority tiers, estimate route times | Kyle + Chris | September 30 |
| Fall aeration and overseeding: execute on all contracted properties | Chris | September 15-30 |

**October:**

| Task | Owner | Deadline |
|------|-------|----------|
| Close snow contracts -- follow up on all September proposals | Kyle | October 31 |
| Begin fall leaf management on properties with heavy canopy | Chris | Ongoing through November |
| Send next-year grounds maintenance renewal proposals to all existing clients | Kyle | October 31 |
| Send next-year grounds maintenance proposals to prospects in pipeline | Kyle | October 31 |
| Confirm all subcontractor availability for snow overflow | Kyle | October 15 |

**November:**

| Task | Owner | Deadline |
|------|-------|----------|
| Complete all fall cleanups | Chris | November 15 |
| Final mowing visits (weather-dependent, typically by mid-November) | Chris | November 15 |
| Winterize irrigation systems (for properties with irrigation) | Chris | November 15 |
| Snow equipment fully staged: plows mounted, salt loaded, brine tank filled, routes confirmed | Chris | November 1 |
| All snow contracts signed and active | Kyle | November 1 |
| Send "Snow Season Ready" communication to all snow clients: "Your property is on our route. Here are your trigger thresholds, expected service windows, and emergency contact information." | Kyle | November 1 |

---

### 7D. Winter Operations (December - February)

**Snow event management:** See Section 4C (Snow Event Response Protocol) for detailed procedures.

**Between events:**
- Equipment maintenance: After every snow event, inspect plow edges, cutting edges, hydraulic connections, spreader calibration, vehicle fluids. Chris handles this within 24 hours of event conclusion.
- Salt inventory: Track salt usage per event. Reorder when inventory drops below 10 tons. Pre-season rate locks typically expire by December -- spot market pricing applies. If salt exceeds $120/ton spot, increase brine pre-treatment to reduce bulk salt consumption.
- Property checks: Between snow events, drive contracted properties to inspect for ice formation, drainage refreezing, or debris. Log observations in Jobber. Proactive service calls ("We noticed ice forming in your lot drain. We treated it before it became a problem.") build enormous goodwill.
- Equipment maintenance (non-snow): This is the time to service mowing equipment for spring. Chris schedules all major maintenance (blade replacement, hydro service, deck rebuild if needed) for January-February so equipment is ready for March.

**Business development in winter:**
- Kyle's primary winter activity is sales. With reduced field work between snow events, Kyle focuses on:
  - Following up on all Q4 proposals sent in October-November
  - Attending IFMA/IREM networking events (winter meetings are less crowded -- easier to build relationships)
  - Planning the Year 2 outreach campaign
  - Refining proposals based on Year 1 learnings
  - Building case studies from successful Year 1 clients

---

## 8. Q4 Budget Season Playbook

### 8A. Why Q4 Matters

The customer acquisition research is explicit: Q4 is when commercial property managers set next-year budgets. If Stone & Salt is not in front of decision-makers with proposals in October-November, the opportunity to win contracts for the following year is largely gone until the next Q4.

This is how Year 2 pipeline gets built. Year 1 Q4 activity determines Year 2 revenue more than any other factor.

---

### 8B. September: Snow Contract Season Opens

**Week of September 1:**
- Pull all existing commercial clients into a "Snow Renewal" list in GHL
- Pull all prospects in Nurture and active pipeline stages into a "Snow Prospect" list
- Prepare snow proposals for every existing client (if not already under year-round contract)
- Prepare snow proposals for top 10 prospects (even if they have not committed to grounds yet -- snow can be an entry point)

**Week of September 8-15:**
- Send snow proposals to all existing clients with a cover email: "Attached is your snow and ice management proposal for the [year] season. Pricing is based on your current property scope. Seasonal contracts signed by October 15 receive priority routing and guaranteed pre-treatment. Let me know if you would like to schedule a brief call to review."
- Call each client within 3 days of sending to discuss

**Week of September 15-30:**
- Send snow proposals to top prospects
- Follow up on all sent proposals
- Target: all snow contracts signed by October 31

---

### 8C. October-November: Next-Year Grounds Proposals

**October 1-15:**
- Prepare renewal proposals for all existing grounds clients (60 days before contract expiration)
- Renewal proposals include: Year 1 performance summary (visit count, photos, conditions addressed), next-year scope (same or recommended changes), next-year pricing (same or adjusted, capped at 3% increase), multi-year option (2-year agreement with locked pricing)
- Schedule in-person renewal meetings with each client

**October 15-31:**
- Send next-year grounds proposals to all active prospects in pipeline
- These are the prospects who said "not now" in spring but expressed interest for next year
- Cover email: "We discussed your property earlier this year. I wanted to follow up as budget season approaches. Attached is a proposal for [property name] for the coming year. Happy to schedule a walkthrough or a brief call to discuss."

**November 1-30:**
- Follow up on all outstanding proposals (both renewal and new)
- Attend any industry events (IFMA, IREM, CAI holiday events) for face time
- Target: verbal commitments from all renewals + 2-3 new commitments for Year 2

---

### 8D. Materials to Prepare for Q4

| Material | Purpose | Format |
|----------|---------|--------|
| **Year-in-Review one-pager** | Summarize Stone & Salt's Year 1 performance: clients served, visit count, response time average, client retention rate | PDF, 1 page, branded |
| **Service case study** | Mike's Carwash (and 1-2 other clients with permission): before/after, problem/solution, quantified results | PDF, 2 pages, branded |
| **Capability packet** | Overview of services, coverage area, insurance, certifications, references | PDF, 4 pages, branded |
| **Snow contract template** | Pre-built snow proposal ready for property-specific customization | PDF/Word template |
| **Grounds renewal template** | Pre-built renewal proposal with Year 1 data auto-populated from Jobber | PDF/Word template |
| **Referral card** | Physical card: "Know a property manager who deserves better grounds management? Refer them to Stone & Salt. $500 referral bonus for every signed annual contract." | Printed card, handed to clients during quarterly reviews |

---

## 9. Technology Stack Recommendation

### 9A. Complete Stack with Costs

| System | Platform | What It Does for Stone & Salt | Monthly Cost | Annual Cost |
|--------|----------|------------------------------|-------------|-------------|
| **CRM + Pipeline + Phone + SMS** | GoHighLevel (GHL) | Prospect pipeline, automation triggers, phone/SMS, email sequences, review requests | $0 (shared with Sidekick Marketer) | $0 incremental |
| **Field Service Management** | Jobber (Growing plan) | Scheduling, GPS-tracked visit documentation, crew dispatch, invoicing, client portal, route optimization, photo documentation | $59 | $708 |
| **Accounting** | QuickBooks Online (already using) | Invoicing, expense tracking, P&L, tax prep, payroll when hiring | $30 (existing) | $360 |
| **Cold Email Outreach** | Instantly.ai (already have) | 3-email property manager sequence, deliverability optimization | $37 (shared with Sidekick) | $0 incremental |
| **Weather Monitoring** | Weather Underground (free tier) + NWS | Hyperlocal forecasting for snow triggers, storm tracking | $0 | $0 |
| **Route Optimization** | Jobber built-in | Sequences daily stops to minimize drive time | Included in Jobber | Included |
| **Photo Documentation** | Jobber built-in (mobile app) | GPS-tagged, timestamped photos attached to visit records | Included in Jobber | Included |
| **Client Portal** | Jobber built-in | Clients view visit history, approve quotes, pay invoices | Included in Jobber | Included |
| **Proposals** | Google Docs + PDF export | Template-based proposal creation, client-specific customization | $0 (Google Workspace) | $0 |
| **Internal Communication** | iMessage group chat (Kyle + Chris) | Fast coordination during snow events, daily check-ins | $0 | $0 |
| **File Storage** | Google Drive | Contracts, proposals, insurance certificates, photos backup, client files | $0 (Google Workspace) | $0 |
| **Vehicle Tracking (optional Year 1)** | Jobber GPS (crew tracking via app) | Verifies crew location during service | Included in Jobber | Included |
| **TOTAL NEW COST** | | | **$59/month** | **$708/year** |

**Total technology cost for Stone & Salt operations: $59/month in new spend.** GHL, Instantly, and QuickBooks are already paid for through Sidekick Marketer or existing business operations.

---

### 9B. How the Systems Connect

```
Prospect finds Stone & Salt (LSA, outreach, referral, website)
    |
    v
GHL: Contact created, enters Prospect Pipeline Stage 1
    |
    v
Kyle works prospect through pipeline (Stages 1-9)
    |
    | (Simultaneously: Instantly.ai sends email sequence for cold outbound)
    |
    v
Contract signed --> GHL Stage 10: Contract Signed
    |
    v
Kyle creates client + property in Jobber
    |
    v
Jobber: Onboarding --> Active service
    |
    v
Jobber: Visit scheduled --> Crew executes --> GPS check-in/out, photos, notes
    |
    v
Jobber: Auto-notification to client after each visit
    |
    v
Jobber: Invoice generated --> Synced to QuickBooks
    |
    v
QuickBooks: Payment recorded, revenue tracked by service line
    |
    v
GHL: Renewal trigger at 60 days before expiration
    |
    v
Kyle sends renewal proposal --> Cycle continues
```

**The one manual step that matters:** When a contract is signed in GHL, Kyle manually creates the client and property in Jobber. This is a 10-minute task per new client. Automating this connection via Zapier ($20/month) is worth it once client count exceeds 15, but at 6-8 clients it is faster to do manually than to configure and maintain the automation.

---

### 9C. When to Upgrade

| Trigger | Upgrade |
|---------|---------|
| Revenue exceeds $500K or crew count exceeds 5 | Evaluate Aspire for commercial-grade job costing, multi-crew scheduling, and property management integrations. Aspire replaces Jobber. GHL stays as CRM. |
| Snow route requires 3+ trucks | Add GPS fleet tracking hardware (Samsara or GPS Trackit, ~$25/vehicle/month). Jobber GPS is phone-based and may not be sufficient for multi-vehicle snow fleet management. |
| Client count exceeds 30 | Automate GHL-to-Jobber contact sync via Zapier or Make.com. |
| Crew count exceeds 8 | Add dedicated payroll/HR platform (Gusto, $40/month + $6/employee). QuickBooks payroll may be sufficient until this point. |
| Revenue exceeds $1M | Hire an office manager/dispatcher. Technology does not replace human coordination at this scale -- it enables it. |

---

### 9D. Why Not Aspire or LMN Right Now

**Aspire** is the gold standard for commercial landscape operations above $1M revenue. Its job costing, multi-division management, and property management integrations are unmatched. But:
- Minimum cost is $300-$500+/month
- Implementation requires significant setup time (2-4 weeks of configuration)
- Designed for 5+ crew operations with foremen, division managers, and back-office staff
- At 2 people and 6-8 clients, Aspire's complexity is overhead, not leverage

**LMN** is strongest at estimating and bidding, particularly for landscape construction/installation. Its scheduling and field management modules are secondary to its estimating engine. For a mowing-and-maintenance-primary operation, LMN's core strength (estimating) is less relevant than Jobber's core strength (scheduling + documentation + client communication).

**ServiceTitan** is purpose-built for dispatch-heavy, appointment-based home services (HVAC, plumbing, electrical). Landscaping route-based service is fundamentally different from one-off dispatch service calls. ServiceTitan's pricing ($250+/month) and feature set do not align with grounds management operations.

---

## Summary: The Two-Person Operation That Looks Like a 20-Person Company

Everything in this document serves one goal: make Stone & Salt's 2-person operation deliver the professionalism, documentation, and reliability that property managers expect from a 20-person company -- while maintaining the owner accessibility and accountability that a 20-person company cannot provide.

The systems that make this possible:

| Capability | What the client sees | What actually happens |
|-----------|---------------------|----------------------|
| "GPS-tracked service documentation" | Professional service logs with timestamps, GPS, and photos | Kyle and Chris tap "Start" and "Complete" in Jobber and take 2 photos per visit |
| "4-hour response guarantee" | Immediate acknowledgment of any request | Kyle's phone is always on. GHL routes calls and texts to his cell. |
| "$2M liability coverage" | Insurance certificate on file | Standard commercial GL policy, updated annually |
| "Documented service logs available on request" | Professional PDF with visit history | Jobber export, formatted and emailed within 24 hours |
| "Predictable annual pricing" | Fixed monthly invoices, 12 equal payments | Jobber auto-invoices on a recurring schedule |
| "24/7 snow emergency response" | Crew at your property before your employees arrive | Kyle and Chris set alarms, pre-stage equipment, and follow the snow protocol |
| "Direct owner access" | A decision-maker who picks up the phone | Kyle answers. That is it. No call center. No voicemail tree. |
| "Monthly property reports" | Branded PDF with photos, visit summaries, and recommendations | Kyle spends 30 minutes per client per month compiling Jobber data into a Google Docs template |
| "Dedicated account manager" | Your named contact who knows your property | Kyle is the account manager for every client. At 6-8 clients, he knows every property personally. |

The total incremental cost of all of this: $59/month for Jobber.

The rest is discipline, documentation, and showing up.

---

*Operations & Service Design document prepared February 15, 2026. All recommendations specific to Stone & Salt's commercial-primary grounds management business in Greater Cincinnati. Technology recommendations reflect current pricing and feature sets. Update as the business scales past Year 1 thresholds.*
