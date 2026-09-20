"use client";

import { useState } from "react";
import { Phone, MapPin, X, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <button
      style={{ padding: "5px 12px" }}
        onClick={() => setIsOpen(true)}
        aria-label="Contact Us"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Contact Us</span>
      </button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Dialog */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl"
            style={{ padding: "20px 30px" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close contact dialog"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
              style={{ padding: "10px 12px" }}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div style={{ padding: "10px 0" }} className="mb-6">
              <h2 className="text-2xl font-bold text-white">
                BIMMER PARTS AUTO
              </h2>

              <p className="mt-2 text-sm text-white/50">
                Get in touch with us for your auto parts needs.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+17134876635"
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <div style={{ margin: "10px 0" }} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>

                <div style={{ margin: "10px 0" }} >
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    + 1 (740) 324-0618
                  </p>
                </div>
              </a>

              {/* Address */}
              <div style={{ margin: "10px 0" }} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white">
                    9103 S Dairy Ashford Rd
                    <br />
                    Houston, TX 77099
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <a
              href="tel:+17134876635"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              style={{ padding: "5px 12px" }}
            >
              <Phone className="h-4 w-4" />
              Call BIMMER PARTS AUTO
            </a>
          </div>
        </div>
      )}
    </>
  );
}