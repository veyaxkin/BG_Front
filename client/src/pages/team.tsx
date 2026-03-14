import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/BlissGene Logo.png";
import { Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Team() {
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
      <section className="pt-48 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading experts in molecular biology, clinical medicine, and gene therapy innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Brandon Emerick",
              subtitle: "Co-Founder",
              title: "President and Chief Executive Officer",
              linkedinUrl: "https://www.linkedin.com/in/brandon-emerick-94b794176/"
            },
            {
              name: "Valerio Embrione",
              subtitle: "Co-Founder",
              title: "Vice-President and Chief Scientific Officer",
              linkedinUrl: "https://www.linkedin.com/in/valerioembrione"
            },
            {
              name: "Qurrat Ul Ain",
              title: "Chief Operating Officer",
              linkedinUrl: "https://www.linkedin.com/in/drqurratulain/"
            },
            {
              name: "Mayuri Bhattacharya",
              title: "Chief Marketing Officer",
              linkedinUrl: "https://www.linkedin.com/in/mayuri-modernmarketer/"
            },
            {
              name: "Irfan Ullah",
              title: "Neurosciences Consultant",
              linkedinUrl: "https://www.linkedin.com/in/irfan-ullah-679a313b/"
            },
            {
              name: "Zaki Ullah",
              title: "Scientific Consultant",
              linkedinUrl: "https://www.linkedin.com/in/zaki-ullah-a81a47288/"
            },
            {
              name: "Mario Scarpa",
              title: "Gene Therapy Consultant",
              linkedinUrl: "https://www.linkedin.com/in/mario-scarpa-20266688/"
            },
            {
              name: "Oriella Gennari",
              title: "Chemistry Consultant",
              linkedinUrl: "https://www.linkedin.com/in/oriella-gennari-497b861ab/"
            },
            {
              name: "Giacomo Matrone",
              title: "LLM Consultant",
              linkedinUrl: "https://www.linkedin.com/in/giacomomatrone/"
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors" aria-label={`${member.name} LinkedIn`}>
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm font-semibold text-primary mb-1">{member.title}</p>
              {member.subtitle && <p className="text-xs text-accent mb-3">{member.subtitle}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Work With Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We currently have no open positions, but we are always looking for exceptional talent to join our mission of developing opioid-free gene therapies. If you believe your expertise aligns with our vision, we would love to hear from you.
            </p>
            
            <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-border/50 text-left max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Submit Your Resume</h3>
              <form action="mailto:info@blissgene.org" method="POST" encType="text/plain" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name="Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required placeholder="Dr. Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Area of Expertise</label>
                  <input type="text" name="Expertise" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required placeholder="e.g. Molecular Biology" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea name="Message" rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" required placeholder="Tell us how you can contribute to our mission..."></textarea>
                </div>
                <Button type="submit" className="w-full h-14 text-base rounded-xl shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90 text-white">
                  Send to info@blissgene.org
                </Button>
              </form>
            </div>
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