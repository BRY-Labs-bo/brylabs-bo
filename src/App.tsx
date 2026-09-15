import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Solutions } from "@/components/landing/Solutions";
import { Platforms } from "@/components/landing/Platforms";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Faq } from "@/components/landing/Faq";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Solutions />
        <Platforms />
        <WhatWeDo />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
