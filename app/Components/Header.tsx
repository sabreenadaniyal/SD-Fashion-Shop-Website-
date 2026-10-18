"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/Collections" },
  { name: "New Arrivals", href: "/NewArrival" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

const searchItems = [
  {
    name: "Maxi & Frocks",
    keywords: "maxi frock bridal dress",
    href: "/NewArrival/Maxi",
  },
  {
    name: "Saree",
    keywords: "saree sari",
    href: "/NewArrival/Saree",
  },
  {
    name: "Gharara & Sharara",
    keywords: "gharara sharara",
    href: "/NewArrival/Gharara-Sharara",
  },
  {
    name: "Suits",
    keywords: "shirt trouser kameez shalwar suit",
    href: "/NewArrival/Suit",
  },
  {
    name: "New Arrivals",
    keywords: "new arrival latest collection",
    href: "/NewArrival",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Replace these placeholders with your actual business contact details.
  const whatsappNumber = "923358295589";
  const phoneNumber = "+923358295589";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling while mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Close overlays when switching to desktop layout.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredItems = searchItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return true;

    return (
      item.name.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );
  });

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setIsSearchOpen((previous) => !previous);
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="fixed inset-x-0 top-0 z-[60] flex h-8 items-center justify-center border-b border-[#d4b779]/20 bg-[#08090c] px-3">
        <p className="text-center text-[8px] uppercase tracking-[0.17em] text-[#e5cd91] sm:text-[10px] sm:tracking-[0.3em]">
          Pakistani Couture · Nationwide Delivery
        </p>
      </div>

      {/* MAIN HEADER */}
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed inset-x-0 top-8 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#d4b779]/25 bg-[#08090c]/95 shadow-[0_8px_35px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-b border-white/[0.06] bg-[#08090c]/65 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between gap-3 transition-all duration-300 ${
              isScrolled ? "h-[68px] sm:h-[76px]" : "h-[76px] sm:h-[88px]"
            }`}
          >
            {/* BRAND LOGO */}
            <Link
              href="/"
              onClick={() => {
                closeSearch();
                closeMenu();
              }}
              aria-label="SD Fashion home"
              className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b779]/80 transition-all duration-500 group-hover:border-[#f1dba6] sm:h-12 sm:w-12">
                <span className="font-serif text-base tracking-tight text-[#ead6a5] sm:text-lg">
                  SD
                </span>

                <span className="absolute inset-[-4px] rounded-full border border-[#d4b779]/20 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div>
                <p className="font-serif text-sm tracking-[0.12em] text-white sm:text-xl sm:tracking-[0.17em]">
                  SD FASHION
                </p>

                <p className="mt-1 text-[6px] tracking-[0.19em] text-[#d4b779] sm:text-[8px] sm:tracking-[0.3em]">
                  STYLE · ELEGANCE · YOU
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-9"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeSearch}
                    className="group relative whitespace-nowrap py-2 text-[9px] uppercase tracking-[0.13em] text-white/75 transition-colors duration-300 hover:text-[#ead6a5] lg:text-[10px] lg:tracking-[0.17em]"
                  >
                    {item.name}

                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4b779] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex shrink-0 items-center gap-2">
              {/* SEARCH */}
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={isSearchOpen ? "Close search" : "Search products"}
                aria-expanded={isSearchOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/85 transition-all hover:border-[#d4b779]/60 hover:text-[#ead6a5] sm:h-10 sm:w-10"
              >
                {isSearchOpen ? <X size={17} /> : <Search size={17} />}
              </button>

              {/* DESKTOP CONTACT */}
              <div className="hidden items-center gap-2 lg:flex">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact SD Fashion on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all hover:border-[#d4b779]/60 hover:text-[#ead6a5]"
                >
                  <MessageCircle size={16} />
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  aria-label="Call SD Fashion"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all hover:border-[#d4b779]/60 hover:text-[#ead6a5]"
                >
                  <Phone size={16} />
                </a>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen((previous) => !previous);
                  setIsSearchOpen(false);
                }}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b779]/40 text-[#ead6a5] transition-all hover:bg-[#d4b779]/10 md:hidden"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* SEARCH PANEL */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[108px] z-[70] max-h-[calc(100svh-108px)] overflow-y-auto border-b border-[#d4b779]/25 bg-[#08090c]/[0.98] px-5 py-6 shadow-2xl backdrop-blur-xl sm:top-[120px] sm:px-8"
          >
            <div className="mx-auto max-w-3xl">
              <label
                htmlFor="fashion-search"
                className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#d4b779]"
              >
                Discover Your Style
              </label>

              <div className="flex items-center gap-3 border-b border-[#d4b779]/50 pb-3">
                <Search size={19} className="shrink-0 text-[#d4b779]" />

                <input
                  id="fashion-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") closeSearch();
                  }}
                  placeholder="Search Maxi, Saree, Gharara..."
                  autoFocus
                  className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/35"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="text-white/60 transition hover:text-[#ead6a5]"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <p className="mb-3 mt-5 text-[9px] uppercase tracking-[0.2em] text-white/45">
                {searchQuery ? "Matching Categories" : "Explore Categories"}
              </p>

              {filteredItems.length > 0 ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {filteredItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeSearch}
                      className="group flex items-center justify-between border border-white/10 px-4 py-3.5 text-sm text-white/80 transition-all hover:border-[#d4b779]/50 hover:bg-[#d4b779]/[0.05] hover:text-[#ead6a5]"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={15}
                        className="text-[#d4b779] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="py-5 text-sm text-white/60">
                  No matching category found. Try Maxi, Saree, Gharara or
                  Shirt Trouser.
                </p>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#08090c] pt-32 md:hidden"
          >
            <div className="flex min-h-full flex-col px-7 sm:px-10">
              <div className="mb-7">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4b779]">
                  Discover SD Fashion
                </p>

                <h2 className="mt-2 font-serif text-2xl text-white">
                  Timeless Elegance
                </h2>
              </div>

              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-white/10 py-5 text-sm uppercase tracking-[0.19em] text-white/85 transition-colors hover:text-[#ead6a5]"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={16}
                        className="text-[#d4b779] opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* MOBILE CONTACT */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#d4b779]/50 py-4 text-[10px] uppercase tracking-wider text-[#ead6a5] transition hover:bg-[#d4b779]/10"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 border border-[#d4b779]/50 py-4 text-[10px] uppercase tracking-wider text-[#ead6a5] transition hover:bg-[#d4b779]/10"
                >
                  <Phone size={16} />
                  Call Us
                </a>
              </div>

              <div className="mt-auto py-10 text-center">
                <p className="font-serif text-lg tracking-[0.2em] text-[#ead6a5]">
                  SD FASHION
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Style · Elegance · You
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
