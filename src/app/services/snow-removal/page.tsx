import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Snow & Ice Removal | Cincinnati",
  description:
    "Reliable commercial and residential snow removal in Greater Cincinnati. 24/7 response, professional equipment, and the reliability your property needs.",
  openGraph: {
    title: "Snow & Ice Removal | Stone & Salt",
    description:
      "Reliable commercial and residential snow removal in Greater Cincinnati.",
  },
};

const commercialServices = [
  "Parking lot plowing & salting",
  "Sidewalk clearing",
  "GPS-tracked, timestamped documentation",
  "24/7 emergency response",
  "Pre-treatment & post-storm services",
  "Seasonal contracts with guaranteed coverage",
];

const residentialServices = [
  "Driveway clearing",
  "Walkway, steps & porch",
  "Ice melt application",
  "Priority scheduling",
  "Wake up to a clear driveway",
  "Seasonal or per-push pricing",
];

const trustSignals = [
  {
    title: "Fully Insured",
    description: "General liability, workers' comp, and auto coverage. Your property can be added as additional insured.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Documented Service",
    description: "GPS tracking, timestamped photos, and detailed service logs for every visit. Critical for slip-and-fall liability protection.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Response Guarantee",
    description: "Plowing begins at 2\" accumulation. Sidewalks cleared before business hours. Your lot is ready when you arrive.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Local & Experienced",
    description: "Based in Greater Cincinnati. We know these roads, these storms, and what your property needs to stay safe.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What's your response time during snow events?",
    answer:
      "Commercial properties are serviced based on contract specifications — typically during or immediately after snowfall. Residential properties on seasonal contracts receive priority scheduling with same-day service for most events.",
  },
  {
    question: "Do you offer seasonal contracts or per-push pricing?",
    answer:
      "Both. Commercial clients typically prefer seasonal contracts for budget predictability. Residential clients can choose seasonal ($550-$850) or per-push pricing. We'll recommend what makes sense for your situation.",
  },
  {
    question: "What triggers a service visit?",
    answer:
      "Standard commercial contracts trigger at 2\" accumulation, though we customize trigger points based on your needs. Residential contracts typically trigger at 2-3\" accumulation.",
  },
  {
    question: "Do you provide documentation for liability purposes?",
    answer:
      "Yes. Commercial clients receive timestamped service documentation including photos, arrival/departure times, and materials used. This is critical for slip-and-fall liability protection.",
  },
  {
    question: "How do I sign up for next winter?",
    answer:
      "We begin booking snow contracts in September. Commercial contracts are typically finalized by October 31. Residential spots fill quickly — early booking ensures you're covered.",
  },
];

export default function SnowRemovalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Snow & Ice Services
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Your lot cleared before your employees arrive.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Reliable snow and ice management for Greater Cincinnati. Fully insured, GPS-documented,
              and ready 24/7. The professional service property managers trust.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Snow Contract Quote
              </Button>
              <a
                href="tel:+15135550123"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold hover:text-sun-ochre transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (513) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-6 bg-eucalyptus/20 border-y border-eucalyptus/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-eucalyptus/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate">24/7 Snow Emergency Line</p>
                <p className="text-sm text-slate/70">Contract clients: Call anytime during snow events</p>
              </div>
            </div>
            <a
              href="tel:+15135550123"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate text-white font-semibold rounded-md hover:bg-slate/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (513) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals - What Property Managers Care About */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              What Property Managers Need to Know
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              We understand what&apos;s at stake. Slip-and-fall liability, tenant complaints, insurance requirements.
              Here&apos;s how we protect your property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-eucalyptus/20 flex items-center justify-center text-eucalyptus mb-4">
                  {signal.icon}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm text-slate/70 leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial vs Residential */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Commercial & Residential Snow Services
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Different properties, different needs. We tailor our approach to match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Commercial */}
            <div className="bg-slate rounded-2xl p-8 text-white">
              <p className="text-eucalyptus text-sm font-semibold uppercase tracking-wide mb-2">For Property Managers</p>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-2">
                Commercial Snow Management
              </h3>
              <p className="text-white/70 mb-6">
                Office parks, retail centers, HOAs, and medical facilities. Cleared before your tenants arrive, documented for your records.
              </p>
              <ul className="space-y-3 mb-8">
                {commercialServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-eucalyptus flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-white/60 mb-4">
                Seasonal contracts from $5,000 - $25,000 depending on lot size
              </p>
              <Button href="/contact" className="w-full justify-center">
                Request Commercial Quote
              </Button>
            </div>

            {/* Residential */}
            <div className="bg-eucalyptus/10 rounded-2xl p-8">
              <p className="text-sun-ochre text-sm font-semibold uppercase tracking-wide mb-2">For Homeowners</p>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl text-slate mb-2">
                Wake Up to a Clear Driveway
              </h3>
              <p className="text-slate/70 mb-6">
                No more early mornings with a shovel. Protect your family from slips and falls with professional snow removal.
              </p>
              <ul className="space-y-3 mb-8">
                {residentialServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sun-ochre flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate">{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate/60 mb-4">
                Seasonal contracts from $550 - $850 for most residential properties
              </p>
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Request Residential Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Landscaping */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
              Year-Round Service
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              One vendor. Every season.
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              Snow removal clients get priority consideration for landscaping and grounds
              maintenance. One relationship that covers your property year-round. No more scrambling
              to find contractors each season.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/services/commercial-grounds">Commercial Grounds</Button>
              <Button href="/services/maintenance" variant="outline">
                Residential Maintenance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate/10 pb-8">
                  <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-slate/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Need snow service this season?"
        description="We're still accepting commercial and residential contracts for the current winter season. Contact us for availability and pricing."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Snow & Ice Removal",
            provider: {
              "@type": "LocalBusiness",
              name: "Stone & Salt",
              telephone: "+1-513-555-0123",
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
              "Reliable commercial and residential snow removal in Greater Cincinnati.",
            serviceType: "Snow Removal",
          }),
        }}
      />
    </>
  );
}
