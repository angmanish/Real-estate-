"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Car,
  Ship,
  Plane,
  Lock,
  ArrowRight
} from "lucide-react";

interface VIPBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProperty?: string;
}

export default function VIPBookingModal({
  isOpen,
  onClose,
  initialProperty = "The Worli Sea-Face Sky Palace",
}: VIPBookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityOfResidence, setCityOfResidence] = useState("Mumbai");
  const [transitMethod, setTransitMethod] = useState<"chauffeur" | "boat" | "heli">("chauffeur");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F1610]/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-xl rounded-3xl bg-white border border-[#EAE5DB] shadow-[0_30px_70px_rgba(31,22,16,0.18)] p-6 sm:p-8 overflow-hidden text-[#1F1610]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5F2EA] hover:bg-[#EAE5DB] text-[#735D4C] hover:text-[#1F1610] transition-colors border border-[#DDD6C8] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#2E7D5B] mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-display font-bold text-[#1F1610] tracking-tight">
                Private Inspection Scheduled
              </h3>

              <p className="max-w-md text-xs sm:text-sm text-[#544234] mt-2 leading-relaxed font-sans-body">
                Our Senior Managing Partner has received your confidential inquiry. We will contact you
                within 2 business hours to align chauffeur logistics and arrange private access with security.
              </p>

              <div className="mt-5 px-4 py-2 rounded-xl bg-[#F5F2EA] border border-[#DDD6C8] text-xs font-sans font-bold text-[#1F1610]">
                INSPECTION DOSSIER ID: #AMAYA-IN-8821
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
                  Confidential Indian HNI Client Desk
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1F1610] tracking-tight">
                Schedule Private Site Inspection
              </h3>

              <p className="text-xs sm:text-sm text-[#544234] mt-1 mb-6 leading-relaxed font-sans-body">
                All visits are conducted with utmost discretion. Chauffeured pickup and RERA title dossiers are prepared prior to arrival.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                    Target Residence
                  </label>
                  <input
                    type="text"
                    defaultValue={initialProperty}
                    className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1F1610] focus:outline-none focus:border-[#1F1610] font-sans shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Piramal"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1F1610] placeholder-[#9C8C7C] focus:outline-none focus:border-[#1F1610] font-sans shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1F1610] placeholder-[#9C8C7C] focus:outline-none focus:border-[#1F1610] font-sans shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@family-holding.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1F1610] placeholder-[#9C8C7C] focus:outline-none focus:border-[#1F1610] font-sans shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Client Location
                    </label>
                    <input
                      type="text"
                      placeholder="Mumbai / Delhi / Dubai / London"
                      value={cityOfResidence}
                      onChange={(e) => setCityOfResidence(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#1F1610] placeholder-[#9C8C7C] focus:outline-none focus:border-[#1F1610] font-sans shadow-2xs"
                    />
                  </div>
                </div>

                {/* Transit Protocol */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#735D4C] mb-1.5">
                    Chauffeured Transit Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setTransitMethod("chauffeur")}
                      className={`p-2.5 rounded-xl border text-xs font-sans flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        transitMethod === "chauffeur"
                          ? "bg-[#1F1610] border-[#1F1610] text-white font-semibold shadow-xs"
                          : "bg-[#FAF8F5] border-[#DDD6C8] text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>Mercedes S-Class</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTransitMethod("boat")}
                      className={`p-2.5 rounded-xl border text-xs font-sans flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        transitMethod === "boat"
                          ? "bg-[#1F1610] border-[#1F1610] text-white font-semibold shadow-xs"
                          : "bg-[#FAF8F5] border-[#DDD6C8] text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
                      }`}
                    >
                      <Ship className="w-4 h-4" />
                      <span>Speedboat (Alibaug)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTransitMethod("heli")}
                      className={`p-2.5 rounded-xl border text-xs font-sans flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        transitMethod === "heli"
                          ? "bg-[#1F1610] border-[#1F1610] text-white font-semibold shadow-xs"
                          : "bg-[#FAF8F5] border-[#DDD6C8] text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
                      }`}
                    >
                      <Plane className="w-4 h-4" />
                      <span>Helipad Access</span>
                    </button>
                  </div>
                </div>

                {/* Confidentiality Commitment */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F2EA] border border-[#EAE5DB] text-xs font-sans text-[#544234]">
                  <Lock className="w-4 h-4 text-[#2E7D5B] flex-shrink-0" />
                  <span>Strict Non-Disclosure • 100% Confidential Client Representation</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-espresso-primary py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-3 shadow-md"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Private Inspection Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
