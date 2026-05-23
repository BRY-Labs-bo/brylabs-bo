import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { Services } from "@/components/landing/Services";
import { Projects } from "@/components/landing/Projects";
import { Team } from "@/components/landing/Team";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRY Labs — Tecnología que mueve negocios reales" },
      {
        name: "description",
        content:
          "Estudio de tecnología boliviano. Diseñamos y construimos soluciones digitales: IA, apps móviles, fintech y optimización de procesos.",
      },
      { property: "og:title", content: "BRY Labs — Tecnología que mueve negocios reales" },
      {
        property: "og:description",
        content:
          "Estudio de tecnología boliviano enfocado en resultados. IA, apps móviles, fintech y optimización de procesos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
