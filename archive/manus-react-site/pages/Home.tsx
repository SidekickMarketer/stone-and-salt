import { Button } from "@/components/Button";
import { ArrowRight, Snowflake, Trees } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-soft-cream text-slate font-sans">
      {/* Hero Section - The "Traffic Cop" */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate text-white">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate/80 via-slate/50 to-slate" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun-ochre/10 border border-sun-ochre/20 text-sun-ochre font-bold uppercase tracking-widest text-sm mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun-ochre opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sun-ochre"></span>
            </span>
            Winter Storm Alert: Crews Active
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Stone & Salt <br />
            <span className="text-sun-ochre">Landscaping</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Greater Cincinnati's premier commercial grounds partner. 
            Currently prioritizing emergency snow response.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">
            {/* Primary Action: Snow Removal */}
            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group text-left">
              <div className="h-12 w-12 bg-sun-ochre rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Snowflake className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Snow Removal</h3>
              <p className="text-white/60 mb-6 text-sm">
                Zero-tolerance clearing for corporate lots and retail centers.
              </p>
              <Button href="/snow-removal" variant="primary" className="w-full justify-between group-hover:bg-sun-ochre-bright">
                Book Emergency Plow <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Secondary Action: Commercial Grounds */}
            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group text-left">
              <div className="h-12 w-12 bg-eucalyptus rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trees className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Commercial Grounds</h3>
              <p className="text-white/60 mb-6 text-sm">
                Spring 2026 scheduling now open for HOAs and campuses.
              </p>
              <Button href="/commercial-grounds" variant="outline" className="w-full justify-between border-white/20 text-white hover:bg-white hover:text-slate">
                View Services <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Ticker */}
      <div className="bg-sun-ochre py-4 overflow-hidden">
        <div className="flex gap-8 items-center justify-center text-slate font-bold uppercase tracking-widest text-sm animate-pulse">
          <span>Liberty Township</span>
          <span className="opacity-50">•</span>
          <span>West Chester</span>
          <span className="opacity-50">•</span>
          <span>Oxford</span>
          <span className="opacity-50">•</span>
          <span>Waynesville</span>
          <span className="opacity-50">•</span>
          <span>Mason</span>
        </div>
      </div>
    </div>
  );
}
