import Link from "next/link";
import { PHONE_NUMBER, PHONE_NUMBER_HREF, EMAIL } from "@/lib/constants";

const services = [
  { name: "Commercial Grounds", href: "/services/commercial-grounds" },
  { name: "Snow & Ice Management", href: "/services/snow-removal" },
  { name: "Hardscapes", href: "/services/hardscapes" },
  { name: "Residential Services", href: "/services/maintenance" },
];

const areas = [
  { name: "Liberty Township", href: "/areas/liberty-township" },
  { name: "Mason", href: "/areas/mason" },
  { name: "West Chester", href: "/areas/west-chester" },
  { name: "Blue Ash", href: "/areas/blue-ash" },
  { name: "Indian Hill", href: "/areas/indian-hill" },
  { name: "View All Areas", href: "/areas" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-tight">
                STONE <span className="text-sun-ochre">&</span> SALT
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Year-round commercial grounds management for Greater Cincinnati.
              One vendor. Four seasons. Documented service.
            </p>
            <p className="mt-4 text-lg font-semibold text-eucalyptus">
              Four seasons. One call.
            </p>
            <div className="mt-6">
              <a
                href={PHONE_NUMBER_HREF}
                className="text-xl font-semibold text-sun-ochre hover:text-sun-ochre/80 transition-colors inline-block"
              >
                {PHONE_NUMBER}
              </a>
              <p className="mt-1 text-sm text-white/70">
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </p>
              <p className="mt-2 text-xs text-white/50">
                Mon-Fri 7am-6pm, Sat 8am-2pm
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md bg-sun-ochre text-white hover:bg-sun-ochre/90 transition-colors"
              >
                Request Site Assessment
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {areas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-3">Based in Liberty Township</h4>
              <p className="text-sm text-white/70">
                Serving Greater Cincinnati<br />
                within 45 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Stone &amp; Salt. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Licensed &amp; Insured in Ohio | $2M Liability Coverage
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span>GPS-Documented Service</span>
            <span className="text-white/20">|</span>
            <span>4-Hour Response Guarantee</span>
            <span className="text-white/20">|</span>
            <span>Fixed Annual Pricing</span>
            <span className="text-white/20">|</span>
            <span>Owner-Operated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
