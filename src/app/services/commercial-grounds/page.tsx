import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";
import { PHONE_NUMBER, PHONE_NUMBER_HREF, PHONE_NUMBER_SCHEMA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Grounds Management | Cincinnati",
  description:
    "Year-round grounds maintenance for Cincinnati office parks and retail centers. Annual contracts $12K-$60K. Documented service, 4-hour response.",
  openGraph: {
    title: "Commercial Grounds Management | Stone & Salt",
    description:
      "Year-round grounds maintenance for office parks and commercial properties in Greater Cincinnati.",
  },
};

const benefits = [
  {
    title: "Documented Service for Liability Protection",
    description:
      "Every service visit is logged with GPS coordinates, timestamps, and photos. When a tenant files a slip-and-fall claim or an insurance company requests proof of maintenance, your records are ready. We carry $2M in general liability coverage, and your property can be added as additional insured.",
  },
  {
    title: "Fixed Annual Pricing",
    description:
      "Your grounds management cost is the same every month -- January through December. Annual contracts range from $12,000 to $60,000 depending on property size and service scope. No per-event surprises. No seasonal renegotiation. One line item in your annual budget.",
  },
  {
    title: "Single-Vendor Year-Round Management",
    description:
      "Grounds maintenance from March through November. Snow and ice management from November through March. Same team. Same standards. No handoffs between seasonal contractors. No gaps in December when the mowing crew has gone home and the snow crew has not started yet.",
  },
];

const groundsServices = [
  "Mowing and edging (weekly or bi-weekly based on contract)",
  "Seasonal bed maintenance and mulching",
  "Spring and fall cleanup",
  "Shrub and hedge trimming",
  "Weed control and fertilization",
  "Irrigation monitoring (where applicable)",
  "Parking lot and sidewalk maintenance",
  "Trash and debris removal",
];

const snowServices = [
  "Lot plowing at 2-inch trigger (customizable)",
  "Sidewalk clearing before business hours",
  "Salt and ice melt application",
  "Pre-treatment before forecasted events",
  "GPS-documented service with timestamps",
  "24/7 emergency response for contract clients",
];

