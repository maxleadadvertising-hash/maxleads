import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User, LayoutGrid, Zap, FileText, MessageSquare, ExternalLink, ShoppingCart, BarChart, MousePointer2 } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Social media marketing for E-Commerce in Dubai",
    description: "Explore Dubai’s top social media marketing companies helping e-commerce brands boost visibility, increase sales, and maximize ROAS.",
    author: "MaxLead Strategy Team",
    date: "March 6, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["E-commerce", "Dubai SMM"],
    link: "/blog/social-media-marketing-for-ecommerce-in-dubai"
  },
  {
    id: 2,
    title: "Best Digital Marketing Agency in UAE",
    description: "Hiring an agency in 2026? Learn how to choose a performance partner that converts clicks into revenue.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Agency Guide"],
    link: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    id: 3,
    title: "7 Creative Flyer Distribution Ideas",
    description: "Discover unique strategies used by top flyer distribution companies in Dubai UAE to get real results.",
    author: "Creative Team",
    date: "March 4, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Strategy"],
    link: "/blog/creative-flyer-distribution-ideas-that-work-in-dubai/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "E-commerce SMM", icon: ShoppingCart, path: "/blog/social-media-marketing-for-ecommerce-in-dubai" },
  { name: "Performance Ads", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "ROI Strategy", icon: BarChart3, path: "/blog/best-flyer-distribution-services-uae/" }
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

