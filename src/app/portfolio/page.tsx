import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { pageMetadata, portfolioItems } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Madison Landscaping Portfolio | Friendly Landscaping LLC",
  description:
    "View residential landscaping, patio, and native garden project examples from Friendly Landscaping LLC in the Madison area.",
  path: "/portfolio",
  image: "/images/patio_construction_1783540601760.png",
});

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Recent landscaping work
            </h1>
            <p className="text-xl text-secondary/90 leading-relaxed">
              A small look at the patio, planting, and garden work Friendly Landscaping handles for Madison-area homes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 0.08}
                className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-3">{item.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-white p-8 border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-primary">Planning a similar project?</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Call or send project details and we can talk through the site, timing, and the most practical next step.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
