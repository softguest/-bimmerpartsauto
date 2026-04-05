"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";
import { X, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

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
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Order This Vehicle
                </h3>
                <p style={{ padding: "15px 0" }} className="text-sm text-white/40 font-light">
                  Submit your details and we&apos;ll connect you via WhatsApp for{" "}
                  <span className="text-white/60 font-medium">{carName}</span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Phone Field */}
                <div style={{ margin: "10px 0" }}>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                    Your Phone Number
                  </label>
                  <div className="relative">
                    {/* <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" /> */}
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 mt-1.5 ml-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div style={{ margin: "10px 0" }}>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    {/* <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" /> */}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 mt-1.5 ml-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full h-14 rounded-2xl text-sm font-semibold text-white overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Footer Note */}
              <p className="text-[11px] text-white/20 text-center mt-5 leading-relaxed">
                By submitting, you agree to be contacted about this vehicle.
                <br />
                Your information is secure and will not be shared.
              </p>
            </div>

            {/* Bottom Gradient Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}