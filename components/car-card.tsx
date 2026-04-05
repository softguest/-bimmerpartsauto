"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import { Car } from "@/types";
import { ArrowUpRight, Tag, Star } from "lucide-react";

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const discount = Math.round(
    ((car.price - car.discountedPrice) / car.price) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/cars/${car.id}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="group relative rounded-2xl overflow-hidden glass-card hover:border-white/15 transition-all duration-500 cursor-pointer"
        >
          {/* Light streak on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
          </div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <Tag className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  {discount}% OFF
                </span>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div style={{ padding: "2px 8px" }} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
                {car.category}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-52 sm:h-56 overflow-hidden bg-surface-100">
            <Image
              src={car.images[0]}
              alt={car.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div style={{ padding: "1rem 1.25rem" }} className="p-5 sm:p-6">
            {/* Brand */}
            <div className="flex items-center gap-1.5 mb-2">
              <Star className="w-3 h-3 text-amber-400/60" />
              <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">
                {car.brand}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-white transition-colors line-clamp-1">
                {car.name}
              </h3>
              <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-violet-400 transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform" />
              </div>
            </div>

            <p className="text-sm text-white/30 line-clamp-2 mb-4 font-light leading-relaxed">
              {car.description}
            </p>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs text-white/25 line-through mb-0.5">
                  {formatPrice(car.price)}
                </div>
                <div className="text-xl font-bold gradient-text-cyan">
                  {formatPrice(car.discountedPrice)}
                </div>
              </div>
              <div
               style={{ padding: "2px 8px" }}
                className={`px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider ${
                  car.condition === "New"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                {car.condition}
              </div>
            </div>
          </div>

          {/* Bottom glow on hover */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  );
}