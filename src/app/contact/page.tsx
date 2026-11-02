"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VIPBookingModal from "@/components/VIPBookingModal";
import {
  MessageCircle,
  CheckCircle2,
  Send,
  Building2,
  Phone,
  Mail
} from "lucide-react";

export default function ContactPage() {
  const [currency, setCurrency] = useState("INR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Mumbai",
    budgetRange: "₹25 Cr - ₹50 Cr",
    message: "",
  });

  const offices = [
    {
      city: "Mumbai (Headquarters)",
      address: "Maker Chambers VI, 11th Floor, Nariman Point, Mumbai 400021",
      phone: "+91 98200 44812",
      email: "mumbai@amayaestates.in",
      lead: "Rajeshwar Singhania",
    },
    {
      city: "Delhi NCR",
      address: "One Horizon Center, Level 14, Golf Course Road, DLF Phase 5, Gurugram 122002",
      phone: "+91 98110 99420",
      email: "delhi@amayaestates.in",
      lead: "Ananya Sen Sharma",
    },
    {
      city: "Bengaluru",
      address: "Concorde Block, UB City, Vittal Mallya Road, Bengaluru 560001",
      phone: "+91 99000 81234",
      email: "bengaluru@amayaestates.in",
      lead: "Vikramaditya Rao",
    },
    {
      city: "Goa & Coastal",
      address: "Casa Amaya, Rua de Ourém, Fontainhas, Panaji, Goa 403001",
      phone: "+91 98200 44812",
      email: "goa@amayaestates.in",
      lead: "Coastal Enclaves Team",
    },
    {
      city: "Dubai (Global NRI Desk)",
      address: "DIFC Gate Precinct 4, Level 5, Dubai International Financial Centre, UAE",
      phone: "+971 4 398 4200",
      email: "nri@amayaestates.in",
      lead: "Rohit Parekh",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

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
              Private Office &amp; Advisory
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#1F1610] max-w-4xl">
            Initiate a Confidential{" "}
            <span className="text-[#9E7246]">Client Relationship</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#544234] font-normal leading-relaxed font-sans-body">
            Direct access to our senior leadership across Mumbai, Delhi NCR, Bengaluru, Goa, and Dubai.
            All client communications are strictly confidential and governed by non-disclosure protocols.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 flex-grow bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (7 cols): Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#EAE5DB] shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F1610] mb-2">Schedule Private Consultation</h2>
            <p className="text-sm text-[#544234] font-normal mb-8 font-sans-body">
              Fill in your details below or connect directly with our Senior Managing Partner on WhatsApp.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#2E7D5B] mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-[#1F1610]">Inquiry Received with Discretion</h3>
                <p className="text-sm text-[#544234] mt-2 max-w-md mx-auto font-sans-body">
                  Our Senior Managing Partner will contact you shortly on your confidential channel.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Your Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Bajaj"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Direct Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@promoter-family.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                      Primary Target City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#1F1610] focus:outline-none cursor-pointer font-sans"
                    >
                      <option value="Mumbai">Mumbai (Worli, Bandra, Altamount)</option>
                      <option value="Delhi NCR">Delhi NCR (Golf Course Road, LBZ)</option>
                      <option value="Goa">Goa (Assagao, Anjuna, Moira)</option>
                      <option value="Bengaluru">Bengaluru (Sadashivanagar, Lavelle)</option>
                      <option value="Alibaug">Alibaug (Coastal Beachfront)</option>
                      <option value="Hyderabad">Hyderabad (Jubilee Hills)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                    Acquisition Budget Bracket
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#1F1610] focus:outline-none cursor-pointer font-sans"
                  >
                    <option value="₹25 Cr - ₹50 Cr">₹25 Crore - ₹50 Crore ($3M - $6M)</option>
                    <option value="₹50 Cr - ₹100 Cr">₹50 Crore - ₹100 Crore ($6M - $12M)</option>
                    <option value="₹100 Cr+">₹100 Crore+ ($12M+ Landmark Trophies)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#735D4C] mb-1.5">
                    Specific Architectural or Vastu Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Interested in sea-facing triplex with private pool, minimum 10,000 sq.ft carpet, strictly North-East Ishanya entrance."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DDD6C8] rounded-2xl p-4 text-xs sm:text-sm text-[#1F1610] placeholder-[#8E7E70] focus:outline-none focus:border-[#1F1610] font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-espresso-primary py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {loading ? (
                    <span>Transmitting Confidential Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Confidential Client Brief</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Office Details & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="p-6 sm:p-7 rounded-3xl border border-emerald-300 bg-emerald-50 shadow-xs">
              <div className="flex items-center gap-2 text-[#2E7D5B] text-xs font-sans font-bold mb-2">
                <MessageCircle className="w-4 h-4" />
                <span>Instant Concierge via WhatsApp</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#1F1610] mb-2">
                Direct Line to Senior Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#544234] leading-relaxed mb-4 font-sans-body">
                For prompt off-market inquiries or arranging weekend site inspections, message our Managing Partner directly.
              </p>
              <a
                href="https://wa.me/919820044812?text=Hello%20Amaya%20Estates%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20discussion."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2E7D5B] hover:bg-[#256649] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp +91 98200 44812</span>
              </a>
            </div>

            {/* Offices List */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#EAE5DB] shadow-xs space-y-5">
              <h3 className="text-base font-display font-bold text-[#1F1610] pb-3 border-b border-[#EAE5DB]">
                Private Office Directory
              </h3>

              {offices.map((office, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="font-display font-bold text-[#1F1610] text-sm">{office.city}</div>
                  <div className="text-[#544234] leading-relaxed font-sans-body">{office.address}</div>
                  <div className="flex items-center gap-4 text-xs font-sans pt-1">
                    <a href={`tel:${office.phone}`} className="text-[#1F1610] font-bold hover:underline">
                      {office.phone}
                    </a>
                    <span className="text-[#DDD6C8]">•</span>
                    <span className="text-[#735D4C]">{office.lead}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProperty="General Private Consultation"
      />
    </main>
  );
}
