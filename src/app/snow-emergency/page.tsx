"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PHONE_NUMBER, PHONE_NUMBER_HREF } from "@/lib/constants";

const propertyTypes = [
  { value: "residential", label: "Residential Driveway" },
  { value: "estate", label: "Estate / Long Driveway" },
  { value: "commercial", label: "Commercial Lot" },
];

export default function SnowEmergencyPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    propertyType: "residential",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xkorbady", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          source: "snow-emergency-landing",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Track in GA4
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Snow Emergency",
          event_label: formState.propertyType,
          property_type: formState.propertyType,
          source: "snow_emergency_campaign",
        });
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-soft-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-16">
          <div className="w-20 h-20 mx-auto bg-eucalyptus/20 rounded-full flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate mb-4">
            Request Received
          </h1>
          <p className="text-lg text-slate/70 mb-8">
            We&apos;ll text you within 30 minutes to confirm your spot and give you an ETA.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
            <p className="text-sm text-slate/60 uppercase tracking-wide mb-2">Need us sooner?</p>
            <a
              href={PHONE_NUMBER_HREF}
              className="text-2xl font-bold text-sun-ochre hover:text-sun-ochre-dark transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </div>
          <Link href="/" className="text-slate/60 hover:text-slate text-sm underline">
            Visit our main site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Minimal Header */}
      <header className="bg-slate text-white py-3 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-montserrat)] font-bold text-lg">
            Stone & Salt
          </Link>
          <a
            href={PHONE_NUMBER_HREF}
            className="flex items-center gap-2 text-sm font-medium hover:text-sun-ochre transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_NUMBER}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight mb-6">
            Still buried?
          </h1>
          <p className="text-xl sm:text-2xl text-slate/70 max-w-2xl mx-auto mb-4">
            Your plow guy ghosted. We get it. <br className="hidden sm:block" />
            Let&apos;s get you out.
          </p>
          <p className="text-sun-ochre font-semibold">
            Serving Liberty Township, West Chester, Mason & surrounding areas
          </p>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-8 px-6 bg-white border-y border-slate/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-eucalyptus/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="font-semibold text-slate">We text you an ETA</p>
              <p className="text-sm text-slate/60">Then we actually show up</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-eucalyptus/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-semibold text-slate">Licensed & insured</p>
              <p className="text-sm text-slate/60">Real business, real coverage</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-eucalyptus/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="font-semibold text-slate">Damage? We fix it</p>
              <p className="text-sm text-slate/60">Lawn repair guaranteed in spring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate text-center mb-8">
            We handle properties of all sizes
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-card text-center">
              <p className="text-sm text-slate/60 uppercase tracking-wide mb-2">Standard Driveway</p>
              <p className="text-lg font-bold text-slate mb-1">Residential</p>
              <p className="text-sm text-slate/60">Quick turnaround</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card text-center border-2 border-sun-ochre">
              <p className="text-sm text-sun-ochre uppercase tracking-wide mb-2 font-semibold">Estate / Long Drive</p>
              <p className="text-lg font-bold text-slate mb-1">Large Properties</p>
              <p className="text-sm text-slate/60">Driveways over 100ft</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card text-center">
              <p className="text-sm text-slate/60 uppercase tracking-wide mb-2">Commercial</p>
              <p className="text-lg font-bold text-slate mb-1">Business Lots</p>
              <p className="text-sm text-slate/60">Lots, storefronts, HOAs</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate/50 mt-6">
            Contact us for pricing. Payment due on completion.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate text-center mb-2">
            Get on the schedule
          </h2>
          <p className="text-center text-slate/60 mb-8">
            We&apos;ll text you within 30 minutes to confirm.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
                placeholder="(513) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate mb-2">
                Service Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formState.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
                placeholder="123 Main St, Liberty Township, OH"
              />
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-slate mb-2">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formState.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate mb-2">
                Anything else? <span className="text-slate/40">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={formState.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white resize-none"
                placeholder="Stuck in driveway, need out by 8am..."
              />
            </div>

            <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Request Service"}
            </Button>
          </form>
        </div>
      </section>

      {/* Year-round hook */}
      <section className="py-12 px-6 bg-eucalyptus/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate/70 mb-2">Like how we work?</p>
          <p className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg mb-4">
            We do landscaping, hardscapes, and grounds maintenance year-round.
          </p>
          <Link
            href="/"
            className="text-sun-ochre font-semibold hover:text-sun-ochre-dark transition-colors underline underline-offset-4"
          >
            See our full services
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-6 bg-slate text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            Stone & Salt Landscaping &middot; Greater Cincinnati
          </p>
          <a
            href={PHONE_NUMBER_HREF}
            className="text-lg font-bold text-sun-ochre hover:text-sun-ochre-bright transition-colors"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate/10 p-4 flex gap-3 sm:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={PHONE_NUMBER_HREF}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate text-white font-semibold rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <button
          onClick={() => document.getElementById("address")?.scrollIntoView({ behavior: "smooth", block: "center" })}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-sun-ochre text-white font-semibold rounded-lg"
        >
          Request Service
        </button>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 sm:hidden" />
    </div>
  );
}