const tiers = [
  {
    name: "Standard",
    range: "$12,000-25,000/year",
    visits: "28 scheduled visits/season",
    features: [
      "28 mowing visits (approx. weekly, April-October)",
      "Seasonal cleanup (2x: spring + fall)",
      "Annual mulch application",
      "Monthly bed weeding",
      "Edging, trimming, and blowing each visit",
      "Snow removal (seasonal contract included)",
    ],
    exclusions: [
      "Irrigation repair",
      "Tree pruning above 10 ft",
      "Pest/disease treatment",
    ],
  },
  {
    name: "Premium",
    range: "$25,000-45,000/year",
    visits: "32 scheduled visits/season",
    features: [
      "32 mowing visits (extended season: late March-mid November)",
      "Seasonal cleanup (4x per year)",
      "Mulch application + mid-season refresh",
      "Bi-monthly shrub/hedge trimming",
      "Monthly property condition report with photos",
      "Priority scheduling (serviced before 10:00 AM)",
      "Snow removal (seasonal contract included)",
    ],
    exclusions: [
      "Irrigation repair (monitoring included)",
      "Tree pruning above 10 ft",
      "Pest/disease treatment",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    range: "$45,000-60,000/year",
    visits: "32+ visits with dedicated crew",
    features: [
      "Everything in Premium, plus:",
      "Dedicated crew assignment (same crew every visit)",
      "Weekly property condition report",
      "Quarterly on-site review meeting",
      "Irrigation monitoring + seasonal activation/winterization",
      "Annual landscape enhancement recommendation",
      "24-hour emergency storm response",
      "Named account manager with direct cell",
    ],
    exclusions: [
      "Irrigation repair (billed separately)",
      "Landscape design/new installation (quoted separately)",
    ],
  },
];

const process = [
  {
    step: "1",
    title: "Site Assessment",
    description:
      "We walk your property and assess scope, access points, problem areas, and seasonal requirements. Takes 30-45 minutes. No cost. No obligation.",
  },
  {
    step: "2",
    title: "Custom Proposal",
    description:
      "Within 48-72 hours, you receive a detailed proposal with fixed annual pricing, service schedule, and contract terms. No hidden fees.",
  },
  {
    step: "3",
    title: "Contract & Onboarding",
    description:
      "Sign the agreement and we schedule an onboarding walkthrough with your on-site team. We document property specifics, access procedures, and communication preferences.",
  },
  {
    step: "4",
    title: "Year-Round Service",
    description:
      "Your property is maintained to contract specifications with documented service logs available on request. Monthly invoicing. Annual review to adjust scope if needed.",
  },
];

const trustSignals = [
  "$2M general liability insurance (your property named as additional insured)",
  "GPS-tracked, timestamped service documentation",
  "4-hour response guarantee during business hours",
  "Seasonal contracts with fixed monthly billing",
  "Direct owner access -- not a call center",
];

export default function CommercialGroundsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Commercial Grounds Management
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              Your property managed year-round. One vendor. One contract. Documented.
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Stone &amp; Salt provides integrated grounds maintenance and snow removal for
              commercial properties across Greater Cincinnati. Annual contracts. Fixed budgets.
              Every visit logged.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request Site Assessment
              </Button>
              <a
                href={PHONE_NUMBER_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] text-slate/70 font-semibold hover:text-sun-ochre transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-soft-cream rounded-2xl p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16 lg:py-24 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Year-Round Grounds Services
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate mb-6">
                Complete grounds care. Nothing falls through the cracks.
              </h2>
              <ul className="space-y-3">
                {groundsServices.map((item) => (
                  <li key={item} className="flex items-center gap-3 min-h-[32px]">
                    <svg className="w-5 h-5 text-eucalyptus flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Integrated Snow &amp; Ice Services
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate mb-6">
                Same team. Same standards. Winter covered.
              </h2>
              <ul className="space-y-3">
                {snowServices.map((item) => (
                  <li key={item} className="flex items-center gap-3 min-h-[32px]">
                    <svg className="w-5 h-5 text-eucalyptus flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Tiers */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Contract Tiers
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Predictable Annual Pricing
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              All tiers include: $2M liability coverage, GPS-documented service, 4-hour response guarantee, direct owner access. Multi-year agreements available with annual escalation caps -- ask about 2- and 3-year terms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 lg:p-8 ${
                  tier.popular
                    ? "bg-slate text-white ring-4 ring-sun-ochre shadow-card-hover"
                    : "bg-soft-cream"
                }`}
              >
                {tier.popular && (
                  <p className="text-sun-ochre text-xs font-semibold uppercase tracking-wide mb-2">
                    Most Popular
                  </p>
                )}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl">
                  {tier.name}
                </h3>
                <p className={`mt-2 text-lg font-semibold ${tier.popular ? "text-eucalyptus" : "text-sun-ochre"}`}>
                  {tier.range}
                </p>
                <p className={`mt-1 text-sm font-medium ${tier.popular ? "text-white/70" : "text-slate/60"}`}>
                  {tier.visits}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-eucalyptus" : "text-sun-ochre"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${tier.popular ? "text-white/90" : "text-slate/70"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.exclusions && tier.exclusions.length > 0 && (
                  <div className={`mt-4 pt-4 border-t ${tier.popular ? "border-white/10" : "border-slate/10"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${tier.popular ? "text-white/50" : "text-slate/40"}`}>
                      Not Included
                    </p>
                    <ul className="space-y-1.5">
                      {tier.exclusions.map((exclusion) => (
                        <li key={exclusion} className="flex items-start gap-2">
                          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.popular ? "text-white/30" : "text-slate/30"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className={`text-xs ${tier.popular ? "text-white/50" : "text-slate/50"}`}>{exclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={tier.popular ? "primary" : "outline"}
                    className={`w-full justify-center ${tier.popular ? "bg-white text-slate hover:bg-white/90" : ""}`}
                  >
                    Request Site Assessment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              How We Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              From Assessment to Year-Round Service
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-sun-ochre text-white flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="border-b border-slate/10 pb-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                  We already have a vendor. Why would we switch?
                </h3>
                <p className="mt-3 text-slate/70 leading-relaxed">
                  Most property managers we talk to are not unhappy with their mowing -- they are frustrated
                  by the gaps. The landscaper disappears in November. The snow contractor starts late in
                  December. Nobody owns the transition. We solve this with a single year-round contract
                  that covers grounds maintenance and snow removal under one team, one invoice, and one
                  point of accountability. If your current vendor already does that reliably and documents
                  every visit, you may not need us. But if you are coordinating multiple seasonal vendors,
                  that is exactly the problem we built this company to fix.
                </p>
              </div>
              <div className="border-b border-slate/10 pb-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                  How do your prices adjust year over year?
                </h3>
                <p className="mt-3 text-slate/70 leading-relaxed">
                  Annual contracts include a scope review each year. If your property needs have not changed,
                  price adjustments are capped at a pre-agreed percentage written into your contract --
                  typically 3-5% to account for labor and material cost changes. Multi-year agreements (2-
                  or 3-year terms) lock in escalation caps for the full term, so you know your maximum cost
                  increase before you sign. No surprise renegotiations.
                </p>
              </div>
              <div className="border-b border-slate/10 pb-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                  What is the difference between 28 and 32 visits?
                </h3>
                <p className="mt-3 text-slate/70 leading-relaxed">
                  Our Standard tier includes 28 scheduled visits, covering weekly mowing from April through
                  October plus spring and fall cleanups. The Premium tier includes 32 visits with an extended
                  season starting in late March and running through mid-November -- plus more frequent
                  cleanups, bi-monthly hedge trimming, and monthly condition reports with photos. The right
                  choice depends on your property type: a Class A office park that needs to look sharp for
                  tenant tours year-round typically needs the extended season. A warehouse park with simpler
                  grounds can do well with the Standard schedule. We will recommend the right fit during
                  your site assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 lg:py-24 bg-slate">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white mb-8">
              What You Can Count On
            </h2>
            <ul className="space-y-4 text-left">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-eucalyptus flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Complete Property Solutions
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              Need more than grounds management? We also provide site improvements and snow removal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/services/hardscapes" variant="secondary">
                View Hardscapes & Site Improvements
              </Button>
              <Button href="/services/snow-removal" variant="outline">
                Learn About Snow Removal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let us walk your property."
        description="Schedule a no-obligation site assessment. You will receive a custom proposal with fixed annual pricing within 72 hours."
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://stoneandsaltohio.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://stoneandsaltohio.com/services/commercial-grounds",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Commercial Grounds Management",
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Grounds Management",
            provider: {
              "@type": "LocalBusiness",
              name: "Stone & Salt",
              telephone: PHONE_NUMBER_SCHEMA,
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 39.3545,
                longitude: -84.3944,
              },
              geoRadius: "45 miles",
            },
            description:
              "Year-round grounds maintenance for office parks, retail centers, and commercial properties in Greater Cincinnati. Annual contracts from $12K-$60K.",
            serviceType: "Commercial Grounds Management",
          }),
        }}
      />
    </>
  );
}
