import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {TrendingUp,  Target, MapPin, CheckCircle2, BarChart3, MessageSquare, Clock, User, Printer, Megaphone, LayoutGrid, FileText } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- UPDATED STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "The Future of Advertising",
    description: "As ad costs rise, your business needs an ROI-focused plan. Discover how to identify a partner that converts clicks into revenue.",
    author: "MaxLead Strategy Team",
    date: "Feb 13, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "ROI"],
    featured: true
  },
  {
    id: 2,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description: "The ultimate showdown between organic growth and instant traffic. Learn which channel suits your 2026 budget.",
    author: "MaxLead Team",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6740101/pexels-photo-6740101.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SEO", "Google Ads"],
    featured: false
  },
];

/* --- UPDATED CATEGORIES --- */
const categories = [
  { name: "All", icon: LayoutGrid, path: "/blog" },
  { name: "Digital Marketing", icon: Target, path: "/blog/how-choose-best-digital-marketing-agency-uae" },
  { name: "Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution" },
  { name: "Digital Printing", icon: Printer, path: "/blog4" },
  { name: "Outdoor Advertising", icon: Megaphone, path: "/blog3" }
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

export default function DigitalMarketingBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* --- NAVIGATION HANDLERS --- */
  const handleCategoryClick = (path) => {
    window.location.href = path;
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/971522286401", "_blank");
  };

  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-gray-50 min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>Best Digital Marketing Agency in UAE</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                        Hiring a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Agency</span> in UAE? Read This 2026 Guide First
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  <span className="font-bold text-gray-700">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-5xl mx-auto">
                <div className="prose prose-xl prose-blue max-w-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                            How to Choose the Best Digital Marketing Agency in UAE 2026
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Best Digital Marketing Agency in UAE has become a high-demand search in 2026 as competition rises across every industry. As ad costs increase and consumer behavior shifts rapidly, companies can no longer rely on random campaigns — they need a clear, ROI-focused plan.
                        </p>
                        <p>
                            The right digital marketing agency doesn’t just run ads or post content — it builds a strategy that attracts the right audience, generates qualified leads, and converts them into paying customers. A strong agency will also help you stay ahead of trends like AI-driven campaigns, performance tracking, short-form video growth, and local search updates that directly impact visibility in Dubai, Abu Dhabi, and across the UAE.
                        </p>
                        <p>
                            Choosing the wrong agency can lead to wasted budgets, low-quality leads, poor brand positioning, and slow growth. But choosing the right one can deliver consistent traffic, stronger conversions, and measurable ROI — making it one of the most important business decisions for 2026.
                        </p>
                    </div>

                    {/* Funnel Visual Support */}
                    <div className="my-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                        <h4 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" /> The Modern UAE Digital Funnel
                        </h4>
                        
                        <p className="text-sm text-blue-800 mt-4 italic">The right agency manages this entire journey, ensuring no lead falls through the cracks.</p>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Why the right agency saves time + increases (Return on Investment)</h3>
                    <p>
                        Choosing the right digital marketing agency saves time because you avoid trial-and-error campaigns, wasted ad spend, and repeated strategy changes. A professional agency already has the tools, team, and experience to plan, launch, and optimize campaigns faster — so your business can focus on operations while marketing runs smoothly.
                    </p>
                    <p>
                        It also increases your Return on Investment (ROI) by targeting the right audience, improving lead quality, and tracking what actually converts. Instead of spending money on random clicks or low-quality inquiries, the right agency focuses on measurable results like qualified leads, sales, bookings, and revenue growth.
                    </p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Key Factors to Check Before Hiring a Digital Marketing Agency in UAE (2026)</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {[
                          { title: "Experience in the UAE Market", desc: "A UAE-based agency understands local customer behavior, competition, and platforms that work best in Dubai and Abu Dhabi." },
                          { title: "Proven Results & Case Studies", desc: "Always ask for real case studies with clear performance results like leads, traffic growth, or ROAS improvements." },
                          { title: "Industry Expertise", desc: "An agency with experience in your industry will already know what strategies, creatives, and funnels convert faster." },
                          { title: "Transparency in Reporting", desc: "A reliable agency provides clear pricing, deliverables, and monthly reports so you know where your budget is going." },
                          { title: "Team Strength", desc: "Strong agencies have specialists for each service (SEO, Ads, Web), not one person handling everything." },
                          { title: "Response Time", desc: "Quick communication matters. Choose an agency that responds fast and keeps you involved in decisions." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-blue-500 mb-3" />
                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="my-16 p-10 bg-gray-900 rounded-[3rem] text-white">
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">Questions to Ask Before Signing a Digital Marketing Contract in UAE</h3>
                        <p className="mb-6 text-gray-300 italic">Before choosing an agency, ask the right questions to avoid confusion later and ensure you’re investing in measurable growth.</p>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3"><MessageSquare className="w-6 h-6 text-blue-400 shrink-0" /> What KPIs will you track? (Leads, sales, ROAS, traffic, conversions)</li>
                            <li className="flex gap-3"><MessageSquare className="w-6 h-6 text-blue-400 shrink-0" /> What results can you realistically deliver? (Based on your industry + budget)</li>
                            <li className="flex gap-3"><MessageSquare className="w-6 h-6 text-blue-400 shrink-0" /> Who will manage my account? (Dedicated manager or rotating team?)</li>
                            <li className="flex gap-3"><MessageSquare className="w-6 h-6 text-blue-400 shrink-0" /> What tools do you use for reporting? (Google Analytics, Search Console, CRM)</li>
                            <li className="flex gap-3"><MessageSquare className="w-6 h-6 text-blue-400 shrink-0" /> Do you offer monthly contracts or long-term only? (Flexibility matters)</li>
                        </ul>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8 mb-8">FAQs: Choosing the Best Digital Marketing Agency in UAE (2026)</h3>
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 border-b font-bold text-gray-900">Question</th>
                                    <th className="p-4 border-b font-bold text-gray-900">Expert Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b font-semibold">How long does SEO take in UAE?</td>
                                    <td className="p-4 border-b text-gray-600">3-6 months to show strong results, depending on competition and content quality.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b font-semibold">Which is better: SEO or Google Ads?</td>
                                    <td className="p-4 border-b text-gray-600">Both work best together. Ads for fast leads, SEO for long-term growth and lower cost-per-lead.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b font-semibold">What is the best marketing strategy in 2026?</td>
                                    <td className="p-4 border-b text-gray-600">A combination of SEO, Google Ads, Meta Ads, short-form video, and AI-driven retargeting.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b font-semibold">How to measure ROI?</td>
                                    <td className="p-4 border-b text-gray-600">Track lead quality, cost per lead, ROAS, and conversion rate using automation tools.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Conclusion: Choose the Right Digital Marketing Agency in UAE for 2026 Growth</h3>
                    <p className="mb-10">
                        Choosing the right digital marketing agency in UAE in 2026 can make a major difference in your traffic, lead quality, and overall ROI. Focus on agencies with proven results, industry expertise, transparent reporting, and a strong team that understands SEO, Google Ads, Meta Ads, AI marketing, and automation.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-16 rounded-[3.5rem] mt-20 text-white relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-bold mb-6">Want to grow faster with a clear strategy?</h3>
                            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                                Get a Free Consultation + Marketing Audit and discover what’s holding your business back and how to improve conversions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button 
                                  onClick={goToContact}
                                  className="bg-white text-blue-600 font-bold px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all text-lg flex items-center justify-center gap-2"
                                >
                                   <FileText className="w-5 h-5" /> Request a Free Audit
                                </button>
                                <button 
                                  onClick={openWhatsapp}
                                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" /> WhatsApp: +971 52 228 6401
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}