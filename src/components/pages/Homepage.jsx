import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet><title>Door to Door Flyer Distribution Company Dubai, Sharjah & Ajman | Max Lead</title><meta name="description" content="Max Lead offers door-to-door flyer distribution across Dubai, Sharjah, Ajman, Abu Dhabi, RAK, Fujairah, Al Ain & UAQ, including leaflets, brochures, pamphlets, door hangers, printing services & more. Contact us today!" /><link rel="canonical" href="https://www.maxleadadvertising.com/" /></Helmet>
      <ScrollToTop />
      <Navigation />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}