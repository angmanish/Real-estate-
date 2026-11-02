"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VIPBookingModal from "@/components/VIPBookingModal";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const [currency, setCurrency] = useState("INR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "100% Freehold Title Diligence",
      desc: "Every land parcel and residential asset is subjected to rigorous 30-year revenue search reports vetted by India's top law firms (Cyril Amarchand Mangaldas and AZB & Partners) to guarantee zero encumbrances.",
    },
    {
      num: "02",
      title: "Absolute RERA Rigor & OC Verification",
      desc: "We exclusively list residential monuments with verified State RERA registrations, sanctioned building plans, and valid Occupancy Certificates (OC). No litigation risks, no regulatory surprises.",
    },
    {
      num: "03",
      title: "Sacred Vastu Shastra Harmonization",
      desc: "Our resident Vastu masters examine entry orientations (Ishanya North-East), Brahmasthan open light wells, and master suite quadrant placements to ensure peace, health, and generational prosperity.",
    },
    {
      num: "04",
      title: "Strict Discretion & NDA Protocol",
      desc: "Over 70% of our ultra-luxury transactions occur completely off-market. Client identities, financial terms, and family holdings are protected with sovereign confidentiality standards.",
    },
    {
      num: "05",
      title: "Haute Architectural Pedigree",
      desc: "We do not deal in commodities. Every home we curate is an architectural singularity, created by visionary architects like Sanjay Puri, Studio Lotus, and Foster + Partners with master-crafted natural materials.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1610] flex flex-col relative font-sans">
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-12 border-b border-[#EAE5DB] relative overflow-hidden architectural-grid-light bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
              The Amaya Story // Est. 2001
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610] max-w-4xl">
            A Quarter Century of{" "}
            <span className="text-[#9E7246]">Stewardship in Luxury Indian Real Estate</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#544234] font-normal leading-relaxed font-sans-body">
            Founded in Mumbai to serve India&apos;s foremost industrial families, technology promoters, and global NRIs.
            We operate as private family advisors rather than transactional brokers.
          </p>
        </div>
      </section>

      {/* Story & Philosophy 2-Column */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246]">
              Ethos &amp; Heritage
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610] leading-snug">
              The Convergence of Architectural Art and Sacred Geometry
            </h2>
            <p className="text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
              In Sanskrit, <em className="text-[#1F1610] font-bold">Amaya</em> conveys that which is unconstrained, pure, and without deceit.
              In an Indian real estate landscape often clouded by opacity and litigation, Amaya was founded to establish
              a sanctuary of complete legal transparency, architectural purity, and uncompromised discretion.
            </p>
            <p className="text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
              Over the last two decades, our partners have orchestrated over ₹14,000 Crore in private acquisitions
              across Mumbai&apos;s Altamount Road, Worli Sea Face, the Lutyens&apos; Bungalow Zone in Delhi, and the tranquil
              heritage enclaves of North Goa.
            </p>

            <div className="pt-4 border-t border-[#EAE5DB] flex items-center gap-8 text-xs font-sans">
              <div>
                <div className="text-3xl font-display font-extrabold text-[#1F1610]">₹14,000+ Cr</div>
                <div className="text-[#735D4C] text-xs font-medium">Transactions Vetted</div>
              </div>
              <div>
                <div className="text-3xl font-display font-extrabold text-[#1F1610]">100%</div>
                <div className="text-[#735D4C] text-xs font-medium">Clear Title Record</div>
              </div>
              <div>
                <div className="text-3xl font-display font-extrabold text-[#1F1610]">24 Years</div>
                <div className="text-[#735D4C] text-xs font-medium">Trusted Heritage</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-[#F5F2EA] border border-[#EAE5DB] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Amaya Architectural Estate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAE5DB] shadow-md pointer-events-auto">
                <div className="text-sm font-display font-bold text-[#1F1610]">
                  The Worli Sea-Face Penthouse, Mumbai
                </div>
                <div className="text-xs text-[#544234] mt-0.5 font-medium">
                  Architectural Masterpiece by Sanjay Puri • MahaRERA Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars of Trust */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F5F2EA] border-t border-b border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E7246] mb-2">
              Our Non-Negotiable Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610]">
              The 5 Pillars of Amaya Trust
            </h2>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EAE5DB] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-[#1F1610] transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-display font-extrabold text-[#1F1610] mt-0.5">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#1F1610]">{pillar.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#544234] leading-relaxed max-w-3xl font-sans-body">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block text-[#1F1610] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 text-center bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610]">
            Ready to Begin Your Private Acquisition?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
            Our Senior Managing Partners are available for confidential consultations at our private offices in
            Nariman Point (Mumbai), One Horizon Center (Gurugram), UB City (Bengaluru), or via private video link.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-espresso-primary px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule Private Advisory Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty="Private Advisory Consultation (General)"
      />
    </main>
  );
}
