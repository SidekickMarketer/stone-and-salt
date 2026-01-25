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
  "Parking lot plowing",
  "Sidewalk clearing",
  "Salt and ice management",
  "Emergency response",
  "Documented service records",
  "Seasonal contracts",
];

const residentialServices = [
  "Driveway clearing",
  "Walkway and steps",
  "Salt application",
  "Seasonal contracts",
  "Priority scheduling",
  "Same-day response",
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
              Your lot cleared before you get there.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Reliable snow and ice management for Greater Cincinnati. 24/7 response, professional
              equipment, and the documentation your property needs.
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

      {/* Value Prop */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sun-ochre/10 flex items-center justify-center text-sun-ochre mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                24/7 Response
              </h3>
              <p className="mt-3 text-slate/70">
                Snow doesn&apos;t wait for business hours. Neither do we. Our crews are ready when
                winter weather hits, day or night.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sun-ochre/10 flex items-center justify-center text-sun-ochre mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                Documented Service
              </h3>
              <p className="mt-3 text-slate/70">
                Timestamped photos, service records, and material logs. The documentation you need
                for liability protection.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sun-ochre/10 flex items-center justify-center text-sun-ochre mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                Predictable Pricing
              </h3>
              <p className="mt-3 text-slate/70">
                Seasonal contracts mean no budget surprises. Know your winter costs upfront, not
                after the last storm.
              </p>
            </div>
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
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-2">
                Commercial Properties
              </h3>
              <p className="text-white/70 mb-6">
                Parking lots, sidewalks, and entrances cleared to keep your business running.
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
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl text-slate mb-2">
                Residential Properties
              </h3>
              <p className="text-slate/70 mb-6">
                Driveways and walkways cleared so you can get on with your day.
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
        title="Get ready for winter"
        description="Snow contracts book up fast. Lock in your spot now and have peace of mind when the first flakes fall."
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
