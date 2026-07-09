"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/site-content";

interface AnimatedLogoProps {
  className?: string;
  imageClassName?: string;
}

export default function AnimatedLogo({
  className = "h-20 w-20 md:h-28 md:w-28",
  imageClassName = "h-20 w-20 md:h-28 md:w-28",
}: AnimatedLogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${className} origin-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] will-change-transform`}
      initial={reduceMotion ? false : { rotate: -4, scale: 0.92, y: 3 }}
      animate={reduceMotion ? undefined : { rotate: [-4, 3, -2, 0], scale: [0.92, 1.06, 0.98, 1], y: [3, -3, 1, 0] }}
      transition={reduceMotion ? undefined : { duration: 1.1, ease: "easeOut", times: [0, 0.35, 0.7, 1] }}
      whileHover={reduceMotion ? undefined : { rotate: [0, -8, 6, -3, 0], scale: 1.06, y: [0, -3, 0] }}
    >
      <Image
        src="/images/logo.png"
        alt={`${business.shortName} logo`}
        width={320}
        height={320}
        className={`${imageClassName} object-contain`}
      />
    </motion.div>
  );
}
