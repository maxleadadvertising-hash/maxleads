import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, CheckCircle2, Clock, User, PhoneCall, LayoutGrid, Zap, FileText, MessageSquare, Linkedin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- ACTIVE POST META --- */
const activePost = {
  id: 0,
  author: "MaxLead Strategy Team",
  readTime: "11 min read"
};

/* --- RELATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Best Leaflet Distribution Companies in UAE",
    description: "Compare leaflet distribution companies across the UAE and learn what separates a real operator from a middleman.",
    author: "MaxLead Strategy Team",
    date: "March 12, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Leaflet Distribution", "UAE Business"],
    link: "/blog/best-leaflet-distribution-companies-in-uae/"
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
    title: "What are the best digital printing services available in the UAE?",
    description: "Find the best digital printing services in the UAE. High-quality printing across all Emirates. Contact Max Lead Advertising for fast and reliable service.",
    author: "MaxLead Strategy Team",
    date: "March 9, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Printing Services", "UAE Business"],
    link: "/blog/best-digital-printing-services-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Leaflet Distribution", icon: FileText, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Digital Strategy", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Psychology", icon: Target, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" }
];

const faqs = [
  {
    q: "How can I prove my flyers were actually distributed?",
    a: "Through three layers of evidence: a live location link while the team is working, photos taken in the field showing identifiable buildings and communities, and a written audit report that reconciles the quantity allocated against the quantity distributed in each area."
  },
  {
    q: "What should a flyer distribution report include?",
    a: "Dates worked, named communities and buildings, quantity per area, distribution method, working hours, the supervisor's name, any access issues encountered, and a balance of pieces printed against pieces distributed and returned."
  },
  {
    q: "Can I watch the distribution happening?",
    a: "Yes. Ask for a live Google Maps location link on the day and arrange to visit one of the assigned areas yourself. Any established distribution company will accommodate both requests."
  },
  {
    q: "What if some buildings refuse access?",
    a: "This is normal in Dubai and should be recorded in the report along with what happened to the undelivered material. A report showing zero refusals across a large campaign is more suspicious than one showing several."
  }
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

export default function VerifyFlyerDistributionBlog() {

  useEffect(() => {
    // SEO Meta Tags Logic
    document.title = "How to Verify Flyer Distribution in Dubai | Max Lead Advertising";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Worried your flyers were never delivered? Learn what real proof looks like: field photos, audit reports and live location links. Contact Max Lead Advertising.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/verify-flyer-distribution-dubai/");

    // FAQ Schema for rich results
    const faqScript = document.createElement('script');
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-verify-flyer-distribution";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    });
    document.head.appendChild(faqScript);

    return () => {
      const existing = document.getElementById("faq-schema-verify-flyer-distribution");
      if (existing) existing.remove();
    };
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
                        <span>MaxLead UAE Distribution Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight text-center">
                        How to Verify Your Flyers Were <span className="text-blue-600">Actually Distributed</span>
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
                        Every business owner who has booked flyer distribution has had the same quiet thought: how do I know they didn't just throw them away?
                    </p>
                    <p className="text-base text-gray-600">
                        It's a fair question, and the industry has spent years avoiding it. Ask most distribution companies for proof and you get a verbal assurance, a WhatsApp message saying the job is done, and an invoice. That isn't proof. And if you can't verify distribution, you can't measure it — which means every conclusion you draw about whether flyers work for your business rests on an assumption.
                    </p>
                    <p className="text-base text-gray-600">
                        Here's what real verification looks like, what to ask for before you sign, and how to check independently without spending a dirham extra.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Why Undelivered Flyers Are an Industry Problem</h2>
                    <p className="text-base text-gray-600">
                        Understanding the incentive explains the behaviour. Flyer distribution is priced per thousand pieces, and the distributor's cost is labour and time. A team that genuinely walks a tower floor by floor, waits for lift access and covers 400 units properly earns the same as a team that dumps the same quantity and reports the same numbers — unless somebody is checking.
                    </p>
                    <p className="text-base text-gray-600">
                        Three things make it harder in the UAE. Subcontracting chains mean the company you hired may not be the company on the ground. Access is genuinely difficult, because gated communities, tower security and building management all control entry — and where access is refused, an unsupervised team has an obvious shortcut. And because clients rarely ask for documentation, most vendors never built a process to provide it.
                    </p>
                    <p className="text-base text-gray-600">
                        The point isn't that distributors are dishonest. It's that a system without verification will always produce some undelivered material, and you have no way of knowing whether the campaign it happened to was yours.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Proof 1: A Live Location Link on the Day</h2>
                    <p className="text-base text-gray-600">
                        The strongest form of verification is also the simplest. While your campaign is running, you should be able to open a link and see where the distribution team actually is.
                    </p>
                    <p className="text-base text-gray-600">
                        A live Google Maps location link, shared by the supervisor, lets you follow the team through the assigned community in real time. You don't need marketing expertise to read it. If the team is inside the community you paid for, during the hours you were told, moving at walking pace rather than parked in one spot, the work is happening.
                    </p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Correct location:</strong> The team is physically inside the community you booked, not a neighbouring one.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Correct timing:</strong> Distribution is running on the scheduled date and within the agreed hours.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Genuine coverage:</strong> Movement spreads across the area rather than concentrating in one corner.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Live accountability:</strong> You can call the supervisor while they're standing in the area, not a week later.</span></li>
                    </ul>
                    <p className="text-base text-gray-600 pt-4">
                        Ask two questions: is live location sharing standard on every campaign, and will you receive the link before the team starts or after they finish? The answer to the second one tells you a great deal.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Proof 2: Photos From the Field</h2>
                    <p className="text-base text-gray-600">
                        Photos are the evidence layer. A serious distribution company sends images captured during the campaign, in the field, not assembled afterwards in an office.
                    </p>
                    <p className="text-base text-gray-600">
                        Ask for the team photographed at the community entrance or beside tower signage, flyers photographed in position under doors and in mailbox banks, bundles photographed at the start of the day showing quantities going into the area, and coverage spread across the whole campaign rather than three images from a single building.
                    </p>
                    <p className="text-base text-gray-600">
                        When the set arrives, you don't need forensic skills to read it. Check whether the backgrounds actually differ, or whether every photo looks like the same corridor. Check whether you can identify the building from the image, or whether it could be anywhere in the UAE. Check whether the images span the working day or were all taken within a few minutes. And check that the locations shown match the areas listed on your report. Ten photos from ten identifiable locations across a working day is a very different document from ten photos taken in one stairwell.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Proof 3: A Written Audit Report</h2>
                    <p className="text-base text-gray-600">
                        The report is what you keep, what you compare against next time, and what you check before approving payment. A credible flyer distribution audit report covers every one of these fields:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
                        {["Campaign Dates Worked", "Named Communities", "Buildings & Clusters", "Quantity Per Area", "Distribution Method", "Daily Working Hours", "Supervisor Name", "Access Issues Logged", "Balance Reconciliation"].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle2 size={12} className="text-blue-600" /> {s}</div>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 pt-8">
                        That last field matters more than people realise. If you printed 20,000 pieces and the report accounts for 20,000 distributed with no returns, no refusals and no damage across a multi-day campaign in Dubai, the report is describing a campaign that didn't happen. Honest reports have friction in them.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Three Checks You Can Run Yourself</h2>
                    <p className="text-base text-gray-600">
                        You don't have to rely entirely on your vendor's documentation. These cost nothing and take minutes to set up.
                    </p>
                    <div className="space-y-8 mt-6">
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Check 1 — Plant a Seed Address</h4>
                            <p className="text-sm text-gray-600">Before the campaign starts, arrange for a friend, employee or family member living inside one of the target communities to watch for the flyer. It's the most direct test available. Don't tell the distribution company which address it is.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Check 2 — Use a Different Code Per Area</h4>
                            <p className="text-sm text-gray-600">Print a distinct promo code, QR code or WhatsApp number for each community. When responses arrive you'll know which areas received material and which produced silence. Over two or three campaigns this becomes real targeting data, not just a check.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Check 3 — Show Up Unannounced</h4>
                            <p className="text-sm text-gray-600">You're entitled to observe distribution you've paid for. Ask for the schedule in advance and visit one area on one day. A company that welcomes this is confident in its process. Hesitation is its own answer.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Questions to Ask Before You Sign</h2>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>Will I receive a live location link while the team is working?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>How many photos will I receive, and from how many separate locations?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>Can I see a sample audit report from a previous campaign?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>Who is the named supervisor for my campaign, and can I contact them directly?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>Do you subcontract any part of the distribution?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>What happens to flyers for buildings that refuse access?</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span>Can I visit the area on the day of distribution?</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Red Flags in the Answers</h2>
                    <p className="text-base text-gray-600">
                        Proof described as available on request rather than as standard. Photos promised only after the invoice is settled. A sample report with no named buildings or quantities in it. No single person accountable for a day's work. Reluctance about you visiting the site. And a quoted price far below every other bid — verification costs money, and someone in that quotation isn't doing it.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Put It in Writing</h2>
                    <p className="text-base text-gray-600">
                        Verification only means something if it's attached to payment. Three clauses are worth adding to your purchase order, and any established distribution company will accept all three.
                    </p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Documentation before payment:</strong> Final payment falls due once the audit report and photo set are submitted and accepted, not on completion of the working days.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Right to audit:</strong> You may attend and observe distribution in any assigned area without prior notice.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Re-run clause:</strong> Where documentation isn't provided, or a spot check shows an area wasn't covered, that area is redistributed at the vendor's cost.</span></li>
                    </ul>
                    <p className="text-base text-gray-600 pt-4">
                        None of these are unreasonable. The companies that object to them are telling you exactly why they object.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Frequently Asked Questions</h2>
                    <div className="space-y-6 mt-6">
                        {faqs.map((item, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                <h3 className="font-bold text-gray-900 text-base mb-2">{item.q}</h3>
                                <p className="text-sm text-gray-600 m-0">{item.a}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">Distribution You Can Check, Not Just Trust</h2>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                        Max Lead Advertising has been running flyer distribution, printing, SMS and digital campaigns across Dubai, Sharjah, Ajman and Abu Dhabi since 2015. Every campaign includes a live location link while the team is working, photo documentation from the field, and a full audit report covering every area we cover.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Ask Us for a Sample Audit Report</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                See exactly what proof you'll receive before you commit a single dirham to the campaign.
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