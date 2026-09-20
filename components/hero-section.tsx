"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Shield, Star } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function HeroSection() {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (NEW) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "#212121", // fallback color
          // backgroundImage: "url('/images/bg-8.png')", // replace with your image
        }}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" /> 

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-[120px] animate-pulse-glow" />
     
      {/* Content */}
      <div  className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{padding: "10px 12px"}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <div className="text-xs font-medium text-white/70 uppercase tracking-widest">
              Premium Automotive Marketplace
            </div>
          </div>
        </motion.div> */}

        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">THE </span>
          <span className="gradient-text text-shadow-glow">FUTURE</span>
          <br />
          <span className="text-white/90 font-light">OF DRIVING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/40 font-light leading-relaxed mb-12"
        >
          Discover an exclusive collection of the world&apos;s most extraordinary
          car parts. From hypercars to electric marvels, find your next
          masterpiece.
        </motion.p> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div
            onClick={scrollToCollection}
            className="group relative px-8 py-4 rounded-2xl text-sm font-semibold text-white overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500" />
            <button style={{padding: "10px 12px"}} className="relative uppercase tracking-wider">
              Explore Collection
            </button>
          </div>
          <div
            onClick={scrollToCollection}
            style={{padding: "8px 15px"}}
            className="group px-8 py-4 rounded-2xl text-sm font-medium text-white/70 hover:text-white glass hover:border-white/20 transition-all duration-300"
          >
            <span className="uppercase tracking-wider">View All Cars</span>
          </div>
        </motion.div> */}

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20"
        >
          {[
            { icon: Star, label: "Premium Cars", value: "30+" },
            { icon: Shield, label: "Verified Deals", value: "100%" },
            { icon: Zap, label: "Fast Delivery", value: "24h" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-violet-400/60 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}

        <img src="/images/heromain.png" alt="Car 1" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-fuchsia-500/5 blur-[80px] animate-float-delayed" />


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToCollection}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}