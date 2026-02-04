import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Hardscapes & Patios | Cincinnati",
  description:
    "Custom hardscape design and installation for Greater Cincinnati homes. Patios, walkways, retaining walls, outdoor kitchens, and fire pits. Built right the first time.",
  openGraph: {
    title: "Hardscapes & Patios | Stone & Salt",
    description:
      "Custom hardscape design and installation for Greater Cincinnati homes.",
  },
};

const services = [
  {
    title: "Paver Patios",
    description:
      "Transform your backyard into a true outdoor living space. From simple entertaining areas to elaborate multi-level designs.",
    priceRange: "$8,000 - $35,000+",
  },
  {
    title: "Walkways & Paths",
    description:
      "Connect your spaces with beautiful, functional walkways. From front entrance paths to garden trails.",
    priceRange: "$2,500 - $12,000",
  },
  {
    title: "Retaining Walls",
    description:
      "Solve drainage issues and create usable space on sloped properties. Functional engineering meets aesthetic design.",
    priceRange: "$5,000 - $25,000+",
  },
  {
    title: "Outdoor Kitchens",
    description:
      "Full outdoor cooking spaces with built-in grills, counters, and storage. Entertain in style.",
    priceRange: "$15,000 - $50,000+",
  },
  {
    title: "Fire Pits & Fireplaces",
    description:
      "Extend your outdoor season with a custom fire feature. Wood-burning or gas options available.",
    priceRange: "$3,500 - $20,000",
  },
  {
    title: "Driveways",
    description:
      "Make an impression from the street. Paver driveways that outperform and outlast traditional concrete.",
    priceRange: "$15,000 - $40,000+",
  },
];

const process = [
  {
    step: "1",
    title: "Initial Consultation",
    description:
      "We walk your property together. You share your vision, we share ideas and identify what's possible. No charge, no obligation.",
  },
  {
    step: "2",
    title: "Design & Proposal",
    description:
      "We create a detailed proposal with scope, timeline, and fixed pricing. You know exactly what you're getting before we start.",
  },
  {
    step: "3",
    title: "Construction",
    description:
      "Our crew executes the plan. Same team from start to finish, daily cleanup, clear communication throughout.",
  },
  {
    step: "4",
    title: "Walkthrough & Warranty",
    description:
      "Final walkthrough together. We document everything and provide warranty information. Your satisfaction is guaranteed.",
  },
];

const faqs = [
  {
    question: "How long does a typical patio project take?",
    answer:
      "Most patio projects take 5-10 days depending on size and complexity. We'll provide a specific timeline during the proposal phase. Weather can impact scheduling, but we build buffer into our estimates.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We work primarily with pavers (Belgard, Unilock, Techo-Bloc), natural stone, and concrete block for walls. We'll recommend materials based on your aesthetic goals, budget, and the demands of the specific application.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. We handle all required permits and inspections. Some projects (especially retaining walls) require engineering approval. We manage the entire process.",
  },
  {
    question: "What about drainage?",
    answer:
      "Proper drainage is built into every design. Hardscapes fail when water isn't managed correctly. We assess drainage during the initial consultation and incorporate solutions into every project.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We stand behind our work with a 5-year workmanship warranty. Paver manufacturers typically provide 25-year or lifetime product warranties. We'll explain both during the proposal.",
  },
  {
    question: "When can I get on the schedule?",
    answer:
      "Our schedule varies by season. Spring and fall tend to be busiest for hardscape work. Contact us early if you have a specific timeline in mind — we'll work with you to find the right timing for your project.",
  },
];

export default function HardscapesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Hardscapes
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              The patio you&apos;ve been putting off? Let&apos;s build it.
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Patios, walkways, retaining walls, and outdoor living spaces designed and built with
              attention to detail. Quality materials, proper installation, results that last
              decades.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Consultation
              </Button>
              <a
                href="tel:+15135550123"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] text-slate/70 font-semibold hover:text-sun-ochre transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md"
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              What We Build
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Hardscape Services
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              From simple walkways to complete outdoor living spaces, we handle projects of all
              sizes with the same attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/70">{service.description}</p>
                <p className="mt-4 text-sm text-sun-ochre font-semibold">
                  Typical range: {service.priceRange}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-slate/60 text-sm">
            Price ranges are estimates based on typical projects. Final pricing depends on design
            complexity, material selection, and site conditions.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              How We Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              No surprises. You know what&apos;s happening at every step.
            </p>
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

      {/* Quality Commitment */}
      <section className="py-16 lg:py-24 bg-slate">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
              Built right the first time.
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Hardscapes fail when corners are cut: inadequate base preparation, poor drainage
              planning, rushed installation. We take the time to do things properly because
              rework isn&apos;t in our vocabulary.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                { label: "Proper Base Prep", desc: "6-8\" compacted base for lasting stability" },
                { label: "Quality Materials", desc: "Premium pavers from trusted manufacturers" },
                { label: "Drainage First", desc: "Water management built into every design" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
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
        title="Ready to transform your outdoor space?"
        description="Schedule a free consultation. We'll walk your property, discuss your vision, and provide a detailed proposal."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hardscapes & Patios",
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
              "Custom hardscape design and installation for Greater Cincinnati homes.",
            serviceType: "Hardscape Installation",
          }),
        }}
      />
    </>
  );
}
