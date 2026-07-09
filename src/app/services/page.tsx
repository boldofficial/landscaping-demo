import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { pageMetadata, services } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Landscaping Services in Madison WI | Friendly Landscaping LLC",
  description:
    "Landscape design, patios, retaining walls, grading, drainage, mulch, tree planting, native gardens, cleanup, and power washing in the Madison area.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-background pb-24">
      <section className="relative min-h-[52vh] overflow-hidden bg-primary text-white">
        <Image
          src="/images/services/landscape_design.png"
          alt="Layered residential landscape design with lawn, garden beds, stone paths, and mature plantings"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-primary/20" />

        <div className="container relative z-10 mx-auto px-6 py-28 md:px-12 md:py-36">
          <AnimatedSection className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              Landscaping services for Madison yards that need a practical plan.
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary/90 leading-relaxed">
              From drainage problems and worn patios to native beds and seasonal cleanup, Friendly Landscaping LLC handles the outdoor work that makes a yard easier to use and maintain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pt-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={0.05}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex whitespace-nowrap rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Request a Quote
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
