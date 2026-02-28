import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User, Printer, LayoutGrid, Zap, FileText, MessageSquare, ArrowRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';
import { Helmet } from "react-helmet"; // Added Helmet


/* --- FULL STRATEGIC BLOG DATA (11 POSTS MAPPED) --- */
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
  }
];

/* --- UPDATED CATEGORIES --- */
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
  { name: "Door Hanger Marketing", icon: Printer, path: "/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" }
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

  const handleCategoryClick = (path) => {
    window.location.href = path;
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/+971557222605", "_blank");
  };

  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
    <Helmet><link rel="canonical" href="https://www.maxleadadvertising.com/blog/how-choose-best-digital-marketing-agency-uae/" /></Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION (REDUCED SIZES) --- */}
        <section className="relative pt-28 pb-12 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Strategy Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        Why Businesses in UAE Still Rely on <span className="text-blue-600">Flyer Distribution</span> in the Digital Age
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-xs mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR (WRAPPED / NO SCROLL) --- */}
        <section className="py-8 px-6 bg-white border-b border-gray-50">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
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
                <div className="prose prose-lg prose-blue max-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-12">
                        <div className="flex items-center gap-3 text-blue-600 mb-6">
                            <FileText className="w-6 h-6" />
                            <span className="font-bold tracking-[0.2em] uppercase text-xs">Industry Deep-Dive</span>
                        </div>
                        <p className="text-lg font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            In today’s world, almost everything has gone digital. Businesses are investing heavily in social media ads, Google ads, and online campaigns to reach customers. Yet, despite all this digital growth, flyer distribution services continue to play a powerful role in marketing across the UAE.
                        </p>
                        <p className="text-base">From local retail stores and restaurants to real estate developers and service providers, many businesses still rely on door to door flyer distribution and leaflet distribution to create awareness, generate enquiries, and drive footfall. This is not because digital marketing doesn’t work — it’s because offline marketing still works exceptionally well when used the right way.</p>
                        <p className="text-base">So why do businesses in the UAE continue to trust flyer distribution even in the digital age? Let’s discuss it now.</p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">The UAE Market Is Built for Offline Visibility</h3>
                    <p className="text-base">The UAE is unique when it comes to consumer behavior. People here spend a significant amount of time outside their homes — commuting, shopping, dining, visiting malls, and attending events. Residential communities, commercial areas, and retail zones are always active.</p>
                    <p className="text-base">This environment makes flyer distribution in UAE extremely effective. Unlike online ads that disappear with one scroll, flyers stay physically present. They reach people:</p>
                    <ul className="grid grid-cols-2 gap-2 list-none p-0 text-sm font-bold text-gray-800">
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Inside their homes</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> At their workplaces</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> In shopping areas</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> During daily routines</li>
                    </ul>
                    <p className="text-base">For businesses that depend on local customers, physical visibility still matters.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Flyer Distribution Creates Direct Local Reach</h3>
                    <p className="text-base">One of the biggest advantages of door to door flyer distribution is local targeting. Digital ads often reach a broad audience, including people who may not be relevant to your business. Flyer distribution works differently. With proper planning, businesses can:</p>
                    <ul className="space-y-1 text-base text-gray-600">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Target specific residential communities</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Focus on villas, apartments, or gated societies</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Choose commercial zones or retail clusters</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Reach customers based on location and lifestyle</li>
                    </ul>
                    <p className="text-base">This makes door to door leaflet distribution highly effective for local promotions, store openings, offers, and service-based businesses.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Physical Flyers Build Trust Faster</h3>
                    <p className="text-base">In a market filled with online ads, users have become cautious. Many people scroll past ads without reading them or block them entirely. Flyers feel different. A printed flyer:</p>
                    <ul className="grid grid-cols-2 gap-4 text-xs list-none p-0 my-6">
                        <li className="border border-gray-100 p-3 rounded-lg font-bold">• Feels more personal</li>
                        <li className="border border-gray-100 p-3 rounded-lg font-bold">• Looks more intentional</li>
                        <li className="border border-gray-100 p-3 rounded-lg font-bold">• Creates a sense of legitimacy</li>
                        <li className="border border-gray-100 p-3 rounded-lg font-bold">• Stays with the customer longer</li>
                    </ul>
                    <p className="text-base">When people receive a flyer at their home or workplace, it often builds more trust than a random digital ad. This is one reason why flyer distribution services continue to deliver results in the UAE.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">High Visibility Without Digital Fatigue</h3>
                    <p className="text-base">Digital marketing is powerful, but it also comes with challenges: Ad fatigue, Rising ad costs, Ad blockers, Limited organic reach. Flyer distribution does not suffer from these problems. A flyer placed at the right location is:</p>
                    <div className="flex flex-wrap gap-2 my-4">
                        {["Always visible", "Not skippable", "No algorithms", "Cost-effective"].map(li => (
                            <span key={li} className="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded-md font-bold uppercase tracking-wider">{li}</span>
                        ))}
                    </div>
                    <p className="text-base">This makes flyer distribution a reliable option for businesses that want consistent visibility without depending entirely on digital platforms.</p>

                    <div className="my-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2 text-base">
                            <BarChart3 className="w-4 h-4" /> The Modern UAE Marketing Funnel
                        </h4>
                        <p className="text-sm text-blue-800 italic">The right agency manages this entire journey, ensuring no lead falls through the cracks from offline touchpoints to digital conversion.</p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Flyer Distribution Supports Quick Promotions</h3>
                    <p className="text-base">Many UAE businesses run time-sensitive campaigns such as: Weekend offers, Festival discounts, Store launches, Event promotions. For such campaigns, flyer distribution services in Dubai, UAE deliver faster local awareness than most digital channels. A well-designed flyer distributed in the right areas can:</p>
                    <ul className="space-y-1 text-base text-gray-600">
                        <li className="flex items-center gap-2 font-bold"><Zap size={14} className="text-blue-600" /> Drive immediate footfall</li>
                        <li className="flex items-center gap-2 font-bold"><Zap size={14} className="text-blue-600" /> Generate same-day enquiries</li>
                        <li className="flex items-center gap-2 font-bold"><Zap size={14} className="text-blue-600" /> Support short-term promotions</li>
                    </ul>
                    <p className="text-base">This is especially useful for restaurants, retail stores, clinics, salons, and event organizers.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Door to Door Flyer Distribution Works Across Industries</h3>
                    <p className="text-base">One major reason flyer distribution remains relevant is its versatility. Almost every industry in the UAE benefits from it, including:</p>
                    <div className="flex flex-wrap gap-2 py-4">
                        {["Retail", "Restaurants", "Real Estate", "Healthcare", "Education", "Events", "Local Services"].map(i => (
                            <span key={i} className="text-[10px] font-black uppercase tracking-widest border border-gray-100 px-3 py-1 rounded-md">{i}</span>
                        ))}
                    </div>
                    <p className="text-base">Because flyers are customizable, businesses can tailor messaging, offers, and designs based on their target audience.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Flyer Distribution Is Cost-Effective Compared to Mass Media</h3>
                    <p className="text-base">Traditional advertising like TV, radio, and newspapers can be expensive and difficult to track. Flyer distribution offers a more affordable alternative with better local targeting. When executed professionally, flyer distribution services allow businesses to:</p>
                    <ul className="list-none p-0 text-sm font-bold text-gray-700">
                        <li>• Control distribution areas</li>
                        <li>• Manage budget efficiently</li>
                        <li>• Avoid unnecessary exposure</li>
                        <li>• Focus on high-potential locations</li>
                    </ul>
                    <p className="text-base">This makes it ideal for small and medium-sized businesses in the UAE.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">The Power of Combining Flyer Distribution with Digital Marketing</h3>
                    <p className="text-base">Flyer distribution works best when it is part of a bigger marketing system. Many successful UAE businesses use flyers to create initial awareness, drive people to WhatsApp, websites, or social media, and support digital campaigns with offline visibility. For example:</p>
                    <div className="space-y-3 py-6">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm font-bold">A flyer includes a QR code linking to a website</div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm font-bold">A printed offer drives WhatsApp enquiries</div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm font-bold">Offline distribution increases recall for online ads</div>
                    </div>
                    <p className="text-base">This offline + online combination increases overall campaign effectiveness.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Professional Execution Makes All the Difference</h3>
                    <p className="text-base">Not all flyer distribution delivers results. Random distribution without planning often leads to wasted effort. Professional flyer distribution companies in Dubai UAE focus on: Area selection, Audience relevance, Ethical distribution practices, Supervised execution, and Campaign planning. This structured approach ensures flyers reach the right people, not just more people.</p>

                    <div className="my-12 p-8 bg-gray-900 rounded-[2rem] text-white">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Why Businesses Choose Professional Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Better targeting & Higher response rates</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Brand-safe practices & Consistent coverage</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Measurable impact through performance tracking</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Conclusion: Flyer Distribution Is Still Relevant — When Done Right</h3>
                    <p className="text-base">Despite the rise of digital marketing, flyer distribution remains a powerful and reliable advertising method in the UAE. It delivers local reach, builds trust, supports quick promotions, and works across industries. In the digital age, flyer distribution is not outdated — it has simply evolved. When combined with strategic planning, quality printing, and professional execution, flyer distribution services in UAE continue to deliver real business results. For businesses that want visibility, response, and local impact, flyer distribution remains a smart marketing choice.</p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[2rem] mt-12 text-white text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">Dominate the UAE Market in 2026</h3>
                        <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                            Combine offline distribution with data-driven digital strategies. Contact our team to start your ROI-focused campaign today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm">
                                Contact Our Team
                            </button>
                            <button onClick={openWhatsapp} className="bg-blue-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-400 transition-all text-sm">
                                WhatsApp: +971 55 722 2605 
                            </button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- COMPACT BLOG GRID --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Related Strategy Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{blog.title}</h4>
                                    <p className="text-gray-500 text-[11px] line-clamp-2 mb-4">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[9px] font-black uppercase text-gray-400">
                                        <span>{blog.readTime}</span>
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