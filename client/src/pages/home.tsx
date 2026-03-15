import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroScience from "@/assets/images/hero-science.png";
import calmWoman from "@/assets/images/calm-woman.png";
import logo from "@/assets/images/BlissGene Logo.png";
import { ArrowRight, Brain, Shield, HeartPulse, Linkedin, Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-0 py-4 px-6 md:px-12 text-[#ffffff] bg-[#1a6660] shadow-md">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src={logo} alt="BlissGene Therapeutics logo" className="h-20 w-auto cursor-pointer" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/mission" className="transition-colors text-white hover:text-[#a0e4dc]">Mission</Link>
            <Link href="/origin" className="transition-colors text-white hover:text-[#a0e4dc]">The Origin</Link>
            <Link href="/pipeline" className="transition-colors text-white hover:text-[#a0e4dc]">Pipeline</Link>
            <Link href="/team" className="transition-colors text-white hover:text-[#a0e4dc]">Team</Link>
            <Button variant="default" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all" asChild>
              <a href="mailto:info@blissgene.org">Partner With Us</a>
            </Button>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 text-sm font-medium border-t border-white/20 mt-3">
            <Link href="/mission" className="text-white hover:text-[#a0e4dc] transition-colors" onClick={() => setMenuOpen(false)}>Mission</Link>
            <Link href="/origin" className="text-white hover:text-[#a0e4dc] transition-colors" onClick={() => setMenuOpen(false)}>The Origin</Link>
            <Link href="/pipeline" className="text-white hover:text-[#a0e4dc] transition-colors" onClick={() => setMenuOpen(false)}>Pipeline</Link>
            <Link href="/team" className="text-white hover:text-[#a0e4dc] transition-colors" onClick={() => setMenuOpen(false)}>Team</Link>
            <Button variant="default" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md w-full mt-1" asChild>
              <a href="mailto:info@blissgene.org" onClick={() => setMenuOpen(false)}>Partner With Us</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "ease
