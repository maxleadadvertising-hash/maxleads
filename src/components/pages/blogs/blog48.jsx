import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { MapPin, Clock, User, LayoutGrid, FileText, MessageSquare, Globe, BarChart3, CheckCircle2, TrendingUp, Zap, PhoneCall, Linkedin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

const blogs = [
  {
    id: 22,
    title: "Nursery & School Admission Season Flyer Campaigns in the UAE",
    description: "Fill seats faster this admission season. A practical guide to nursery and school flyer distribution in Dubai, Sharjah and Ajman — timing, areas and offers.",
    author: "MaxLead Strategy Team",
    date: "August 12, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["School Marketing", "Admissions"],
    link: "/blog/nursery-school-admission-season-flyer-campaigns-uae/"
  },
  {
    id: 21,
    title: "Pamphlets vs Flyers UAE: Which One Brings More Customers?",
    description: "Struggling to choose between flyers and pamphlets? Discover which marketing strategy works best in the UAE to attract more customers, increase reach, and boost ROI.",
    author: "MaxLead Strategy Team",
    date: "March 25, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "Customer Growth"],
    link: "/blog/flyer-vs-pamphlet-distribution-marketing-which-strategy-brings-more-customers/"
  },
  {
    id: 4,
    title: "How to choose a flyer distribution company near me",
    description: "Reach your local audience faster with Max Lead Advertising. Expert flyer distribution services designed to increase visibility, generate leads, and grow sales.",
    author: "MaxLead Strategy Team",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Local Marketing"],
    link: "/blog/flyer-distribution-company-near-me/"
  },
  {
    id: 1,
    title: "Best Flyer Distribution Services in UAE 2026",
    description: "Looking for top flyer distribution services in UAE 2026? Reach the right audience with strategic area targeting and professional delivery solutions.",
    author: "MaxLead Team",
    date: "March 8, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "UAE Strategy"],
    link: "/blog/best-flyer-distribution-services-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "School Admissions", icon: User, path: "/blog/nursery-school-admission-season-flyer-campaigns-uae/" },
  { name: "Flyer vs Pamphlet", icon: BarChart3, path: "/blog/flyer-vs-pamphlet-distribution-marketing-which-strategy-brings-more-customers/" },
  { name: "Flyer Distribution", icon: FileText, path: "/blog/flyer-distribution-company-near-me/" },
  { name: "Digital Strategy", icon: Globe, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Local SEO", icon: MapPin, path: "/blog/local-marketing-tips/" },
  { name: "Psychology", icon: Zap, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" }
];

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
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

export default function NurserySchoolAdmissionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    document.title = "Nursery & School Admission Flyer Campaigns in UAE | Max Lead";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Fill seats faster this admission season. A practical guide to nursery and school flyer distribution in Dubai, Sharjah and Ajman — timing, areas and offers.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/nursery-school-admission-season-flyer-campaigns-uae/");
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

      <main className="bg-white min-h-screen overflow-x-hidden">

        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-[#fcfcfc] border-b border-gray-100 text-center">
            <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-4 md:mb-6 mt-8 md:mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Admission Season Playbook 2026</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4 md:mb-6 leading-tight px-2">
                        Nursery &amp; School Admission Season <span className="text-blue-600">Flyer Campaigns in the UAE</span>
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit our LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5"><User className="w-4 h-4" aria-hidden="true" /> {activePost.author}</span>
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

                    <div className="mb-8 md:mb-12">
                        <p className="text-sm md:text-base text-gray-600">
                        Every year, thousands of UAE parents choose a nursery or school within a few short weeks. The decision rarely happens on a screen. It happens at home, at the kitchen table, with printed options spread out and two parents comparing fees.
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                        That is exactly the moment school admission marketing in the UAE has to reach them — and a well-timed flyer campaign is one of the very few channels that lands right there.
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                        This guide covers the timing, the areas and the flyer details that fill seats faster across Dubai, Sharjah and Ajman.
                        </p>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-4 md:pt-6">Know the Admission Calendar Before You Print</h2>
                    <p className="text-sm md:text-base text-gray-600">The main UAE academic year begins in late August or early September, with smaller intakes in January and April. Parents start shortlisting far earlier than most schools expect. Nursery enquiries peak between January and May, while registration for sought-after school seats can open a full year ahead.</p>
                    <p className="text-sm md:text-base text-gray-600 mt-4">The practical rule: begin distributing eight to twelve weeks before your open day, not before your intake date. Plan three waves rather than one large drop.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                        {[
                            { t: "Wave 1 — Awareness", d: "An introduction drop that puts your curriculum, rating and fee range in front of families before they start shortlisting." },
                            { t: "Wave 2 — Open Day Invitation", d: "A dated invitation with a QR code that books a tour in one tap, delivered two to three weeks before the event." },
                            { t: "Wave 3 — Limited Seats", d: "A final push to the same catchment for families who are still deciding, focused on remaining seats and age groups." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.t}</h4>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10 md:pt-12">Target Families, Not Postcodes</h2>
                    <p className="text-sm md:text-base text-gray-600">Parents almost never choose a nursery more than 15 to 20 minutes from home. That makes admissions a hyper-local job — and it makes your choice of <a href="/blog/best-locations-for-flyer-distribution-in-the-uae/" className="text-blue-600 font-semibold hover:underline">best areas to distribute</a> the single biggest factor in the campaign.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                        {[
                            { t: "Dubai", d: "Mirdif, Al Warqa, Al Khawaneej, Arabian Ranches and Dubai Hills — villa communities and family-heavy towers with young children at home." },
                            { t: "Sharjah", d: "Al Nahda, Al Majaz and Muweilah, where dense family housing sits within a short drive of most nurseries and schools." },
                            { t: "Ajman", d: "Al Rashidiya and Al Nuaimiya, strong residential catchments for nurseries serving both Ajman and northern Sharjah families." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.t}</h4>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mt-6">Newly handed-over communities are especially valuable, because those families have not chosen yet.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10 md:pt-12">Put the Right Information on the Flyer</h2>
                    <p className="text-sm md:text-base text-gray-600">Parents compare on a short list of facts. Leave one out and you lose the call.</p>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 mt-6">
                        <ul className="space-y-4 list-none p-0 m-0">
                            {[
                              { g: "Curriculum", d: "British, American, IB or EYFS — stated clearly on the front." },
                              { g: "Inspection Rating", d: "Your KHDA, ADEK or SPEA rating, which parents use as a first filter." },
                              { g: "Fee Range", d: "Vague fees kill enquiries. A clear range builds trust and saves both sides time." },
                              { g: "Age Groups and Seats", d: "Which age groups you accept and which seats are currently available." },
                              { g: "Bus Routes", d: "School bus routes and catchment areas, so parents can picture the daily run." },
                              { g: "Open Day Details", d: "The date and time, printed large enough to be pinned to a fridge." },
                              { g: "QR Code", d: "A code that books a tour in one tap, with no form-filling in between." }
                            ].map((row, i) => (
                              <li key={i} className="flex gap-3 md:gap-4">
                                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} aria-hidden="true" />
                                  <div className="text-xs md:text-base"><strong className="text-gray-900">{row.g}:</strong> {row.d}</div>
                              </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10 md:pt-12">Go Beyond the Door</h2>
                    <p className="text-sm md:text-base text-gray-600">Door-to-door distribution remains the backbone of any admission campaign, but it works considerably harder in combination.</p>

                    <div className="space-y-4 md:space-y-8 mt-6 md:mt-8">
                        <div className="p-5 md:p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">1. Clinics and Pharmacies</h4>
                            <p className="text-xs md:text-sm text-gray-600">Paediatric clinics, pharmacies and family dental centres put your flyer in the hands of parents who are already thinking about their children.</p>
                        </div>
                        <div className="p-5 md:p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">2. Supermarkets in Your Catchment</h4>
                            <p className="text-xs md:text-sm text-gray-600">Weekly grocery runs bring the same families past the same counters. Supermarkets inside your catchment give you repeat exposure at low cost.</p>
                        </div>
                        <div className="p-5 md:p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">3. Play Areas and Activity Centres</h4>
                            <p className="text-xs md:text-sm text-gray-600">Indoor play areas and children's activity centres reach parents during unhurried time, when they are more likely to read a full flyer.</p>
                        </div>
                        <div className="p-5 md:p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">4. Feeder Handoffs</h4>
                            <p className="text-xs md:text-sm text-gray-600">Nurseries near your primary school, and the reverse. Families moving up a stage are the warmest audience in the market.</p>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 mt-6">Adding an <a href="/sms-services-in-dubai/" className="text-blue-600 font-semibold hover:underline">SMS follow-up</a> two days before an open day reliably lifts attendance, because most parents diarise the date and then forget it.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10 md:pt-12">Measure Every Area Separately</h2>
                    <p className="text-sm md:text-base text-gray-600">Use a different QR code or phone extension for each community you cover. After a single season you will know which areas produce enrolments and which only produce enquiries — and the following year's budget effectively writes itself.</p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10 md:pt-12">Start Early, Fill Faster</h2>
                    <p className="text-sm md:text-base text-gray-600">Admission season rewards preparation, not spend. Schools and nurseries that map their catchment, print early and distribute in planned waves consistently fill seats before those that launch a rushed campaign in August.</p>
                    <p className="text-sm md:text-base text-gray-600 mt-4">Book your <a href="/flyer" className="text-blue-600 font-semibold hover:underline">flyer distribution services</a> early — in the UAE's peak marketing months, the best areas are committed weeks in advance. If you want help with <a href="/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" className="text-blue-600 font-semibold hover:underline">campaign planning</a>, our team can map your catchment and build the wave schedule with you.</p>

                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter">Filling Seats for the Next Intake?</h3>
                            <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                            Max Lead Advertising has distributed for nurseries and schools across all seven emirates since 2015. We map your catchment, print your flyers, and deliver them door to door — before your competitors do.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-900 font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Get a Free Distribution Quote
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-800 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-900 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-xs md:text-sm flex items-center justify-center gap-2">
                                    <MessageSquare size={16} aria-hidden="true" /> Call Us Today
                                </button>
                            </div>
                            <p className="text-blue-200 text-[10px] md:text-xs mt-6 font-medium">
                            Door-to-door distribution · Printing · SMS follow-up · All 7 Emirates
                            </p>
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
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all font-bold text-[10px]">Read Story <ArrowRight size={12} aria-hidden="true" /></span>
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

const ArrowRight = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);