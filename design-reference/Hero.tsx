"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Animate } from "@/components/Animate";

export function Hero() {
  return (
    <section className="relative bg-soft-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A2A2A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Animate delay={0}>
              <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
                Greater Cincinnati&apos;s Year-Round Outdoor Partner
              </p>
            </Animate>
            <Animate delay={100}>
              <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate block">Professional outdoor spaces.</span>
                <span className="block mt-2">
                  <span className="text-sun-ochre headline-underline">Built right</span>
                  <span className="text-gradient"> the first time.</span>
                </span>
              </h1>
            </Animate>
            <Animate delay={200}>
              <p className="mt-6 text-xl text-slate/70 leading-relaxed max-w-xl">
                Landscaping, hardscapes, grounds maintenance, and snow removal — one reliable
                team for every season. We show up when we say we will.
              </p>
            </Animate>

            <Animate delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a Free Quote
                </Button>
                <Button
                  href="/services/commercial-grounds"
                  variant="outline"
                  size="lg"
                  className="border-slate text-slate hover:bg-slate hover:text-white"
                >
                  Commercial Services
                </Button>
              </div>
            </Animate>

            {/* Trust Signals */}
            <Animate delay={400}>
              <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
                {[
                  { label: "Licensed & Insured" },
                  { label: "Year-Round Service" },
                  { label: "Free Estimates" },
                ].map((signal) => (
                  <div key={signal.label} className="flex items-center gap-2 min-h-[44px]">
                    <svg className="h-5 w-5 text-eucalyptus flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate/70 text-sm font-medium">{signal.label}</span>
                  </div>
                ))}
              </div>
            </Animate>
          </div>

          {/* Image/Visual */}
          {/* TODO: REPLACE hero-firepit.jpg with a real photo of YOUR best project */}
          {/* Ideal: A stunning patio, fire pit, or hardscape you actually built */}
          {/* Size: At least 1200px wide, landscape orientation */}
          <Animate delay={200} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-eucalyptus/20 overflow-hidden relative group">
              <Image
                src="/images/hero-firepit.jpg"
                alt="Outdoor fire pit with stone seating area"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Floating card - static for professional feel */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover p-6 max-w-xs border-l-4 border-eucalyptus">
              <p className="text-gradient font-semibold text-lg">Four seasons. One call.</p>
              <p className="text-slate/70 text-sm mt-1">
                Stop coordinating multiple vendors. We handle it all.
              </p>
            </div>
            </Animate>
        </div>
      </div>
    </section>
  );
}
