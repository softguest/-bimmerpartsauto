"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Car, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 glass-strong shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-shadow duration-300">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  LUXE
                </span>
                <span className="text-xl font-light tracking-tight text-white/60">
                  MOTORS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Collection", href: "/#collection" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/#collection"
                className="relative px-5 py-2 rounded-full text-sm font-medium text-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
                <span className="relative flex items-center gap-1.5 py-2 px-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Explore
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {["Collection", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Collection" ? "/#collection" : "#"}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/#collection"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}