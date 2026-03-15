import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import logo from "@/assets/images/BlissGene Logo.png";
import { Linkedin } from "lucide-react";

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Our Mission</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            At BlissGene Therapeutics, we believe that suffering should not be a mandatory aspect of the human condition. 
            Our mission is to pioneer a new class of genetic medicines that directly address the molecular roots of chronic pain, 
            anxiety, and depression without the systemic risks of traditional pharmaceuticals.
          </p>
          <div className="glass-panel p-8 rounded-3xl mt-12">
            <h2 className="text-2xl font-bold mb-4">A Future Without Opioids</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For decades, the standard of care for severe pain has relied on opioids—compounds that, while effective, carry devastating 
              risks of dependency and overdose. By rewriting how the nervous system itself processes nociception and emotional distress, 
              we are working toward a paradigm shift where pain management is permanent, precise, and completely addiction-free.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a6660] text-white py-16 px-6 md:px-12 rounded-t-[3rem] mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <img src={logo} alt="BlissGene Therapeutics logo" className="h-24 w-auto" />
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/blissgene-therapeutics" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} BlissGene Therapeutics, Inc. All rights reserved. <br/>
              Advancing the future of mental and physical wellness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
