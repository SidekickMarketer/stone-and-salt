import { FadeIn } from "@/components/FadeIn";

export function WhyUs() {
  const reasons = [
    {
      title: "One Vendor, Every Season",
      description:
        "One contract covers grounds maintenance and snow removal. One invoice. One point of contact. No coordination between seasonal vendors, no gaps in coverage, no finger-pointing when something goes wrong.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Documented Service",
      description:
        "Every visit logged with timestamps, GPS data, and photos. Your service records are available on request -- critical when a tenant reports a slip-and-fall or an insurance adjuster asks for proof of service.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Predictable Budgets",
      description:
        "Annual contracts with fixed monthly billing. You know exactly what grounds management costs in January and in July. No surprise invoices, no seasonal renegotiation, no budget chaos.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Response Time Guarantee",
      description:
        "4-hour response during business hours. For snow events, your property is serviced based on contract specifications -- typically cleared before your first employees arrive. We commit to times and we meet them.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Owner Accountability",
      description:
        "You deal directly with an owner, not a regional manager rotating through three states. When you call, a decision-maker picks up. Problems get solved on the first call, not escalated through a corporate chain.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Local Operations",
      description:
        "Based in Liberty Township, operating across Butler, Warren, and Hamilton counties. We know which lots flood, which sidewalks ice first, and which properties need extra attention after a February ice storm.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-eucalyptus/10 to-eucalyptus/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn>
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Why Stone &amp; Salt
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold">
                <span className="text-slate block">Your property managed. Your liability documented.</span>
                <span className="block text-slate/70 mt-1">Your vendor headaches gone.</span>
              </h2>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed">
                We built this company because property managers deserve better than what
                the nationals deliver and what the one-truck operators can sustain.
              </p>

              {/* Owner quote */}
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-card border border-eucalyptus/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-eucalyptus/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate">Our Promise</p>
                    <p className="text-sm text-slate/70 mt-1">
                      &ldquo;When you call Stone &amp; Salt, a decision-maker answers. Not a dispatcher.
                      Not a voicemail tree. We are owner-operators who built this company on one
                      principle: your property gets managed like our name is on the building.
                      Because it is.&rdquo;
                    </p>
                    <p className="text-sm font-medium text-sun-ochre mt-2">&mdash; Stone &amp; Salt Ownership</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Reasons Grid - Show 3 on mobile, all 6 on larger screens */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 100}>
                <div className="p-5 lg:p-6 rounded-xl bg-white shadow-card border border-eucalyptus/10 hover:border-eucalyptus/30 hover:shadow-card-hover transition-colors duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-eucalyptus/20 flex items-center justify-center text-eucalyptus mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-slate">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
