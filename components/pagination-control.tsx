"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControl({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-2 mt-12"
    >
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
          currentPage === 1
            ? "glass opacity-30 cursor-not-allowed"
            : "glass hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "relative w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300",
            page === currentPage
              ? "text-white"
              : "glass text-white/40 hover:text-white hover:bg-white/10"
          )}
        >
          {page === currentPage && (
            <motion.div
              layoutId="activePage"
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{page}</span>
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
          currentPage === totalPages
            ? "glass opacity-30 cursor-not-allowed"
            : "glass hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white"
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}