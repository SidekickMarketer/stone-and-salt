import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Hardscape Installation | Patios, Walls & Outdoor Living | Cincinnati",
  description:
    "Expert hardscape installation in Greater Cincinnati. Paver patios, retaining walls, outdoor kitchens, and custom outdoor living spaces. Built right the first time.",
  openGraph: {
    title: "Hardscape Installation | Stone & Salt",
    description:
      "Expert hardscape installation in Greater Cincinnati. Patios, retaining walls, and outdoor living spaces.",
  },
};

const services = [
  {
    title: "Fire Pits & Fireplaces",
    description:
      "The centerpiece of outdoor living. Custom fire features with stone seat walls, gas or wood-burning options. Extend your season into fall and winter.",
    price: "Starting at $3,500",
    featured: true,
  },
  {
    title: "Natural Stone Patios",
    description:
      "Premium bluestone, travertine, and flagstone installations. The natural elegance that distinguishes the finest homes in Indian Hill, Montgomery, and Mason.",
    price: "Starting at $28/sf installed",
    featured: true,
  },
  {
    title: "Paver Patios",
    description:
      "Custom patios designed for how you actually use your outdoor space. Quality pavers, proper installation, results that last decades.",
    price: "Starting at $18/sf installed",
    featured: false,
  },
  {
    title: "Outdoor Kitchens",
    description:
      "Complete outdoor cooking spaces with built-in grills, stone veneer counters, and storage. Designed for Cincinnati weather.",
    price: "Starting at $15,000",
    featured: false,
  },
  {
    title: "Retaining Walls",
    description:
      "Structural walls that solve drainage and grade issues while creating terraced outdoor rooms. Engineered for longevity.",
    price: "Based on project scope",
    featured: false,
  },
  {
    title: "Pergolas & Shade Structures",
    description:
      "Defined outdoor rooms with architectural interest. Wood, vinyl, or aluminum options to match your home style.",
    price: "Starting at $8,000",
    featured: false,
  },
];

const process = [
  {
    step: "1",
    title: "Consultation",
    description:
      "We meet at your property to understand what you want, how you'll use the space, and what matters most to you. No sales pressure — just a conversation.",
  },
  {
    step: "2",
    title: "Design & Proposal",
    description:
      "We create a design concept and detailed proposal with clear pricing. You'll know exactly what you're getting and what it costs before any work begins.",
  },
  {
    step: "3",
    title: "Installation",
    description:
      "Our crew handles the build from start to finish. Same team, consistent quality, respectful of your property. We clean up every day.",
  },
  {
    step: "4",
    title: "Final Walkthrough",
    description:
      "We walk the completed project with you to make sure every detail meets your expectations. The job isn't done until you're satisfied.",
  },
];

const faqs = [
  {
    question: "What's your minimum project size?",
    answer:
      "We focus on projects of $25,000 and above for residential hardscape installations. This allows us to dedicate the attention and crew time needed to deliver exceptional results. For smaller projects, we're happy to recommend other qualified contractors.",
  },
  {
    question: "How long does a typical patio project take?",
    answer:
      "Most patio installations take 1-3 weeks depending on size and complexity. We'll give you a clear timeline during the proposal phase. Weather can affect scheduling, but we communicate proactively about any changes.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We work with a range of quality materials including concrete pavers, natural stone, brick, and manufactured stone. We'll recommend materials based on your aesthetic preferences, budget, and how the space will be used.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. We handle all necessary permits as part of the project. Most patio and wall projects don't require permits, but when they do (typically for larger walls or structures), we manage the process.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We stand behind our work with a 2-year workmanship warranty. Material warranties vary by manufacturer but typically range from 25 years to lifetime. We only use materials with solid warranty backing.",
  },
  {
    question: "Can you work with my existing landscaping?",
    answer:
      "Absolutely. We design hardscapes that integrate with your existing landscape, or we can update the softscape as part of a comprehensive outdoor transformation.",
  },
];

export default function HardscapesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Residential Hardscapes
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Outdoor living designed for how you entertain.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Fire pits, natural stone patios, outdoor kitchens, and complete backyard transformations.
              Custom designs for homes in Mason, Indian Hill, Montgomery, and Hyde Park.
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

      {/* Gallery Placeholder */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Projects Across Greater Cincinnati
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Fire pits, bluestone patios, outdoor kitchens, and complete backyard transformations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80", alt: "Outdoor fire pit with stone seating" },
              { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80", alt: "Paver patio with outdoor furniture" },
              { src: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=800&q=80", alt: "Stone patio with landscaping" },
              { src: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&w=800&q=80", alt: "Fire pit at dusk" },
              { src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80", alt: "Professional landscaping with stone walkway" },
              { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", alt: "Suburban home with manicured landscape" },
            ].map((image, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-eucalyptus/20 rounded-xl overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              What We Build
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              From simple patios to complete outdoor living transformations, we handle projects that
              deserve professional attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-xl p-8 ${
                  service.featured
                    ? "bg-eucalyptus/15 border-2 border-eucalyptus/30"
                    : "bg-soft-cream"
                }`}
              >
                {service.featured && (
                  <p className="text-eucalyptus text-xs font-semibold uppercase tracking-wide mb-2">Most Popular</p>
                )}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/70">{service.description}</p>
                <p className="mt-4 text-sun-ochre font-semibold text-sm">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-3">
              How We Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white">
              From idea to finished project
            </h2>
            <p className="mt-4 text-lg text-white/70">
              A clear process that keeps you informed every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{step.step}</div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
                Built right. No shortcuts.
              </h2>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed">
                A patio isn&apos;t just pavers on dirt. Proper installation means excavation,
                compacted base, level screeding, and careful placement. It means drainage that
                works, edges that don&apos;t shift, and a surface that stays flat for years.
              </p>
              <p className="mt-4 text-lg text-slate/70 leading-relaxed">
                We take the time to do it right because we don&apos;t want to come back and fix it.
                And neither do you.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Proper excavation depth for your soil conditions",
                  "Compacted aggregate base (not just gravel)",
                  "Edge restraints that prevent shifting",
                  "Proper slope for drainage away from structures",
                  "Quality materials with manufacturer warranties",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
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
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-eucalyptus/20 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=800&q=80"
                alt="Professional stone patio installation"
                className="w-full h-full object-cover"
              />
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
        title="Ready to transform your backyard?"
        description="Get a free quote for your hardscape project. We'll meet at your property and discuss design options, materials, and pricing."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hardscape Installation",
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
              "Expert hardscape installation in Greater Cincinnati. Paver patios, retaining walls, and outdoor living spaces.",
            serviceType: "Hardscape Installation",
          }),
        }}
      />
    </>
  );
}
