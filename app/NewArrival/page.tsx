"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const products = [
  {
    name: "Saree",
    price: "PKR 7,000",
    image: "/Saree/saree1.jpeg",
    link: "/NewArrival/Saree",
  },
  {
    name: "Vinay Noor Mahal Maxi's",
    price: "PKR 8,500",
    image: "/NewArrival/frock1.jpeg",
    link: "/NewArrival/Maxi",
  },
  {
    name: "Vinay Shaheen Suit",
    price: "PKR 11,000",
    image: "/NewArrival/shirtTrouser1.jpeg",
    link: "/NewArrival/Suit",
  },
  {
    name: "Gharara-Sharara",
    price: "PKR 12,000",
    image: "/NewArrival/gharara1.jpeg",
    link: "/NewArrival/Gharara-Sharara",
  },
];

export default function NewArrival() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-24 top-[45%] h-72 w-72 rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] sm:text-sm sm:tracking-[0.35em]">
            <Sparkles size={15} />
            SD FASHION · Just Arrived
          </p>

          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
            New{" "}
            <span className="font-semibold text-[#d4af37]">
              Arrivals
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover our latest collection of elegant Pakistani and Indian
            inspired designs, crafted to bring timeless beauty to every
            occasion.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="group"
            >
              <Link
                href={product.link}
                className="block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101522] via-[#090b10] to-black shadow-[0_15px_45px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-[0_18px_50px_rgba(212,175,55,0.10)]"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#080b12]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                  {/* Inner Border */}
                  <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-[#d4af37]/60" />

                  {/* Top Gold Line */}
                  <div className="absolute left-6 top-6 h-px w-10 bg-[#d4af37]/70 transition-all duration-500 group-hover:w-16 group-hover:bg-[#d4af37]" />

                  {/* New Badge */}
                  <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                    <Sparkles size={11} className="text-[#d4af37]" />
                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#d4af37]">
                      New
                    </span>
                  </div>

                  {/* Explore Arrow */}
                  <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 bg-black/50 text-[#d4af37] backdrop-blur-sm transition duration-300 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Product Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">
                      SD FASHION
                    </p>

                    <h2 className="font-serif text-lg leading-snug text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                      {product.name}
                    </h2>

                    <div className="my-3 h-px w-8 bg-[#d4af37]/60 transition-all duration-500 group-hover:w-14" />

                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold tracking-wide text-[#d4af37]">
                        {product.price}
                      </p>

                      <span className="text-[9px] uppercase tracking-[0.18em] text-gray-400 transition-colors group-hover:text-white">
                        Explore
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Gold Line */}
                <div className="h-px w-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-700 group-hover:w-full" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Luxury Brand Section */}
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

            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl">
              Elegance{" "}
              <span className="font-semibold text-[#d4af37]">
                That Speaks
              </span>
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Every design is carefully selected to bring together tradition,
              elegance and contemporary fashion.
            </p>

            <Link
              href="/Collections"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37] px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#f1d77a] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] sm:tracking-[0.2em]"
            >
              Explore Collections
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.section>

        {/* Footer Tagline */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-xs tracking-wide text-gray-500 sm:text-left">
            Every Detail Tells a Story
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/70">
            Style · Elegance · You
          </p>
        </div>
      </div>
    </main>
  );
}
