"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

// Configure seasonal banner here - set to null to hide
const SEASONAL_BANNER = {
  message: "Early bird spring scheduling now open",
  shortMessage: "Spring scheduling open",
  ctaText: "Book now & save →",
  ctaLink: "/contact",
};

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
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <>
      {/* Seasonal Banner - Dismissible */}
      {SEASONAL_BANNER && !bannerDismissed && (
        <div className="bg-slate text-white py-2 px-4 text-center text-sm relative">
          <span className="hidden sm:inline font-medium">{SEASONAL_BANNER.message}</span>
          <span className="sm:hidden font-medium">{SEASONAL_BANNER.shortMessage}</span>
          <span className="mx-2 text-white/40">|</span>
          <a href={SEASONAL_BANNER.ctaLink} className="text-sun-ochre hover:text-sun-ochre/80 font-medium">
            {SEASONAL_BANNER.ctaText}
          </a>
          <button
            onClick={() => setBannerDismissed(true)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

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
            <Button href="/contact">Get a Free Quote</Button>
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
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>

    {/* Sticky Mobile Call Button - positioned left to not conflict with chat widget */}
    <a
      href="tel:+15135550123"
      className="lg:hidden fixed bottom-6 left-6 z-50 bg-sun-ochre text-white p-4 rounded-full shadow-lg hover:bg-sun-ochre/90 transition-colors"
      aria-label="Call us"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
    </>
  );
}
