import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Lawn & Landscape Maintenance | Cincinnati",
  description:
    "Professional lawn care and landscape maintenance for Greater Cincinnati homes. Same crew, consistent quality, reliable service. Keep your property looking its best.",
  openGraph: {
    title: "Lawn & Landscape Maintenance | Stone & Salt",
    description:
      "Professional lawn care and landscape maintenance for Greater Cincinnati homes.",
  },
};

const maintenanceServices = [
  {
    title: "Weekly Lawn Care",
    description: "Mowing, edging, and blowing. Consistent cut quality every week from the same crew who knows your property.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Spring Cleanup",
    description: "Debris removal, bed preparation, first mow, and getting your property ready for the growing season.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Fall Cleanup",
    description: "Leaf removal, final cut, bed cleanup, and winterization to protect your landscape investment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Mulch & Bed Maintenance",
    description: "Fresh mulch application, edge definition, weed management. Beds that look intentional, not neglected.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Shrub Trimming",
    description: "Proper pruning at the right time of year. Healthy, shaped plants that enhance your property.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    title: "Fertilization Programs",
    description: "Seasonal fertilization and weed control tailored to Cincinnati soil and climate conditions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const packages = [
  {
    name: "Essential",
    description: "Basic lawn care for homeowners who want reliable service without extras",
    price: "From $175/month",
    features: [
      "Weekly mowing & edging",
      "Blowing of hard surfaces",
      "Spring cleanup",
      "Fall cleanup",
    ],
    popular: false,
  },
  {
    name: "Complete",
    description: "Full-service maintenance for properties that demand attention to detail",
    price: "From $325/month",
    features: [
      "Everything in Essential",
      "Mulch refresh (annual)",
      "Shrub trimming (2x/year)",
      "Bed weed management",
      "Seasonal color rotation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "White-glove service for discerning homeowners",
    price: "From $500/month",
    features: [
      "Everything in Complete",
      "Fertilization program",
      "Aeration & overseeding",
      "Irrigation monitoring",
      "Priority scheduling",
      "Snow removal integration",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in weekly lawn care?",
    answer:
      "Weekly lawn care includes mowing at proper height for the season, string-trimming around obstacles and beds, edging along hardscapes, and blowing debris from driveways and walkways.",
  },
  {
    question: "Do I get the same crew every time?",
    answer:
      "Yes. Consistency is core to our approach. Your property is assigned to a specific crew who learns your preferences and maintains the same standards every visit.",
  },
  {
    question: "When does the season start and end?",
    answer:
      "In Greater Cincinnati, regular service typically runs mid-March through mid-November. Fall cleanup extends into December depending on leaf drop. We adjust based on actual conditions.",
  },
  {
    question: "Can I bundle this with snow removal?",
    answer:
      "Absolutely. Many clients appreciate having one vendor for grounds and snow. You get priority scheduling for snow service and simplified billing.",
  },
  {
    question: "How do you handle billing?",
    answer:
      "Monthly billing with consistent amounts — no surprise invoices. You know what you're paying each month, and we deliver consistent service.",
  },
  {
    question: "What if I need extra work done?",
    answer:
      "One-off requests are easy. Need extra cleanup before a party? Additional plantings? Just let us know. We handle most requests without formal quotes.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Lawn & Landscape
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Same crew. Every week. Finally.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Same crew. Same standards. Every visit. Professional lawn care and landscape
              maintenance for Greater Cincinnati homeowners who expect more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Maintenance Quote
              </Button>
              <a
                href="tel:+15135550123"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] text-white/80 font-semibold hover:text-sun-ochre transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md"
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

      {/* Services */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              What&apos;s Included
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Maintenance Services
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Everything your property needs to look its best, delivered by a crew who knows your
              standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-eucalyptus/20 flex items-center justify-center text-eucalyptus mb-4">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Pricing
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Service Packages
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Straightforward pricing, no surprises. Choose what works for your property and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 lg:p-8 ${
                  pkg.popular
                    ? "bg-slate text-white ring-4 ring-sun-ochre shadow-card-hover"
                    : "bg-soft-cream"
                }`}
              >
                {pkg.popular && (
                  <p className="text-sun-ochre text-xs font-semibold uppercase tracking-wide mb-2">
                    Most Popular
                  </p>
                )}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl">
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm ${pkg.popular ? "text-white/70" : "text-slate/70"}`}>
                  {pkg.description}
                </p>
                <p className={`mt-4 text-2xl font-bold ${pkg.popular ? "text-sun-ochre" : "text-slate"}`}>
                  {pkg.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-eucalyptus" : "text-sun-ochre"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${pkg.popular ? "text-white/90" : "text-slate/70"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={pkg.popular ? "primary" : "outline"}
                    className={`w-full justify-center ${
                      pkg.popular ? "bg-white text-slate hover:bg-white/90" : ""
                    }`}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-slate/60 text-sm">
            Prices shown are starting points for typical ¼-acre residential properties.
            Actual pricing based on property size, complexity, and specific needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Why choose Stone & Salt?
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              The same crew servicing your property every time. They learn your preferences, maintain
              consistent standards, and take ownership of results. That&apos;s the difference between
              a vendor and a partner.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Same Crew", desc: "Your assigned team knows your property inside out" },
              { title: "Consistent Quality", desc: "Same standards, same results, every visit" },
              { title: "Clear Communication", desc: "Easy to reach when you need us" },
              { title: "Year-Round Partner", desc: "Maintenance, hardscapes, and snow — one vendor" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-card text-center">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate/70">{item.desc}</p>
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
        title="Ready to experience consistent service?"
        description="Tell us about your property and we'll recommend the right maintenance package. Free consultations — we're adding limited new clients for spring."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Lawn & Landscape Maintenance",
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
              "Professional lawn care and landscape maintenance for Greater Cincinnati homes.",
            serviceType: "Lawn Care",
          }),
        }}
      />
    </>
  );
}
