"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";

const views = [
  { name: "FRONT", image: "/heroSection/front view.jpeg" },
  { name: "RIGHT SIDE", image: "/heroSection/front or side angle.jpeg" },
  { name: "BACK", image: "/heroSection/back view.jpeg" },
  { name: "LEFT SIDE", image: "/heroSection/left side view.jpeg" },
  { name: "DETAILS", image: "/heroSection/neck view.jpeg" },
];

const details = [
  {
    title: "NECKLINE",
    image: "/heroSection/neck1.jpeg",
    text: "Intricate embroidery with fine detailing",
  },
  {
    title: "SLEEVES",
    image: "/heroSection/sleeves.jpeg",
    text: "Elegant borders with delicate work",
  },
  {
    title: "DUPATTA",
    image: "/heroSection/dupatta.jpeg",
    text: "Lightweight net with floral embroidery",
  },
  {
    title: "BORDER",
    image: "/heroSection/border.jpeg",
    text: "Rich and detailed finishing",
  },
  {
    title: "FABRIC",
    image: "/heroSection/fabric.jpeg",
    text: "Soft and premium quality",
  },
];

export default function Hero() {
  const [activeView, setActiveView] = useState(0);

  const nextView = useCallback(() => {
    setActiveView((current) => (current + 1) % views.length);
  }, []);

  const previousView = useCallback(() => {
    setActiveView((current) => (current - 1 + views.length) % views.length);
  }, []);

  // Keyboard controls: left and right arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(
          target?.tagName ?? ""
        )
      ) {
        return;
      }

      if (event.key === "ArrowRight") nextView();
      if (event.key === "ArrowLeft") previousView();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextView, previousView]);

  const scrollToViews = () => {
    document.getElementById("explore-views")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#02070d] text-white">
      {/* ================= HERO ================= */}
      <section
        id="fashion-hero"
        className="relative isolate min-h-[680px] h-[100svh] max-h-[1000px] overflow-hidden bg-[#02070d]"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#b88a32]/15 blur-[120px]" />

        {/* Outfit image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={views[activeView].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={views[activeView].image}
              alt={`SD Fashion outfit — ${views[activeView].name.toLowerCase()} view`}
              fill
              priority={activeView === 0}
              sizes="100vw"
              className="object-cover object-[65%_center] opacity-80 sm:opacity-85"
            />

            {/* Keep the dress visible while protecting text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02070d] via-[#02070d]/65 to-[#02070d]/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02070d]/85 via-transparent to-[#02070d]/25" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative accent */}
        <div className="absolute left-6 top-24 h-20 w-px bg-gradient-to-b from-transparent via-[#e8c96a] to-transparent sm:left-10 lg:left-16" />

        {/* Hero content */}
        <div className="mx-auto flex h-full max-w-7xl items-center px-6 pb-24 pt-24 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e8c96a] sm:text-xs sm:tracking-[0.5em]">
              SD FASHION · INDIAN COLLECTION
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
              Timeless
              <br />
              <span className="italic text-[#e8c96a]">Grace</span>
            </h1>

            <div className="mb-6 mt-7 h-px w-20 bg-[#d4af37]" />

            <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Traditional craftsmanship, modern elegance — made for your
              most beautiful moments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/Collections"
                className="group inline-flex min-h-12 items-center gap-3 border border-[#d4af37] bg-[#d4af37] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-black transition duration-300 hover:bg-transparent hover:text-[#e8c96a] sm:px-6 sm:tracking-[0.2em]"
              >
                Explore Collection
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/NewArrival"
                className="inline-flex min-h-12 items-center gap-3 border border-white/50 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[#d4af37] hover:text-[#e8c96a] sm:px-6 sm:tracking-[0.2em]"
              >
                New Arrivals
              </Link>
            </div>

            {/* Active view indicator */}
            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8c96a]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/85">
                {views[activeView].name}
              </span>
              <span className="text-[10px] text-white/55">
                {String(activeView + 1).padStart(2, "0")} /{" "}
                {String(views.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Desktop angle selector */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex">
          <RotateCw size={20} className="text-[#e8c96a]" />

          <div className="flex h-48 flex-col justify-between">
            {views.map((view, index) => (
              <button
                key={view.name}
                onClick={() => setActiveView(index)}
                aria-label={`Show ${view.name.toLowerCase()} view`}
                aria-pressed={activeView === index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeView === index
                    ? "scale-150 bg-[#e8c96a]"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <span className="text-center text-[9px] uppercase leading-5 tracking-[0.2em] text-white/70">
            Select
            <br />
            View
          </span>
        </div>

        {/* Scroll to gallery */}
        <button
          onClick={scrollToViews}
          aria-label="Explore outfit views"
          className="absolute bottom-7 left-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/80 transition hover:text-[#e8c96a] sm:bottom-8 sm:left-10 lg:left-16"
        >
          Discover the details
          <ArrowDown size={15} className="animate-bounce text-[#e8c96a]" />
        </button>

        {/* Previous / next controls */}
        <div className="absolute bottom-6 right-5 z-10 flex items-center gap-2 sm:bottom-8 sm:right-10">
          <button
            onClick={previousView}
            aria-label="Previous outfit view"
            className="flex h-11 w-11 items-center justify-center border border-[#d4af37]/70 bg-black/50 backdrop-blur-sm transition hover:bg-[#d4af37] hover:text-black"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            onClick={nextView}
            aria-label="Next outfit view"
            className="flex h-11 w-11 items-center justify-center border border-[#d4af37]/70 bg-black/50 backdrop-blur-sm transition hover:bg-[#d4af37] hover:text-black"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </section>

      {/* ================= OUTFIT VIEWS ================= */}
      <section
        id="explore-views"
        className="scroll-mt-10 border-t border-white/10 bg-[#02070d] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8c96a]">
                Discover every angle
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Explore the{" "}
                <span className="italic text-[#e8c96a]">Look</span>
              </h2>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/60 sm:text-sm">
                Select a view to explore the outfit from different angles.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:flex">
              <RotateCw size={15} className="text-[#e8c96a]" />
              {activeView + 1} of {views.length}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {views.map((view, index) => (
              <button
                key={view.name}
                onClick={() => setActiveView(index)}
                aria-pressed={activeView === index}
                className={`group relative overflow-hidden border text-left transition duration-300 ${
                  activeView === index
                    ? "border-[#d4af37]"
                    : "border-white/10 hover:border-[#d4af37]/70"
                }`}
              >
                <div className="relative aspect-[3/4] bg-[#09111b]">
                  <Image
                    src={view.image}
                    alt={`${view.name} outfit view`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className={`object-cover transition duration-700 group-hover:scale-105 ${
                      activeView === index ? "opacity-100" : "opacity-75"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 sm:p-4">
                    <span className="text-[9px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.2em]">
                      {view.name}
                    </span>

                    <ArrowRight
                      size={14}
                      className={`shrink-0 text-[#e8c96a] transition-transform ${
                        activeView === index
                          ? "translate-x-0"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CRAFTSMANSHIP DETAILS ================= */}
      <section className="border-t border-white/10 bg-[#040a12] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8c96a]">
                The Details
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Crafted with
                <br />
                <span className="italic text-[#e8c96a]">Perfection</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                From delicate embroidery to beautiful finishing, every
                detail brings elegance and traditional craftsmanship together.
              </p>

              <Link
                href="/NewArrival/Maxi"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#d4af37]/60 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#e8c96a] transition hover:border-[#e8c96a]"
              >
                Explore More Varities
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {details.map((detail, index) => (
                <motion.article
                  key={detail.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#09111b]">
                    <Image
                      src={detail.image}
                      alt={`${detail.title} detail of SD Fashion outfit`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
                  </div>

                  <h3 className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#e8c96a]">
                    {detail.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    {detail.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Brand statement */}
          <div className="mt-20 border-t border-white/10 pt-12 text-center sm:mt-24">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#e8c96a]">
              SD FASHION
            </p>

            <h3 className="mt-5 font-serif text-2xl text-white/90 sm:text-4xl">
              More Than Just Clothes
            </h3>

            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/45">
              It&apos;s a feeling
            </p>

            <div className="mx-auto mt-6 h-px w-14 bg-[#d4af37]" />
          </div>
        </div>
      </section>
    </main>
  );
}
