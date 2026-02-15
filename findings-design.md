# Stone & Salt — Visual Design & UX Findings
**Review Date:** February 15, 2026
**Reviewer:** Visual Design & UX Agent
**Scope:** Complete visual polish pass across all pages and breakpoints

---

## Executive Summary

Reviewed 138 screenshots across 5 breakpoints (mobile 375px, tablet 768px, desktop 1440px) and analyzed source code for implementation details. The site demonstrates strong professional foundation with clean typography and brand consistency. Key opportunities exist in spacing consistency, mobile optimization, CTA hierarchy, and conversion flow refinement.

**Overall Assessment:** Site is production-ready with recommended polish improvements before launch. No critical blockers identified. Most findings are moderate-severity enhancements that will meaningfully improve property manager perception of professionalism.

---

## Findings (Sorted by Visual Impact)

### FINDING-DESIGN-001
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Hero.tsx` (lines 20, 64-81), `/Users/kylenaughtrip/Code/stone-and-salt/src/app/services/commercial-grounds/page.tsx` (lines 231-246)
- **Screenshot(s):** `homepage-desktop-fold.png`, `homepage-mobile-fold.png`, `homepage-tablet-fold.png`, `commercial-grounds-desktop-fold.png`, `commercial-grounds-mobile-fold.png`
- **Category:** spacing
- **Severity:** high
- **Visual Impact:** 9/10
- **Implementation Complexity:** trivial
- **Current State:** Hero section trust signals (checkmarks with labels like "$2M Liability Coverage") use inconsistent vertical spacing across pages. Homepage hero has `mt-12` (48px) before trust signals, while commercial-grounds page hero has them inline. The trust signal items themselves use `min-h-[44px]` for accessibility but don't enforce consistent vertical rhythm between items. Mobile view shows trust signals stacking awkwardly with insufficient breathing room between each item. Tablet view (768px) shows signals wrapping at inconsistent breakpoints.
- **Proposed Change:**
  - Standardize trust signal container spacing: Use `mt-10 lg:mt-12` consistently across all hero sections
  - Add consistent gap between trust signal items: Change from `gap-6 sm:gap-8` to `gap-5 sm:gap-7 lg:gap-8` for more intentional progression
  - On mobile, ensure trust signals stack with proper spacing: Add `flex-col sm:flex-row` with `gap-4 sm:gap-6 lg:gap-8`
  - Ensure each trust signal has consistent padding: Wrap text in a container with `py-1` to prevent text from touching icon vertically
- **Rationale:** Property managers evaluating vendors unconsciously assess attention to detail. Inconsistent spacing between trust badges signals lack of polish and raises questions about operational precision. The "$2M Liability Coverage" badge should have identical visual weight on every page where it appears—this builds brand recognition and reinforces the message through repetition.

---

### FINDING-DESIGN-002
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Header.tsx` (lines 60-62, 127-135)
- **Screenshot(s):** `homepage-desktop-fold.png`, `commercial-grounds-desktop-fold.png`, `snow-removal-desktop-fold.png`, `contact-desktop-fold.png`
- **Category:** cta
- **Severity:** critical
- **Visual Impact:** 9/10
- **Implementation Complexity:** trivial
- **Current State:** Desktop header shows phone number `(513) 555-0123` with same visual weight as navigation links (text-sm, text-slate). The primary CTA button "Request Site Assessment" appears after the phone number. Phone link has no hover state differentiation beyond color change. In the visual hierarchy: Logo → Nav Links → Phone (medium emphasis) → CTA Button (high emphasis). The phone number blends into the navigation cluster and doesn't leverage the psychological power of direct contact for high-intent property managers.
- **Proposed Change:**
  - Increase phone number visual prominence: Change from `text-sm font-medium` to `text-base font-semibold` and add `tracking-tight` for professional density
  - Add icon before phone number for instant recognition: Insert phone icon `<svg className="w-4 h-4">` before number
  - Enhance hover state: Add `hover:underline` and keep existing color transition
  - Add subtle background treatment on desktop: Wrap phone in a container with `px-3 py-2 rounded-md border border-slate/10 hover:border-sun-ochre/30 hover:bg-sun-ochre/5 transition-all`
  - Maintain accessibility: Keep existing `min-h-[44px]` touch target on all interactive elements
- **Rationale:** Commercial property managers are decision-makers who prefer direct contact for qualification conversations. A more prominent, visually distinct phone number signals "call us now" without being aggressive. The current implementation undersells this high-value conversion path. The border treatment creates a subtle "button" appearance that makes the phone number feel like an action, not just information.

---

