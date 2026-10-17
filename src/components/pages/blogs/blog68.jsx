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

const BLOG_TITLE =
  "Booklet Distribution Dubai, Sharjah, Ajman & Abu Dhabi | Max Lead";

const BLOG_DESCRIPTION =
  "Boost seasonal retail sales with creative promotions, local advertising, and professional booklet distribution in Dubai, Sharjah, Ajman, and Abu Dhabi. Contact Us!";

const BLOG_URL =
  "https://www.maxleadadvertising.com/blog/seasonal-retail-marketing-booklet-distribution-uae/";

const BLOG_H1 =
  "Seasonal Retail Marketing in the UAE: Boost Sales with Booklet Distribution in Dubai, Sharjah, Ajman & Abu Dhabi";

const blogs = [
  {
    id: 1,
    title: BLOG_H1,
    description: BLOG_DESCRIPTION,
    author: "MaxLead Strategy Team",
    date: "October 17, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Booklet Distribution", "Retail Marketing"],
    link: "/blog/seasonal-retail-marketing-booklet-distribution-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description:
      "Discover why physical marketing still works and how printed materials can support brand awareness.",
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
      "Learn how to choose a digital marketing partner that helps turn clicks into enquiries and sales.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Digital Marketing"],
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

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

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    observer.observe(element);

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

