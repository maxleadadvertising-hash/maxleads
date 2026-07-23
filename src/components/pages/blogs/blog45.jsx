import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, CheckCircle2, Clock, User, PhoneCall, LayoutGrid, Zap, FileText, MessageSquare, Linkedin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "What are the best digital printing services available in the UAE?",
    description: "Find the best digital printing services in the UAE. High-quality printing across all Emirates. Contact Max Lead Advertising for fast and reliable service.",
    author: "MaxLead Strategy Team",
    date: "March 9, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Printing Services", "UAE Business"],
    link: "/blog/best-digital-printing-services-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description: "Discover why physical marketing still works and how touch triggers emotional responses that digital ads can't match.",
    author: "MaxLead Team",
    date: "March 6, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Psychology", "Insights"],
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "Benefits of Community & Gated Area Flyer Distribution in Dubai",
    description: "Maximize local marketing success with Community & Gated Area Distribution in Dubai, reaching targeted residents and generating quality leads.",
    author: "MaxLead Strategy Team",
    date: "March 9, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Community Distribution", "Dubai"],
    link: "/blog/benefits-of-community-gated-area-flyer-distribution-dubai/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Leaflet Distribution", icon: FileText, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Digital Strategy", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Fitness Marketing", icon: Zap, path: "/blog/fitness-lead-generation-dubai-door-to-door-flyer-distribution/" }
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

const targetAreas = [
  "Dubai Marina", "Jumeirah Village Circle (JVC)", "Business Bay", "Downtown Dubai",
  "Al Nahda", "Al Barsha", "Dubai Silicon Oasis", "Mirdif", "Arabian Ranches", "International City"
];

const services = [
  "Door-to-Door Flyer Distribution", "Apartment & Villa Distribution", "Performance Marketing",
  "Google Ads Management", "Meta Ads (Facebook & Instagram)", "Landing Page Development",
  "Lead Generation Campaigns", "SEO Services", "Website Development", "Marketing Analytics & Reporting"
];

