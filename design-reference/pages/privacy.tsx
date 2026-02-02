import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Stone & Salt privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/70">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-soft-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-slate/70 mb-4">
              When you contact Stone & Salt, we collect information you provide directly, including:
            </p>
            <ul className="list-disc pl-6 text-slate/70 mb-6 space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Property address and service location</li>
              <li>Service requests and project details</li>
              <li>Communication history with our team</li>
            </ul>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-slate/70 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate/70 mb-6 space-y-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and deliver services</li>
              <li>Communicate about your account and services</li>
              <li>Send service reminders and seasonal information (with your consent)</li>
              <li>Improve our services and customer experience</li>
            </ul>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="text-slate/70 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with service providers who assist us in operating our business (such as
              scheduling software or email services), but only as necessary to provide services to
              you.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Website Analytics
            </h2>
            <p className="text-slate/70 mb-6">
              We use Google Analytics to understand how visitors use our website. This service
              collects standard internet log information and visitor behavior patterns. This
              information is processed in a way that does not identify anyone individually.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-slate/70 mb-6">
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-slate/70 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate/70 mb-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-slate/70 mb-6">
              If you have questions about this privacy policy or want to exercise your rights,
              contact us at:
            </p>
            <p className="text-slate/70 mb-6">
              Stone & Salt<br />
              Email: hello@stoneandsaltohio.com<br />
              Phone: (513) 555-0123
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-slate/70 mb-6">
              We may update this privacy policy from time to time. We will notify you of any
              significant changes by posting the new policy on this page and updating the &quot;last
              updated&quot; date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
