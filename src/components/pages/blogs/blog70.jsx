
import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  TrendingUp,
  Clock,
  User,
  PhoneCall,
  LayoutGrid,
  Target,
  FileText,
  MessageSquare,
  Linkedin,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- RELATED BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "What are the best digital printing services available in the UAE?",
    description:
      "Find the best digital printing services in the UAE. High-quality printing across all Emirates. Contact Max Lead Advertising for fast and reliable service.",
    author: "MaxLead Strategy Team",
    date: "March 9, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Printing Services", "UAE Business"],
    link: "/blog/best-digital-printing-services-uae/",
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
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/",
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
    link: "/blog/best-digital-marketing-agency-uae/",
  },
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  {
    name: "Leaflet Distribution",
    icon: FileText,
    path: "/blog/best-leaflet-distribution-companies-in-uae/",
  },
  {
    name: "Digital Strategy",
    icon: Target,
    path: "/blog/best-digital-marketing-agency-uae/",
  },
  {
    name: "Psychology",
    icon: Target,
    path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/",
  },
];

/* --- REUSABLE FADE-IN COMPONENT --- */
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

export default function LadiesSalonLeafletDistributionBlog() {
  const activePost = {
    author: "MaxLead Strategy Team",
    readTime: "6 min read",
  };

  /* --- SEO META TAGS --- */
  useEffect(() => {
    document.title =
      "Ladies Salon Marketing: 7 Effective Flyer Distribution Tips UAE";

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
      "Discover 7 effective ways to promote your ladies salon through door-to-door leaflet distribution in Dubai, Sharjah and across the UAE."
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
      "https://www.maxleadadvertising.com/blog/promote-ladies-salon-door-to-door-leaflet-distribution/"
    );
  }, []);

  /* --- LENIS SMOOTH SCROLL --- */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
                7 Effective Ways to Promote Your Ladies Salon Through{" "}
                <span className="text-blue-600">
                  Door-to-Door Leaflet Distribution
                </span>
              </h1>

              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-2">
                  <Clock size={14} aria-hidden="true" />
                  {activePost.readTime}
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full" />

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit Max Lead LinkedIn Profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full" />

                <span className="flex items-center gap-2">
                  <User size={14} aria-hidden="true" />
                  {activePost.author}
                </span>
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
                  <cat.icon
                    size={14}
                    className="text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">
                    {cat.name}
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN BLOG CONTENT --- */}
        <section className="pb-24 bg-white px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
              <p className="text-base text-gray-600">
                Promoting a ladies salon in a competitive market like Dubai,
                Sharjah and Ajman requires effective local marketing
                strategies. While social media and online advertising help
                build brand awareness, traditional marketing methods such as
                door-to-door leaflet distribution remain useful for reaching
                households directly.
              </p>

              <p className="text-base text-gray-600">
                With professional door-to-door leaflet distribution, ladies
                salons can introduce their beauty services, promote special
                offers and attract potential customers living nearby.
              </p>

              <p className="text-base text-gray-600">
                Here are seven effective ways to promote your ladies salon
                through leaflet distribution.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                1. Promote Your Salon's Special Offers
              </h2>
              <p className="text-base text-gray-600">
                Create attractive leaflets highlighting your latest discounts,
                seasonal promotions and special beauty packages. Offers on
                facials, hair treatments, manicures, pedicures and bridal
                makeup can encourage potential customers to discover your
                salon. Include clear pricing, promotional validity and contact
                details to make your offer easy to understand.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                2. Target Villas and Residential Apartments
              </h2>
              <p className="text-base text-gray-600">
                Reach potential customers by distributing leaflets directly
                to residential communities. Targeting villas and apartment
                buildings near your salon helps introduce your business to
                households within your service area. Professional distribution
                campaigns can focus on selected neighbourhoods across Dubai,
                Sharjah, Ajman and other UAE locations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                3. Highlight Your Popular Beauty Services
              </h2>
              <p className="text-base text-gray-600">
                Use your leaflet to showcase the services that make your salon
                special. Include attractive images and brief descriptions of
                hair styling, skincare, facials, waxing, nail care, bridal
                makeup and other beauty treatments. A visually appealing
                leaflet helps customers understand what your salon offers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                4. Include Attractive Introductory Packages
              </h2>
              <p className="text-base text-gray-600">
                Encourage first-time visits by offering introductory discounts
                or exclusive packages for new customers. For example, you can
                promote a facial and manicure combination or a discounted hair
                treatment package. Make your offer clear and include a booking
                phone number or WhatsApp contact.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                5. Distribute Leaflets During Seasonal Promotions
              </h2>
              <p className="text-base text-gray-600">
                Plan your leaflet campaigns around occasions such as Eid,
                Ramadan, Valentine's Day, wedding seasons and holidays. These
                periods offer opportunities to promote festive beauty
                packages, bridal services and limited-time salon offers.
                Timely distribution helps your salon communicate promotions
                to local households.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                6. Add QR Codes and WhatsApp Contact Details
              </h2>
              <p className="text-base text-gray-600">
                Make it easy for customers to contact your salon. Include a
                WhatsApp number, website, social media profiles and a QR code
                linking to your booking page or promotional offers. This
                connects traditional leaflet marketing with your digital
                platforms and makes customer enquiries more convenient.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                7. Choose Professional Door-to-Door Leaflet Distribution
              </h2>
              <p className="text-base text-gray-600">
                The success of a leaflet campaign depends on reaching the
                right residential areas and managing distribution effectively.
                Working with a professional leaflet distribution company helps
                your salon plan targeted campaigns across villas, apartments
                and selected communities. Max Lead Advertising provides
                door-to-door flyer and leaflet distribution services across
                Dubai, Sharjah, Ajman, Abu Dhabi and other UAE locations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">
                Grow Your Ladies Salon with Targeted Leaflet Distribution
              </h2>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                Door-to-door leaflet distribution can help ladies salons
                increase local visibility, promote beauty packages and
                introduce their services to nearby households. By combining
                attractive designs, compelling offers and targeted residential
                distribution, your salon can strengthen its local marketing
                efforts.
              </p>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                Looking to promote your ladies salon in the UAE? Contact Max
                Lead Advertising for professional flyer, leaflet and brochure
                distribution services. Reach more households. Promote your
                services. Grow your salon's local visibility.
              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl not-prose">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">
                    Grow Your Ladies Salon with Targeted Leaflet Distribution!
                  </h3>

                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                    Reach more households across Dubai, Sharjah, Ajman and the
                    UAE with professional door-to-door distribution services.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Get a Free Quote
                    </button>

                    <button
                      onClick={openLinkedin}
                      className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                      aria-label="Visit Max Lead LinkedIn Profile"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                      LinkedIn Profile
                    </button>

                    <button
                      onClick={openWhatsapp}
                      className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare size={16} aria-hidden="true" />
                      WhatsApp Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
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
                {blogs.map((blog) => (
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
                          <Clock size={12} aria-hidden="true" />
                          {blog.readTime}
                        </span>

                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all font-bold text-[10px]">
                          Read Story <ArrowRightIcon size={12} />
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
