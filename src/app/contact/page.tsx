import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { business, pageMetadata, services } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Request a Landscaping Quote in Madison WI | Friendly Landscaping LLC",
  description:
    "Call Friendly Landscaping LLC for Madison-area landscape design, patios, drainage, seasonal cleanup, mulch, native gardens, and yard care quotes.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Request a landscaping quote</h1>
            <p className="text-xl text-secondary/90 leading-relaxed">
              Call Friendly Landscaping LLC to talk through patio work, drainage, cleanup, planting, mulch, or a yard redesign in the Madison area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
            <AnimatedSection className="rounded-xl bg-white p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-5">Fastest way to reach us</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Call the number below and mention the project type, property location, and what you want to change in the yard.
              </p>

              <a
                href={business.phoneHref}
                className="block rounded-lg bg-primary px-6 py-5 text-center text-2xl font-bold text-white transition-colors hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {business.phone}
              </a>
              <p className="mt-5 text-sm text-gray-600">Serving {business.serviceArea}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="rounded-xl bg-white p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-5">Before you call</h2>
              <p className="text-gray-700 leading-relaxed">
                A few details help the first conversation move faster. You do not need everything ready, but these notes are useful if you have them.
              </p>
              <ul className="mt-7 space-y-4 text-gray-700">
                <li><strong className="text-primary">Project type:</strong> patio, drainage, retaining wall, cleanup, planting, mulch, power washing, or a full yard plan.</li>
                <li><strong className="text-primary">Location:</strong> neighborhood or nearby Madison-area community.</li>
                <li><strong className="text-primary">Timing:</strong> whether this is urgent, seasonal, or flexible.</li>
                <li><strong className="text-primary">Site issue:</strong> water, slope, weeds, old beds, damaged hardscape, or blank space.</li>
              </ul>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="font-bold text-primary mb-3">Services we can discuss</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href="/services"
                      className="rounded-full bg-secondary/70 px-3 py-1 text-sm font-medium text-primary hover:bg-accent"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
