import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";
import { PHONE_NUMBER, PHONE_NUMBER_HREF, PHONE_NUMBER_SCHEMA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hardscapes & Site Improvements | Cincinnati",
  description:
    "Commercial site improvements and residential outdoor construction in Greater Cincinnati. Patios, retaining walls, walkways. Belgard pavers. $25K residential min, $50K commercial min.",
  openGraph: {
    title: "Hardscapes & Site Improvements | Stone & Salt",
    description:
      "Commercial site improvements and residential outdoor construction in Greater Cincinnati.",
  },
};

const commercialServices = [
  "ADA-compliant walkway installation and repair",
  "Retaining wall construction",
  "Parking area and curbing improvements",
  "Outdoor common areas and gathering spaces",
  "Drainage solutions",
  "Commercial paver installation",
];

const residentialServices = [
  "Paver patios (all-in install: $21-28/sf)",
  "Retaining walls ($35-95/sf)",
  "Outdoor kitchens and fire pits",
  "Walkways and steps",
  "Drainage and grading",
  "Landscape lighting integration",
];

const process = [
  {
    step: "1",
    title: "Design Consultation",
    description: "On-site visit to discuss your project, assess conditions, and explore what is possible. No cost. No obligation.",
  },
  {
    step: "2",
    title: "Custom Design & Proposal",
    description: "Detailed proposal with scope, materials, timeline, and fixed pricing. 3D rendering for residential projects.",
  },
  {
    step: "3",
    title: "Construction",
    description: "Same crew from start to finish. Daily cleanup, clear communication, professional-grade materials.",
  },
  {
    step: "4",
    title: "Walkthrough & Warranty",
    description: "Final walkthrough together. Documentation and warranty information provided. 5-year workmanship warranty.",
  },
];

const faqs = [
  {
    question: "How long does a typical patio project take?",
    answer:
      "Most patio projects take 5-10 days depending on size and complexity. We provide a specific timeline during the proposal phase. Weather can impact scheduling, but we build buffer into our estimates.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We work primarily with Belgard pavers, natural stone, and concrete block for walls. We recommend materials based on your project goals, budget, and the specific application demands.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. We handle all required permits and inspections. Some projects (especially retaining walls) require engineering approval. We manage the entire process.",
  },
  {
    question: "What about drainage?",
    answer:
      "Proper drainage is built into every design. Hardscapes fail when water is not managed correctly. We assess drainage during the initial consultation and incorporate solutions into every project.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We stand behind our work with a 5-year workmanship warranty. Paver manufacturers typically provide 25-year or lifetime product warranties. We explain both during the proposal.",
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
              Hardscapes &amp; Site Improvements
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              For properties that need more than maintenance.
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Commercial site improvements and residential outdoor construction. Patios,
              retaining walls, walkways, and outdoor living spaces built with Belgard pavers
              and professional-grade materials. Designed, built, and backed by the same team
              that manages your grounds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Discuss Your Project
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

      {/* Commercial & Residential Split */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Commercial */}
            <div className="bg-slate rounded-2xl p-6 lg:p-8 text-white">
              <p className="text-eucalyptus text-sm font-semibold uppercase tracking-wide mb-2">
                Commercial Site Improvements
              </p>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-2">
                Functional improvements for commercial properties.
              </h3>
              <p className="text-white/70 mb-6">
                Walkway repairs, retaining wall construction, parking area enhancements,
                and outdoor common areas for corporate campuses and retail properties.
                All hardscape work is coordinated with your ongoing grounds management
                to minimize disruption.
              </p>
              <p className="text-eucalyptus font-semibold text-lg mb-6">
                Commercial minimum project: $50,000
              </p>
              <ul className="space-y-3 mb-8">
                {commercialServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 min-h-[32px]">
                    <svg className="w-5 h-5 text-eucalyptus flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="w-full justify-center">
                Request Commercial Site Assessment
              </Button>
            </div>

            {/* Residential */}
            <div className="bg-eucalyptus/10 rounded-2xl p-6 lg:p-8">
              <p className="text-sun-ochre text-sm font-semibold uppercase tracking-wide mb-2">
                Residential Outdoor Construction
              </p>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl text-slate mb-2">
                Built right. Built to last.
              </h3>
              <p className="text-slate/70 mb-6">
                Patios, outdoor kitchens, fire pits, retaining walls, and walkways for
                homeowners who want it done correctly the first time. We use Belgard pavers
                and professional-grade materials because your property should still look
                good in 10 years.
              </p>
              <p className="text-sun-ochre font-semibold text-lg mb-6">
                Residential minimum project: $25,000
              </p>
              <ul className="space-y-3 mb-8">
                {residentialServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 min-h-[32px]">
                    <svg className="w-5 h-5 text-sun-ochre flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate">{service}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Schedule Design Consultation
              </Button>
            </div>
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

      {/* Quality */}
      <section className="py-16 lg:py-24 bg-slate">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
              Built right the first time.
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Hardscapes fail when corners are cut: inadequate base preparation, poor drainage
              planning, rushed installation. We take the time to do things properly because
              rework is not in our vocabulary.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                { label: "Proper Base Prep", desc: "6-8\" compacted base for lasting stability" },
                { label: "Quality Materials", desc: "Belgard pavers from trusted manufacturers" },
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
        title="Ready to improve your property?"
        description="Commercial site assessments and residential design consultations are complimentary. Tell us about your project and we will schedule a visit within the week."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hardscapes & Site Improvements",
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
              "Commercial site improvements and residential outdoor construction in Greater Cincinnati.",
            serviceType: "Hardscape Installation",
          }),
        }}
      />
    </>
  );
}
