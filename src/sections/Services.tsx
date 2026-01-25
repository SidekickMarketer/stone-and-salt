import Link from "next/link";

const services = [
  {
    title: "Commercial Grounds",
    description:
      "Consistent, professional care for corporate campuses, office parks, retail centers, and HOA common areas. One vendor, one invoice, year-round reliability.",
    href: "/services/commercial-grounds",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Corporate Campuses", "Office Parks", "HOA Communities", "Retail Centers"],
  },
  {
    title: "Snow & Ice Removal",
    description:
      "24/7 response when winter hits. Documented service, professional equipment, and the reliability your property needs. Your lot cleared before you get there.",
    href: "/services/snow-removal",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ["24/7 Response", "Commercial & Residential", "Salt & Ice Management", "Documented Service"],
  },
  {
    title: "Residential Hardscapes",
    description:
      "Patios, walkways, retaining walls, and outdoor living spaces. Expert design, quality materials, and results that last. Built right the first time.",
    href: "/services/hardscapes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    features: ["Paver Patios", "Retaining Walls", "Outdoor Kitchens", "Fire Pits"],
  },
  {
    title: "Lawn & Maintenance",
    description:
      "Professional grounds care that maintains your property's curb appeal. Same crew, same standards, every visit. Your property gets treated like our name depends on it.",
    href: "/services/maintenance",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ["Lawn Care", "Seasonal Cleanup", "Mulching & Beds", "Irrigation"],
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-soft-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
            Complete Outdoor Services
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            From spring landscaping to winter snow removal, we handle every season.
            One team, one relationship, year-round results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate/5"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-eucalyptus/20 flex items-center justify-center text-slate group-hover:bg-sun-ochre group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-slate group-hover:text-sun-ochre transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block px-3 py-1 text-xs font-medium bg-slate/5 text-slate/70 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-sun-ochre font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
