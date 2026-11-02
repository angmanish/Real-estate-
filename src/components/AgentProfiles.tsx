"use client";

import React from "react";
import Image from "next/image";
import { AGENTS } from "@/data/properties";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  MapPin
} from "lucide-react";

interface AgentProfilesProps {
  onBookConsultation: (agentName: string) => void;
}

export default function AgentProfiles({ onBookConsultation }: AgentProfilesProps) {
  return (
    <section id="private-advisory" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1F1610]" />
              <span className="text-xs font-sans uppercase tracking-wider text-[#735D4C] font-bold">
                Senior Managing Partners // RERA Licensed
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610]">
              Discreet Advisory for{" "}
              <span className="text-[#9E7246]">India&apos;s Foremost Families</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#544234] leading-relaxed font-sans-body">
            Senior partners with decades of confidential stewardship advising corporate promoters,
            unicorn founders, Bollywood icons, and NRI family offices on off-market acquisitions.
          </p>
        </div>

        {/* 4-Column Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="rounded-3xl luxury-card p-5 border border-[#EAE5DB] bg-white flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Agent Avatar */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 bg-[#F5F2EA]">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Territory Pill */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-sans text-[#1F1610] font-semibold border border-white/60 flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#1F1610]" />
                    <span>{agent.city}</span>
                  </div>
                </div>

                {/* Identity & Role */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-display font-bold text-[#1F1610] group-hover:text-[#9E7246] transition-colors">
                    {agent.name}
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-[#1F6E43] flex-shrink-0" />
                </div>

                <div className="text-xs font-sans text-[#9E7246] font-semibold mt-1 leading-snug">
                  {agent.role}
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-[#544234] leading-relaxed line-clamp-3 font-sans-body">
                  {agent.specialization}
                </p>

                {/* Track Record & RERA License */}
                <div className="mt-4 pt-3 border-t border-[#EAE5DB] flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-[#735D4C]">Career Volume:</span>
                    <span className="font-display font-bold text-[#1F1610]">{agent.careerVolume}</span>
                  </div>
                  <div className="text-[10px] font-data-mono text-[#967E6B] truncate">
                    {agent.reraAgentNumber}
                  </div>
                </div>
              </div>

              {/* Bottom Direct CTA Deck */}
              <div className="mt-5 pt-3 border-t border-[#EAE5DB] flex items-center justify-between gap-2">
                <a
                  href={`tel:${agent.phone}`}
                  className="p-2.5 rounded-xl btn-espresso-outline text-[#1F1610] transition-colors"
                  title="Direct Confidential Line"
                  aria-label={`Call ${agent.name}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F1610]" />
                </a>

                <a
                  href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[#C6ECD4] bg-[#EBF7F0] text-[#1F6E43] hover:bg-[#D5EFE0] transition-colors"
                  title="WhatsApp Direct"
                  aria-label={`WhatsApp ${agent.name}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onBookConsultation(agent.name)}
                  className="flex-grow btn-espresso-primary py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Advisory</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
