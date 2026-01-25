"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

const navigation = [
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Commercial Grounds", href: "/services/commercial-grounds" },
      { name: "Snow & Ice Removal", href: "/services/snow-removal" },
      { name: "Residential Hardscapes", href: "/services/hardscapes" },
      { name: "Lawn & Maintenance", href: "/services/maintenance" },
    ],
  },
  { name: "Areas We Serve", href: "/areas" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-soft-cream/95 backdrop-blur-sm border-b border-slate/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate tracking-tight">
                STONE <span className="text-sun-ochre">&</span> SALT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) =>
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-slate hover:text-sun-ochre transition-colors"
                    aria-expanded={servicesOpen}
                  >
                    {item.name}
                    <svg
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="bg-white rounded-lg shadow-lg ring-1 ring-slate/10 py-2 min-w-[220px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-slate hover:bg-eucalyptus/20 hover:text-slate transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate hover:text-sun-ochre transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <a
              href="tel:+15135550123"
              className="text-sm font-medium text-slate hover:text-sun-ochre transition-colors"
            >
              (513) 555-0123
            </a>
            <Button href="/contact">Get a Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-slate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate/10">
            <div className="space-y-1">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-base font-medium text-slate/60">
                      {item.name}
                    </div>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-6 py-2 text-base text-slate hover:bg-eucalyptus/20"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-slate hover:bg-eucalyptus/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4 px-3 space-y-3">
              <a
                href="tel:+15135550123"
                className="block text-center py-2 text-base font-medium text-slate"
              >
                (513) 555-0123
              </a>
              <Button href="/contact" className="w-full justify-center">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
