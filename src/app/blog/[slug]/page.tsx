import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, getBlogPost, pageMetadata } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: `${post.title} | Friendly Landscaping LLC`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-background min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection className="max-w-4xl">
            <Link href="/blog" className="mb-6 inline-flex text-sm font-semibold text-accent hover:text-white">
              Back to blog
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary/80">{post.date}</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg text-secondary/90 leading-relaxed">{post.excerpt}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20 max-w-4xl">
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
          <Image src={post.image} alt={post.alt} fill className="object-cover" priority />
        </div>

        <div className="space-y-10">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">{section.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link href="/contact" className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light">
            Ask about your yard
          </Link>
        </div>
      </div>
    </article>
  );
}
