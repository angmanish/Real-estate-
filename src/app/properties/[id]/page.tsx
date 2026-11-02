"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VIPBookingModal from "@/components/VIPBookingModal";
import { PROPERTIES } from "@/data/properties";
import {
  Compass,
  ShieldCheck,
  MapPin,
  Car,
  Download,
  Calendar,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Check,
  ChevronLeft
} from "lucide-react";

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params?.id as string;

  const property = PROPERTIES.find(
    (p) => p.id === propertyId || p.slug === propertyId
  );

  if (!property) {
    notFound();
  }

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [downloadingDossier, setDownloadingDossier] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const formatPrice = () => {
    if (currency === "USD") {
      return `$${property.priceInUSD.toFixed(1)} Million`;
    }
    return `₹${property.priceInCrores.toFixed(1)} Crore`;
  };

  const handleDownloadDossier = () => {
    setDownloadingDossier(true);
    setTimeout(() => {
      setDownloadingDossier(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 4000);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1610] flex flex-col relative font-sans">
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Breadcrumb & Navigation Bar */}
      <section className="pt-32 pb-6 px-4 sm:px-6 lg:px-12 border-b border-[#EAE5DB] bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/properties"
            className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#735D4C] hover:text-[#1F1610] font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Residences</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-sans text-[#735D4C]">
            <span className="text-[#2E7D5B] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              100% Freehold Title Audited
            </span>
            <span className="text-[#DDD6C8]">•</span>
            <span className="text-[#1F1610] font-bold">{property.reraNumber}</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 flex-grow w-full">
        {/* Title, Suburb & Price Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
                {property.typology} • {property.location.city}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#1F1610]">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-[#544234] font-sans">
              <MapPin className="w-4 h-4 text-[#1F1610]" />
              <span>
                {property.location.suburb}, {property.location.city}, {property.location.state}
              </span>
              <span className="text-[#DDD6C8]">•</span>
              <span className="text-[#735D4C]">{property.location.landmark}</span>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="text-xs font-sans tracking-wider uppercase text-[#735D4C] font-semibold">
              Official Guide Valuation
            </div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610] tracking-tight mt-1">
              {formatPrice()}
            </div>
            <div className="text-xs font-sans font-semibold text-[#2E7D5B] mt-1">
              {property.legalStatus.split("•")[0]}
            </div>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-4 mb-12">
          <div className="relative w-full h-[380px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden bg-[#F5F2EA] border border-[#EAE5DB] shadow-lg">
            <Image
              src={property.images[activeImageIdx] || property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Info Overlay on Main Image */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-[#EAE5DB] shadow-md pointer-events-auto">
                <Compass className="w-4 h-4 text-[#1F1610]" />
                <span className="text-xs font-sans text-[#1F1610] font-bold">
                  Vastu Score: <strong className="text-[#2E7D5B]">{property.vastu.score}/100</strong> ({property.vastu.facing} Facing)
                </span>
              </div>

              <div className="bg-[#1F1610]/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-sans font-semibold text-white pointer-events-auto">
                {property.status}
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-28 h-20 rounded-2xl overflow-hidden flex-shrink-0 transition-all cursor-pointer border ${
                    activeImageIdx === idx
                      ? "ring-2 ring-[#1F1610] border-transparent opacity-100 shadow-sm"
                      : "opacity-60 hover:opacity-100 border-[#DDD6C8]"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Layout: Left Technical Specs & Right Action Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (8 cols): Deep Technical Data */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#EAE5DB] shadow-xs">
                <div className="text-[11px] font-sans text-[#735D4C] uppercase font-semibold">RERA Carpet Area</div>
                <div className="text-xl font-display font-extrabold text-[#1F1610] mt-1">
                  {property.specs.carpetAreaSqFt.toLocaleString()} SF
                </div>
                <div className="text-[11px] text-[#8E7E70] mt-0.5">
                  ({(property.specs.carpetAreaSqFt * 0.092903).toFixed(1)} sq.m)
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EAE5DB] shadow-xs">
                <div className="text-[11px] font-sans text-[#735D4C] uppercase font-semibold">Bedrooms &amp; Baths</div>
                <div className="text-xl font-display font-extrabold text-[#1F1610] mt-1">
                  {property.specs.bedrooms} BHK / {property.specs.bathrooms} Baths
                </div>
                <div className="text-[11px] text-[#8E7E70] mt-0.5">All En-Suite Finished</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EAE5DB] shadow-xs">
                <div className="text-[11px] font-sans text-[#735D4C] uppercase font-semibold">Car Parks &amp; Staff</div>
                <div className="text-xl font-display font-extrabold text-[#1F1610] mt-1">
                  {property.specs.carParks} Bays / {property.specs.staffQuarters} Staff
                </div>
                <div className="text-[11px] text-[#8E7E70] mt-0.5">Dedicated Service Core</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EAE5DB] shadow-xs">
                <div className="text-[11px] font-sans text-[#735D4C] uppercase font-semibold">Clear Ceiling Height</div>
                <div className="text-xl font-display font-extrabold text-[#1F1610] mt-1">
                  {property.specs.ceilingHeightFt} Feet
                </div>
                <div className="text-[11px] text-[#8E7E70] mt-0.5">Floor-to-Slab Clear</div>
              </div>
            </div>

            {/* Architectural Statement */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE5DB] shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1610] mb-3">Architectural Statement</h3>
              <p className="text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
                {property.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#EAE5DB] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-[#735D4C] block font-semibold uppercase text-[10px]">PRINCIPAL ARCHITECT:</span>
                  <span className="text-[#1F1610] font-bold text-sm">{property.architect}</span>
                </div>
                <div>
                  <span className="text-[#735D4C] block font-semibold uppercase text-[10px]">DEVELOPER PEDIGREE:</span>
                  <span className="text-[#1F1610] font-bold text-sm">{property.developerPedigree}</span>
                </div>
              </div>
            </div>

            {/* Vastu Shastra Directional Audit Report */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE5DB] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-2xl bg-emerald-50 text-[#2E7D5B] border border-emerald-200">
                    <Compass className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#1F1610]">Vastu Shastra Directional Audit</h3>
                    <div className="text-xs font-sans font-semibold text-[#2E7D5B]">
                      Score: {property.vastu.score}/100 • Certified {property.vastu.facing} Facing
                    </div>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-xs font-sans font-bold text-[#2E7D5B]">
                  Auspicious Alignment
                </div>
              </div>

              <div className="space-y-2.5 mt-4">
                {property.vastu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB]">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#544234] leading-relaxed font-sans-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Signature Features */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE5DB] shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1610] mb-4">Signature Amenities &amp; Private Infrastructure</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB]">
                    <span className="w-2 h-2 rounded-full bg-[#1F1610] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#1F1610] font-medium font-sans-body">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Finishes Specification */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE5DB] shadow-xs">
              <h3 className="text-xl font-display font-bold text-[#1F1610] mb-4">Curated Finishes &amp; Master Artisans</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.finishesAndMaterials.map((mat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB]">
                    <Sparkles className="w-4 h-4 text-[#9E7246] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#544234] font-sans-body">{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Sticky Action Card & Senior Advisor Contact */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            {/* VIP Inquire & Action Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EAE5DB] shadow-xl">
              <div className="text-xs font-sans uppercase tracking-wider text-[#9E7246] font-bold">
                Exclusive Representation
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F1610] mt-1">
                {formatPrice()}
              </div>
              <div className="text-xs font-sans text-[#735D4C] mt-1">
                {property.reraNumber}
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full btn-espresso-primary py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Site Visit</span>
                </button>

                <a
                  href={`https://wa.me/919820044812?text=Hello%20Amaya%20Estates%2C%20I%20am%20interested%20in%20arranging%20a%20site%20visit%20for%20${encodeURIComponent(
                    property.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl border border-emerald-300 bg-emerald-50 text-[#2E7D5B] hover:bg-emerald-100 text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#2E7D5B]" />
                  <span>WhatsApp Senior Partner</span>
                </a>

                <button
                  onClick={handleDownloadDossier}
                  disabled={downloadingDossier || downloadComplete}
                  className="w-full btn-espresso-outline py-3 rounded-2xl text-xs font-sans uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {downloadingDossier ? (
                    <span>Compiling 8K Blueprint Deck...</span>
                  ) : downloadComplete ? (
                    <>
                      <Check className="w-4 h-4 text-[#2E7D5B]" />
                      <span>Dossier Dispatched to Email</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#1F1610]" />
                      <span>Download RERA Dossier (PDF)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EAE5DB] text-xs font-sans text-[#735D4C] space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D5B]" />
                  <span>Title Search: 30-Year Encumbrance Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#1F1610]" />
                  <span>Chauffeured Mercedes S-Class on request</span>
                </div>
              </div>
            </div>

            {/* Direct Advisor Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#EAE5DB] shadow-md">
              <div className="text-xs font-sans uppercase tracking-wider text-[#9E7246] font-bold mb-3">
                Assigned Senior Partner
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-[#DDD6C8] flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    alt="Senior Partner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-[#1F1610]">Rajeshwar Singhania</div>
                  <div className="text-xs text-[#735D4C] font-sans">Mumbai &amp; National Ultra-Prime Lead</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE5DB] flex items-center justify-between text-xs font-sans">
                <a href="tel:+919820044812" className="text-[#1F1610] font-bold hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#1F1610]" />
                  <span>+91 98200 44812</span>
                </a>
                <span className="text-[#2E7D5B] font-semibold">WhatsApp Direct</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty={property.title}
      />
    </main>
  );
}
