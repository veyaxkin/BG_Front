import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/BlissGene Logo.png";
import { Linkedin, Brain, Shield, HeartPulse } from "lucide-react";
import { Link } from "wouter";

export default function Pipeline() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-0 py-4 px-6 md:px-12 flex justify-between items-center text-[#ffffff] bg-[#1a6660] shadow-md">
        <Link href="/">
          <img src={logo} alt="BlissGene Therapeutics logo" className="h-20 w-auto cursor-pointer" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/mission" className="transition-colors text-white hover:text-[#a0e4dc]">Mission</Link>
          <Link href="/origin" className="transition-colors text-white hover:text-[#a0e4dc]">The Origin</Link>
          <Link href="/pipeline" className="transition-colors text-white hover:text-[#a0e4dc]">Pipeline</Link>
          <Link href="/team" className="transition-colors text-white hover:text-[#a0e4dc]">Team</Link>
          <Button variant="default" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all" asChild>
            <a href="mailto:info@blissgene.org">
              Partner With Us
            </a>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Science & Pipeline</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Translating fundamental genetic insights into precision medicines for the central nervous system.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              title: "Chronic Pain (BG-101)",
              status: "Pre-clinical",
              desc: "Our lead candidate targets specific nociceptive pathways in the dorsal root ganglion to permanently alter pain signaling safely and selectively, without affecting motor function or tactile sensation.",
              icon: HeartPulse,
              progress: 35
            },
            {
              title: "Anxiety Disorders (BG-201)",
              status: "Discovery Phase",
              desc: "Utilizing brain-selectiveq lipid nanoparticles to deliver therapeutic genes that modulate synaptic transmission, promoting emotional equilibrium and reducing hyperarousal states in chronic anxiety models.",
              icon: Brain,
              progress: 15
            },
            {
              title: "Major Depression (BG-301)",
              status: "Discovery Phase",
              desc: "A targeted approach to enhance neuroplasticity and emotional resilience through localized modulation of gene expression in the prefrontal cortex and hippocampus.",
              icon: Shield,
              progress: 10
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] border border-border/50"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary shrink-0 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-sm font-semibold px-4 py-2 bg-primary/10 text-primary rounded-full w-fit">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full">
                    <div className="flex justify-between text-xs text-muted-foreground font-medium mb-2">
                      <span>Discovery</span>
                      <span>Pre-clinical</span>
                      <span>Phase I</span>
                      <span>Phase II</span>
                      <span>Phase III</span>
                    </div>
                    <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
