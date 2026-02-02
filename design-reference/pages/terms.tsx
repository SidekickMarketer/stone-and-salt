import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Stone & Salt terms of service. Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/70">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-soft-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate/70 mb-6">
              By accessing our website or using our services, you agree to be bound by these terms
              of service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Services
            </h2>
            <p className="text-slate/70 mb-6">
              Stone & Salt provides landscaping, hardscape installation, grounds maintenance, and
              snow removal services in the Greater Cincinnati area. Specific services, pricing, and
              terms are detailed in individual service agreements and proposals.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Service Agreements
            </h2>
            <p className="text-slate/70 mb-6">
              All services are subject to a written service agreement or accepted proposal. These
              agreements specify the scope of work, pricing, payment terms, and other conditions
              specific to your project or service plan.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Estimates and Pricing
            </h2>
            <p className="text-slate/70 mb-4">
              Estimates provided are based on information available at the time of assessment.
              Final pricing may vary if:
            </p>
            <ul className="list-disc pl-6 text-slate/70 mb-6 space-y-2">
              <li>Actual conditions differ from those assessed</li>
              <li>Additional work is requested or required</li>
              <li>Unforeseen circumstances arise during the project</li>
            </ul>
            <p className="text-slate/70 mb-6">
              Any changes to scope or pricing will be communicated and approved before proceeding.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Payment Terms
            </h2>
            <p className="text-slate/70 mb-6">
              Payment terms are specified in individual service agreements. Generally, maintenance
              contracts are billed monthly. Project work may require deposits and progress payments.
              Invoices are due within 30 days unless otherwise specified.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Cancellation
            </h2>
            <p className="text-slate/70 mb-6">
              Cancellation policies vary by service type and are detailed in your service agreement.
              Generally, maintenance contracts may be cancelled with 30 days written notice.
              Deposits on project work may be non-refundable once materials are ordered or work has
              begun.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Property Access
            </h2>
            <p className="text-slate/70 mb-6">
              By engaging our services, you authorize Stone & Salt and its employees to access your
              property to perform the agreed-upon services. Please ensure we have necessary access
              (gate codes, key arrangements) and that pets are secured during service visits.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Weather and Delays
            </h2>
            <p className="text-slate/70 mb-6">
              Outdoor services are weather-dependent. We will reschedule services when weather
              conditions make work unsafe or would compromise quality. We will communicate
              proactively about weather-related schedule changes.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Warranty
            </h2>
            <p className="text-slate/70 mb-6">
              Hardscape installations include a 2-year workmanship warranty. Material warranties
              are provided by manufacturers and vary by product. Warranty details are included in
              your project agreement.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-slate/70 mb-6">
              Stone & Salt maintains comprehensive general liability insurance. Our liability is
              limited to the value of services provided. We are not responsible for pre-existing
              conditions, acts of nature, or damage caused by third parties.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Website Use
            </h2>
            <p className="text-slate/70 mb-6">
              This website is provided for informational purposes. While we strive for accuracy,
              information may change without notice. Contact us directly for current pricing,
              availability, and service details.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Governing Law
            </h2>
            <p className="text-slate/70 mb-6">
              These terms are governed by the laws of the State of Ohio. Any disputes will be
              resolved in the courts of Butler County, Ohio.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Contact
            </h2>
            <p className="text-slate/70 mb-6">
              Questions about these terms? Contact us at:
            </p>
            <p className="text-slate/70 mb-6">
              Stone & Salt<br />
              Email: hello@stoneandsaltohio.com<br />
              Phone: (513) 555-0123
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
