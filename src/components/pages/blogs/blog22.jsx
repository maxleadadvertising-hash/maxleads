import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User,FileText, LayoutGrid, Zap, ArrowRight, PhoneCall, MessageSquare, Linkedin } from "lucide-react"; 
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

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
    // Injecting SEO Meta Tags manually since Helmet is removed
    document.title = "Affordable Flyer Distribution | Boost Sales with Cost-Effective Marketing";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Drive more traffic & sales with affordable flyer distribution services. Targeted door-to-door delivery, competitive pricing & proven results. Get started with a free quote!");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/7-tips-affordable-flyer-distribution-company/");
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
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Strategy Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                        7 Tips for Choosing an <span className="text-blue-600">Affordable Flyer Distribution Company</span> 
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" aria-hidden="true" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR (WRAPPED NO SCROLL) --- */}
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
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-12">
                        <div className="flex items-center gap-3 text-blue-600 mb-6 pt-12">
                            <FileText className="w-5 h-5" />
                            <span className="font-black tracking-[0.2em] uppercase text-[10px]">Industry Deep-Dive</span>
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            Flyer distribution is a powerful, low-cost marketing tool for local businesses, events, and promotions. But with countless companies offering flyer distribution services, how do you find one that’s truly affordable—without compromising on quality or results?
                        </p>
                        <p className="text-base text-gray-600">The key isn’t just finding the cheapest option, but the one that offers the best value for your investment. A low price doesn't mean much if your flyers don't reach the right homes, in the right areas, at the right time. To help you make an informed decision, here are 7 essential tips for choosing an affordable flyer distribution company. But we Maxlead advertising provide.</p>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-semibold text-gray-800 list-none p-0">
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Door to Door Flyer Distribution</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Hand to Hand Flyer Distribution</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Retail and In-Store Distribution</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Event/Promotion Distribution.</li>
                        <li className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Residential, Targeted, and Commercial Area Distribution</li>
                    </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Don’t Just Chase the Lowest Price—Look for Value</h3>
                    <p className="text-base">It’s tempting to go with the company offering the lowest rate per flyer, but the cheapest option isn’t always the most affordable in the long run. The real measure is value not price. If a provider saves you money upfront but delivers poorly, your cost per response can end up far higher.</p>
                    <p className="text-base">Focus on value: How many of your target customers will actually see your flyer? Will the service help generate leads or sales? Sometimes paying a little more for reliability and precision delivers a much better return on investment.</p>
                    
                    
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Get a Transparent All-Inclusive Quote</h3>
                    <p className="text-base">Hidden fees can quickly turn an “affordable” service into an expensive one. Always request a detailed, all-inclusive quote that breaks down every cost, including:</p>
                    <ul className="space-y-2 text-base text-gray-600">
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Cost per flyer</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Fuel surcharges or administrative fees</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Printing or design add-ons</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Proof of delivery</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> VAT/Tax and any charges</li>
                    </ul>
                    <p className="text-base">A trustworthy company will be upfront about pricing and won’t surprise you with extra charges later. Transparency is a strong indicator of professionalism—and long-term affordability.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Check Their Distribution Coverage and Targeting Options</h3>
                    <p className="text-base">Affordability means getting your flyers to the right people, not just as many people as possible. A good distribution company should be able to explain “where” they deliver and “how” they target. “We cover the whole city” isn't enough - effective campaigns depend on reaching the “right” streets and households.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm list-none p-0 my-6">
                        <li className="border border-gray-100 p-4 rounded-xl"> Deliver to specific neighborhoods, postal codes, or housing types?</li>
                        <li className="border border-gray-100 p-4 rounded-xl"> Focus on residential areas, villas, business districts, or both?</li>
                        <li className="border border-gray-100 p-4 rounded-xl"> Customize routes based on your audience (e.g., families, young professionals)?</li>
                    </ul>
                    <p className="text-base">Smarter targeting often beats bigger volume, making your campaign more affordable overall.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Verify Their Distribution Methods and Reliability</h3>
                    <p className="text-base">How a company distributes your flyers matters. Are they using professional teams, GPS-tracked vehicles, or just casual workers? Reliability directly impacts whether your campaign succeeds.</p>
                    <div className="flex flex-wrap gap-2 my-4">
                        {["Their distribution team’s experience", "How they handle weather or holidays", "Backup plans for missed distribution", "Whats the delivery timeframe (e.g., 2-5 days vs 2-3 weeks)"].map(li => (
                            <span key={li} className="bg-gray-900 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">{li}</span>
                        ))}
                    </div>

                    <div className="my-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="text-blue-900 font-bold mb-3 flex items-center gap-2 text-lg">
                            <BarChart3 className="w-5 h-5" aria-hidden="true" /> A reliable service may cost slightly more upfront
                        </h4>
                        
                        <p className="text-sm text-blue-800 italic">But it prevents wasted flyers and missed opportunities—keeping your overall costs down also protects your brand.</p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Look for Tracking and Reporting Features</h3>
                    <p className="text-base">One of the best ways to ensure affordability is to measure results. A company that offers tracking and reporting—such as summary reports showing quantities delivered per zone,photo evidence, or digital dashboards—lets you verify that flyers were delivered as promised.</p>
                    <p className="text-base">This transparency not only builds trust but also helps you evaluate the campaign’s effectiveness. Knowing what worked (and what didn’t) allows you to optimize future efforts and avoid repeating costly mistakes.</p>
                    

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Read Reviews and Ask for References</h3>
                    <p className="text-base">Online reviews on platforms like Google, Facebook, or Social media pages and comments to see what real customers say about their experience.</p>
                    <p className="text-base">Even better, ask for references — especially from businesses in your industry or area. A quick conversation with a past client can give you real insights into pricing, reliability, and overall satisfaction.</p>
                    <p className="text-base">Also, take time to review the company’s previous achievements, client testimonials, and the top brands or companies they’ve worked with. This helps you understand their credibility, experience, and the quality of results they deliver — something you won’t find just by looking at a proposal.</p>
                                        
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Check Their Design and Printing Services</h3>
                    <p className="text-base">Many flyer distribution companies also offer design and printing services, which can save you time and money when bundled. Instead of hiring separate vendors, look for a one-stop shop that provides:</p>
                    <ul className="space-y-2 text-base text-gray-600">
                        <li>• Printing quality and paper options (gsm,finishes)</li>
                        <li>• Turnaround times (design→print→distribution)</li>
                        <li>• Whether they can support multiple sizes (A6,A5,A4,DL,etc.,)</li>
                        <li>• Design support ( do they create from scratch or just edit templates?)</li>
                        <li>• File requirements if you supply your own artwork</li>
                    </ul>
                    <p className="text-base">Bundling services often come with discounts, making it a smart way to keep your entire flyer distribution campaign affordable from start to finish.</p>

                                    

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Final Thoughts</h3>
                    <p className="text-base mb-10">Choosing an affordable flyer distribution company is about more than just price—it’s about finding a partner that delivers value, transparency, and results. “Why is every business looking for an affordable flyer distribution company in dubai without compromising quality and result?” By following these seven tips, you can avoid common pitfalls and invest in a service that truly supports your marketing goals.</p>
                    <p className="text-base mb-10">Start with a clear plan, do your research, and don’t hesitate to ask questions. With the right company on your side, your flyers can reach the right audience—without stretching your budget.</p>
                    <p className="text-base mb-10">Contact our experts at Max Lead Advertising and get started today. Ready to launch your next flyer campaign? Share your biggest challenge in the comments below!</p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-12 rounded-3xl mt-10 text-white relative overflow-hidden text-center shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Dominate the UAE Market in 2026</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
                                Combine offline distribution with data-driven digital strategies. Contact our team to start your ROI-focused campaign today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center gap-2 shadow-lg">
                                    <PhoneCall className="w-4 h-4" /> Go to Contact Page
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Connect with Max Lead on LinkedIn">
                                    <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MessageSquare className="w-4 h-4" aria-hidden="true" /> WhatsApp Specialist
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
                    <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Strategic Intelligence Hub</h2>
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
