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
      "Brochure Distribution in Dubai: How to Put Your Business Information Directly Into Customers’ Hands",
    description:
      "Reach targeted customers with professional brochure distribution in Dubai. Promote your products, services and offers directly to local audiences. Contact Max Lead Advertising!",
    author: "MaxLead Strategy Team",
    date: "September 11, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Brochure Distribution", "Dubai Marketing"],
    link: "/blog/brochure-distribution-in-dubai/"
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

export default function BrochureDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    document.title =
      "Brochure Distribution in Dubai | Max Lead Advertising";

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
      "Reach targeted customers with professional brochure distribution in Dubai. Promote your products, services and offers directly to local audiences. Contact Max Lead Advertising!"
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
      "https://www.maxleadadvertising.com/blog/brochure-distribution-in-dubai/"
    );
  }, []);

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
          Brochure Distribution in Dubai | Max Lead Advertising
        </title>

        <meta
          name="description"
          content="Reach targeted customers with professional brochure distribution in Dubai. Promote your products, services and offers directly to local audiences. Contact Max Lead Advertising!"
        />

        <meta
          name="keywords"
          content="brochure distribution in Dubai, brochure distribution services Dubai, brochure distribution company Dubai, brochure marketing Dubai, brochure delivery services UAE, targeted brochure distribution"
        />

        <link
          rel="canonical"
          href="https://www.maxleadadvertising.com/blog/brochure-distribution-in-dubai/"
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

                Brochure Distribution in Dubai: How to Put Your Business Information Directly Into{" "}

                <span className="text-blue-600">
                  Customers’ Hands
                </span>

              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm mb-4">

                <span className="flex items-center gap-1.5">
                  <Clock
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                  6 min read
                </span>

                <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit Max Lead LinkedIn Profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </span>

                <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>

                <span className="flex items-center gap-1.5">
                  <User
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
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
                  onClick={() =>
                    handleCategoryClick(cat.path)
                  }
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

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-16 md:pb-24 bg-white px-4 md:px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-sm md:prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-8 md:pt-12">

              <div className="mb-12">

                <p className="text-sm md:text-base text-gray-600">

                  In Dubai’s competitive business environment, getting your brand noticed requires more than simply being visible online. While digital marketing is an important part of business promotion, printed marketing materials can create a direct connection with potential customers. <strong>Brochure distribution in Dubai</strong> gives businesses an effective way to place detailed information about their products, services, offers and brand directly in front of their target audience.

                </p>

                <p className="text-sm md:text-base text-gray-600 mt-4">

                  Unlike a standard flyer, a brochure can communicate more information while maintaining a professional presentation. When the right brochure reaches the right customer in the right location, it can support brand awareness, customer enquiries and local business growth.

                </p>

              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-6">
                Why Brochure Distribution Matters for Dubai Businesses
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                Dubai has a diverse customer base spread across residential communities, commercial districts, shopping areas and business centres. This creates opportunities for businesses to use location-based marketing to reach people who are more likely to need their services.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                Professional <strong>brochure distribution services in Dubai</strong> allow businesses to select specific areas and audiences instead of distributing marketing materials randomly. For example, a real estate company can target residential communities, while a clinic may focus on nearby households and commercial areas.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                This targeted approach can help businesses make better use of their printed marketing budget.

              </p>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Brochures Give Customers More Information
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                One of the biggest advantages of brochures is the amount of information they can communicate. A well-designed brochure can include your company introduction, key services, product information, special offers, contact details, website and call-to-action.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                This makes brochures particularly useful for businesses that need to explain several services or products before a customer makes an enquiry. Restaurants can promote menus and offers, educational institutions can highlight courses, real estate companies can showcase properties, and service businesses can explain their solutions in greater detail.

              </p>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Choosing the Right Distribution Locations
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                The effectiveness of a brochure campaign depends heavily on where the materials are distributed. Businesses should consider their ideal customers before selecting locations.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                Potential distribution areas may include residential communities, apartment buildings, business districts, retail locations, hospitality areas and other suitable local environments. A professional <strong>brochure distribution company in Dubai</strong> can help businesses plan campaigns according to their target audience, campaign objectives and preferred locations.

              </p>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Make Your Brochure Easy to Act On
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                A brochure should not only provide information; it should encourage the customer to take the next step. Include a clear call-to-action such as “Call Us Today,” “Visit Our Website,” “Book a Consultation” or “Get a Free Quote.”

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                Adding a QR code can also connect offline marketing with your digital channels. Customers can scan the code to visit your website, WhatsApp, landing page or promotional offer.

              </p>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Track Your Campaign Performance
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                Brochure distribution becomes more useful when businesses can measure customer response. Use campaign-specific phone numbers, landing pages, QR codes, promotional codes or enquiry forms to identify responses generated from a particular campaign.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                Tracking these results can help you understand which locations and offers generate stronger engagement and improve future distribution campaigns.

              </p>

              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-10">
                Partner With a Professional Distribution Team
              </h2>

              <p className="text-sm md:text-base text-gray-600">

                Successful brochure marketing requires more than printing thousands of brochures. The materials need to reach relevant audiences through a properly planned distribution campaign.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                Max Lead Advertising &amp; Distribution FZE provides professional distribution solutions designed to help businesses reach targeted customers across Dubai. With the right audience, locations and campaign planning, brochure distribution can become a valuable part of your local marketing strategy.

              </p>

              <p className="text-sm md:text-base text-gray-600 mt-4">

                If your business wants to reach customers beyond the screen and put your message directly into their hands, a professionally planned brochure campaign can be a practical way to strengthen local visibility and generate new enquiries.

              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12 rounded-[2.5rem] mt-10 md:mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-white">

                    Get More Customers With Brochure Distribution

                  </h3>

                  <p className="text-blue-100 text-xs md:text-base mb-6 md:mb-8 max-w-2xl mx-auto font-medium">

                    Reach your target audience across Dubai with professional brochure distribution.

                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-900 font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >

                      <PhoneCall
                        size={16}
                        aria-hidden="true"
                      />

                      Contact Experts

                    </button>

                    <button
                      onClick={openLinkedin}
                      className="bg-blue-800 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-900 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
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
                      className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >

                      <MessageSquare
                        size={16}
                        aria-hidden="true"
                      />

                      Brochure Solutions

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
                            <ArrowRightIcon size={12} aria-hidden="true" />
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