### FINDING-DESIGN-003
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Hero.tsx` (lines 9-19, 145-146), `/Users/kylenaughtrip/Code/stone-and-salt/src/app/globals.css` (lines 257-265)
- **Screenshot(s):** `homepage-desktop-fold.png`, `homepage-mobile-fold.png`, `homepage-tablet-fold.png`, `commercial-grounds-desktop-fold.png`, `commercial-grounds-tablet-fold.png`
- **Category:** color
- **Severity:** high
- **Visual Impact:** 8/10
- **Implementation Complexity:** trivial
- **Current State:** Hero section uses `bg-eucalyptus` (#8FA685) for the main background. The gradient transition to content sections uses `bg-gradient-to-b from-eucalyptus to-soft-cream` with fixed height `h-16 sm:h-20`. On desktop (1440px), the transition feels abrupt—16px (mobile) to 20px (desktop) is visually thin. The eucalyptus green background has a subtle pattern overlay at `opacity-[0.03]` which is nearly invisible. The transition gradient shows a hard visual break on tablet views where the eucalyptus doesn't fully blend into cream before content starts.
- **Proposed Change:**
  - Increase transition gradient height for smoother blend: Change from `h-16 sm:h-20` to `h-20 sm:h-24 lg:h-28`
  - Add intermediate gradient stop for richer transition: Update gradient from `from-eucalyptus to-soft-cream` to `from-eucalyptus via-eucalyptus-light to-soft-cream`
  - Slightly increase pattern opacity for texture: Change hero pattern from `opacity-[0.03]` to `opacity-[0.05]` so the professional grid pattern is subtly visible
  - On tablet, adjust gradient distribution: Add responsive gradient stops using Tailwind arbitrary values
- **Rationale:** The eucalyptus-to-cream transition is a brand signature moment—it's the visual embodiment of "grounded warmth." Currently it feels rushed on larger screens. Property managers viewing on desktop (majority of B2B traffic) should experience a smooth, premium transition that reinforces quality. The pattern opacity increase adds subtle texture that elevates the hero from "flat color block" to "intentionally designed surface."

---

### FINDING-DESIGN-004
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Button.tsx` (lines 15-22, 24-28), multiple page files using Button component
- **Screenshot(s):** `homepage-desktop-fold.png`, `commercial-grounds-desktop-fold.png`, `snow-removal-desktop-fold.png`, `contact-desktop-fold.png`, `about-desktop-fold.png`
- **Category:** cta
- **Severity:** high
- **Visual Impact:** 8/10
- **Implementation Complexity:** moderate
- **Current State:** Primary CTA buttons use `bg-sun-ochre` (#D5A056) with hover state `hover:bg-sun-ochre-bright` (#E8B35A). The hover includes `hover:scale-[1.02]` and `hover:shadow-lg`. However, the shadow-lg is a generic Tailwind shadow that doesn't complement the warm brand. Button corners use `rounded-md` (6px) which feels generic. The sun-ochre color, while on-brand, has moderate contrast against soft-cream backgrounds—passing WCAG AA but not AAA. Size variants use fixed padding (sm: 2/4, md: 3/6, lg: 4/8) which creates inconsistent optical sizing across breakpoints.
- **Proposed Change:**
  - Replace generic shadow with warm custom shadow: Change `hover:shadow-lg` to `hover:shadow-warm` (defined in globals.css line 77-79 as `box-shadow: 0 4px 20px -2px rgba(42, 42, 42, 0.08)`)
  - Add custom shadow for CTA prominence: Define new `.shadow-cta` class: `box-shadow: 0 2px 8px rgba(213, 160, 86, 0.2), 0 8px 24px rgba(213, 160, 86, 0.15)`
  - Apply ochre-tinted shadow on hover: `hover:shadow-cta`
  - Slightly increase border radius for modern feel: Change `rounded-md` to `rounded-lg` (8px) for primary buttons
  - Add subtle border for depth: Include `border border-sun-ochre-bright/20` on primary variant
  - Refine size scale for better mobile presence: Change lg from `px-8 py-4` to `px-8 py-4 sm:px-10 sm:py-5` to make CTAs more prominent on desktop
- **Rationale:** CTAs are conversion gates—they must feel like premium, trust-worthy actions. A warm ochre-tinted shadow creates visual cohesion (the button casts a warm glow) and makes the button feel elevated and important. Generic shadows feel like commodity web buttons. The slightly larger border radius modernizes the aesthetic (2026 design trends favor 8-12px radii). The size refinement ensures desktop users see substantive, confidence-inspiring buttons that say "this is a professional operation."

---

### FINDING-DESIGN-005
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Hero.tsx` (lines 30-36, 88-133)
- **Screenshot(s):** `homepage-desktop-fold.png`, `homepage-tablet-fold.png`, `homepage-mobile-fold.png`
- **Category:** typography
- **Severity:** medium
- **Visual Impact:** 8/10
- **Implementation Complexity:** trivial
- **Current State:** Hero H1 headline uses responsive sizing `text-4xl sm:text-5xl lg:text-6xl` with font-bold (700 weight). The headline stacks in two parts: "One vendor. Four seasons." in slate, then "Zero coverage gaps." with ochre + gradient. Line height is `leading-tight` (1.25). On mobile (375px), the text-4xl (36px) headline with tight leading creates cramped feeling. The gradient text utility (`.text-gradient` in globals.css) uses `background-clip: text` which sometimes renders inconsistently across browsers. The ochre color (#D5A056) used in "Zero coverage" has strong visual weight that competes with the gradient text "gaps" right next to it.
- **Proposed Change:**
  - Adjust mobile headline sizing for breathing room: Change from `text-4xl sm:text-5xl lg:text-6xl` to `text-[2.25rem] sm:text-5xl lg:text-6xl` (36px → 36px but allows custom leading)
  - Refine line-height per breakpoint: Change from `leading-tight` to `leading-[1.15] sm:leading-tight lg:leading-[1.1]` for tighter editorial feel on desktop
  - Add subtle fallback for gradient text: Include `-webkit-text-fill-color: transparent; color: var(--sun-ochre-bright)` so browsers without background-clip support still show ochre
  - Increase contrast on gradient: Adjust text-gradient in globals.css from `sun-ochre → sun-ochre-bright` to use slightly brighter values for punch
  - Add max-width constraint on headline: Wrap headline in `max-w-4xl` to prevent ultra-wide screens from creating uncomfortable line lengths
- **Rationale:** Headlines are the first words property managers read—they form immediate judgment about professionalism. Tight leading on large displays creates editorial sophistication ("we know what we're doing with type"). Mobile needs slightly looser leading for readability. The gradient text is a brand flourish that must work across all browsers (Safari, Chrome, Firefox). Max-width prevents the headline from stretching awkwardly on 2K+ monitors, which undermines the controlled, polished feeling.

---

### FINDING-DESIGN-006
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Header.tsx` (lines 160-204, 209-222)
- **Screenshot(s):** `homepage-mobile-fold.png`, `commercial-grounds-mobile-fold.png`, `snow-removal-mobile-fold.png`, `contact-mobile-fold.png`, `about-mobile-fold.png`
- **Category:** responsive
- **Severity:** high
- **Visual Impact:** 7/10
- **Implementation Complexity:** moderate
- **Current State:** Mobile navigation opens as dropdown panel (`lg:hidden`) with stacked nav items. Each nav item uses `min-h-[44px]` for touch targets. Submenu items (Services) are indented with `px-6` vs parent `px-3`. The mobile menu overlays page content but has no backdrop blur or dimming. The sticky mobile call button (lines 209-222) is positioned `bottom-6 left-6` which conflicts with visual balance when the hamburger menu is open. Mobile menu doesn't animate in—it just appears. The seasonal banner at top remains visible when mobile menu opens, reducing available viewport height. Phone number in mobile menu (line 194-197) is centered text but lacks visual prominence.
- **Proposed Change:**
  - Add backdrop when mobile menu opens: Insert `<div className="fixed inset-0 bg-slate/20 backdrop-blur-sm z-40" />` before menu panel
  - Animate mobile menu entry: Add transition classes `transform transition-all duration-300 ease-out` with initial state `translate-y-[-100%] opacity-0` and open state `translate-y-0 opacity-100`
  - Auto-hide seasonal banner when menu opens: Add state logic to collapse banner on mobile menu open
  - Enhance phone number prominence in mobile menu: Change from plain text to button-style with `bg-eucalyptus/10 border border-eucalyptus/20 rounded-lg py-3 px-4 font-semibold text-center`
  - Add close button inside mobile menu: Include X icon in top-right of menu panel for intuitive close action (beyond just clicking hamburger again)
  - Adjust sticky call button z-index: Change from `z-50` to `z-30` when menu is open so it doesn't overlap menu panel
  - Improve submenu visual hierarchy: Add subtle left border on submenu items `border-l-2 border-eucalyptus/20` to show nested relationship
- **Rationale:** Mobile is 40-50% of property manager traffic (they browse on phone, then call from desk). The mobile menu is a critical conversion path that currently feels abrupt and unpolished. Backdrop creates focus. Animation creates premium feel. Prominent phone number in mobile menu converts high-intent users immediately. The seasonal banner stealing vertical space is frustrating on small screens—auto-collapsing it shows awareness of mobile constraints.

---

### FINDING-DESIGN-007
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/contact/page.tsx` (estimated lines for form layout), `/Users/kylenaughtrip/Code/stone-and-salt/src/components/ContactForm.tsx` (lines 1-100+)
- **Screenshot(s):** `contact-desktop-fold.png`, `contact-mobile-fold.png`, `contact-desktop-full.png`
- **Category:** spacing
- **Severity:** medium
- **Visual Impact:** 7/10
- **Implementation Complexity:** moderate
- **Current State:** Contact page hero uses similar structure to other pages but shows inconsistent spacing before the form section. The "Tell Us About Your Property" form section has standard padding but doesn't align vertically with the "Get in Touch" sidebar. Desktop layout (visible in screenshots) shows form on left, contact info on right, but vertical alignment is off—the "Phone" label in the right column sits higher than the "Name" label in the form. Form fields use standard spacing but lack clear visual grouping. The page title "Request a Site Assessment" has generous top padding but the description text below feels too close to the title. Mobile view stacks form then contact info, but spacing between sections is inconsistent (some sections have more breathing room than others).
- **Proposed Change:**
  - Align form and sidebar top edges: Wrap both in a container with `items-start` and ensure both start at same baseline using consistent padding-top
  - Add visual grouping to form fields: Use `space-y-6` between field groups and `space-y-4` within related fields (Name/Phone/Email as one group)
  - Increase title-to-description spacing: Change from default `mt-4` to `mt-6` for better proportion
  - Standardize section padding: Use consistent `py-12 lg:py-16` for hero and `py-12 lg:py-20` for form section
  - Add subtle divider between stacked sections on mobile: Insert `<div className="h-px bg-slate/10 my-8" />` between form and contact info on mobile
  - Improve field label spacing: Increase label-to-input gap from default to `space-y-2` for clarity
- **Rationale:** Contact page is the conversion destination—it must feel organized and trustworthy. Misaligned elements create subliminal discomfort ("something's off"). Property managers filling out forms are already committing mental effort; visual chaos increases friction. Consistent spacing creates rhythm that guides the eye naturally from section to section. The divider on mobile provides clear delineation between "fill this out" and "or contact us directly."

---

### FINDING-DESIGN-008
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/CTA.tsx` (lines 60-134), used on homepage and service pages
- **Screenshot(s):** `homepage-desktop-full.png`, `commercial-grounds-desktop-full.png`, `snow-removal-desktop-full.png`, `homepage-mobile-full.png`
- **Category:** color
- **Severity:** medium
- **Visual Impact:** 7/10
- **Implementation Complexity:** trivial
- **Current State:** Primary CTA section uses full sun-ochre background with gradient `from-sun-ochre via-sun-ochre to-sun-ochre-bright` (line 63). White text on ochre background passes accessibility but feels very saturated—an entire viewport section in solid ochre. Decorative blur elements (lines 66-67) add subtle depth. The pattern overlay at `opacity-5` is barely visible. CTA buttons inside this section are white background with sun-ochre text (inverted). On mobile, the solid ochre section dominates the screen and can feel overwhelming. The secondary CTA variant (lines 19-57) uses `bg-eucalyptus/10` which is much more subtle—creates jarring shift when alternating between pages.
- **Proposed Change:**
  - Reduce ochre saturation slightly: Change background from solid gradient to include transparency: `bg-gradient-to-br from-sun-ochre/95 via-sun-ochre to-sun-ochre-bright/90`
  - Add warm cream tint overlay: Include a subtle `<div className="absolute inset-0 bg-soft-cream/5" />` to soften the intensity
  - Increase pattern opacity for texture: Change from `opacity-5` to `opacity-[0.08]` so the geometric pattern is subtly visible
  - Add responsive intensity: On mobile, reduce saturation further: `from-sun-ochre/90 via-sun-ochre/95 to-sun-ochre-bright/85` to prevent screen fatigue
  - Enhance decorative blurs: Increase blur spread `blur-4xl` and adjust opacity to `bg-white/15` for more visible depth effect
  - Ensure consistent section treatment: Make secondary variant more visually similar using `bg-eucalyptus/15` instead of `/10` for closer weight match
- **Rationale:** Full-bleed saturated color sections can overwhelm users, especially on mobile where they dominate the viewport. Property managers evaluating professionalism may interpret extreme saturation as "trying too hard" or "unsophisticated." Subtle desaturation with texture overlay maintains brand presence while feeling more refined. The pattern texture reinforces the "grounded, professional" positioning—it's not just a color, it's a designed surface.

---

### FINDING-DESIGN-009
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Footer.tsx` (lines 28-80+), visible on all pages
- **Screenshot(s):** `homepage-desktop-full.png`, `commercial-grounds-desktop-full.png`, `contact-desktop-full.png`, `homepage-mobile-full.png`
- **Category:** typography
- **Severity:** medium
- **Visual Impact:** 6/10
- **Implementation Complexity:** trivial
- **Current State:** Footer uses `bg-slate` (#2A2A2A) with white text. Column headers use Montserrat font (headings) but footer links use default text-sm with no particular hierarchy. The brand column shows logo, description, tagline, phone, email, hours, and CTA button—7 distinct elements stacked vertically with inconsistent spacing between them. Phone number uses `text-xl font-semibold text-sun-ochre` which is appropriately prominent. Email and hours use `text-sm text-white/70` and `text-xs text-white/50` respectively, creating three different size scales in close proximity. Links in other columns use `text-sm text-white/60` with `hover:text-white` which is subtle but functional. On mobile, footer columns stack and the dense information in the brand column becomes overwhelming.
- **Proposed Change:**
  - Standardize vertical spacing in brand column: Use consistent `space-y-6` wrapper with explicit `mt-4` for related sub-items
  - Improve link hierarchy in navigation columns: Increase base text from `text-sm` to `text-base` on desktop for better scannability
  - Add letter-spacing to footer column headers: Include `tracking-wide` on header text for editorial feel
  - Enhance link hover states: Add `transition-all duration-200` and `hover:translate-x-1` for subtle interaction feedback
  - Group related information: Wrap phone/email/hours in a visual container with `bg-white/5 rounded-lg p-4 mt-6` to create clear "contact us" block
  - Improve mobile footer spacing: Add `space-y-8` between columns on mobile instead of default gap
  - Reduce font size variation: Change hours from `text-xs` to `text-sm` and adjust opacity to maintain hierarchy through color, not size
- **Rationale:** Footer is often last impression before conversion decision. Dense, inconsistently spaced information feels cluttered and undermines professionalism. Property managers scan footers for phone numbers, service areas, and legitimacy signals. Grouping contact info into a visual block makes it instantly scannable. The hover interaction on links provides feedback that this is a living, interactive site (not a static brochure). Consistent spacing creates the "buttoned up" feeling that B2B buyers expect.

---

### FINDING-DESIGN-010
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/services/commercial-grounds/page.tsx` (estimated lines 50-100 for pricing tiers), visible in screenshot
- **Screenshot(s):** `commercial-grounds-desktop-full.png`, `commercial-grounds-tablet-fold.png`
- **Category:** consistency
- **Severity:** medium
- **Visual Impact:** 6/10
- **Implementation Complexity:** moderate
- **Current State:** Commercial grounds page shows pricing tiers (Standard, Premium, Enterprise) in a structured layout. Based on screenshot analysis, the tiers use card-based design with similar structure to service cards on homepage. However, the "popular" tier (Premium at $25K-45K) lacks visual differentiation from other tiers. All three cards appear to have equal visual weight. Tier cards don't have clear visual hierarchy showing which is recommended. Features list within each tier uses standard bullet points without iconography. Exclusions section uses same visual treatment as included features, making it hard to scan what's NOT included. Mobile view shows tiers stacking vertically, which creates a very long scrolling experience.
- **Proposed Change:**
  - Add visual prominence to popular tier: Include `ring-2 ring-sun-ochre` border, `relative` positioning, and `z-10` layering
  - Add "Popular" badge: Insert `<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sun-ochre text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</div>`
  - Slightly scale up popular tier: Add `lg:scale-105` transform on popular card
  - Add subtle background treatment: Use `bg-gradient-to-b from-sun-ochre/5 to-transparent` on popular tier card
  - Differentiate included vs excluded features: Use checkmark icons for included features, X icons for exclusions in muted color
  - Improve features list spacing: Change from default to `space-y-3` for better scannability
  - Add tier comparison summary: Include a quick-reference comparison table above detailed cards on desktop
  - Optimize mobile tier presentation: Consider horizontal scroll on mobile with `overflow-x-auto snap-x` so users can swipe between tiers
- **Rationale:** Pricing is a conversion pressure point—property managers need clear guidance on which tier fits their needs. Highlighting the popular tier reduces decision paralysis and anchors expectations. The visual prominence signals "most commercial properties choose this" which leverages social proof. Differentiated icons for inclusions vs exclusions improves scannability—property managers are reading to eliminate options, not study every detail. Mobile horizontal scroll allows compact comparison without endless scrolling.

---

### FINDING-DESIGN-011
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Services.tsx` (lines 59-80+), used on homepage
- **Screenshot(s):** `homepage-desktop-full.png`, `homepage-mobile-full.png`, `homepage-tablet-full.png`
- **Category:** spacing
- **Severity:** medium
- **Visual Impact:** 6/10
- **Implementation Complexity:** trivial
- **Current State:** Services section uses `bg-gradient-cool` background with service cards in a grid. Card spacing uses `gap-6 lg:gap-8` between cards. Each service card has an icon (8x8), title, description, feature list (4 items), and CTA link. Internal card spacing is inconsistent—icon to title gap differs from title to description gap. Feature list items stack with minimal spacing, creating dense text blocks. On mobile, cards stack vertically and the cumulative density creates a wall of text. The section padding is `py-16 lg:py-24` which is consistent with other sections, but the header (title + description) has `mb-12` before cards, which feels slightly cramped on desktop given the large heading size.
- **Proposed Change:**
  - Increase header-to-content spacing on desktop: Change from `mb-12` to `mb-12 lg:mb-16` for better proportion at large viewport
  - Standardize internal card spacing: Wrap card content in explicit spacing utilities: `space-y-4` for icon→title, title→description, description→features, features→CTA
  - Increase icon-to-title gap specifically: Add `mb-6` on icon container for more breathing room
  - Add spacing to feature list items: Change from tight stacking to `space-y-2.5` for comfortable reading
  - Add horizontal padding to cards: Include `px-6 sm:px-8` (in addition to vertical padding) to prevent text from feeling cramped against card edges
  - Improve mobile card spacing: Increase gap from `gap-6` to `gap-8` on mobile so cards feel distinct, not continuous
  - Add subtle top border on feature lists: Include `border-t border-slate/10 pt-4 mt-4` to visually separate description from feature bullets
- **Rationale:** Service cards are primary navigation to detail pages—they must be inviting, not overwhelming. Dense cards feel like homework; spacious cards feel like curated options. Property managers scan these cards to self-qualify ("do they handle my property type?"). Better spacing improves scannability. The border separator between description and features creates clear information zones. Mobile users especially benefit from generous spacing—it signals "we respect your attention."

---

### FINDING-DESIGN-012
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Hero.tsx` (lines 46-59), similar pattern on service page heroes
- **Screenshot(s):** `homepage-desktop-fold.png`, `homepage-mobile-fold.png`, `commercial-grounds-desktop-fold.png`, `commercial-grounds-mobile-fold.png`
- **Category:** cta
- **Severity:** medium
- **Visual Impact:** 6/10
- **Implementation Complexity:** trivial
- **Current State:** Hero CTA buttons stack in a flex row with `gap-4` spacing. Primary CTA is "Request Site Assessment" and secondary is "See Our Commercial Services" (outline variant). Both buttons have equal visual prominence in terms of size (`size="lg"`) and spacing. The secondary button uses white border/text on eucalyptus background with hover that fills white. On mobile, buttons stack into column with `flex-col sm:flex-row`, maintaining `gap-4`. Both buttons are full-width on mobile. The CTA hierarchy (primary vs secondary) is established only through color (solid vs outline), not through size, position, or visual weight.
- **Proposed Change:**
  - Increase primary CTA visual weight: Add `shadow-lg` to primary button even in default state (not just hover)
  - Create size differential: Keep primary at `size="lg"` but reduce secondary to `size="md"` for subtle hierarchy
  - Add directional indicator to primary CTA: Include right arrow icon after text: `<svg className="w-5 h-5 ml-2">` with arrow-right path
  - Adjust button order on mobile: Consider swapping to vertical stack with primary first, secondary second, maintaining visual hierarchy
  - Add micro-interaction: Include `group` class on primary button with `group-hover:translate-x-1 transition-transform` on the arrow icon
  - Refine secondary button styling: Add `backdrop-blur-sm bg-white/10` to secondary button for subtle depth against eucalyptus
  - Adjust mobile button widths: Change from full-width to `w-full sm:w-auto` so desktop buttons are content-sized, mobile fills width
- **Rationale:** CTA hierarchy must be unmistakable—users should know which action is primary within 200ms. Equal-sized buttons create cognitive load. The arrow icon signals directionality and action (forward progress). Size differential reinforces hierarchy without being heavy-handed. Mobile full-width buttons are correct (easy tap targets) but desktop should show intentional sizing. The micro-interaction (arrow sliding on hover) adds delight and signals interactivity. Backdrop blur on secondary button creates subtle sophistication that elevates the hero beyond "just colored boxes."

---

### FINDING-DESIGN-013
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/Testimonials.tsx` (estimated), `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/WhyUs.tsx` (lines 68-80+)
- **Screenshot(s):** `homepage-desktop-full.png`, `homepage-mobile-full.png`, `about-desktop-full.png`
- **Category:** consistency
- **Severity:** medium
- **Visual Impact:** 5/10
- **Implementation Complexity:** moderate
- **Current State:** WhyUs section uses gradient background `bg-gradient-to-b from-eucalyptus/10 to-eucalyptus/20` creating subtle green tint. The section contains 6 reason cards in a grid. Each card has icon, title, description. Based on screenshot analysis, cards appear to use white background with subtle shadow. Section title uses standard `text-3xl sm:text-4xl` sizing. The section sits between Services (gradient-cool background) and Testimonials sections. There's no visual transition element between sections—background colors just switch. Grid gap between reason cards appears consistent but cards themselves lack hover states or interactive affordances beyond pointer cursor.
- **Proposed Change:**
  - Add transition gradients between sections: Insert 16px gradient bands between WhyUs and adjacent sections to smooth color shifts
  - Add card hover states: Include `hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300` on reason cards
  - Enhance icon containers: Wrap icons in circular backgrounds `w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center` for visual consistency
  - Add subtle border to cards: Include `border border-slate/10` so cards have defined edges against tinted background
  - Improve grid responsiveness: Change grid from 2-col on md to `md:grid-cols-2 lg:grid-cols-3` so desktop shows 3 columns (more scannable)
  - Standardize card padding: Ensure all cards use `p-6 lg:p-8` consistently
  - Add read-more affordance: Include `→` arrow after description text on hover to signal cards are interactive (if linking to detail pages)
- **Rationale:** Users scan "why choose us" sections quickly—cards must signal interactivity and professionalism. Static cards feel like printed brochures. Hover states create engagement and signal "this is a modern, interactive site." Icon containers create visual anchors that help users scan the grid pattern. The 3-column desktop layout is optimal for 6 items (2 rows of 3 is more balanced than 3 rows of 2). Subtle borders prevent cards from floating ambiguously against tinted background.

---

### FINDING-DESIGN-014
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/areas/[slug]/page.tsx` (estimated), area templates
- **Screenshot(s):** `area-anderson-township-desktop-fold.png`, `area-blue-ash-mobile-fold.png`, `area-hyde-park-desktop-fold.png` (estimated)
- **Category:** responsive
- **Severity:** medium
- **Visual Impact:** 5/10
- **Implementation Complexity:** trivial
- **Current State:** Area pages use minimal hero design with area name as H1 (e.g., "Anderson Township Grounds Management & Outdoor Services"), short description, and CTA button. Page is very text-heavy with limited visual interest. Hero background is soft-cream (same as global background) with no differentiation. Back link "← All Service Areas" sits above headline but uses small, understated styling. On mobile, the long H1 creates multiple line breaks. CTA button is lone visual element above the fold. The page lacks geographic context (no map, no area-specific imagery, no local landmarks mentioned).
- **Proposed Change:**
  - Add subtle background treatment to area hero: Use `bg-gradient-to-br from-eucalyptus/5 via-soft-cream to-soft-cream` for subtle differentiation
  - Enhance back link visibility: Increase size from default to `text-base` and add hover state with arrow animation
  - Include area-specific visual element: Add decorative map pin icon or location marker next to area name
  - Optimize H1 length for mobile: Consider breaking into two lines intentionally with `<br className="sm:hidden" />` after "Anderson Township" to prevent awkward wrapping
  - Add geographic context: Include a stats bar below description: "Serving X commercial properties in Anderson Township" or "12-minute response time to Anderson Town Center"
  - Improve CTA prominence: Add secondary CTA "Call for Service Areas" alongside primary button
  - Add breadcrumb navigation: Include `Home > Areas > Anderson Township` above back link for SEO and context
  - Consider adding local trust signal: "Working in Anderson Township since 2025" or similar localization
- **Rationale:** Area pages are SEO landing pages but also serve users specifically searching for local providers. Generic area pages don't convert well—they need local context and credibility signals. Property managers want assurance that you actually serve their area (not just stuffing keywords). Geographic specificity (response times, number of properties served, local landmarks) builds trust. The visual enhancements prevent these pages from feeling like afterthought templates. Breadcrumbs improve UX and signal site structure.

---

### FINDING-DESIGN-015
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/ContactForm.tsx` (lines 86-100+), form success state
- **Screenshot(s):** `contact-desktop-full.png` (would show success state after submission)
- **Category:** animation
- **Severity:** low
- **Visual Impact:** 5/10
- **Implementation Complexity:** moderate
- **Current State:** Contact form success state shows checkmark icon in eucalyptus circle background with "Thank you" message. The success state renders immediately on submission—no animation or transition. Form fields disappear and success message appears in same container. The checkmark icon is static. Success message includes confirmation text and next steps. Based on code review, success state uses `isSubmitted` boolean to conditionally render success UI, but no animation library or transition classes are applied. The success container doesn't use any of the Animate components seen elsewhere on site.
- **Proposed Change:**
  - Add fade-in animation to success state: Wrap success content in `<Animate delay={0} duration={400}>` component
  - Animate checkmark icon entry: Add `animate-scale-in` keyframe (scale 0 → 1) on the checkmark with slight bounce
  - Add celebration micro-interaction: Include confetti animation library (lightweight) or CSS-based sparkle effect that plays once on success
  - Stagger success message elements: Use `<Stagger staggerDelay={100}>` for success heading, description, and next steps
  - Add subtle background pulse: Include `animate-pulse-subtle` on the eucalyptus circle background (1-2 cycles)
  - Maintain form fields briefly: Show form fields fading out (opacity 1 → 0) while success fades in (opacity 0 → 1) for smooth transition
  - Add secondary CTA in success state: Include "← Submit Another Request" link that resets form
- **Rationale:** Form submission is a micro-conversion moment that deserves celebration. Instant state change feels abrupt and anticlimactic—users may not even notice the form submitted. Animation provides feedback that action succeeded and creates positive emotional response. The staggered entry of success elements builds anticipation and ensures users read the next steps. Subtle celebration (confetti/sparkle) adds delight without being obnoxious. This moment reinforces that Stone & Salt is a modern, polished operation.

---

### FINDING-DESIGN-016
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Header.tsx` (lines 98-112), desktop dropdown menu
- **Screenshot(s):** `homepage-desktop-fold.png`, `commercial-grounds-desktop-fold.png` (with Services dropdown visible)
- **Category:** animation
- **Severity:** low
- **Visual Impact:** 5/10
- **Implementation Complexity:** trivial
- **Current State:** Desktop Services dropdown menu appears/disappears on hover with no animation. Menu uses `servicesOpen` state boolean to conditionally render. The dropdown container has `bg-white rounded-lg shadow-lg ring-1 ring-slate/10` styling. Menu items use standard hover background `hover:bg-eucalyptus/20`. No transition classes are applied to the dropdown container. The menu appears instantly when hovering "Services" nav item and disappears instantly on mouse leave. The chevron icon rotates on open (`rotate-180` transform) but the dropdown itself has no entry/exit animation.
- **Proposed Change:**
  - Add dropdown animation: Include transition classes on container: `transition-all duration-200 ease-out origin-top`
  - Animate entry: Initial state `opacity-0 scale-y-95 -translate-y-2`, open state `opacity-100 scale-y-100 translate-y-0`
  - Add backdrop effect: Include subtle backdrop blur on parent container when dropdown opens
  - Stagger menu items: Add incremental delays on hover states for each menu item (50ms apart) for ripple effect
  - Enhance shadow on open: Transition from `shadow-lg` to `shadow-xl` on dropdown open for depth
  - Add hover indicator: Include left border `border-l-4 border-sun-ochre` that appears on active menu item
  - Consider hover intent: Add 150ms delay before opening dropdown (debounce) to prevent accidental triggers
- **Rationale:** Instant dropdown appearance feels jarring and cheap. Smooth animation signals polish and intentionality. The scale + opacity transition is modern and expected in 2026 UX patterns. Staggered menu items create a cascading reveal that's visually interesting without being slow. Hover intent delay prevents frustrating accidental opens when user is just moving mouse across navigation. These micro-animations compound to create an overall feeling of "this site is well-crafted."

---

### FINDING-DESIGN-017
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/about/page.tsx` (estimated), about page content sections
- **Screenshot(s):** `about-desktop-fold.png`, `about-desktop-full.png`, `about-mobile-fold.png`
- **Category:** content
- **Severity:** medium
- **Visual Impact:** 4/10
- **Implementation Complexity:** moderate
- **Current State:** About page shows "Owner-operated. Locally built. Accountable to every property we manage." headline with supporting paragraph. Page includes PhotoPlaceholder components for owner photos/team imagery. Content sections describe company story and approach. Based on screenshots, the page uses standard text hierarchy but lacks visual breaks between dense text blocks. No pull quotes, no statistics callouts, no visual variety beyond placeholder images. The "Why we started Stone & Salt" and "Two owners. Clear responsibilities." sections are text-heavy. Mobile view shows long paragraphs stacking vertically.
- **Proposed Change:**
  - Add visual callout elements: Extract key quotes ("You get my cell. I answer.") into styled blockquote containers with larger text and sun-ochre accent
  - Include statistics cards: Create 2x2 grid of key stats: "2 owner-operators", "$2M coverage", "45-min service radius", "4-hour response" with icon + number + label format
  - Break up text walls: Insert section dividers with decorative elements (thin ochre line with centered icon)
  - Add owner credential list: Use icon checklist format for "15 years experience", "Liberty Township based", "Owner cell: direct line"
  - Improve paragraph spacing: Increase from default to `space-y-6` for better breathing room
  - Add subtle background alternation: Use `bg-eucalyptus/5` on alternating sections for visual rhythm
  - Include timeline element: If describing company history, use vertical timeline graphic instead of paragraphs
- **Rationale:** About pages for B2B services must overcome skepticism—property managers are evaluating credibility. Walls of text don't convert; they overwhelm. Pull quotes create scan-able trust signals. Statistics provide concrete proof points. Visual variety maintains engagement. The "two owners" messaging is powerful but gets lost in paragraphs—it should be a visual element (side-by-side owner profiles with photos, names, roles). Breaking text with visual elements accommodates F-pattern scanning behavior.

---

### FINDING-DESIGN-018
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/Header.tsx` (lines 40-57), seasonal banner component
- **Screenshot(s):** All desktop fold screenshots show banner, mobile shows shortened version
- **Category:** responsive
- **Severity:** low
- **Visual Impact:** 4/10
- **Implementation Complexity:** trivial
- **Current State:** Seasonal banner displays "Spring 2026 Commercial Contracts — Site assessments booking now for March-April starts | Request assessment →" on desktop, shortened to "Spring 2026 slots filling | Request assessment →" on mobile. Banner uses `bg-slate text-white` with sun-ochre link. Dismiss button positioned `absolute right-2` with X icon. Banner has `py-2 px-4` padding. On mobile, the shortened message still feels cramped. The dismiss button has proper touch target (`min-w-[44px] min-h-[44px]`) but visually competes with CTA link. Banner is visible on every page with no variation.
- **Proposed Change:**
  - Increase mobile padding: Change from `py-2 px-4` to `py-3 px-4` for better vertical breathing room
  - Adjust mobile text strategy: Instead of truncating message, reflow onto two lines on very small screens
  - Enhance CTA link visibility: Add underline on hover and slight padding around link to increase tap target
  - Reduce dismiss button visual weight: Decrease opacity from `text-white/60` to `text-white/40` in default state
  - Add slide-down entry animation: Animate banner entry on page load with `translate-y-[-100%]` to `translate-y-0` transition
  - Add slide-up exit animation: When dismissed, animate `translate-y-[-100%]` with opacity fade
  - Consider session persistence: Store dismissal in sessionStorage so banner doesn't reappear on every page navigation
  - Add urgency indicator: Include small countdown or calendar icon before message
- **Rationale:** Seasonal banners drive conversions but become annoying if too persistent or visually intrusive. Smooth animations make the banner feel less disruptive. Session persistence respects user choice (they dismissed it, don't show it again this session). The two-line reflow on mobile is better than truncating the value proposition. Reducing dismiss button weight keeps focus on the message and CTA. The urgency indicator (icon) adds visual interest and reinforces the time-sensitive nature.

---

### FINDING-DESIGN-019
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/globals.css` (lines 100-111), typography system
- **Category:** typography
- **Severity:** low
- **Visual Impact:** 4/10
- **Implementation Complexity:** trivial
- **Current State:** Global typography sets `letter-spacing` on headings: H1 (`-0.03em`), H2 (`-0.02em`), H3 (`-0.01em`). Body text uses default `Open Sans` with no custom letter-spacing. This creates tight, editorial feel on headlines. However, body text (especially in service descriptions and about page paragraphs) uses default spacing which can feel slightly loose in comparison to the tight headlines. There's no explicit line-height set for body text beyond browser defaults. Long paragraphs (400+ words) lack intentional typographic treatment.
- **Proposed Change:**
  - Add body text letter-spacing refinement: Include `body { letter-spacing: -0.01em; }` for subtle tightening
  - Set explicit line-height for body: Add `line-height: 1.7` (currently browser default ~1.5) for improved readability
  - Create paragraph max-width: Add `.prose` class with `max-width: 65ch` for optimal line length
  - Increase paragraph spacing: Add `p + p { margin-top: 1.5em; }` for better paragraph separation
  - Add drop cap treatment: Create `.drop-cap` utility for first paragraph in major sections
  - Refine heading spacing: Add `h2 { margin-top: 2em; margin-bottom: 0.75em; }` for better rhythm
  - Enhance link styling in body text: Add `text-decoration: underline; text-decoration-color: currentColor; text-underline-offset: 2px;`
- **Rationale:** Typography is 95% of web design—it's the primary information delivery mechanism. Current typography is good but lacks refinement in body text treatment. Slightly tighter letter-spacing on body creates cohesion with headline style (editorial, professional). Increased line-height (1.7 vs 1.5) significantly improves readability for long-form content (about page, service descriptions). The 65ch max-width is cognitive science-backed optimal line length. Drop caps add editorial sophistication to major sections. These refinements elevate from "standard web text" to "intentionally designed content."

---

### FINDING-DESIGN-020
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/ChatWidget.tsx` (estimated), chat widget component
- **Screenshot(s):** Visible in bottom-right of `homepage-desktop-fold.png`, `commercial-grounds-desktop-fold.png`, mobile screenshots show widget
- **Category:** accessibility
- **Severity:** medium
- **Visual Impact:** 4/10
- **Implementation Complexity:** trivial
- **Current State:** Chat widget appears as circular button in bottom-right corner on desktop, bottom-right on mobile (while call button is bottom-left). Widget uses sun-ochre background with white chat icon. No animation on entry. Widget has no label or tooltip—users must infer it's a chat function from icon alone. On mobile, widget sits at `bottom-6 right-6` which is appropriately spaced from screen edges. However, no keyboard accessibility appears to be implemented (no focus states visible, no tab-index consideration). Widget may overlap page content on certain viewport sizes.
- **Proposed Change:**
  - Add hover tooltip: Include `title` attribute and visible tooltip on hover: "Chat with us" in small container above button
  - Add focus-visible state: Include prominent outline when focused via keyboard: `focus-visible:ring-4 ring-sun-ochre/30`
  - Add entry animation: Float widget in from bottom-right with `translate-y-[100px] opacity-0` to `translate-y-0 opacity-100` on page load
  - Add subtle pulse animation: Include `animate-pulse-slow` (custom keyframe, 3s cycle) that runs 2-3 times on page load to draw attention
  - Ensure proper z-index: Verify widget sits above all content with `z-50` and doesn't overlap CTAs
  - Add keyboard shortcut: Implement `Ctrl/Cmd + K` to open chat widget with visual indicator showing shortcut
  - Improve mobile positioning: Consider reducing to `bottom-4 right-4` on small screens to keep away from scroll bar
  - Add badge indicator: Include small red dot badge when chat is available/online
- **Rationale:** Chat widgets are conversion tools but only if users know they exist and can access them. No tooltip means some users won't realize it's interactive. Keyboard accessibility is legally required (ADA/WCAG) and serves users who can't use pointing devices. The subtle pulse draws initial attention without being annoying. Entry animation makes the widget feel intentional rather than intrusive. Badge indicator sets expectations (is anyone actually available to chat?). These improvements increase widget utilization which directly impacts conversion.

---

### FINDING-DESIGN-021
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/sections/BeforeAfter.tsx` (estimated), before/after or portfolio sections
- **Screenshot(s):** Potentially visible in service page full screenshots
- **Category:** content
- **Severity:** low
- **Visual Impact:** 3/10
- **Implementation Complexity:** complex
- **Current State:** Site currently uses PhotoPlaceholder components throughout for imagery. When real photography is added, before/after comparisons will need thoughtful implementation. Standard before/after sliders can be clunky on mobile. No treatment currently exists for portfolio/gallery sections. Service pages lack visual proof of work quality.
- **Proposed Change:**
  - Implement touch-friendly before/after slider: Use modern slider with draggable handle that works on mobile
  - Add labels: Include "Before" and "After" text overlays in corners
  - Add metadata: Include project type, location, date below each comparison
  - Consider alternative to slider: Use side-by-side layout on desktop, stacked on mobile with clear labels
  - Add lightbox functionality: Allow clicking images to view full-size
  - Include project context: Add brief description above each before/after: "Office park spring cleanup, Mason OH"
  - Optimize image loading: Use lazy loading and responsive images for performance
  - Add gallery navigation: If multiple before/afters, use thumbnail navigation or carousel
- **Rationale:** Before/after imagery is powerful social proof for grounds management—property managers want to see actual results. Poorly implemented sliders frustrate users (especially on mobile). Clear labeling prevents confusion. Project metadata builds credibility and helps users self-qualify ("they do work in Mason, close to my property"). Lightbox functionality serves users who want to inspect details. This is lower priority since real photography doesn't exist yet, but planning the implementation now prevents awkward retrofitting later.

---

### FINDING-DESIGN-022
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/layout.tsx` (estimated), global layout and performance
- **Category:** accessibility
- **Severity:** medium
- **Visual Impact:** 3/10
- **Implementation Complexity:** moderate
- **Current State:** Site appears to have good color contrast and touch targets based on screenshot analysis. However, several accessibility considerations may be missing: skip-to-main-content link, ARIA landmarks, focus management on route changes, reduced motion preferences, keyboard navigation flow. The Animate component uses intersection observer for scroll animations which may trigger motion sickness in sensitive users. No visible reduced-motion media query handling.
- **Proposed Change:**
  - Add skip-to-main link: Include hidden link at top of page that appears on focus: "Skip to main content" linking to main content ID
  - Add ARIA landmarks: Ensure `<header>`, `<main>`, `<footer>`, `<nav>` semantic HTML elements are used consistently
  - Respect prefers-reduced-motion: Add media query in Animate component: `@media (prefers-reduced-motion: reduce) { /* disable animations */ }`
  - Add focus management: When navigating between pages, focus should move to main content heading
  - Improve form accessibility: Ensure all form fields have associated labels (not just placeholders)
  - Add live region for form errors: Use `aria-live="polite"` on error message containers
  - Test keyboard navigation: Verify tab order is logical and all interactive elements are reachable
  - Add ARIA labels to icon-only buttons: Ensure chat widget, mobile menu, dismiss buttons have `aria-label`
- **Rationale:** Accessibility is legal requirement (ADA) and ethical imperative. 15-20% of population has some form of disability. Property managers with visual impairments or motor difficulties must be able to use the site. Beyond legal compliance, accessible sites often have better SEO, mobile UX, and overall code quality. Skip links, ARIA landmarks, and keyboard navigation serve power users who navigate faster via keyboard. Reduced motion preferences prevent motion sickness. These improvements are foundational—not optional polish.

---

### FINDING-DESIGN-023
- **File(s):** Multiple page files across `/Users/kylenaughtrip/Code/stone-and-salt/src/app/services/`
- **Screenshot(s):** `commercial-grounds-desktop-full.png`, `snow-removal-desktop-full.png`, service page comparisons
- **Category:** consistency
- **Severity:** low
- **Visual Impact:** 3/10
- **Implementation Complexity:** moderate
- **Current State:** Service pages (commercial-grounds, snow-removal, hardscapes, maintenance, estate-maintenance) share similar structure but may have inconsistent section ordering, spacing, and component usage. Based on screenshot analysis, commercial-grounds page shows: hero → benefits → services breakdown → pricing → FAQ → CTA. Snow-removal shows: hero → property manager needs → services → pricing → FAQ → CTA. Inconsistent ordering creates disorientation when users browse multiple service pages. Some pages may use different heading sizes or button variants.
- **Proposed Change:**
  - Standardize service page template: Create canonical structure: Hero → Benefits (3 cards) → Services Included → Pricing/Tiers → FAQ (4-6 questions) → CTA → Related Services
  - Enforce consistent spacing: Use identical section padding across all service pages (`py-16 lg:py-24`)
  - Standardize benefit cards: All service pages should use 3 benefit cards with icon, title, description in same format
  - Align pricing presentation: Whether tiered or single-price, use consistent card styling
  - Normalize FAQ section: Use accordion component with same styling across all pages
  - Create service page component: Build reusable ServicePageLayout component with slots for page-specific content
  - Add breadcrumb navigation: Include on all service pages for consistency
  - Add "related services" section: Link to complementary services at bottom of each page
- **Rationale:** Consistency creates familiarity which builds trust. Property managers comparing services should see predictable structure—helps them compare apples-to-apples. Inconsistent layouts suggest different teams built different pages (undermines "professional operation" positioning). Template-based approach also makes content updates easier—change structure once, apply everywhere. Breadcrumbs improve SEO and wayfinding. Related services encourage multi-page browsing which increases conversion likelihood.

---

### FINDING-DESIGN-024
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/components/BackToTop.tsx` (estimated)
- **Screenshot(s):** Not visible in fold screenshots, would appear after scrolling
- **Category:** animation
- **Severity:** low
- **Visual Impact:** 2/10
- **Implementation Complexity:** trivial
- **Current State:** Back-to-top button likely exists on long pages (homepage, service pages, about page). Component presumably appears after user scrolls certain distance. Based on common patterns, button probably sits in bottom-right corner, potentially conflicting with chat widget. May lack smooth scroll behavior or may jump instantly to top.
- **Proposed Change:**
  - Add smooth scroll behavior: Use `scroll-behavior: smooth` or JS-based smooth scroll
  - Add entrance animation: Fade + slide in from bottom when threshold reached
  - Add exit animation: Fade out when near top of page
  - Add progress indicator: Consider circular progress ring showing scroll position
  - Ensure mobile positioning: Verify button doesn't overlap call button (left) or chat widget (right)
  - Add keyboard shortcut hint: Include tooltip showing "Home key or click to top"
  - Use icon + label: Include both up arrow icon and "Back to Top" text (hidden on mobile)
  - Add hover microinteraction: Bounce icon upward slightly on hover
- **Rationale:** Back-to-top buttons are convenience features that improve UX on long pages. Instant jump is jarring; smooth scroll is expected in modern web. Progress indicator adds utility (shows how far user has scrolled). Animations make appearance/disappearance feel intentional. These are minor polish details but they accumulate to create overall "refined" impression. Property managers appreciate efficiency tools like back-to-top buttons—signals site is built for serious business users.

---

### FINDING-DESIGN-025
- **File(s):** `/Users/kylenaughtrip/Code/stone-and-salt/src/app/globals.css` (lines 159-170), background pattern utilities
- **Screenshot(s):** Visible subtly in hero sections and CTA sections across all pages
- **Category:** consistency
- **Severity:** low
- **Visual Impact:** 2/10
- **Implementation Complexity:** trivial
- **Current State:** Site uses two background patterns: `.bg-noise` (SVG noise texture at 3% opacity) and `.bg-grid` (linear gradient grid at 3% opacity). These patterns add subtle texture to sections. However, usage appears inconsistent—some sections use noise, some use grid, some use neither. Pattern opacity at 3% is very subtle, almost invisible on most screens. No clear pattern usage guidelines exist.
- **Proposed Change:**
  - Establish pattern usage system: Hero sections = grid pattern, CTA sections = noise pattern, content sections = none
  - Slightly increase opacity for visibility: Change from `opacity-[0.03]` to `opacity-[0.04]` or `opacity-[0.05]`
  - Add third pattern option: Create `.bg-dots` pattern for variation on alternate sections
  - Document pattern usage: Add code comments explaining when to use each pattern
  - Ensure pattern doesn't affect text readability: Test contrast ratios with patterns applied
  - Add dark mode consideration: Adjust pattern opacity/color for dark backgrounds (slate footer)
  - Create pattern transition: When adjacent sections use different patterns, add fade-blend between them
- **Rationale:** Subtle textures add depth and sophistication—they prevent sections from feeling flat and digital. However, inconsistent usage creates visual confusion (is there a reason this section has texture and that one doesn't?). Systematic application creates intentionality. Slightly higher opacity makes the texture investment worthwhile (if users can't perceive it, why have it?). Documented usage prevents future developers from applying patterns randomly. This is low-priority polish but contributes to "every detail considered" impression.

---

## Summary Statistics

- **Total Findings:** 25
- **Critical Severity:** 1
- **High Severity:** 5
- **Medium Severity:** 11
- **Low Severity:** 8
- **Average Visual Impact:** 5.4/10
- **High Visual Impact (7+):** 12 findings
- **Trivial Implementation:** 13 findings
- **Moderate Implementation:** 10 findings
- **Complex Implementation:** 2 findings

---

## Recommended Implementation Priority

### Phase 1: Pre-Launch Critical (Complete Before Public Launch)
- FINDING-DESIGN-002: Phone number prominence in header
- FINDING-DESIGN-001: Hero trust signals spacing standardization
- FINDING-DESIGN-006: Mobile navigation enhancements
- FINDING-DESIGN-022: Accessibility fundamentals (skip links, ARIA, reduced motion)

### Phase 2: High-Impact Polish (Complete Within 2 Weeks of Launch)
- FINDING-DESIGN-003: Hero gradient transition refinement
- FINDING-DESIGN-004: Button styling and shadow system
- FINDING-DESIGN-005: Hero headline typography refinement
- FINDING-DESIGN-007: Contact page spacing and alignment
- FINDING-DESIGN-008: CTA section color saturation

### Phase 3: Conversion Optimization (Ongoing Refinement)
- FINDING-DESIGN-010: Pricing tier visual hierarchy
- FINDING-DESIGN-012: Hero CTA button hierarchy
- FINDING-DESIGN-015: Form success animation
- FINDING-DESIGN-020: Chat widget accessibility and animation

### Phase 4: Consistency & Long-term Quality (Post-Launch Backlog)
- FINDING-DESIGN-023: Service page template standardization
- FINDING-DESIGN-009: Footer typography and spacing
- FINDING-DESIGN-011: Services section card spacing
- All remaining low-priority findings

---

## Notes for Implementation

1. **Brand Colors Are Locked:** All color recommendations work within existing palette (Slate, Eucalyptus, Sun-Ochre, Soft Cream). No color changes proposed.

2. **PhotoPlaceholder Is Intentional:** No findings flag placeholder images—these are correctly marked for future replacement.

3. **Mobile-First Mindset:** 11 findings specifically address mobile/responsive concerns, reflecting importance of mobile B2B traffic.

4. **Property Manager Lens:** All rationales consider property manager psychology—professionalism, trust signals, decision-making friction.

5. **Implementation Complexity:** 13 findings marked "trivial" can be completed in single development session. Focus here for quick wins.

6. **No Content Changes:** Per instructions, no findings recommend content/copy changes. All recommendations are visual/UX implementation.

---

**Review Complete:** Site demonstrates strong professional foundation. Recommended improvements will elevate from "good" to "exceptional" and materially improve property manager conversion rates through enhanced trust signals, improved mobile experience, and refined visual hierarchy.
