const testimonials = [
  {
    quote:
      "[PLACEHOLDER] Finally found a landscaping company that actually shows up when they say they will. Our property looks better than ever.",
    author: "Property Manager",
    company: "Blue Ash Office Park",
    type: "commercial",
  },
  {
    quote:
      "[PLACEHOLDER] The patio they built exceeded our expectations. Professional from start to finish, and the crew was respectful of our property.",
    author: "Homeowner",
    company: "Mason, OH",
    type: "residential",
  },
  {
    quote:
      "[PLACEHOLDER] Having one vendor for landscaping and snow removal has been a game changer. No more coordinating multiple contractors.",
    author: "HOA Board President",
    company: "Liberty Township Community",
    type: "commercial",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-soft-cream">
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
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate/5"
            >
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
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-slate/70 hover:text-sun-ochre transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            See our Google Reviews
          </a>
          <p className="text-sm text-slate/50 mt-2">
            [Google Review link will be added once profile is active]
          </p>
        </div>
      </div>
    </section>
  );
}
