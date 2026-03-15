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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Pioneering Opioid-Free Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
              Engineering <span className="text-primary italic">resilience</span> into the human genome
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We are developing transformative gene therapies for anxiety, depression, and chronic pain - eradicating suffering without the risk of addiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
                <Link href="/pipeline">
                  Explore Our Science <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-border hover:bg-secondary/50" asChild>
                <Link href="/origin">
                  Read the Clinical Case
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/40 rounded-[2.5rem] blur-2xl -z-10" />
            <img 
              src={heroScience} 
              alt="Gene therapy science visualization" 
              className="w-full h-auto rounded-[2rem] shadow-2xl object-cover border border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* The Origin Story */}
      <section id="origin" className="py-24 px-6 md:px-12 bg-white dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={calmWoman} 
                  alt="A serene woman representing a life without suffering" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Case That Changed Everything</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a remarkable medical discovery: a woman bearing a unique genetic mutation that rendered her naturally immune to physical pain and profoundly resistant to anxiety and depression.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By understanding the exact molecular pathways of her resilience, BlissGene Therapeutics is reverse-engineering this biological miracle into targeted gene therapies. We offer a path to freedom from chronic suffering to millions, without the devastating side effects of opioids.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Opioid-Free</h3>
                  <p className="text-sm text-muted-foreground">Addressing chronic pain without the systemic risks of addiction or tolerance.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl">
                  <Brain className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Mental Wellness</h3>
                  <p className="text-sm text-muted-foreground">Targeting the neurological root causes of anxiety and depression.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="pipeline" className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Therapeutic Pipeline</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Translating genetic insights into precision medicines.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Chronic Pain",
              status: "Pre-clinical",
              desc: "Targeting nociceptive pathways to permanently alter pain signaling safely and selectively.",
              icon: HeartPulse
            },
            {
              title: "Anxiety Disorders",
              status: "Discovery",
              desc: "Modulating synaptic transmission to promote emotional equilibrium and reduce hyperarousal.",
              icon: Brain
            },
            {
              title: "Major Depression",
              status: "Discovery",
              desc: "Enhancing neuroplasticity and emotional resilience through targeted gene expression.",
              icon: Shield
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {item.status}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a6660] text-white py-16 px-6 md:px-12 rounded-t-[3rem] mt-12">
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
