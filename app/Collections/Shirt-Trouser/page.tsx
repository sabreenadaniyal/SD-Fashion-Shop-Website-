"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const colors = [
  { name: "Peach", value: "#F4B6A6" },
  { name: "Pink", value: "#E8A0BF" },
  { name: "Gray", value: "#808080" },
];

export default function ShirtTrouser() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Luxury background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      {/* Product section */}
      <section className="relative px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10"
          >
            <Link
              href="/Collections"
              className="group inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#e8c96a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Collections
            </Link>
          </motion.div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="group relative mx-auto w-full max-w-2xl"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#0b2a63]/30 blur-xl" />

              <div className="relative border border-[#d4af37]/25 bg-[#05070c] p-2 sm:p-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/Shirt Trouser/Shirt1.jpeg"
                    alt="SD FASHION Shirt Trouser collection"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

                  <div className="pointer-events-none absolute inset-3 border border-white/25 sm:inset-4" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-2 border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md sm:bottom-8 sm:left-8">
                    <Sparkles size={13} className="text-[#e8c96a]" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/90">
                      SD FASHION
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-[#d4af37] sm:text-xs">
                SD FASHION · Signature Collection
              </p>

              <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                Elegant{" "}
                <span className="text-[#e8c96a]">Shirt Trouser</span>
              </h1>

              <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#d4af37] to-transparent" />

              {/* Price */}
              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Price
                </p>

                <p className="mt-2 text-3xl font-light tracking-wide text-[#e8c96a] sm:text-4xl">
                  PKR 7,500
                </p>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                An elegant and versatile shirt trouser ensemble designed
                for women who appreciate timeless Pakistani fashion.
                Perfect for festive occasions, family gatherings, and
                sophisticated everyday wear.
              </p>

              {/* Available colors */}
              <div className="mt-9 border-t border-white/10 pt-7">
                <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                  Available Colors
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-3 py-3 transition-colors duration-300 hover:border-[#d4af37]/50 sm:px-4"
                    >
                      <span
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 rounded-full border border-white/25 shadow-sm"
                        style={{ backgroundColor: color.value }}
                      />

                      <span className="text-xs text-white/75 sm:text-sm">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product information */}
              <div className="mt-8 grid grid-cols-2 border-y border-white/10 py-6">
                <div className="border-r border-white/10 pr-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                    Collection
                  </p>

                  <p className="mt-2 text-sm text-white/85">
                    Eastern Wear
                  </p>
                </div>

                <div className="pl-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                    Availability
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Available
                  </p>
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs leading-6 text-white/40">
                Please note that colors may vary slightly depending on
                your device display and lighting conditions.
              </p>

              {/* Signature message */}
              <div className="mt-7 flex items-start gap-3 border-l border-[#d4af37]/50 pl-4">
                <Sparkles
                  size={16}
                  className="mt-0.5 shrink-0 text-[#d4af37]"
                />

                <p className="text-xs leading-6 text-white/55">
                  Timeless style. Thoughtful details. Elegance for
                  your special moments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discover more */}
      <section className="relative border-t border-white/10 px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071a3d]/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]">
              Find Your Style
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Discover More
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              Explore more elegant styles from the SD FASHION collection.
            </p>
          </div>

          <Link
            href="/Collections"
            className="group inline-flex w-fit items-center gap-3 border border-[#d4af37]/40 px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#e8c96a] transition duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            View All Collections

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="relative mx-auto mt-12 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

        <p className="relative mt-6 text-center font-serif text-sm tracking-wide text-white/50">
          Every <span className="text-[#e8c96a]">Detail Tells a Story</span>
        </p>
      </section>
    </main>
  );
}
