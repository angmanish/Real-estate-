"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import VIPBookingModal from "@/components/VIPBookingModal";
import { PROPERTIES } from "@/data/properties";
import {
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Building2
} from "lucide-react";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "All";

  const [currency, setCurrency] = useState("INR");
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedTypology, setSelectedTypology] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-desc" | "price-asc" | "area-desc">("price-desc");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [targetProperty, setTargetProperty] = useState("The Worli Sea-Face Sky Palace");

  const cities = ["All", "Mumbai", "Delhi NCR", "Goa", "Bengaluru", "Alibaug", "Hyderabad"];
  const typologies = [
    "All",
    "Sea-Facing Sky Mansion",
    "Golf Course Super-Penthouse",
    "Portuguese Heritage Glass Villa",
    "Independent Bungalow",
    "Coastal Glass Sanctuary",
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      const matchCity =
        selectedCity === "All" || prop.location.city.toLowerCase() === selectedCity.toLowerCase();
      const matchTypology =
        selectedTypology === "All" || prop.typology === selectedTypology;
      const matchSearch =
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.architect.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchTypology && matchSearch;
    }).sort((a, b) => {
      if (sortBy === "price-desc") return b.priceInCrores - a.priceInCrores;
      if (sortBy === "price-asc") return a.priceInCrores - b.priceInCrores;
      if (sortBy === "area-desc") return b.specs.carpetAreaSqFt - a.specs.carpetAreaSqFt;
      return 0;
    });
  }, [selectedCity, selectedTypology, searchQuery, sortBy]);

  const handleOpenBooking = (title?: string) => {
    if (title) setTargetProperty(title);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1610] flex flex-col relative font-sans">
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Page Header Banner */}
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-12 border-b border-[#EAE5DB] relative overflow-hidden architectural-grid-light bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
              Curated Indian Residential Portfolio // RERA Verified
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610]">
            India&apos;s Foremost{" "}
            <span className="text-[#9E7246]">Trophy Residences</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#544234] font-normal leading-relaxed font-sans-body">
            Explore our curated catalog of ultra-luxury residences across Mumbai, Delhi NCR, Goa,
            Bengaluru, Alibaug, and Hyderabad. Every asset is vetted with 30-year legal searches and Vastu directional audits.
          </p>

          {/* Quick Filter Command Deck */}
          <div className="mt-8 p-4 rounded-3xl bg-white border border-[#EAE5DB] flex flex-wrap items-center justify-between gap-4 shadow-lg">
            {/* City Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    selectedCity === city
                      ? "bg-[#1F1610] text-[#FAF8F5] font-bold shadow-xs"
                      : "text-[#544234] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Sort & Search */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-grow sm:w-64">
                <Search className="w-4 h-4 text-[#735D4C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search landmark, architect..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl pl-10 pr-4 py-2 text-xs text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] font-sans"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF8F5] border border-[#DDD6C8] rounded-xl px-3 py-2 text-xs text-[#1F1610] focus:outline-none cursor-pointer font-sans font-medium"
              >
                <option value="price-desc">Valuation: High to Low</option>
                <option value="price-asc">Valuation: Low to High</option>
                <option value="area-desc">Carpet Area: Largest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Typology Sub-Filter Bar */}
      <section className="py-4 px-4 sm:px-6 lg:px-12 bg-[#F5F2EA] border-b border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] whitespace-nowrap">
              Typology:
            </span>
            {typologies.map((typ) => (
              <button
                key={typ}
                onClick={() => setSelectedTypology(typ)}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all whitespace-nowrap cursor-pointer ${
                  selectedTypology === typ
                    ? "text-[#1F1610] font-bold border-b-2 border-[#1F1610]"
                    : "text-[#544234] hover:text-[#1F1610]"
                }`}
              >
                {typ}
              </button>
            ))}
          </div>

          <div className="text-xs font-sans text-[#735D4C] whitespace-nowrap">
            Showing <span className="text-[#1F1610] font-bold">{filteredProperties.length}</span> of {PROPERTIES.length} Reserves
          </div>
        </div>
      </section>

      {/* Property Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 flex-grow bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length === 0 ? (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-display font-bold text-[#1F1610]">No properties match your filter criteria</h3>
              <p className="text-sm text-[#544234] mt-2 font-sans-body">
                Try clearing your search query or selecting &quot;All&quot; cities to view the complete portfolio.
              </p>
              <button
                onClick={() => {
                  setSelectedCity("All");
                  setSelectedTypology("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-3 rounded-xl btn-espresso-primary text-xs uppercase tracking-wider cursor-pointer font-bold shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  currency={currency}
                  onBookTour={handleOpenBooking}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty={targetProperty}
      />
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#EAE5DB] border-t-[#1F1610] animate-spin" />
        </div>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}
