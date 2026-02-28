import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {Target, MapPin,  Clock, User,CheckCircle2, LayoutGrid,  MessageSquare, ArrowRight,Zap,BarChart3,FileText,TrendingUp,Sparkles} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA (12 POSTS) --- */
const blogs = [
  {
    id: 1,
    title: "Why UAE Businesses Rely on Flyer Distribution",
    description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Insights", "ROI"],
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution/"
  },
  {
    id: 2,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description: "A comprehensive guide to identifying a performance-focused partner that converts clicks into revenue in the competitive UAE landscape.",
    author: "Strategy Team",
    date: "Feb 24, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Agency", "Digital"],
    link: "/blog/how-choose-best-digital-marketing-agency-uae/"
  },
  {
    id: 3,
    title: "Dos and Don'ts of Flyer Distribution in UAE",
    description: "Avoid common pitfalls. Learn the expert rules for successful door to door flyer distribution in Dubai and the wider Emirates.",
    author: "Operations Lead",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Expert Tips", "Compliance"],
    link: "/dos-and-donts-of-flyer-distribution-in-uae/"
  },
  {
    id: 4,
    title: "Ultimate Guide to Flyer Distribution Strategies in Dubai",
    description: "Discover 10 proven ways to get results. Learn how hyper-local targeting and multi-touch strategies build brand dominance.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/7682345/pexels-photo-7682345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "Dominance"],
    link: "/ultimate-guide-to-flyer-distribution-strategies-in-dubai/"
  },
  {
    id: 5,
    title: "Future Trends in Flyer Distribution in UAE",
    description: "How technology and AI are shaping the future of offline marketing. See what’s coming next in the 2026 UAE market.",
    author: "Innovation Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Future", "AI"],
    link: "/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/"
  },
  {
    id: 6,
    title: "Best Locations for Flyer Distribution in the UAE",
    description: "Identify high-ROI zones from villa communities like Arabian Ranches to high-density apartment clusters in Dubai Marina.",
    author: "Market Researcher",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/3767172/pexels-photo-3767172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Locations", "Demographics"],
    link: "/best-locations-for-flyer-distribution-in-the-uae/"
  },
  {
    id: 7,
    title: "Marketing with Max Lead Advertising",
    description: "Our story of transformation: combining the reliability of offline marketing with modern data precision since 2015.",
    author: "CEO Office",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["MaxLead", "History"],
    link: "/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/"
  },
  {
    id: 8,
    title: "What is the Role of a Flyer Distributor?",
    description: "More than just a simple job. Learn how professional distributors act as brand ambassadors and the final bridge to your customer.",
    author: "HR Director",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Operations", "Brand"],
    link: "/what-is-the-role-of-a-flyer-distributor/"
  },
  {
    id: 9,
    title: "How to Increase Sales with Flyer Distribution",
    description: "Unlock growth with these 10 proven tips. Learn how to craft irresistible offers and use timing to drive immediate revenue.",
    author: "Sales Head",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/5849581/pexels-photo-5849581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Sales", "Growth"],
    link: "/how-to-increase-sales-with-flyer-distribution/"
  },
  {
    id: 10,
    title: "Online and Offline Strategies for Flyer Success",
    description: "Learn how integrating flyers with QR codes and social media targeting can double your conversion rates.",
    author: "Marketing Strategist",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Integration", "QR Codes"],
    link: "/integrating-online-and-offline-strategies-for-flyer-distribution/"
  },
  {
    id: 11,
    title: "Local Advertising with Door Hangers",
    description: "The 100% attention tool. Discover why door hangers are the most powerful local marketing weapon for neighborhood businesses.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Local Ads", "Neighborhood"],
    link: "/unlock-the-power-of-local-advertising-with-door-hanger-marketing/"
  },
  {
    id: 12,
    title: "Social Media Marketing Services Cost",
    description: "Understanding the pricing factors and investment required for social media growth in the UAE market for 2026.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Digital"],
    link: "/social-media-marketing-services-cost-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Why UAE Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Best Digital Agency Guide", icon: Target, path: "/blog/how-choose-best-digital-marketing-agency-uae/" },
  { name: "Dos and Don'ts", icon: CheckCircle2, path: "/dos-and-donts-of-flyer-distribution-in-uae/" },
  { name: "Ultimate Strategy Guide", icon: BarChart3, path: "/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Marketing Trends", icon: Zap, path: "/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { name: "Best UAE Locations", icon: MapPin, path: "/best-locations-for-flyer-distribution-in-the-uae/" },
  { name: "MaxLead Transformation", icon: TrendingUp, path: "/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" },
  { name: "Distributor Role Guide", icon: User, path: "/what-is-the-role-of-a-flyer-distributor/" },
  { name: "How to Increase Sales", icon: FileText, path: "/how-to-increase-sales-with-flyer-distribution/" },
  { name: "Online & Offline Success", icon: MessageSquare, path: "/integrating-online-and-offline-strategies-for-flyer-distribution/" },
  { name: "Social Media Cost", icon: Zap, path: "/social-media-marketing-services-cost-uae/" }
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
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function BlogSectionModern() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => {
    window.location.href = path; 
  };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO HEADER --- */}
        <section className="relative pt-32 pb-12 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4">
                        <Sparkles className="w-3 h-3" />
                        <span>MaxLead Strategic Insights 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        The Future of <span className="text-blue-600">Advertising</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Data-driven insights and 12 strategic guides to dominate the UAE market through integrated marketing solutions.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY GRID (WRAPPED / NO SCROLL) --- */}
        <section className="py-8 px-6 bg-white border-b border-gray-50">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)} 
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon size={14} className="text-gray-400 group-hover:text-white" />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- BLOG GRID --- */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-12">
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                  Latest Research
                </h2>
                <p className="text-sm text-gray-500">Master the UAE market with our 12 core strategy guides.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <a key={blog.id} href={blog.link} className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 flex gap-1">
                        {blog.tags.map((tag, i) => (
                            <span key={i} className="bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider text-gray-900">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-gray-400 text-[10px] mb-3 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h3>
                    <p className="text-gray-500 text-xs mb-6 line-clamp-2 leading-relaxed">{blog.description}</p>
                    <div className="mt-auto flex items-center gap-1 font-bold text-blue-600 text-[11px] uppercase tracking-wider">
                      Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

      
      </main>
      <Footer />
    </>
  );
}