import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, MapPin, CheckCircle2, MessageSquare, Clock, User, BarChart3, FileText, TrendingUp, LayoutGrid, Zap, ArrowRight, PhoneCall,DollarSign } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';
import { Helmet } from "react-helmet";

/* --- FULL STRATEGIC BLOG DATA (11 POSTS) --- */
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
    title: "Social Media Marketing Services Cost in UAE",
    description: "Explore social media marketing services cost in the UAE and learn what factors influence pricing and growth strategy.",
    author: "MaxLead Strategy Team",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Digital Marketing"],
    link: "/socialmediamarketingservicescost/"
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
  { name: "SMM Cost Guide", icon: DollarSign, path: "/socialmediamarketingservicescost/" }
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

export default function SocialMediaCostBlog() {
  const activePost = blogs[10];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/971522286401", "_blank"); };
  const goToContact = () => { window.location.href = "/contact"; };

  return (
    <>
      <Helmet>
        <title>Social Media Marketing Services Cost in UAE | Complete 2026 Guide</title>
        <meta name="description" content="Explore social media marketing services cost in the UAE, from Dubai to Sharjah and Ajman, and learn what factors influence pricing and growth strategy. Contact Us Today!" />
        <meta name="keywords" content="social media marketing services cost" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-12 px-6 bg-[#f8fafc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <TrendingUp className="w-3 h-3" />
                        <span>SMM Pricing Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        How much do social media marketing services cost in the UAE?
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1"><Clock size={14} /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User size={14} /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR (WRAPPED NO SCROLL) --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all group">
                  <cat.icon size={14} className="text-gray-400 group-hover:text-white" />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
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
                        <p className="text-base text-gray-600">
                            Social media marketing has become one of the most important growth channels for businesses across the UAE. From startups in Dubai to established companies in Abu Dhabi, and growing businesses in Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, brands rely heavily on platforms like Instagram, Facebook, TikTok, and LinkedIn to attract customers and generate leads.
                        </p>
                        <p className="text-base text-gray-600">
                            As competition increases across all emirates, understanding social media marketing services cost becomes a key step in planning your marketing budget. Whether you’re a small business in Ajman or an expanding brand in Dubai, knowing what affects social media marketing services cost helps you make smarter investment decisions.
                        </p>
                        <p className="text-base text-gray-600">
                            If you're considering hiring a social media marketing agency, one of the first questions you’ll ask is: How much does it cost? The answer depends on several factors — and understanding what influences social media marketing services cost will help you choose the right strategy for sustainable growth anywhere in the UAE.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Why Social Media Marketing Services Cost Varies Across the UAE</h2>
                    <p className="text-base text-gray-600">
                        Instead of a fixed price, social media marketing services are usually customized based on your business needs. Here are the main factors that influence the cost:
                    </p>

                    <div className="space-y-8 mt-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">1. Scope of Work</h3>
                            <p className="text-base text-gray-600">The more services included, the higher the investment. Some businesses only need content posting, while others require full-scale strategy, lead generation campaigns, and performance tracking.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">2. Number of Platforms</h3>
                            <p className="text-base text-gray-600">Managing one platform is very different from managing multiple platforms such as Instagram, Facebook, LinkedIn, YouTube, Snapchat and TikTok simultaneously. Each platform requires unique content and optimization strategies.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">3. Content Creation Level</h3>
                            <p className="text-base text-gray-600">Basic graphic posts require less effort compared to:</p>
                            <ul className="list-disc pl-10 space-y-1 text-sm text-gray-600 font-medium">
                                <li>Professional photography</li>
                                <li>High-quality video production</li>
                                <li>Reels and short-form video content</li>
                                <li>On-site content shoots</li>
                            </ul>
                            <p className="text-base text-gray-600 mt-2">The complexity of content directly impacts overall service cost.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">4. Paid Advertising Management</h3>
                            <p className="text-base text-gray-600">Running paid ads on Meta (Facebook & Instagram) or TikTok requires strategy, testing, and ongoing optimization. Businesses focusing on lead generation and sales typically invest more in ad management services.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">5. Community Management</h3>
                            <p className="text-base text-gray-600">Responding to messages, comments, inquiries, and customer feedback requires daily monitoring. Active engagement improves brand reputation but also increases service involvement.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">6. Agency Experience & Expertise</h3>
                            <p className="text-base text-gray-600">Established agencies with proven results, case studies, and experienced teams typically charge more than freelancers. However, they often deliver stronger strategies and measurable ROI.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-10">Types of Social Media Marketing Services in the UAE</h3>
                    <p className="text-base text-gray-600">Most agencies offer different service levels depending on your goals:</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                            <h4 className="font-bold text-blue-600 text-sm mb-2 uppercase tracking-wide">Basic Management</h4>
                            <p className="text-xs text-gray-600 m-0">Designed for businesses that want to maintain an active online presence with regular posts and simple engagement.</p>
                        </div>
                        <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                            <h4 className="font-bold text-blue-600 text-sm mb-2 uppercase tracking-wide">Growth-Focused</h4>
                            <p className="text-xs text-gray-600 m-0">Includes strategic planning, optimized content, performance tracking, and audience targeting to increase engagement and reach.</p>
                        </div>
                        <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                            <h4 className="font-bold text-blue-600 text-sm mb-2 uppercase tracking-wide">Performance & Leads</h4>
                            <p className="text-xs text-gray-600 m-0">Focused on conversions, sales, and measurable business results through paid advertising, funnel strategies, and continuous optimization.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Freelancers vs Agencies: What’s the Difference?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                            <h4 className="font-bold text-gray-900 mb-3">Freelancers</h4>
                            <ul className="list-none p-0 space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Suitable for small businesses</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Lower operational structure</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Limited scalability</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                            <h4 className="font-bold text-gray-900 mb-3">Agencies</h4>
                            <ul className="list-none p-0 space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Full team (strategist, designer, etc)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Advanced tools and reporting systems</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Long-term growth strategies</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-base text-gray-600">Your choice depends on your business goals and growth expectations.</p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Is Your Business Missing Out on Social Media Growth in the UAE?</h2>
                    <p className="text-base text-gray-600">
                        Absolutely. The UAE has one of the highest social media usage rates in the world. Consumers actively research brands online before making purchasing decisions. A strong social media presence builds trust, credibility, and visibility.
                    </p>
                    <p className="text-base text-gray-600 font-medium">When done correctly, social media marketing can:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                        {[
                          "Increase brand awareness", "Generate consistent leads", 
                          "Improve customer engagement", "Strengthen brand authority", 
                          "Drive measurable revenue growth"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl">
                            <Zap size={16} className="text-blue-600 shrink-0" />
                            <span className="text-sm font-bold text-gray-800">{item}</span>
                          </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Conclusion</h2>
                    <p className="text-base text-gray-600">
                        Understanding social media marketing services cost in the UAE is not about finding the cheapest option — it’s about finding the right strategy for your business goals. Whether you operate in Dubai, Abu Dhabi, Sharjah, Ajman, or any other emirate, your investment should align with your growth objectives, competition level, and target audience. Max Lead Advertising helps businesses align their strategy with clear performance goals.
                    </p>
                    <p className="text-base text-gray-600">
                        The cost varies because every business is different. Factors like content quality, number of platforms, advertising strategy, and agency expertise all play a role in determining the final investment. What matters most is choosing a results-driven approach that focuses on real engagement, qualified leads, and measurable returns.
                    </p>
                    <p className="text-base text-gray-600 mb-10">
                        In a highly competitive digital market like the UAE, a strong social media presence is no longer optional — it’s essential. When done strategically, social media marketing becomes a powerful engine for brand visibility, customer trust, and long-term revenue growth with the support of Max Lead Advertising.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-3xl mt-12 text-white relative overflow-hidden text-center shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Growth Strategy</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                                Max Lead Advertising helps businesses align their social media investment with clear performance goals and measurable ROI.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2">
                                   <PhoneCall size={16} /> Consultation
                                </button>
                                <button onClick={openWhatsapp} className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-all text-sm flex items-center justify-center gap-2">
                                    <MessageSquare size={16} /> WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- DYNAMIC RELATED BLOGS GRID --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Related Strategy Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-blue-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <ArrowRight size={14} className="text-blue-600" />
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