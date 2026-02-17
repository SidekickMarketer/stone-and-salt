import { Button } from "./Button";
import { Check } from "lucide-react";

export function CommercialHero() {
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
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eucalyptus opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-eucalyptus"></span>
              </span>
              Crews Active in Liberty Twp & Oxford
            </p>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate">
              <span className="block">Buried?</span>
              <span className="block mt-2">
                <span className="text-sun-ochre headline-underline">We're Not.</span>
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-slate/70 leading-relaxed max-w-xl">
              Emergency commercial snow removal. Zero-tolerance clearing for corporate lots, retail centers, and industrial access roads.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="tel:5135550123" size="lg" variant="primary">
                Call (513) 555-0123
              </Button>
              <Button
                href="#pricing"
                variant="outline"
                size="lg"
              >
                View Emergency Rates
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
              {[
                { label: "Commercial Grade Equipment" },
                { label: "Licensed & Insured" },
                { label: "24/7 Monitoring" },
              ].map((signal) => (
                <div key={signal.label} className="flex items-center gap-2 min-h-[44px]">
                  <Check className="h-5 w-5 text-eucalyptus flex-shrink-0" />
                  <span className="text-slate/70 text-sm font-medium">{signal.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate overflow-hidden relative group shadow-card-hover">
              {/* Since we don't have the image file yet, using a placeholder color block that matches the brand */}
              <div className="absolute inset-0 bg-slate flex items-center justify-center text-white/20">
                <div className="text-center p-8">
                  <p className="font-heading text-2xl font-bold mb-2">STONE & SALT</p>
                  <p className="text-sm uppercase tracking-widest">Snow Response Team</p>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate/80 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover p-6 max-w-xs border-l-4 border-sun-ochre animate-float">
              <p className="text-slate font-bold text-lg">Priority Status</p>
              <p className="text-slate/70 text-sm mt-1">
                We show up when the others ghost you. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
