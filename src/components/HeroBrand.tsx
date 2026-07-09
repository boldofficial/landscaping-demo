"use client";

import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function HeroBrand() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 pr-3 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <AnimatedLogo />
      <div className="hidden font-serif text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:block md:text-3xl">
        Friendly <span className="font-light text-secondary">Landscaping</span>
      </div>
    </Link>
  );
}
