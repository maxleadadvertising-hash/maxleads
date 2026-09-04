import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { MapPin, Clock, User, LayoutGrid, FileText, MessageSquare, MousePointer2, Globe, Target, Linkedin } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- CURRENT POST META --- */
const postMeta = {
  author: "MaxLead Strategy Team",
  readTime: "8 min read",
  docket: "MLA-CHK-001"
};

/* --- RELATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "2026 Guide to Leaflet Distribution Companies in Dubai",
    description: "Find the best leaflet distribution companies in Dubai. Reach your target audience, increase brand awareness, and grow your business.",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Leaflet",
    link: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description: "Why physical marketing still works, and how touch triggers emotional responses digital ads cannot match.",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Insight",
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "Best Digital Marketing Agency in UAE",
    description: "How to choose a performance partner that converts clicks into revenue.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tag: "Agency",
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Leaflet Distribution", icon: FileText, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Psychology", icon: Target, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" },
  { name: "Digital Strategy", icon: Globe, path: "/blog/best-digital-marketing-agency-uae/" }
];

const checklist = [
  { code: "01", t: "Valid Trade Licence and Permits", d: "Ask for the licence copy. Distribution in Dubai requires approvals, and unlicensed operators put your brand at risk, not theirs." },
  { code: "02", t: "Consumer Rights Compliance", d: "Promotional print material in Dubai must meet consumer protection requirements before printing. A company that never mentions this is telling you it cuts corners." },
  { code: "03", t: "GPS Tracking and Photo Proof", d: "Non-negotiable. You should receive location data and field photographs. If a company cannot provide proof, assume there is nothing to prove." },
  { code: "04", t: "Own Trained Staff", d: "Subcontracted teams mean zero quality control. Ask directly whether distributors are employees and whether they are supervised in the field." },
  { code: "05", t: "Area Demographic Knowledge", d: "A villa community in Arabian Ranches and a tower in JLT are different audiences. A strong partner asks what you sell before recommending where to distribute." },
  { code: "06", t: "In-House Printing", d: "When printing and distribution sit under one roof, you pay less, you wait less, and one team is accountable for the whole job." },
  { code: "07", t: "A Written Distribution Report", d: "Not a phone call. A document showing areas covered, quantities delivered, dates, and photographic evidence of the campaign." },
  { code: "08", t: "Transparent Pricing", d: "Ask for the rate per 1,000 flyers, what it includes, and what it does not. Hidden charges for area access, permits or reporting are a warning sign." }
];

const redFlags = [
  "No office address or landline number",
  "No client references or past campaign samples",
  "Refusal to sign a written scope of work",
  "Vague answers about permits and approvals",
  "No list of the specific buildings or streets to be covered",
  "Full payment demanded before distribution begins"
];

const questions = [
  "Which specific areas and buildings will you cover?",
  "How many days will the campaign run?",
  "What proof will I receive, and when?",
  "Who is my point of contact during distribution?",
  "What happens if coverage is incomplete?"
];

/* --- SCHEMA --- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I choose the best flyer distribution company in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check the trade licence and distribution permits, confirm the company provides GPS tracking and photo proof of delivery, ask whether distributors are trained in-house staff or subcontractors, and request transparent pricing per 1,000 flyers before you commit."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a permit for flyer distribution in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Flyer and leaflet distribution in Dubai requires approvals, and promotional print material must meet current consumer protection requirements. A licensed distribution company handles these approvals on your behalf."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know my flyers were actually delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask for a written distribution report covering areas, quantities and dates, supported by GPS location data and field photographs. If a company cannot supply this evidence, you have no way to verify the campaign."
      }
    }
  ]
};

/* --- PRESS CONTROL STRIP (signature element) --- */
const ControlStrip = ({ className = "" }) => (
  <div className={`flex h-[6px] w-full ${className}`} aria-hidden="true">
    <span className="flex-1" style={{ background: "#00A0DC" }} />
    <span className="flex-1" style={{ background: "#E5007D" }} />
    <span className="flex-1" style={{ background: "#FFD400" }} />
    <span className="flex-1" style={{ background: "#12120F" }} />
  </div>
);

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const node = domRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={domRef}
      className={`mla-reveal ${isVisible ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function BestFlyerDistributionCompanyDubai() {

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    let frame;
    function raf(time) { lenis.raf(time); frame = requestAnimationFrame(raf); }
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/+971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };
  const openLinkedin = () => { window.open("https://www.linkedin.com/company/max-lead-advertising-distribution/", "_blank"); };

  return (
    <>
      <Helmet>
        <title>Best Flyer Distribution Company in Dubai | Max Lead</title>
        <meta name="description" content="Choosing the best flyer distribution company in Dubai? Use this 8-point checklist to compare permits, GPS proof, pricing and coverage before you hire." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/blog/best-flyer-distribution-company-in-dubai/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Flyer Distribution Company in Dubai" />
        <meta property="og:description" content="An 8-point checklist to compare permits, GPS proof, pricing and area coverage before you hire a flyer distribution company in Dubai." />
        <meta property="og:url" content="https://www.maxleadadvertising.com/blog/best-flyer-distribution-company-in-dubai/" />
        <meta property="og:image" content="https://www.maxleadadvertising.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <style>{`
        .mla { --ink:#12120F; --paper:#F2F2EF; --rule:#D7D7D1;
               --cyan:#00A0DC; --magenta:#E5007D; --yellow:#FFD400; --mute:#6B6B63; }
        .mla-display { font-family:'Anton',Impact,sans-serif; letter-spacing:.005em; line-height:.94; text-transform:uppercase; font-weight:400; }
        .mla-mono { font-family:'IBM Plex Mono',ui-monospace,monospace; }
        .mla-body { font-family:'Inter',system-ui,sans-serif; }
        .mla-label { font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.16em; text-transform:uppercase; }
        .mla-measure { max-width:62ch; }
        .mla-reveal { opacity:0; transform:translateY(14px); transition:opacity .7s ease-out, transform .7s ease-out; }
        .mla-reveal.is-in { opacity:1; transform:none; }
        .mla-crop { position:relative; }
        .mla-crop::before, .mla-crop::after { content:""; position:absolute; width:9px; height:9px; pointer-events:none; }
        .mla-crop::before { top:-1px; left:-1px; border-top:2px solid #12120F; border-left:2px solid #12120F; }
        .mla-crop::after { bottom:-1px; right:-1px; border-bottom:2px solid #12120F; border-right:2px solid #12120F; }
        .mla a:focus-visible, .mla button:focus-visible { outline:3px solid #00A0DC; outline-offset:3px; }
        .mla-thumb { filter:grayscale(1); transition:filter .4s ease; }
        .mla-crop:hover .mla-thumb { filter:grayscale(0); }
        @media (prefers-reduced-motion: reduce) {
          .mla-reveal { opacity:1; transform:none; transition:none; }
        }
      `}</style>

      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="mla mla-body" style={{ background: "#F2F2EF", color: "#12120F" }}>

        {/* --- HERO: INK PLATE --- */}
        <section className="relative pt-32" style={{ background: "#12120F" }}>
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="mla-label mb-8" style={{ color: "#FFD400" }}>
                Buyer&rsquo;s Checklist &nbsp;/&nbsp; Dubai &nbsp;/&nbsp; {postMeta.docket}
              </div>
              <h1 className="mla-display text-[12vw] md:text-[104px] mb-10" style={{ color: "#F2F2EF" }}>
                Best Flyer<br />
                Distribution Company<br />
                <span style={{ color: "#00A0DC" }}>in Dubai</span>
              </h1>
              <p className="mla-measure text-lg md:text-xl mb-10" style={{ color: "#A8A8A0" }}>
                How to choose the right one, and how to spot the operators who will take your money and bin your flyers.
              </p>
              <div className="mla-label flex flex-wrap items-center gap-x-6 gap-y-3 pb-12" style={{ color: "#7A7A72" }}>
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" aria-hidden="true" /> {postMeta.readTime}</span>
                <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" aria-hidden="true" /> {postMeta.author}</span>
                <button onClick={openLinkedin} className="mla-label flex items-center gap-2 hover:text-white transition-colors" aria-label="Visit our LinkedIn profile">
                  <Linkedin className="w-3.5 h-3.5" aria-hidden="true" /> LinkedIn
                </button>
              </div>
            </Reveal>
          </div>
          <ControlStrip />
        </section>

        {/* --- CATEGORY RAIL --- */}
        <nav className="border-b" style={{ borderColor: "#D7D7D1" }} aria-label="Blog categories">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(cat.path)}
                className="mla-label flex items-center gap-2 py-4 pr-8 transition-colors hover:text-black"
                style={{ color: "#6B6B63" }}
              >
                <cat.icon className="w-3.5 h-3.5" aria-hidden="true" />
                {cat.name}
              </button>
            ))}
          </div>
        </nav>

        {/* --- INTRO --- */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div className="mla-label pt-2" style={{ color: "#6B6B63" }}>Intro</div>
              <div className="mla-measure">
                <p className="text-xl md:text-2xl leading-snug mb-6">
                  Every business in Dubai has faced the same problem. You print 10,000 flyers. You pay a distributor. And then nothing happens. No calls. No walk-ins. No enquiries.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#3D3D37" }}>
                  The flyers were fine. The offer was fine. The distribution was not.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#3D3D37" }}>
                  Choosing the best flyer distribution company in Dubai is not about who quotes the lowest price. It is about who actually puts your flyer in the right hands and can prove it. This guide shows you exactly what to check before you hire anyone.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* --- WHAT BEST MEANS --- */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div className="mla-label pt-3" style={{ color: "#6B6B63" }}>01 / Context</div>
              <div>
                <h2 className="mla-display text-4xl md:text-5xl mb-6">What &ldquo;Best&rdquo; Actually Means Here</h2>
                <div className="mla-measure space-y-4 text-base leading-relaxed" style={{ color: "#3D3D37" }}>
                  <p>Dubai is a regulated market. Flyer distribution is not something anyone can do with a bike and a stack of paper. There are permits involved, building access rules, and community restrictions that change from Marina to Mirdif to Al Quoz.</p>
                  <p>A cheap operator ignores all of this. They dump your flyers, send you a message saying &ldquo;done&rdquo;, and you never find out. A proper company handles the compliance, distributes street by street, and hands you evidence.</p>
                  <p className="font-bold" style={{ color: "#12120F" }}>That difference is the entire return on your campaign.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* --- THE DOCKET: 8 CHECKS --- */}
        <section style={{ background: "#E9E9E4" }}>
          <ControlStrip />
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div className="mla-label mb-4" style={{ color: "#6B6B63" }}>02 / Inspection Sheet</div>
              <h2 className="mla-display text-4xl md:text-6xl mb-4">8 Things to Check<br />Before You Hire</h2>
              <p className="mla-measure text-base mb-12" style={{ color: "#3D3D37" }}>
                Run every shortlisted company through this checklist. Any gap here is a gap in your results.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-px" style={{ background: "#D7D7D1" }}>
              {checklist.map((item, idx) => (
                <Reveal key={item.code} delay={idx * 40}>
                  <div className="h-full p-7" style={{ background: "#F2F2EF", borderLeft: "3px solid #00A0DC" }}>
                    <div className="mla-mono text-[11px] font-semibold mb-3 tracking-widest" style={{ color: "#00A0DC" }}>
                      CHK&nbsp;{item.code}
                    </div>
                    <h3 className="text-lg font-bold mb-2 leading-snug">{item.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#3D3D37" }}>{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- RED FLAGS: INK PLATE --- */}
        <section style={{ background: "#12120F" }}>
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div className="mla-label mb-4" style={{ color: "#E5007D" }}>03 / Reject</div>
              <h2 className="mla-display text-4xl md:text-6xl mb-6" style={{ color: "#F2F2EF" }}>Red Flags to<br />Walk Away From</h2>
              <p className="mla-measure text-base mb-12" style={{ color: "#A8A8A0" }}>
                Watch for a quote that sits far below everyone else&rsquo;s. Somebody absorbs that cost, and it is usually the distributor who decides your flyers are not worth the walk.
              </p>
            </Reveal>
            <ul className="list-none p-0 m-0 border-t" style={{ borderColor: "#2E2E28" }}>
              {redFlags.map((flag, idx) => (
                <Reveal key={idx} delay={idx * 40}>
                  <li className="flex items-baseline gap-5 py-5 border-b" style={{ borderColor: "#2E2E28" }}>
                    <span className="mla-mono text-[11px] font-semibold shrink-0" style={{ color: "#E5007D" }}>
                      &#10005; {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg" style={{ color: "#E4E4DE" }}>{flag}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <ControlStrip />
        </section>

        {/* --- QUESTIONS --- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="mla-label mb-4" style={{ color: "#6B6B63" }}>04 / Interrogate</div>
            <h2 className="mla-display text-4xl md:text-6xl mb-6">Questions to Ask<br />Before You Sign</h2>
            <p className="mla-measure text-base mb-12" style={{ color: "#3D3D37" }}>
              Good companies answer these in one call. Poor ones deflect.
            </p>
          </Reveal>
          <ol className="list-none p-0 m-0 max-w-4xl">
            {questions.map((q, idx) => (
              <Reveal key={idx} delay={idx * 40}>
                <li className="flex items-baseline gap-6 py-5 border-b" style={{ borderColor: "#D7D7D1" }}>
                  <span className="mla-mono text-[11px] font-semibold shrink-0" style={{ color: "#6B6B63" }}>
                    Q{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg md:text-xl leading-snug">{q}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* --- WHY MAX LEAD --- */}
        <section style={{ background: "#E9E9E4" }} className="border-y" >
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div className="mla-label mb-4" style={{ color: "#6B6B63" }}>05 / Our Position</div>
              <h2 className="mla-display text-4xl md:text-6xl mb-12">Why Businesses Choose<br />Max Lead Advertising</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, t: "Coverage Across All Seven Emirates", d: "Max Lead Advertising has run distribution campaigns across the UAE since 2015, covering Dubai, Sharjah, Ajman and Abu Dhabi with our own trained field teams." },
                { icon: FileText, t: "Printing and Distribution Under One Roof", d: "Your artwork, approvals and delivery are handled by a single team. Fewer handoffs mean lower cost, faster turnaround, and one point of accountability." },
                { icon: Target, t: "Proof on Every Campaign", d: "Every campaign comes back with a report and field photographs, so you know precisely where your flyers went. We also help you select the areas before the campaign begins." }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="h-full pt-6" style={{ borderTop: "3px solid #12120F" }}>
                    <item.icon className="w-6 h-6 mb-4" style={{ color: "#00A0DC" }} aria-hidden="true" />
                    <h3 className="text-lg font-bold mb-3 leading-snug">{item.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#3D3D37" }}>{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL THOUGHTS --- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div className="mla-label pt-3" style={{ color: "#6B6B63" }}>06 / Close</div>
              <div>
                <h2 className="mla-display text-4xl md:text-5xl mb-6">Final Thoughts</h2>
                <div className="mla-measure space-y-4 text-base leading-relaxed" style={{ color: "#3D3D37" }}>
                  <p>The best flyer distribution company in Dubai is the one that treats your budget like its own. Ask hard questions, demand proof of delivery, and choose the company that answers plainly.</p>
                  <p>If your last campaign delivered nothing, the problem was almost certainly execution rather than the medium. Get the distribution right and flyers still put your offer directly into the hands of people living and working near your business.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* --- CTA --- */}
        <section style={{ background: "#12120F" }}>
          <ControlStrip />
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <h2 className="mla-display text-4xl md:text-6xl mb-6" style={{ color: "#F2F2EF" }}>
                Get a Quote and an<br /><span style={{ color: "#FFD400" }}>Area Recommendation</span>
              </h2>
              <p className="mla-measure text-lg mb-10" style={{ color: "#A8A8A0" }}>
                Tell us what you sell. We will tell you where your flyers should go and what it costs.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={goToContact} className="mla-label flex items-center gap-2 px-7 py-4 transition-transform hover:-translate-y-0.5" style={{ background: "#FFD400", color: "#12120F" }}>
                  <MousePointer2 size={14} aria-hidden="true" /> Free Consultation
                </button>
                <button onClick={openWhatsapp} className="mla-label flex items-center gap-2 px-7 py-4 transition-colors hover:bg-white hover:text-black" style={{ border: "1px solid #4A4A42", color: "#F2F2EF" }}>
                  <MessageSquare size={14} aria-hidden="true" /> WhatsApp Now
                </button>
                <button onClick={openLinkedin} className="mla-label flex items-center gap-2 px-7 py-4 transition-colors hover:bg-white hover:text-black" style={{ border: "1px solid #4A4A42", color: "#F2F2EF" }} aria-label="Visit Max Lead LinkedIn profile">
                  <Linkedin size={14} aria-hidden="true" /> LinkedIn
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- RELATED --- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="mla-label mb-8" style={{ color: "#6B6B63" }}>More from Max Lead</div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <Reveal key={blog.id} delay={idx * 60}>
                <a href={blog.link} className="mla-crop group block h-full">
                  <div className="h-44 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="mla-thumb w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="pt-5 pr-4 pb-5">
                    <div className="mla-label mb-3" style={{ color: "#E5007D" }}>{blog.tag}</div>
                    <h3 className="text-lg font-bold mb-2 leading-snug group-hover:underline">{blog.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D3D37" }}>{blog.description}</p>
                    <div className="mla-label" style={{ color: "#6B6B63" }}>{blog.readTime}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <ControlStrip />
      </main>
      <Footer />
    </>
  );
}