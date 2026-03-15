import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import calmWoman from "@/assets/images/calm-woman.png";
import logo from "@/assets/images/BlissGene Logo.png";
import { Linkedin } from "lucide-react";

export default function Origin() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">The Clinical Case</h1>
            <p className="text-xl text-primary font-medium mb-6">
              A remarkable genetic anomaly that changes our understanding of pain.
            </p>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Our foundation rests upon a profound medical discovery: the clinical observation of an individual with an extraordinarily rare genetic mutation. This mutation conferred a natural, lifelong immunity to physical pain and an astonishing resilience against anxiety and depression.
              </p>
              <p className="mb-6">
                Despite enduring injuries that would typically cause excruciating suffering, the patient reported zero discomfort. More importantly, this lack of nociception did not impair her cognitive function or tactile sensation; it exclusively gated the subjective experience of suffering.
              </p>
              <p>
                By sequencing her genome and identifying the precise molecular alterations responsible for this phenotype, our scientists at BlissGene Therapeutics are reverse-engineering this natural phenomenon. We are translating this biological miracle into targeted gene therapies designed to safely silence chronic pain pathways in the broader population.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img 
              src={calmWoman} 
              alt="Serene environment representing a life without suffering" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
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
