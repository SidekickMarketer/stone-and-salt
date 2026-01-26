"use client";

import { useState } from "react";
import { Button } from "./Button";

const services = [
  { value: "commercial", label: "Commercial Grounds Maintenance" },
  { value: "snow", label: "Snow & Ice Removal" },
  { value: "hardscape", label: "Residential Hardscapes" },
  { value: "maintenance", label: "Lawn & Maintenance" },
  { value: "other", label: "Other / Not Sure" },
];

const propertyTypes = [
  { value: "commercial", label: "Commercial Property" },
  { value: "hoa", label: "HOA / Community" },
  { value: "residential", label: "Residential" },
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    service: "",
    message: "",
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
      // In production, this would submit to an API endpoint
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log form data (replace with actual form submission)
      console.log("Form submitted:", formState);

      // Track form submission in GA4
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Contact",
          event_label: formState.service,
          service_type: formState.service,
          property_type: formState.propertyType,
        });
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto bg-eucalyptus/20 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-eucalyptus"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-slate">
          Thanks for reaching out!
        </h3>
        <p className="mt-3 text-slate/70">
          We&apos;ve received your message and will get back to you within 4 hours during business
          hours.
        </p>
        <p className="mt-4 text-sm text-slate/60">
          Need immediate assistance? Call us at{" "}
          <a href="tel:+15135550123" className="text-sun-ochre font-semibold">
            (513) 555-0123
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
            Name *
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
            Phone *
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
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-slate mb-2">
            Property Type *
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            value={formState.propertyType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
          >
            <option value="">Select...</option>
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate mb-2">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white"
          >
            <option value="">Select...</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-sun-ochre focus:ring-2 focus:ring-sun-ochre/20 outline-none transition-colors bg-white resize-none"
          placeholder="Property address, what you're looking for, timeline, budget range (if known)..."
        />
      </div>

      <div>
        <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>

      <p className="text-xs text-slate/50 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-slate">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
