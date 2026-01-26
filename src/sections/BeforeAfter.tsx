import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export function BeforeAfter() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Portfolio Coming Soon
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              Our portfolio is growing. Be one of our first clients and get the
              attention your project deserves — not just another job in the queue.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
