import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "Finally found a landscaping company that actually shows up when they say they will. Our property looks better than ever, and I don't have to chase anyone down.",
    author: "Sarah M.",
    company: "Property Manager, Blue Ash",
    type: "commercial",
  },
  {
    quote:
      "The patio they built exceeded our expectations. Professional from start to finish, and the crew cleaned up every day. We use it constantly now.",
    author: "Mike & Jennifer T.",
    company: "Mason, OH",
    type: "residential",
  },
  {
    quote:
      "Having one vendor for landscaping and snow removal has simplified everything. No more scrambling in October to find a plow guy. Highly recommend.",
    author: "David R.",
    company: "HOA Board, Liberty Township",
    type: "commercial",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-warm-stone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
            Client Feedback
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Our reputation is built on reliability, quality work, and treating every
            property like our name depends on it — because it does.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate/5 hover:shadow-md transition-shadow duration-300 h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-sun-ochre"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate/80 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-slate/10">
                <p className="font-semibold text-slate">{testimonial.author}</p>
                <p className="text-sm text-slate/60">{testimonial.company}</p>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note about real testimonials */}
        <FadeIn delay={500}>
          <div className="mt-12 text-center">
            <p className="text-slate/60 text-sm italic">
              Real feedback from real clients in Greater Cincinnati
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
