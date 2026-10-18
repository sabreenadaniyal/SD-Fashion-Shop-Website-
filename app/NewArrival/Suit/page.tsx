"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    image: "/NewArrival/Suit/shirtTrouser1.jpeg",
    price: "PKR 12,500",
  },
  {
    image: "/NewArrival/Suit/shirtShalwar.jpeg",
    price: "PKR 9,500",
  },
  {
    image: "/NewArrival/Suit/ShirtTrouser2.jpeg",
    price: "PKR 8,500",
  },
  {
    image: "/NewArrival/Suit/shirtTrouser3.jpeg",
    price: "PKR 7,500",
  },
];

export default function ShaheenSuitPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-24 top-[45%] h-72 w-72 rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/NewArrival"
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-black/30 px-5 py-2.5 text-sm text-gray-300 backdrop-blur-sm transition duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            <ArrowLeft size={17} />
            Back to New Arrivals
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] sm:text-sm sm:tracking-[0.35em]">
            <Sparkles size={15} />
            SD FASHION · New Arrivals
          </p>

          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
            Vinay Shaheen{" "}
            <span className="font-semibold text-[#d4af37]">
              Suit
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover elegant Pakistani eastern wear, crafted to bring
            timeless style and sophistication to every occasion.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101522] via-[#090b10] to-black transition duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-[0_18px_50px_rgba(212,175,55,0.10)]"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#080b12]">
                <Image
                  src={product.image}
                  alt={`Vinay Shaheen Suit ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                {/* Inner Gold Border */}
                <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-[#d4af37]/50" />

                {/* Brand Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-black/60 px-3 py-2 backdrop-blur-md">
                  <Sparkles size={13} className="text-[#d4af37]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                    SD FASHION
                  </span>
                </div>
              </div>

              {/* Product Information */}
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80">
                  Signature Collection
                </p>

                <h2 className="font-serif text-xl leading-snug text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-2xl">
                  Vinay Shaheen Suit
                </h2>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-base font-semibold tracking-wide text-[#d4af37] sm:text-lg">
                    {product.price}
                  </p>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    SD FASHION
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-r from-[#0b1424] via-[#080a0f] to-[#101010] px-5 py-10 text-center sm:mt-20 sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-[80px]" />

          <div className="relative z-10">
            <Sparkles
              size={24}
              className="mx-auto mb-5 text-[#d4af37]"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
              SD FASHION
            </p>

            <h2 className="mt-4 font-serif text-2xl font-light sm:text-3xl md:text-4xl">
              Find Your Perfect{" "}
              <span className="font-semibold text-[#d4af37]">
                Suit
              </span>
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              For more pictures and product details, please contact us via
              WhatsApp or phone.
            </p>

            <p className="mt-7 text-xs tracking-[0.25em] text-gray-500">
              STYLE <span className="text-[#d4af37]">•</span> ELEGANCE{" "}
              <span className="text-[#d4af37]">•</span> YOU
            </p>
          </div>
        </motion.section>

        {/* Bottom Navigation */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs tracking-wide text-gray-500 sm:text-left">
            Every Detail Tells a Story
          </p>

          <Link
            href="/NewArrival"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 transition-colors hover:text-[#d4af37]"
          >
            Explore New Arrivals
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
