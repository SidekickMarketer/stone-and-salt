import { Link } from "wouter";

const services = [
  { name: "Commercial Snow Removal", href: "/snow-removal" },
  { name: "Commercial Grounds", href: "/commercial-grounds" },
  // Hidden for launch: Estate, Hardscapes, Residential
];

const areas = [
  { name: "Liberty Township", href: "#" },
  { name: "West Chester", href: "#" },
  { name: "Oxford", href: "#" },
  { name: "Waynesville", href: "#" },
  { name: "Mason", href: "#" },
];

const company = [
  { name: "About", href: "#" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-white relative overflow-hidden font-sans">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <a className="inline-block">
                <span className="font-heading text-2xl font-bold tracking-tight">
                  STONE <span className="text-sun-ochre">&</span> SALT
                </span>
              </a>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Greater Cincinnati's premier commercial grounds partner. 
              Specializing in zero-tolerance snow management and corporate landscape maintenance.
            </p>
            <p className="mt-4 text-lg font-semibold text-eucalyptus">
              Four seasons. One call.
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
            <h3 className="font-heading font-semibold text-white mb-4">
              Commercial Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-sm text-white/70 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {areas.map((item) => (
                <li key={item.name}>
                  <span className="text-sm text-white/70 cursor-default">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <span className="text-sm text-white/70 cursor-default">
                    {item.name}
                  </span>
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
