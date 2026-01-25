import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Paver Patio with Fire Pit",
    location: "Mason, OH",
    beforeImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=600&q=80",
    description: "Transformed unused backyard into an outdoor living area with paver patio and fire pit",
  },
  {
    title: "Backyard Hardscape",
    location: "Liberty Township, OH",
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=600&q=80",
    description: "Complete backyard transformation with natural stone walkway and patio",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sun-ochre font-semibold tracking-wide uppercase text-sm mb-3">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="group">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.beforeImage}
                    alt={`${project.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate/80 text-white text-xs font-medium rounded">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.afterImage}
                    alt={`${project.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-eucalyptus text-white text-xs font-medium rounded">
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
          <div className="mt-16 text-center">
            <p className="text-slate/70 mb-4">
              Your property could be next. Let&apos;s talk about what you have in mind.
            </p>
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
