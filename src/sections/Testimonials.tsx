import { FadeIn } from "@/components/FadeIn";

const guarantees = [
  {
    title: "$2M Liability Coverage on Every Property",
    description:
      "Your property is protected. We carry $2M in general liability, and your property can be added as additional insured. Documentation ready when your insurance company asks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Documented Service Logs for Every Visit",
    description:
      "GPS-tracked, timestamped logs for every service visit. When a tenant files a slip-and-fall claim or an insurance company requests proof of maintenance, your records are ready.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "4-Hour Response Guarantee During Business Hours",
    description:
      "When you reach out, you will hear back within 4 hours during business hours. No waiting days for a callback. Your time matters and we respect it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fixed Annual Pricing -- No Surprise Invoices",
    description:
      "Your grounds management cost is the same every month, January through December. One line item in your annual budget. No per-event surprises. No seasonal renegotiation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Direct Owner Access -- Not a Call Center",
    description:
      "You get a direct line to an owner who can make decisions and solve problems on the first call. Not a dispatcher. Not an answering service. A person who is accountable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
              What We Guarantee
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              We are building our reputation one property at a time.
              These are not marketing claims -- they are commitments we stand behind.
            </p>
          </div>
        </FadeIn>

        {/* Guarantees Grid - 3 top, 2 bottom centered */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.slice(0, 3).map((guarantee, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-slate/5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center text-eucalyptus mb-4">
                  {guarantee.icon}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg mb-3">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-slate/70 leading-relaxed flex-1">
                  {guarantee.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {guarantees.slice(3).map((guarantee, index) => (
            <FadeIn key={index + 3} delay={(index + 3) * 150}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-slate/5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center text-eucalyptus mb-4">
                  {guarantee.icon}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-lg mb-3">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-slate/70 leading-relaxed flex-1">
                  {guarantee.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
