"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car } from "@/types";
import { formatPrice } from "@/lib/utils";
import ImageGallery from "@/components/image-gallery";
import OrderModal from "@/components/order-modal";
import ScrollReveal from "@/components/scroll-reveal";
import {
  ArrowLeft,
  ShoppingCart,
  Shield,
  Award,
  Gauge,
  Sparkles,
  Tag,
  Check,
} from "lucide-react";

interface Props {
  car: Car;
}

export default function CarDetailClient({ car }: Props) {
  const [orderOpen, setOrderOpen] = useState(false);

  const discount = Math.round(
    ((car.price - car.discountedPrice) / car.price) * 100
  );

  return (
    <>
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Collection</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Gallery */}
            <ScrollReveal direction="left">
              <ImageGallery images={car.images} name={car.name} />
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {car.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      car.condition === "New"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {car.condition}
                  </span>
                  {discount > 0 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Tag className="w-3 h-3" />
                      Save {discount}%
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                  {car.name}
                </h1>

                {/* Description */}
                <p className="text-base text-white/35 font-light leading-relaxed mb-8">
                  {car.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      icon: Shield,
                      label: "Warranty",
                      value: "5 Years",
                    },
                    {
                      icon: Award,
                      label: "Certified",
                      value: "Verified",
                    },
                    {
                      icon: Gauge,
                      label: "Condition",
                      value: car.condition,
                    },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="p-4 rounded-2xl glass text-center"
                    >
                      <feat.icon className="w-5 h-5 text-violet-400/60 mx-auto mb-2" />
                      <div className="text-xs text-white/30 mb-0.5">
                        {feat.label}
                      </div>
                      <div className="text-sm font-medium text-white/70">
                        {feat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="p-6 rounded-2xl glass-card mb-8">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-2">
                    Price
                  </div>
                  <div className="flex items-end gap-3 mb-3">
                    <span className="text-4xl font-bold gradient-text-cyan">
                      {formatPrice(car.discountedPrice)}
                    </span>
                    <span className="text-lg text-white/20 line-through mb-1">
                      {formatPrice(car.price)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400/80">
                    <Check className="w-4 h-4" />
                    <span className="text-sm">
                      You save {formatPrice(car.price - car.discountedPrice)}
                    </span>
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => setOrderOpen(true)}
                  className="group relative w-full h-16 rounded-2xl text-base font-semibold text-white overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />

                  {/* Animated streak */}
                  <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
                  </span>

                  <span className="relative flex items-center justify-center gap-3">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="uppercase tracking-wider">Order Now</span>
                    <Sparkles className="w-4 h-4 opacity-60" />
                  </span>
                </button>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-6 mt-6">
                  {[
                    "Secure Payment",
                    "Verified Dealer",
                    "Money Back",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-white/15"
                    >
                      <Check className="w-3 h-3" />
                      <span className="text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        carName={car.name}
      />
    </>
  );
}