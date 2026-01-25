import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Commercial Grounds Maintenance | Cincinnati",
  description:
    "Professional commercial grounds maintenance for Cincinnati businesses, HOAs, and property managers. Consistent quality, one vendor, year-round service.",
  openGraph: {
    title: "Commercial Grounds Maintenance | Stone & Salt",
    description:
      "Professional commercial grounds maintenance for Cincinnati businesses, HOAs, and property managers.",
  },
};

const services = [
  {
    title: "Corporate Campuses",
    description:
      "First impressions matter. We keep corporate properties looking sharp with consistent, professional grounds care that reflects your company's standards.",
  },
  {
    title: "Office Parks",
    description:
      "Multi-building properties need reliable, coordinated care. One vendor, one point of contact, consistent results across your entire portfolio.",
  },
  {
    title: "HOA & Condominium Communities",
    description:
      "Common areas that make residents proud. We understand board expectations and deliver documented service you can report on.",
  },
  {
    title: "Retail Centers",
    description:
      "Customer-facing properties demand attention to detail. Clean, inviting grounds that support your tenants' success.",
  },
  {
    title: "Medical Facilities",
    description:
      "Healthcare properties require reliable, professional care. We maintain grounds that reflect the quality of care inside.",
  },
  {
    title: "Industrial Properties",
    description:
      "Practical, efficient grounds care for warehouses, distribution centers, and manufacturing facilities.",
  },
];

const included = [
  "Lawn mowing and edging",
  "Seasonal fertilization programs",
  "Mulch and bed maintenance",
  "Shrub and hedge trimming",
  "Seasonal color rotations",
  "Leaf removal and fall cleanup",
  "Spring cleanup and preparation",
  "Irrigation monitoring",
  "Snow removal integration",
  "Monthly property walks",
];

const professionalStandards = [
  {
    title: "Uniformed Crews",
    description: "Branded trucks and uniformed crew members. Your tenants will always know who we are.",
  },
  {
    title: "Consistent Teams",
    description: "The same crew services your property every visit. They know your property and your expectations.",
  },
  {
    title: "Documented Service",
    description: "Service logs, photos, and regular reports. You'll always know what was done and when.",
  },
  {
    title: "Responsive Communication",
    description: "Direct line to your account manager. Calls returned within 4 hours, issues addressed immediately.",
  },
];

const faqs = [
  {
    question: "How is commercial pricing structured?",
    answer:
      "We provide annual contracts with predictable monthly billing. No surprise invoices. Your budget stays consistent, and service levels stay high. Contracts typically range from $12,000 to $60,000 annually depending on property size and service frequency.",
  },
  {
    question: "Can you handle multiple properties?",
    answer:
      "Yes. Many of our clients manage portfolios of properties across Greater Cincinnati. You get one point of contact, one invoice, and consistent service standards across all locations.",
  },
  {
    question: "What happens in winter?",
    answer:
      "Unlike companies that disappear after leaf season, we offer integrated snow and ice management. Same vendor, same reliability, year-round. Your grounds contract and snow contract work together seamlessly.",
  },
  {
    question: "How do you handle service documentation?",
    answer:
      "We provide regular service reports and are happy to join board meetings or provide documentation for property management reporting. You'll always know what was done and when.",
  },
  {
    question: "What's your response time for issues?",
    answer:
      "We respond to all service inquiries within 4 hours during business hours. For urgent issues, you have direct access to your account manager's cell phone.",
  },
];

export default function CommercialGroundsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Commercial Services
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stop chasing your landscaping company.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              One vendor. Consistent quality. Year-round reliability. Serving office parks, retail centers,
              and HOAs across Blue Ash, Mason, West Chester, and Greater Cincinnati.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
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

      {/* Problem/Solution */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
                Managing vendors shouldn&apos;t be your full-time job.
              </h2>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed">
                You know the drill. The landscaping crew shows up when they feel like it. Quality
                varies depending on who&apos;s on the truck. Calls go to voicemail. And when winter
                hits, you&apos;re scrambling for a separate snow contractor.
              </p>
              <p className="mt-4 text-lg text-slate/70 leading-relaxed">
                Stone & Salt handles your grounds differently. One relationship. One point of
                contact. One vendor who actually answers when you call. Your property gets the same
                crew, same standards, every visit.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-card">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-slate mb-6">
                What Property Managers Tell Us
              </h3>
              <ul className="space-y-4">
                {[
                  "\"I need a vendor I don't have to manage.\"",
                  "\"Coordinating landscaping and snow is a headache.\"",
                  "\"Quality is inconsistent — different crew every time.\"",
                  "\"I can never get anyone on the phone.\"",
                  "\"Budget surprises kill me.\"",
                ].map((quote, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-sun-ochre flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate/70">{quote}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate font-semibold">
                Sound familiar? We built Stone & Salt to solve exactly this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Who We Serve
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Properties We Serve
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              From corporate headquarters to community common areas, we tailor our approach to your
              property&apos;s specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-xl bg-soft-cream hover:bg-eucalyptus/10 transition-colors duration-300">
                <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Comprehensive Care
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
                Complete grounds care. Nothing falls through the cracks.
              </h2>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed">
                Our commercial maintenance contracts cover everything your property needs to look
                professional year-round. And if it&apos;s not in the contract, we&apos;ll tell you —
                no surprise bills.
              </p>
              <div className="mt-8">
                <Button href="/contact">Get a Free Quote</Button>
              </div>
            </div>
            <div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 min-h-[44px]">
                    <svg
                      className="w-5 h-5 text-eucalyptus flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 lg:py-24 bg-slate">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Our Standards
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
              Professional Standards, Every Visit
            </h2>
            <p className="mt-4 text-lg text-white/70">
              The difference between a vendor and a partner is in the details.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalStandards.map((standard) => (
              <div key={standard.title} className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg">
                  {standard.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {standard.description}
                </p>
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
        title="Get your commercial grounds quote"
        description="We'll walk your property and build a customized plan that fits your needs and budget. Response within 4 hours — limited 2024 contract slots available."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Grounds Maintenance",
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
              "Professional commercial grounds maintenance for Cincinnati businesses, HOAs, and property managers.",
            serviceType: "Commercial Landscaping",
          }),
        }}
      />
    </>
  );
}
