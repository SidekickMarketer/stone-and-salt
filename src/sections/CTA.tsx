"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Animate } from "@/components/Animate";
import { PHONE_NUMBER, PHONE_NUMBER_HREF } from "@/lib/constants";

interface CTAProps {
  variant?: "primary" | "secondary";
  title?: string;
  description?: string;
}

export function CTA({
  variant = "primary",
  title = "Protect your property year-round.",
  description = "Request a site assessment and receive a custom proposal with fixed annual pricing. No obligation. Response within 4 hours.",
}: CTAProps) {
  if (variant === "secondary") {
    return (
      <section className="py-12 lg:py-16 bg-eucalyptus/10 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <Animate>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate">
                  {title}
                </h2>
                <p className="mt-2 text-slate/70">{description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Request Site Assessment
                </Button>
                <a
                  href={PHONE_NUMBER_HREF}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] text-slate/80 font-semibold hover:text-sun-ochre transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-md"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-sun-ochre via-sun-ochre to-sun-ochre-bright" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sun-ochre-bright/30 rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Animate>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-4 text-xl text-white/90">{description}</p>
          </Animate>

          <Animate delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-white text-sun-ochre hover:bg-white/90 shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              >
                Request Site Assessment
              </Link>
              <a
                href={PHONE_NUMBER_HREF}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[52px] text-white font-semibold border-2 border-white rounded-md hover:bg-white hover:text-sun-ochre transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {PHONE_NUMBER}
              </a>
            </div>
          </Animate>

          <Animate delay={250}>
            <p className="mt-6 text-white/60 text-sm">
              Not ready yet? <Link href="/services/commercial-grounds" className="text-white/90 underline hover:text-white transition-colors">See detailed service breakdown</Link> or <Link href="/about" className="text-white/90 underline hover:text-white transition-colors">learn about our team</Link>.
            </p>
          </Animate>

          <Animate delay={300}>
            <div className="mt-8">
              <p className="text-white/70 text-sm">
                Currently accepting commercial contracts for Spring 2026.
              </p>
              <p className="text-white/50 text-xs mt-2">
                Site assessments scheduled within 7 days • Proposals delivered within 72 hours
              </p>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
