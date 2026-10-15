import React from 'react';
import SkipLink from './components/SkipLink';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#171717] selection:bg-[#4F46E5] selection:text-white">
      <SkipLink />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
