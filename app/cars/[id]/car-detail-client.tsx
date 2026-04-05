"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Car } from "@/types";
import { formatPrice } from "@/lib/utils";
import { getRelatedCars } from "@/data/cars";
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
  Zap,
  Fuel,
  Settings,
  Users,
  Palette,
  Calendar,
  MapPin,
  Activity,
  ChevronRight,
  Car as CarIcon,
  Package,
  Star,
} from "lucide-react";

interface Props {
  car: Car;
}

export default function CarDetailClient({ car }: Props) {
  const [orderOpen, setOrderOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "features">(
    "overview"
  );

  const discount = Math.round(
    ((car.price - car.discountedPrice) / car.price) * 100
  );

  const relatedCars = getRelatedCars(car.id, 3);

  const specItems = [
    {
      icon: Settings,
      label: "Engine",
      value: car.specifications.engine,
    },
    {
      icon: Zap,
      label: "Power",
      value: car.specifications.power,
    },
    {
      icon: Activity,
      label: "Torque",
      value: car.specifications.torque,
    },
    {
      icon: Gauge,
      label: "0-60 mph",
      value: car.specifications.acceleration,
    },
    {
      icon: Gauge,
      label: "Top Speed",
      value: car.specifications.topSpeed,
    },
    {
      icon: Settings,
      label: "Transmission",
      value: car.specifications.transmission,
    },
    {
      icon: CarIcon,
      label: "Drivetrain",
      value: car.specifications.drivetrain,
    },
    {
      icon: Fuel,
      label: "Fuel Type",
      value: car.specifications.fuelType,
    },
    {
      icon: Users,
      label: "Seating",
      value: `${car.specifications.seating} Passengers`,
    },
    ...(car.specifications.cargo
      ? [
          {
            icon: Package,
            label: "Cargo",
            value: car.specifications.cargo,
          },
        ]
      : []),
  ];

  const detailItems = [
    { label: "Brand", value: car.brand },
    { label: "Year", value: car.year.toString() },
    { label: "Condition", value: car.condition },
    { label: "Mileage", value: `${car.mileage.toLocaleString()} mi` },
    { label: "Exterior Color", value: car.exteriorColor },
    { label: "Interior Color", value: car.interiorColor },
    { label: "VIN", value: car.vin },
  ];

  return (
    <>
      <div style={{ margin: "12px" }} className="min-h-screen pt-24 pb-20">
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

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Gallery */}
            <ScrollReveal direction="left">
              <ImageGallery images={car.images} name={car.name} />
            </ScrollReveal>

            {/* Details Panel */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span style={{ padding: "8px 12px" }} className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {car.category}
                  </span>
                  <span
                    style={{ padding: "8px 12px" }}
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      car.condition === "New"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {car.condition}
                  </span>
                  {discount > 0 && (
                    <span style={{ padding: "8px 12px" }} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Tag className="w-3 h-3" />
                      Save {discount}%
                    </span>
                  )}
                </div>

                {/* Brand Badge */}
                <div style={{ padding: "10px 12px", marginTop: "15px" }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass mb-4">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-medium text-white/60">
                    {car.brand}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 leading-tight">
                  {car.name}
                </h1>
                <p className="text-lg text-violet-400/80 font-medium mb-6">
                  {car.tagline}
                </p>

                {/* Description */}
                <p style={{ margin: "20px 0" }} className="text-base text-white/35 font-light leading-relaxed mb-8">
                  {car.description}
                </p>

                {/* Quick Stats */}
                <div style={{ margin: "20px 0" }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: "Power", value: car.specifications.power.split(" ")[0] },
                    {
                      label: "0-60",
                      value: car.specifications.acceleration.split(" ")[0],
                    },
                    { label: "Top Speed", value: car.specifications.topSpeed.split(" ")[0] },
                    { label: "Year", value: car.year },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-xl glass text-center"
                    >
                      <div className="text-sm font-bold text-white/80">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div style={{ margin: "20px 0", padding: "24px" }} className="p-6 rounded-2xl glass-card mb-6">
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
                  style={{ padding: "0 1.5rem" }}
                  onClick={() => setOrderOpen(true)}
                  className="group relative w-full h-16 rounded-2xl text-base font-semibold text-white overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] mb-6"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />
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
                <div style={{ margin: "10px 0" }} className="flex items-center justify-center gap-6">
                  {["Secure Payment", "Verified Dealer", "Money Back"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-white/15"
                      >
                        <Check className="w-3 h-3" />
                        <span className="text-[11px]">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Tabs Section */}
          <ScrollReveal delay={0.2}>
            <div className="mt-20">
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                {[
                  { id: "overview" as const, label: "Overview" },
                  { id: "specs" as const, label: "Specifications" },
                  { id: "features" as const, label: "Features" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 border border-violet-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Full Description */}
                    <div style={{ padding: "24px", margin: "20px 0" }} className="glass-card rounded-2xl p-6 lg:p-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        About This Vehicle
                      </h3>
                      <div className="prose prose-invert prose-sm max-w-none">
                        {car.fullDescription.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-white/40 font-light leading-relaxed mb-4"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Vehicle Details */}
                    <div className="space-y-6">
                      <div style={{ padding: "24px", margin: "20px 0" }} className="glass-card rounded-2xl p-6 lg:p-8">
                        <h3 className="text-xl font-semibold text-white mb-6">
                          Vehicle Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {detailItems.map((item) => (
                            <div key={item.label} className="space-y-1">
                              <div className="text-[11px] text-white/30 uppercase tracking-wider">
                                {item.label}
                              </div>
                              <div className="text-sm text-white/70 font-medium">
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div style={{ padding: "24px", margin: "20px 0" }} className="glass-card rounded-2xl p-6 lg:p-8">
                        <h3 className="text-xl font-semibold text-white mb-6">
                          Highlights
                        </h3>
                        <div className="space-y-3">
                          {car.highlights.map((highlight, i) => (
                            <div
                              style={{ margin: "10px 0" }}
                              key={i}
                              className="flex items-start gap-3 text-white/50"
                            >
                              <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-violet-400" />
                              </div>
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="glass-card rounded-2xl p-6 lg:p-8">
                    <h3 className="text-xl font-semibold text-white mb-8">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                      {specItems.map((spec, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors"
                        >
                          <spec.icon className="w-5 h-5 text-violet-400/60 mb-3" />
                          <div className="text-[11px] text-white/30 uppercase tracking-wider mb-1">
                            {spec.label}
                          </div>
                          <div className="text-sm text-white/80 font-medium">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="glass-card rounded-2xl p-6 lg:p-8">
                    <h3 className="text-xl font-semibold text-white mb-8">
                      Features & Equipment
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {car.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <span className="text-sm text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className="mt-20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    Similar Vehicles
                  </h3>
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-sm text-white/40 hover:text-white transition-colors"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedCars.map((relatedCar) => (
                    <Link
                      key={relatedCar.id}
                      href={`/cars/${relatedCar.id}`}
                      className="group glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={relatedCar.images[0]}
                          alt={relatedCar.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                      </div>
                      <div style={{ padding: "15px 24px", margin: "20px 0" }} className="p-4">
                        <div className="text-xs text-violet-400/60 uppercase tracking-wider mb-1">
                          {relatedCar.brand}
                        </div>
                        <h4 className="text-base font-semibold text-white group-hover:text-white/80 transition-colors line-clamp-1 mb-2">
                          {relatedCar.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold gradient-text-cyan">
                            {formatPrice(relatedCar.discountedPrice)}
                          </span>
                          <span className="text-xs text-white/30 uppercase">
                            {relatedCar.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
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