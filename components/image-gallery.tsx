"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div style={{ margin: "30px 0 30px 0" }} className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex]}
                alt={`${name} - Image ${activeIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Arrows */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setFullscreen(true)}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl glass-strong flex items-center justify-center text-white/50 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Expand className="w-4 h-4" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium text-white/70">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ margin: "20px 0 20px 0" }} className="grid grid-cols-6 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden transition-all duration-300 group/thumb",
                i === activeIndex
                  ? "ring-2 ring-violet-500 ring-offset-2 ring-offset-surface"
                  : "opacity-50 hover:opacity-80"
              )}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                sizes="100px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={name}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-sm font-medium tracking-wider uppercase"
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}