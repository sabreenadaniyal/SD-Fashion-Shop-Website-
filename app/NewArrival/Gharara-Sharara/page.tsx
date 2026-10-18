"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    name: "Elegant Gharara",
    price: "PKR 9,500",
    image: "/NewArrival/gharara1.jpeg",
  },
  {
    name: "Royal Embroidered Sharara",
    price: "PKR 11,000",
    image: "/NewArrival/Gharara-Sharara/gharara-sharara.jpeg",
  },
  {
    name: "Luxury Bridal Lahenga",
    price: "PKR 15,000",
    image: "/NewArrival/Gharara-Sharara/sharara2.jpeg",
  },
];

export default function GhararaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-blue-700/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
        {/* Back button */}
        <Link
          href="/NewArrival"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-5 py-3 text-sm text-gray-300 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
        >
          <ArrowLeft size={17} />
          Back to New Arrivals
        </Link>

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles size={15} />
            SD FASHION
          </div>

          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
            Gharara Sharara
            <span className="mt-2 block font-semibold text-[#D4AF37]">
              Collection
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover timeless elegance with our beautiful gharara collection,
            designed for graceful and unforgettable occasions.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101827] to-[#050505] transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_45px_rgba(212,175,55,0.10)]"
            >
              {/* Product image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#080b12]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20" />

                <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/20 transition-colors duration-500 group-hover:border-[#D4AF37]/60" />

                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/60 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-sm">
                  <Sparkles size={12} />
                  New Arrival
                </div>

                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                    SD FASHION
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">
                    {product.name}
                  </p>
                </div>
              </div>

              {/* Product details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Price
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#D4AF37]">
                      {product.price}
                    </p>
                  </div>

                  <span className="text-right text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    Elegance
                    <br />
                    Redefined
                  </span>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />

                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-[#D4AF37]">
                  <span>Discover Elegance</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-r from-[#0b1830] via-[#080b12] to-[#101010] px-5 py-10 text-center sm:mt-20 sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5 text-[#D4AF37]" size={25} />

            <h2 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
              Find Your Perfect{" "}
              <span className="text-[#D4AF37]">Gharara</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              For more pictures and further details, please contact us via
              WhatsApp or call us.
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-[#D4AF37]/60" />

            <p className="mt-5 text-xs tracking-[0.25em] text-[#D4AF37]">
              STYLE • ELEGANCE • YOU
            </p>
          </div>
        </motion.section>

        {/* Footer navigation */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-sm italic text-gray-500">
            Every Detail Tells a Story
          </p>

          <Link
            href="/NewArrival"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#D4AF37]"
          >
            Explore New Arrivals
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
