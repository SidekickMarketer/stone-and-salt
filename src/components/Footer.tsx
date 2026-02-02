import Link from "next/link";

const services = [
  { name: "Snow & Ice Removal", href: "/services/snow-removal" },
  { name: "Commercial Grounds", href: "/services/commercial-grounds" },
];

const areas = [
  "Liberty Township",
  "Mason",
  "West Chester",
  "Blue Ash",
  "Indian Hill",
  "& surrounding areas",
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Commercial snow removal and grounds maintenance for Greater Cincinnati
              property managers.
            </p>
            <p className="mt-4 text-lg font-semibold text-eucalyptus">
              One vendor. Year-round.
            </p>
            <div className="mt-6">
              <a
                href="tel:+15135550123"
                className="text-xl font-semibold text-sun-ochre hover:text-sun-ochre/80 transition-colors"
              >
                (513) 555-0123
              </a>
              <p className="mt-1 text-sm text-white/70">
                <a href="mailto:hello@stoneandsaltohio.com" className="hover:text-white transition-colors">
                  hello@stoneandsaltohio.com
                </a>
              </p>
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
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm text-white/70">
                  {area}
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
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Stone & Salt. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Licensed & Insured in Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}
