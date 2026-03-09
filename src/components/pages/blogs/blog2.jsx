import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, Search, CheckCircle2, BarChart3, Clock, User,LayoutGrid, Zap, FileText, MessageSquare, ArrowRight, HelpCircle } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- UPDATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description: "A comprehensive guide to identifying a performance-focused partner that converts clicks into revenue in the competitive UAE landscape.",
    author: "Strategy Team",
    date: "Feb 24, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Agency", "Digital"],
    link: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    id: 2,
    title: "Why Area Selection Matters in Flyer Distribution",
    description: "In flyer distribution, where your flyers go matters far more than how many you distribute. Learn why area selection is the key to ROI.",
    author: "MaxLead Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3767172/pexels-photo-3767172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "Area Selection"],
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution/"
  },
  {
    id: 3,
    title: "Dos and Don'ts of Flyer Distribution in UAE",
    description: "Avoid common pitfalls. Learn the expert rules for successful door to door flyer distribution in Dubai and the wider Emirates.",
    author: "Operations Lead",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Expert Tips", "Compliance"],
    link: "/blog/dos-and-donts-of-flyer-distribution-in-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Area Selection", icon: Search, path: "/blog/why-area-selection-matters-in-flyer-distribution/" },
  { name: "Digital Marketing", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Strategy", icon: BarChart3, path: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Trends", icon: Zap, path: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
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

export default function BestAgencyBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/+971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };

  return (
    <>
      <Helmet>
        <title>Hiring a Digital Marketing Agency in UAE? Read This 2026 Guide First</title>
        <meta name="description" content="Before you hire a digital marketing agency in UAE, read this 2026 guide. Discover key factors, red flags, and how to choose an agency that delivers results." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/blog/best-digital-marketing-agency-uae" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">
                        <Target className="w-3 h-3" />
                        <span>Agency Growth Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                        How to Choose the <span className="text-blue-600">Best Digital Marketing Agency</span> in UAE 2026
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-12">
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            Best Digital Marketing Agency in UAE has become a high-demand search in 2026 as competition rises across every industry. As ad costs increase and consumer behavior shifts rapidly, companies can no longer rely on random campaigns — they need a clear, ROI-focused plan.
                        </p>
                        <p className="text-base text-gray-600">
                            The right digital marketing agency doesn’t just run ads or post content — it builds a strategy that attracts the right audience, generates qualified leads, and converts them into paying customers. A strong agency will also help you stay ahead of trends like AI-driven campaigns, performance tracking, short-form video growth, and local search updates that directly impact visibility in Dubai, Abu Dhabi, and across the UAE.
                        </p>
                        <p className="text-base text-gray-600">
                            Choosing the wrong agency can lead to wasted budgets, low-quality leads, poor brand positioning, and slow growth. But choosing the right one can deliver consistent traffic, stronger conversions, and measurable ROI — making it one of the most important business decisions for 2026.
                        </p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-6">Why the right agency saves time + increases (Return on Investment)</h2>
                    <p className="text-base">
                        Choosing the right digital marketing agency saves time because you avoid trial-and-error campaigns, wasted ad spend, and repeated strategy changes. A professional agency already has the tools, team, and experience to plan, launch, and optimize campaigns faster — so your business can focus on operations while marketing runs smoothly.
                    </p>
                    <p className="text-base">
                        It also increases your Return on Investment (ROI) by targeting the right audience, improving lead quality, and tracking what actually converts. Instead of spending money on random clicks or low-quality inquiries, the right agency focuses on measurable results like qualified leads, sales, bookings, and revenue growth.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">Key Factors to Check Before Hiring a Digital Marketing Agency in UAE (2026)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Experience in the UAE Market</h3>
                            <p className="text-sm text-gray-600">A UAE-based agency understands local customer behavior, competition, and platforms that work best in Dubai, Abu Dhabi, and other Emirates.</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results & Case Studies</h3>
                            <p className="text-sm text-gray-600">Always ask for real case studies with clear performance results like leads, traffic growth, ROAS, or conversion improvements.</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Expertise</h3>
                            <p className="text-sm text-gray-600">An agency with experience in your industry (Real Estate, Clinics, Ecommerce) will already know what strategies and funnels convert faster.</p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency in Pricing</h3>
                            <p className="text-sm text-gray-600">A reliable agency provides clear pricing, deliverables, and monthly reports so you know exactly where your budget is going.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">Questions to Ask Before Signing a Digital Marketing Contract in UAE</h2>
                    <p className="text-base mb-6">Before choosing an agency, ask the right questions to avoid confusion later and ensure you’re investing in measurable growth.</p>
                    <ul className="space-y-4 my-6 list-none p-0">
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-gray-700"><strong>What KPIs will you track?</strong> (Leads, sales, ROAS, traffic, conversions)</span>
                        </li>
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-gray-700"><strong>What results can you realistically deliver?</strong> (Based on your industry + budget)</span>
                        </li>
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                            <span className="text-gray-700"><strong>Who will manage my account?</strong> (Dedicated manager or rotating team?)</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">FAQs: Choosing the Best Digital Marketing Agency in UAE (2026)</h2>
                    <div className="space-y-6 mt-8">
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> How long does SEO take in UAE?</h3>
                            <p className="text-base text-gray-600">SEO usually takes 3 to 6 months to show strong results, depending on competition, your website, and content quality. For highly competitive industries, it may take longer to reach top rankings.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Which is better: SEO or Google Ads?</h3>
                            <p className="text-base text-gray-600">Both work best together. Google Ads gives fast leads, while SEO builds long-term traffic and lowers cost per lead over time. The smartest brands use Ads for quick wins and SEO for sustainable growth.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> What is the best marketing strategy in 2026?</h3>
                            <p className="text-base text-gray-600">In 2026, the best strategy combines SEO, Google Ads, Meta Ads (Facebook/Instagram), short-form video, AI digital marketing tools, retargeting, and conversion-optimized landing pages.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">Conclusion: Choose the Right Digital Marketing Agency in UAE for 2026 Growth</h2>
                    <p className="text-base mb-10">
                        Choosing the right digital marketing agency in UAE in 2026 can make a major difference in your traffic, lead quality, and overall ROI. Focus on agencies with proven results, industry expertise, transparent reporting, and a strong team that understands SEO, Google Ads, Meta Ads, AI marketing, and automation.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-12 rounded-3xl mt-10 text-white relative overflow-hidden text-center shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">Want to grow faster with a clear strategy?</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                                Get a Free Consultation + Marketing Audit and discover what’s holding your business back and how to improve conversions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> Request a Free Audit
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> WhatsApp Us Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- GRID FOR OTHER BLOGS --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Strategic Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-blue-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read Story <ArrowRight size={12}/></span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}