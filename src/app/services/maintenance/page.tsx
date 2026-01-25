import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Lawn Care & Maintenance | Cincinnati",
  description:
    "Professional lawn care and grounds maintenance for Cincinnati homeowners. Consistent service, same crew, results you can count on.",
  openGraph: {
    title: "Lawn Care & Maintenance | Stone & Salt",
    description:
      "Professional lawn care and grounds maintenance for Cincinnati homeowners.",
  },
};

const services = [
  {
    title: "Lawn Mowing",
    description: "Weekly or bi-weekly mowing with clean edges and clippings managed. Your lawn looks sharp, every visit.",
  },
  {
    title: "Fertilization Programs",
    description: "Seasonal fertilization and weed control to keep your lawn healthy and green through the growing season.",
  },
  {
    title: "Mulch & Bed Maintenance",
    description: "Annual mulch refresh, bed edging, and weed management to keep landscape beds looking crisp.",
  },
  {
    title: "Shrub & Hedge Trimming",
    description: "Seasonal trimming to maintain shape and health. We know when to prune and how much to take.",
  },
  {
    title: "Spring & Fall Cleanup",
    description: "Comprehensive seasonal cleanup including leaf removal, bed prep, and debris clearing.",
  },
  {
    title: "Irrigation Monitoring",
    description: "Seasonal startup, winterization, and routine checks to keep your system running efficiently.",
  },
];

const packages = [
  {
    name: "Essential",
    price: "$275",
    frequency: "/month",
    description: "Core maintenance for properties up to 1/2 acre",
    features: [
      "Weekly mowing (April-October)",
      "Edge trimming",
      "Spring & fall cleanup",
      "Basic weed control",
    ],
    popular: false,
  },
  {
    name: "Complete",
    price: "$425",
    frequency: "/month",
    description: "Full-service care for properties up to 1 acre",
    features: [
      "Everything in Essential",
      "Fertilization program (5 applications)",
      "Mulch refresh (annual)",
      "Shrub trimming (2x/year)",
      "Bed maintenance",
    ],
    popular: true,
  },
  {
    name: "Estate",
    price: "Custom",
    frequency: "pricing",
    description: "Comprehensive care for larger properties",
    features: [
      "Everything in Complete",
      "Custom service frequency",
      "Irrigation management",
      "Snow removal integration",
      "Priority scheduling",
      "Dedicated crew assignment",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Do I get the same crew every time?",
    answer:
      "Yes. Crew consistency is important to us. You'll see the same faces on your property, and they'll learn your property's specific needs. If there's ever a crew change, we'll let you know.",
  },
  {
    question: "What day will you come?",
    answer:
      "We schedule consistent service days for each property. You'll know which day to expect us, and we stick to that schedule. Weather delays are communicated proactively.",
  },
  {
    question: "What if I'm not happy with a service visit?",
    answer:
      "Call us. We'll send a crew back within 48 hours to address any issues. Our goal is for you to be satisfied with every visit, not just most of them.",
  },
  {
    question: "Can I add or remove services?",
    answer:
      "Absolutely. We build maintenance programs around what you actually need. Start with the basics and add services over time, or customize from day one.",
  },
  {
    question: "Do you offer one-time services?",
    answer:
      "We focus on maintenance relationships rather than one-off jobs. However, we do offer seasonal cleanup services for properties that may become ongoing clients.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Residential Maintenance
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Your property, treated like ours.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Professional lawn care and grounds maintenance with the consistency and attention your
              home deserves. Same crew, same standards, every visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
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

      {/* Services */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Maintenance Services
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Everything your property needs to look its best, delivered by a team that takes pride
              in their work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Maintenance Packages
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Clear pricing, predictable billing. Pick a package or let us customize one for your
              property.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-slate text-white ring-2 ring-sun-ochre"
                    : "bg-soft-cream"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-sun-ochre text-white rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl">
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className={pkg.popular ? "text-white/70" : "text-slate/70"}>
                    {pkg.frequency}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${pkg.popular ? "text-white/70" : "text-slate/70"}`}>
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${
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
                      <span className={pkg.popular ? "text-white/90" : "text-slate/70"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={pkg.popular ? "primary" : "outline"}
                  className="w-full justify-center mt-8"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Maintenance is a relationship, not a transaction.
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              Anyone can mow a lawn. The difference is consistency, attention to detail, and
              actually caring about the result. Our maintenance clients aren&apos;t just accounts
              — they&apos;re properties we take pride in.
            </p>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              When you see our truck pull up, you know exactly what you&apos;re getting: the same
              crew who knows your property, the same standards every visit, and someone who answers
              when you call.
            </p>
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
        title="Ready for consistent care?"
        description="Get a customized maintenance quote for your property. We'll build a program that fits your needs and budget."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Lawn Care & Maintenance",
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
              "Professional lawn care and grounds maintenance for Cincinnati homeowners.",
            serviceType: "Lawn Maintenance",
          }),
        }}
      />
    </>
  );
}
