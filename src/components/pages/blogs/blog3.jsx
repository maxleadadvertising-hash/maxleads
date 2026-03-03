import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, BarChart3, Clock, User, Printer, Zap, LayoutGrid, FileText, ArrowRight, MessageSquare, XCircle, PhoneCall } from "lucide-react";
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
    image: "https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Operations", "Brand"],
    link: "/blog/what-is-the-role-of-a-flyer-distributor/"
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
  { name: "Why UAE Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Best Digital Agency Guide", icon: Target, path: "/blog/how-choose-best-digital-marketing-agency-uae/" },
  { name: "Dos and Don'ts", icon: CheckCircle2, path: "/blog/dos-and-donts-of-flyer-distribution-in-uae/" },
  { name: "Ultimate Strategy Guide", icon: BarChart3, path: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Trends", icon: Zap, path: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { name: "Best UAE Locations", icon: MapPin, path: "/blog/best-locations-for-flyer-distribution-in-the-uae/" },
  { name: "MaxLead Transformation", icon: TrendingUp, path: "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" },
  { name: "Distributor Role Guide", icon: User, path: "/blog/what-is-the-role-of-a-flyer-distributor/" },
  { name: "How to Increase Sales", icon: FileText, path: "/blog/how-to-increase-sales-with-flyer-distribution/" },
  { name: "Online & Offline Success", icon: MessageSquare, path: "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/" },
  { name: "Door Hanger Marketing", icon: Printer, path: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" }
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function FlyerDistributionBlog() {
  const activePost = blogs[2]; // Dos and Don'ts

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact"; };

  return (
    <>
      <Helmet>
        <title>Dos and Don'ts of Flyer Distribution in UAE | Max Lead Advertising</title>
        <meta name="description" content="Learn the dos and don'ts of flyer distribution in UAE. Expert tips on door to door flyer distribution in Dubai to get better results and avoid common mistakes." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/dos-and-donts-of-flyer-distribution-in-uae/" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-28 pb-12 px-6 bg-[#f9fafb] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <MapPin className="w-3 h-3" />
                        <span>Flyer Distribution Services in Dubai</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        Dos and Don'ts of Flyer Distribution in UAE: A Complete Guide for Business Owners
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR (WRAPPED / NO SCROLL) --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group"
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
                <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-12">
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Flyer distribution is one of the oldest and most trusted marketing methods in the world. In the UAE, it continues to deliver strong results for businesses of all sizes. But here's the truth — not all flyer campaigns succeed. Some businesses get great response. Others waste money and see no results.
                        </p>
                        <p className="text-base">
                            The difference? It's not about luck. It's about knowing the dos and don'ts of flyer distribution in UAE. When done right, flyer distribution services in Dubai can bring you loyal local customers. When done wrong, your beautifully printed flyers end up in the trash — unread and ignored.
                        </p>
                        <p className="text-base">
                            In this guide, we will walk you through everything you need to know. Whether you are planning door to door flyer distribution in Dubai for the first time or looking to improve your existing campaigns, these tips will help you get better results.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Why Following the Dos and Don'ts Matters</h3>
                    <p className="text-base">
                        The UAE market is unique. People live in specific communities. They have busy lifestyles. They receive many offers every day. If your flyer does not stand out, it will be forgotten. If your distribution is not targeted, it will reach the wrong people. If your timing is wrong, it will be ignored.
                    </p>
                    <p className="text-base">
                        That is why understanding the dos and don'ts of flyer distribution in UAE is essential for success. It helps you save money by avoiding waste, reach the right audience, get more enquiries and footfall, and build a strong local presence.
                    </p>

                    <h3 className="text-3xl font-black text-gray-900 pt-10 mb-6">The Dos of Flyer Distribution in UAE</h3>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">1. DO Define Your Target Audience Clearly</h4>
                        <p className="text-base">Before you print a single flyer, ask yourself: Who do I want to reach? Where do they live? What do they care about?</p>
                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500 my-4 text-sm font-medium">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>A nursery in Dubai should target families with young children in residential areas like Jumeirah or The Springs.</li>
                                <li>A restaurant in Deira should target offices and shops nearby for lunch offers.</li>
                                <li>A real estate agent should target specific villa communities where people can afford luxury properties.</li>
                            </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">2. DO Choose the Right Locations</h4>
                        <p className="text-base">Location is everything in door to door flyer distribution in Dubai. Different areas have different types of residents. What works in Dubai Marina may not work in International City.</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">3. DO Design Your Flyer for Attention</h4>
                        <p className="text-base">Your flyer design matters as much as your message. A good flyer should have a clear headline, use high-quality images, include your offer prominently, show contact details clearly, and have a call to action.</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">4. DO Include a Strong Offer</h4>
                        <p className="text-base">Why should someone care about your flyer? Good offers include discounts on first purchase, BOGO, free consultations, or limited-time promotions. A strong offer increases the response rate of your door to door leaflet distribution campaign significantly.</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">5. DO Combine Flyers with Digital</h4>
                        <p className="text-base">Add QR codes linking to your website or WhatsApp and social media handles. This way, your flyer becomes a bridge between physical and digital marketing.</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">6. DO Track Your Results</h4>
                        <p className="text-base">Track your campaign via unique phone numbers, offer codes, or QR code scans. Tracking helps you improve your next campaign and proves the value of flyer distribution services in Dubai.</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900">7. DO Work with Professional Distributors</h4>
                        <p className="text-base">A trained distributor delivers flyers properly and follows building rules. This is why businesses trust Max Lead Advertising for reliable flyer distribution across UAE.</p>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 pt-16 mb-6">The Don'ts of Flyer Distribution in UAE</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "DON'T Distribute Without a Plan", desc: "Random distribution is the biggest mistake. You waste money on people who will never become customers." },
                          { title: "DON'T Use Poor Quality Printing", desc: "If it looks cheap, people will think your business is cheap. Always use good quality paper and professional design." },
                          { title: "DON'T Overload with Text", desc: "People don't read long paragraphs on flyers. Keep your message short, simple, and benefit-focused." },
                          { title: "DON'T Ignore Local Culture", desc: "Be respectful. Avoid images that may offend or cultural insensitivity." },
                          { title: "DON'T Forget a Call to Action", desc: "Tell the reader what to do next: Call now, visit our showroom, or WhatsApp for a free estimate." },
                          { title: "DON'T Distribute at Wrong Times", desc: "Timing affects response. Avoid delivery during sleeping hours and match commercial delivery to office hours." }
                        ].map((item, i) => (
                            <div key={i} className="p-5 bg-red-50 rounded-xl border border-red-100">
                                <XCircle className="w-5 h-5 text-red-500 mb-2" />
                                <h5 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h5>
                                <p className="text-xs text-gray-600 m-0">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 pt-12">How Professional Flyer Distribution Services in Dubai Help</h3>
                    <p className="text-base">When you work with experts like Max Lead Advertising, you get strategic planning, quality distribution, proof of delivery, cost efficiency, and better results.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Why Door to Door Flyer Distribution in Dubai Still Works</h3>
                    <p className="text-base">Flyers reach people at home where they have time to read. Physical materials create more trust than digital ads, and local targeting ensures relevant reach with measurable results.</p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Final Thoughts</h3>
                    <p className="text-base mb-10">
                        Flyer distribution is not outdated. It has simply evolved. Today, successful businesses use door to door leaflet distribution as part of a complete marketing strategy. By following the dos and don'ts of flyer distribution in UAE, you can avoid common mistakes and get better results from every campaign.
                    </p>

                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-10 md:p-12 rounded-[2rem] mt-10 text-white relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to start your next campaign?</h3>
                            <p className="text-green-50 text-base mb-8 max-w-2xl mx-auto">
                                Contact Max Lead Advertising today. Let our team help you reach the right audience, in the right places, at the right time.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-all text-sm flex items-center gap-2">
                                   <PhoneCall className="w-4 h-4" /> Get a Free Consultation
                                </button>
                                <button onClick={openWhatsapp} className="bg-emerald-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-950 transition-all text-sm flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> WhatsApp Now
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Strategic Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-green-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <ArrowRight size={14} className="text-green-600" />
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