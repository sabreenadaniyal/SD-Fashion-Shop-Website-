"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Apni actual contact details yahan add karein
  const whatsappNumber = "923358295589";
  const phoneNumber = "923358295589";
  const emailAddress = "daniyalpervaiz06@gmail.com";

  // Apni shop ka complete address yahan likhein
  const address = "Shop No. 35, AllahWala Market-2nd Floor, Karachi, Pakistan";

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/Collections" },
    { label: "New Arrivals", href: "/NewArrival" },
    { label: "About Us", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  const animationProps = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-900/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        {/* Footer columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div {...animationProps}>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]">
                <span className="font-serif text-lg text-[#E8C96A]">
                  SD
                </span>

                <span className="absolute inset-[-4px] rounded-full border border-[#D4AF37]/20" />
              </div>

              <div>
                <h2 className="font-serif text-xl tracking-[0.18em]">
                  SD FASHION
                </h2>

                <p className="mt-1 text-[8px] tracking-[0.3em] text-[#D4AF37]">
                  STYLE • ELEGANCE • YOU
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Discover timeless Pakistani fashion, elegant designs,
              and beautiful outfits created to celebrate your style.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            {...animationProps}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#E8C96A]">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-[#E8C96A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact details */}
          <motion.div
            {...animationProps}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#E8C96A]">
              Contact
            </h3>

            <div className="space-y-5">
              {/* Shop address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#D4AF37]"
                />

                <p className="break-words text-sm leading-6 text-white/50">
                  {address}
                </p>
              </div>

              {/* Email */}
              {emailAddress && (
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-start gap-3 break-all text-sm text-white/50 transition-colors hover:text-[#E8C96A]"
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  />

                  {emailAddress}
                </a>
              )}

              {/* Phone */}
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-[#E8C96A]"
                >
                  <Phone
                    size={17}
                    className="shrink-0 text-[#D4AF37]"
                  />

                  Call Us
                </a>
              )}

              {/* WhatsApp */}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-[#E8C96A]"
                >
                  <MessageCircle
                    size={17}
                    className="shrink-0 text-[#D4AF37]"
                  />

                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            {...animationProps}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#E8C96A]">
              Get In Touch
            </h3>

            <p className="mb-6 text-sm leading-7 text-white/50">
              Have a question about our designs or new arrivals?
              We would love to hear from you.
            </p>

            <Link
              href="/Contact"
              className="group inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#E8C96A] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Contact Us

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-6 text-xs leading-6 text-white/30">
              Style, elegance, and a touch of tradition.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-center text-[10px] tracking-[0.15em] text-white/30 sm:text-left">
            © {new Date().getFullYear()} SD FASHION. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            Crafted with elegance
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-300 hover:border-[#D4AF37] hover:bg-blue-950/50"
          >
            <ArrowUp
              size={16}
              className="text-white/60 transition-colors group-hover:text-[#E8C96A]"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
