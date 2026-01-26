import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

const areas: Record<
  string,
  {
    name: string;
    description: string;
    longDescription: string;
    zone: "core" | "growth";
    zipCodes: string[];
    neighborhoods?: string[];
  }
> = {
  "liberty-township": {
    name: "Liberty Township",
    description: "Our home base. Full-service coverage for Liberty Township residential and commercial properties.",
    longDescription:
      "Liberty Township is where Stone & Salt calls home. As one of the fastest-growing communities in Butler County, Liberty Township features a mix of established neighborhoods and new developments, all deserving professional grounds care. From the shops at Liberty Center to residential communities throughout, we know this area inside and out.",
    zone: "core",
    zipCodes: ["45044", "45011"],
    neighborhoods: ["Liberty Center", "Carriage Hill", "Estates of Liberty Woods", "Liberty Trails"],
  },
  "west-chester": {
    name: "West Chester",
    description: "The economic heart of Butler County. Commercial grounds and residential services throughout West Chester.",
    longDescription:
      "West Chester Township is Butler County's commercial hub, home to major employers and thriving retail centers. Our commercial grounds maintenance keeps office parks, retail centers, and corporate campuses looking professional year-round. We also serve West Chester's many residential communities with the same attention to detail.",
    zone: "core",
    zipCodes: ["45069", "45246", "45241"],
    neighborhoods: ["Beckett Ridge", "Deerfield Township", "Tylersville"],
  },
  "mason": {
    name: "Mason",
    description: "Growing community with quality homes. Full landscaping and hardscape services in Mason.",
    longDescription:
      "Mason consistently ranks among Ohio's best places to live, with excellent schools and well-maintained neighborhoods. The community's pride in property appearance makes professional landscaping and hardscape services essential. From routine maintenance to custom patio installations, we help Mason homeowners maintain and enhance their outdoor spaces.",
    zone: "core",
    zipCodes: ["45040"],
    neighborhoods: ["Heritage Club", "Traditionsn", "Mason Heights", "Crooked Tree"],
  },
  "blue-ash": {
    name: "Blue Ash",
    description: "Corporate campuses and established neighborhoods. Commercial and residential services in Blue Ash.",
    longDescription:
      "Blue Ash combines a thriving business district with established residential neighborhoods. The city's commitment to green space and community appearance creates demand for professional grounds maintenance. We serve Blue Ash's corporate campuses, the Summit Park area, and surrounding residential properties.",
    zone: "core",
    zipCodes: ["45236", "45242"],
    neighborhoods: ["Summit Park", "Carmel", "Blue Ash Business District"],
  },
  "loveland": {
    name: "Loveland",
    description: "Charming community with growing service needs. Landscaping and maintenance in Loveland.",
    longDescription:
      "Loveland's historic charm and bike trail culture make it a unique community in Greater Cincinnati. Properties here range from historic downtown buildings to newer developments, each with distinct landscaping needs. We provide grounds maintenance, hardscape installation, and snow removal throughout Loveland.",
    zone: "core",
    zipCodes: ["45140"],
    neighborhoods: ["Downtown Loveland", "Landen", "Loveland Park"],
  },
  "indian-hill": {
    name: "Indian Hill",
    description: "Estate properties requiring premium care. Specialized grounds and hardscape services for Indian Hill.",
    longDescription:
      "Indian Hill's estate properties demand a level of care that matches their prestige. Large lots, mature landscaping, and discerning homeowners require a service provider who understands premium property maintenance. We provide comprehensive grounds care, custom hardscape design, and reliable snow management for Indian Hill estates.",
    zone: "core",
    zipCodes: ["45243"],
    neighborhoods: ["Indian Hill Village", "Camargo"],
  },
  "anderson-township": {
    name: "Anderson Township",
    description: "Family-oriented community with beautiful properties. Expanding service coverage in Anderson.",
    longDescription:
      "Anderson Township offers a suburban feel with easy access to downtown Cincinnati. The community's family-friendly neighborhoods and quality housing stock make it an area we're actively growing into. Contact us to discuss service availability for your Anderson Township property.",
    zone: "growth",
    zipCodes: ["45230", "45244", "45255"],
    neighborhoods: ["Forestville", "Turpin Hills", "Clough Pike corridor"],
  },
  "hyde-park": {
    name: "Hyde Park",
    description: "Historic neighborhood with discerning homeowners. Selective service in Hyde Park.",
    longDescription:
      "Hyde Park's tree-lined streets and historic architecture create a distinctive neighborhood character. Properties here often feature established gardens and mature landscaping that require thoughtful maintenance. We provide selective service in Hyde Park for clients who value quality and reliability.",
    zone: "growth",
    zipCodes: ["45208", "45209"],
    neighborhoods: ["Hyde Park Square", "Observatory Hill", "East Walnut Hills"],
  },
  "montgomery": {
    name: "Montgomery",
    description: "Upscale community between Mason and Blue Ash. Growing service presence in Montgomery.",
    longDescription:
      "Montgomery combines small-town charm with upscale living. The community's well-maintained properties and active civic engagement reflect residents who care about appearance and quality. We're expanding our service presence in Montgomery for both residential and commercial properties.",
    zone: "growth",
    zipCodes: ["45242"],
    neighborhoods: ["Downtown Montgomery", "Montgomery Woods"],
  },
};

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `${area.name} Landscaping & Snow Removal | Stone & Salt`,
    description: `Professional landscaping, hardscapes, and snow removal in ${area.name}, OH. Local service from a team you can trust. Get a free quote.`,
    openGraph: {
      title: `${area.name} Landscaping Services | Stone & Salt`,
      description: `Serving ${area.name} with professional landscaping, hardscapes, and snow removal.`,
    },
  };
}

