import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { ArrowUpRight, Clock, User, Sparkles, TrendingUp } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* --- DATA --- */
const blogs = [
  {
    id: 1,
    title: "How Flyer Distribution Drives Local Business Growth",
    description: "In an era of digital noise, tangible marketing stands out. Learn how targeted flyer distribution can increase local visibility, foot traffic, and customer inquiries by over 30%.",
    author: "Sarah Jenkins",
    date: "Oct 1, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Local Marketing", "Growth"],
    featured: true
  },
  {
    id: 2,
    title: "Bulk SMS Marketing: Best Practices",
    description: "Discover proven strategies to run effective bulk SMS campaigns that boost engagement.",
    author: "David Lee",
    date: "Sep 22, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SMS Marketing", "Leads"],
    featured: false
  },
  {
    id: 3,
    title: "Print Advertising in the Digital Age",
    description: "Why flyers, posters, and banners remain powerful tools for brand awareness.",
    author: "MaxLead Team",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Offline Marketing"],
    featured: false
  },
  {
    id: 4,
    title: "Generating Leads with Google & Meta Ads",
    description: "A practical guide to running paid ad campaigns that deliver qualified leads.",
    author: "Alex Rivera",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Digital Ads", "PPC"],
    featured: false
  },
];

const popularNews = [
  {
    category: "FinTech",
    title: "AI in FinTech: Revolutionizing Banking UX",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "E-Commerce",
    title: "Top E-Commerce Trends 2025",
    image: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Branding",
    title: "The Power of Branding in Startups",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
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
            {/* Background Decor - Changed to green/emerald */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <FadeIn>
                    {/* Badge - Changed to green */}
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>The MaxLead Journal</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                        {/* Gradient Text - Changed to green gradient */}
                        Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Growth</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Expert strategies on marketing, flyer distribution, and digital transformation to scale your business.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* --- BLOG GRID --- */}
        <section className="pb-24 px-6 max-w-7xl mx-auto">
            
            {/* Featured Post (Index 0) */}
            <FadeIn className="mb-12">
                <Link to="/blog/1" className="group block">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 grid md:grid-cols-2 border border-gray-100">
                        <div className="h-full min-h-[400px] overflow-hidden relative">
                            <img 
                                src={blogs[0].image} 
                                alt={blogs[0].title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-none" />
                            <div className="absolute top-6 left-6 flex gap-2">
                                {blogs[0].tags.map(tag => (
                                    <span key={tag} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-8 md:p-12 flex flex-col justify-center relative">
                            {/* Featured Label - Changed to green */}
                            <div className="flex items-center gap-2 text-sm font-medium text-green-500 mb-4">
                                <Sparkles className="w-4 h-4" /> Featured Story
                            </div>
                            {/* Title Hover - Changed to green */}
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-green-600 transition-colors">
                                {blogs[0].title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                                {blogs[0].description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-gray-900">{blogs[0].author}</p>
                                        <p className="text-gray-500">{blogs[0].date} • {blogs[0].readTime}</p>
                                    </div>
                                </div>
                                {/* Arrow Button - Changed to green */}
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
                                {/* Title Hover - Changed to green */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-500 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                                    {blog.description}
                                </p>
                                
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                    Read Article <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>

        {/* --- TRENDING / POPULAR SECTION (Dark Mode Bento) --- */}
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
             {/* Abstract Lines */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
             </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {/* Changed highlight to green */}
                            Trending <span className="text-green-500">Now</span>
                        </h2>
                        <p className="text-gray-400">Most read articles across the advertising world.</p>
                    </FadeIn>
                    <FadeIn delay={100}>
                         <button className="flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                            <TrendingUp className="w-4 h-4" /> View All News
                         </button>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {popularNews.map((news, idx) => (
                        <FadeIn key={idx} delay={idx * 150}>
                            <div className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer">
                                <img 
                                    src={news.image} 
                                    alt={news.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    {/* Category Badge - Changed to green */}
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-green-400 border border-green-500/30 bg-green-500/10 rounded-full uppercase">
                                        {news.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {news.title}
                                    </h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}