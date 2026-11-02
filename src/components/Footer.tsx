"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  ArrowUp,
  Check,
  ShieldCheck,
  Building2,
  Mail,
  Compass
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-[#EAE5DB] pt-20 pb-12 px-4 sm:px-6 lg:px-12 bg-[#F5F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#EAE5DB]">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#1F1610] flex items-center justify-center shadow-xs">
                <span className="font-editorial text-lg text-[#FAF8F5] font-bold">अ</span>
              </div>
              <div className="font-display text-sm tracking-[0.2em] uppercase text-[#1F1610] font-bold">
                AMAYA <span className="text-[#9E7246]">ESTATES</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#544234] leading-relaxed max-w-sm font-sans-body">
              India&apos;s foremost private advisory for trophy residential assets.
              Preserving modern architectural pedigree, sacred Vastu Shastra purity, and multi-generational family sovereignty.
            </p>

            {/* Private Vault Newsletter Dispatch */}
            <form onSubmit={handleSubscribe} className="mt-6 max-w-md">
              <div className="text-[11px] font-sans font-semibold text-[#735D4C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#1F1610]" />
                <span>Quarterly Private Off-Market Dispatch</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="confidential@familyoffice.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white border border-[#DDD6C8] rounded-xl px-4 py-2.5 text-xs text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] transition-colors font-sans-body shadow-xs"
                />
                <button
                  type="submit"
                  className="btn-espresso-primary px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <span>Subscribe</span>}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#1F1610] font-bold">
              Curated Enclaves
            </div>
            <ul className="space-y-2.5 text-xs text-[#544234] font-sans-body">
              <li>
                <Link href="/properties?city=Mumbai" className="hover:text-[#1F1610] transition-colors">
                  Worli Sea Face Sky Mansions
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Delhi+NCR" className="hover:text-[#1F1610] transition-colors">
                  DLF Camellias Golf Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Goa" className="hover:text-[#1F1610] transition-colors">
                  Assagao Heritage Glass Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Bengaluru" className="hover:text-[#1F1610] transition-colors">
                  Sadashivanagar Aristocrat Manors
                </Link>
              </li>
              <li>
                <Link href="/properties?city=Alibaug" className="hover:text-[#1F1610] transition-colors">
                  Alibaug Beachfront Helipad Villas
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Advisory & NRI */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#1F1610] font-bold">
              Client Advisory
            </div>
            <ul className="space-y-2.5 text-xs text-[#544234] font-sans-body">
              <li>
                <Link href="/nri-services" className="hover:text-[#1F1610] transition-colors">
                  NRI Inward Remittance (FEMA)
                </Link>
              </li>
              <li>
                <Link href="/nri-services" className="hover:text-[#1F1610] transition-colors">
                  Capital Gains Tax (Section 54)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1F1610] transition-colors">
                  Vastu Shastra Directional Audit
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1F1610] transition-colors">
                  30-Year Revenue Search Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1F1610] transition-colors">
                  Schedule Private Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Indian & Overseas Private Offices */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#1F1610] font-bold">
              Private Offices
            </div>
            <div className="space-y-2 text-xs text-[#544234] font-sans-body">
              <div>
                <span className="text-[#1F1610] font-bold">MUMBAI:</span> Maker Chambers VI, Nariman Point
              </div>
              <div>
                <span className="text-[#1F1610] font-bold">DELHI NCR:</span> One Horizon Center, Golf Course Rd
              </div>
              <div>
                <span className="text-[#1F1610] font-bold">BENGALURU:</span> UB City, Vittal Mallya Road
              </div>
              <div>
                <span className="text-[#1F1610] font-bold">GOA:</span> Rua de Ourém, Fontainhas, Panaji
              </div>
              <div>
                <span className="text-[#1F1610] font-bold">DUBAI:</span> DIFC Gate Precinct 4, Level 5, UAE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, RERA Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#735D4C]">
          <div className="text-center sm:text-left">
            &copy; 2026 AMAYA ESTATES PRIVATE LIMITED. ALL RESIDENCES RERA VERIFIED &amp; COMPLIANT.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#2E7D5B] font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              RERA Compliant Portfolio
            </span>
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-xl bg-white text-[#1F1610] hover:bg-[#FAF8F5] border border-[#DDD6C8] transition-colors flex items-center gap-1.5 cursor-pointer font-medium shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
