// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// export default function FashionShowcase() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-black">

//       {/* ==================================================
//           LUXURY BACKGROUND
//       ================================================== */}

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#0b2a63_0%,#050b18_35%,#000000_75%)] opacity-80" />

//       {/* Blue Glow - Left */}

//       <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#0b2a63]/30 blur-[150px]" />

//       {/* Blue Glow - Right */}

//       <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#0b2a63]/25 blur-[150px]" />

//       {/* Gold Glow */}

//       <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />

//       {/* ==================================================
//           VIDEO AREA
//       ================================================== */}

//       <div className="absolute inset-0 flex items-center justify-center">

//         {/* Video Background Glow */}

//         <div className="absolute h-[90%] w-[70%] rounded-full bg-[#0b2a63]/20 blur-[100px]" />

//         <video
//           src="/videos/fashion-showcase.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="
//             relative
//             z-10
//             h-full
//             w-full
//             object-contain
//             md:h-full
//             md:w-auto
//             max-w-full
//           "
//         />
//       </div>

//       {/* ==================================================
//           DARK VIDEO OVERLAY
//       ================================================== */}

//       <div className="absolute inset-0 bg-black/30" />

//       {/* ==================================================
//           LUXURY GRADIENT OVERLAY
//       ================================================== */}

//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

//       {/* Side Gradient */}

//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

//       {/* ==================================================
//           GOLD FRAME EFFECT
//       ================================================== */}

//       <div className="pointer-events-none absolute inset-5 border border-[#d4af37]/10 md:inset-8" />

//       <div className="pointer-events-none absolute inset-8 border border-white/5 md:inset-12" />

//       {/* ==================================================
//           TOP LABEL
//       ================================================== */}

//       <div className="absolute left-1/2 top-10 z-10 -translate-x-1/2 text-center md:top-14">

//         <p className="text-[9px] uppercase tracking-[0.45em] text-[#d4af37] sm:text-xs">
//           Fashion Showcase
//         </p>

//         <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

//       </div>

//       {/* ==================================================
//           CONTENT
//       ================================================== */}

//       <div className="relative z-10 flex min-h-screen items-end justify-center px-6 pb-16 text-center md:pb-20">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="max-w-2xl"
//         >

//           {/* Brand */}

//           <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#e8c96a] md:text-sm">
//             SD FASHION
//           </p>

//           {/* Heading */}

//           <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl md:text-6xl">

//             Elegance in

//             <span className="block bg-gradient-to-r from-[#d4af37] via-[#f1d77a] to-[#b8942e] bg-clip-text text-transparent">
//               Every Detail
//             </span>

//           </h2>

//           {/* Small Gold Line */}

//           <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

//           {/* Description */}

//           <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
//             Discover timeless Pakistani fashion crafted with elegance.
//           </p>

//           {/* Button */}

