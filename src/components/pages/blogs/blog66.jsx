
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
  Sparkles,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- RELATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title:
      "Supermarket Advertising in the UAE: Turning Weekly Promotions into Store Visits with Flyer Distribution",
    description:
      "Promote weekly supermarket offers with professional flyer distribution in the UAE. Reach nearby customers, increase brand awareness, and encourage store visits. Contact us!",
    author: "MaxLead Strategy Team",
    date: "September 23, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Supermarket Flyer Distribution", "Dubai Marketing"],
    link: "/blog/supermarket-advertising-uae-weekly-promotions/",
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
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/",
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
      "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Agency Guide"],
    link: "/blog/best-digital-marketing-agency-uae/",
  },
];

/* --- CATEGORIES --- */
const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  {
    name: "Leaflet Distribution",
    icon: FileText,
    path: "/blog/best-leaflet-distribution-companies-in-uae/",
  },
  {
    name: "Digital Strategy",
    icon: Globe,
    path: "/blog/best-digital-marketing-agency-uae/",
  },
  {
    name: "Psychology",
    icon: Target,
    path:
      "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/",
  },
];

/* --- FADE IN ANIMATION --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- MAIN BLOG COMPONENT --- */
export default function RealEstateLeadGenerationDubaiBlog() {
  const activePost = {
    id: 4,
    title: "Real Estate Lead Generation in Dubai",
  };

  const metaTitle =
    "Real Estate Lead Generation Dubai | Digital Marketing | Max Lead";
  const metaDescription =
    "Generate quality real estate leads in Dubai with SEO, Google Ads, social media marketing, content marketing, and targeted flyer distribution across the UAE. Contact Us!";
  const canonicalUrl =
    "https://www.maxleadadvertising.com/blog/real-estate-lead-generation-dubai/";
  const metaKeywords =
    "Real estate lead generation Dubai, Real estate marketing Dubai, Property lead generation UAE, Digital marketing for real estate Dubai";

  useEffect(() => {
    document.title = metaTitle;

    let metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.name = "description";
      document.head.appendChild(metaDescriptionTag);
    }

    metaDescriptionTag.setAttribute("content", metaDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonicalUrl);
  }, []);

  /* --- LENIS SMOOTH SCROLL --- */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
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
    window.open("https://wa.me/971557222605", "_blank");
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
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
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
                <span>MaxLead Digital Marketing 2026</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 md:mb-6 leading-tight px-2">
                Real Estate Lead Generation in Dubai: Digital Marketing
                Strategies That{" "}
                <span className="text-blue-600">Deliver Results</span>
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  7 min read
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
              <FadeIn key={cat.name} delay={idx * 30}>
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
            <article className="prose prose-sm md:prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-8 md:pt-12">
              {/* INTRODUCTION */}
              <div className="mb-12">
                <p className="text-sm md:text-base text-gray-600">
                  Dubai's real estate market is highly competitive, with
                  property developers, real estate agencies, and independent
                  brokers competing to attract buyers, investors, and tenants.
                  Generating quality leads requires more than occasional
                  advertising. Businesses need an integrated digital marketing
                  strategy that combines search engine optimization, Google
                  Ads, social media marketing, content marketing, and targeted
                  offline promotional activities to reach potential customers
                  effectively.
                </p>
              </div>

              {/* SECTION 1 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-6">
                1. Search Engine Optimization for Real Estate Leads
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                SEO helps real estate businesses attract potential customers
                who are actively searching for properties and investment
                opportunities. Optimizing your website for keywords such as
                "apartments for sale in Dubai," "Dubai real estate investment,"
                and "luxury villas in Dubai" can improve search visibility and
                generate relevant organic traffic.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Create dedicated landing pages for different property types,
                locations, and customer segments. Publishing informative blogs
                about property investment, Dubai neighbourhoods, and buying
                procedures can also establish credibility. Local SEO, Google
                Business Profile optimization, and customer reviews help real
                estate agencies improve their visibility in relevant local
                searches.
              </p>

              {/* SECTION 2 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                2. Google Ads for High-Intent Prospects
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Google Ads enables real estate businesses to reach people
                searching for specific properties, residential communities, and
                investment opportunities. Search campaigns can target keywords
                related to property purchases, rentals, and off-plan
                developments.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Use compelling ad copy that highlights property features,
                locations, payment plans, and viewing opportunities. Direct
                users to dedicated landing pages with clear calls to action,
                such as "Book a Property Viewing" or "Speak to a Property
                Consultant."
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Track phone calls, enquiry forms, WhatsApp clicks, and
                qualified leads to measure campaign performance. Regularly
                optimize targeting, keywords, and landing pages to improve lead
                quality and manage advertising costs.
              </p>

              {/* SECTION 3 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                3. Social Media Marketing and Paid Advertising
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Platforms such as Instagram, Facebook, and LinkedIn offer
                valuable opportunities to connect with property buyers and
                investors. Instagram Reels, property walkthrough videos, virtual
                tours, and carousel posts can showcase residential and
                commercial properties in an engaging format.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Meta Ads can help businesses reach audiences based on relevant
                interests, locations, and campaign objectives. Retargeting
                website visitors and people who have engaged with previous
                advertisements can encourage potential customers to return and
                enquire.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                For premium commercial properties and investment opportunities,
                LinkedIn can support professional networking and
                business-to-business outreach.
              </p>

              {/* SECTION 4 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                4. Content Marketing to Build Trust
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Property buyers often research locations, prices, developers,
                and investment potential before making decisions. Providing
                helpful content can answer their questions and build confidence
                in your business.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Publish blogs, market updates, neighbourhood guides, property
                comparison articles, and short educational videos. Email
                newsletters and WhatsApp follow-ups can keep interested
                prospects informed about new listings, open houses, and
                relevant property opportunities, subject to appropriate
                consent.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Consistent content marketing positions your brand as a useful
                resource throughout the customer journey.
              </p>

              {/* SECTION 5 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                5. Integrated Offline Marketing and Flyer Distribution
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Although digital channels are essential, targeted offline
                marketing can complement online lead generation. Real estate
                agencies can use professionally designed brochures, leaflets,
                and promotional flyers to increase awareness of property
                launches, open houses, and new developments.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                <strong>Flyer distribution in Dubai</strong> can support
                campaigns targeting relevant residential communities,
                apartments, villas, and selected business areas, subject to
                community permissions and applicable regulations. Combining
                offline promotions with digital campaigns can reinforce brand
                recognition and encourage prospects to visit your website or
                contact your sales team.
              </p>

              {/* SECTION 6 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                6. Lead Management and Performance Tracking
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Generating enquiries is only the first step. Businesses need a
                structured process to convert leads into property viewings and
                sales.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Use a CRM system to organize enquiries, record customer
                preferences, schedule follow-ups, and monitor sales progress.
                Track key metrics such as cost per lead, qualified lead rate,
                viewing bookings, and conversion rate.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Integrating website analytics, advertising conversion tracking,
                and CRM reporting helps identify the campaigns that generate
                valuable prospects rather than simply increasing enquiry
                volume.
              </p>

              {/* CONCLUSION */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Conclusion
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Successful real estate lead generation in Dubai depends on
                combining multiple marketing channels into one coordinated
                strategy. SEO attracts organic traffic, Google Ads captures
                high-intent searches, social media builds awareness, content
                marketing establishes trust, and targeted flyer distribution
                strengthens local visibility.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                By connecting these channels with effective lead management
                and performance tracking, real estate businesses can improve
                lead quality, strengthen brand recognition, and build a more
                consistent pipeline of potential buyers and investors.
              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-white">
                    Generate More Real Estate Leads in Dubai
                  </h3>

                  <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                    Reach the right audience with integrated digital marketing,
                    targeted advertising, and professional flyer distribution
                    across the UAE.
                  </p>

                  <p className="text-white text-sm md:text-base font-bold mb-6">
                    Grow Your Property Business — Contact Us Today
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
                      Discuss Your Campaign
                    </button>
                  </div>
                </div>
              </div>
            </article>
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
