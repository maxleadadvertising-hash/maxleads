import React, { useEffect, useState, useRef } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import {Clock, User, Sparkles, TrendingUp, BookOpen, Target, MapPin, FileText } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* --- STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "How Advertising and Distribution Work Together to Grow Businesses in UAE",
    description: "Discover the powerful synergy between physical distribution and strategic advertising that creates a dominant brand presence in the Emirates.",
    author: "MaxLead Team",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Authority", "Strategy"],
    featured: true
  },
  {
    id: 2,
    title: "Why Businesses in UAE Still Rely on Flyer Distribution in the Digital Age",
    description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Insights"],
    featured: false
  },
  {
    id: 3,
    title: "How to Choose the Right Flyer Distribution Company in UAE",
    description: "Avoid common pitfalls. Here is your ultimate checklist for selecting a distribution partner that guarantees delivery and transparency.",
    author: "MaxLead Team",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Guide", "Leads"],
    featured: false
  },
  {
    id: 4,
    title: "Why SMS Marketing Still Delivers High ROI in UAE",
    description: "Direct, personal, and fast. Discover why SMS remains the king of conversion for UAE retail and service businesses.",
    author: "MaxLead Team",
    date: "Jan 20, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SMS Marketing", "ROI"],
    featured: false
  },
  {
    id: 5,
    title: "Marketing Strategies for Retail & Supermarkets in UAE",
    description: "How to drive footfall to your retail location using a mix of targeted leaflets and digital localized ads.",
    author: "MaxLead Team",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Retail", "UAE"],
    featured: false
  }
];

