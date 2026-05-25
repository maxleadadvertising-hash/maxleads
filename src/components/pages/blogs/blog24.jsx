import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, MapPin, CheckCircle2, Clock, User, PhoneCall, LayoutGrid, FileText, MessageSquare, Linkedin } from "lucide-react"; // Added Linkedin
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Unlock the Power of Local Advertising with Door Hangers",
    description: "Door hangers are different. They hang alone. They demand attention. Learn why they are the most powerful weapon for local businesses.",
    author: "MaxLead Strategy Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Local Ads", "Neighborhood"],
    link: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/"
  },
  {
    id: 2,
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
    id: 3,
    title: "How much do social media marketing services cost in the UAE?",
    description: "Explore social media marketing services cost in the UAE and learn what factors influence pricing and growth strategy.",
    author: "MaxLead Strategy Team",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Digital Marketing"],
    link: "/blog/social-media-marketing-services-cost-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Door Hangers", icon: MapPin, path: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" },
  { name: "Flyer Distribution", icon: FileText, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "SMM Cost Guide", icon: LayoutGrid, path: "/blog/social-media-marketing-services-cost-uae/" },
  { name: "Digital Strategy", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" }
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

export default function DigitalPrintingBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // Injecting SEO Meta Tags manually
    document.title = "Best Digital Printing Company in Dubai (2026) | Ultimate Guide";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Stand out in Dubai’s competitive market in 2026. Find the best digital printing company with expert tips, high-quality solutions, and reliable printing partners.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/best-digital-printing-company-dubai-2026/");
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
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Digital Printing Strategy</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        The Ultimate Guide to Choosing the <span className="text-blue-600">Best Digital Printing Company in Dubai (2026)</span>
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User size={14} aria-hidden="true" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group">
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
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
                    
                    <div className="mb-12">
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-blue-500 pl-6 mb-8">
                            In Dubai, business moves fast, so timing and presentation really matter. Deadlines can be tight, and first impressions make a big difference. Things like brochures, flyers, leaflet distribution, commercial area distribution and banners are often the first thing people notice about your business. Poor quality or late delivery can harm your brand and make your business look unprofessional.
                        </p>
                        <p className="text-base text-gray-600">
                            There is also growing demand for highly specialized services such as packaging, large-format printing, 3D solutions, and other customized offerings for a wide range of industries: healthcare, retail & FMCG, food & hospitality, real estate, and corporate firms.
                        </p>
                        <p className="text-base text-gray-600">
                            Whether you're a startup creating your first marketing kit or an experienced company expanding your print operations, this 2026 guide explains precisely what to look for so you can make an informed decision and locate a printer in Dubai that you can truly rely on.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Understanding Your Printing Requirements in 2026</h2>
                    <p className="text-base text-gray-600">Before choosing the best printing company across the UAE, you need to be clear about your business goals and requirements. Digital printing services in Dubai, Abu Dhabi, and Sharjah have improved a lot in 2026, offering faster turnaround times, eco-friendly materials, and better customization options.</p>                   
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {[
                            { d: "What type of materials do you need for your goal?" },
                            { d: "What quantity and turnaround time are required?" },
                            { d: "Do you need design support or only printing?" },
                            { d: "Are you looking for eco-friendly printing options?" },
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-sm text-gray-600">{item.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-base text-gray-600">Having clear answers helps you narrow down companies that specialize in exactly what you need—saving both time and cost.</p> 
                    
                    <h3 className="text-2xl font-bold text-gray-900 pt-6">Why Choosing the Right Printing Partner Matters in 2026</h3>
                    <p className="text-base">Dubai is a competitive market, and the same goes for other emirates. Your printed materials are often the first impression of your brand compared to your competitors.</p>
                    <ul className="space-y-2 text-base text-gray-600">
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Consistent quality across all printing materials, ensuring a uniform and professional brand image, Maintains high standards across every print run, regardless of volume or format.</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Fast delivery to meet tight deadlines, helping you stay on schedule, Supports time-sensitive campaigns and last-minute business requirements.</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Professional finishing that enhances brand perception and visual appeal, Adds a polished look that strengthens credibility and customer trust.</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" /> Cost efficiency through optimized production, reducing unnecessary expenses, Maximizes value while maintaining quality and minimizing waste.</li>
                    </ul>
                    <p className="text-base">In 2026, businesses are focusing more on personalization and premium finishes. A reliable printing company doesn’t just print—they contribute to your branding and marketing success.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Key Features of the Best Digital Printing Companies in Dubai</h2>
                    <p className="text-base">Not all printing companies are the same. The best digital printing services in Dubai in 2026 stand out through the following features, combining advanced technology, skilled expertise, and a strong commitment to quality. These factors ensure businesses receive reliable, high-impact printing solutions that meet both creative and operational needs.</p>
                    <ul className="space-y-4 list-none p-0 text-gray-600">
                        <li><strong>Advanced Printing Technology:</strong> Top companies use high-resolution digital printers that deliver sharp colors, precise details, and consistent results.</li>
                        <li><strong>Wide Range of Services:</strong> From large-format printing to customized promotional materials, a good company should offer diverse solutions under one roof.</li>
                        <li><strong>Customization & Flexibility:</strong> Whether it’s unique sizes, materials, or finishes, flexibility is essential for modern businesses.</li>
                        <li><strong>Eco-Friendly Printing Options:</strong> Sustainability is a growing priority in 2026. Look for companies offering recyclable materials and environmentally friendly inks.</li>
                        <li><strong>Fast Turnaround Times:</strong> Speed matters in Dubai’s business environment. The best providers offer same-day or next-day services without compromising quality.</li>
                        <li><strong>Strong Portfolio & Client Reviews:</strong> Reputation speaks volumes. Always check previous work and customer feedback.</li>
                    </ul>
             
                    <h2 className="text-2xl font-bold text-gray-900">How to Choose the Right Digital Printing Company in Dubai</h2>
                    <p className="text-base text-gray-600">With so many options available, making the right choice can feel overwhelming. Here’s a simple process to follow to narrow down your options and make a confident decision. By focusing on key factors like quality, turnaround time, and reliability, you can select a printing partner that aligns with your business goals and delivers consistent results.</p>
                    <div className="space-y-4 my-8">
                        <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Compare Quality</h4>
                                <p className="text-xs text-gray-500">Request samples to check print quality, color accuracy, and consistency, ensuring professional results that enhance your brand image.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Check Pricing Transparency</h4>
                                <p className="text-xs text-gray-500">Avoid hidden charges with clear, detailed quotations outlining all costs upfront, ensuring better budgeting and no unexpected expenses.</p>
                            </div>
                        </div>
                         <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Evaluate Customer Support</h4>
                                <p className="text-xs text-gray-500">Responsive communication ensures quick support for urgent or custom orders, enabling smooth coordination and faster issue resolution when needed.</p>
                            </div>
                        </div>
                         <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Assess Turnaround Time</h4>
                                <p className="text-xs text-gray-500"> Ensure they meet deadlines, handle urgent requests efficiently, and maintain reliable production capacity to keep campaigns and operations on track.</p>
                            </div>
                        </div>
                         <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Look for Added Value</h4>
                                <p className="text-xs text-gray-500"> Some companies provide design, installation, or delivery services, making your process easier and more efficient by reducing the need for multiple vendors.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Final Thoughts</h2>
                    <p className="text-base text-gray-600">
                        Choosing the best digital printing company in Dubai in 2026 is not just about price—it’s about quality, reliability, and building a long-term partnership. Whether you need Flyer printing in Dubai or large-scale marketing materials, selecting the right partner ensures your brand stands out with consistency and professionalism. By understanding your requirements and evaluating key factors, you can work with a printing provider that truly supports your business growth. For expert guidance and tailored printing solutions, connect with the Max Lead Advertising team today and take your brand visibility to the next level.
                    </p>

                    <div className="bg-gradient-to-br from-green-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to start?</h3>
                            <p className="text-green-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                Choose the Right Digital Printing Partner in Dubai Today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Free Consultation
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Related Strategy Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
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