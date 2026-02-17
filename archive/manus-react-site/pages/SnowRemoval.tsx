import { Check, Phone, Snowflake, Truck, ShieldAlert } from "lucide-react";
import { CommercialHero } from "@/components/CommercialHero";
import { Button } from "@/components/Button";

export default function SnowRemoval() {
  return (
    <div className="min-h-screen bg-soft-cream text-slate font-sans">
      <CommercialHero />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-slate">Transparent Commercial Pricing</h2>
            <p className="text-slate/60 text-lg">No haggling. No surprises. Professional rates for professional service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-soft-cream border border-slate/10 rounded-2xl p-8 relative overflow-hidden group hover:border-slate/30 transition-all shadow-card hover:shadow-card-hover">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate/20"></div>
              <h3 className="font-heading text-xl font-bold text-slate mb-2">Small Commercial</h3>
              <div className="text-4xl font-bold text-slate mb-1">$250+</div>
              <div className="text-sm text-slate/50 mb-6">Per Event / Per Inch</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Parking lot & access road clearing</span>
                </li>
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Sidewalk & entry safety</span>
                </li>
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Liability documentation</span>
                </li>
              </ul>
              <Button href="tel:5135550123" variant="outline" className="w-full">Call for Quote</Button>
            </div>

            {/* Tier 2 - Highlighted */}
            <div className="bg-slate text-white rounded-2xl p-8 relative overflow-hidden transform md:-translate-y-4 shadow-2xl shadow-slate/20">
              <div className="absolute top-0 right-0 bg-sun-ochre text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST REQUESTED
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Corporate / Retail</h3>
              <div className="text-4xl font-bold text-sun-ochre mb-1">Custom</div>
              <div className="text-sm text-white/50 mb-6">Priority Response</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Check className="h-5 w-5 text-sun-ochre shrink-0" />
                  <span>Zero-tolerance safety protocols</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Check className="h-5 w-5 text-sun-ochre shrink-0" />
                  <span>24/7 site monitoring</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Check className="h-5 w-5 text-sun-ochre shrink-0" />
                  <span>Pre-treatment & anti-icing</span>
                </li>
              </ul>
              <Button href="tel:5135550123" variant="primary" className="w-full">
                Book Priority Service
              </Button>
            </div>

            {/* Tier 3 */}
            <div className="bg-soft-cream border border-slate/10 rounded-2xl p-8 relative overflow-hidden group hover:border-slate/30 transition-all shadow-card hover:shadow-card-hover">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate/20"></div>
              <h3 className="font-heading text-xl font-bold text-slate mb-2">Industrial / HOA</h3>
              <div className="text-4xl font-bold text-slate mb-1">Contract</div>
              <div className="text-sm text-slate/50 mb-6">Large Scale Operations</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Heavy loader & skid steer work</span>
                </li>
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Snow hauling & relocation</span>
                </li>
                <li className="flex items-start gap-3 text-slate/70 text-sm">
                  <Check className="h-5 w-5 text-eucalyptus shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button href="tel:5135550123" variant="outline" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-6 bg-slate text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-sun-ochre">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">Local Crews</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Dispatched directly from Liberty Township and Oxford for rapid response times.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-sun-ochre">
                <Snowflake className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">Commercial Grade</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Heavy-duty plows, salters, and skid steers capable of handling deep accumulation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-sun-ochre">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">Liability Focused</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Detailed service logs and photos for every visit to protect your business.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-sun-ochre">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">Direct Contact</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  24/7 emergency line. You speak to a manager, not a call center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
