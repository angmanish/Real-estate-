export interface VastuDetails {
  isCompliant: boolean;
  facing: "North-East" | "East" | "North" | "Brahmasthan Courtyard";
  score: number; // e.g. 98 out of 100
  highlights: string[];
}

export interface PropertyLocation {
  suburb: string;
  city: "Mumbai" | "Delhi NCR" | "Goa" | "Bengaluru" | "Hyderabad" | "Alibaug";
  state: string;
  landmark: string;
}

export interface PropertySpecs {
  bedrooms: number;
  bathrooms: number;
  carpetAreaSqFt: number; // Mandatory RERA carpet area
  builtUpAreaSqFt: number;
  carParks: number;
  staffQuarters: number;
  ceilingHeightFt: number;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  typology:
    | "Sea-Facing Sky Mansion"
    | "Lutyens Bungalow Estate"
    | "Golf Course Super-Penthouse"
    | "Portuguese Heritage Glass Villa"
    | "Lakeview Hilltop Estate"
    | "Coastal Glass Sanctuary";
  location: PropertyLocation;
  priceInCrores: number; // e.g., 95.0 for ₹95 Cr
  priceInUSD: number; // e.g., 11.4 for $11.4M
  specs: PropertySpecs;
  reraNumber: string; // Real Indian RERA registration
  vastu: VastuDetails;
  architect: string;
  developerPedigree: string;
  yearBuiltOrPossession: string;
  description: string;
  keyFeatures: string[];
  finishesAndMaterials: string[];
  images: string[];
  status: "Ready to Move" | "Nearing Possession (2026)" | "Private Reserve";
  badge?: string;
  legalStatus: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  city: string;
  office: string;
  experienceYears: number;
  careerVolume: string; // e.g. "₹3,400+ Cr"
  phone: string;
  email: string;
  avatar: string;
  specialization: string;
  reraAgentNumber: string;
}

export interface MarketInsight {
  metric: string;
  value: string;
  growth: string;
  context: string;
}
