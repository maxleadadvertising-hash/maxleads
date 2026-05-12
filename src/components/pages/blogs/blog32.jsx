import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, Clock, User, LayoutGrid, FileText, MessageSquare, Globe, Linkedin, Zap, CheckCircle2, PhoneCall, Sparkles } from "lucide-react"; 
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Healthcare Flyer Distribution Services in Dubai",
    description: "Promote hospitals, clinics, and medical centers with targeted healthcare flyer distribution services in Dubai. Build trust and reach local communities.",
    author: "MaxLead Strategy Team",
    date: "May 12, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Healthcare", "Flyer Distribution"],
    link: "/blog/healthcare-flyer-distribution-dubai/"
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
    title: "Best Digital Marketing Agency in UAE",
    description: "Hiring an agency in 2026? Learn how to choose a performance partner that converts clicks into revenue.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Agency Guide"],
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Leaflet Distribution", icon: FileText, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Digital Strategy", icon: Globe, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Psychology", icon: Target, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" }
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

export default function LeafletDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // ADDED: Meta Tags Logic
    document.title = "Healthcare Flyer Distribution Services in Dubai | Max Lead Advertising";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Promote hospitals, clinics, and medical centers with targeted healthcare flyer distribution services in Dubai. Contact Us Today!");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/healthcare-flyer-distribution-dubai/");
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
      <Helmet>
        <title>Healthcare Flyer Distribution Services in Dubai | Max Lead Advertising</title>
        <meta name="description" content="Promote hospitals, clinics, and medical centers with targeted healthcare flyer distribution services in Dubai. Contact Us Today!" />
        <meta name="keywords" content="Flyer Distribution for Healthcare in Dubai" />
        <link rel="canonical" href="https://www.maxleadadvertising.com/blog/healthcare-flyer-distribution-dubai/" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-[#fcfcfc] border-b border-gray-100 text-center">
            <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-4 md:mb-6 mt-8 md:mt-16">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        <span>MaxLead Healthcare Solutions 2026</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 md:mb-6 leading-tight px-2">
                        Top Benefits of Flyer Distribution for <span className="text-blue-600">Hospitals, Clinics & Medical Centers</span>
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden="true" /> 9 min read</span>
                        <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5"><User className="w-4 h-4" aria-hidden="true" /> MaxLead Strategy Team</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-4 md:py-8 px-4 md:px-6 bg-white border-b border-gray-50 overflow-x-auto no-scrollbar">
          <div className="max-w-5xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 min-w-max md:min-w-0">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 md:px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group whitespace-nowrap"
                >
                  <cat.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-bold text-[9px] md:text-[11px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-16 md:pb-24 bg-white px-4 md:px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-sm md:prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-8 md:pt-12">
                    
                    <div className="mb-12">
                        <p className="text-sm md:text-base text-gray-600">
                            In today’s competitive healthcare industry, building local awareness and reaching nearby communities is essential for business growth. Even with the rise of digital marketing, flyer distribution remains one of the most effective offline marketing strategies for hospitals, clinics, and medical centers.
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mt-4">
                            Professionally designed flyers help healthcare businesses promote services directly to potential patients in targeted residential and commercial areas. From clinic openings to health check-up campaigns, flyer marketing continues to deliver strong visibility and engagement.
                        </p>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-6">Directly Reach Local Communities</h2>
                    <p className="text-sm md:text-base text-gray-600">One of the biggest advantages of flyer distribution is its ability to target local communities with precision. Hospitals, clinics, and medical centers can distribute flyers in residential areas, apartment buildings, office locations, shopping zones, and other high-traffic areas to effectively reach nearby patients.</p>
                    <p className="text-sm md:text-base text-gray-600">Unlike many digital advertisements that are quickly ignored or skipped, physical flyers provide direct visibility and help healthcare businesses connect with people within their service area.</p>
                    
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-8">
                        <h4 className="font-bold text-gray-900 mb-4">How This Helps Healthcare Providers:</h4>
                        <ul className="space-y-3 text-sm md:text-base text-gray-600 list-none p-0">
                            <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={20} /> Increase local brand awareness</li>
                            <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={20} /> Reach nearby families and working professionals</li>
                            <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={20} /> Promote healthcare services in targeted communities</li>
                            <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={20} /> Generate more walk-in patient inquiries</li>
                            <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={20} /> Build trust and credibility within the local area</li>
                        </ul>
                    </div>

                    <p className="text-sm md:text-base text-gray-600">Consistent flyer distribution also helps clinics and medical centers stay visible in the community, making patients more likely to remember and choose their services when healthcare needs arise.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">Promote Healthcare Services & Special Offers</h2>
                    <p className="text-sm md:text-base text-gray-600">Healthcare flyers are highly effective for promoting important medical services, awareness campaigns, and seasonal healthcare offers. A professionally designed flyer helps hospitals, clinics, and medical centers communicate information clearly while reaching potential patients in targeted local communities.</p>
                    
                    <div className="space-y-6 mt-8">
                      {[
                        { t: "1. Health Check-up Packages", d: "Many healthcare providers use flyers to promote general health check-up packages, preventive screenings, and wellness programs. These offers attract families and working professionals looking for affordable healthcare solutions." },
                        { t: "2. Dental & Cosmetic Treatments", d: "Flyer distribution is also effective for promoting dental services, cosmetic treatments, orthodontic offers, and smile makeover campaigns. Attractive healthcare flyers help clinics increase local awareness and appointment inquiries." },
                        { t: "3. Specialist Consultations", d: "Hospitals and clinics often use flyers to promote specialist doctor consultations, medical camps, and healthcare awareness programs. This helps patients learn about available healthcare services within their nearby area." },
                        { t: "4. Vaccination Campaigns", d: "Healthcare flyers are widely used to promote seasonal vaccination drives, child immunization programs, and preventive healthcare campaigns. Flyers help increase public awareness and encourage community participation." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-4 hover:bg-blue-50/50 rounded-xl transition-colors">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                <Zap size={20} aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">{item.t}</h4>
                                <p className="text-sm text-gray-600">{item.d}</p>
                            </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm md:text-base text-gray-600 mt-6">A well-designed healthcare flyer creates a strong first impression, improves local visibility, and helps healthcare businesses attract more patient inquiries effectively.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">Cost-Effective Marketing Solution</h2>
                    <p className="text-sm md:text-base text-gray-600">Flyer distribution is one of the most affordable and effective marketing solutions for hospitals, clinics, and medical centers. It helps healthcare businesses reach targeted local communities, increase brand visibility, and attract patient inquiries without spending heavily on digital advertising. Unlike online ads that disappear quickly, flyers provide direct physical visibility and help healthcare providers stay noticeable within nearby residential and commercial areas. This makes flyer marketing a practical solution for both small clinics and large healthcare organizations looking to improve local awareness and long-term business growth.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">Supports Both Offline & Digital Marketing</h2>
                    <p className="text-sm md:text-base text-gray-600">Modern flyer distribution campaigns are no longer limited to traditional offline promotion. Today, healthcare businesses combine flyer marketing with digital tools to improve customer engagement and make communication easier for potential patients.</p>
                    
                    <p className="font-bold text-gray-900 mt-4">Many healthcare flyers now include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-600">
                        <li>QR codes</li>
                        <li>WhatsApp contact details</li>
                        <li>Website links</li>
                        <li>Online appointment booking options</li>
                        <li>Social media pages</li>
                    </ul>

                    <p className="text-sm md:text-base text-gray-600 mt-6">This allows patients to quickly connect with healthcare providers through both offline and online platforms. Many hospitals, clinics, and medical centers are achieving strong local engagement and increased patient inquiries through smart and targeted healthcare flyer distribution campaigns.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">Conclusion</h2>
                    <p className="text-sm md:text-base text-gray-600">
                        Flyer distribution continues to deliver strong results for hospitals, clinics, and medical centers looking to improve local visibility and patient engagement. With smart targeting, professional flyer design, and strategic distribution, healthcare businesses can increase brand awareness, build community trust, and attract more patient inquiries.
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-4">
                        In today’s competitive healthcare market, combining flyer distribution with digital marketing helps businesses create stronger local presence and long-term business growth.
                    </p>

                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-white">Boost Healthcare Visibility with Flyer Distribution</h3>
                            <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                                Reach more local patients and promote your healthcare services with targeted flyer marketing campaigns.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-900 font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Contact Experts
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-800 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-900 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MessageSquare size={16} aria-hidden="true" /> WhatsApp Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- RELATED BLOGS --- */}
        <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center uppercase tracking-tight">Strategy Intelligence Hub</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-[11px] md:text-xs line-clamp-2 mb-4 leading-relaxed">{blog.description}</p>
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