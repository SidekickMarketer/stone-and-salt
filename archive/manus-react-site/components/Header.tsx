import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "./Button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

// Simplified navigation for Emergency Commercial Launch
const navigation = [
  { name: "Commercial Snow", href: "/snow-removal" },
  { name: "Commercial Grounds", href: "/commercial-grounds" },
  // Hidden for launch: Estate, Hardscapes, Residential
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-soft-cream/95 backdrop-blur-sm border-b border-slate/10 font-sans">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <span className="font-heading text-2xl font-bold text-slate tracking-tight group-hover:opacity-90 transition-opacity">
                  STONE <span className="text-sun-ochre">&</span> SALT
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className={`text-sm font-medium transition-colors hover:text-sun-ochre ${
                  location === item.href ? "text-sun-ochre" : "text-slate"
                }`}>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <a
              href="tel:+15135550123"
              className="flex items-center gap-2 text-sm font-medium text-slate hover:text-sun-ochre transition-colors"
            >
              <Phone className="h-4 w-4" />
              (513) 555-0123
            </a>
            <Button href="/snow-removal#contact" variant="primary">
              Emergency Service
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-slate hover:bg-slate/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate/10">
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-slate/5 ${
                      location === item.href ? "text-sun-ochre bg-slate/5" : "text-slate"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="mt-4 px-3 space-y-3 border-t border-slate/10 pt-4">
              <a
                href="tel:+15135550123"
                className="flex items-center justify-center gap-2 py-2 text-base font-medium text-slate"
              >
                <Phone className="h-4 w-4" />
                (513) 555-0123
              </a>
              <Button href="/snow-removal#contact" className="w-full justify-center">
                Emergency Service
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