const categories = [
  { name: "Authority-Building", icon: BookOpen, count: 4 },
  { name: "Service-Intent", icon: Target, count: 4 },
  { name: "Industry-Specific", icon: Sparkles, count: 4 },
  { name: "Local SEO", icon: MapPin, count: 3 },
  { name: "Conversion", icon: TrendingUp, count: 5 }
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

export default function BlogSectionModern() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-gray-50 min-h-screen py-10">
        
        {/* --- HEADER SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>MaxLead Strategic Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tight mb-6">
                        The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Advertising</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
                        Data-driven insights and strategic guides to dominate the UAE market through offline and online channels.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all group">
                  <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                  <span className="font-bold text-gray-700">{cat.name}</span>
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-1 rounded-lg">{cat.count}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- BLOG GRID --- */}
        <section className="pb-24 px-6 max-w-7xl mx-auto">
            
            {/* Featured Post (Link Removed) */}
            <FadeIn className="mb-12">
                <div className="relative overflow-hidden rounded-[3rem] bg-white shadow-xl grid md:grid-cols-2 border border-gray-100">
                    <div className="h-full min-h-[500px] overflow-hidden relative">
                        <img 
                            src={blogs[0].image} 
                            alt={blogs[0].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-8 left-8 flex gap-2">
                            {blogs[0].tags.map(tag => (
                                <span key={tag} className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm font-semibold text-green-500 mb-6 tracking-widest uppercase">
                            <Sparkles className="w-5 h-5" /> Authority Piece
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {blogs[0].title}
                        </h2>
                        <p className="text-gray-600 text-xl mb-10 line-clamp-3">
                            {blogs[0].description}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="text-base">
                                    <p className="font-bold text-gray-900">{blogs[0].author}</p>
                                    <p className="text-gray-500">{blogs[0].date} • {blogs[0].readTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Standard Grid (Links Removed) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.slice(1).map((blog, idx) => (
                    <FadeIn key={blog.id} delay={idx * 100}>
                        <div className="flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
                            <div className="h-72 overflow-hidden relative">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                        {blog.tags[0]}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 tracking-wider uppercase">
                                    <Clock className="w-4 h-4" /> {blog.readTime}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-base line-clamp-2 mb-8 flex-1">
                                    {blog.description}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>

        {/* --- FULL BLOG CONTENT SECTION --- */}
        <section className="py-24 bg-white px-6">
            <FadeIn className="max-w-6xl mx-auto">
                <div className="prose prose-xl prose-green max-w-none text-gray-700 leading-relaxed">
                    <div className="flex items-center gap-3 text-green-600 mb-8">
                        <FileText className="w-8 h-8" />
                        <span className="font-bold tracking-[0.2em] uppercase text-sm">Featured Industry Deep-Dive</span>
                    </div>
                    
                    <h2 className="text-5xl font-black text-gray-900 mb-10 tracking-tight">Why Businesses in UAE Still Rely on Flyer Distribution in the Digital Age</h2>
                    
                    <div className="grid lg:grid-cols-1 gap-12 text-lg md:text-xl">
                        <div className="space-y-8">
                            <p className="text-2xl font-medium text-gray-900 leading-normal border-l-4 border-green-500 pl-6">In today’s world, almost everything has gone digital. Businesses are investing heavily in social media ads, Google ads, and online campaigns to reach customers. Yet, despite all this digital growth, flyer distribution services continue to play a powerful role in marketing across the UAE.</p>
                            
                            <p>From local retail stores and restaurants to real estate developers and service providers, many businesses still rely on door to door flyer distribution and leaflet distribution to create awareness, generate enquiries, and drive footfall. This is not because digital marketing doesn’t work — it’s because offline marketing still works exceptionally well when used the right way.</p>
                            
                            <p>So why do businesses in the UAE continue to trust flyer distribution even in the digital age? Let’s discuss it now.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">The UAE Market Is Built for Offline Visibility</h3>
                            <p>The UAE is unique when it comes to consumer behavior. People here spend a significant amount of time outside their homes — commuting, shopping, dining, visiting malls, and attending events. Residential communities, commercial areas, and retail zones are always active.</p>
                            <p>This environment makes flyer distribution in UAE extremely effective. Unlike online ads that disappear with one scroll, flyers stay physically present. They reach people: Inside their homes, At their workplaces, In shopping areas, During daily routines. For businesses that depend on local customers, physical visibility still matters.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Creates Direct Local Reach</h3>
                            <p>One of the biggest advantages of door to door flyer distribution is local targeting. Digital ads often reach a broad audience, including people who may not be relevant to your business. Flyer distribution works differently. With proper planning, businesses can: Target specific residential communities, Focus on villas, apartments, or gated societies, Choose commercial zones or retail clusters, Reach customers based on location and lifestyle. This makes door to door leaflet distribution highly effective for local promotions, store openings, offers, and service-based businesses.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Physical Flyers Build Trust Faster</h3>
                            <p>In a market filled with online ads, users have become cautious. Many people scroll past ads without reading them or block them entirely. Flyers feel different. A printed flyer: Feels more personal, Looks more intentional, Creates a sense of legitimacy, Stays with the customer longer. When people receive a flyer at their home or workplace, it often builds more trust than a random digital ad. This is one reason why flyer distribution services continue to deliver results in the UAE.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">High Visibility Without Digital Fatigue</h3>
                            <p>Digital marketing is powerful, but it also comes with challenges: Ad fatigue, Rising ad costs, Ad blockers, Limited organic reach. Flyer distribution does not suffer from these problems. A flyer placed at the right location is: Always visible, Not skippable, Not affected by algorithms, Cost-effective for local reach. This makes flyer distribution a reliable option for businesses that want consistent visibility without depending entirely on digital platforms.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Supports Quick Promotions</h3>
                            <p>Many UAE businesses run time-sensitive campaigns such as: Weekend offers, Festival discounts, Store launches, Event promotions. For such campaigns, flyer distribution services in Dubai, UAE deliver faster local awareness than most digital channels. A well-designed flyer distributed in the right areas can: Drive immediate footfall, Generate same-day enquiries, Support short-term promotions. This is especially useful for restaurants, retail stores, clinics, salons, and event organizers.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Door to Door Flyer Distribution Works Across Industries</h3>
                            <p>One major reason flyer distribution remains relevant is its versatility. Almost every industry in the UAE benefits from it, including: Retail & supermarkets, Restaurants & cafes, Real estate, Healthcare & clinics, Education & training institutes, Events & exhibitions, Local service providers. Because flyers are customizable, businesses can tailor messaging, offers, and designs based on their target audience.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Is Cost-Effective Compared to Mass Media</h3>
                            <p>Traditional advertising like TV, radio, and newspapers can be expensive and difficult to track. Flyer distribution offers a more affordable alternative with better local targeting. When executed professionally, flyer distribution services allow businesses to: Control distribution areas, Manage budget efficiently, Avoid unnecessary exposure, Focus on high-potential locations. This makes it ideal for small and medium-sized businesses in the UAE.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">The Power of Combining Flyer Distribution with Digital Marketing</h3>
                            <p>Flyer distribution works best when it is part of a bigger marketing system. Many successful UAE businesses use flyers to: Create initial awareness, Drive people to WhatsApp, websites, or social media, Support digital campaigns with offline visibility. For example: A flyer includes a QR code linking to a website, A printed offer drives WhatsApp enquiries, Offline distribution increases recall for online ads. This offline + online combination increases overall campaign effectiveness.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Professional Execution Makes All the Difference</h3>
                            <p>Not all flyer distribution delivers results. Random distribution without planning often leads to wasted effort. Professional flyer distribution companies in Dubai UAE focus on: Area selection, Audience relevance, Ethical distribution practices, Supervised execution, Campaign planning. This structured approach ensures flyers reach the right people, not just more people.</p>

                            <h3 className="text-3xl font-bold text-gray-900 pt-8">Why Businesses Choose Professional Flyer Distribution Services</h3>
                            <p>Businesses that rely on door to door flyer distribution usually understand one key point: Execution matters more than quantity. Professional flyer distribution services offer: Better targeting, Higher response rates, Brand-safe practices, Consistent coverage, Measurable impact. This is why many UAE businesses continue to invest in flyer distribution year after year.</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-12 md:p-16 rounded-[3.5rem] mt-20 text-white border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">Conclusion: Flyer Distribution Is Still Relevant — When Done Right</h3>
                        <p className="text-gray-300 text-xl leading-relaxed">Despite the rise of digital marketing, flyer distribution remains a powerful and reliable advertising method in the UAE. It delivers local reach, builds trust, supports quick promotions, and works across industries. In the digital age, flyer distribution is not outdated — it has simply evolved. When combined with strategic planning, quality printing, and professional execution, flyer distribution services in UAE continue to deliver real business results. For businesses that want visibility, response, and local impact, flyer distribution remains a smart marketing choice.</p>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- NEWSLETTER CTA --- */}
        <section className="py-24 px-6">
          <FadeIn className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
               <h2 className="text-4xl md:text-6xl font-bold mb-8">Stay Ahead of UAE Marketing Trends</h2>
               <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                 Get our monthly briefing on advertising strategies, distribution hacks, and local business growth tips.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <input type="email" placeholder="Your business email" className="bg-white/5 border border-white/10 rounded-2xl px-10 py-5 outline-none focus:border-green-500 transition-all w-full sm:w-96 text-lg" />
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-12 py-5 rounded-2xl transition-all text-lg">Subscribe Now</button>
               </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}