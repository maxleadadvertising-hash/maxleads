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
    document.title = "AI Marketing in Dubai: The Future of Digital Growth for Businesses";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Explore how AI marketing is transforming businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE with smarter, data-driven strategies.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/ai-marketing-dubai-smart-businesses-2026/");
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
                        AI Marketing in Dubai 2026:<span className="text-blue-600"> Why Smart Businesses Are Moving Beyond Traditional Digital Strategies </span> 
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
                            Businesses in Dubai are rapidly adopting AI marketing strategies in 2026 to stay ahead in a competitive market. Traditional digital marketing alone is no longer enough, as companies now use AI tools to automate campaigns, analyze customer behavior, and create personalized marketing experiences.
                        </p>
                        <p className="text-base text-gray-600">From AI-powered chatbots to smart advertising and predictive analytics, businesses are improving customer engagement and marketing performance more effectively.</p>
                        </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Introduction: The Shift Towards AI Marketing in Dubai</h3>
                    <p className="text-base">Dubai is rapidly becoming a global hub for innovation, and marketing is no exception. Businesses across industries are shifting toward AI-driven strategies to stay competitive in a fast-evolving digital landscape. From personalized customer experiences to data-driven decision-making, AI is transforming how brands connect with their audiences in the UAE.</p>
                  
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">What Is AI Marketing?</h3>
                    <p className="text-base">AI marketing is the use of artificial intelligence to improve and automate marketing activities. It uses data, machine learning, and smart algorithms to understand customer behavior and make faster, more effective decisions. With AI, businesses can quickly analyze large amounts of data, personalize content, and create highly targeted campaigns that reach the right audience at the right time. Common examples include chatbots, automated email marketing, and product recommendation systems. Overall, AI marketing helps companies save time, reduce costs, and achieve better results by making their marketing strategies more efficient and data-driven.</p>                

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Why Businesses Are Rapidly Adopting AI</h3>
                    <p className="text-base">Companies in Dubai are embracing AI marketing for several practical and strategic reasons:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm list-none p-0 my-6">
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Data-Driven Insights:</strong> AI tools analyze large volumes of customer data to uncover patterns, helping businesses make smarter marketing decisions.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Personalization at Scale:</strong> AI enables brands to deliver tailored content, recommendations, and ads based on user behavior.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Automation & Efficiency:</strong>  Tasks like email marketing, chatbots, and ad optimization are automated, saving time and reducing costs.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Improved Customer Experience:</strong> AI-powered chatbots and support systems provide instant responses, enhancing customer satisfaction.</li>
                        <li className="border border-gray-100 p-4 rounded-xl"><strong>Higher ROI:</strong> With better targeting and predictive analytics, businesses can optimize campaigns and maximize returns.</li>
                    </ul>
                   
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Growth of Digital + AI in the UAE Market</h3>
                    <p className="text-base">The UAE is rapidly advancing in digital transformation, with AI playing a key role in shaping modern marketing. Cities like Dubai, Sharjah, and Ajman are seeing increased adoption of digital technologies, supported by strong infrastructure and government initiatives such as the UAE Artificial Intelligence Strategy 2031.</p>
                    <p className="text-base">With high internet and smartphone usage, consumers in the UAE rely heavily on digital platforms, driving growth in e-commerce and online marketing. Businesses are using AI to better understand customer behavior, personalize experiences, and improve campaign performance.</p>
                  
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">Why Traditional Digital Strategies Are No Longer Enough</h2>
                    <div className="space-y-6 mt-8">
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Manual Campaigns vs Automation:</h3>
                            <p className="text-base text-gray-600">Traditional marketing relies heavily on manual work, which is time-consuming and less efficient. AI-driven automation allows businesses to run smarter campaigns, optimize in real time, and reduce human effort.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Limited Targeting & Slower Results:</h3>
                            <p className="text-base text-gray-600">Older strategies often use broad targeting, leading to less accurate results. AI enables precise audience targeting, faster data analysis, and quicker campaign adjustments for better performance.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Increasing Competition in Dubai:</h3>
                            <p className="text-base text-gray-600">With more businesses going digital, competition is higher than ever. Companies using AI gain a competitive edge through personalization, speed, and data-driven decision-making.</p>
                        </div>
                    </div>


                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-10">AI Marketing vs Traditional Digital Marketing: Key Differences</h2>
                    <div className="space-y-6 mt-8">
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Speed:</h3>
                            <p className="text-base text-gray-600">AI marketing works in real time, analyzing data and optimizing campaigns instantly, while traditional marketing often requires manual updates and slower adjustments.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Accuracy:</h3>
                            <p className="text-base text-gray-600">AI uses data and predictive analytics to target the right audience more precisely, whereas traditional methods rely on broader assumptions and general targeting.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Cost:</h3>
                            <p className="text-base text-gray-600">Although AI tools may require initial investment, they reduce long-term costs through automation and efficiency. Traditional marketing often involves higher ongoing costs due to manual work and trial-and-error approaches.</p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3"><HelpCircle className="text-blue-500 w-5 h-5" /> Scalability:</h3>
                            <p className="text-base text-gray-600">AI marketing easily scales campaigns across multiple channels and audiences, while traditional strategies can struggle to expand efficiently without increasing resources and effort.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Conclusion: How AI Is Shaping the Future of Marketing</h3>
                    <p className="text-base mb-10">AI is transforming marketing into a smarter and more efficient process. In competitive markets like Dubai, businesses can no longer rely only on traditional strategies to keep up with rising customer expectations.</p>
                    <p className="text-base mb-10">By adopting AI marketing, companies can make faster decisions, target the right audience, and deliver more personalized experiences. It reduces manual work, improves campaign performance, and helps businesses adapt quickly to market changes.</p>
                    <p className="text-base mb-10">As digital growth continues, AI is becoming essential for brands that want to stay competitive, innovate, and achieve long-term success. Ready to grow with AI-driven strategies? Contact Max Lead Advertising Expert today to take your marketing to the next level.</p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-12 rounded-3xl mt-10 text-white relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Transform Your Business with AI Marketing in Dubai</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                                Boost customer engagement, automate campaigns, and grow faster with advanced AI marketing solutions designed for modern businesses in Dubai and across the UAE. 
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