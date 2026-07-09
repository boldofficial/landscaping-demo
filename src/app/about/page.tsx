import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { business, pageMetadata } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: `About ${business.shortName} | Madison WI Landscaping`,
  description:
    "Learn about Friendly Landscaping LLC, a Madison-area landscaping company focused on practical yard care, hardscaping, native planting, and reliable service.",
  path: "/about",
});

export default function About() {
  return (
    <div className="bg-background">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Friendly Landscaping</h1>
            <p className="text-xl text-secondary/90 leading-relaxed">
              Residential landscaping, hardscaping, and seasonal property care for {business.serviceArea}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimatedSection className="space-y-10 text-gray-700">
            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-5">A practical approach to outdoor work</h2>
              <p className="text-lg leading-relaxed">
                Friendly Landscaping LLC focuses on the parts of a yard that affect everyday use: drainage, grade, planting choices, patio layout, bed edges, mulch depth, and seasonal cleanup. The goal is a property that looks cared for and works better through Wisconsin seasons.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-5">Environmentally conscious where it matters</h2>
              <p className="text-lg leading-relaxed">
                Sustainable landscaping starts with fit. We recommend native and regionally adapted plants when they match the site, use mulch and bed prep to protect soil, and plan pollinator-friendly gardens around the amount of sun, water, and maintenance the yard can support.
              </p>
            </section>

            <section className="rounded-xl bg-white p-8 border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">What to expect</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
                <li>A conversation about the actual problem in the yard before a solution is proposed.</li>
                <li>Service recommendations matched to the property, budget, and maintenance goal.</li>
                <li>Clear communication about the work, timing, and next step.</li>
              </ul>
            </section>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
