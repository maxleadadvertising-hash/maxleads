import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, MapPin, CheckCircle2, MessageSquare, Clock, User, LayoutGrid, Zap, ArrowRight, PhoneCall, Linkedin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- POST CONSTANTS --- */
const POST_ID = 12;
const POST_SLUG = "/blog/ai-search-digital-marketing-in-dubai-2026/";
const POST_URL = "https://www.maxleadadvertising.com/blog/ai-search-digital-marketing-in-dubai-2026/";
const PUBLISHED_ISO = "2026-08-24";
const UPDATED_ISO = "2026-08-24";
const LAST_UPDATED_LABEL = "Aug 24, 2026";

/* --- FULL STRATEGIC BLOG DATA --- */
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
    link: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    id: 3,
    title: "Dos and Don'ts of Flyer Distribution in UAE",
    description: "Avoid common pitfalls. Learn the expert rules for successful door to door flyer distribution in Dubai and the wider Emirates.",
    author: "Operations Lead",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Expert Tips", "Compliance"],
    link: "/blog/dos-and-donts-of-flyer-distribution-in-uae/"
  },
  {
    id: 11,
    title: "Affordable Digital Marketing Packages for Startups in UAE",
    description: "Affordable digital marketing packages in the UAE. We offer cost-effective SEO, social media, ads, and content services to help startups grow.",
    author: "MaxLead Team",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Startups"],
    link: "/blog/affordable-digital-marketing-packages-uae/"
  },
  {
    id: POST_ID,
    title: "How AI Search Is Changing Digital Marketing in 2026",
    description: "AI search has moved the goalposts from rankings to citations. Here's what changed in 2026 and how to build AI visibility for your brand.",
    author: "Strategy Team",
    date: "Aug 24, 2026",
    readTime: "9 min read",
    /* TODO: swap this for a unique AI/search image — currently shares the image used by post id 2 */
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["AI Search", "SEO"],
    link: POST_SLUG
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Digital Marketing", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "AI Visibility", icon: Zap, path: POST_SLUG },
  { name: "Startup Packages", icon: Target, path: "/blog/affordable-digital-marketing-packages-uae/" }
];

/* --- STAT CARDS --- */
const stats = [
  {
    figure: "1B+",
    label: "monthly users on Google AI Mode",
    note: "Confirmed at Google I/O in May 2026, alongside a claim that this is the biggest upgrade to Search in over 25 years."
  },
  {
    figure: "~48%",
    label: "of Google queries show an AI Overview",
    note: "Ahrefs data from March 2026, up from roughly 34.5% in December 2025."
  },
  {
    figure: "~68%",
    label: "US zero-click search rate",
    note: "Early 2026 — climbing into the low 80s on queries where an AI Overview appears."
  }
];

/* --- FIVE TACTICS --- */
const tactics = [
  {
    title: "1. Front-load a quotable answer",
    body: "Open every page with a self-contained 40–60 word answer to the question in the title. That block is often the exact text an engine lifts into its answer."
  },
  {
    title: "2. Structure for extraction",
    body: "Question-style H2s, FAQ blocks, comparison tables, and clean schema markup all make a page easier for a retrieval system to parse and cite accurately."
  },
  {
    title: "3. Use the citation triad",
    body: "Peer-reviewed research (Aggarwal et al., KDD 2024) found that adding quotations, statistics, and cited sources each lifted a page's visibility in generative answers by roughly 30–40%. Keyword stuffing tested negative. The tactics that win here are close to the opposite of early SEO."
  },
  {
    title: "4. Refresh relentlessly",
    body: "Answer engines favour current content. Dated statistics, visible “last updated” stamps, and a rolling refresh cycle on your highest-value pages protect citations that quietly decay."
  },
  {
    title: "5. Stop optimising for one platform",
    body: "Similarweb data shows ChatGPT's share of generative AI web traffic falling from roughly 76% a year ago to around 53% today, with Gemini and Claude absorbing the difference. Citation overlap between platforms is low, so a one-engine strategy misses most of the opportunity."
  }
];

