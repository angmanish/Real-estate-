"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { MARKET_INSIGHTS } from "@/data/properties";

export default function MarketInsights() {
  return (
    <div className="rounded-3xl luxury-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group w-full bg-white border border-[#EAE5DB]">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#F5F2EA] text-[#1F1610] border border-[#E5DFD3]">
              <TrendingUp className="w-4 h-4" />
            </span>
            <span className="text-xs font-sans uppercase tracking-wider text-[#735D4C] font-bold">
              Prime Index // Q1 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF7F0] border border-[#C6ECD4] text-xs font-sans font-semibold text-[#1F6E43]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6E43] animate-pulse" />
            <span>WORLI +16.8% YoY</span>
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-display font-extrabold text-[#1F1610] tracking-tight">
          Sovereign Wealth &amp; NRI Allocations
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#544234] leading-relaxed font-sans-body">
          Proprietary transaction intelligence monitoring off-market acquisitions above ₹25 Crore across
          Mumbai, Delhi NCR, Bengaluru, and Goa.
        </p>

        {/* Clean SVG Trend Chart */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DB] relative">
          <div className="flex items-center justify-between text-xs font-sans font-semibold text-[#735D4C] mb-3">
            <span>5-YR APPRECIATION (₹ LAKH / SQ.FT)</span>
            <span className="text-[#1F1610] font-bold">WORLI: ₹1.25L+ / SF</span>
          </div>

          <div className="relative w-full h-24 flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 300 90"
              preserveAspectRatio="none"
              aria-label="Trophy asset price appreciation chart"
            >
              <defs>
                <linearGradient id="chartCreamGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9E7246" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#9E7246" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Chart Grid Lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(31,22,16,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(31,22,16,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(31,22,16,0.06)" strokeDasharray="3 3" />

              {/* Shaded Area */}
              <path
                d="M 0 75 Q 50 65 100 55 T 200 35 T 300 12 L 300 90 L 0 90 Z"
                fill="url(#chartCreamGradient)"
              />

              {/* Trend Curve */}
              <path
                d="M 0 75 Q 50 65 100 55 T 200 35 T 300 12"
                fill="none"
                stroke="#1F1610"
                strokeWidth="2.5"
              />

              {/* End Point Indicator */}
              <circle cx="300" cy="12" r="4" fill="#1F1610" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] font-sans font-medium text-[#735D4C] mt-2 pt-2 border-t border-[#EAE5DB]">
            <span>2021 (₹68K)</span>
            <span>2023 (₹84K)</span>
            <span>2024 (₹98K)</span>
            <span className="text-[#1F1610] font-bold">2026 (₹125K)</span>
          </div>
        </div>

        {/* 3 Real Market Stats from MARKET_INSIGHTS array */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {MARKET_INSIGHTS.slice(0, 3).map((insight, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl bg-[#F5F2EA]/80 border border-[#EAE5DB] text-center"
            >
              <div className="text-lg font-display font-extrabold text-[#1F1610] tracking-tight">
                {insight.value}
              </div>
              <div
                className="text-[10px] font-sans font-semibold text-[#735D4C] mt-0.5 uppercase tracking-wide truncate"
                title={insight.metric}
              >
                {insight.metric.split(" ")[0]} {insight.growth}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dispatch Link */}
      <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex items-center justify-between">
        <span className="text-xs font-sans text-[#735D4C] font-medium">
          Confidential Dossier (Q1 2026)
        </span>
        <Link
          href="/nri-services"
          className="text-xs font-sans font-bold text-[#1F1610] hover:text-[#9E7246] transition-colors flex items-center gap-1 uppercase tracking-wide"
        >
          <span>NRI Whitepaper</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
