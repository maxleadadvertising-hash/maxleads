import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  Target,
  Clock,
  User,
  LayoutGrid,
  FileText,
  Globe,
  Linkedin,
  PhoneCall,
  MessageSquare,
  Sparkles
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title:
      "Supermarket Advertising in the UAE: Turning Weekly Promotions into Store Visits with Flyer Distribution",
    description:
      "Promote weekly supermarket offers with professional Flyer Distribution in the UAE. Reach nearby customers, increase brand awareness, and encourage store visits. Contact Us!",
    author: "MaxLead Strategy Team",
    date: "September 23, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Supermarket Flyer Distribution", "Dubai Marketing"],
    link: "/blog/supermarket-advertising-uae-weekly-promotions/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description:
      "Discover why physical marketing still works and how touch triggers emotional responses that digital ads can't match.",
    author: "MaxLead Team",
    date: "March 6, 2026",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Psychology", "Insights"],
    link:
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "Best Digital Marketing Agency in UAE",
    description:
      "Hiring an agency in 2026? Learn how to choose a performance partner that converts clicks into revenue.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Agency Guide"],
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

/* --- CATEGORIES --- */
const categories = [
  {
    name: "All Blogs",
    icon: LayoutGrid,
    path: "/blog/"
  },
  {
    name: "Leaflet Distribution",
    icon: FileText,
    path: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    name: "Digital Strategy",
    icon: Globe,
    path: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    name: "Psychology",
    icon: Target,
    path:
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  }
];

