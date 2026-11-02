"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROPERTIES } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import MarketInsights from "./MarketInsights";
import {
  Search,
  SlidersHorizontal,
  Compass,
  ArrowUpRight
} from "lucide-react";

interface BentoGridProps {
  currency?: string;
  onBookTour?: (propertyTitle: string) => void;
}

export default function BentoGrid({
  currency = "INR",
  onBookTour,
}: BentoGridProps) {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const cities = ["All", "Mumbai", "Delhi NCR", "Goa", "Bengaluru", "Alibaug"];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      const matchCity =
        selectedCity === "All" || prop.location.city.toLowerCase() === selectedCity.toLowerCase();
      const matchSearch =
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.architect.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchSearch;
    });
  }, [selectedCity, searchQuery]);

  return (
    <section id="curated-portfolio" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
              <span className="text-xs font-sans uppercase tracking-wider text-[#735D4C] font-bold">
                Curated Indian Enclaves // RERA Registered
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610]">
              Signature Residences &amp;{" "}
              <span className="text-[#9E7246]">Private Estates</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
            Every listed residence has completed exhaustive 30-year revenue search title diligence,
            sanctioned municipal plan verification, and authentic Vastu Shastra directional clearance.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-4 rounded-3xl mb-10 bg-white border border-[#EAE5DB] shadow-sm flex flex-wrap items-center justify-between gap-4">
          {/* City Segmented Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-2xl text-xs font-sans font-bold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedCity === city
                    ? "bg-[#1F1610] text-[#FAF8F5] shadow-xs"
                    : "text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-grow sm:w-72">
              <Search className="w-4 h-4 text-[#735D4C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search suburb, architect, or landmark..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE5DB] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#1F1610] placeholder-[#967E6B] focus:outline-none focus:border-[#1F1610] font-sans-body transition-colors"
              />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans font-bold text-[#735D4C] px-3.5 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1F1610]" />
              <span>{filteredProperties.length} RESIDENCES</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bento Item 1: Large Feature Property (Worli Sea-Face Sky Palace) */}
          {filteredProperties.find((p) => p.id === "worli-sky-palace") && (
            <div className="lg:col-span-8 flex">
              <PropertyCard
                property={filteredProperties.find((p) => p.id === "worli-sky-palace")!}
                currency={currency}
                onBookTour={onBookTour}
              />
            </div>
          )}

          {/* Bento Item 2: Live Sovereign Market Intelligence Module */}
          <div className="lg:col-span-4 flex">
            <MarketInsights />
          </div>

          {/* Bento Item 3: Golf Course Super-Penthouse (DLF The Camellias) */}
          {filteredProperties.find((p) => p.id === "camellias-golf-pavilion") && (
            <div className="lg:col-span-4 flex">
              <PropertyCard
                property={filteredProperties.find((p) => p.id === "camellias-golf-pavilion")!}
                currency={currency}
                onBookTour={onBookTour}
              />
            </div>
          )}

          {/* Bento Item 4: Goa Portuguese Heritage Villa (Casa do Sol) */}
          {filteredProperties.find((p) => p.id === "casa-do-sol-goa") && (
            <div className="lg:col-span-4 flex">
              <PropertyCard
                property={filteredProperties.find((p) => p.id === "casa-do-sol-goa")!}
                currency={currency}
                onBookTour={onBookTour}
              />
            </div>
          )}

          {/* Bento Item 5: Authentic Indian Architectural & Vastu Assurance Tile */}
          <div className="lg:col-span-4 rounded-3xl luxury-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group bg-white border border-[#EAE5DB]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-2xl bg-[#F5F2EA] text-[#1F1610] border border-[#E5DFD3]">
                  <Compass className="w-4 h-4" />
                </span>
                <span className="text-xs font-sans uppercase tracking-wider text-[#735D4C] font-bold">
                  Vastu Shastra &amp; Title Desk
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-display font-extrabold text-[#1F1610] tracking-tight">
                Generational Heritage Assurance
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#544234] leading-relaxed font-sans-body">
                Every acquisition is screened through our 5-fold audit: Vastu geometry, 30-year revenue search,
                RERA registration, structural seismic assessment, and municipal plan verification.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1F1610]">Vastu Directional Audit</span>
                  <span className="text-xs font-sans text-[#1F6E43] font-bold">100% Verified</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1F1610]">Staff Quarters &amp; Service Core</span>
                  <span className="text-xs font-sans text-[#9E7246] font-bold">Dedicated En-Suites</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1F1610]">Power Backup Protocol</span>
                  <span className="text-xs font-sans text-[#9E7246] font-bold">100% DG Full Load</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
              <span className="text-xs font-sans text-[#735D4C] uppercase font-semibold">Cyril Amarchand Audited</span>
              <Link
                href="/about"
                className="text-xs font-sans text-[#1F1610] hover:text-[#9E7246] transition-colors uppercase tracking-wider font-bold flex items-center gap-1"
              >
                <span>5 Pillars of Trust</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Item 6: Bengaluru Sadashivanagar Manor */}
          {filteredProperties.find((p) => p.id === "sadashivanagar-manor") && (
            <div className="lg:col-span-8 flex">
              <PropertyCard
                property={filteredProperties.find((p) => p.id === "sadashivanagar-manor")!}
                currency={currency}
                onBookTour={onBookTour}
              />
            </div>
          )}

          {/* Bento Item 7: Alibaug Coastal Glass Villa */}
          {filteredProperties.find((p) => p.id === "alibaug-waterfront-sanctuary") && (
            <div className="lg:col-span-4 flex">
              <PropertyCard
                property={filteredProperties.find((p) => p.id === "alibaug-waterfront-sanctuary")!}
                currency={currency}
                onBookTour={onBookTour}
              />
            </div>
          )}
        </div>

        {/* Explore All Properties Link Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-espresso-primary text-xs uppercase font-bold tracking-wider"
          >
            <span>View Complete Collection of 6+ Ultra-Prime Residences</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
