import { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Stone & Salt is Greater Cincinnati's year-round outdoor partner. Based in Liberty Township, we deliver professional landscaping, hardscapes, and snow removal with reliability you can count on.",
  openGraph: {
    title: "About Stone & Salt",
    description:
      "Greater Cincinnati's year-round outdoor partner. Professional landscaping, hardscapes, and snow removal.",
  },
};

const values = [
  {
    title: "Show Up",
    description:
      "Reliability isn't complicated. When we say we'll be there, we're there. When we say we'll call back, we call back. This shouldn't be remarkable, but it is.",
  },
  {
    title: "Do It Right",
    description:
      "Shortcuts create callbacks. We take the time to do things properly the first time — proper prep, quality materials, attention to detail.",
  },
  {
    title: "Own It",
    description:
      "Your property gets treated like our name is on the line. Because it is. We're not hiding behind a corporate entity — we're building a reputation.",
  },
  {
    title: "Keep It Simple",
    description:
      "Clear communication, straightforward pricing, honest recommendations. No games, no upselling you don't need, no surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl font-bold text-white leading-tight">
              Built different. On purpose.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Stone & Salt exists because too many property owners have been let down by
              landscaping companies that overpromise and underdeliver. We set out to build
              something better.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
                Started with a simple question: Why is this so hard?
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate/70 leading-relaxed">
                <p>
                  Finding a reliable landscaping company shouldn&apos;t feel like a gamble. But talk
                  to any property manager or homeowner, and you&apos;ll hear the same stories: crews
                  that don&apos;t show up, quality that varies wildly, calls that go to voicemail.
                </p>
                <p>
                  Stone & Salt started with a commitment to do things differently. Not with
                  flashier marketing or cheaper prices, but with the basics done right: show up when
                  you say you will, do quality work, and actually answer the phone when clients
                  call.
                </p>
                <p>
                  We built a company around reliability because we believe that&apos;s what clients
                  actually want. Not promises — results. Not excuses — solutions.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-eucalyptus/20 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80"
                alt="Professional landscaping work in progress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
              Why &ldquo;Stone & Salt&rdquo;?
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              <strong className="text-slate">Stone</strong> represents what we build — patios,
              walkways, retaining walls, outdoor living spaces. Permanent improvements that add
              value and function to your property.
            </p>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              <strong className="text-slate">Salt</strong> represents what we do when winter hits —
              keeping properties safe and accessible when the weather doesn&apos;t cooperate.
            </p>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              Together, they represent our commitment to year-round service. One team that handles
              your property through every season. <span className="text-sun-ochre font-semibold">Four seasons. One call.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-eucalyptus font-semibold tracking-wide uppercase text-sm mb-3">
              How We Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white">
              Simple principles. Consistent execution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white/5 rounded-xl p-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Based Locally */}
      <section className="py-20 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-eucalyptus/20 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                  alt="Suburban neighborhood in Greater Cincinnati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
                Local Business
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-slate">
                Based in Liberty Township. Serving Greater Cincinnati.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate/70 leading-relaxed">
                <p>
                  We&apos;re not a franchise or a corporate outfit. Stone & Salt is a locally owned
                  business with a simple goal: build a reputation in our community by doing great
                  work.
                </p>
                <p>
                  Our service area covers the communities within about 45 minutes of Liberty
                  Township — Mason, West Chester, Blue Ash, Loveland, Indian Hill, and the
                  surrounding areas. Close enough that we know the neighborhoods, the weather
                  patterns, and the local expectations.
                </p>
                <p>
                  When you work with Stone & Salt, you&apos;re working with your neighbors. We live
                  here. Our kids go to school here. Our reputation is built right here.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/areas">View Service Areas</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed & Insured */}
      <section className="py-16 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                Licensed & Insured
              </h3>
              <p className="mt-2 text-slate/70">
                Fully licensed in Ohio with comprehensive liability coverage. We carry the
                credentials your property requires.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate">
                Ohio Nursery Stock License
              </div>
              <div className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate">
                Commercial Pesticide Applicator
              </div>
              <div className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate">
                $2M General Liability
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's work together"
        description="Ready to experience what reliable service actually looks like? Let's talk about your property."
      />
    </>
  );
}
