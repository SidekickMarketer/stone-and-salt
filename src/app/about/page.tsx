import { Metadata } from "next";
import { Button } from "@/components/Button";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CTA } from "@/sections/CTA";
import { PHONE_NUMBER, PHONE_NUMBER_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Stone & Salt | Owner-Operated Grounds Management",
  description:
    "Stone & Salt is an owner-operated grounds management company serving commercial properties in Greater Cincinnati. Two owners. Year-round accountability. Documented service.",
  openGraph: {
    title: "About Stone & Salt",
    description:
      "Owner-operated grounds management for commercial properties in Greater Cincinnati.",
  },
};

const promises = [
  {
    title: "Direct Access to an Owner",
    description:
      "Not a call center. Not a dispatcher. A person who can make decisions and solve problems on the first call.",
  },
  {
    title: "Documented Service for Every Visit",
    description:
      "Timestamps, GPS data, and photos. Your records are always available when you need them.",
  },
  {
    title: "Fixed Annual Pricing",
    description:
      "No surprises. Your budget is your budget. The same amount every month, January through December.",
  },
  {
    title: "4-Hour Response Guarantee",
    description:
      "During business hours, you hear back within 4 hours. For snow events, your property is serviced per contract specifications.",
  },
  {
    title: "$2M General Liability Coverage",
    description:
      "Your property can be added as additional insured. Documentation ready when your insurance company asks.",
  },
  {
    title: "Local Operations",
    description:
      "Based in Liberty Township. We serve Butler, Warren, and Hamilton counties. Your property is never more than 45 minutes away.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-soft-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              About Stone &amp; Salt
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate leading-tight">
              Owner-operated. Locally built. Accountable to every property we manage.
            </h1>
            <p className="mt-6 text-xl text-slate/70 leading-relaxed">
              Stone &amp; Salt is a year-round grounds management company serving commercial
              properties in Greater Cincinnati. We are not a franchise. We are not a national
              chain. We are two owners who built this company to solve the vendor reliability
              problem that property managers deal with every season.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
                Why we started Stone &amp; Salt.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate/70 leading-relaxed">
                <p>
                  We kept hearing the same thing from property managers: their landscaper
                  disappears in November, their snow contractor does not start until
                  December, and nobody owns the gaps in between.
                </p>
                <p>
                  We built Stone &amp; Salt to be the company we would want managing our
                  own properties. One team. One contract. Year-round accountability.
                  Documented service that protects you when it matters.
                </p>
                <p>
                  We are not trying to be the biggest grounds management company in
                  Cincinnati. We are trying to be the most reliable one.
                </p>
              </div>
            </div>
            {/* TODO: Replace with real photography - crew working on a commercial property */}
            <PhotoPlaceholder
              label="Team at Work Photography"
              icon="users"
            />
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate text-center mb-8">
              Two owners. Clear responsibilities.
            </h2>
            <div className="space-y-4 text-lg text-slate/70 leading-relaxed text-center">
              <p>
                Stone &amp; Salt is a 50/50 partnership with a clear division of labor.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-soft-cream rounded-2xl p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl mb-4">
                  Business Operations
                </h3>
                <p className="text-slate/70 leading-relaxed">
                  Sales, client relationships, scheduling, proposals, and contract management.
                  When you call, this is who picks up.
                </p>
              </div>
              <div className="bg-soft-cream rounded-2xl p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl mb-4">
                  Field Operations
                </h3>
                <p className="text-slate/70 leading-relaxed">
                  Crew oversight, equipment management, quality control, and service delivery.
                  When your property is being serviced, this is who ensures it meets our standards.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg text-slate/70 leading-relaxed text-center">
              This is not a side project or a seasonal hustle. This is our full-time operation,
              and our reputations are built on every property we manage.
            </p>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-16 lg:py-24 bg-eucalyptus/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              Why &ldquo;Stone &amp; Salt&rdquo;?
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              <strong className="text-slate">Stone</strong> represents what we build -- patios,
              walkways, retaining walls, site improvements. Permanent work that adds value and
              function to your property.
            </p>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              <strong className="text-slate">Salt</strong> represents what we do when winter hits --
              keeping properties safe and accessible when the weather does not cooperate.
            </p>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              Together, they represent our commitment to year-round service. One team that handles
              your property through every season. <span className="text-gradient font-semibold">Four seasons. One call.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get -- Promise Section */}
      <section className="py-16 lg:py-24 bg-slate">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">
              What you get from us.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((promise) => (
              <div key={promise.title} className="bg-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/10 transition-colors duration-300">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg mb-3">
                  {promise.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Based Locally */}
      <section className="py-16 lg:py-24 bg-soft-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* TODO: Replace with real photography - completed commercial property */}
              <PhotoPlaceholder
                label="Commercial Property Walkthrough"
                icon="property"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
                Local Business
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
                Based in Liberty Township. Serving Greater Cincinnati.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-slate/70 leading-relaxed">
                <p>
                  We are not a franchise or a corporate outfit. Stone &amp; Salt is a locally owned
                  business with a simple goal: build a reputation in our community by doing great
                  work for every property we manage.
                </p>
                <p>
                  Our service area covers Mason, West Chester, Blue Ash, Loveland, Indian Hill,
                  and surrounding communities -- close enough that we know the neighborhoods,
                  the weather patterns, and what local property managers expect.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/areas">View Service Areas</Button>
                <a
                  href={PHONE_NUMBER_HREF}
                  className="inline-flex items-center gap-2 text-sun-ochre font-semibold hover:text-sun-ochre/80 transition-colors min-h-[44px]"
                >
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let us earn your business."
        description="We know we are the new company asking for your trust. Schedule a site assessment and let our work speak for itself. No obligation. No pressure. Just a walkthrough and a conversation."
      />
    </>
  );
}
