"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars as allCars } from "@/data/cars";
import CarCard from "./car-card";
import PaginationControl from "./pagination-control";
import ScrollReveal from "./scroll-reveal";
import { CarCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: ("All" | CarCategory)[] = [
  "All",
  "Hypercar",
  "Sports",
  "Luxury",
  "Electric",
  "SUV",
  "Coupe",
  "Convertible",
  "Sedan",
];

const ITEMS_PER_PAGE = 10;

export default function CarGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<"All" | CarCategory>("All");

  const filteredCars =
    activeCategory === "All"
      ? allCars
      : allCars.filter((car) => car.category === activeCategory);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = filteredCars.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCategoryChange = useCallback((category: "All" | CarCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section id="collection" style={{ background: "linear-gradient(to bottom, #000000, #434343)" ,padding: "50px 12px 100px 12px" }} className="relative py-24 sm:py-32 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 justify-items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-transparent animate-pulse" />
              <div style={{padding: "5px 12px"}} className="text-xs font-medium text-white/50 uppercase tracking-[0.2em]">
                Our Collection
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Exceptional <span className="gradient-text">Car parts</span>
            </h2>
            <p className="text-base text-white/30 max-w-xl mx-auto font-light">
              Handpicked selection of the world&apos;s most desirable car parts,
              each one a masterpiece of engineering and design.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div style={{margin: "15px 12px"}} className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{padding: "5px 12px" }}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "text-white"
                    : "text-white/40 hover:text-white/70 glass hover:border-white/15"
                )}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 border border-violet-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Results Count */}
        <div className="text-sm text-white/20 mb-6 text-center">
          Showing {startIndex + 1}–
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredCars.length)} of{" "}
          {filteredCars.length} car parts
        </div>

        {/* Car Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {paginatedCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div style={{ padding: "12px" }}></div>

        {/* Empty State */}
        {paginatedCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">
              No car parts found in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}