"use client";

import MeSection from "@/components/MeSection";
// import AboutSection from "@/components/AboutSection";
// import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navigation, { MobileNavigation } from "@/components/Navigation";
import { useIntersectionObserver } from "@/lib/hooks";

export default function Home() {
  useIntersectionObserver();

  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Sections */}
      <section id="me">
        <MeSection />
      </section>
      {/* <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section> */}
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </main>
  );
}
