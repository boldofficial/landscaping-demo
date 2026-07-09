"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { business, navLinks } from "@/lib/site-content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavLinks = navLinks.filter((link) => link.path !== "/contact");

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-4">
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-3 py-1 pr-3 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <motion.div
            className="h-20 w-20 origin-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] will-change-transform md:h-28 md:w-28"
            initial={reduceMotion ? false : { rotate: -4, scale: 0.92, y: 3 }}
            animate={reduceMotion ? undefined : { rotate: [-4, 3, -2, 0], scale: [0.92, 1.06, 0.98, 1], y: [3, -3, 1, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.1, ease: "easeOut", times: [0, 0.35, 0.7, 1] }}
            whileHover={reduceMotion ? undefined : { rotate: [0, -8, 6, -3, 0], scale: 1.06, y: [0, -3, 0] }}
          >
            <Image src="/images/logo.png" alt={`${business.shortName} logo`} width={112} height={112} className="h-20 w-20 object-contain md:h-28 md:w-28" />
          </motion.div>
          <div
            className={`hidden font-serif text-2xl font-bold tracking-tight sm:block md:text-3xl ${
              isScrolled
                ? "text-primary drop-shadow-[0_1px_8px_rgba(255,255,255,0.9)]"
                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
            }`}
          >
            Friendly{" "}
            <span className={`font-light ${isScrolled ? "text-primary-light" : "text-secondary"}`}>
              Landscaping
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className={`pointer-events-auto hidden items-center gap-1 rounded-full border border-white/70 bg-secondary/90 p-2 shadow-lg shadow-black/10 backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 lg:flex ${
            isScrolled ? "shadow-xl" : ""
          }`}
        >
          {primaryNavLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                pathname === link.path
                  ? "bg-primary text-white"
                  : "text-primary/80 hover:bg-white/70 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-1 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              pathname === "/contact"
                ? "bg-primary text-white"
                : "bg-accent text-primary hover:bg-white"
            }`}
          >
            Quote
          </Link>
        </nav>

        <button
          className="pointer-events-auto rounded-full border border-white/70 bg-white/90 p-4 text-primary shadow-lg shadow-black/10 backdrop-blur-md lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pointer-events-auto mx-auto mt-3 max-w-sm overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-xl shadow-black/15 backdrop-blur-md lg:hidden"
          >
            <div className="grid gap-2 p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                    pathname === link.path ? "bg-primary text-white" : "text-primary hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
