
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  MapPin,
  Clock,
  User,
  LayoutGrid,
  FileText,
  MessageSquare,
  MousePointer2,
  Globe,
  Target,
  Linkedin
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- BLOG META --- */
const postMeta = {
  author: "MaxLead Strategy Team",
  readTime: "8 min read",
  docket: "MLA-RCM-001"
};

/* --- RELATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "2026 Guide to Leaflet Distribution Companies in Dubai",
    description:
      "Discover how professional leaflet distribution can help businesses increase brand awareness and reach local audiences across the UAE.",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Leaflet",
    link: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description:
      "Explore why printed marketing materials remain useful for local awareness and customer engagement.",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Insight",
    link:
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "Best Digital Marketing Agency in UAE",
    description:
      "Learn how SEO, paid advertising and digital marketing strategies can help businesses generate enquiries.",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tag: "Digital Strategy",
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  {
    name: "Leaflet Distribution",
    icon: FileText,
    path: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    name: "Psychology",
    icon: Target,
    path:
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    name: "Digital Strategy",
    icon: Globe,
    path: "/blog/best-digital-marketing-agency-uae/"
  }
];

/* --- FAQ CONTENT --- */
const faqs = [
  {
    question:
      "What is residential community marketing in the UAE?",
    answer:
      "Residential community marketing promotes properties, residential developments, amenities and property services to relevant audiences through print advertising, digital campaigns and local promotional activities."
  },
  {
    question:
      "How can pamphlet distribution help real estate businesses?",
    answer:
      "Pamphlet distribution helps real estate businesses introduce properties, highlight amenities, share payment plans and provide contact details to potential customers in selected areas."
  },
  {
    question:
      "Which UAE locations can residential marketing campaigns target?",
    answer:
      "Campaigns can target suitable residential communities and neighbourhoods across Dubai, Sharjah, Ajman and Abu Dhabi, subject to access rules and the necessary permissions."
  },
  {
    question:
      "How can businesses measure pamphlet distribution results?",
    answer:
      "Businesses can track QR code scans, website visits, phone calls, enquiry forms and property viewing appointments. Unique tracking links or contact details can help identify responses from different campaign areas."
  },
  {
    question:
      "Can pamphlet distribution be combined with digital marketing?",
    answer:
      "Yes. Businesses can combine printed pamphlets with SEO, Google Ads, social media advertising, dedicated landing pages and WhatsApp enquiries to create a connected marketing campaign."
  }
];

/* --- FAQ STRUCTURED DATA --- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

/* --- DECORATIVE COLOUR STRIP --- */
const ControlStrip = ({ className = "" }) => (
  <div
    className={`flex h-[6px] w-full ${className}`}
    aria-hidden="true"
  >
    <span className="flex-1" style={{ background: "#00A0DC" }} />
    <span className="flex-1" style={{ background: "#E5007D" }} />
    <span className="flex-1" style={{ background: "#FFD400" }} />
    <span className="flex-1" style={{ background: "#12120F" }} />
  </div>
);

/* --- SCROLL REVEAL --- */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
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