/* --- MEASUREMENT CHECKLIST --- */
const measurement = [
  { label: "Prompt tracking", text: "Pick 20–30 buyer questions and log monthly whether you're cited across ChatGPT, Gemini, Perplexity, and AI Overviews." },
  { label: "Share of citation", text: "Track your citation rate against named competitors, not in isolation." },
  { label: "Branded search lift", text: "Rising branded query volume is often the first sign AI recommendations are working." },
  { label: "Platform reporting", text: "Google has begun exposing AI performance data in Search Console and Merchant Center — use it as it rolls out in your market." }
];

/* --- FAQ (also powers the FAQPage schema below) --- */
const faqs = [
  {
    q: "What is AI visibility?",
    a: "AI visibility is how often your brand is cited, quoted, or recommended inside AI-generated answers. In 2026 it sits beside rankings as a core marketing metric, because a growing share of searches now end inside the answer instead of on your website."
  },
  {
    q: "Is AI visibility the same as SEO?",
    a: "No. AI visibility isn't a replacement for SEO — it's what SEO becomes when the results page starts answering for itself. Ranking is now an input to visibility rather than a substitute for it."
  },
  {
    q: "Does AI search traffic actually convert?",
    a: "The volume is small — Conductor puts AI referrals near 1% of total site traffic — but it converts several times better than standard organic, with longer sessions and higher return rates. Low volume, high intent."
  },
  {
    q: "How do I get cited by ChatGPT or AI Overviews?",
    a: "Publish a self-contained 40–60 word answer near the top of the page, structure the content for extraction with question-style headings and schema markup, back claims with statistics and cited sources, and refresh the page on a regular cycle."
  },
  {
    q: "How do I measure AI visibility?",
    a: "Referral traffic in GA4 is the smallest, least representative slice. Track prompt-level citations across ChatGPT, Gemini, Perplexity, and AI Overviews, measure share of citation against named competitors, and watch branded search volume for lift."
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

export default function AiSearchVisibilityBlog() {
  const activePost = blogs.find(b => b.id === POST_ID) || blogs[blogs.length - 1];

  useEffect(() => {
    // SEO: meta title, description and canonical injected directly
    document.title = "How AI Search Is Changing Digital Marketing in 2026";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "AI search has moved the goalposts from rankings to citations. Here's what changed in 2026 and how to build AI visibility for your brand.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", POST_URL);
  }, []);

  useEffect(() => {
    // Article + FAQPage schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "How AI Search Is Changing Digital Marketing in 2026: A Guide to AI Visibility",
          "description": "AI search has moved the goalposts from rankings to citations. Here's what changed in 2026 and how to build AI visibility for your brand.",
          "image": activePost.image,
          "datePublished": PUBLISHED_ISO,
          "dateModified": UPDATED_ISO,
          "author": { "@type": "Organization", "name": "Max Lead Advertising & Distribution FZE" },
          "publisher": {
            "@type": "Organization",
            "name": "Max Lead Advertising & Distribution FZE",
            "url": "https://www.maxleadadvertising.com/"
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": POST_URL }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ai-visibility-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("ai-visibility-schema");
      if (existing) existing.remove();
    };
  }, [activePost.image]);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };
  const openLinkedin = () => { window.open("https://www.linkedin.com/company/max-lead-advertising-distribution/", "_blank"); };

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-12 px-6 bg-[#f8fafc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <Zap className="w-3 h-3" />
                        <span>AI Search &amp; GEO 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        How AI search is changing digital marketing in 2026: a guide to AI visibility
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm mb-2">
                        <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit our LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User size={14} aria-hidden="true" /> {activePost.author}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Last updated: {LAST_UPDATED_LABEL}</p>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group">
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
                <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">

                    {/* --- FRONT-LOADED ANSWER BLOCK (the text engines are most likely to lift) --- */}
                    <div className="mb-12 mt-10 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 mb-3">The short version</p>
                        <p className="text-base md:text-lg text-gray-800 m-0">
                            AI visibility is how often your brand is cited, quoted, or recommended inside AI-generated answers. In 2026 it sits beside rankings as a core marketing metric, because a growing share of searches now end inside the answer instead of on your website. You earn it by being the clearest, best-evidenced source on a question — not by ranking alone.
                        </p>
                    </div>

                    {/* --- SECTION 1 --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-6">What actually changed in search this year</h2>
                    <p className="text-base text-gray-600">Three numbers frame the shift.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                        {stats.map((stat, idx) => (
                          <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-3xl font-black text-green-600 m-0">{stat.figure}</p>
                            <p className="text-sm font-bold text-gray-900 mt-2 mb-2">{stat.label}</p>
                            <p className="text-xs text-gray-500 m-0">{stat.note}</p>
                          </div>
                        ))}
                    </div>

                    <p className="text-base text-gray-600">People are searching as much as ever. They&apos;re just finishing far more of those journeys without leaving the results page.</p>

                    {/* --- SECTION 2 --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Why ranking #1 stopped guaranteeing visibility</h2>
                    <p className="text-base text-gray-600">The old contract was simple: rank well, get traffic. That contract is dissolving.</p>
                    <p className="text-xl font-bold text-gray-900 italic border-l-4 border-green-500 pl-6 my-6">Being in the answer beats ranking beneath it.</p>
                    <p className="text-base text-gray-600">The overlap between Google&apos;s top-ranking pages and the sources AI engines actually cite has narrowed sharply — several 2026 analyses put it well below the ~70% marketers were used to. Ranking is now an input to visibility, not a substitute for it. Meanwhile, pages cited inside an AI Overview have been shown to earn meaningfully more clicks than an uncited position-one result, which flips the objective.</p>
                    <p className="text-base text-gray-600">The traffic that does arrive from AI is a small slice — Conductor puts AI referrals near 1% of total site traffic — but it converts several times better than standard organic, with longer sessions and higher return rates. Low volume, high intent.</p>

                    {/* --- SECTION 3 --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Five ways to build AI visibility</h2>

                    <div className="space-y-8 mt-6">
                        {tactics.map((tactic, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-gray-900 flex items-center gap-2 text-lg"><div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"/> {tactic.title}</h3>
                            <p className="text-base text-gray-600">{tactic.body}</p>
                          </div>
                        ))}
                    </div>

                    {/* --- SECTION 4 --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">How to measure AI visibility</h2>
                    <p className="text-base text-gray-600">Referral traffic in GA4 is the smallest, least representative slice of AI&apos;s influence — most of it surfaces later as branded search or direct visits. Build a fuller picture instead:</p>
                    <ul className="space-y-3 text-base text-gray-600">
                        {measurement.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" aria-hidden="true" />
                            <span><strong>{item.label}:</strong> {item.text}</span>
                          </li>
                        ))}
                    </ul>

                    {/* --- SECTION 5 --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Common AI visibility mistakes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        {["Keyword stuffing the page", "Optimising for one AI platform", "Judging AI impact by GA4 referrals alone", "Letting statistics go stale", "Treating rankings as the whole goal", "Publishing without schema or structure"].map((error, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                            <span className="text-red-500 text-lg" aria-hidden="true">❌</span>
                            <span className="text-sm font-bold text-gray-800">{error}</span>
                          </div>
                        ))}
                    </div>

                    {/* --- FAQ --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Frequently asked questions</h2>
                    <div className="space-y-6 mt-6">
                        {faqs.map((faq, idx) => (
                          <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">{faq.q}</h3>
                            <p className="text-base text-gray-600 m-0">{faq.a}</p>
                          </div>
                        ))}
                    </div>

                    {/* --- TAKEAWAY --- */}
                    <h2 className="text-2xl font-bold text-gray-900 pt-10">The takeaway</h2>
                    <p className="text-base text-gray-600">AI visibility isn&apos;t a replacement for SEO; it&apos;s what SEO becomes when the results page starts answering for itself. The brands winning citations in 2026 aren&apos;t gaming a new algorithm. They&apos;re publishing genuinely better-evidenced answers — and measuring whether the machines noticed.</p>

                    {/* --- CTA --- */}
                    <div className="bg-gradient-to-br from-green-600 to-emerald-800 p-10 rounded-3xl mt-12 text-white relative overflow-hidden text-center shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to find out where you stand?</h3>
                            <p className="text-green-100 text-base mb-8 max-w-2xl mx-auto">
                                Run a citation audit on your top 20 buyer questions this week. If your brand isn&apos;t in those answers, you now know exactly what to fix — and we can help you fix it.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Get Consultation
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-gray-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-black transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MessageSquare size={16} aria-hidden="true" /> WhatsApp Us
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Strategic Insights Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== POST_ID).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {blog.readTime}</span>
                                        <ArrowRight size={14} className="text-green-600" aria-hidden="true" />
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