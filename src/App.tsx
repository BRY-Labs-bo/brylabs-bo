import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Team } from "@/components/landing/Team";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Faq } from "@/components/landing/Faq";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Projects />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
