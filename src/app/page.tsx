import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBrand from "@/components/HeroBrand";
import { pageMetadata, services } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Friendly Landscaping LLC | Madison Landscape Design, Patios & Drainage",
  description:
    "Madison-area landscaping for patios, drainage, seasonal cleanup, mulch, retaining walls, native gardens, and practical yard design.",
  path: "/",
});

const featuredServices = services.slice(0, 4);
const additionalServices = services.slice(4);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[76vh] overflow-hidden bg-primary text-white">
        <Image
          src="/images/hero_landscaping_1783540594251.png"
          alt="Finished residential landscape with lawn and garden beds in the Madison area"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-primary/20" />

        <div className="container absolute inset-x-0 top-4 z-20 mx-auto px-6 md:px-12">
          <HeroBrand />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 py-24 md:py-32">
          <AnimatedSection className="max-w-3xl pt-16">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent">
              Landscaping for Madison-area homes
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-balance leading-tight">
              Patios, drainage, native gardens, and cleaner yard structure.
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-secondary leading-relaxed">
              Friendly Landscaping LLC helps homeowners plan and maintain outdoor spaces that work with Wisconsin weather: usable patios, healthier beds, better drainage, and seasonal cleanup when the yard needs a reset.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center whitespace-nowrap rounded-md bg-accent px-7 py-3 font-semibold text-primary transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center whitespace-nowrap rounded-md border border-white/70 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                See Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/patio_construction_1783540601760.png"
                  alt="Stone patio with seating area and fire pit in a residential backyard"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
                Outdoor projects planned around water, grade, use, and maintenance.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Good landscaping is not just a prettier bed. It is where water goes after a storm, how a patio sits against the yard, whether plants fit the light, and how much upkeep the space asks for in July and October.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
                <div>
                  <h3 className="font-bold text-primary">Hardscape that fits</h3>
                  <p className="mt-2 text-sm leading-relaxed">Patios, retaining walls, and stone edges scaled to the property.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary">Planting that lasts</h3>
                  <p className="mt-2 text-sm leading-relaxed">Native-forward beds, trees, mulch, and seasonal refreshes.</p>
                </div>
              </div>
              <Link href="/portfolio" className="mt-8 inline-flex font-bold text-primary hover:text-primary-light">
                View recent work
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
              Common projects we handle
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Start with the problem in the yard. We will help match the right service to the site instead of pushing a one-size-fits-all design.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                delay={index * 0.05}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <Link
                  href="/services"
                  className="group block h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className={index === 0 ? "relative h-72" : "relative h-44"}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-primary">{service.title}</h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">{service.summary}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
            {additionalServices.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="rounded-lg border border-gray-200 bg-white p-5 font-semibold text-primary transition-colors hover:border-primary-light hover:bg-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-light py-20 md:py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-balance">
              Ready to talk through the yard?
            </h2>
            <p className="mt-5 text-lg text-white/90 leading-relaxed">
              Tell us what is not working: water, weeds, old beds, a patio that needs repair, or a blank space that needs a plan. We will start with the practical next step.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex whitespace-nowrap rounded-md bg-accent px-7 py-3 font-bold text-primary transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
