import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F1610] flex flex-col justify-between font-sans">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-24 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#1F1610] flex items-center justify-center mx-auto mb-6 shadow-md">
            <span className="font-editorial text-2xl text-[#FAF8F5] font-bold">अ</span>
          </div>
          <div className="text-xs font-sans uppercase tracking-wider text-[#9E7246] mb-2 font-bold">
            404 // Residence Undisclosed
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1610] mb-3">
            Sanctuary Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#544234] leading-relaxed mb-8 font-sans-body">
            The requested estate portfolio or private architectural dossier may have been withdrawn,
            reallocated to off-market private treaty, or the link may have expired.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-espresso-primary px-7 py-3.5 rounded-2xl text-xs uppercase font-bold tracking-wider shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
