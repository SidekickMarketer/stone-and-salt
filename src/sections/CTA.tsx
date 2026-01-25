import { Button } from "@/components/Button";

interface CTAProps {
  variant?: "primary" | "secondary";
  title?: string;
  description?: string;
}

export function CTA({
  variant = "primary",
  title = "Ready to get started?",
  description = "Get a free, no-obligation quote for your property. We respond within 4 hours during business hours.",
}: CTAProps) {
  if (variant === "secondary") {
    return (
      <section className="py-16 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-slate">
                {title}
              </h2>
              <p className="mt-2 text-slate/70">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <a
                href="tel:+15135550123"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-slate font-semibold hover:text-sun-ochre transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (513) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-sun-ochre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/90">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-sun-ochre hover:bg-white/90"
            >
              Get a Free Quote
            </Button>
            <a
              href="tel:+15135550123"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold border-2 border-white rounded-md hover:bg-white hover:text-sun-ochre transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (513) 555-0123
            </a>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            Free estimates • No obligation • Response within 4 hours
          </p>
        </div>
      </div>
    </section>
  );
}