export default function EcommerceSMMBlog() {
  const activePost = blogs[0];
  const canvaLink = "https://www.canva.com/design/DAHCU8pEjQY/FGWIdd48BfSRF4TR7iE94Q/edit?utm_content=DAHCU8pEjQY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

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
        <title>Struggling to scale your e-commerce brand in Dubai? Contact Us Today</title>
        <meta name="description" content="Explore Dubai’s top social media marketing companies helping e-commerce brands boost visibility, increase sales, and maximize ROAS through performance advertising." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/blog/social-media-marketing-for-ecommerce-in-dubai" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold mb-6 mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>E-Commerce Performance Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                        Best Social Media Marketing Companies for <span className="text-blue-600">E-commerce Brands</span> in Dubai, UAE
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
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group">
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
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
                    
                    <div className="mb-12">
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            Dubai has rapidly become one of the most competitive e-commerce markets in the Middle East. With high digital adoption, strong purchasing power, and a social-media-driven consumer base, brands must go beyond basic posting strategies to succeed.
                        </p>
                        <p className="text-base">
                            For e-commerce businesses, social media marketing is directly tied to revenue growth. From performance ads and retargeting funnels to influencer collaborations and conversion optimization, choosing the right agency can significantly impact your ROI.
                        </p>
                        <p className="text-base font-semibold text-gray-900 mt-6">
                            Below is a curated list of the best social media marketing companies for e-commerce brands in Dubai, UAE, starting with a leading performance-focused agency.
                        </p>
                    </div>

                    {/* Agency List */}
                    <div className="space-y-16">
                        
                        {/* 1. Max Lead Advertising */}
                        <div className="p-8 border border-gray-100 rounded-[2rem] bg-gray-50/50">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Max Lead Advertising</h2>
                            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:underline">
                                <ExternalLink size={16} /> View Agency Logo
                            </a>
                            <p className="font-bold text-gray-900">Why They Stand Out:</p>
                            <p className="text-base text-gray-600 mb-6">Max Lead Advertising is a performance-driven marketing agency in Dubai specializing in helping e-commerce brands scale through strategic social media advertising and lead generation campaigns.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "ROI-focused paid social media campaigns",
                                    "Meta (Facebook & Instagram) performance ads",
                                    "Conversion funnel strategy & retargeting",
                                    "Creative ad production for high engagement",
                                    "Data-driven optimization to maximize ROAS"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 text-sm font-semibold">
                                        <CheckCircle2 size={16} className="text-blue-600" /> {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm italic text-gray-500 mt-6">Max Lead Advertising works closely with e-commerce brands to build scalable ad systems that generate consistent sales and measurable growth.</p>
                        </div>

                        {/* 2. Digital Nexa */}
                        <div className="p-8 border border-gray-100 rounded-[2rem]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Digital Nexa</h2>
                            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:underline">
                                <ExternalLink size={16} /> View Agency Logo
                            </a>
                            <p className="font-bold text-gray-900">Why They Stand Out:</p>
                            <p className="text-base text-gray-600 mb-6">Nexa is one of Dubai’s well-established digital marketing agencies offering integrated marketing solutions, including social media management, paid advertising, and inbound marketing.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {["ROI-focused social media campaigns", "Facebook & Instagram paid advertising", "Lead generation funnels", "Data-driven performance tracking"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium"><Target size={14} className="text-blue-600" /> {item}</div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mt-6">Nexa is a strong option for medium to large e-commerce brands looking for structured growth strategies.</p>
                        </div>

                        {/* 3. Red Berries Digital */}
                        <div className="p-8 border border-gray-100 rounded-[2rem]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Red Berries Digital</h2>
                            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:underline">
                                <ExternalLink size={16} /> View Agency Logo
                            </a>
                            <p className="font-bold text-gray-900">Why They Stand Out:</p>
                            <p className="text-base text-gray-600 mb-6">Red Berries combines creative storytelling with digital performance marketing. They help brands build strong visual identities while optimizing campaigns for engagement and conversions.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {["Social media branding", "Paid social campaigns", "Influencer marketing", "Content production"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium"><Zap size={14} className="text-blue-600" /> {item}</div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mt-6">They are particularly suitable for fashion, beauty, and lifestyle e-commerce brands.</p>
                        </div>

                        {/* 4. Prism Digital */}
                        <div className="p-8 border border-gray-100 rounded-[2rem]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prism Digital</h2>
                            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:underline">
                                <ExternalLink size={16} /> View Agency Logo
                            </a>
                            <p className="font-bold text-gray-900">Why They Stand Out:</p>
                            <p className="text-base text-gray-600 mb-6">Prism Digital focuses heavily on performance marketing and measurable growth strategies. Their approach revolves around analytics, A/B testing, and scaling ad campaigns profitably.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {["Paid social media ads", "Conversion optimization", "Retargeting strategies", "Sales funnel management"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium"><BarChart size={14} className="text-blue-600" /> {item}</div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mt-6">Ideal for e-commerce brands focused on scaling paid advertising with clear ROI tracking.</p>
                        </div>

                        {/* 5. Chain Reaction */}
                        <div className="p-8 border border-gray-100 rounded-[2rem]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Chain Reaction</h2>
                            <a href={canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:underline">
                                <ExternalLink size={16} /> View Agency Logo
                            </a>
                            <p className="font-bold text-gray-900">Why They Stand Out:</p>
                            <p className="text-base text-gray-600 mb-6">Chain Reaction is known across the Middle East for delivering high-performance digital marketing strategies. They specialize in driving online revenue through social media and paid media campaigns.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {["Advanced paid social campaigns", "Audience segmentation & research", "Influencer collaborations", "Growth marketing strategy"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium"><TrendingUp size={14} className="text-blue-600" /> {item}</div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mt-6">Best suited for established e-commerce brands with aggressive expansion goals.</p>
                        </div>

                    </div>

                    <div className="my-16 bg-blue-50 p-10 rounded-[2rem] border border-blue-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">What to Look for in a Social Media Marketing Company for E-commerce</h2>
                        <div className="space-y-6">
                            {[
                                { t: "1. Proven E-commerce Case Studies", d: "Look for agencies that show actual revenue growth and ROAS results — not just likes and followers." },
                                { t: "2. Paid Advertising Expertise", d: "Organic reach is limited. A strong agency must specialize in Meta Ads, TikTok Ads, and performance-based campaigns." },
                                { t: "3. Data & Reporting Transparency", d: "Clear reporting, tracking, and continuous optimization are essential for scaling." },
                                { t: "4. Creative + Conversion Strategy", d: "Strong visuals attract attention — but conversion-focused ad strategy drives real sales." },
                                { t: "5. Understanding of UAE Market", d: "Knowledge of local buying behavior, peak seasons (Ramadan, Eid, DSF), and audience targeting in Dubai is critical." }
                            ].map((point, idx) => (
                                <div key={idx}>
                                    <h4 className="font-bold text-gray-900 mb-1">{point.t}</h4>
                                    <p className="text-sm text-gray-600">{point.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
                    <p className="text-base">
                        Dubai’s e-commerce landscape is more competitive than ever. With customers making buying decisions based on what they see on Instagram, TikTok, and paid ads, brands can no longer rely on basic content posting alone. Success today depends on performance-driven strategies, creative ad execution, precise targeting, and continuous optimization.
                    </p>
                    <p className="text-base">
                        Choosing the right social media marketing partner is not just a marketing decision — it’s a growth decision. The right agency will help you reduce customer acquisition costs, improve ROAS, build brand authority, and create scalable systems that generate consistent sales.
                    </p>
                    <p className="text-base">
                        For e-commerce brands that want measurable results, partnering with a performance-focused agency like <strong>Max Lead Advertising</strong> can provide the strategy, creativity, and data-backed execution needed to dominate the Dubai market.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 md:p-16 rounded-[3rem] mt-16 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-5xl font-black mb-6">Scale Your E-commerce Store</h3>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                                Struggling to scale your e-commerce brand in Dubai? Partner with the performance experts at Max Lead.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-3">
                                    <MousePointer2 size={18} /> Contact Us Today
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-500/40 transition-all flex items-center gap-3">
                                    <MessageSquare size={18} /> WhatsApp Experts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- RELATED BLOGS --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-black text-gray-900 mb-10">Strategic Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase tracking-wider bg-white/95 px-3 py-1 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={12}/></span>
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

const ArrowRight = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);