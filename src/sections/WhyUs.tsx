import { FadeIn } from "@/components/FadeIn";

export function WhyUs() {
  const reasons = [
    {
      title: "One Call, Every Season",
      description:
        "Stop juggling vendors. Landscaping, maintenance, and snow removal from one team that actually answers the phone.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "We Show Up",
      description:
        "Reliability isn't a sales pitch here. When we say we'll be there, we're there. Your property won't wait, and neither will we.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Same Crew, Same Standards",
      description:
        "Your property gets treated by the same trained team every time. No surprises, no inconsistent work, no excuses.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Built Right the First Time",
      description:
        "We do the job correctly from the start. No shortcuts, no callbacks for things that should have been done right.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      description:
        "You'll know what's happening, when, and how much it costs. No surprises on your invoice, no unanswered calls.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Local & Licensed",
      description:
        "Based in Liberty Township. We're your neighbors, fully licensed and insured. Our reputation is built right here.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-eucalyptus/15">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn>
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Why Stone & Salt
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold">
                <span className="text-slate block">Reliability you can count on.</span>
                <span className="block text-slate/70 mt-1">Every season.</span>
              </h2>
              <p className="mt-6 text-lg text-slate/70 leading-relaxed">
                Most landscaping companies are fine until they&apos;re not. Missed appointments,
                inconsistent crews, calls that go to voicemail. We built Stone & Salt to be different.
              </p>
              <p className="mt-4 text-lg text-slate/70 leading-relaxed">
                You get my cell number. I answer. That&apos;s how we do business.
              </p>

              {/* Personal touch - owner commitment */}
              {/* 
                TODO: ADD OWNER PHOTO
                Replace the placeholder icon below with a real headshot.
                Save as /public/images/kyle-headshot.jpg (at least 200x200px)
                Then uncomment the Image component and delete the SVG placeholder.
              */}
              <div className="mt-8 p-6 bg-white rounded-xl shadow-card border border-eucalyptus/20">
                <div className="flex items-start gap-4">
                  {/* TODO: Replace this placeholder with real headshot:
                  <Image
                    src="/images/kyle-headshot.jpg"
                    alt="Kyle, Owner of Stone & Salt"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  */}
                  <div className="w-12 h-12 rounded-full bg-eucalyptus/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate">Our Promise</p>
                    <p className="text-sm text-slate/70 mt-1">
                      &ldquo;When you call Stone & Salt, you&apos;re not getting a call center. You&apos;re getting me.
                      I live in Liberty Township, my kids go to school here, and my reputation is built on
                      every job we do.&rdquo;
                    </p>
                    <p className="text-sm font-medium text-sun-ochre mt-2">— Kyle, Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Reasons Grid - Show 3 on mobile, all 6 on larger screens */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 100}>
                <div className={`p-5 lg:p-6 rounded-xl bg-white shadow-card border border-eucalyptus/10 hover:border-eucalyptus/30 hover:shadow-card-hover transition-colors duration-300 h-full ${index >= 3 ? 'hidden sm:block' : ''}`}>
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
