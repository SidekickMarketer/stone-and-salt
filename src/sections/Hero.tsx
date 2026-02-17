"use client";

import { Button } from "@/components/Button";
import { Animate } from "@/components/Animate";

export function Hero() {
  return (
    <>
    <section className="relative bg-eucalyptus overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A2A2A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <Animate delay={0}>
            <p className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-6">
              Commercial Grounds Management | Greater Cincinnati
            </p>
          </Animate>
          <Animate delay={100}>
            <h1 className="font-[family-name:var(--font-montserrat)] text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-tight lg:leading-[1.08]">
              <span className="text-white block">One vendor. Four seasons.</span>
              <span className="block mt-2">
                <span className="text-white headline-underline">Zero coverage</span>
                <span className="text-sun-ochre"> gaps.</span>
              </span>
            </h1>
          </Animate>
          <Animate delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Stone &amp; Salt manages commercial properties year-round &mdash; grounds
              maintenance, snow and ice removal, and hardscapes under a single contract.
              Documented service. Predictable budgets. An owner who answers the phone.
            </p>
          </Animate>

          <Animate delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg" className="shadow-lg w-full sm:w-auto group">
                Request Site Assessment
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                href="/services/commercial-grounds"
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-slate backdrop-blur-sm bg-white/10 w-full sm:w-auto"
              >
                See Our Commercial Services
              </Button>
            </div>
          </Animate>

          {/* Trust Signals */}
          <Animate delay={400}>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
              {[
                { label: "$2M Liability Coverage" },
                { label: "Documented Service Logs" },
                { label: "4-Hour Response Guarantee" },
              ].map((signal) => (
                <div key={signal.label} className="flex items-center justify-center gap-2 min-h-[44px]">
                  <svg className="h-5 w-5 text-sun-ochre flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90 text-sm font-medium">{signal.label}</span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
    {/* Gradient transition from eucalyptus hero into content sections */}
    <div className="h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-eucalyptus via-eucalyptus/90 to-soft-cream" aria-hidden="true" />
    </>
  );
}
