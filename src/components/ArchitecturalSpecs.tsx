"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Compass,
  Sparkles,
  Layers,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function ArchitecturalSpecs() {
  const [activeMetricIdx, setActiveMetricIdx] = useState(0);

  const indianEngineeringSpecs = [
    {
      icon: "ShieldCheck",
      title: "Monsoon-Grade Acoustic Triple Glazing",
      description:
        "Engineered with Swiss Sky-Frame motorized tracks and acoustic PVB interlayers that resist 140 km/h coastal gusts and heavy Mumbai monsoon downpours with zero water seepage.",
      metric: "54 dB STC",
      metricLabel: "Acoustic Decoupling",
    },
    {
      icon: "Zap",
      title: "100% Full Load DG Power Automation",
      description:
        "Dedicated synchronous diesel generators with 0ms automatic static transfer switches ensure 24/7 uninterrupted operation of central VRV air-conditioning, elevators, and security.",
      metric: "0 ms",
      metricLabel: "Power Transfer Latency",
    },
    {
      icon: "Compass",
      title: "IGBC Platinum Certified Bioclimatics",
      description:
        "Passive solar shading louvers combined with solar rooftop arrays and integrated rainwater harvesting aquifers reduce net carbon emissions by 42%.",
      metric: "Platinum",
      metricLabel: "Green Building Rating",
    },
    {
      icon: "Sparkles",
      title: "Makrana & Italian Natural Stone Engineering",
      description:
        "Hand-selected 20mm thick book-matched Italian Statuario and pure Makrana white marble slabs fitted with seismic expansion joints and dry-clad ventilation channels.",
      metric: "20 mm",
      metricLabel: "Solid Slabs Specification",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#1F1610]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#9E7246]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#1F6E43]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#1F1610]" />;
      default:
        return <Layers className="w-5 h-5 text-[#1F1610]" />;
    }
  };

  const accolades = [
    {
      outlet: "ARCHITECTURAL DIGEST INDIA",
      quote: "The gold standard of discretion and spatial brilliance in Indian luxury real estate.",
    },
    {
      outlet: "ROBB REPORT INDIA",
      quote: "Unparalleled access to confidential off-market enclaves in Worli and Golf Course Road.",
    },
    {
      outlet: "THE ECONOMIC TIMES",
      quote: "The preferred private client advisory for Silicon Valley and Gulf NRI family offices.",
    },
    {
      outlet: "FORBES INDIA",
      quote: "Redefining high-net-worth property acquisitions with uncompromising RERA and title rigor.",
    },
  ];

  return (
    <section id="engineering-specs" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE5DB] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
            <span className="text-xs font-sans uppercase tracking-wider text-[#735D4C] font-bold">
              Material Integrity &amp; Tropical Engineering
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610]">
            Engineered for India&apos;s{" "}
            <span className="text-[#9E7246]">Maritime &amp; Continental Climates</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
            Every residence incorporates structural innovations tested against seismic thresholds, coastal humidity,
            and high summer temperatures—delivering generational resilience and acoustic calm.
          </p>
        </div>

        {/* 4 Interactive Floating Engineering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {indianEngineeringSpecs.map((spec, i) => (
            <div
              key={i}
              onClick={() => setActiveMetricIdx(i)}
              className={`rounded-3xl luxury-card p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden bg-white ${
                activeMetricIdx === i
                  ? "border-[#1F1610] shadow-[0_16px_40px_rgba(31,22,16,0.1)]"
                  : "border-[#EAE5DB] hover:border-[#1F1610]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB]">
                    {getIcon(spec.icon)}
                  </div>
                  <span className="text-xs font-sans text-[#735D4C] uppercase tracking-wider font-bold">
                    0{i + 1} // SPEC
                  </span>
                </div>

                <div className="text-3xl font-display font-extrabold text-[#1F1610] tracking-tight mt-2">
                  {spec.metric}
                </div>
                <div className="text-xs font-sans uppercase text-[#9E7246] tracking-wider font-bold">
                  {spec.metricLabel}
                </div>

                <h3 className="text-lg font-display font-bold text-[#1F1610] mt-4">{spec.title}</h3>

                <p className="mt-2 text-xs sm:text-sm text-[#544234] leading-relaxed font-sans-body">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
                <span className="text-xs font-sans text-[#1F6E43] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  RERA AUDITED
                </span>
                <span className="text-xs font-sans text-[#1F1610] font-bold">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Press Accolades Banner */}
        <div className="rounded-3xl p-8 bg-white border border-[#EAE5DB] shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-sans uppercase tracking-widest text-[#735D4C] font-bold">
              Recognized Across India&apos;s Premier Business &amp; Architectural Media
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accolades.map((acc, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col justify-between"
              >
                <div className="text-xs font-sans font-extrabold tracking-wider text-[#1F1610] uppercase mb-2">
                  {acc.outlet}
                </div>
                <p className="text-xs sm:text-sm text-[#544234] italic leading-relaxed font-editorial">
                  &ldquo;{acc.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
