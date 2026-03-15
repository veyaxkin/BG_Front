import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/BlissGene Logo.png";
import { Linkedin } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/mission", label: "Mission" },
    { href: "/origin", label: "The Origin" },
    { href: "/pipeline", label: "Pipeline" },
    { href: "/team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[#1a6660] shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src={logo} alt="BlissGene Therapeutics logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-white hover:text-[#a0e4dc] ${
                location === link.href ? "text-[#a0e4dc] font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <a href="mailto:info@blissgene.org">Partner With Us</a>
          </Button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-white text-3xl p-2 leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 text-sm font-medium border-t border-white/20 mt-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-white hover:text-[#a0e4dc] ${
                location === link.href ? "text-[#a0e4dc] font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md w-full mt-1"
            asChild
          >
            <a href="mailto:info@blissgene.org" onClick={() => setMenuOpen(false)}>
              Partner With Us
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
