"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";
import { X, Phone, Mail, Send, CheckCircle2, Loader2, MapPin } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
}

export default function OrderModal({ isOpen, onClose, carName }: OrderModalProps) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const validate = () => {
    const errs: { phone?: string; email?: string } = {};
    if (!phone.trim() || phone.trim().length < 7) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate brief loading for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const url = getWhatsAppUrl(carName, phone.trim(), email.trim());
    window.open(url, "_blank");

    setLoading(false);
    setPhone("");
    setEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ padding: "30px" }}
            className="relative w-full max-w-md rounded-3xl glass-strong overflow-hidden"
          >
            {/* Top Gradient Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8">
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
                      (713) 487-6635
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

            {/* Bottom Gradient Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}