/* --- FADE IN ANIMATION --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- MAIN BLOG COMPONENT --- */
export default function SupermarketFlyerDistributionBlog() {
  const activePost = blogs[0];

  /* --- SEO SETTINGS --- */
  useEffect(() => {
    document.title =
      "Supermarket Flyer Distribution Advertising in the UAE | Max Lead";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Promote weekly supermarket offers with professional Flyer Distribution in the UAE. Reach nearby customers, increase brand awareness, and encourage store visits. Contact Us!"
    );

    let linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }

    linkCanonical.setAttribute(
      "href",
      "https://www.maxleadadvertising.com/blog/supermarket-advertising-uae-weekly-promotions/"
    );
  }, []);

  /* --- LENIS SMOOTH SCROLL --- */
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  /* --- NAVIGATION FUNCTIONS --- */
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
      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>
          Supermarket Flyer Distribution Advertising in the UAE | Max Lead
        </title>

        <meta
          name="description"
          content="Promote weekly supermarket offers with professional Flyer Distribution in the UAE. Reach nearby customers, increase brand awareness, and encourage store visits. Contact Us!"
        />

        <meta
          name="keywords"
          content="Flyer Distribution UAE, Supermarket Flyer Distribution, Flyer Distribution Dubai, Grocery Store Advertising UAE, Supermarket Promotion Advertising, Door-to-Door Flyer Distribution, Retail Marketing UAE, Promotional Flyer Distribution Dubai"
        />

        <link
          rel="canonical"
          href="https://www.maxleadadvertising.com/blog/supermarket-advertising-uae-weekly-promotions/"
        />
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

                <Sparkles
                  className="w-3 h-3"
                  aria-hidden="true"
                />

                <span>MaxLead Offline Marketing 2026</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 md:mb-6 leading-tight px-2">
                Supermarket Advertising in the UAE: Turning Weekly Promotions
                into Store Visits with{" "}
                <span className="text-blue-600">
                  Flyer Distribution
                </span>
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm mb-4">

                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  6 min read
                </span>

                <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit Max Lead LinkedIn Profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </span>

                <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />

                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" aria-hidden="true" />
                  MaxLead Strategy Team
                </span>

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
                  <cat.icon
                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />

                  <span className="font-bold text-[9px] md:text-[11px] uppercase tracking-wider text-gray-600 group-hover:text-white">
                    {cat.name}
                  </span>
                </button>
              </FadeIn>
            ))}

          </div>
        </section>

        {/* --- MAIN BLOG CONTENT --- */}
        <section className="pb-16 md:pb-24 bg-white px-4 md:px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-sm md:prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-8 md:pt-12">

              {/* INTRODUCTION */}
              <div className="mb-12">

                <p className="text-sm md:text-base text-gray-600">
                  Supermarkets across the UAE operate in a competitive retail
                  environment where attracting customers requires more than
                  simply offering quality products. With shoppers regularly
                  comparing prices, discounts, and special offers, effective
                  supermarket advertising plays an important role in increasing
                  store visits and encouraging repeat purchases.
                </p>

                <p className="text-sm md:text-base text-gray-600 mt-4">
                  <strong>Flyer Distribution</strong> is a practical advertising
                  method for supermarkets looking to promote weekly offers,
                  communicate discounts, and reach customers in nearby
                  residential communities.
                </p>

              </div>

              {/* SECTION 1 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-6">
                Why Supermarket Advertising Matters
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Weekly promotions give supermarkets an opportunity to attract
                customers searching for affordable groceries, household
                essentials, and special deals.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                However, even attractive discounts may go unnoticed if
                customers are unaware of them. Supermarket advertising helps
                businesses communicate their promotions, highlight popular
                products, and encourage shoppers to visit their stores.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Through targeted <strong>Flyer Distribution</strong>,
                supermarkets can:
              </p>

              <ul className="list-disc pl-6 text-sm md:text-base text-gray-600 mt-4 space-y-2">
                <li>Increase awareness of weekly offers and discounts.</li>
                <li>Reach households in nearby residential communities.</li>
                <li>Promote newly launched products and seasonal collections.</li>
                <li>Encourage repeat visits from existing customers.</li>
                <li>Improve local brand visibility and promotional reach.</li>
              </ul>

              {/* SECTION 2 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Flyer Distribution: Promoting Weekly Supermarket Offers
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                <strong>Flyer Distribution</strong> remains a useful marketing
                strategy for supermarkets targeting customers within specific
                neighbourhoods.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Printed promotional flyers allow supermarkets to showcase
                discounted products, grocery bundles, special offers, and
                limited-time deals in an easy-to-read format.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                By distributing flyers in nearby apartments, villas, and
                residential communities, supermarkets can introduce their
                promotions directly to local households.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                For example, a supermarket in Dubai can use targeted{" "}
                <strong>Flyer Distribution</strong> to promote weekly grocery
                discounts in surrounding residential areas.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Including attractive product images, clear prices, promotional
                dates, store locations, and contact details can make flyers more
                informative and encourage customers to visit.
              </p>

              {/* SECTION 3 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Target the Right Residential Communities
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Successful supermarket advertising begins with understanding
                the local customer base. Supermarkets can identify residential
                areas within their shopping catchment and plan{" "}
                <strong>Flyer Distribution</strong> campaigns around those
                locations.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Stores serving apartment communities may promote affordable
                grocery bundles, while supermarkets near family-oriented
                neighbourhoods may highlight bulk purchases, fresh produce, and
                household essentials.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Targeted <strong>Flyer Distribution</strong> helps supermarkets
                focus their advertising efforts on relevant locations and
                improve awareness of their weekly promotions.
              </p>

              {/* SECTION 4 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Combine Flyer Distribution with Digital Advertising
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Combining traditional advertising with digital marketing can
                help supermarkets increase the visibility of their promotions.
                <strong> Flyer Distribution</strong> introduces weekly offers
                to local households, while digital advertising can reinforce
                those promotions through social media, search advertising, and
                online campaigns.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Supermarkets can also include QR codes on promotional flyers to
                direct customers to online catalogues, promotional landing
                pages, or WhatsApp ordering channels. This combination of{" "}
                <strong>Flyer Distribution and digital marketing</strong>{" "}
                connects offline advertising with online customer engagement.
              </p>

              {/* SECTION 5 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Promote Seasonal Offers Through Flyer Distribution
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Seasonal events and shopping occasions provide additional
                opportunities for supermarkets to attract customers. During
                Ramadan, Eid, UAE National Day, and other promotional periods,
                supermarkets can use <strong>Flyer Distribution</strong> to
                advertise special grocery bundles, festive products, and
                limited-time discounts.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Planning campaigns in advance allows businesses to prepare
                promotional materials, select distribution locations, and
                communicate offers before the shopping period begins.
                Attractive flyer designs, clear promotional messages, and
                targeted distribution can help supermarkets increase awareness
                of their seasonal campaigns.
              </p>

              {/* SECTION 6 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Grow Your Supermarket with Max Lead Advertising
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                At <strong>Max Lead Advertising &amp; Distribution FZE</strong>,
                we provide professional{" "}
                <strong>Flyer Distribution services across the UAE</strong>,
                helping supermarkets and retail businesses connect with
                customers in their target locations.
              </p>

              <ul className="list-disc pl-6 text-sm md:text-base text-gray-600 mt-4 space-y-2">
                <li>Supermarket Flyer Distribution</li>
                <li>Door-to-Door Flyer Distribution</li>
                <li>Leaflet and Brochure Distribution</li>
                <li>Residential and Community Flyer Distribution</li>
                <li>Digital Printing Services</li>
                <li>Digital Marketing Solutions</li>
              </ul>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Whether you are promoting weekly grocery discounts, launching a
                new supermarket, or advertising seasonal offers, our team can
                help you plan a targeted{" "}
                <strong>Flyer Distribution campaign</strong> to increase local
                awareness and encourage store visits.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Contact Max Lead Advertising &amp; Distribution FZE today to
                discuss your supermarket advertising and{" "}
                <strong>Flyer Distribution</strong> requirements across the
                UAE.
              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-white">
                    Turn Weekly Promotions into More Store Visits!
                  </h3>

                  <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                    Promote Your Supermarket Offers with Professional Flyer
                    Distribution Across the UAE.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-900 font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Get a Free Quote
                    </button>

                    <button
                      onClick={openLinkedin}
                      className="bg-blue-800 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-900 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                      aria-label="Visit Max Lead LinkedIn Profile"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                      LinkedIn Profile
                    </button>

                    <button
                      onClick={openWhatsapp}
                      className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare size={16} aria-hidden="true" />
                      Supermarket Flyer Distribution
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

              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center uppercase tracking-tight">
                Strategy Intelligence Hub
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs
                  .filter((blog) => blog.id !== activePost.id)
                  .slice(0, 3)
                  .map((blog) => (
                    <a
                      key={blog.id}
                      href={blog.link}
                      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full"
                    >

                      <div className="h-40 overflow-hidden relative">

                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-black uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full text-blue-600 shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>

                      <div className="p-6 flex flex-col flex-grow text-left">

                        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                          {blog.title}
                        </h4>

                        <p className="text-gray-500 text-[11px] md:text-xs line-clamp-2 mb-4 leading-relaxed">
                          {blog.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">

                          <span className="flex items-center gap-1">
                            <Clock size={12} aria-hidden="true" />
                            {blog.readTime}
                          </span>

                          <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all font-bold text-[10px]">
                            Read Story
                            <ArrowRightIcon size={12} />
                          </span>

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

/* --- ARROW ICON --- */
const ArrowRightIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);