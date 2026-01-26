import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Service Areas | Greater Cincinnati",
  description:
    "Stone & Salt serves Greater Cincinnati including Liberty Township, Mason, West Chester, Blue Ash, Indian Hill, Loveland, Anderson Township, Hyde Park, and Montgomery.",
  openGraph: {
    title: "Service Areas | Stone & Salt",
    description:
      "Professional landscaping, hardscapes, and snow removal serving Greater Cincinnati.",
  },
};

const areas = [
  {
    name: "Liberty Township",
    slug: "liberty-township",
    description: "Our home base. Full-service coverage for Liberty Township residential and commercial properties.",
    zone: "core",
  },
  {
    name: "West Chester",
    slug: "west-chester",
    description: "The economic heart of Butler County. Commercial grounds and residential services throughout West Chester.",
    zone: "core",
  },
  {
    name: "Mason",
    slug: "mason",
    description: "Growing community with quality homes. Full landscaping and hardscape services in Mason.",
    zone: "core",
  },
  {
    name: "Blue Ash",
    slug: "blue-ash",
    description: "Corporate campuses and established neighborhoods. Commercial and residential services in Blue Ash.",
    zone: "core",
  },
  {
    name: "Loveland",
    slug: "loveland",
    description: "Charming community with growing service needs. Landscaping and maintenance in Loveland.",
    zone: "core",
  },
  {
    name: "Indian Hill",
    slug: "indian-hill",
    description: "Estate properties requiring premium care. Specialized grounds and hardscape services for Indian Hill.",
    zone: "core",
  },
  {
    name: "Anderson Township",
    slug: "anderson-township",
    description: "Family-oriented community with beautiful properties. Expanding service coverage in Anderson.",
    zone: "growth",
  },
  {
    name: "Hyde Park",
    slug: "hyde-park",
    description: "Historic neighborhood with discerning homeowners. Selective service in Hyde Park.",
    zone: "growth",
  },
  {
    name: "Montgomery",
    slug: "montgomery",
    description: "Upscale community between Mason and Blue Ash. Growing service presence in Montgomery.",
    zone: "growth",
  },
];

export default function AreasPage() {
  const coreAreas = areas.filter((a) => a.zone === "core");
  const growthAreas = areas.filter((a) => a.zone === "growth");

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              Serving Greater Cincinnati
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Based in Liberty Township, we serve residential and commercial properties within
              approximately 45 minutes. Quality work for neighbors we&apos;re proud to serve.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-eucalyptus/10 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/about-neighborhood.jpg"
              alt="Suburban home with manicured lawn in Greater Cincinnati"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Full Coverage
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Primary Service Areas
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Full service coverage with regular scheduling availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-soft-cream rounded-xl p-6 hover:bg-eucalyptus/10 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl group-hover:text-sun-ochre transition-colors">
                  {area.name}
                </h3>
                <p className="mt-3 text-slate/70">{area.description}</p>
                <span className="mt-4 inline-flex items-center text-sun-ochre font-semibold text-sm group-hover:translate-x-1 transition-transform min-h-[44px]">
                  View services
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Areas */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="mb-12">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Growing Presence
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Expanding Coverage
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Growing service presence. Contact us to discuss availability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {growthAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-white rounded-xl p-6 hover:bg-eucalyptus/10 transition-all duration-300 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg group-hover:text-sun-ochre transition-colors">
                  {area.name}
                </h3>
                <p className="mt-2 text-slate/70 text-sm">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-12 lg:py-16 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate">
              Don&apos;t see your area listed?
            </h2>
            <p className="mt-4 text-slate/70">
              We may still be able to help. If you&apos;re within 45 minutes of Liberty Township,
              reach out and we&apos;ll let you know if we can accommodate your property.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sun-ochre font-semibold hover:text-sun-ochre/80 transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md px-2"
              >
                Contact us to check availability
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        variant="secondary"
        title="Ready to get started?"
        description="Get a free quote for your property. We respond within 4 hours."
      />
    </>
  );
}
