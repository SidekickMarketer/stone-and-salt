import { FadeIn } from "@/components/FadeIn";

const promises = [
  {
    title: "4-Hour Response Guarantee",
    description:
      "When you reach out, you'll hear back within 4 hours during business hours. No waiting days for a callback. Your time matters.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Clear, Upfront Pricing",
    description:
      "No surprises, no hidden fees. You'll know exactly what your project costs before we start. The quote is the price.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Done Right or We Fix It Free",
    description:
      "If something isn't right, we'll make it right at no extra cost. Our reputation depends on your satisfaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-soft-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Our Commitment
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              What We Promise
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              We&apos;re a new company building our reputation one project at a time.
              These aren&apos;t marketing claims — they&apos;re commitments we stand behind.
            </p>
          </div>
        </FadeIn>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {promises.map((promise, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-slate/5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center text-eucalyptus mb-4">
                  {promise.icon}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg mb-3">
                  {promise.title}
                </h3>

                {/* Description */}
                <p className="text-slate/70 leading-relaxed flex-1">
                  {promise.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
