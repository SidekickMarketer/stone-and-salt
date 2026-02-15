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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 py-16 sm:py-20 lg:py-28 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Animate delay={0}>
              <p className="text-white font-semibold tracking-wide uppercase text-sm mb-4">
                Commercial Grounds Management | Greater Cincinnati
              </p>
            </Animate>
            <Animate delay={100}>
              <h1 className="font-[family-name:var(--font-montserrat)] text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-tight lg:leading-[1.1] max-w-4xl">
                <span className="text-slate block">One vendor. Four seasons.</span>
                <span className="block mt-2">
                  <span className="text-slate headline-underline">Zero coverage</span>
                  <span className="text-gradient"> gaps.</span>
                </span>
              </h1>
            </Animate>
            <Animate delay={200}>
              <p className="mt-6 text-xl text-slate/80 leading-relaxed max-w-xl">
                Stone &amp; Salt manages commercial properties year-round &mdash; grounds
                maintenance, snow and ice removal, and hardscapes under a single contract.
                Documented service. Predictable budgets. An owner who answers the phone.
              </p>
            </Animate>

            <Animate delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

            {/* Trust Signals - inline with hero */}
            <Animate delay={400}>
              <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-7 lg:gap-8">
                {[
                  { label: "$2M Liability Coverage" },
                  { label: "Documented Service Logs" },
                  { label: "4-Hour Response Guarantee" },
                ].map((signal) => (
                  <div key={signal.label} className="flex items-center gap-2 min-h-[44px]">
                    <svg className="h-5 w-5 text-sun-ochre flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/90 text-sm font-medium py-1">{signal.label}</span>
                  </div>
                ))}
              </div>
            </Animate>
          </div>

          {/* Image/Visual */}
          {/* TODO: Replace with real photography - commercial property hero shot */}
          <Animate delay={200} className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, #2A2A2A 0%, #353535 35%, #2A2A2A 70%, #1f1f1f 100%)",
              }}
            >
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B3C3AD' fill-opacity='1'%3E%3Cpath d='M30 30h30v30H30zM0 0h30v30H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Eucalyptus accent lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-eucalyptus-light to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-eucalyptus-light to-transparent opacity-50" />

              {/* Decorative corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-eucalyptus-light/20 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-eucalyptus-light/20 rounded-br-lg" />

              {/* Central icon and text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                {/* Building icon */}
                <div className="text-eucalyptus-light/30 mb-5">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <p className="text-white/25 text-sm font-medium tracking-widest uppercase">
                  Commercial Property Photography
                </p>
                <div className="mt-4 w-16 h-px bg-eucalyptus-light/20" />
              </div>

              {/* Subtle radial glow */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "radial-gradient(ellipse at center, var(--eucalyptus-light) 0%, transparent 70%)",
                }}
              />
            </div>
            {/* Floating card - glassmorphism for premium feel */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white/90 backdrop-blur-md rounded-xl shadow-card-hover p-6 max-w-xs border-l-4 border-sun-ochre">
              <p className="text-gradient font-semibold text-lg">Four seasons. One call.</p>
              <p className="text-slate/70 text-sm mt-1">
                Your property managed year-round under a single contract.
              </p>
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
