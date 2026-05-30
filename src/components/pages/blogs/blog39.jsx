import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User, LayoutGrid, Zap, FileText, MessageSquare, PhoneCall, Building2, ShoppingCart, Activity, Linkedin } from "lucide-react"; // Added Linkedin
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Best Flyer Distribution Services in UAE 2026",
    description: "Looking for top flyer distribution services in UAE 2026? Reach the right audience with strategic area targeting and professional delivery solutions.",
    author: "MaxLead Team",
    date: "March 8, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "UAE Strategy"],
    link: "/blog/best-flyer-distribution-services-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description: "Discover why physical marketing still works and how touch triggers emotional responses that digital ads can't match.",
    author: "MaxLead Team",
    date: "March 6, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Psychology", "Insights"],
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "7 Creative Flyer Distribution Ideas",
    description: "Discover unique strategies used by top flyer distribution companies in Dubai UAE to get real results and stop being ignored.",
    author: "Creative Team",
    date: "March 5, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Innovation", "ROI"],
    link: "/blog/creative-flyer-distribution-ideas-that-work-in-dubai/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Flyer Services", icon: MapPin, path: "/blog/best-flyer-distribution-services-uae/" },
  { name: "Psychology", icon: Zap, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" },
  { name: "Creative Ideas", icon: Target, path: "/blog/creative-flyer-distribution-ideas-that-work-in-dubai/" }
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

export default function BestFlyerDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // Meta Tags Logic - Injected via useEffect as Helmet is removed
    document.title = "Video Marketing Dubai: Grow Your Business on a Small Budget";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Learn how Dubai businesses can use affordable video marketing strategies to attract customers, build trust, and increase sales without overspending. Contact Us Today!");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/budget-friendly-video-marketing-dubai-businesses/");
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/+971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };
  const openLinkedin = () => { window.open("https://www.linkedin.com/company/max-lead-advertising-distribution/", "_blank"); };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100 text-center">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4 mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Performance Marketing 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                         How Dubai Businesses Can Win With <span className="text-blue-600">Video Marketing</span> on a Small Budget
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 transition-colors hover:text-blue-600 cursor-pointer" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin className="w-4 h-4" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
                    
                    <div className="mb-12">
                        <p className="text-base text-gray-600">
                            Video marketing is no longer something only large brands can afford. Today, even small businesses in Dubai can create effective video content that generates leads, increases brand awareness, and drives sales without spending thousands of dirhams.
                        </p>
                        <p className="text-base text-gray-600">
                            Whether you run a restaurant, real estate company, clinic, gym, or local service business, video helps potential customers understand your brand faster than text or images alone. With platforms like Instagram, TikTok, YouTube Shorts, and Facebook prioritizing video content, businesses that ignore video marketing risk losing attention to competitors.
                        </p>
                        <p className="text-base text-gray-600">
                            The good news is that you do not need expensive equipment or a massive production budget to get results. With the right strategy, Dubai businesses can build a strong video presence while keeping costs under control.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Why Video Marketing Works So Well in Dubai</h2>
                    <p className="text-base text-gray-600">Dubai is one of the most digitally connected cities in the world. Consumers spend hours daily watching content on social media platforms, making video one of the fastest ways to capture attention.</p>
                    <p className="font-bold text-gray-900 mb-4">Video allows businesses to:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Build trust with potential customers</li>
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Showcase products and services visually</li>
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Explain complex offerings quickly</li>
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Increase engagement on social media</li>
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Improve website conversion rates</li>
                        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm font-semibold text-gray-800"><CheckCircle2 className="text-blue-600" size={16} aria-hidden="true" /> Generate more qualified leads</li>
                    </ul>
                    <p className="text-base text-gray-600">Many businesses investing in Video Marketing Dubai strategies are seeing stronger engagement compared to traditional image-based content. Short videos often outperform static posts because they keep users engaged for longer periods and encourage shares, comments, and direct inquiries.</p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Affordable Video Content Ideas for Small Businesses</h2>
                    <p className="text-base text-gray-600 mb-8">
                        Many business owners assume video marketing requires professional actors, expensive cameras, and large production teams. That is simply not true.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="p-6 border border-gray-100 rounded-2xl bg-blue-50/30">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm"><MapPin className="text-blue-600" size={16} aria-hidden="true" /> Behind-the-Scenes Videos</h4>
                            <p className="text-xs text-gray-600">Show how your business operates, introduce team members, or give customers a look inside your daily process.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-blue-50/30">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm"><BarChart3 className="text-blue-600" size={16} aria-hidden="true" /> Customer Testimonials</h4>
                            <p className="text-xs text-gray-600">Record satisfied customers sharing their experiences. Authentic testimonials often outperform polished advertisements.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-blue-50/30">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm"><User className="text-blue-600" size={16} aria-hidden="true" /> Educational Content</h4>
                            <p className="text-xs text-gray-600">Answer common customer questions through short videos. This positions your business as an expert while building trust.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-blue-50/30">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm"><LayoutGrid className="text-blue-600" size={16} aria-hidden="true" /> Product Demonstrations</h4>
                            <p className="text-xs text-gray-600">Show your product or service in action rather than simply describing it.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-gray-900 md:col-span-2">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sm">✔ Quick Tips and Industry Insights</h4>
                            <p className="text-xs text-gray-400">Short-form videos providing useful advice can generate consistent engagement and brand visibility.</p>
                            <p className="text-xs text-gray-400">A professional Dubai Video Marketing Agency can help businesses turn simple content ideas into effective campaigns without requiring a large production budget.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">When Should You Hire a Video Production Company Dubai?</h2>
                    <div className="my-10 rounded-[2rem] overflow-hidden shadow-lg">
                        <img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional Flyer Distribution UAE" className="w-full h-auto object-cover" loading="eager" fetchpriority="high" />
                    </div>
                    <p className="text-base text-gray-600">
                        As your business grows, there may come a point when professional production becomes necessary.
                    </p>
                    <p className="font-bold text-gray-900 mt-6 mb-4">A professional Video Production Company Dubai can help with:</p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> Commercial advertisements.</li>
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> Corporate brand videos.</li>
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> Event coverage.</li>
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> Professional interviews.</li>
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> Product showcase videos.</li>
                        <li className="flex gap-4 items-start text-base text-gray-600"><Zap className="text-blue-600 shrink-0" aria-hidden="true" /> High-end social media campaigns.</li>
                    </ul>
                    <p className="text-base text-gray-600">
                        Professional production improves visual quality, storytelling, editing, and overall brand perception. However, businesses should first validate their video strategy using affordable content before investing heavily.
                    </p>
                    

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center uppercase">Conclusion</h2>
                    <p className="text-base text-gray-600 text-center max-w-2xl mx-auto">
                        Video marketing is one of the most cost-effective growth channels available to Dubai businesses today. You do not need a massive budget, expensive equipment, or a full production team to start seeing results.
                    </p>
                    <p className="text-base text-gray-600 text-center max-w-2xl mx-auto mt-6 mb-10">
                       By creating consistent content, focusing on customer value, and leveraging platforms like Instagram Reels, TikTok, and YouTube Shorts, businesses can increase visibility, generate leads, and build stronger customer relationships.
                    </p>
                    <p className="text-base text-gray-600 text-center max-w-2xl mx-auto mt-6 mb-10">
                       Whether you choose to create content in-house or work with a Dubai Video Marketing Agency, the businesses that start now will have a significant advantage over competitors still relying solely on traditional marketing methods. Video is no longer optional—it is becoming one of the most important tools for business growth in Dubai.
                    </p>
                    <p className="text-base text-gray-600 text-center max-w-2xl mx-auto mt-6 mb-10">
                       Ready to grow your brand with budget-friendly video marketing? Contact us today! Max Lead Advertising.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 md:p-16 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-5xl font-black mb-6">Boost Your Dubai Business With Affordable Video Marketing</h3>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                                Create engaging videos today and attract more customers without overspending on marketing. 
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-lg">
                                    <PhoneCall size={18} aria-hidden="true" /> +971 55 722 2605
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-950 transition-all flex items-center justify-center gap-3 shadow-lg" aria-label="Connect with Max Lead on LinkedIn">
                                    <Linkedin size={18} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-500/40 transition-all flex items-center justify-center gap-3 shadow-lg">
                                    <MessageSquare size={18} aria-hidden="true" /> WhatsApp Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- GRID FOR ALL BLOGS --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Strategy Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read Story <ArrowRight size={12} aria-hidden="true" /></span>
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

const ArrowRight = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);