export default async function AreaPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const area = areas[slug];

  if (!area) {
    notFound();
  }

  const services = [
    {
      title: "Lawn & Grounds Maintenance",
      description: `Regular maintenance to keep your ${area.name} property looking its best year-round.`,
      href: "/services/maintenance",
    },
    {
      title: "Hardscape Installation",
      description: `Custom patios, walkways, and retaining walls for ${area.name} homes.`,
      href: "/services/hardscapes",
    },
    {
      title: "Snow & Ice Removal",
      description: `Reliable snow removal to keep your ${area.name} property safe and accessible.`,
      href: "/services/snow-removal",
    },
    {
      title: "Commercial Grounds",
      description: `Professional grounds care for ${area.name} businesses and properties.`,
      href: "/services/commercial-grounds",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-eucalyptus hover:text-sun-ochre transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Service Areas
            </Link>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-slate leading-tight">
              {area.name} Landscaping & Outdoor Services
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">{area.description}</p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Area */}
      <section className="py-16 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate">
              Serving {area.name}
            </h2>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">{area.longDescription}</p>

            {area.neighborhoods && area.neighborhoods.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-slate mb-3">Neighborhoods We Serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="px-3 py-1 bg-eucalyptus/10 text-slate rounded-full text-sm"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <p className="text-sm text-slate/60">
                ZIP codes served: {area.zipCodes.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate mb-12">
            Services in {area.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-soft-cream rounded-xl p-8 hover:bg-eucalyptus/10 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl group-hover:text-sun-ochre transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/70">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sun-ochre font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate">
              Why Local Matters
            </h2>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              We&apos;re based in Liberty Township, just minutes from {area.name}. That means faster
              response times, familiarity with local conditions, and a team that&apos;s invested in
              the community. When you call, you&apos;re talking to neighbors, not a call center.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to get started in ${area.name}?`}
        description="Get a free quote for your property. We respond within 4 hours."
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Stone & Salt",
            description: `Professional landscaping, hardscapes, and snow removal serving ${area.name}, Ohio.`,
            telephone: "+1-513-555-0123",
            areaServed: {
              "@type": "City",
              name: area.name,
              addressRegion: "OH",
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 39.3545,
                longitude: -84.3944,
              },
              geoRadius: "45 miles",
            },
          }),
        }}
      />
    </>
  );
}
