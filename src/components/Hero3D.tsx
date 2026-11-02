"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Home,
  SlidersHorizontal,
  Search,
  Compass,
  CheckCircle2,
  Box,
  Camera,
  ArrowRight,
  Maximize2
} from "lucide-react";

// Dynamically import Three.js VillaCanvas without SSR for optional 3D view toggle
const VillaCanvas = dynamic(() => import("./VillaCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[460px] flex flex-col items-center justify-center bg-[#FAF7F2]">
      <div className="w-10 h-10 rounded-full border-2 border-[#E5DACD] border-t-[#231812] animate-spin" />
      <p className="mt-3 text-xs font-sans text-[#735D4C] tracking-wider uppercase font-semibold">
        Loading 3D Spatial Model...
      </p>
    </div>
  ),
});

interface Hero3DProps {
  onOpenBooking: (propertyTitle?: string) => void;
  currency?: string;
}

// 3 Real Signature Architectural Luxury Estates
const REALISTIC_VILLAS = [
  {
    id: "worli-glass-villa",
    title: "The Worli Glass Villa",
    location: "Worli Sea Face, Mumbai",
    tagline: "Expansive floor-to-ceiling crystal glass facade with glowing warm interior lighting & private pool",
    image: "/hero-realistic-villa.jpg",
    specs: "11,200 SF • 5 BHK • Cantilever Heated Pool",
    valuationINR: "₹95.0 Crore",
    valuationUSD: "$11.4 Million",
    vastuScore: "98/100 (Ishanya Facing)",
    status: "RERA Certified & Freehold",
  },
  {
    id: "camellias-pavilion",
    title: "The Camellias Glass Pavilion",
    location: "Golf Course Road, Delhi NCR",
    tagline: "Double-height cathedral glass living salon overlooking rolling championship golf greens",
    image: "/hero-realistic-estate-2.jpg",
    specs: "12,800 SF • 6 BHK • Private Panoramic Elevator",
    valuationINR: "₹125.0 Crore",
    valuationUSD: "$15.0 Million",
    vastuScore: "96/100 (East Facing)",
    status: "Ready to Move (OC Received)",
  },
  {
    id: "assagao-coastal-villa",
    title: "Assagao Coastal Glass Sanctuary",
    location: "Assagao Badem, Goa",
    tagline: "Contemporary white glass pavilions seamlessly opening into tranquil tropical betel groves & saltwater pool",
    image: "/hero-realistic-estate-3.jpg",
    specs: "9,400 SF • 5 BHK • 65ft Saltwater Pool",
    valuationINR: "₹38.5 Crore",
    valuationUSD: "$4.6 Million",
    vastuScore: "94/100 (North-East Facing)",
    status: "Clear Freehold Land Deed",
  },
];

