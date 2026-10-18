
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // WhatsApp aur phone number: country code ke saath
  const whatsappNumber = "923358295589";
  const phoneNumber = "+923358295589";
  const emailAddress = "daniyalpervaiz06@gmail.com";

  const contactCards = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Ask about our designs and outfits.",
      detail: "Chat with us",
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Get in touch for product enquiries.",
      detail: phoneNumber,
      href: `tel:${phoneNumber}`,
      external: false,
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions and feedback.",
      detail: emailAddress,
      href: `mailto:${emailAddress}`,
      external: false,
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Hello SD FASHION!

Name: ${formData.name}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0b1d3a_0%,#050505_45%,#000000_100%)]" />

      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-900/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-yellow-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#D4AF37] sm:text-sm">
            Get In Touch
          </p>

          <h1 className="mt-5 text-4xl font-light tracking-wide sm:text-5xl md:text-7xl">
            Let&apos;s{" "}
            <span className="font-semibold text-[#D4AF37]">
              Connect
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            We would love to hear from you. Contact us for outfit
            enquiries, collection details, or any questions about
            SD FASHION.
          </p>
        </motion.section>

        {/* Contact Cards */}
        <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#101010] to-[#050505] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_45px_rgba(212,175,55,0.08)] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5">
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:text-[#D4AF37]"
                  />
                </div>

                <h2 className="mt-7 text-xl font-medium transition group-hover:text-[#D4AF37]">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {card.description}
                </p>

                <p className="mt-5 break-words text-sm text-[#D4AF37]">
                  {card.detail}
                </p>
              </motion.a>
            );
          })}
        </section>

        {/* Contact Information and Form */}
        <section className="mt-20 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              Contact Us
            </p>

            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              We&apos;re Here
              <br />
              For{" "}
              <span className="font-semibold text-[#D4AF37]">
                You
              </span>
            </h2>

            <div className="mt-6 h-px w-20 bg-[#D4AF37]" />

            <p className="mt-6 text-sm leading-8 text-gray-400 sm:text-base">
              Looking for your perfect outfit? Have a question about
              one of our designs? Send us a message and we&apos;ll be
              happy to assist you.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/5">
                  <Clock size={21} className="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 className="font-medium">Product Enquiries</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Contact us for product details and availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/5">
                  <MapPin size={21} className="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 className="font-medium">Our Fashion World</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Inspired by Pakistani fashion, culture, and elegance.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/Collections"
              className="mt-9 inline-flex items-center gap-2 text-sm text-[#D4AF37] transition hover:text-white"
            >
              Explore Collections
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#101010] via-[#080808] to-[#050505] p-6 sm:p-9 lg:col-span-3"
          >
            <h2 className="text-2xl font-medium sm:text-3xl">
              For Order Send Us{" "}
              <span className="text-[#D4AF37]">Message</span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Fill in the details below to contact us through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF37]/70"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF37]/70"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-[#E6C75A] sm:w-auto"
              >
                Send via WhatsApp
                <Send size={17} />
              </button>

              <p className="text-xs leading-6 text-gray-500">
                WhatsApp will open with your message ready to review and send.
              </p>
            </form>
          </motion.div>
        </section>

        {/* Bottom Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#0b1424] via-[#090909] to-[#101010] px-6 py-10 text-center sm:px-10 sm:py-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            SD FASHION
          </p>

          <h2 className="mt-4 text-2xl font-light sm:text-4xl">
            Style That Speaks.{" "}
            <span className="font-semibold text-[#D4AF37]">
              Elegance That Lasts.
            </span>
          </h2>

          <p className="mt-5 text-xs tracking-[0.25em] text-gray-500 sm:text-sm">
            STYLE • ELEGANCE • YOU
          </p>
        </motion.section>
      </div>
    </main>
  );
}
