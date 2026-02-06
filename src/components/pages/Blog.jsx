import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { ArrowUpRight, Clock, User, Sparkles, TrendingUp, BookOpen, Target, MapPin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* --- STRATEGIC BLOG DATA --- */
const blogs = [
  // A. Authority-Building
  {
    id: 1,
    title: "How Advertising and Distribution Work Together to Grow Businesses in UAE",
    description: "Discover the powerful synergy between physical distribution and strategic advertising that creates a dominant brand presence in the Emirates.",
    author: "MaxLead Team",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Authority", "Strategy"],
    featured: true
  },
  {
    id: 2,
    title: "Why Businesses in UAE Still Rely on Flyer Distribution in the Digital Age",
    description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Insights"],
    featured: false
  },
  // B. Service-Intent
  {
    id: 3,
    title: "How to Choose the Right Flyer Distribution Company in UAE",
    description: "Avoid common pitfalls. Here is your ultimate checklist for selecting a distribution partner that guarantees delivery and transparency.",
    author: "MaxLead Team",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Guide", "Leads"],
    featured: false
  },
  {
    id: 4,
    title: "Why SMS Marketing Still Delivers High ROI in UAE",
    description: "Direct, personal, and fast. Discover why SMS remains the king of conversion for UAE retail and service businesses.",
    author: "MaxLead Team",
    date: "Jan 20, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SMS Marketing", "ROI"],
    featured: false
  },
  // C. Industry Specific
  {
    id: 5,
    title: "Marketing Strategies for Retail & Supermarkets in UAE",
    description: "How to drive footfall to your retail location using a mix of targeted leaflets and digital localized ads.",
    author: "MaxLead Team",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Retail", "UAE"],
    featured: false
  }
];

const categories = [
  { name: "Authority-Building", icon: BookOpen, count: 4 },
  { name: "Service-Intent", icon: Target, count: 4 },
  { name: "Industry-Specific", icon: Sparkles, count: 4 },
  { name: "Local SEO", icon: MapPin, count: 3 },
  { name: "Conversion", icon: TrendingUp, count: 5 }
];

/* --- ANIMATION HELPER --- */
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
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                        The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Advertising</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Data-driven insights and strategic guides to dominate the UAE market through offline and online channels.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all group">
                  <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                  <span className="font-bold text-gray-700">{cat.name}</span>
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-lg">{cat.count}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- BLOG GRID --- */}
        <section className="pb-24 px-6 max-w-7xl mx-auto">
            
            {/* Featured Post */}
            <FadeIn className="mb-12">
                <Link to={`/blog/${blogs[0].id}`} className="group block">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 grid md:grid-cols-2 border border-gray-100">
                        <div className="h-full min-h-[400px] overflow-hidden relative">
                            <img 
                                src={blogs[0].image} 
                                alt={blogs[0].title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 flex gap-2">
                                {blogs[0].tags.map(tag => (
                                    <span key={tag} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-sm font-medium text-green-500 mb-4">
                                <Sparkles className="w-4 h-4" /> Authority Piece
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-green-600 transition-colors">
                                {blogs[0].title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                                {blogs[0].description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-gray-900">{blogs[0].author}</p>
                                        <p className="text-gray-500">{blogs[0].date} • {blogs[0].readTime}</p>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                    <ArrowUpRight className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </FadeIn>

            {/* Standard Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.slice(1).map((blog, idx) => (
                    <FadeIn key={blog.id} delay={idx * 100}>
                        <Link to={`/blog/${blog.id}`} className="group flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                        {blog.tags[0]}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                                    <Clock className="w-3 h-3" /> {blog.readTime}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-500 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                                    {blog.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                    Read Strategy <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>

        {/* --- NEWSLETTER CTA --- */}
        <section className="py-24 px-6">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" />
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Ahead of UAE Marketing Trends</h2>
               <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                  Get our monthly briefing on advertising strategies, distribution hacks, and local business growth tips.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input type="email" placeholder="Your business email" className="bg-white/5 border border-white/10 rounded-2xl px-8 py-4 outline-none focus:border-green-500 transition-all w-full sm:w-80" />
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-2xl transition-all">Subscribe</button>
               </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}