/* --- BLOG PAGE --- */
export default function ResidentialCommunityMarketingUAE() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) return;

    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const handleCategoryClick = (path) => {
    window.location.href = path;
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/+971557222605", "_blank");
  };

  const goToContact = () => {
    window.location.href = "/contact/";
  };

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/max-lead-advertising-distribution/",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Pamphlet Distribution Company in Dubai, Sharjah, Ajman &amp;
          Abu Dhabi
        </title>

        <meta
          name="description"
          content="Boost residential community awareness and generate property enquiries with a professional pamphlet distribution company in Dubai, Sharjah, Ajman, and Abu Dhabi. Contact Us!"
        />

        <link
          rel="canonical"
          href="https://www.maxleadadvertising.com/blog/residential-community-marketing-pamphlet-distribution-uae/"
        />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Pamphlet Distribution Company in Dubai, Sharjah, Ajman & Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Boost residential community awareness and generate property enquiries with professional pamphlet distribution and digital marketing across the UAE."
        />

        <meta
          property="og:url"
          content="https://www.maxleadadvertising.com/blog/residential-community-marketing-pamphlet-distribution-uae/"
        />

        <meta
          property="og:image"
          content="https://www.maxleadadvertising.com/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="keywords"
          content="pamphlet distribution company in Dubai, pamphlet distribution company in Sharjah, pamphlet distribution company in Ajman, pamphlet distribution company in Abu Dhabi, residential community marketing UAE"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <style>{`
        .mla {
          --ink: #12120F;
          --paper: #F2F2EF;
          --rule: #D7D7D1;
          --cyan: #00A0DC;
          --magenta: #E5007D;
          --yellow: #FFD400;
          --mute: #6B6B63;
        }

        .mla-display {
          font-family: 'Anton', Impact, sans-serif;
          letter-spacing: .005em;
          line-height: .98;
          text-transform: uppercase;
          font-weight: 400;
        }

        .mla-mono {
          font-family: 'IBM Plex Mono', ui-monospace, monospace;
        }

        .mla-body {
          font-family: 'Inter', system-ui, sans-serif;
        }

        .mla-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mla-measure {
          max-width: 68ch;
        }

        .mla-reveal {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity .7s ease-out, transform .7s ease-out;
        }

        .mla-reveal.is-in {
          opacity: 1;
          transform: none;
        }

        .mla-crop {
          position: relative;
        }

        .mla-crop::before,
        .mla-crop::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          pointer-events: none;
        }

        .mla-crop::before {
          top: -1px;
          left: -1px;
          border-top: 2px solid #12120F;
          border-left: 2px solid #12120F;
        }

        .mla-crop::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #12120F;
          border-right: 2px solid #12120F;
        }

        .mla a:focus-visible,
        .mla button:focus-visible {
          outline: 3px solid #00A0DC;
          outline-offset: 3px;
        }

        .mla-thumb {
          filter: grayscale(1);
          transition: filter .4s ease;
        }

        .mla-crop:hover .mla-thumb {
          filter: grayscale(0);
        }

        .mla-article h2 {
          scroll-margin-top: 100px;
        }

        @media (prefers-reduced-motion: reduce) {
          .mla-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main
        className="mla mla-body"
        style={{ background: "#F2F2EF", color: "#12120F" }}
      >
        {/* HERO SECTION */}
        <section className="relative pt-32" style={{ background: "#12120F" }}>
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div
                className="mla-label mb-8"
                style={{ color: "#FFD400" }}
              >
                Residential Marketing / UAE / {postMeta.docket}
              </div>

              <h1
                className="mla-display text-[12vw] md:text-[88px] mb-10"
                style={{ color: "#F2F2EF" }}
              >
                Residential
                <br />
                Community
                <br />
                <span style={{ color: "#00A0DC" }}>
                  Marketing in UAE
                </span>
              </h1>

              <p
                className="mla-measure text-lg md:text-xl mb-10"
                style={{ color: "#A8A8A0" }}
              >
                Build local awareness, promote residential developments,
                and reach potential property buyers with targeted pamphlet
                distribution and digital marketing across Dubai, Sharjah,
                Ajman, and Abu Dhabi.
              </p>

              <div
                className="mla-label flex flex-wrap items-center gap-x-6 gap-y-3 pb-12"
                style={{ color: "#7A7A72" }}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {postMeta.readTime}
                </span>

                <span className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5" aria-hidden="true" />
                  {postMeta.author}
                </span>

                <button
                  onClick={openLinkedin}
                  className="mla-label flex items-center gap-2 hover:text-white transition-colors"
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                  LinkedIn
                </button>
              </div>
            </Reveal>
          </div>

          <ControlStrip />
        </section>

        {/* CATEGORY NAVIGATION */}
        <nav
          className="border-b"
          style={{ borderColor: "#D7D7D1" }}
          aria-label="Blog categories"
        >
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

        {/* INTRODUCTION */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div
                className="mla-label pt-2"
                style={{ color: "#6B6B63" }}
              >
                Introduction
              </div>

              <div className="mla-measure mla-article">
                <p className="text-xl md:text-2xl leading-snug mb-6">
                  Residential community marketing is an effective way to
                  promote new property developments, residential projects,
                  apartments, villas, and community facilities across the UAE.
                </p>

                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "#3D3D37" }}
                >
                  With a competitive real estate market, developers and
                  property marketing companies need strategic promotional
                  campaigns to reach potential buyers, investors, and residents.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#3D3D37" }}
                >
                  Combining traditional advertising with digital marketing
                  can help businesses build awareness, attract qualified
                  enquiries, and strengthen their presence in local communities.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 1 */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div
                className="mla-label pt-3"
                style={{ color: "#6B6B63" }}
              >
                01 / Audience
              </div>

              <div className="mla-measure mla-article">
                <h2 className="mla-display text-4xl md:text-5xl mb-6">
                  Understand Your Target Residential Audience
                </h2>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "#3D3D37" }}
                >
                  <p>
                    Successful residential marketing begins with identifying
                    the right audience. Property developers should consider
                    factors such as location, property type, budget, lifestyle
                    preferences, and buyer demographics when planning
                    promotional campaigns.
                  </p>

                  <p>
                    For example, luxury villas may appeal to families seeking
                    spacious homes, while apartments may attract young
                    professionals and first-time buyers.
                  </p>

                  <p>
                    Understanding these preferences helps businesses create
                    relevant promotional messages and select suitable
                    residential areas for their campaigns.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 2 */}
        <section style={{ background: "#E9E9E4" }}>
          <ControlStrip />

          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div
                className="mla-label mb-4"
                style={{ color: "#6B6B63" }}
              >
                02 / Print Marketing
              </div>

              <h2 className="mla-display text-4xl md:text-6xl mb-6">
                Promote Properties Through Pamphlet Distribution
              </h2>

              <div
                className="mla-measure space-y-4 text-base leading-relaxed"
                style={{ color: "#3D3D37" }}
              >
                <p>
                  Working with a professional{" "}
                  <strong>
                    pamphlet distribution company in Dubai
                  </strong>{" "}
                  can help real estate businesses communicate property details
                  directly to potential customers.
                </p>

                <p>
                  Pamphlets provide space to showcase property features,
                  floor plans, amenities, location advantages, payment plans,
                  and contact information in an attractive printed format.
                </p>

                <p>
                  A well-designed pamphlet can introduce new residential
                  developments, promote property launches, announce open-house
                  events, and highlight special offers.
                </p>

                <p>
                  Targeted distribution in suitable residential areas can
                  increase local awareness and encourage interested prospects
                  to contact the sales team.
                </p>

                <p>
                  Businesses can also partner with a{" "}
                  <strong>
                    pamphlet distribution company in Sharjah
                  </strong>
                  , Ajman, and Abu Dhabi to extend their campaigns across
                  multiple emirates.
                </p>

                <p>
                  Selecting relevant distribution locations and securing
                  necessary permissions helps ensure that promotional
                  materials reach appropriate audiences.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Dubai",
                  description:
                    "Promote residential developments, apartments, villas, and property services in suitable local communities."
                },
                {
                  title: "Sharjah & Ajman",
                  description:
                    "Build awareness among families, residents, and prospective buyers through relevant neighbourhood campaigns."
                },
                {
                  title: "Abu Dhabi",
                  description:
                    "Introduce residential projects and property offers to audiences in selected residential areas."
                }
              ].map((item, idx) => (
                <Reveal key={item.title} delay={idx * 60}>
                  <div
                    className="h-full p-6"
                    style={{
                      background: "#F2F2EF",
                      borderTop: "3px solid #00A0DC"
                    }}
                  >
                    <MapPin
                      className="w-6 h-6 mb-4"
                      style={{ color: "#00A0DC" }}
                      aria-hidden="true"
                    />

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#3D3D37" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div
                className="mla-label pt-3"
                style={{ color: "#6B6B63" }}
              >
                03 / Digital
              </div>

              <div className="mla-measure mla-article">
                <h2 className="mla-display text-4xl md:text-5xl mb-6">
                  Use Digital Marketing to Generate Buyer Enquiries
                </h2>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "#3D3D37" }}
                >
                  <p>
                    Digital marketing complements traditional residential
                    advertising by reaching people actively searching for
                    properties online.
                  </p>

                  <p>
                    Search engine optimization (SEO) helps property websites
                    appear for relevant searches such as apartments for sale
                    in Dubai, villas in Sharjah, and residential properties
                    in Abu Dhabi.
                  </p>

                  <p>
                    Google Ads can target high-intent property searches, while
                    Facebook and Instagram advertising can showcase property
                    images, walkthrough videos, amenities, and promotional offers.
                  </p>

                  <p>
                    Dedicated landing pages with enquiry forms, WhatsApp
                    contact options, and property details make it easier for
                    potential buyers to request information or schedule a viewing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 4 */}
        <section style={{ background: "#12120F" }}>
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div
                className="mla-label mb-4"
                style={{ color: "#FFD400" }}
              >
                04 / Integrated Strategy
              </div>

              <h2
                className="mla-display text-4xl md:text-6xl mb-6"
                style={{ color: "#F2F2EF" }}
              >
                Combine Print and Digital Advertising
              </h2>

              <p
                className="mla-measure text-base mb-12 leading-relaxed"
                style={{ color: "#A8A8A0" }}
              >
                Connect offline promotional campaigns with online engagement
                to create a consistent residential marketing experience.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  title: "Add QR Codes to Pamphlets",
                  description:
                    "Include a QR code that directs readers to a property website, virtual tour, brochure download, or enquiry form."
                },
                {
                  number: "02",
                  title: "Run Location-Based Advertising",
                  description:
                    "Use digital campaigns to reinforce printed promotions and reach relevant audiences in selected locations."
                },
                {
                  number: "03",
                  title: "Maintain Consistent Branding",
                  description:
                    "Use consistent messages, colours, property details, and contact information across print, websites, and social media."
                },
                {
                  number: "04",
                  title: "Make Enquiries Easy",
                  description:
                    "Provide clear calls to action, website links, telephone numbers, and WhatsApp contact options."
                }
              ].map((item, idx) => (
                <Reveal key={item.number} delay={idx * 60}>
                  <div
                    className="h-full p-6"
                    style={{
                      border: "1px solid #383831"
                    }}
                  >
                    <div
                      className="mla-mono text-sm mb-5"
                      style={{ color: "#FFD400" }}
                    >
                      {item.number}
                    </div>

                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "#F2F2EF" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#A8A8A0" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <ControlStrip />
        </section>

        {/* SECTION 5 */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div
                className="mla-label pt-3"
                style={{ color: "#6B6B63" }}
              >
                05 / Measurement
              </div>

              <div className="mla-measure mla-article">
                <h2 className="mla-display text-4xl md:text-5xl mb-6">
                  Measure Campaign Performance
                </h2>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "#3D3D37" }}
                >
                  <p>
                    Tracking results helps businesses understand which
                    promotional activities generate meaningful enquiries.
                  </p>

                  <p>
                    Monitor website visits, QR code scans, phone calls,
                    enquiry forms, viewing appointments, and qualified leads.
                  </p>

                  <p>
                    For pamphlet campaigns, unique QR codes or dedicated
                    contact details can help measure responses from different
                    distribution areas.
                  </p>

                  <p>
                    Use this information to improve targeting, refine
                    promotional content, and allocate marketing budgets
                    more effectively.
                  </p>
                </div>

                <div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
                >
                  {[
                    "Website Visits",
                    "QR Code Scans",
                    "Phone Calls",
                    "Enquiry Forms",
                    "Viewing Appointments",
                    "Qualified Leads"
                  ].map((metric, idx) => (
                    <div
                      key={metric}
                      className="p-4"
                      style={{
                        background: "#E9E9E4",
                        borderLeft: "2px solid #00A0DC"
                      }}
                    >
                      <span
                        className="mla-mono text-xs"
                        style={{ color: "#6B6B63" }}
                      >
                        0{idx + 1}
                      </span>

                      <p className="text-sm font-semibold mt-2">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* WHY MAX LEAD */}
        <section
          style={{ background: "#E9E9E4" }}
          className="border-y"
        >
          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div
                className="mla-label mb-4"
                style={{ color: "#6B6B63" }}
              >
                06 / Our Services
              </div>

              <h2 className="mla-display text-4xl md:text-6xl mb-12">
                Support Your Local Marketing Campaign
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "UAE-Wide Distribution",
                  description:
                    "Plan pamphlet and leaflet distribution campaigns across suitable locations in Dubai, Sharjah, Ajman, Abu Dhabi, and other UAE emirates."
                },
                {
                  icon: FileText,
                  title: "Printing and Distribution",
                  description:
                    "Coordinate promotional print materials and distribution planning through a single service provider."
                },
                {
                  icon: Target,
                  title: "Campaign Planning",
                  description:
                    "Identify relevant audiences, select suitable distribution areas, and measure responses to improve future campaigns."
                }
              ].map((item, idx) => (
                <Reveal key={item.title} delay={idx * 60}>
                  <div
                    className="h-full pt-6"
                    style={{ borderTop: "3px solid #12120F" }}
                  >
                    <item.icon
                      className="w-6 h-6 mb-4"
                      style={{ color: "#00A0DC" }}
                      aria-hidden="true"
                    />

                    <h3 className="text-lg font-bold mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#3D3D37" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
              <div
                className="mla-label pt-3"
                style={{ color: "#6B6B63" }}
              >
                07 / Conclusion
              </div>

              <div className="mla-measure mla-article">
                <h2 className="mla-display text-4xl md:text-5xl mb-6">
                  Conclusion
                </h2>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "#3D3D37" }}
                >
                  <p>
                    Residential community marketing requires a combination
                    of local advertising, engaging promotional materials,
                    and effective digital campaigns.
                  </p>

                  <p>
                    Partnering with a professional pamphlet distribution
                    company in Dubai, Sharjah, Ajman, and Abu Dhabi can help
                    property businesses increase awareness and reach potential
                    buyers across the UAE.
                  </p>

                  <p>
                    By integrating print distribution with digital marketing
                    and performance tracking, developers can strengthen their
                    market presence and generate more property enquiries.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA BANNER */}
        <section style={{ background: "#12120F" }}>
          <ControlStrip />

          <div className="max-w-6xl mx-auto px-6 py-20">
            <Reveal>
              <div
                className="mla-label mb-5"
                style={{ color: "#FFD400" }}
              >
                Max Lead Advertising
              </div>

              <h2
                className="mla-display text-4xl md:text-6xl mb-6"
                style={{ color: "#F2F2EF" }}
              >
                Promote Your
                <br />
                Residential Community
                <br />
                <span style={{ color: "#FFD400" }}>
                  Across the UAE
                </span>
              </h2>

              <p
                className="mla-measure text-lg mb-10"
                style={{ color: "#A8A8A0" }}
              >
                Build awareness and reach potential property buyers with
                professional pamphlet distribution in Dubai, Sharjah,
                Ajman, and Abu Dhabi.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={goToContact}
                  className="mla-label flex items-center gap-2 px-7 py-4 transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "#FFD400",
                    color: "#12120F"
                  }}
                >
                  <MousePointer2 size={14} aria-hidden="true" />
                  Contact Us Today
                </button>

                <button
                  onClick={openWhatsapp}
                  className="mla-label flex items-center gap-2 px-7 py-4 transition-colors hover:bg-white hover:text-black"
                  style={{
                    border: "1px solid #4A4A42",
                    color: "#F2F2EF"
                  }}
                >
                  <MessageSquare size={14} aria-hidden="true" />
                  WhatsApp Now
                </button>

                <button
                  onClick={openLinkedin}
                  className="mla-label flex items-center gap-2 px-7 py-4 transition-colors hover:bg-white hover:text-black"
                  style={{
                    border: "1px solid #4A4A42",
                    color: "#F2F2EF"
                  }}
                  aria-label="Visit Max Lead LinkedIn profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div
              className="mla-label mb-4"
              style={{ color: "#6B6B63" }}
            >
              Frequently Asked Questions
            </div>

            <h2 className="mla-display text-4xl md:text-5xl mb-10">
              Residential Marketing FAQs
            </h2>
          </Reveal>

          <div className="max-w-4xl">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.question} delay={idx * 40}>
                <details
                  className="py-5 border-b group"
                  style={{ borderColor: "#D7D7D1" }}
                >
                  <summary className="cursor-pointer text-lg font-bold leading-snug">
                    {faq.question}
                  </summary>

                  <p
                    className="text-base leading-relaxed mt-4"
                    style={{ color: "#3D3D37" }}
                  >
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RELATED BLOGS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <div
              className="mla-label mb-8"
              style={{ color: "#6B6B63" }}
            >
              More from Max Lead
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <Reveal key={blog.id} delay={idx * 60}>
                <a
                  href={blog.link}
                  className="mla-crop group block h-full"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="mla-thumb w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-5 pr-4 pb-5">
                    <div
                      className="mla-label mb-3"
                      style={{ color: "#E5007D" }}
                    >
                      {blog.tag}
                    </div>

                    <h3 className="text-lg font-bold mb-2 leading-snug group-hover:underline">
                      {blog.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#3D3D37" }}
                    >
                      {blog.description}
                    </p>

                    <div
                      className="mla-label"
                      style={{ color: "#6B6B63" }}
                    >
                      {blog.readTime}
                    </div>
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
