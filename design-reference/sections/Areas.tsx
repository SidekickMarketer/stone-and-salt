"use client";

import Link from "next/link";
import { Animate } from "@/components/Animate";

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
    <section className="py-16 lg:py-24 bg-slate relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-eucalyptus/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sun-ochre/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <Animate>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
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
        </Animate>

        {/* Areas Grid */}
        <Animate delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-5 py-3 min-h-[44px] bg-white/10 hover:bg-sun-ochre text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </Animate>

        {/* Map Placeholder */}
        <Animate delay={200}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10">
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
        </Animate>

        {/* CTA */}
        <Animate delay={300}>
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">
              Not sure if we service your area?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sun-ochre font-semibold hover:text-sun-ochre-bright transition-colors group min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md px-2"
            >
              Contact us to find out
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