export default function Hero3D({ onOpenBooking, currency = "INR" }: Hero3DProps) {
  const router = useRouter();

  // Active Realistic Villa Selection
  const [activeVillaIdx, setActiveVillaIdx] = useState(0);
  const activeVilla = REALISTIC_VILLAS[activeVillaIdx];

  // View mode: 'photo' (Realistic Photography) or '3d' (Interactive Three.js)
  const [viewMode, setViewMode] = useState<"photo" | "3d">("photo");

  // Floating Filter Widget States
  const [filterLocation, setFilterLocation] = useState("Mumbai");
  const [filterType, setFilterType] = useState("Luxury Villa");
  const [filterPrice, setFilterPrice] = useState("₹25 Cr - ₹50 Cr");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (filterLocation) queryParams.set("city", filterLocation);
    if (filterType) queryParams.set("typology", filterType);
    router.push(`/properties?${queryParams.toString()}`);
  };

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-20 lg:pb-28 px-4 sm:px-8 lg:px-16 overflow-visible bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            HERO MAIN ROW: Split 2-Column Layout matching Dribbble inspiration
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 cols): Bold Clean Sans-Serif Headline, Subtitle & Explore CTA */}
          <div className="lg:col-span-5 text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#231812]" />
                <span className="text-xs font-sans tracking-wider uppercase text-[#8F8176] font-bold">
                  Curated Real Estate // 2026 Collection
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-display font-extrabold tracking-tight text-[#231812] leading-[1.06]">
                Find Your <br />
                Dream Home
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#5D5046] font-normal leading-relaxed max-w-md font-sans">
                Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision.
              </p>

              {/* Action Deck: Explore Residences & View Mode Switcher */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking(activeVilla.title)}
                  className="px-8 py-4 rounded-xl bg-[#231812] hover:bg-[#38261C] text-[#FAF7F2] font-sans font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Residences</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* View Mode Switcher: Realistic Photo vs. 3D Model */}
                <div className="inline-flex items-center p-1 rounded-xl bg-[#EFE7DE] border border-[#E5DACD] text-xs font-sans">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-white text-[#231812] font-bold shadow-xs"
                        : "text-[#735D4C] hover:text-[#231812]"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Realistic Photo</span>
                  </button>
                  <button
                    onClick={() => setViewMode("3d")}
                    className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewMode === "3d"
                        ? "bg-white text-[#231812] font-bold shadow-xs"
                        : "text-[#735D4C] hover:text-[#231812]"
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Walkthrough</span>
                  </button>
                </div>
              </div>

              {/* Real Estate Switcher Tabs */}
              <div className="mt-8 pt-6 border-t border-[#EAE2D8]">
                <div className="text-[11px] font-sans uppercase tracking-wider text-[#8F8176] font-bold mb-2.5">
                  Featured Signature Estates:
                </div>
                <div className="flex flex-wrap gap-2">
                  {REALISTIC_VILLAS.map((villa, idx) => (
                    <button
                      key={villa.id}
                      onClick={() => {
                        setActiveVillaIdx(idx);
                        setViewMode("photo");
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                        activeVillaIdx === idx
                          ? "bg-[#231812] text-white font-bold shadow-xs"
                          : "bg-white/70 hover:bg-white text-[#5D5046] border border-[#E5DACD]"
                      }`}
                    >
                      {villa.title.replace("The ", "").split(" ")[0]} ({villa.location.split(",")[0]})
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 cols): Prominent Realistic Modern White Luxury Villa */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full rounded-3xl overflow-hidden border border-[#E5DACD] bg-[#FAF7F2] shadow-[0_24px_60px_-12px_rgba(35,24,18,0.12)]"
            >
              {viewMode === "photo" ? (
                /* Authentic High-Resolution Real Architectural Photograph */
                <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeVilla.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeVilla.image}
                        alt={activeVilla.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        priority
                      />

                      {/* Natural Photography Vignette & Seamless Bottom Tint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                      {/* Floating Top Verification Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/70 shadow-xs pointer-events-auto">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6E43]" />
                          <span className="text-xs font-sans tracking-wide uppercase text-[#231812] font-bold">
                            {activeVilla.status}
                          </span>
                        </div>

                        <div className="bg-[#231812]/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-sans font-semibold text-white pointer-events-auto">
                          {currency === "USD" ? activeVilla.valuationUSD : activeVilla.valuationINR}
                        </div>
                      </div>

                      {/* Floating Bottom Card: Real Architecture Details */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-lg pointer-events-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs text-[#8F8176] font-semibold uppercase tracking-wider">
                              <MapPin className="w-3.5 h-3.5 text-[#231812]" />
                              <span>{activeVilla.location}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-[#231812] mt-0.5">
                              {activeVilla.title}
                            </h3>
                            <div className="text-xs text-[#5D5046] font-sans mt-0.5 font-medium">
                              {activeVilla.specs}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-2 sm:pt-0">
                            <button
                              onClick={() => onOpenBooking(activeVilla.title)}
                              className="px-4 py-2 rounded-xl bg-[#231812] hover:bg-[#38261C] text-white text-xs font-sans font-semibold transition-colors cursor-pointer"
                            >
                              Schedule Visit
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                /* Interactive 3D WebGL Villa Canvas */
                <div className="w-full h-[440px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden bg-[#FAF7F2]">
                  <VillaCanvas />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            FLOATING HORIZONTAL SEARCH & FILTER WIDGET
            Muted taupe/sand container, white rounded pills, deep espresso button
            ========================================================================= */}
        <div className="relative z-20 max-w-5xl mx-auto w-full mt-10 lg:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#E2D5C8] border border-[#D5C6B8] shadow-[0_24px_50px_-10px_rgba(35,24,18,0.14)]"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
            >
              {/* Pill 1: Location */}
              <div className="flex-1 bg-white rounded-xl sm:rounded-2xl px-4 py-3 flex items-center justify-between border border-[#EAE2D8] shadow-2xs hover:border-[#231812]/30 transition-colors">
                <div className="w-full">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F8176]">
                    Location
                  </div>
                  <select
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-sans font-bold text-[#231812] focus:outline-none cursor-pointer"
                  >
                    <option value="Mumbai">Mumbai (Worli Sea Face)</option>
                    <option value="Delhi NCR">Delhi NCR (Golf Course Rd)</option>
                    <option value="Goa">Goa (Assagao Heritage)</option>
                    <option value="Bengaluru">Bengaluru (Sadashivanagar)</option>
                    <option value="Alibaug">Alibaug Beachfront</option>
                  </select>
                </div>
                <MapPin className="w-4 h-4 text-[#8F8176] flex-shrink-0 ml-2" />
              </div>

              {/* Pill 2: Type */}
              <div className="flex-1 bg-white rounded-xl sm:rounded-2xl px-4 py-3 flex items-center justify-between border border-[#EAE2D8] shadow-2xs hover:border-[#231812]/30 transition-colors">
                <div className="w-full">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F8176]">
                    Type
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full bg-transparent text-sm font-sans font-bold text-[#231812] focus:outline-none cursor-pointer"
                  >
                    <option value="Luxury Villa">Luxury Glass Villa</option>
                    <option value="Sea-Facing Sky Mansion">Sea-Facing Sky Mansion</option>
                    <option value="Golf Course Super-Penthouse">Golf Course Penthouse</option>
                    <option value="Portuguese Heritage Glass Villa">Portuguese Villa</option>
                    <option value="Coastal Glass Sanctuary">Coastal Sanctuary</option>
                  </select>
                </div>
                <Home className="w-4 h-4 text-[#8F8176] flex-shrink-0 ml-2" />
              </div>

              {/* Pill 3: Price Range */}
              <div className="flex-1 bg-white rounded-xl sm:rounded-2xl px-4 py-3 flex items-center justify-between border border-[#EAE2D8] shadow-2xs hover:border-[#231812]/30 transition-colors">
                <div className="w-full">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8F8176]">
                    Price Range
                  </div>
                  <select
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(e.target.value)}
                    className="w-full bg-transparent text-sm font-sans font-bold text-[#231812] focus:outline-none cursor-pointer"
                  >
                    <option value="₹25 Cr - ₹50 Cr">₹25 Cr – ₹50 Cr ($3M – $6M)</option>
                    <option value="₹50 Cr - ₹100 Cr">₹50 Cr – ₹100 Cr ($6M – $12M)</option>
                    <option value="₹100 Cr+">₹100 Cr+ ($12M+ Trophies)</option>
                  </select>
                </div>
                <SlidersHorizontal className="w-4 h-4 text-[#8F8176] flex-shrink-0 ml-2" />
              </div>

              {/* Deep Espresso Search Button */}
              <button
                type="submit"
                className="px-8 py-4 rounded-xl sm:rounded-2xl bg-[#231812] hover:bg-[#38261C] text-[#FAF7F2] font-sans font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Residences</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
