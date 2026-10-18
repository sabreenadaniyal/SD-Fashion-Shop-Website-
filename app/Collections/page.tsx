"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Maxi / Frock",
    subtitle: "Traditional Elegance",
    image: "/Maxis Frocks/maxi1.jpeg",
    link: "/Collections/Maxi-Frock",
  },
  {
    title: "Shirt Trouser",
    subtitle: "Modern Sophistication",
    image: "/Shirt Trouser/shirt1.jpeg",
    link: "/Collections/Shirt-Trouser",
  },
  {
    title: "Gharara / Sharara",
    subtitle: "Festive Glamour",
    image: "/Gharara Sharara/gharara1.png",
    link: "/Collections/Gharara-Sharara",
  },
  {
    title: "Saree",
    subtitle: "Timeless Grace",
    image: "/Saree/saree1.jpeg",
    link: "/Collections/Saree",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0b2a63]/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#0b2a63]/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#d4af37] sm:text-xs sm:tracking-[0.45em]">
            Discover Your Style
          </p>

          <h2
            id="collections-heading"
            className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f5df91] to-[#b8942e] bg-clip-text text-transparent">
              Collections
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Discover timeless Pakistani and Indian-inspired fashion,
            thoughtfully selected to bring elegance to every occasion.
          </p>
        </motion.div>

        {/* Collection cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="min-w-0"
            >
              <Link
                href={item.link}
                aria-label={`Explore ${item.title} collection`}
                className="group relative block overflow-hidden border border-white/10 bg-[#05070c] shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_20px_55px_rgba(11,42,99,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} collection by SD FASHION`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/90" />

                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#071a3d]/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Inner gold frame */}
                  <div className="pointer-events-none absolute inset-3 border border-white/20 transition-all duration-500 group-hover:inset-4 group-hover:border-[#d4af37]/70 sm:inset-4 sm:group-hover:inset-5" />

                  {/* Gold accent */}
                  <div className="absolute left-6 top-6 h-px w-10 bg-[#d4af37] transition-all duration-500 group-hover:w-16" />

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black">
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>

                  {/* Card content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-5 lg:p-6">
                    <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#e8c96a] sm:text-[10px]">
                      {item.subtitle}
                    </p>

                    <h3 className="font-serif text-2xl text-white transition-colors duration-300 group-hover:text-[#e8c96a] sm:text-xl xl:text-2xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-px w-9 bg-gradient-to-r from-[#d4af37] to-[#0b2a63] transition-all duration-500 group-hover:w-16" />

                    <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
                      Explore Collection
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

          <p className="font-serif text-xl text-white/90 sm:text-2xl">
            Every{" "}
            <span className="text-[#e8c96a]">
              Detail Tells a Story
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-xl text-[10px] leading-6 tracking-wide text-white/45 sm:text-xs">
            Beautiful fabrics, thoughtful details, and timeless elegance
            — designed to make every occasion special.
          </p>

          <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.4em] text-[#d4af37]/70">
            SD FASHION
          </p>
        </motion.div>
      </div>
    </section>
  );
}
