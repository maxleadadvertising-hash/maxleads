import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  TrendingUp,
  Target,
  Clock,
  User,
  LayoutGrid,
  FileText,
  MessageSquare,
  MousePointer2,
  Globe,
  Linkedin
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title:
      "Booklet Distribution in Dubai: A Smart Way to Showcase More Products and Services",
    description:
      "Promote more products and services with professional booklet distribution in Dubai. Reach targeted customers and increase local brand awareness with Max Lead Advertising.",
    author: "MaxLead Strategy Team",
    date: "September 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Booklet Distribution", "Dubai Marketing"],
    link: "/blog/booklet-distribution-dubai/"
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

/* --- FADE IN --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

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

export default function BookletDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
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
          Booklet Distribution in Dubai | Max Lead Advertising
        </title>

        <meta
          name="description"
          content="Promote more products and services with professional booklet distribution in Dubai. Reach targeted customers and increase local brand awareness with Max Lead Advertising. Contact Us!"
        />

        <link
          rel="canonical"
          href="https://www.maxleadadvertising.com/blog/booklet-distribution-dubai/"
        />
      </Helmet>

      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 text-center">

            <FadeIn>

              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">

                <TrendingUp className="w-3 h-3" />

                <span>
                  MaxLead UAE Marketing Guide 2026
                </span>

              </div>

              <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">

                Booklet Distribution in Dubai:{" "}

                <span className="text-blue-600">
                  A Smart Way to Showcase More Products and Services
                </span>

              </h1>

              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">

                <span className="flex items-center gap-2">
                  <Clock
                    className="w-4 h-4"
                    aria-hidden="true"
                  />

                  {activePost.readTime}
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit our LinkedIn Profile"
                >
                  <Linkedin
                    className="w-4 h-4"
                    aria-hidden="true"
                  />

                  LinkedIn
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

                <span className="flex items-center gap-2">
                  <User
                    className="w-4 h-4"
                    aria-hidden="true"
                  />

                  {activePost.author}
                </span>

              </div>

            </FadeIn>

          </div>

        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 bg-white border-b border-gray-50">

          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">

            {categories.map((cat, idx) => (

              <FadeIn key={idx} delay={idx * 30}>

                <button
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >

                  <cat.icon
                    className="w-4 h-4 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />

                  <span className="font-bold text-[11px] uppercase tracking-wider text-gray-600 group-hover:text-white">
                    {cat.name}
                  </span>

                </button>

              </FadeIn>

            ))}

          </div>

        </section>

        {/* --- MAIN CONTENT --- */}
        <section className="pb-24 bg-white px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">

              {/* INTRODUCTION */}
              <div className="mb-12">

                <p className="text-base text-gray-600">
                  In Dubai’s competitive business environment, companies need
                  marketing methods that can communicate more information while
                  reaching the right customers.{" "}
                  <strong>Booklet distribution in Dubai</strong> is an effective
                  offline marketing strategy that allows businesses to present
                  multiple products, services, offers, and important brand
                  information in one professionally designed booklet.
                </p>

                <p className="text-base text-gray-600">
                  Unlike a simple flyer, a booklet provides more space for
                  detailed information. Businesses can use it to showcase
                  product ranges, service packages, special promotions, company
                  profiles, and customer benefits in an organized and attractive
                  format.
                </p>

              </div>

              {/* SECTION 1 */}
              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                Why Choose Booklet Distribution in Dubai?
              </h2>

              <p className="text-base text-gray-600">
                Dubai has a diverse and constantly growing customer base.
                Reaching potential customers directly can help businesses create
                stronger local awareness. Professional{" "}
                <strong>booklet distribution services in Dubai</strong> allow
                companies to place their marketing materials in carefully
                selected locations where their target audience is more likely
                to see them.
              </p>

              <p className="text-base text-gray-600">
                Booklets are particularly useful for businesses with several
                products or services to promote. Instead of creating multiple
                promotional materials, companies can combine their key
                information into one convenient marketing piece.
              </p>

              {/* SECTION 2 */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Showcase More Products and Services
              </h2>

              <p className="text-base text-gray-600">
                One of the biggest advantages of{" "}
                <strong>booklet marketing Dubai</strong> is the amount of
                information it can carry. A well-designed booklet can include
                product images, descriptions, prices, service details,
                promotional offers, contact information, and calls to action.
              </p>

              <p className="text-base text-gray-600">
                For example, retailers can use booklets to highlight different
                product categories, while real estate companies can showcase
                properties and project information. Restaurants, healthcare
                businesses, educational institutions, automotive companies, and
                service providers can also use booklets to explain their complete
                offerings.
              </p>

              {/* SECTION 3 */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Reach Targeted Customers
              </h2>

              <p className="text-base text-gray-600">
                Effective distribution is just as important as booklet design.
                A professional{" "}
                <strong>booklet distribution company in Dubai</strong> can help
                businesses plan campaigns based on specific locations, customer
                profiles, and campaign objectives.
              </p>

              <p className="text-base text-gray-600">
                Booklets can be distributed in residential communities,
                commercial areas, business districts, retail locations, events,
                exhibitions, and other suitable areas.{" "}
                <strong>Targeted booklet distribution</strong> helps businesses
                focus their marketing budget on audiences that are more relevant
                to their products and services.
              </p>

              {/* SECTION 4 */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Build Brand Awareness
              </h2>

              <p className="text-base text-gray-600">
                Consistent offline marketing can help improve brand recognition.
                When customers receive a professionally designed booklet
                containing useful information, they can keep it and refer to it
                later. This gives businesses an opportunity to remain visible
                beyond the initial interaction.
              </p>

              <p className="text-base text-gray-600">
                Including a strong call to action, website, phone number,
                WhatsApp contact, QR code, or promotional offer can also
                encourage customers to take the next step.
              </p>

              {/* SECTION 5 */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Choose Professional Booklet Distribution Services
              </h2>

              <p className="text-base text-gray-600">
                A successful booklet campaign requires proper planning,
                accurate distribution, and reliable execution. Businesses
                should work with an experienced distribution partner that
                understands Dubai’s different areas and can support targeted
                campaigns.
              </p>

              <p className="text-base text-gray-600">
                <strong>
                  Max Lead Advertising &amp; Distribution
                </strong>{" "}
                provides professional promotional distribution solutions
                designed to help businesses connect with local audiences. With
                the right strategy, booklet distribution can become a practical
                way to present more information, promote multiple services, and
                generate new customer opportunities.
              </p>

              {/* CONCLUSION */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Conclusion
              </h2>

              <p className="text-base text-gray-600">
                If your business wants to reach customers directly and showcase
                more of what you offer,{" "}
                <strong>booklet distribution in Dubai</strong> can be a smart
                addition to your marketing strategy. Contact Max Lead
                Advertising &amp; Distribution to plan a targeted booklet
                distribution campaign for your business.
              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">
                    Put Your Brand in the Hands of Your Customers
                  </h3>

                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                    Promote more products and services with targeted booklet
                    distribution across Dubai. Reach the right audience,
                    increase brand awareness, and grow your business today.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center gap-2 shadow-lg"
                    >
                      <MousePointer2
                        size={16}
                        aria-hidden="true"
                      />

                      Get Started Today
                    </button>

                    <button
                      onClick={openLinkedin}
                      className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                      aria-label="Visit Max Lead LinkedIn Profile"
                    >
                      <Linkedin
                        size={16}
                        aria-hidden="true"
                      />

                      LinkedIn Profile
                    </button>

                    <button
                      onClick={openWhatsapp}
                      className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center gap-2 shadow-lg"
                    >
                      <MessageSquare
                        size={16}
                        aria-hidden="true"
                      />

                      WhatsApp Now
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

              <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">
                Strategy Intelligence Hub
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs
                  .filter((b) => b.id !== activePost.id)
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
                              className="text-[9px] font-black uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-blue-600 shadow-sm"
                            >
                              {tag}
                            </span>

                          ))}

                        </div>

                      </div>

                      <div className="p-6 flex flex-col flex-grow text-left">

                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                          {blog.title}
                        </h4>

                        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                          {blog.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">

                          <span className="flex items-center gap-1">
                            <Clock
                              size={12}
                              aria-hidden="true"
                            />

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