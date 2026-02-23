import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {  TrendingUp,  Target, MapPin, CheckCircle2, BarChart3, Clock, User, Printer, Megaphone, LayoutGrid, FileText } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "The Future of Advertising",
    description: "As ad costs rise, your business needs an ROI-focused plan. Discover how to identify a partner that converts clicks into revenue.",
    author: "MaxLead Strategy Team",
    date: "Feb 13, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "ROI"],
    featured: true
  },
  {
    id: 2,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description: "The ultimate showdown between organic growth and instant traffic. Learn which channel suits your 2026 budget.",
    author: "MaxLead Team",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6740101/pexels-photo-6740101.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SEO", "Google Ads"],
    featured: false
  },
];

/* --- UPDATED CATEGORIES WITH REDIRECTS --- */
const categories = [
  { name: "All", icon: LayoutGrid, path: "/blog/" },
  { name: "Digital Marketing", icon: Target, path: "/blog/how-choose-best-digital-marketing-agency-uae/" },
  { name: "Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Digital Printing", icon: Printer, path: "/blog3/" },
  { name: "Outdoor Advertising", icon: Megaphone, path: "/blog4/" }
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

  /* --- HANDLERS --- */
  const handleCategoryClick = (path) => {
    window.location.href = path;
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/+97157222605", "_blank");
  };

  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-gray-50 min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 mt-16">
                        <TrendingUp className="w-4 h-4" />
                        <span>MaxLead Strategy Guide 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                        Why Businesses in UAE Still Rely on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Flyer Distribution</span> in the Digital Age
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <cat.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  <span className="font-bold text-gray-700">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-5xl mx-auto">
                <div className="prose prose-xl prose-blue max-none text-gray-700 leading-relaxed">
                    
                    <div className="mb-16">
                        <div className="flex items-center gap-3 text-blue-600 mb-8">
                            <FileText className="w-8 h-8" />
                            <span className="font-bold tracking-[0.2em] uppercase text-sm">Industry Deep-Dive</span>
                        </div>
                        <p className="text-2xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-10">
                            In today’s world, almost everything has gone digital. Businesses are investing heavily in social media ads, Google ads, and online campaigns to reach customers. Yet, despite all this digital growth, flyer distribution services continue to play a powerful role in marketing across the UAE.
                        </p>
                        <p>From local retail stores and restaurants to real estate developers and service providers, many businesses still rely on door to door flyer distribution and leaflet distribution to create awareness, generate enquiries, and drive footfall. This is not because digital marketing doesn’t work — it’s because offline marketing still works exceptionally well when used the right way.</p>
                        <p>So why do businesses in the UAE continue to trust flyer distribution even in the digital age? Let’s discuss it now.</p>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">The UAE Market Is Built for Offline Visibility</h3>
                    <p>The UAE is unique when it comes to consumer behavior. People here spend a significant amount of time outside their homes — commuting, shopping, dining, visiting malls, and attending events. Residential communities, commercial areas, and retail zones are always active.</p>
                    <p>This environment makes flyer distribution in UAE extremely effective. Unlike online ads that disappear with one scroll, flyers stay physically present. They reach people:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Inside their homes</li>
                        <li>At their workplaces</li>
                        <li>In shopping areas</li>
                        <li>During daily routines</li>
                    </ul>
                    <p>For businesses that depend on local customers, physical visibility still matters.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Creates Direct Local Reach</h3>
                    <p>One of the biggest advantages of door to door flyer distribution is local targeting. Digital ads often reach a broad audience, including people who may not be relevant to your business. Flyer distribution works differently. With proper planning, businesses can:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Target specific residential communities</li>
                        <li>Focus on villas, apartments, or gated societies</li>
                        <li>Choose commercial zones or retail clusters</li>
                        <li>Reach customers based on location and lifestyle</li>
                    </ul>
                    <p>This makes door to door leaflet distribution highly effective for local promotions, store openings, offers, and service-based businesses.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Physical Flyers Build Trust Faster</h3>
                    <p>In a market filled with online ads, users have become cautious. Many people scroll past ads without reading them or block them entirely. Flyers feel different. A printed flyer:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Feels more personal</li>
                        <li>Looks more intentional</li>
                        <li>Creates a sense of legitimacy</li>
                        <li>Stays with the customer longer</li>
                    </ul>
                    <p>When people receive a flyer at their home or workplace, it often builds more trust than a random digital ad. This is one reason why flyer distribution services continue to deliver results in the UAE.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">High Visibility Without Digital Fatigue</h3>
                    <p>Digital marketing is powerful, but it also comes with challenges: Ad fatigue, Rising ad costs, Ad blockers, Limited organic reach. Flyer distribution does not suffer from these problems. A flyer placed at the right location is:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Always visible</li>
                        <li>Not skippable</li>
                        <li>Not affected by algorithms</li>
                        <li>Cost-effective for local reach</li>
                    </ul>
                    <p>This makes flyer distribution a reliable option for businesses that want consistent visibility without depending entirely on digital platforms.</p>

                    <div className="my-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                        <h4 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" /> The Modern UAE Marketing Funnel
                        </h4>
                        <p className="text-sm text-blue-800 mt-4 italic">The right agency manages this entire journey, ensuring no lead falls through the cracks from offline touchpoints to digital conversion.</p>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Supports Quick Promotions</h3>
                    <p>Many UAE businesses run time-sensitive campaigns such as: Weekend offers, Festival discounts, Store launches, Event promotions. For such campaigns, flyer distribution services in Dubai, UAE deliver faster local awareness than most digital channels. A well-designed flyer distributed in the right areas can:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Drive immediate footfall</li>
                        <li>Generate same-day enquiries</li>
                        <li>Support short-term promotions</li>
                    </ul>
                    <p>This is especially useful for restaurants, retail stores, clinics, salons, and event organizers.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Door to Door Flyer Distribution Works Across Industries</h3>
                    <p>One major reason flyer distribution remains relevant is its versatility. Almost every industry in the UAE benefits from it, including:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Retail & supermarkets</li>
                        <li>Restaurants & cafes</li>
                        <li>Real estate</li>
                        <li>Healthcare & clinics</li>
                        <li>Education & training institutes</li>
                        <li>Events & exhibitions</li>
                        <li>Local service providers</li>
                    </ul>
                    <p>Because flyers are customizable, businesses can tailor messaging, offers, and designs based on their target audience.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Flyer Distribution Is Cost-Effective Compared to Mass Media</h3>
                    <p>Traditional advertising like TV, radio, and newspapers can be expensive and difficult to track. Flyer distribution offers a more affordable alternative with better local targeting. When executed professionally, flyer distribution services allow businesses to:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>Control distribution areas</li>
                        <li>Manage budget efficiently</li>
                        <li>Avoid unnecessary exposure</li>
                        <li>Focus on high-potential locations</li>
                    </ul>
                    <p>This makes it ideal for small and medium-sized businesses in the UAE.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">The Power of Combining Flyer Distribution with Digital Marketing</h3>
                    <p>Flyer distribution works best when it is part of a bigger marketing system. Many successful UAE businesses use flyers to create initial awareness, drive people to WhatsApp, websites, or social media, and support digital campaigns with offline visibility. For example:</p>
                    <ul className="list-disc pl-10 space-y-2 mb-6">
                        <li>A flyer includes a QR code linking to a website</li>
                        <li>A printed offer drives WhatsApp enquiries</li>
                        <li>Offline distribution increases recall for online ads</li>
                    </ul>
                    <p>This offline + online combination increases overall campaign effectiveness.</p>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Professional Execution Makes All the Difference</h3>
                    <p>Not all flyer distribution delivers results. Random distribution without planning often leads to wasted effort. Professional flyer distribution companies in Dubai UAE focus on: Area selection, Audience relevance, Ethical distribution practices, Supervised execution, and Campaign planning. This structured approach ensures flyers reach the right people, not just more people.</p>

                    <div className="my-16 p-10 bg-gray-900 rounded-[3rem] text-white">
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">Why Businesses Choose Professional Services</h3>
                        <p className="mb-6 italic">Execution matters more than quantity.</p>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" /> Better targeting & Higher response rates</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" /> Brand-safe practices & Consistent coverage</li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" /> Measurable impact through performance tracking</li>
                        </ul>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 pt-8">Conclusion: Flyer Distribution Is Still Relevant — When Done Right</h3>
                    <p>Despite the rise of digital marketing, flyer distribution remains a powerful and reliable advertising method in the UAE. It delivers local reach, builds trust, supports quick promotions, and works across industries. In the digital age, flyer distribution is not outdated — it has simply evolved. When combined with strategic planning, quality printing, and professional execution, flyer distribution services in UAE continue to deliver real business results. For businesses that want visibility, response, and local impact, flyer distribution remains a smart marketing choice.</p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-16 rounded-[3.5rem] mt-20 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Dominate the UAE Market in 2026</h3>
                            <p className="text-blue-100 text-xl mb-10">
                                Combine offline distribution with data-driven digital strategies. Contact our team to start your ROI-focused campaign today.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all">
                                    Go to Contact Page
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/30 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-500/50 transition-all">
                                    WhatsApp:+971557222605 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

      </main>
      <Footer />
    </>
  );
}