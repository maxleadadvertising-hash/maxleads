import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, CheckCircle2, Clock, User, PhoneCall, LayoutGrid, Zap, FileText, MessageSquare, Linkedin } from "lucide-react"; // Added Linkedin
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
  { name: "Digital Strategy", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
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

export default function DigitalPrintingUAEBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // SEO Meta Tags Logic
    document.title = "Best Digital Printing Services in UAE | Max Lead Ads";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Find the best digital printing services in the UAE. High-quality printing across all Emirates. Contact Max Lead Advertising for fast and reliable service.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/best-digital-printing-services-uae/");
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
                        What are the best <span className="text-blue-600">digital printing services</span> available in the UAE?
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
                        Digital printing has become an essential service for businesses in the UAE. Whether you need business cards, flyers, banners, or promotional materials, high-quality printing helps create a strong and professional impression for your brand. It plays a key role in how customers perceive your business and can influence their decision to engage with your services.
                    </p>
                    <p className="text-base text-gray-600">
                        With many options available, choosing the best digital printing service can be challenging. This guide will help you understand what to look for and how to choose the right printing partner for your business.
                    </p>
                    <p className="text-base text-gray-600">
                        From print quality and material options to turnaround time and pricing, several factors can impact your final decision. By selecting a reliable printing company that understands your requirements, you can ensure consistent quality, better branding, and effective marketing results for your business.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Why Digital Printing Is More Important Than Ever in 2026</h2>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Faster turnaround times:</strong> Digital printing allows businesses to print materials quickly without long setup processes. This is ideal for urgent marketing campaigns and last-minute promotions.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Cost-effective for small quantities:</strong> It is perfect for short print runs, helping businesses save money on bulk printing. You can print only what you need without unnecessary costs.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>High-quality and consistency:</strong> Modern digital printing delivers sharp, vibrant, and professional results. It ensures consistent quality across all your marketing materials.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Customization and flexibility:</strong> You can easily personalize designs, sizes, and content based on your needs. This helps create targeted marketing materials for better engagement.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Eco-friendly options:</strong> Digital printing reduces waste and uses fewer resources compared to traditional methods. This supports sustainable and environmentally friendly business practices.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Key Features of the Best Digital Printing Services in Dubai</h2>
                    <div className="space-y-8 mt-6">
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">1. In-House Production for Better Control</h4>
                            <p className="text-sm text-gray-600">Top printing companies handle everything in-house, ensuring better quality and faster delivery. This also allows quick changes and customization without delays or miscommunication.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">2. High-Quality Printing Results</h4>
                            <p className="text-sm text-gray-600">Modern machines produce sharp text, vibrant colors, and consistent output. Whether it’s business cards or large banners, quality should always be professional and clear.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">3. Fast Turnaround Time</h4>
                            <p className="text-sm text-gray-600">In a fast-moving market like Dubai, speed matters. The best services offer quick delivery options without compromising on quality.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">4. Complete Range of Printing Services</h4>
                            <p className="text-sm text-gray-600">Leading digital printing companies offer more than just basic printing—they provide complete solutions for all your business needs. Their services usually include:</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                                {["Business cards", "Flyers & Brochures", "Posters & Banners", "Stickers & Labels", "Indoor Signage", "Outdoor Signage"].map((s, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-semibold bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle2 size={12} className="text-blue-600" /> {s}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">5. Customization & Finishing Options</h4>
                            <p className="text-sm text-gray-600">Custom designs, paper types, and finishes help your brand stand out. Quality finishing adds a premium look and leaves a lasting impression on customers.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Professional Digital Printing for UAE Businesses</h2>
                    <p className="text-base text-gray-600">
                        Digital printing plays a vital role in helping businesses across UAE create a strong and professional brand presence. It supports a wide range of industries by providing high-quality marketing materials that attract customers and enhance visibility.
                    </p>
                    <p className="font-bold text-gray-900">Industries that benefit include:</p>
                    <div className="flex flex-wrap gap-2 my-4">
                        {["Retail Malls", "Corporate Offices", "Restaurants", "Real Estate", "Exhibitions", "Startups"].map((ind, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">{ind}</span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">How to Choose the Right Digital Printing Service in UAE</h2>
                    <p className="text-base text-gray-600">
                        Choosing the right digital printing service in the UAE requires careful evaluation of quality, speed, and reliability. Look for a provider that serves all Emirates, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Check their portfolio, materials, and turnaround time. A good printing partner will offer consistent results, competitive pricing, and support your branding needs across different locations effectively.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">Conclusion</h2>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                        The best digital printing services in the UAE in 2026 combine advanced technology, experienced professionals, and complete in-house production to deliver high-quality results. Whether your business operates in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain, choosing the right printing partner plays a key role in building a strong and professional brand image.
                    </p>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                        As competition continues to grow across all Emirates, investing in high-quality digital printing is no longer optional—it’s essential. It helps your business stand out, attract customers, and create a lasting impression. For reliable and professional printing solutions across the UAE, contact Max Lead Advertising to support your business growth with quality and consistency. We provide the best <a href="/blog/uae-flyer-distribution-strategies-for-business-growth/" className="text-blue-600 font-bold hover:underline">flyer distribution strategies</a> and premium <a href="/blog/best-flyer-distribution-services-uae/" className="text-blue-600 font-bold hover:underline">flyer distribution services</a>.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Scale Your Brand Quality</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                If you want to grow your business with high-impact printing and targeted distribution, contact our experts today.
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