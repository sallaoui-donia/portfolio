
"use client";


import Skills from "./components/Skills";
import Headers from "./components/Header";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header/Nav */}
      <Headers />
      <main className="container mx-auto px-6 py-12">
        {/* Section Hero */}
        <Hero />
        {/* Section Compétences */}
        <section id="compétences" className="py-20">
          <Skills />
        </section>

        {/* Section Expériences */}
        <Experience />
      </main>

      <Footer />
    </div>
  );
}


