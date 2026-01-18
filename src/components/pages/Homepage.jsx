import React from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';
import Services from '../Services';
import About from '../About';
import Work from '../Work';
import Process from '../Process';
import Blogsec from '../Blog1';
import FAQ from '../FAQ';
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import Footer from '../Footer';
import Whatsapp from '../pages/whatsapp';
import WhyChooseUs from '../whyus';
import ScrollToTop from "../ScrollToTop";
import Clientlogo from "../pages/clientlogo";
export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <ScrollToTop />
      <Navigation />
      <Hero />
      <Clientlogo />
      <Whatsapp />
      <Services />
      <About />
      <Work />
      <Process />
      <Blogsec />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
