import { Button } from "@/components/Button";
import { Check } from "lucide-react";

export default function CommercialGrounds() {
  return (
    <div className="min-h-screen bg-soft-cream text-slate font-sans">
      {/* Simple Hero for Grounds */}
      <section className="relative py-20 px-6 md:py-32 md:px-12 bg-slate text-white overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate/50 to-slate" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sun-ochre font-bold tracking-widest uppercase text-sm mb-6">
            Spring 2026 Scheduling Open
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Corporate Grounds Management
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comprehensive landscape maintenance for HOAs, retail centers, and corporate campuses. 
            One partner for every season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Request Proposal
            </Button>
            <Button href="tel:5135550123" variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate">
              (513) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Turf Management",
                desc: "Weekly mowing, fertilization, and aeration for pristine corporate lawns.",
              },
              {
                title: "Landscape Enhancements",
                desc: "Seasonal color, mulch installation, and plant health monitoring.",
              },
              {
                title: "Portering Services",
                desc: "Litter removal and site inspections to keep your property spotless.",
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-2xl shadow-card border border-slate/5 hover:shadow-card-hover transition-all duration-300">
                <h3 className="font-heading text-xl font-bold text-slate mb-3">{service.title}</h3>
                <p className="text-slate/70 mb-6 leading-relaxed">{service.desc}</p>
                <div className="h-1 w-12 bg-eucalyptus rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-white border-t border-slate/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate mb-6">
              The Stone & Salt Standard
            </h2>
            <p className="text-slate/70 text-lg mb-8 leading-relaxed">
              We don't just "mow lawns." We manage assets. Our proactive approach identifies issues before they become expensive problems.
            </p>
            <ul className="space-y-4">
              {[
                "Dedicated Account Manager for every property",
                "Monthly site inspection reports with photos",
                "Proactive enhancement proposals",
                "Bundled snow & ice management contracts"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate/80">
                  <Check className="h-5 w-5 text-sun-ochre shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 bg-slate/5 rounded-2xl overflow-hidden">
             {/* Placeholder for future image */}
             <div className="absolute inset-0 flex items-center justify-center text-slate/20 font-heading font-bold text-2xl">
               Property Portfolio
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
