import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Sparkles, TrendingUp, Target, MapPin, ArrowRight, ExternalLink, Printer, Megaphone, LayoutGrid } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "The Future of Advertising",
    description: "Discover the powerful synergy between physical distribution and strategic advertising that creates a dominant brand presence in the Emirates.",
    author: "MaxLead Team",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Authority", "Strategy"],
    featured: true,
    link: "/blog/how-choose-best-digital-marketing-agency-uae"
  },
  {
    id: 2,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Insights"],
    featured: false,
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution"
  },
];

/* --- UPDATED CATEGORIES WITH REDIRECTS --- */
const categories = [
  { name: "All", icon: LayoutGrid, count: 12, path: "/blog" },
  { name: "Digital Marketing", icon: Target, count: 8, path: "/blog/how-choose-best-digital-marketing-agency-uae" },
  { name: "Flyer Distribution", icon: MapPin, count: 15, path: "/blog/why-uae-businesses-rely-on-flyer-distribution" },
  { name: "Digital Printing", icon: Printer, count: 6, path: "/blog3" },
  { name: "Outdoor Advertising", icon: Megaphone, count: 4, path: "/blog4" }
];

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
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

export default function BlogSectionModern() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* --- REDIRECT HANDLER --- */
  const handleCategoryClick = (path) => {
    if (path.startsWith('http')) {
      window.open(path, "_blank");
    } else {
      window.location.href = path; 
    }
  };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-gray-50 min-h-screen py-10">
        
        {/* --- HEADER SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>MaxLead Strategic Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tight mb-6">
                        The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Advertising</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
                        Data-driven insights and strategic guides to dominate the UAE market.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR WITH REDIRECTS --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                  <span className="font-bold text-gray-700">{cat.name}</span>
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-lg">{cat.count}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- REDIRECTION / DEEP-DIVE SECTION --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">Featured Deep-Dives</h2>
                <p className="text-xl text-gray-500 leading-relaxed">Select a strategic pillar below to explore our comprehensive analysis on UAE market growth and distribution ROI.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Redirect Card 1 */}
              <a href={blogs[0].link} className="group relative overflow-hidden rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-80 overflow-hidden">
                  <img src={blogs[0].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 text-green-600 font-bold text-sm mb-4 tracking-widest uppercase">
                    <TrendingUp className="w-5 h-5" /> Most Popular
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors">{blogs[0].title}</h3>
                  <div className="flex items-center gap-2 font-bold text-gray-900">
                    Read Analysis <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Redirect Card 2 */}
              <a href={blogs[1].link} className="group relative overflow-hidden rounded-[3rem] bg-gray-900 text-white shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-80 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={blogs[1].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 text-green-400 font-bold text-sm mb-4 tracking-widest uppercase">
                    <ExternalLink className="w-5 h-5" /> Strategy Guide
                  </div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-green-400 transition-colors">{blogs[1].title}</h3>
                  <div className="flex items-center gap-2 font-bold text-white">
                    Explore ROI Insights <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* --- NEWSLETTER CTA --- */}
        <section className="py-24 px-6">
          <FadeIn className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Stay Ahead of UAE Marketing Trends</h2>
                <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Get our monthly briefing on advertising strategies and local business growth tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <input type="email" placeholder="Your business email" className="bg-white/5 border border-white/10 rounded-2xl px-10 py-5 outline-none focus:border-green-500 transition-all w-full sm:w-96 text-lg" />
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-12 py-5 rounded-2xl transition-all text-lg">Subscribe Now</button>
                </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}