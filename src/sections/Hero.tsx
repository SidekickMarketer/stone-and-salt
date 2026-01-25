import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative bg-slate overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4">
              Greater Cincinnati&apos;s Year-Round Outdoor Partner
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional outdoor spaces.
              <span className="block text-sun-ochre mt-2">Built right the first time.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              Landscaping, hardscapes, grounds maintenance, and snow removal — one reliable
              team for every season. We show up when we say we will.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/services/commercial-grounds" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate">
                Commercial Services
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-eucalyptus" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80 text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-eucalyptus" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80 text-sm">Year-Round Service</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-eucalyptus" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80 text-sm">Free Estimates</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-eucalyptus/20 overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-eucalyptus/30 flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">[Featured Project Photo]</p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <p className="text-sun-ochre font-semibold text-lg">Four seasons. One call.</p>
              <p className="text-slate/70 text-sm mt-1">
                Stop coordinating multiple vendors. We handle it all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
