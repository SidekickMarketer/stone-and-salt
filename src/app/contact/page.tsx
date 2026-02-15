import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PHONE_NUMBER, PHONE_NUMBER_HREF, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Site Assessment | Contact Stone & Salt",
  description:
    "Request a site assessment for commercial grounds management or snow removal in Greater Cincinnati. We respond within 4 hours during business hours.",
  openGraph: {
    title: "Contact Stone & Salt",
    description:
      "Request a site assessment for commercial grounds management in Greater Cincinnati.",
  },
};

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We respond to all inquiries within 4 hours during business hours (Mon-Fri 7am-6pm, Sat 8am-2pm). If you reach out on a weekend evening or holiday, you will hear from us first thing the next business day.",
  },
  {
    question: "How do site assessments work?",
    answer:
      "We provide complimentary site assessments for all commercial properties. We walk your property, assess scope, identify problem areas, and discuss your requirements. You receive a detailed proposal with fixed annual pricing within 48-72 hours.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Greater Cincinnati within approximately 45 minutes of Liberty Township, including Mason, West Chester, Blue Ash, Loveland, Indian Hill, Anderson Township, Hyde Park, and Montgomery.",
  },
  {
    question: "What is the best way to reach you for urgent issues?",
    answer:
      "For existing clients with urgent issues, call our main line. For snow emergencies during winter, this line is monitored 24/7.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              Request a Site Assessment
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Tell us about your property. We respond within 4 hours during business hours
              and schedule a complimentary walkthrough within the week.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-card">
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mb-6">
                  Tell Us About Your Property
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sun-ochre/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-sun-ochre"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate">Phone</h3>
                      <a
                        href={PHONE_NUMBER_HREF}
                        className="text-lg text-sun-ochre font-semibold hover:text-sun-ochre/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-sm"
                      >
                        {PHONE_NUMBER}
                      </a>
                      <p className="text-sm text-slate/60 mt-1">
                        Mon-Fri 7am-6pm, Sat 8am-2pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sun-ochre/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-sun-ochre"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate">Email</h3>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-sun-ochre hover:text-sun-ochre/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sun-ochre focus-visible:outline-offset-2 rounded-sm"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sun-ochre/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-sun-ochre"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate">Service Area</h3>
                      <p className="text-slate/70">
                        Based in Liberty Township<br />
                        Serving Greater Cincinnati within 45 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Commitment */}
              <div className="bg-eucalyptus/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-gradient">4hr</div>
                  <div>
                    <h3 className="font-semibold text-slate">Response Guarantee</h3>
                    <p className="text-sm text-slate/70 mt-1">
                      We respond to every inquiry within 4 hours during business hours. You will
                      not be left wondering if we got your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate/10 pb-8">
                  <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate text-lg">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-slate/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
