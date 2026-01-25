import Link from "next/link";

const areas = [
  { name: "Liberty Township", slug: "liberty-township", type: "core" },
  { name: "West Chester", slug: "west-chester", type: "core" },
  { name: "Mason", slug: "mason", type: "core" },
  { name: "Blue Ash", slug: "blue-ash", type: "core" },
  { name: "Loveland", slug: "loveland", type: "core" },
  { name: "Indian Hill", slug: "indian-hill", type: "core" },
  { name: "Anderson Township", slug: "anderson-township", type: "growth" },
  { name: "Hyde Park", slug: "hyde-park", type: "growth" },
  { name: "Montgomery", slug: "montgomery", type: "growth" },
];

export function Areas() {
  return (
    <section className="py-20 lg:py-28 bg-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-3">
            Service Areas
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
            Serving Greater Cincinnati
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Based in Liberty Township. We serve residential and commercial properties
            within a 45-minute radius.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="px-5 py-2.5 bg-white/10 hover:bg-sun-ochre text-white rounded-full text-sm font-medium transition-colors"
            >
              {area.name}
            </Link>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-white/5 rounded-2xl p-8 text-center">
          <div className="aspect-[16/9] max-w-4xl mx-auto rounded-xl bg-white/10 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-white/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-white/50">[Service Area Map]</p>
              <p className="text-white/30 text-sm mt-1">Interactive map coming soon</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">
            Not sure if we service your area?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sun-ochre font-semibold hover:text-sun-ochre/80 transition-colors"
          >
            Contact us to find out
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