export default function FitnessLeadGenerationDubaiBlog() {
  const activePost = blogs[2];

  useEffect(() => {
    // SEO Meta Tags Logic
    document.title = "Door-to-Door Flyer Distribution for Gyms in Dubai | Max Lead";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Generate more gym and fitness leads in Dubai with targeted door-to-door flyer distribution and performance marketing. Increase memberships and ROI today.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/fitness-lead-generation-dubai-door-to-door-flyer-distribution/");
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
        <section className="relative pt-32 pb-12 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4 mt-8">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead UAE Marketing Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight text-center">
                        Generate More <span className="text-blue-600">Fitness Leads in Dubai</span> with Door-to-Door Flyer Distribution and Performance Marketing
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock size={14} aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User size={14} aria-hidden="true" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon size={14} className="text-gray-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">

                    <p className="text-base text-gray-600">
                        The fitness industry in Dubai is growing rapidly, with new gyms, fitness studios, yoga centers, personal trainers, and wellness clubs entering the market every year. While competition is increasing, attracting quality members has become more challenging. Businesses need a marketing strategy that combines offline and online channels to generate consistent leads and improve conversions.
                    </p>
                    <p className="text-base text-gray-600">
                        One of the most effective approaches is combining door-to-door flyer distribution with performance marketing. This integrated strategy helps fitness businesses reach local audiences while capturing high-quality leads through digital advertising.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Reach Local Customers with Targeted Flyer Distribution</h2>
                    <p className="text-base text-gray-600">
                        Door-to-door flyer distribution remains one of the most effective local marketing methods for fitness businesses in Dubai. By delivering professionally designed flyers directly to apartments, villas, and residential communities, gyms can introduce special offers to people living nearby.
                    </p>
                    <p className="text-base text-gray-600">
                        Residents are more likely to join a gym that is conveniently located near their home or workplace. A well-designed flyer with a limited-time membership offer, free trial session, or personal training discount can encourage immediate action.
                    </p>
                    <p className="text-base text-gray-600">
                        Targeted flyer distribution works especially well in areas with high residential density, ensuring your marketing budget reaches potential customers who are most likely to visit your facility.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Generate Qualified Leads with Performance Marketing</h2>
                    <p className="text-base text-gray-600">
                        Performance marketing helps fitness businesses reach people actively searching for gyms and fitness services online. Platforms like Google Ads and Meta Ads allow businesses to target users based on their location, interests, demographics, and online behavior.
                    </p>
                    <p className="text-base text-gray-600">
                        Whether someone searches for "gym near me," "fitness center in Dubai," or "personal trainer Dubai," your business can appear in front of potential customers at the right moment.
                    </p>
                    <p className="text-base text-gray-600">Performance marketing offers measurable results, allowing you to track:</p>
                    <ul className="space-y-3 list-none p-0">
                        {["Website visits", "Lead form submissions", "Phone calls", "WhatsApp enquiries", "Membership registrations", "Return on Ad Spend (ROAS)"].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={16} /> <span>{item}</span></li>
                        ))}
                    </ul>
                    <p className="text-base text-gray-600">
                        Unlike traditional advertising, every campaign can be optimized to improve performance and reduce advertising costs.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Why Combine Flyer Distribution and Digital Marketing?</h2>
                    <p className="text-base text-gray-600">
                        Offline and online marketing work best when used together. A customer may first notice your flyer at home and later search for your gym online. When your Google Ads or Meta Ads appear, your brand becomes more familiar and trustworthy, increasing the chances of conversion.
                    </p>
                    <p className="text-base text-gray-600">
                        This combination provides multiple customer touchpoints, helping your fitness business stand out from competitors. Benefits include:
                    </p>
                    <ul className="space-y-3 list-none p-0">
                        {["Increased local brand awareness", "Higher lead generation", "Better conversion rates", "Improved customer trust", "Greater return on marketing investment"].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start"><Zap className="text-blue-600 shrink-0 mt-1" size={16} /> <span>{item}</span></li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Target the Right Communities Across Dubai</h2>
                    <p className="text-base text-gray-600">
                        Successful fitness marketing depends on reaching the right audience. Flyer distribution campaigns can target residential communities where potential members live, while digital campaigns focus on users searching for fitness solutions nearby.
                    </p>
                    <p className="text-base text-gray-600">Popular target areas include:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                        {targetAreas.map((area, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle2 size={12} className="text-blue-600 shrink-0" /> {area}</div>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 mt-6">
                        Combining location-based distribution with geo-targeted online advertising ensures maximum visibility within your service area.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Why Choose Max Lead Advertising & Distribution FZE?</h2>
                    <p className="text-base text-gray-600">
                        At Max Lead Advertising & Distribution FZE, we help fitness businesses grow through result-driven marketing solutions. Our team specializes in targeted door-to-door flyer distribution across Dubai, combined with high-converting digital marketing campaigns.
                    </p>
                    <p className="text-base text-gray-600">Our services include:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                        {services.map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle2 size={12} className="text-blue-600 shrink-0" /> {s}</div>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 mt-6">
                        Whether you're launching a new gym, promoting seasonal memberships, or increasing personal training enquiries, we create customized campaigns that deliver measurable results.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">Conclusion</h2>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                        Growing a fitness business in Dubai requires more than a single marketing channel. Combining door-to-door flyer distribution with performance marketing allows you to reach potential members both offline and online, increasing visibility, generating qualified leads, and boosting membership sales.
                    </p>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                        If you're ready to grow your gym, fitness studio, yoga center, or wellness business, partner with Max Lead Advertising & Distribution FZE for targeted marketing campaigns that deliver real results.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Grow Your Gym With Targeted Flyer Distribution</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                Boost memberships and generate quality leads through door-to-door distribution and performance marketing.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Contact Experts
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MessageSquare size={16} aria-hidden="true" /> WhatsApp Now
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Strategy Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all font-bold text-[10px]">Read Story <ArrowRightIcon size={12} aria-hidden="true" /></span>
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

const ArrowRightIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);