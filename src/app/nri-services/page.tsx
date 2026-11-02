"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VIPBookingModal from "@/components/VIPBookingModal";
import {
  Globe2,
  ShieldCheck,
  FileText,
  DollarSign,
  Landmark,
  Key,
  Calendar,
  MessageCircle,
  Phone
} from "lucide-react";

export default function NRIServicesPage() {
  const [currency, setCurrency] = useState("INR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pillars = [
    {
      icon: Landmark,
      title: "RBI & FEMA Regulatory Compliance",
      description:
        "Full advisory on purchasing residential properties in India under Reserve Bank of India general permission using NRE (Non-Resident External) and NRO (Non-Resident Ordinary) banking conduits with full statutory clearance.",
      tag: "FEMA Compliant",
    },
    {
      icon: DollarSign,
      title: "Repatriation of Funds (Up to $2M/Year)",
      description:
        "Seamless structuring for repatriating sale proceeds and rental yields back to your overseas account under RBI Section 6(5) regulations and Form 15CA/15CB documentation certified by leading Chartered Accountants.",
      tag: "RBI LRS Protocol",
    },
    {
      icon: FileText,
      title: "Remote Power of Attorney (POA) Registration",
      description:
        "Complete assistance in drafting, Indian Embassy / Consulate attestation, apostilling, and local Sub-Registrar adjudication of Power of Attorney—enabling smooth registration without requiring you to travel to India.",
      tag: "Zero-Travel Purchase",
    },
    {
      icon: ShieldCheck,
      title: "Double Taxation Relief (DTAA & Section 54)",
      description:
        "Navigating Indian capital gains tax implications in conjunction with DTAA provisions across USA (IRS), UK (HMRC), UAE, and Singapore to minimize cross-border tax liabilities through Section 54 reinvestment shields.",
      tag: "Cross-Border Tax",
    },
    {
      icon: Key,
      title: "Turnkey Property Care & Tenancy Concierge",
      description:
        "Post-possession end-to-end stewardship: snagging inspections, bespoke interior fit-outs with Italian furniture logistics, high-profile corporate expat tenancy leasing, and monthly yield remittances.",
      tag: "Asset Stewardship",
    },
    {
      icon: Globe2,
      title: "3D Virtual Walkthroughs & Drone Tele-Presence",
      description:
        "High-definition 8K 360-degree spatial tours, real-time drone aerial footage of surrounding infrastructure, and live video inspections conducted by your Senior Partner at your convenience.",
      tag: "Virtual Walkthroughs",
    },
  ];

  const overseasOffices = [
    {
      city: "DUBAI (UAE)",
      hub: "DIFC Gate Precinct 4, Level 5",
      phone: "+971 4 398 4200",
      contactPerson: "Rohit Parekh, Head of Global NRI Advisory",
    },
    {
      city: "LONDON (UK)",
      hub: "14 Berkeley Square, Mayfair",
      phone: "+44 20 7946 0912",
      contactPerson: "Alastair Vance, European Client Liaison",
    },
    {
      city: "SINGAPORE",
      hub: "Marina Bay Financial Centre, Tower 2",
      phone: "+65 6712 8840",
      contactPerson: "Ananya Sen Sharma, Pacific Rim Partner",
    },
    {
      city: "SILICON VALLEY (USA)",
      hub: "Sand Hill Road, Menlo Park, CA",
      phone: "+1 415 889 0210",
      contactPerson: "US NRI Technology Promoters Desk",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1610] flex flex-col relative font-sans">
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Banner */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-12 border-b border-[#EAE5DB] relative overflow-hidden architectural-grid-light bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
              Cross-Border NRI &amp; Family Office Division
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610] max-w-4xl">
            Sovereign Indian Real Estate Advisory for{" "}
            <span className="text-[#9E7246]">Non-Resident Indians</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#544234] font-normal leading-relaxed font-sans-body">
            Specialized legal, tax, and acquisition stewardship for NRIs and OCIs based in the United States,
            United Kingdom, UAE, and Singapore seeking landmark residences in Mumbai, Delhi NCR, Bengaluru, and Goa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-espresso-primary px-7 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Cross-Border Video Consultation</span>
            </button>

            <a
              href="https://wa.me/919820044812?text=Hello%20Amaya%20Estates%2C%20I%20am%20an%20NRI%20looking%20for%20advisory%20on%20Indian%20luxury%20real%20estate."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-espresso-outline px-6 py-3.5 rounded-2xl text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#2E7D5B]" />
              <span>WhatsApp NRI Lead Partner</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 Core Regulatory Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246] mb-2">
              Comprehensive Regulatory Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610]">
              Navigating FEMA, RBI &amp; Title Verification
            </h2>
            <p className="mt-2 text-sm text-[#544234] font-normal font-sans-body">
              Acquiring ultra-luxury real estate in India from abroad should be as frictionless
              and legally transparent as buying in London or New York.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-6 sm:p-7 border border-[#EAE5DB] shadow-xs flex flex-col justify-between group hover:border-[#1F1610] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-[#F5F2EA] text-[#1F1610] border border-[#DDD6C8]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-sans font-semibold text-[#2E7D5B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#1F1610] mb-2.5">{pillar.title}</h3>

                    <p className="text-xs sm:text-sm text-[#544234] leading-relaxed font-sans-body">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex items-center justify-between text-xs font-sans text-[#735D4C]">
                    <span className="font-semibold">0{i + 1} // PROTOCOL</span>
                    <span className="text-[#1F1610] group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overseas Liaison Network */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#F5F2EA] border-t border-b border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246] mb-2">
                Global Footprint
              </div>
              <h2 className="text-3xl font-display font-extrabold text-[#1F1610]">
                Overseas Private Client Desks
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#544234] font-sans-body">
              Connect in person with our senior partners during their periodic residency in Dubai,
              London, Singapore, and Silicon Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overseasOffices.map((office, idx) => (
              <div key={idx} className="p-5 rounded-3xl bg-white border border-[#EAE5DB] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-base font-display font-bold text-[#1F1610] mb-1">{office.city}</div>
                  <div className="text-xs text-[#544234] mb-3 font-sans-body">{office.hub}</div>
                  <div className="text-xs text-[#735D4C] font-sans font-medium">{office.contactPerson}</div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EAE5DB]">
                  <a href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`} className="text-xs font-sans font-bold text-[#1F1610] hover:underline flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty="NRI Advisory Consultation (Cross-Border)"
      />
    </main>
  );
}
