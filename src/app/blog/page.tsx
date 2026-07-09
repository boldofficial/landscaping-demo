import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, pageMetadata } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Madison Landscaping Tips | Friendly Landscaping LLC Blog",
  description:
    "Seasonal landscaping notes for Madison-area yards, including native plants, spring cleanup, drainage, and bed maintenance.",
  path: "/blog",
});

export default function Blog() {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Madison landscaping notes
            </h1>
            <p className="text-xl text-secondary/90 leading-relaxed">
              Practical yard care, planting, and seasonal advice for southern Wisconsin homes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection
                key={post.slug}
                delay={index * 0.08}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-3 text-sm font-semibold text-primary">{post.date}</div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">{post.excerpt}</p>
                    <span className="mt-6 inline-flex font-semibold text-primary">Read article</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
