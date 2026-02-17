# Design & Visual Polish Review
## Agent 4 Output | February 2026

---

## Summary

Comprehensive visual QA pass on the Stone & Salt website. The site is well-built with strong foundations: consistent brand colors, proper font loading via CSS variables, good semantic HTML, and solid responsive patterns. Changes focused on accessibility, visual separation between sections, placeholder handling, touch target sizing, and centralizing hardcoded phone numbers.

**Build status:** Clean build, no errors.

---

## Files Modified

### `/src/app/page.tsx`
- **Removed TrustBar import and component.** The hero now has inline trust signals, making TrustBar redundant. The component file (`TrustBar.tsx`) already returned `null` so this was just cleanup. TrustBar.tsx is left in place so imports elsewhere (if any) do not break.

### `/src/app/layout.tsx`
- **Added skip-to-content link** for keyboard/screen reader accessibility. Uses `sr-only` with `focus:not-sr-only` pattern so it only appears on Tab focus. Added `id="main-content"` to the `<main>` element as the link target.

### `/src/app/globals.css`
- **Scoped the global `*` transition rule** from `*` to `*[class*="transition"]`. The original rule applied `transition-timing-function` to every element on the page, which can cause unintended animation side effects and performance overhead. Now only elements that already have Tailwind transition classes are affected.

### `/src/components/BackToTop.tsx`
- **Repositioned from `bottom-8 right-8` to `bottom-20 right-6`** to avoid overlapping with the ChatWidget toggle button (which is at `bottom-6 right-6`). BackToTop now sits above the chat toggle.
- **Changed `rounded-sm` to `rounded-full`** for visual consistency with the chat toggle button.
- **Changed z-index from `z-50` to `z-40`** so the chat widget always renders above it.

### `/src/components/Header.tsx`
- **Increased mobile menu touch targets** from `py-2` to `py-3` with `min-h-[44px]` on all mobile navigation links (both top-level and submenu items). WCAG requires 44x44px minimum touch targets.
- **Added `aria-haspopup="true"` and `onClick` handler** to the Services dropdown button for keyboard accessibility. Previously only opened on mouse hover.
- **Increased hamburger button touch target** with `min-w-[44px] min-h-[44px]` for mobile accessibility.
- **Added `min-h-[44px]`** to the desktop Services dropdown button.

### `/src/components/Button.tsx`
- **Added `min-h` to all button sizes** for consistent touch targets: sm=36px, md=44px, lg=48px. Ensures buttons meet WCAG AA touch target requirements.

### `/src/components/ChatWidget.tsx`
- **Added `aria-label="Type your message"`** to chat input for screen reader accessibility.
- **Replaced hardcoded phone number and email** with imports from `@/lib/constants`. Removed the `TODO: Replace with real number` comment.

### `/src/sections/Hero.tsx`
- **Hidden the floating glassmorphism card on mobile** (`hidden sm:block`). On small screens, the card with negative positioning (`-bottom-6 -left-6`) clips outside the viewport and causes horizontal scroll. It now only appears on screens >= 640px.
- **Fixed indentation** on the `</Animate>` closing tag (was incorrectly spaced).
- **Added extra bottom padding** (`pb-20 sm:pb-24 lg:pb-32`) to accommodate the floating card on desktop without it clipping into the next section.
- **Adjusted top padding** for mobile (`py-16 sm:py-20`) to give a slightly tighter mobile hero.

### `/src/sections/WhyUs.tsx`
- **Removed `hidden sm:block` on cards 4-6.** Previously the last three "Why Us" cards were hidden on mobile, which meant mobile users only saw 3 of 6 trust signals. All 6 are now visible on every viewport. These are key trust-building elements for a new company.

### `/src/app/services/snow-removal/page.tsx`
- **Replaced all hardcoded phone numbers** (3 instances of `href="tel:+15135550123"` and 2 instances of `(513) 555-0123`) with `PHONE_NUMBER_HREF` and `PHONE_NUMBER` constants.
- **Replaced hardcoded schema phone number** with `PHONE_NUMBER_SCHEMA` constant.

### `/src/app/services/maintenance/page.tsx`
- **Changed services section background** from `bg-soft-cream` to `bg-white` to create visual separation from the hero (both were `bg-soft-cream`, making them blend into one block).

### `/src/app/about/page.tsx`
- **Changed story section background** from `bg-soft-cream` to `bg-white` to create visual separation from the hero section above it.

### `/src/app/contact/page.tsx`
- **Changed contact content section background** from `bg-soft-cream` to `bg-white` to create visual separation from the hero section.

### `/src/app/areas/page.tsx`
- **Replaced misleading map section.** The original used `about-neighborhood.jpg` (a stock photo of a house) as a faux "map." Replaced with a clean service radius information card with a location pin icon and descriptive text about the 45-minute service radius. Removed unused `Image` import.

### `/src/app/areas/[slug]/page.tsx`
- **Fixed typo in Mason neighborhood data:** "Traditionsn" corrected to "Traditions."
- **Added `PHONE_NUMBER_SCHEMA` import** and replaced hardcoded schema phone number.
- **Changed about-the-area section background** from `bg-soft-cream` to `bg-white` for visual separation from hero.

### `/src/app/snow-emergency/page.tsx`
- **Replaced all hardcoded phone numbers** (4 instances of `href="tel:+15135550123"` and 3 instances of `(513) 555-0123`) with constants from `@/lib/constants`.

