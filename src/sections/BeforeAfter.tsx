import Image from "next/image";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

/*
 * ============================================================
 * TODO: REPLACE WITH REAL BEFORE/AFTER PHOTOS
 * ============================================================
 * These are stock photos. Replace with actual project photos.
 * 
 * For each project you need:
 * - beforeImage: Photo of the yard BEFORE you started
 * - afterImage: Photo of the completed project (same angle if possible)
 * - title: What you built (be specific: "400 sq ft paver patio")
 * - location: City only is fine for privacy
 * - description: What the transformation was + timeline
 * 
 * Tip: Take before photos on every job starting now!
 * Even phone photos work if lighting is decent.
 * ============================================================
 */
const projects = [
  {
    title: "650 sq ft Paver Patio + Custom Fire Pit", // TODO: Update with real project details
    location: "Mason, OH", // TODO: Update with real location
    beforeImage: "/images/before-backyard-1.jpg", // TODO: Replace with real before photo
    afterImage: "/images/after-patio-firepit.jpg", // TODO: Replace with real after photo
    description: "Overgrown grass lot → 650 sq ft Belgard paver patio with integrated fire pit and seating wall. Completed in 8 days.",
  },
  {
    title: "Full Backyard Hardscape Renovation", // TODO: Update with real project details
    location: "Liberty Township, OH", // TODO: Update with real location
    beforeImage: "/images/before-backyard-2.jpg", // TODO: Replace with real before photo
    afterImage: "/images/after-hardscape.jpg", // TODO: Replace with real after photo
    description: "Sloped, unusable yard → multi-level Techo-Bloc patio with natural stone walkway and retaining wall. 12-day project.",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-4">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-slate">
              See the Transformation
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              Real projects from properties in Greater Cincinnati. Quality work that
              speaks for itself.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="group">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate/10">
                    <Image
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-slate/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate/10">
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-eucalyptus backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      After
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-slate text-xl">
                  {project.title}
                </h3>
                <p className="text-sm text-sun-ochre font-medium mt-1">{project.location}</p>
                <p className="text-slate/70 mt-2">{project.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <p className="text-slate/70 mb-6">
              Your property could be next. Let&apos;s talk about what you have in mind.
            </p>
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
