"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Property } from "@/types/realEstate";
import {
  X,
  Compass,
  Bed,
  Bath,
  Maximize,
  ShieldCheck,
  Download,
  Calendar,
  Layers,
  Sparkles,
  Check,
  ChevronRight,
  FileText
} from "lucide-react";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookTour: (propertyTitle: string) => void;
  currency: string;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onBookTour,
  currency,
}: PropertyDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "materials" | "blueprints">("overview");
  const [downloadingDossier, setDownloadingDossier] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const handleDownloadDossier = () => {
    setDownloadingDossier(true);
    setTimeout(() => {
      setDownloadingDossier(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 4000);
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Frosted Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl rounded-3xl glass-panel border border-white/15 bg-slate-950/90 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
                <Layers className="w-4 h-4" />
              </span>
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-amber-300">
                  Architectural Dossier // confidential
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white">{property.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Main Featured Photo Gallery */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src={property.images[activeImageIdx] || property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Price & Location Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                    {property.location.city}, {property.location.country}
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-white">
                    {property.formattedPrice}
                  </div>
                </div>

                <div className="glass-panel px-3.5 py-1.5 rounded-full text-xs font-mono text-amber-300 border border-amber-400/30">
                  {property.status}
                </div>
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                      activeImageIdx === idx
                        ? "ring-2 ring-amber-400 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "overview"
                    ? "bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Overview
              </button>
              <button
                onClick={() => setActiveTab("materials")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "materials"
                    ? "bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Materials & Engineering
              </button>
              <button
                onClick={() => setActiveTab("blueprints")}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "blueprints"
                    ? "bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Floorplans & Massing
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Architectural Statement
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {property.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Principal Architect</div>
                    <div className="text-sm font-medium text-white mt-1">{property.architect}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Interior Floorplate</div>
                    <div className="text-sm font-medium text-white mt-1">{property.specs.sqft.toLocaleString()} Sq.Ft</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Private Acreage</div>
                    <div className="text-sm font-medium text-white mt-1">{property.specs.acreage} Acres</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Automotive Vault</div>
                    <div className="text-sm font-medium text-white mt-1">{property.specs.garages} Climate Bays</div>
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Curated Signature Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {property.keyFeatures.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span className="text-xs text-slate-300 font-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every surface is hand-selected and fabricated in collaboration with master artisans and structural laboratories.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.materials.map((mat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl glass-card border border-white/10 flex items-start gap-3"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono font-semibold text-white">{mat}</div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          Acoustically dampening, UV-shielded, and certified carbon-neutral lifecycle.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "blueprints" && (
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3 text-cyan-300">
                    <Compass className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="text-base font-light text-white">
                    Encrypted Spatial 3D Blueprint Deck
                  </h4>
                  <p className="max-w-md text-xs text-slate-400 mt-1">
                    CAD vector layouts, MEP schematic overviews, and structural cantilever load diagrams are released exclusively to vetted prospective buyers under verified NDA.
                  </p>
                  <button
                    onClick={handleDownloadDossier}
                    disabled={downloadingDossier || downloadComplete}
                    className="mt-4 px-5 py-2.5 rounded-xl gold-glow-button text-xs font-semibold flex items-center gap-2"
                  >
                    {downloadingDossier ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Compiling 8K Blueprint Dossier...</span>
                      </>
                    ) : downloadComplete ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Dossier Dispatched to Secure Vault</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download 8K Architectural Dossier (PDF)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-950/95">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CONFIDENTIALITY LEVEL: SOVEREIGN PRIVATE RESERVE</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-mono uppercase text-slate-400 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookTour(property.title);
                }}
                className="gold-glow-button px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule VIP Inspection</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

