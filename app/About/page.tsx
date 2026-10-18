"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gem,
  Heart,
  Sparkles,
  Scissors,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Timeless Elegance",
    description:
      "Elegant designs that celebrate beauty, grace, and the charm of Pakistani fashion.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    description:
      "Every outfit reflects our love for fashion, thoughtful details, and beautiful embroidery.",
  },
  {
    icon: Scissors,
    title: "Traditional Craft",
    description:
      "Inspired by traditional artistry and brought to life with a modern fashion sensibility.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b2a63_0%,#050b18_35%,#000000_75%)]" />

      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-700/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37] sm:text-sm">
            <Sparkles size={15} />
            Our Story
          </div>

          <h1 className="font-serif text-4xl font-light leading-tight tracking-wide sm:text-5xl md:text-7xl">
            The Art of{" "}
            <span className="font-semibold text-[#D4AF37]">
              Elegance
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base md:text-lg">
            Welcome to SD FASHION, where timeless Pakistani traditions
            meet modern elegance. We celebrate the beauty of every
            detail through graceful designs, exquisite embroidery,
            and outfits made for memorable moments.
          </p>
        </motion.section>

        {/* Main story section */}
        <section className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Brand visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-3xl border border-[#D4AF37]/20" />

            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#10203a] via-[#090909] to-black p-7 sm:min-h-[500px] sm:p-12">
              <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  SD FASHION
                </p>

                <div className="mt-8 h-px w-16 bg-[#D4AF37]" />
              </div>

              <div className="relative py-10 text-center">
                <Sparkles
                  className="mx-auto mb-7 text-[#D4AF37]"
                  size={32}
                  strokeWidth={1.2}
                />

                <h2 className="font-serif text-3xl font-light leading-tight sm:text-5xl">
                  Where Tradition
                  <br />
                  Meets{" "}
                  <span className="font-semibold text-[#D4AF37]">
                    Style
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-gray-400">
                  Celebrating your individuality through fashion
                  that feels graceful, confident, and timeless.
                </p>
              </div>

              <div className="relative flex items-center justify-between gap-2 border-t border-white/10 pt-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
                  Style
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] sm:text-xs sm:tracking-[0.25em]">
                  Elegance
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
                  You
                </span>
              </div>
            </div>
          </motion.div>

          {/* Brand story text */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              About Our Brand
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Fashion That Makes
              <br />
              Every Moment{" "}
              <span className="font-semibold text-[#D4AF37]">
                Special
              </span>
            </h2>

            <div className="mt-6 h-px w-20 bg-[#D4AF37]" />

            <p className="mt-7 text-sm leading-8 text-gray-400 sm:text-base">
              At SD FASHION, we believe that clothing is more than
              just an outfit. It is a way to express your personality,
              celebrate your culture, and feel confident in your own
              style.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
              From beautifully embroidered shararas and graceful
              sarees to elegant maxis and stylish suits, our collection
              is inspired by the richness of Pakistani fashion and the
              beauty of contemporary design.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
              Our goal is to help you find styles that make your
              celebrations, gatherings, and special occasions even
              more memorable.
            </p>

            <Link
              href="/Collections"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/50 px-7 py-3.5 text-sm font-medium text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Explore Our Collection
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </section>

        {/* Brand values */}
        <section className="mt-24 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              What Defines Us
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl md:text-5xl">
              Our Brand{" "}
              <span className="font-semibold text-[#D4AF37]">
                Values
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
              The inspiration behind our designs and the experience
              we want every fashion lover to enjoy.
            </p>

            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#101827] to-[#050505] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_45px_rgba(212,175,55,0.08)] sm:p-9"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 transition duration-300 group-hover:bg-[#D4AF37]/10">
                    <Icon
                      size={27}
                      strokeWidth={1.4}
                      className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-medium transition-colors group-hover:text-[#D4AF37]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {value.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-20" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Closing section */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#0b1830] via-[#080b12] to-[#101010] px-6 py-12 text-center sm:mt-28 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

          <div className="relative">
            <Sparkles
              className="mx-auto mb-5 text-[#D4AF37]"
              size={27}
            />

            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              Your Style, Your Story
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Let Your Style Speak
              <span className="mt-2 block font-semibold text-[#D4AF37]">
                With Elegance
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Discover designs that bring together tradition,
              sophistication, and your unique sense of style.
            </p>

            <Link
              href="/NewArrival"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-[#e6c75a]"
            >
              Discover New Arrivals
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-8 text-[10px] tracking-[0.3em] text-gray-500 sm:text-xs">
              STYLE • ELEGANCE • YOU
            </p>
          </div>
        </motion.section>

        {/* Bottom brand line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-sm italic text-gray-500">
            Every Detail Tells a Story
          </p>

          <Link
            href="/Collections"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#D4AF37]"
          >
            Explore SD FASHION
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
