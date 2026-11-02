"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/realEstate";
import {
  Bed,
  Maximize,
  Compass,
  ArrowUpRight,
  MapPin,
  Car,
  Heart
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
  currency?: string;
  onBookTour?: (propertyTitle: string) => void;
}

export default function PropertyCard({
  property,
  currency = "INR",
  onBookTour,
}: PropertyCardProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const formatPrice = () => {
    if (currency === "USD") {
      return `$${property.priceInUSD.toFixed(1)} Million`;
    }
    return `₹${property.priceInCrores.toFixed(1)} Crore`;
  };

  return (
    <div className="relative rounded-3xl overflow-hidden luxury-card group flex flex-col justify-between p-5 sm:p-6 w-full bg-white border border-[#EAE5DB]">
      {/* Top Media Gallery & Status Tags */}
      <div>
        <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-[#F5F2EA]">
          <Image
            src={property.images[activeImageIdx] || property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
          />

          {/* Clean Photographic Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F1610]" />
              <span className="text-[11px] font-sans tracking-wide uppercase text-[#1F1610] font-bold">
                {property.badge || property.status}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsSaved(!isSaved);
              }}
              className="p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all text-[#1F1610] border border-white/60 shadow-xs cursor-pointer"
              title="Save to Private Shortlist"
              aria-label="Save property to shortlist"
            >
              <Heart
                className={`w-3.5 h-3.5 transition-colors ${
                  isSaved ? "fill-[#1F1610] text-[#1F1610]" : "text-[#1F1610]"
                }`}
              />
            </button>
          </div>

          {/* Vastu & RERA Floating Strip */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
            <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-sans font-semibold text-[#1F6E43] border border-white/60 flex items-center gap-1.5 shadow-xs">
              <Compass className="w-3 h-3 text-[#1F6E43]" />
              <span>{property.vastu.score}% Vastu • {property.vastu.facing}</span>
            </div>

            <span className="text-[10px] font-data-mono font-medium text-[#1F1610] bg-white/90 px-2 py-0.5 rounded-lg border border-white/60 backdrop-blur-md shadow-xs">
              {property.reraNumber.split(":")[0]}
            </span>
          </div>
        </div>

        {/* Location & Title */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-[#735D4C] uppercase tracking-wider mb-1.5 font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#1F1610]" />
          <span>
            {property.location.suburb}, {property.location.city}
          </span>
        </div>

        <Link href={`/properties/${property.id}`} className="block">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1F1610] group-hover:text-[#9E7246] transition-colors leading-snug">
            {property.title}
          </h3>
        </Link>

        <p className="mt-2 text-xs sm:text-sm text-[#544234] line-clamp-2 leading-relaxed font-sans-body">
          {property.description}
        </p>

        {/* Architectural Specs Ribbon */}
        <div className="mt-4 pt-4 border-t border-[#EAE5DB] grid grid-cols-3 gap-2">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-[#735D4C]" />
            <div>
              <div className="text-xs font-display font-bold text-[#1F1610]">{property.specs.bedrooms} BHK</div>
              <div className="text-[10px] text-[#735D4C]">Bedrooms</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-[#735D4C]" />
            <div>
              <div className="text-xs font-display font-bold text-[#1F1610]">
                {property.specs.carpetAreaSqFt.toLocaleString()} SF
              </div>
              <div className="text-[10px] text-[#735D4C]">RERA Carpet</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-[#735D4C]" />
            <div>
              <div className="text-xs font-display font-bold text-[#1F1610]">
                {property.specs.carParks} Bays
              </div>
              <div className="text-[10px] text-[#735D4C]">EV Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Price & Interactive Actions */}
      <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
        <div>
          <div className="text-[10px] font-sans tracking-wider uppercase text-[#735D4C] font-semibold">
            Guide Valuation
          </div>
          <div className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-[#1F1610]">
            {formatPrice()}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onBookTour && (
            <button
              onClick={() => onBookTour(property.title)}
              className="px-3.5 py-2 rounded-xl text-xs font-sans font-semibold uppercase tracking-wider btn-espresso-outline cursor-pointer"
            >
              Site Visit
            </button>
          )}

          <Link
            href={`/properties/${property.id}`}
            className="p-2.5 rounded-xl btn-espresso-primary cursor-pointer flex items-center justify-center transition-transform group-hover:scale-105"
            title="Inspect Blueprint & Vastu Score"
            aria-label={`View details for ${property.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
