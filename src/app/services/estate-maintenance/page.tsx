import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Estate & Acreage Maintenance | Oxford & Waynesville",
  description:
    "Professional large property maintenance for estates, farms, and rural homes in Oxford, Waynesville, and surrounding areas. 10-30+ acre properties. Reliable, professional, year-round care.",
  openGraph: {
    title: "Estate & Acreage Maintenance | Stone & Salt",
    description:
      "Professional large property maintenance for estates and farms in Oxford and Waynesville.",
  },
};

const benefits = [
  {
    title: "Built for Big Properties",
    description:
      "Commercial-grade equipment that handles 10, 20, 30+ acres efficiently. Not a riding mower from Home Depot.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Consistent Schedule",
    description:
      "Bi-weekly service during growing season. You'll know exactly when we're coming, and we'll actually show up.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Year-Round Partner",
    description:
      "Mowing is just the start. Fall cleanup, snow removal, spring prep — one relationship that covers everything.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Property Knowledge",
    description:
      "We learn your property — the wet spots, the slopes, where NOT to mow. No surprises, no damage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

const idealFor = [
  "10-30+ acre residential estates",
  "Hobby farms and horse properties",
  "Rural homes with significant acreage",
  "Vacant land that needs maintained",
  "Properties with aging owners who can't keep up anymore",
  "Second homes and investment properties",
];

const services = [
  {
    name: "Estate Mowing",
    description: "Large-capacity mowing for properties 10+ acres. Bi-weekly service April through October.",
    price: "From $150/acre",
  },
  {
    name: "Seasonal Cleanup",
    description: "Spring debris removal, fall leaf management, and property preparation for each season.",
    price: "Custom quote",
  },
  {
    name: "Fence Line & Edge Work",
    description: "Trimming and maintenance along fence lines, tree lines, and property boundaries.",
    price: "Add-on service",
  },
  {
    name: "Snow Removal",
    description: "Winter driveway clearing for long private drives. Priority scheduling for estate clients.",
    price: "From $150/hr",
  },
];

const faqs = [
  {
    question: "What size property do you work with?",
    answer:
      "We focus on properties 10 acres and larger. This is where our commercial equipment really shines compared to standard lawn services. If you have 5-10 acres, reach out — we can discuss whether we're the right fit.",
  },
  {
    question: "How often do you mow?",
    answer:
      "During growing season (April-October), most estate properties need service every 2 weeks. We adjust based on growth conditions — more frequent in spring, less in late summer drought.",
  },
  {
    question: "What areas do you serve for estate maintenance?",
    answer:
      "We focus on Oxford, Waynesville, and the surrounding rural areas between Cincinnati and Dayton. This includes properties in Butler, Warren, and Clinton counties.",
  },
  {
    question: "Can you handle hills and rough terrain?",
    answer:
      "Yes. Our equipment is designed for varied terrain. During the initial property assessment, we'll identify any areas that need special attention or different approaches.",
  },
  {
    question: "Do you offer contracts or per-service pricing?",
    answer:
      "Both. Most estate clients prefer seasonal contracts for budget predictability and priority scheduling. We also offer per-service pricing if you prefer flexibility.",
  },
  {
    question: "What about the rest of the year?",
    answer:
      "Estate mowing clients get priority consideration for our other services — snow removal, fall cleanup, spring prep, and any landscaping or hardscape projects. One vendor, year-round.",
  },
];

export default function EstateMowingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Estate & Acreage Maintenance
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              Your property is too big for the neighborhood lawn guy.
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Professional maintenance for large estates, farms, and rural properties in Oxford,
              Waynesville, and surrounding areas. Commercial equipment. Reliable service.
              Someone who actually shows up.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get an Estate Quote
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

      {/* The Problem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate mb-6">
              Maintaining 15 acres shouldn&apos;t be a second job.
            </h2>
            <p className="text-lg text-slate/70 leading-relaxed">
              You bought the property for the space, the privacy, the views. Not to spend every
              weekend on a tractor. And the &quot;local guy&quot; who said he could handle it?
              He&apos;s either unreliable, underequipped, or both.
            </p>
            <p className="text-lg text-slate/70 leading-relaxed mt-4">
              We work exclusively with large properties. Commercial equipment that covers
              ground efficiently. Crews who know how to handle acreage. A schedule you can
              actually count on.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Why Estate Owners Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Built for properties like yours
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-eucalyptus/20 flex items-center justify-center text-eucalyptus mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Is This You?
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate mb-6">
                Estate maintenance is ideal for:
              </h2>
              <ul className="space-y-4">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-eucalyptus flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-eucalyptus/10 rounded-2xl p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-slate mb-4">
                Serving Oxford, Waynesville & Surrounding Areas
              </h3>
              <p className="text-slate/70 mb-6">
                We focus on the rural corridor between Cincinnati and Dayton — the area with
                beautiful large properties and not enough professional options to maintain them.
              </p>
              <ul className="space-y-2 text-sm text-slate/70">
                <li>• Oxford & Miami University area</li>
                <li>• Waynesville & Oregonia</li>
                <li>• Lebanon & Morrow</li>
                <li>• Rural Butler, Warren & Clinton counties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Services
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              What we offer estate clients
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-slate/70 mb-4">{service.description}</p>
                <p className="text-sun-ochre font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate/50 text-sm mt-8">
            Every property is different. We&apos;ll visit your property and provide a custom quote based on
            acreage, terrain, and your specific needs.
          </p>
        </div>
      </section>

      {/* Year-Round Value Prop */}
      <section className="py-16 lg:py-24 bg-slate text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold mb-6">
              One relationship. Every season.
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Estate mowing is just the beginning. Our clients don&apos;t want to manage multiple
              vendors for every property need. Mowing in summer, snow removal in winter,
              landscaping projects when you&apos;re ready — we handle it all.
            </p>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-sun-ochre mb-2">Spring</p>
                <p className="text-sm text-white/60">Cleanup & prep</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sun-ochre mb-2">Summer</p>
                <p className="text-sm text-white/60">Estate mowing</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sun-ochre mb-2">Fall</p>
                <p className="text-sm text-white/60">Leaf management</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sun-ochre mb-2">Winter</p>
                <p className="text-sm text-white/60">Snow removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate text-center mb-12">
              Common Questions
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
        title="Let's talk about your property"
        description="Tell us about your acreage and what you need. We'll visit the property and put together a custom maintenance plan."
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Estate & Acreage Maintenance",
            provider: {
              "@type": "LocalBusiness",
              name: "Stone & Salt",
              telephone: "+1-513-555-0123",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Oxford",
                containedInPlace: { "@type": "State", name: "Ohio" },
              },
              {
                "@type": "City",
                name: "Waynesville",
                containedInPlace: { "@type": "State", name: "Ohio" },
              },
            ],
            description:
              "Professional large property maintenance for estates, farms, and rural homes. 10-30+ acre properties.",
            serviceType: "Estate Maintenance",
          }),
        }}
      />
    </>
  );
}