---

## Issues Reviewed (No Changes Needed)

### TrustBar Component
Already returning `null`. Import removed from page.tsx. Component file left in place to avoid breaking other potential imports.

### Estate Maintenance Redirect
`/services/estate-maintenance` correctly redirects to `/services/maintenance` via Next.js `redirect()`. Working as intended.

### Contact Form Property Types
Already commercial-first with property types ordered: Office Park, Retail Center, Medical Facility, HOA, Other Commercial, Residential. Correct.

### Heading Hierarchy
Reviewed all pages. Each page has exactly one `<h1>`, with `<h2>` for sections and `<h3>` for sub-items. Correct semantic hierarchy throughout.

### Image Loading
Hero image correctly uses `priority` attribute for above-fold loading. Other images use default lazy loading. Next.js `<Image>` component used throughout with `fill` + `object-cover` pattern.

### Animation Visibility
Both `Animate` and `FadeIn` components use `opacity: 0` + `translateY(24px)` as initial state. Since they trigger on IntersectionObserver with 0.1 threshold, content becomes visible almost immediately when scrolling into view. No content is permanently hidden if JS fails since SSR renders the children normally (the styles are applied via inline `style` in useEffect).

### Footer Navigation
Footer correctly lists: Commercial Grounds, Snow & Ice Management, Hardscapes, Residential Services -- matching the updated navigation hierarchy.

### Color Usage
Consistent throughout: eucalyptus for trust/check marks, sun-ochre for CTAs and accent text, slate for body text, soft-cream for backgrounds, white for card surfaces.

### Focus-Visible Styles
Global `*:focus-visible` style in globals.css provides `outline: 2px solid var(--sun-ochre)` with `outline-offset: 2px`. Consistent and meets WCAG AA requirements.

---

## Remaining Issues (Require Real Assets)

### 1. Hero Image
`/public/images/hero-firepit.jpg` is a residential fire pit photo. For a commercial-primary company, this sends the wrong signal. The alt text has been updated to "Professional commercial grounds management" but the image itself needs replacement.

**Recommended replacement shots (in priority order):**
- A wide shot of a well-maintained commercial property (office park with clean beds, striped mowing lines)
- A snow plow clearing a commercial parking lot at dawn
- An aerial/drone shot of a property you manage

### 2. About Page Photos
`about-landscaping.jpg` and `about-neighborhood.jpg` are stock photos. Both have `TODO: REPLACE` comments. They do not actively harm credibility (they show generic landscaping/neighborhood scenes), but replacing them with real photos would significantly boost trust.

**Recommended shots:**
- Your crew working on a real job site (action shot, crew visible)
- A completed commercial property you maintain
- Equipment staged and ready (truck, plow, mowers)
- Owners on site or at a property walkthrough

### 3. Before/After Section
This section has been gracefully handled -- it shows "Portfolio Coming Soon" with a CTA instead of fake stock comparisons. This is the right approach for a new company. Replace this section with real before/after photos once you have 2-3 completed projects.

### 4. OG Image
`/public/og-image.jpg` is the same file as `apple-touch-icon.png` (492KB). Should be replaced with a proper 1200x630 branded social share image once real photography is available.

### 5. Favicon
`/public/favicon.svg` exists but should be verified it matches current brand. Consider adding a `favicon.ico` fallback for older browsers.

---

## Photography Shot List

When the client is ready for professional photography, these shots will maximize website impact:

**Priority 1 (Homepage & Service Pages):**
1. Commercial property hero shot -- clean office park or retail center grounds
2. Snow plow clearing a commercial lot at dawn/dusk
3. Crew photo -- owners and team, professional but not posed
4. Equipment lineup (truck, plow blade, mowers staged)

**Priority 2 (Service-Specific):**
5. Before/after of a grounds cleanup
6. Before/after of a hardscape installation
7. Close-up of mowing lines on a commercial lawn
8. Salt/ice treatment in progress
9. Sidewalk clearing with timestamp overlay (matches the "documented service" positioning)

**Priority 3 (About & Area Pages):**
10. Owners doing a property walkthrough with a clipboard
11. Drone shot of service area (Cincinnati skyline or suburb aerial)
12. Equipment detail shots (plow blade, spreader)

**Technical specs:** All photos should be minimum 2400px wide, landscape orientation preferred, shot in natural light. Aim for early morning golden hour for warm tones that match the brand palette.

---

## Build Verification

```
npm run build -- PASS (clean, no errors)
npm run lint -- PASS (0 errors in /src; only archive/design-reference files have pre-existing lint warnings)
```

All 28 routes generate successfully:
- 17 static pages
- 11 SSG pages (area slugs)
- 0 errors, 0 warnings in source

---

## Recommendations for Next Steps

1. **Replace placeholder phone number** in `/src/lib/constants.ts` when the real number is assigned. This single change will update the entire site.
2. **Get real photography** (see shot list above). This is the single biggest credibility gap.
3. **Add `typecheck` script** to package.json: `"typecheck": "tsc --noEmit"` for CI/CD.
4. **Consider adding a sitemap** link to the footer for SEO crawlability (sitemap.xml route already exists).
5. **Test with real mobile devices** -- the responsive code looks correct but physical device testing catches edge cases (especially the floating hero card and mobile sticky elements).
