# Stone & Salt Website

Greater Cincinnati's year-round outdoor partner. Professional landscaping, hardscapes, grounds maintenance, and snow removal.

**Domain**: stoneandsaltohio.com

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Deploy to Vercel

### Option 1: One-Click Deploy
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Vercel will auto-detect Next.js and deploy

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── areas/             # Service areas pages
│   ├── services/          # Service pages
│   │   ├── commercial-grounds/
│   │   ├── snow-removal/
│   │   ├── hardscapes/
│   │   └── maintenance/
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── globals.css        # Global styles + brand colors
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # Robots.txt config
├── components/            # Reusable UI components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # Button component
│   └── ContactForm.tsx    # Contact form component
├── sections/              # Page sections
│   ├── Hero.tsx           # Homepage hero
│   ├── Services.tsx       # Services overview
│   ├── WhyUs.tsx          # Why choose us section
│   ├── Areas.tsx          # Service areas section
│   ├── Testimonials.tsx   # Client testimonials
│   └── CTA.tsx            # Call-to-action sections
└── lib/                   # Utilities (currently empty)
```

## Brand Colors

```css
--slate: #2A2A2A       /* Primary text, dark backgrounds */
--eucalyptus: #B3C3AD  /* Accent, success states */
--sun-ochre: #D5A056   /* CTAs, highlights */
--soft-cream: #F6F4F1  /* Background */
```

## Fonts

- **Headlines**: Montserrat Bold
- **Body**: Open Sans Regular

Both are loaded via Google Fonts in the layout.

## Customization Needed

### Before Launch

1. **Phone Number**: Replace `(513) 555-0123` with real number
   - Search and replace in: Header.tsx, Footer.tsx, all service pages, contact page

2. **Email**: Update `hello@stoneandsaltohio.com` if different
   - Found in: Footer.tsx, contact page, legal pages

3. **Photos**: Replace placeholder images
   - Hero section image
   - Gallery images on hardscapes page
   - Team/owner photo on about page
   - Service area map

4. **Testimonials**: Replace [PLACEHOLDER] text with real quotes
   - Found in: sections/Testimonials.tsx

5. **Google Analytics**: Add tracking
   - Create a `src/app/analytics.tsx` component or add to layout

### Optional Enhancements

- Add individual area pages (e.g., `/areas/liberty-township`)
- Connect contact form to email service (Resend, SendGrid, etc.)
- Add Google Maps embed to service areas page
- Add blog for SEO content
- Connect to CRM (HubSpot, Jobber)

## Contact Form Integration

The contact form is currently a client-side demo. To make it functional:

### Option 1: Vercel Serverless Function
Create `/src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email via Resend, SendGrid, etc.
  // Or push to CRM

  return NextResponse.json({ success: true });
}
```

### Option 2: Formspree
Update ContactForm.tsx to submit to a Formspree endpoint.

### Option 3: Email Service
Integrate with Resend, SendGrid, or similar to send form submissions to your email.

## SEO

The site includes:
- Dynamic meta titles and descriptions per page
- Open Graph tags for social sharing
- LocalBusiness JSON-LD schema on homepage
- Service schema on service pages
- Auto-generated sitemap.xml
- robots.txt

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Deployment**: Vercel

## License

Private - Stone & Salt
