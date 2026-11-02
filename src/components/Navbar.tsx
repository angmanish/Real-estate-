"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({
  onOpenBooking,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Homes", href: "/properties" },
    { label: "Services", href: "/nri-services" },
    { label: "Agents", href: "/#private-advisory" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-6 sm:px-10 py-3.5 flex items-center justify-between ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8E0D5] shadow-[0_10px_30px_-5px_rgba(35,24,18,0.06)]"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm border border-transparent"
        }`}
      >
        {/* Minimalist Brand Logo (Dwello / Amaya) */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#231812] flex items-center justify-center text-[#FAF7F2] font-display font-black text-sm tracking-tighter transition-transform group-hover:scale-105 shadow-xs">
            <span className="translate-y-[-0.5px]">D</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-extrabold tracking-tight text-[#231812]">
              Dwello
            </span>
            <span className="text-[10px] font-sans tracking-widest text-[#8F8176] uppercase hidden sm:inline">
              | Amaya
            </span>
          </div>
        </Link>

        {/* Center Minimalist Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm tracking-normal transition-colors font-sans ${
                  isActive
                    ? "text-[#231812] font-bold"
                    : "text-[#5D5046] hover:text-[#231812] font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Deck: Search, WhatsApp Desk & Schedule Viewing */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Search Link */}
          <Link
            href="/properties"
            className="p-2.5 rounded-xl text-[#231812] hover:bg-[#EFE7DE] transition-colors"
            title="Search residences"
            aria-label="Search"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </Link>

          {/* WhatsApp Direct Line */}
          <a
            href="https://wa.me/919820044812?text=Hello%20Amaya%20Estates%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20residences."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-[#231812] hover:bg-[#EFE7DE] transition-colors flex items-center gap-1.5"
            title="Chat directly on WhatsApp Desk"
          >
            <MessageCircle className="w-4 h-4 text-[#231812]" />
            <span className="hidden lg:inline text-xs font-sans font-medium">WhatsApp Desk</span>
          </a>

          {/* Luxury Schedule Viewing Action */}
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-[#231812] hover:bg-[#38261C] text-[#FAF7F2] font-sans font-semibold text-xs tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Schedule Viewing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/properties"
            className="p-2 rounded-xl text-[#231812] bg-white border border-[#E5DACD]"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#E5DACD] text-[#231812]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white/98 backdrop-blur-2xl p-6 rounded-2xl border border-[#E8E0D5] shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#231812] hover:text-[#9E7246] py-2 border-b border-[#F5EDE3]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/919820044812"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border border-[#E5DACD] bg-[#FAF7F2] text-[#231812] text-xs font-sans tracking-wide uppercase flex items-center justify-center gap-2 font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#231812]" />
                <span>WhatsApp Senior Partner</span>
              </a>

              {onOpenBooking && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-[#231812] text-[#FAF7F2] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Schedule Private Inspection</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
