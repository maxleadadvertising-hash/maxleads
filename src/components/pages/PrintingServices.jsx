import { useEffect, useState, useRef } from "react";
import { 
  CheckCircle, 
  Printer, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Layers, 
  Zap, 
  Palette, 
  Box,
  Truck,
  ScanEye,
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';


/* IMAGES */
import printingHero from "../../assests/printing/printingHero.gif";
import printingService1 from "../../assests/printing/printingService1.webp";
import printingService2 from "../../assests/printing/printingService2.webp";
import printingService3 from "../../assests/printing/printingService3.webp";

/* --- ANIMATION COMPONENTS --- */

// 1. Fade Up Animation (On Scroll)
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 2. Scale In Animation (For Images)
const ScaleIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function PrintingServices() {
  
  // DATA
  const serviceCategories = [
    {
      title: "Marketing & Promotional Prints",
      desc: "Promotional printing plays a vital role in increasing brand visibility and driving customer action. Our marketing and promotional prints are designed to support offers, product launches, and campaigns across offline channels.",
      items: ["Flyers & Leaflets", "Posters", "Banners", "Stickers"],
      icon: Zap,
      color: "text-green-600",
      bg: "bg-green-50",
      img: printingService1 
    },
    {
      title: "Corporate & Office Printing",
      desc: "Corporate printed materials represent your brand identity and professionalism. We provide reliable corporate printing services in Dubai for businesses that value consistency and quality.",
      items: ["Business Cards", "Letterheads", "Envelopes", "Company Profiles"],
      icon: Box,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      img: printingService2
    },
    {
      title: "Large Format Printing",
      desc: "Large format printing is essential for outdoor visibility, retail branding, and event promotions. Our large format printing services in Dubai are built to deliver impact at scale.",
      items: ["Flex Banners", "Roll-up Standees", "Hoardings", "Backdrops"],
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50",
      img: printingService3
    },
    {
      title: "Event & Exhibition Printing",
      desc: "Events and exhibitions demand clear branding, professional presentation, and visual consistency. We provide specialized event printing services in UAE for exhibitions, conferences, and promotional events.",
      items: ["Event Branding", "Booth Graphics", "Stage Backdrops", "Display Boards"],
      icon: Palette,
      color: "text-lime-600",
      bg: "bg-lime-50",
      img: printingService1 
    },
    {
      title: "Branding & Custom Prints",
      desc: "Branding is about visibility beyond traditional formats. Our branding and custom printing services help businesses extend their presence across vehicles, walls, and custom display areas.",
      items: ["Vehicle Branding", "Wall Graphics", "Custom Signage", "Promotional Displays"],
      icon: Sparkles,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      img: printingService2 
    },
    {
      title: "Specialty Printing",
      desc: "For businesses that require premium finishes or unique display solutions, we offer advanced specialty printing services in Dubai.These solutions are ideal for indoor signage, corporate branding, retail displays, and premium visual communication. Specialty printing allows brands to create distinctive, high-end impressions.",
      items: ["UV Printing", "Acrylic Printing", "Foam Board Printing"],
      icon: Printer,
      color: "text-green-700",
      bg: "bg-green-100",
      img: printingService3 
    }
  ];

  return (
    <>
     <Whatsapp />
    <ScrollToTop />
      <Navigation />

      <main className="relative overflow-hidden bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-b from-green-50/30 to-white">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-green-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob"
            />
            <div 
              className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-emerald-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"
            />
            <div 
              className="absolute -bottom-[20%] left-[20%] w-[40rem] h-[40rem] bg-teal-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-4000"
            />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <FadeIn className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full shadow-sm mt-10">
                <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Trusted Printing Company</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Digital Printing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Services in Dubai, UAE.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                As a trusted digital printing company in UAE, we work with businesses of all sizes to deliver high-impact printed materials that reflect brand identity and create a lasting impression.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-green-500/20 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  Get a Printing Consultation
                </button>
                <button 
                   onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                   className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:border-green-200 hover:bg-green-50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Explore Services
                </button>
              </div>

              {/* Trusted By - Avatar Group */}
              <div className="flex items-center gap-4 pt-8 opacity-90">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Trusted Client ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform z-0 hover:z-10"
                    />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Trusted by <span className="text-gray-900 font-bold">500+ Businesses</span> in UAE
                </div>
              </div>
            </FadeIn>

            {/* Right Image */}
            <ScaleIn delay={200} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-green-200">
                <img 
                  src={printingHero} 
                  alt="Printing Services Dubai" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[220px] animate-bounce-slow">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-gray-900">Quality Assured</span>
                  </div>
                  <p className="text-xs text-gray-500">High-resolution prints with premium finishing and color accuracy.</p>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* --- INTRODUCTION SECTION --- */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Trusted Digital Printing Company in UAE
              </h2>
              <div className="h-1.5 w-24 bg-green-500 rounded-full mb-8 animate-pulse" />
            </FadeIn>
            <FadeIn delay={200} className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Printing is more than putting ink on paper. It is about representing your brand the right way. At Max Lead Advertising, we understand how important print quality, color accuracy, and finishing are to your business image.
              </p>
              <p>
                We serve as a full-service printing company in Dubai, supporting marketing campaigns, corporate branding, retail promotions, events, and exhibitions. Whether you need short-run prints or bulk printing, we guide you through material selection, print formats, and finishing options to ensure the final output meets your expectations.
              </p>
              <p>
                Our digital printing services are suitable for businesses that want speed, flexibility, and professional results without compromise.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Printing Services</h2>
              <p className="text-xl text-gray-600">
                We offer a wide range of printing services in Dubai and across UAE, organized into clear categories so you can easily find the solution that fits your requirement.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, idx) => (
                <FadeIn key={idx} delay={idx * 150}>
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 h-full flex flex-col relative overflow-hidden hover:-translate-y-2">
                    {/* Hover Gradient Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-[2.5]" />
                    
                    <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                      <service.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>

                    {/* Image Preview */}
                    {service.img && (
                      <div className="mb-6 rounded-xl overflow-hidden h-40 w-full shadow-sm">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Includes:</p>
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium group-hover:translate-x-1 transition-transform">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY PROFESSIONAL PRINTING MATTERS --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative group">
                {/* Background Accents - Interactive on hover */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                      Why Professional Printing Matters for Your Business
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      Professional printing plays a crucial role in how customers perceive your brand. Poor print quality can weaken trust, while well-designed and high-quality prints enhance credibility.
                      <br/><br/>
                      Whether it’s a flyer, banner, or branded display, professional printing supports your marketing efforts more effectively than low-quality alternatives.
                    </p>
                    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition group/btn">
                      Start your project now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div>
                     <p className="text-gray-400 mb-4 font-semibold uppercase tracking-widest text-sm">Choosing us ensures:</p>
                     <div className="grid sm:grid-cols-1 gap-4">
                        {[
                          "Consistent color accuracy",
                          "Durable materials",
                          "Clean finishing",
                          "Better brand perception",
                          "Long-term usability"
                        ].map((benefit, i) => (
                          <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default">
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                            <span className="font-medium text-lg">{benefit}</span>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Printing Process</h2>
              <p className="text-gray-600">We follow a structured process to ensure every printing project meets quality and timeline expectations.</p>
            </FadeIn>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { title: "Requirement Understanding", desc: "We discuss your purpose, quantity, and usage requirements.", icon: MessageCircle },
                  { title: "Design & Material Guidance", desc: "Our team advises on layout, paper, material, and finish options.", icon: Palette },
                  { title: "Print Production", desc: "Printing is executed using modern digital printing technology.", icon: Printer },
                  { title: "Quality Check", desc: "Every print job goes through quality inspection.", icon: ScanEye },
                  { title: "Delivery Across UAE", desc: "Finished materials are delivered safely and on time.", icon: Truck },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 150}>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:-translate-y-3 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center group">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform relative z-10">
                        <step.icon className="w-7 h-7" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">{i + 1}</div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 leading-tight">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US & INDUSTRIES --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20">
            {/* Left: Why Choose */}
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Max Lead Advertising?</h2>
              <p className="text-gray-600 mb-8">Businesses across UAE choose Max Lead Advertising for their printing needs because we focus on quality, clarity, and long-term value.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced digital printing company in UAE",
                  "Wide range of printing solutions",
                  "Modern printing technology",
                  "Fast turnaround times",
                  "Competitive pricing",
                  "Reliable support and guidance",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50 border border-green-100 hover:bg-green-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-gray-500">We don’t just print materials — we help businesses communicate better through print.</p>
            </FadeIn>

            {/* Right: Industries */}
            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-600 mb-8">Each industry has different requirements, and we tailor our printing solutions accordingly.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Retail & FMCG",
                  "Real Estate",
                  "Events & Exhibitions",
                  "Restaurants & Hospitality",
                  "Healthcare & Clinics",
                  "Education & Training Institutes",
                ].map((ind, i) => (
                  <span key={i} className="px-6 py-4 bg-gray-50 hover:bg-green-600 hover:text-white rounded-2xl text-gray-800 font-bold transition-all cursor-default shadow-sm hover:shadow-lg hover:-translate-y-1 border border-gray-100">
                    {ind}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            </FadeIn>
            <div className="space-y-4">
              {[
                { q: "What types of printing services do you offer in Dubai?", a: "We offer promotional printing, corporate printing, large-format printing, event printing, branding prints, and specialty printing." },
                { q: "Do you provide bulk printing services in UAE?", a: "Yes, we handle both small-run and bulk printing projects efficiently." },
                { q: "What is large format printing used for?", a: "Large format printing is used for banners, hoardings, standees, and backdrops for branding and visibility." },
                { q: "Do you assist with design and material selection?", a: "Yes, our team provides guidance on design formats, materials, and finishes." },
                { q: "What is your delivery coverage?", a: "We provide printing services and delivery across Dubai and UAE." }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <details className="group bg-white border border-gray-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-green-300 transition-colors shadow-sm hover:shadow-md">
                    <summary className="flex items-center justify-between font-bold text-lg text-gray-900">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180 bg-green-50 rounded-full p-1">
                        <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed border-t pt-4 border-gray-100 animate-fadeIn">
                      {faq.a}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section id="contact" className="py-20 bg-white">
          <FadeIn className="max-w-[1440px] mx-auto px-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Get High-Quality Printing Services in Dubai, UAE
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  If you are looking for reliable digital printing services in Dubai, UAE, Max Lead Advertising is ready to support your business. As a trusted printing company in Dubai, we deliver quality prints that help your brand stand out and communicate effectively.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="/contact">
                    <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all hover:scale-105 active:scale-95">
                      <Phone className="w-5 h-5" />
                      Contact us today for a printing consultation
                    </button>
                  </a>
                  <a href="https://wa.me/+971522286401" target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-4 bg-white border border-gray-300 text-gray-800 rounded-full font-bold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all hover:border-gray-400 hover:scale-105 active:scale-95">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      WhatsApp us to get a quick quote
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />

      {/* --- GLOBAL CSS FOR KEYFRAMES --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}