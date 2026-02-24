import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, MessageSquare, Clock, User, Printer, Zap, LayoutGrid, PhoneCall, DoorOpen, ArrowRight, FileText } from "lucide-react";
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
  { name: "Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Digital Agency Guide", icon: Target, path: "/blog/how-choose-best-digital-marketing-agency-uae/" },
  { name: "Dos and Don'ts", icon: CheckCircle2, path: "/dos-and-donts-of-flyer-distribution-in-uae/" },
  { name: "Strategy Guide", icon: BarChart3, path: "/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Trends", icon: Zap, path: "/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { name: "Best UAE Locations", icon: MapPin, path: "/best-locations-for-flyer-distribution-in-the-uae/" },
  { name: "MaxLead Transformation", icon: TrendingUp, path: "/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" },
  { name: "Distributor Role", icon: User, path: "/what-is-the-role-of-a-flyer-distributor/" },
  { name: "Sales & ROI", icon: FileText, path: "/how-to-increase-sales-with-flyer-distribution/" },
  { name: "Integrated Strategy", icon: MessageSquare, path: "/integrating-online-and-offline-strategies-for-flyer-distribution/" },
  { name: "Door Hangers", icon: Printer, path: "/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" }
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

export default function DoorHangerMarketingBlog() {
  const activePost = blogs[10]; // Index 10 is the Door Hanger post
  
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/971522286401", "_blank"); };
  const goToContact = () => { window.location.href = "/contact"; };

  return (
    <>
      <Helmet>
        <title>Unlock the Power of Local Advertising with Door Hangers</title>
        <meta name="description" content="Unlock the power of local advertising with door hanger marketing. Expert door to door flyer distribution in Dubai that reaches customers at home." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-12 px-6 bg-[#f7fdfa] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <DoorOpen className="w-3 h-3" />
                        <span>Hyper-Local Marketing Mastery</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        Unlock the Power of Local Advertising with Door Hanger Marketing
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
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white transition-all group">
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
                <div className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed">
                    <p className="text-lg text-gray-600 mb-6 font-medium">
                        Think about the last time you checked your mailbox. What did you find? Bills. Magazines. Maybe a package slip. And probably some flyers. Now think about the last time you opened your front door and found something hanging right there. A door hanger. Waiting for you. Impossible to miss.
                    </p>
                    <p className="font-bold text-gray-900 text-xl mb-4 italic">There is a difference between these two moments.</p>
                    <p className="text-base text-gray-600">
                        Mailbox flyers compete with other mail. They get sorted, stacked, and sometimes thrown away without a glance. Door hangers are different. They hang alone. They demand attention. This is the power of door hanger marketing.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6 mb-4">What Makes Door Hanger Marketing So Powerful?</h3>
                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        {[
                          { title: "100% Attention", desc: "Your message is the first thing they see, not mixed with other ads." },
                          { title: "Physical Presence", desc: "A door hanger is real. People hold it, feel it, and keep it on their counter." },
                          { title: "Targeted Reach", desc: "Choose specific buildings or communities. Reaches only your ideal audience." },
                          { title: "No Competition", desc: "Hanging alone on the door handle, there's no competing ad next to it." }
                        ].map((item, i) => (
                          <div key={i} className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                             <Zap className="text-emerald-600 w-5 h-5 mb-2" />
                             <h4 className="font-bold mb-1 text-sm text-gray-900 uppercase tracking-wide">{item.title}</h4>
                             <p className="text-xs text-gray-600 m-0 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Types of Businesses That Benefit Most</h3>
                    <p className="text-base text-gray-600">While effective for many, these industries see exceptional results:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                        {[
                          "Restaurants and Cafes", "Home Services (Plumbers, Cleaners)", 
                          "Salons and Spas", "Gyms and Fitness Centers", 
                          "Healthcare Providers", "Schools and Nurseries"
                        ].map(li => (
                          <div key={li} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                            <span className="text-sm font-bold text-gray-700">{li}</span>
                          </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Designing Door Hangers That Get Results</h3>
                    <p className="text-base text-gray-600">A door hanger is only as good as its design. Focus on these key elements:</p>
                    <ul className="space-y-2 text-base text-gray-600 list-none p-0">
                        <li>• <strong>Shape and Size:</strong> Must fit properly over door handles and not fall off.</li>
                        <li>• <strong>Paper Quality:</strong> Thicker paper feels more professional and resists weather damage.</li>
                        <li>• <strong>Headline:</strong> Must grab attention in seconds. "Hungry?" or "Need a cleaner?"</li>
                        <li>• <strong>Call to Action:</strong> Tell people exactly what to do—Call, visit, or scan the QR code.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">The Psychology Behind Door Hanger Success</h3>
                    <p className="text-base text-gray-600">Understanding why they work: Front doors are personal; anything hanging there feels important. This creates a mix of <strong>curiosity</strong>, <strong>convenience</strong>, and <strong>local trust</strong>. Finding a message exactly where you live feels like a neighborly recommendation.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Timing Your Door Hanger Campaigns</h3>
                    <p className="text-base text-gray-600">Evenings and weekends are best for residential <strong>door to door flyer distribution in Dubai</strong>. Match timing to seasonal needs, like AC service offers before summer or gym promos in January.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Integrating Door Hangers with Digital Marketing</h3>
                    <p className="text-base text-gray-600">Combine offline impact with digital tracking. Add <strong>QR Codes</strong> that lead to landing pages, include social handles, and run <strong>retargeting ads</strong> in the same neighborhoods after distribution to reinforce your message.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Common Door Hanger Mistakes to Avoid</h3>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-4 border border-red-100 bg-red-50 rounded-xl text-xs font-medium text-red-800"><strong>Poor Design:</strong> Cluttered or confusing layouts get ignored.</div>
                        <div className="p-4 border border-red-100 bg-red-50 rounded-xl text-xs font-medium text-red-800"><strong>Weak Offer:</strong> Give people a real reason to act now.</div>
                        <div className="p-4 border border-red-100 bg-red-50 rounded-xl text-xs font-medium text-red-800"><strong>No Tracking:</strong> If you don't measure, you can't improve.</div>
                        <div className="p-4 border border-red-100 bg-red-50 rounded-xl text-xs font-medium text-red-800"><strong>Bad Timing:</strong> Don't leave hangers out when residents aren't home.</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6 text-gray-900">Why Professional Distribution Matters</h3>
                    <p className="text-base text-gray-600">Professional <strong>flyer distribution services in Dubai</strong> ensure proper placement, complete coverage, and legal compliance. At Max Lead Advertising, we provide verified proof of delivery so you know your hangers reached the right handles.</p>

                    <h3 className="text-3xl font-black text-gray-900 pt-10 mb-6">Success Stories</h3>
                    <div className="space-y-4 mb-10">
                        <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-600">
                            <h4 className="font-bold text-emerald-800 m-0 text-base">The Pizza Place</h4>
                            <p className="text-sm text-emerald-700 m-0 italic">Distributed 5,000 door hangers with BOGO offer. Result: 187 online orders in week one. 40% revenue increase.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-600">
                            <h4 className="font-bold text-emerald-800 m-0 text-base">The Dental Clinic</h4>
                            <p className="text-sm text-emerald-700 m-0 italic">Free first consultation offer via QR code. Result: 45 booked consultations in month one.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-10 rounded-[2rem] mt-10 text-white relative overflow-hidden text-center shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlock Your Local Market Today</h3>
                            <p className="text-emerald-50 text-base mb-8 max-w-2xl mx-auto">
                                Max Lead Advertising helps you unlock local revenue through professional door hanger campaigns across the UAE. Let’s create a strategy that works.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onClick={goToContact} className="bg-white text-emerald-600 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-all text-sm flex items-center justify-center gap-2">
                                   <PhoneCall size={16} /> Consultation
                                </button>
                                <button onClick={openWhatsapp} className="bg-emerald-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-950 transition-all text-sm flex items-center justify-center gap-2">
                                    <MessageSquare size={16} /> WhatsApp Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- RELATED BLOGS GRID --- */}
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
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-emerald-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <ArrowRight size={14} className="text-emerald-600" />
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