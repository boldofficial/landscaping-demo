"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/site-content";

export default function HeroBrand() {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 pr-3 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <motion.div
        className="h-20 w-20 origin-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] will-change-transform md:h-28 md:w-28"
        initial={reduceMotion ? false : { rotate: -4, scale: 0.92, y: 3 }}
        animate={reduceMotion ? undefined : { rotate: [-4, 3, -2, 0], scale: [0.92, 1.06, 0.98, 1], y: [3, -3, 1, 0] }}
        transition={reduceMotion ? undefined : { duration: 1.1, ease: "easeOut", times: [0, 0.35, 0.7, 1] }}
        whileHover={reduceMotion ? undefined : { rotate: [0, -8, 6, -3, 0], scale: 1.06, y: [0, -3, 0] }}
      >
        <Image
          src="/images/logo.png"
          alt={`${business.shortName} logo`}
          width={112}
          height={112}
          className="h-20 w-20 object-contain md:h-28 md:w-28"
        />
      </motion.div>
      <div className="hidden font-serif text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:block md:text-3xl">
        Friendly <span className="font-light text-secondary">Landscaping</span>
      </div>
    </Link>
  );
}
