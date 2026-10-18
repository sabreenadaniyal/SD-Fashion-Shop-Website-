// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";

// const products = [
//   {
//     name: "Luxury Party Maxi",
//     price: "PKR 12,500",
//     image: "/NewArrival/frock/maxi.jpeg",
//   },
//   {
//     name: "Royal Party Frock",
//     price: "PKR 12,000",
//     image: "/NewArrival/Frock/frock3.jpeg",
//   },
//   {
//     name: "Royal Embroidered Maxi",
//     price: "PKR 12,500",
//     image: "/NewArrival/frock/maxi1.jpeg",
//   },
//   {
//     name: "Elegant Maxi",
//     price: "PKR 11,000",
//     image: "/NewArrival/frock/maxi2.jpeg",
//   },
//   {
//     name: "Vinay Noor Mahal Frock",
//     price: "PKR 11,000",
//     image: "/NewArrival/frock1.jpeg",
//   },
//   {
//     name: "Elegant Embroidered Frock",
//     price: "PKR 9,000",
//     image: "/NewArrival/Frock/frock2.jpeg",
//   },
// ];

// export default function FrockPage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-black px-4 py-16 pt-32 text-white sm:px-6 lg:px-10">

//       {/* Background Effects */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b1d3a_0%,#050505_45%,#000000_100%)]" />

//       <div className="pointer-events-none absolute left-[-100px] top-40 h-72 w-72 rounded-full bg-blue-900/20 blur-[130px]" />

//       <div className="pointer-events-none absolute right-[-100px] top-[45%] h-72 w-72 rounded-full bg-yellow-600/10 blur-[130px]" />

//       <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-blue-900/20 blur-[130px]" />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* Back Button */}
//         <Link
//           href="/NewArrival"
//           className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-5 py-2.5 text-sm text-gray-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
//         >
//           <ArrowLeft size={17} />
//           Back to New Arrivals
//         </Link>

//         {/* Main Heading - Same as Saree Collection */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-14 text-center"
//         >
//           <h1 className="text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
//             Maxi{" "}
//             <span className="font-semibold text-[#D4AF37]">
//               Collection
//             </span>
//           </h1>

//           <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
//             Discover our elegant maxi and frock designs, created to celebrate
//             timeless Pakistani fashion, beauty, and sophistication.
//           </p>
//         </motion.div>

//         {/* Product Cards - Same as Saree & Gharara */}
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

//           {products.map((product, index) => (
//             <motion.div
//               key={product.name}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{
//                 duration: 0.5,
//                 delay: (index % 3) * 0.1,
//               }}
//               className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101010] to-[#050505] transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_15px_45px_rgba(212,175,55,0.10)]"
//             >

//               {/* Product Image */}
//               <div className="relative h-[430px] overflow-hidden bg-[#080808] sm:h-[460px]">

//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   priority={index === 0}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover transition duration-700 group-hover:scale-105"
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

//               </div>

//               {/* Product Information */}
//               <div className="p-5 sm:p-6">

//                 <h2 className="text-xl font-medium transition group-hover:text-[#D4AF37]">
//                   {product.name}
//                 </h2>

//                 <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

//                   <p className="text-lg font-semibold text-[#D4AF37]">
//                     {product.price}
//                   </p>

//                   <span className="text-xs uppercase tracking-widest text-gray-500">
//                     SD Fashion
//                   </span>

//                 </div>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* Contact Section - Same as Saree Collection */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-16 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#0b1424] via-[#090909] to-[#101010] px-5 py-10 text-center sm:px-10"
//         >
//           <h2 className="text-2xl font-medium sm:text-3xl">
//             Find Your Perfect{" "}
//             <span className="text-[#D4AF37]">Maxi</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
//             For more pictures and further details, please contact us via
//             WhatsApp or Call Us.
//           </p>

//           <p className="mt-5 text-xs tracking-[0.25em] text-[#D4AF37]">
//             STYLE • ELEGANCE • YOU
//           </p>
//         </motion.div>

//       </div>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    name: "Luxury Party Maxi",
    price: "PKR 12,500",
    image: "/NewArrival/frock/maxi.jpeg",
  },
  {
    name: "Royal Party Frock",
    price: "PKR 11,000",
    image: "/NewArrival/frock/frock3.jpeg",
  },
  {
    name: "Royal Embroidered Maxi",
    price: "PKR 12,500",
    image: "/NewArrival/frock/maxi1.jpeg",
  },
  {
    name: "Elegant Maxi",
    price: "PKR 11,000",
    image: "/NewArrival/frock/maxi2.jpeg",
  },
  {
    name: "Vinay Noor Mahal Frock",
    price: "PKR 11,000",
    image: "/NewArrival/frock1.jpeg",
  },
  {
    name: "Elegant Embroidered Frock",
    price: "PKR 9,000",
    image: "/NewArrival/frock/frock2.jpeg",
  },
];

export default function FrockPage() {
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

        {/* Collection Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-[#d4af37] sm:text-sm">
            <Sparkles size={15} />
            SD FASHION · New Arrivals
          </p>

          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
            Maxi{" "}
            <span className="font-semibold text-[#d4af37]">
              Collection
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover our elegant maxi and frock designs, created to celebrate
            timeless Pakistani fashion, beauty, and sophistication.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
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
                  alt={product.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Inner Gold Border */}
                <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-[#d4af37]/40" />

                {/* Brand Label */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-black/60 px-3 py-2 backdrop-blur-md">
                  <Sparkles size={13} className="text-[#d4af37]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                    SD FASHION
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80">
                  New Arrival
                </p>

                <h2 className="font-serif text-xl leading-snug text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-2xl">
                  {product.name}
                </h2>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-base font-semibold tracking-wide text-[#d4af37] sm:text-lg">
                    {product.price}
                  </p>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    Signature Wear
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-r from-[#0b1424] via-[#080a0f] to-[#101010] px-5 py-10 text-center sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-[80px]" />

          <div className="relative z-10">
            <Sparkles
              size={24}
              className="mx-auto mb-5 text-[#d4af37]"
            />

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d4af37]">
              Find Your Style
            </p>

            <h2 className="font-serif text-2xl font-light sm:text-3xl md:text-4xl">
              Find Your Perfect{" "}
              <span className="font-semibold text-[#d4af37]">
                Maxi
              </span>
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              For more pictures and product details, please contact us via
              WhatsApp or phone.
            </p>

            <p className="mt-7 text-xs tracking-[0.3em] text-gray-500">
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
