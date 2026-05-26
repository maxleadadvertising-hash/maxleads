import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User, FileText, MessageSquare, Zap, PhoneCall, Linkedin, LayoutGrid, HelpCircle } from "lucide-react"; // Added Linkedin icon
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
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
    link: "/blog/best-digital-marketing-agency-uae/"
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
    link: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/"
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
    link: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/"
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
    link: "/blog/best-locations-for-flyer-distribution-in-the-uae/"
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
    link: "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/"
  },
  {
    id: 8,
    title: "What is the Role of a Flyer Distributor?",
    description: "More than just a simple job. Learn how professional distributors act as brand ambassadors and the final bridge to your customer.",
    author: "HR Director",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/7787200/pexels-photo-7787200.jpeg",
    tags: ["Operations", "Brand"],
    link: "/blog/what-is-the-role-of-a-flyer-distributor/"
  },
  {
    id: 9,
    title: " How to Increase Sales with Flyer Distribution: 10 Proven Tips",
    description: "Unlock growth with these 10 proven tips. Learn how to craft irresistible offers and use timing to drive immediate revenue.",
    author: "Sales Head",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/5849581/pexels-photo-5849581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Sales", "Growth"],
    link: "/blog/how-to-increase-sales-with-flyer-distribution/"
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
    link: "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/"
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
    link: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Digital Marketing", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Dos and Don'ts", icon: CheckCircle2, path: "/blog/dos-and-donts-of-flyer-distribution-in-uae/" },
  { name: "Strategy", icon: BarChart3, path: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Trends", icon: Zap, path: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { name: "Locations", icon: MapPin, path: "/blog/best-locations-for-flyer-distribution-in-the-uae/" },
  { name: "Increase Sales", icon: FileText, path: "/blog/how-to-increase-sales-with-flyer-distribution/" },
  { name: "Online & Offline", icon: MessageSquare, path: "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/" }
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

export default function DigitalMarketingBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // Inject SEO Meta Tags manually
    document.title = "Flyer Distribution in UAE: Why It Still Works in 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Discover why UAE businesses still rely on flyer distribution in the digital age. Reach your local audience effectively with targeted, affordable leaflet distribution.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/why-uae-businesses-rely-on-flyer-distribution/");
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
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Strategy Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                        Top Digital Marketing Strategies for <span className="text-blue-600"> Real Estate Companies in Dubai </span> 
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 transition-colors hover:text-blue-600 cursor-pointer" onClick={openLinkedin}><Linkedin className="w-4 h-4" /> Connect on LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR (WRAPPED NO SCROLL) --- */}
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
                        <div className="flex items-center gap-3 text-blue-600 mb-6">
                            <FileText className="w-5 h-5" />
                            <span className="font-black tracking-[0.2em] uppercase text-[10px]">Industry Deep-Dive</span>
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            Dubai’s real estate market continues to grow rapidly, attracting investors, homeowners, and businesses from around the world. With increasing competition among property developers and real estate agencies, traditional marketing methods alone are no longer enough. Today, buyers search online before making property decisions, making digital marketing one of the most effective ways to generate leads and increase property sales.
                        </p>
                        <p className="text-base text-gray-600">Implementing the right digital strategies can help real estate companies improve online visibility, attract qualified buyers, and build long-term customer relationships. Here are some of the top digital marketing strategies that real estate businesses in Dubai should focus on.</p>
                        </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">1. Focus on SEO for Long-Term Visibility</h3>
                    <p className="text-base">Search Engine Optimization (SEO) is one of the most important strategies in digital marketing for real estate businesses. SEO helps your website rank higher on Google when potential buyers search for properties in Dubai.</p>
                    <p className="text-base">By targeting location-based and industry-specific keywords, real estate companies can attract organic traffic from users actively looking for properties online.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm list-none p-0 my-6">
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Optimize Property Listings with Keywords:</strong> Using relevant keywords in property titles, descriptions, and meta tags helps your listings rank higher on Google search results. This improves visibility and attracts buyers actively searching for properties in Dubai.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Create Blogs About Dubai Real Estate Trends:</strong> Publishing blogs about market updates, investment opportunities, and property trends helps establish your business as an industry expert. Regular blog content also improves SEO and increases website traffic.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Improve Website Speed and Mobile Responsiveness:</strong> A fast and mobile-friendly website provides a better user experience for visitors browsing properties online. Optimized websites reduce bounce rates and increase the chances of generating quality inquiries.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Build Organic Growth That Lasts:</strong> Strong SEO helps your business stay visible on search engines and attract the right audience over time. With optimized content, keywords, and technical strategy, your brand gains consistent traffic, better rankings, and long-term online growth.</li>
                    </ul>
                   
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">2. Invest in Google Ads for Faster Lead Generation</h3>
                    <p className="text-base">Google Ads is one of the fastest ways for real estate companies in Dubai to reach potential buyers actively searching for properties online. With targeted advertising, businesses can appear at the top of Google search results for keywords related to luxury apartments, villas, commercial properties, and new property launches. This makes Google Ads highly effective for real estate lead generation Dubai campaigns.</p>
                    <p className="text-base">Real estate businesses can also target specific audiences based on location, interests, and search behavior to attract high-quality inquiries. Using strong keywords, attractive ad copy, and optimized landing pages helps improve click-through rates and increases the chances of converting visitors into potential buyers and investors.</p>
                  
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">3. Use Social Media Marketing to Showcase Properties</h3>
                    <p className="text-base">Social media platforms have become essential for property marketing in Dubai. Platforms such as Instagram, Facebook, LinkedIn, and TikTok allow real estate businesses to visually showcase properties and connect with potential buyers.</p>
                    <p className="text-base">Social media marketing for real estate is especially effective because property buyers are highly influenced by visuals, videos, and customer engagement.</p>
                    <p className="text-base">Instagram Reels and TikTok videos can significantly increase reach and engagement. High-quality visuals combined with targeted advertising can generate more inquiries and website visits.</p>
                    <ul className="space-y-2 text-base text-gray-600">
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Property walkthrough videos</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Drone footage of luxury villas</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Client testimonials</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Dubai community highlights</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Real estate investment tips</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Behind-the-scenes construction updates</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">4. Create Professional Video Marketing Content</h2>
                    <p className="text-base">Video marketing is becoming one of the most powerful tools in digital marketing for real estate. Buyers prefer video tours because they provide a better understanding of the property layout, design, and surroundings.</p>
                    <p className="text-base">Professional property videos help build trust and improve engagement across websites and social media platforms.</p>
                    <div className="space-y-6 mt-8">
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Virtual Property Tours</h3>
                            <p className="text-base text-gray-600">Virtual property tours allow buyers to explore properties online from anywhere in the world. These interactive videos improve customer engagement and help generate qualified real estate inquiries.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Drone Videos</h3>
                            <p className="text-base text-gray-600">Drone videos showcase the exterior, surroundings, and location advantages of a property in a visually appealing way. High-quality aerial footage creates a premium impression and attracts potential buyers faster.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Agent Introduction Videos</h3>
                            <p className="text-base text-gray-600">Agent introduction videos help build trust and create a personal connection with potential clients. Professional videos showcasing expertise and market knowledge can improve credibility and customer confidence.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">5. Build Trust Through Online Reviews</h2>
                    <p className="text-base mb-6">Customer trust is one of the most important factors in the Dubai real estate market. Positive online reviews and genuine client testimonials help potential buyers feel more confident when choosing a real estate company or property developer.</p>
                    <p className="text-base mb-6">Strong reviews not only improve brand reputation but also increase online visibility and influence purchasing decisions. Businesses with high ratings and authentic feedback are more likely to attract qualified buyers and generate consistent inquiries.</p>
                    <ul className="space-y-4 my-6 list-none p-0">
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
                            <span className="text-gray-700"><strong>Google</strong> Google reviews help improve local search rankings and increase credibility for real estate businesses. Positive ratings also encourage potential buyers to contact your agency with greater confidence.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
                            <span className="text-gray-700"><strong>Facebook</strong> Facebook reviews and recommendations build social proof and improve customer engagement online. Buyers often check social media feedback before making property inquiries or investment decisions.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
                            <span className="text-gray-700"><strong>Property Listing Platforms</strong> Reviews on property portals and listing websites help establish trust among serious buyers searching for properties in Dubai. Positive client experiences can directly influence lead generation and conversion rates.</span>
                        </li>
                         <li className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
                            <span className="text-gray-700"><strong>Video Testimonials</strong> Video testimonials create a more personal and authentic connection with potential buyers. Real client experiences shared through video can significantly improve trust, credibility, and customer confidence.</span>
                        </li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Conclusion</h3>
                    <p className="text-base mb-10">The Dubai real estate market is highly competitive, and businesses need strong online visibility to succeed. Implementing effective digital marketing strategies such as SEO, Google Ads, video marketing, and social media campaigns can help real estate companies generate quality leads and increase property sales.</p>
                    <p className="text-base mb-10">By investing in digital marketing for real estate, businesses can improve brand awareness, attract international investors, and stay ahead of competitors in the growing UAE property market.</p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-12 rounded-3xl mt-10 text-white relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Grow Your Real Estate Business Faster</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                                Boost property inquiries and attract qualified buyers with result-driven digital marketing solutions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center gap-2">
                                    <PhoneCall className="w-4 h-4" /> Go to Contact Page
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <Linkedin className="w-4 h-4" /> Max Lead LinkedIn
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm">
                                    WhatsApp: +971 55 722 2605 
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
                    <h2 className="text-3xl font-black text-gray-900 mb-10">Strategic Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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

const ArrowRight = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);