export default function SeasonalRetailBookletDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    document.title = BLOG_TITLE;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", BLOG_DESCRIPTION);

    let metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      "Booklet distribution in Dubai, Booklet distribution in Sharjah, Booklet distribution in Ajman, Booklet distribution in Abu Dhabi"
    );

    let linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }

    linkCanonical.setAttribute("href", BLOG_URL);
  }, []);

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
      <Helmet>
        <title>{BLOG_TITLE}</title>

        <meta
          name="description"
          content={BLOG_DESCRIPTION}
        />

        <meta
          name="keywords"
          content="Booklet distribution in Dubai, Booklet distribution in Sharjah, Booklet distribution in Ajman, Booklet distribution in Abu Dhabi"
        />

        <link rel="canonical" href={BLOG_URL} />
      </Helmet>

      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen overflow-x-hidden">

        {/* HERO SECTION */}
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
                Seasonal Retail Marketing in the UAE: Boost Sales with{" "}
                <span className="text-blue-600">
                  Booklet Distribution
                </span>{" "}
                in Dubai, Sharjah, Ajman & Abu Dhabi
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

        {/* CATEGORY SELECTOR */}
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

        {/* MAIN BLOG CONTENT */}
        <section className="pb-16 md:pb-24 bg-white px-4 md:px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <article className="prose prose-sm md:prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-8 md:pt-12">

              {/* INTRODUCTION */}
              <div className="mb-12">

                <p className="text-sm md:text-base text-gray-600">
                  Seasonal retail marketing is an effective way for
                  businesses to attract customers, increase sales, and
                  promote special offers throughout the year. In the UAE,
                  shopping seasons such as Ramadan, Eid, Dubai Shopping
                  Festival, UAE National Day, back-to-school periods, and
                  summer sales create valuable opportunities for retailers
                  to connect with their target audiences. By combining
                  digital marketing with traditional advertising methods,
                  businesses can improve brand visibility and encourage
                  more customers to visit their stores.
                </p>

              </div>

              {/* SECTION 1 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-6">
                1. Plan Seasonal Promotions Around Shopping Trends
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Successful seasonal marketing starts with understanding
                customer needs and shopping behaviour. Retailers can plan
                promotional campaigns around major shopping events,
                holidays, and seasonal changes.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Supermarkets can promote grocery discounts, fashion
                retailers can advertise seasonal collections, and
                electronics stores can highlight special product offers.
                Restaurants, furniture stores, and beauty retailers can
                also create limited-time promotions to attract new
                customers.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Planning campaigns in advance allows businesses to
                prepare promotional materials, select suitable
                advertising channels, and communicate offers before
                competitors capture customer attention.
              </p>

              {/* SECTION 2 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                2. Use Booklet Distribution to Promote Retail Offers
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                <strong>Booklet distribution in Dubai</strong> is an
                effective offline marketing strategy for retailers
                looking to showcase multiple products, prices, and
                promotional offers in one printed publication. Unlike
                a single flyer, a promotional booklet provides more
                space to present product categories, seasonal discounts,
                new arrivals, and special deals.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Retailers can distribute promotional booklets to
                relevant residential communities, apartment buildings,
                and other suitable locations, subject to property
                permissions and applicable regulations. This approach
                can help businesses reach nearby households and
                encourage customers to explore their latest offers.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Professional{" "}
                <strong>booklet distribution in Sharjah</strong>,{" "}
                <strong>Ajman</strong>, and{" "}
                <strong>Abu Dhabi</strong> can also help retailers
                expand their reach beyond Dubai. By targeting relevant
                neighbourhoods in each emirate, businesses can promote
                store openings, seasonal sales, product launches, and
                exclusive discounts to local audiences.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Include clear product images, prices, offer validity
                dates, store locations, and contact details in your
                booklet. Adding a QR code that directs customers to
                your website or online store can also connect offline
                advertising with digital shopping.
              </p>

              {/* SECTION 3 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                3. Combine Print Advertising with Digital Marketing
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Integrating printed promotional materials with digital
                campaigns can strengthen seasonal retail marketing.
                Use social media advertisements, Google Ads, email
                marketing, and WhatsApp promotions to communicate the
                same seasonal offers featured in your booklets.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                For example, a retailer can distribute promotional
                booklets in selected communities while running
                Instagram and Facebook campaigns targeting customers
                in nearby areas. Consistent messaging across different
                channels helps improve brand recognition and makes
                offers easier to remember.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Retailers can also use dedicated landing pages or
                campaign-specific QR codes to measure customer
                engagement generated by printed advertising.
              </p>

              {/* SECTION 4 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                4. Create Attractive and Customer-Focused Promotions
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                A successful promotional booklet should communicate
                value quickly. Highlight the most attractive offers
                on the cover and organize products into clear
                categories.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Use high-quality product photography, readable
                typography, compelling headlines, and a consistent
                brand identity. Limited-time discounts, seasonal
                bundles, loyalty rewards, and minimum-purchase offers
                can encourage customers to take action.
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Ensure that promotional prices, terms, and expiry
                dates are accurate and easy to understand.
              </p>

              {/* SECTION 5 */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                5. Measure Campaign Performance
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Track sales during the campaign, website visits,
                QR code scans, coupon redemptions, and customer
                enquiries to evaluate results. Compare performance
                across different locations and promotional periods
                to identify which distribution areas and offers
                generate the strongest response.
              </p>

              {/* CONCLUSION */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Conclusion
              </h2>

              <p className="text-sm md:text-base text-gray-600">
                Seasonal retail marketing helps UAE businesses connect
                with customers during important shopping periods.
                By combining creative promotions, digital advertising,
                and professional{" "}
                <strong>booklet distribution in Dubai, Sharjah,
                Ajman, and Abu Dhabi</strong>, retailers can increase
                local visibility, showcase their offers, and encourage
                store visits. A well-planned, measurable campaign can
                support stronger customer engagement and sustainable
                retail growth.
              </p>

              {/* CTA BANNER */}
              <div className="not-prose bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-white">
                    Boost Your Seasonal Retail Sales Across the UAE
                  </h3>

                  <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
                    Reach more customers with professionally designed
                    promotional booklets and targeted booklet
                    distribution in Dubai, Sharjah, Ajman, and Abu Dhabi.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-900 font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Promote Your Business Today
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
                      Contact Us on WhatsApp
                    </button>

                  </div>
                </div>
              </div>

            </article>
          </FadeIn>
        </section>

        {/* RELATED BLOGS */}
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