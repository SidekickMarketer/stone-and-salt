import { Button } from "@/components/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-soft-cream text-slate font-sans pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate/70 mb-12 leading-relaxed">
              Emergency snow response or commercial grounds proposal? 
              We're ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-sun-ochre/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-sun-ochre" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Phone</h3>
                  <p className="text-slate/60 mb-2">24/7 Emergency Line</p>
                  <a href="tel:5135550123" className="text-2xl font-bold text-slate hover:text-sun-ochre transition-colors">
                    (513) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-eucalyptus/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-eucalyptus" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                  <p className="text-slate/60 mb-2">Proposals & General Inquiries</p>
                  <a href="mailto:hello@stoneandsaltohio.com" className="text-xl font-medium text-slate hover:text-eucalyptus transition-colors">
                    hello@stoneandsaltohio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-slate/5 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-slate" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Hours</h3>
                  <p className="text-slate/60">
                    <span className="font-semibold text-slate">Snow Events:</span> 24/7 Monitoring<br />
                    <span className="font-semibold text-slate">Office:</span> Mon-Fri, 8am - 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-white p-8 rounded-2xl shadow-card border border-slate/5">
            <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre outline-none transition-all"
                    placeholder="(513) 555-0123"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-slate">Property Address</label>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre outline-none transition-all"
                  placeholder="123 Business Park Dr, Liberty Twp"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre outline-none transition-all bg-white"
                >
                  <option>Emergency Snow Removal</option>
                  <option>Commercial Grounds Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre outline-none transition-all resize-none"
                  placeholder="Tell us about your property needs..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center text-lg h-12">
                Send Request
              </Button>
              <p className="text-xs text-center text-slate/40">
                For immediate snow emergencies, please call instead of emailing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
