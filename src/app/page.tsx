"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import BentoGrid from "@/components/BentoGrid";
import ArchitecturalSpecs from "@/components/ArchitecturalSpecs";
import AgentProfiles from "@/components/AgentProfiles";
import VIPBookingModal from "@/components/VIPBookingModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [currency, setCurrency] = useState("INR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [targetPropertyTitle, setTargetPropertyTitle] = useState("The Worli Sea-Face Sky Palace");

  const handleOpenBooking = (propertyTitle?: string) => {
    if (propertyTitle) {
      setTargetPropertyTitle(propertyTitle);
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#231812] flex flex-col relative overflow-hidden font-sans">
      {/* Floating Minimalist Top Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Hero Section with High-Quality 3D Villa Rendering & Floating Filter Widget */}
      <Hero3D
        currency={currency}
        onOpenBooking={handleOpenBooking}
      />

      {/* Bento Grid Portfolio of Prime Indian Luxury Enclaves */}
      <BentoGrid
        currency={currency}
        onBookTour={handleOpenBooking}
      />

      {/* Architectural Specifications, Engineering & Material Craft */}
      <ArchitecturalSpecs />

      {/* Senior Managing Partners & Licensed RERA Advisors */}
      <AgentProfiles
        onBookConsultation={(agentName) =>
          handleOpenBooking(`Private Advisory Consultation with ${agentName}`)
        }
      />

      {/* Warm Elegant Editorial Footer */}
      <Footer />

      {/* VIP Inspection & Confidential Scheduler Modal */}
      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty={targetPropertyTitle}
      />
    </main>
  );
}