//           <Link
//             href="/Collections"
//             className="
//               group
//               mt-7
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-[#d4af37]/60
//               bg-gradient-to-r
//               from-[#d4af37]
//               to-[#b8942e]
//               px-7
//               py-3
//               font-semibold
//               text-black
//               shadow-[0_0_30px_rgba(212,175,55,0.15)]
//               transition-all
//               duration-300
//               hover:scale-105
//               hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]
//             "
//           >
//             Explore Collection

//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>

//         </motion.div>
//       </div>

//       {/* ==================================================
//           BOTTOM BRAND LINE
//       ================================================== */}

//       <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center">

//         <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
//           Style • Elegance • You
//         </p>

//       </div>

//     </section>
//   );
// }



// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import Link from "next/link";
// import { ArrowDown, ArrowUpRight } from "lucide-react";

// export default function FashionShowcase() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#05060a] text-white">

//       {/* Deep navy luxury background */}
//       <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,#142445_0%,#080d19_42%,#030407_78%)]" />

//       <div className="absolute inset-0 -z-10 opacity-30">
//         <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-900 blur-[140px]" />
//         <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-950 blur-[140px]" />
//       </div>

//       {/* Fashion film */}
//       <div className="absolute inset-0 -z-10 flex items-center justify-center">
//         <video
//           src="/videos/fashion-showcase.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           className="h-full w-full object-contain"
//           aria-label="SD Fashion couture showcase"
//         >
//           Your browser does not support HTML video.
//         </video>
//       </div>

//       {/* Cinematic overlays */}
//       <div className="pointer-events-none absolute inset-0 -z-[5] bg-black/20" />
//       <div className="pointer-events-none absolute inset-0 -z-[4] bg-gradient-to-b from-black/70 via-black/5 to-black/90" />
//       <div className="pointer-events-none absolute inset-0 -z-[3] bg-gradient-to-r from-black/50 via-transparent to-black/50" />

//       {/* Fine luxury borders */}
//       <div className="pointer-events-none absolute inset-3 border border-[#c7aa68]/25 sm:inset-5 md:inset-8" />
//       <div className="pointer-events-none absolute inset-5 border border-white/[0.06] sm:inset-7 md:inset-12" />

//       {/* Brand header */}
//       <motion.header
//         initial={reduceMotion ? false : { opacity: 0, y: -15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-8 pt-9 sm:px-14 sm:pt-12 md:px-20"
//       >
//         <Link href="/" className="group flex flex-col leading-none">
//           <span className="font-serif text-3xl tracking-[0.16em] text-[#ead6a3] sm:text-4xl">
//             SD<span className="text-white">.</span>
//           </span>
//           <span className="mt-2 text-[8px] tracking-[0.32em] text-white/75 sm:text-[9px]">
//             PAKISTANI COUTURE
//           </span>
//         </Link>

//         <div className="hidden items-center gap-3 sm:flex">
//           <span className="h-px w-8 bg-[#c7aa68]/70" />
//           <span className="text-[9px] uppercase tracking-[0.28em] text-white/75">
//             Collection 2026
//           </span>
//         </div>
//       </motion.header>

//       {/* Main brand statement */}
//       <div className="relative z-10 flex min-h-[100svh] items-end justify-center px-6 pb-24 pt-40 text-center sm:pb-28">
//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.15 }}
//           className="mx-auto w-full max-w-4xl"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3">
//             <span className="h-px w-8 bg-[#c7aa68]" />
//             <p className="text-[9px] uppercase tracking-[0.38em] text-[#e3cb8e] sm:text-xs">
//               The Art of Couture
//             </p>
//             <span className="h-px w-8 bg-[#c7aa68]" />
//           </div>

//           <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
//             Elegance,
//             <span className="mt-2 block italic text-[#e4cb8d]">
//               Beyond Time.
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-lg text-xs leading-7 text-white/85 sm:text-sm sm:leading-8 md:text-base">
//             Tradition woven into modern luxury.
//             <span className="block">
//               Discover the art of Pakistani fashion.
//             </span>
//           </p>

//           <div className="mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-[#c7aa68] to-transparent" />

//           <Link
//             href="/Collections"
//             className="group mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-4 border border-[#c7aa68]/80 bg-[#08090c]/50 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f1dfb0] backdrop-blur-sm transition duration-300 hover:border-[#f0d99b] hover:bg-[#c7aa68] hover:text-black sm:px-8 sm:text-xs"
//           >
//             Discover the Collection
//             <ArrowUpRight
//               size={17}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </Link>

//           <p className="mt-5 text-[8px] uppercase tracking-[0.25em] text-white/60 sm:text-[9px]">
//             Crafted with grace · Designed to be remembered
//           </p>
//         </motion.div>
//       </div>

//       {/* Bottom details */}
//       <div className="absolute bottom-7 left-0 right-0 z-10 flex items-center justify-between px-8 sm:px-14 md:px-20">
//         <span className="hidden text-[8px] uppercase tracking-[0.22em] text-white/50 sm:block">
//           SD Fashion Studio
//         </span>

//         <a
//           href="#collections"
//           className="mx-auto flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#e3cb8e]/80 transition hover:text-white sm:mx-0"
//         >
//           Explore
//           <ArrowDown size={14} />
//         </a>

//         <span className="hidden text-[8px] uppercase tracking-[0.22em] text-white/50 sm:block">
//           Timeless by Design
//         </span>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const gold = "#D4B779";

export default function FashionShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#05060a] text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#05060a]" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,#14223d_0%,#090e19_45%,#05060a_80%)]" />

      <div className="pointer-events-none absolute -left-40 top-1/4 -z-20 h-96 w-96 rounded-full bg-blue-950/60 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 -z-20 h-96 w-96 rounded-full bg-indigo-950/50 blur-[130px]" />

      {/* Fashion video */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <video
          src="/videos/fashion-showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-contain"
          aria-label="SD Fashion collection video"
        >
          Your browser does not support HTML video.
        </video>
      </div>

      {/* Keep video visible while making text readable */}
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-black/15" />

      <div className="pointer-events-none absolute inset-0 -z-[4] bg-gradient-to-b from-black/65 via-black/5 to-black/85" />

      <div className="pointer-events-none absolute inset-0 -z-[3] bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Luxury frame */}
      <div className="pointer-events-none absolute inset-3 border border-[#D4B779]/25 sm:inset-5 md:inset-8" />

      <div className="pointer-events-none absolute inset-5 border border-white/[0.06] sm:inset-7 md:inset-12" />

      {/* Header */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-8 pt-9 sm:px-14 sm:pt-12 md:px-20"
      >
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-3xl tracking-[0.14em] text-[#E9D6A5] sm:text-4xl">
            SD<span className="text-white">.</span>
          </span>

          <span className="mt-2 text-[8px] tracking-[0.3em] text-white/75 sm:text-[9px]">
            PAKISTANI COUTURE
          </span>
        </Link>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="h-px w-7 bg-[#D4B779]/80" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/80">
            Timeless by Design
          </span>
        </div>
      </motion.header>

      {/* Main brand message */}
      <div className="relative z-10 flex min-h-[100svh] items-end justify-center px-5 pb-28 pt-40 text-center sm:px-8 sm:pb-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#D4B779]" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#E7D09A] sm:text-xs sm:tracking-[0.4em]">
              The Art of Pakistani Couture
            </p>

            <span className="h-px w-7 bg-[#D4B779]" />
          </div>

          <h1 className="font-serif text-4xl font-normal leading-[1.15] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
            Elegance,
            <span className="mt-2 block italic text-[#E3CA8B]">
              Beyond Time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-xs leading-7 text-white/85 sm:text-sm sm:leading-8 md:text-base">
            Timeless designs. Beautiful details.
            <span className="block">
              Effortless elegance for every special moment.
            </span>
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D4B779] to-transparent" />

          {/* Primary and secondary actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/Collections"
              className="group inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 border border-[#D4B779] bg-[#D4B779] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#090a0d] transition duration-300 hover:bg-[#E9D6A5] sm:w-auto sm:text-xs"
            >
              Explore Collection

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/NewArrival"
              className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 border border-white/45 bg-black/25 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:border-[#D4B779] hover:text-[#E9D6A5] sm:w-auto sm:text-xs"
            >
              <Sparkles size={15} />
              New Arrivals
            </Link>
          </div>

          <p className="mt-6 text-[8px] uppercase tracking-[0.24em] text-white/65 sm:text-[9px]">
            Crafted with grace · Designed to be remembered
          </p>
        </motion.div>
      </div>

      {/* Bottom details */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-8 sm:px-14 md:px-20">
        <span className="hidden text-[8px] uppercase tracking-[0.2em] text-white/60 sm:block">
          SD Fashion Studio
        </span>

        <Link
          href="/Collections"
          className="mx-auto flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#E3CA8B] transition hover:text-white sm:mx-0"
        >
          Discover More
          <ArrowDown size={14} />
        </Link>

        <span className="hidden text-[8px] uppercase tracking-[0.2em] text-white/60 sm:block">
          Collection 2026
        </span>
      </div>
    </section>
  );
}

