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
  readTime: "10 min read"
};

/* --- RELATED BLOG DATA --- */
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

const faqs = [
  {
    q: "Does flyer distribution actually work for online stores?",
    a: "Yes, when it's tracked. QR codes and unique discount codes make print as measurable as a digital campaign, and it reaches households that paid ads often miss."
  },
  {
    q: "How quickly do SMS campaigns show results?",
    a: "Most of the response arrives within a few hours of sending, which makes SMS well suited to flash sales and limited-time offers."
  },
  {
    q: "Which emirates should a new store target first?",
    a: "Start with the areas your existing orders already come from, then test one new community at a time with a separate tracking code."
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

export default function EcommerceMarketingUAEBlog() {

  useEffect(() => {
    // SEO Meta Tags Logic
    document.title = "Ecommerce Marketing UAE: Beyond Website Design | Max Lead Advertising";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Ecommerce marketing in UAE takes more than a fast website. See how flyer distribution, SMS and digital ads bring real buyers to your online store. Contact Us!");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/ecommerce-marketing-uae/");

    // FAQ Schema for rich results
    const faqScript = document.createElement('script');
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-ecommerce-uae";
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
      const existing = document.getElementById("faq-schema-ecommerce-uae");
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
                        <span>MaxLead UAE Marketing Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight text-center">
                        Ecommerce Marketing in UAE: Why Your <span className="text-blue-600">Website Alone Won't Grow Sales</span>
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
                        Most advice for online stores in the UAE stops at the website. Speed up your pages. Tidy the checkout. Add better product photos. All of it is worth doing — but it quietly assumes shoppers are already finding you.
                    </p>
                    <p className="text-base text-gray-600">
                        For a lot of ecommerce brands in Dubai, Sharjah and Ajman, that assumption is exactly where the problem starts. A beautifully optimised store with no visitors still sells nothing. And the cheapest traffic sources are no longer cheap.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Ad Costs Are Squeezing Online-Only Strategies</h2>
                    <p className="text-base text-gray-600">
                        Meta and Google auctions in the UAE are crowded. Every store selling skincare, home goods or fashion is bidding on the same audiences, in the same emirates, at the same time of year. As more budget floods in, cost per acquisition climbs — and margins get thinner on every order.
                    </p>
                    <p className="text-base text-gray-600">
                        The stores that keep growing are the ones that stop treating paid ads as the only doorway. They build a mix, so a rise in ad costs doesn't stall the whole business.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Flyer Distribution Puts Your Store in Real Households</h2>
                    <p className="text-base text-gray-600">
                        Door-to-door leaflet distribution reaches people ad platforms struggle to target properly: families in residential communities, villa neighbourhoods, and buildings where the household decision-maker isn't the one scrolling Instagram.
                    </p>
                    <p className="text-base text-gray-600">
                        The old objection was that print couldn't be measured. That's no longer true. A unique discount code or a QR code on the flyer tells you exactly how many people scanned, visited and bought. Run the same flyer in two different areas with two different codes, and you'll know within a week which community is worth going back to.
                    </p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Product launches:</strong> Introduce a new range to entire neighbourhoods at once, without competing in a paid auction.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Seasonal offers:</strong> Time your drop to Ramadan, Eid, back-to-school or Dubai Shopping Festival demand.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>Free-delivery promotions:</strong> Push a delivery incentive into the exact communities you can serve profitably.</span></li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <span><strong>New postcodes:</strong> Win first orders from an area you've never sold into, and measure it with a dedicated code.</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">SMS Marketing Brings Buyers Back</h2>
                    <p className="text-base text-gray-600">
                        Acquiring a customer is the expensive part. Bringing them back should be cheap — and in a market with near-total mobile penetration, SMS is one of the fastest ways to do it.
                    </p>
                    <p className="text-base text-gray-600">
                        A short message with a direct product link outperforms email for immediacy. It suits restock alerts, flash sales, Ramadan and Eid offers, and abandoned-cart nudges. Keep it under 160 characters, lead with the offer, and make sure the link lands on the exact product page rather than the homepage.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Digital Ads Close the Loop</h2>
                    <p className="text-base text-gray-600">
                        This is where the channels start compounding. Someone who scanned your flyer QR code or clicked an SMS link is a warm audience. Retarget them with display or social ads and your cost per conversion drops, because you're advertising to people who already recognise the name.
                    </p>
                    <p className="text-base text-gray-600">
                        Run it the other way too: an outdoor or flyer campaign in a specific area gives your digital ads something to reinforce, so the brand shows up more than once in a week.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">One Campaign, Several Touchpoints</h2>
                    <p className="text-base text-gray-600">
                        Here's what a connected month looks like for a UAE online store:
                    </p>
                    <div className="space-y-8 mt-6">
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Week 1 — Flyer Drop</h4>
                            <p className="text-sm text-gray-600">Distribution across 20,000 homes in selected Dubai and Sharjah communities, each carrying a unique QR code.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Week 2 — Retargeting</h4>
                            <p className="text-sm text-gray-600">Serve ads to everyone who scanned the code but didn't place an order, while the brand is still fresh.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Week 3 — SMS Follow-Up</h4>
                            <p className="text-sm text-gray-600">Message first-time buyers with a returning-customer offer and a link straight to the product page.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">Week 4 — Review the Data</h4>
                            <p className="text-sm text-gray-600">Check which area, which code and which message earned its budget — then reinvest in the winners.</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                                {["Flyer Distribution", "SMS Marketing", "Digital Ads", "Printing", "Outdoor Promotions", "QR Code Tracking"].map((s, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-semibold bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle2 size={12} className="text-blue-600" /> {s}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-base text-gray-600 pt-8">
                        That's ecommerce marketing built around measurement, not guesswork.
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

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">Grow Your Online Store With Max Lead Advertising</h2>
                    <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                        Max Lead Advertising has been running flyer distribution, printing, SMS and digital campaigns across Dubai, Sharjah, Ajman and Abu Dhabi since 2015. If your ad costs are rising and your store needs a wider mix of channels, get in touch for a campaign plan built around your product and your budget.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Bring Real Buyers to Your Online Store</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                Combine flyer distribution, SMS and digital ads into one measurable campaign across the UAE.
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