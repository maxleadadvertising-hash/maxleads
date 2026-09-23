import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  TrendingUp,
  Target,
  Clock,
  User,
  PhoneCall,
  LayoutGrid,
  FileText,
  MessageSquare,
  Linkedin
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title:
      "Restaurant Launch Marketing Strategies to Attract More Customers in Dubai",
    description:
      "Discover effective restaurant launch marketing strategies in Dubai, including social media, influencer marketing, flyer distribution, Google Ads, and local SEO.",
    author: "MaxLead Strategy Team",
    date: "September 22, 2026",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Local Lead Generation"],
    link:
      "/blog/restaurant-launch-marketing-strategies-dubai/"
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
    title: "Best Flyer Distribution Services in UAE",
    description:
      "Learn how professional flyer distribution services can help businesses reach targeted customers and improve local brand visibility.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Marketing", "UAE"],
    link: "/blog/best-flyer-distribution-services-uae/"
  }
];

const categories = [
  {
    name: "All Blogs",
    icon: LayoutGrid,
    path: "/blog/"
  },
  {
    name: "Flyer Distribution",
    icon: FileText,
    path: "/blog/best-flyer-distribution-services-uae/"
  },
  {
    name: "Digital Strategy",
    icon: Target,
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

export default function RestaurantLaunchMarketingDubaiBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    /* --- SEO META TAGS --- */
    document.title =
      "Restaurant Launch Marketing Strategies in Dubai | Max Lead Advertising";

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
      "Discover effective restaurant launch marketing strategies in Dubai, including social media, influencer marketing, flyer distribution, Google Ads, and local SEO. Contact Us!"
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
      "https://www.maxleadadvertising.com/blog/restaurant-launch-marketing-strategies-dubai/"
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
                Restaurant Launch Marketing Strategies to Attract More Customers in Dubai
              </h1>

              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">

                <span className="flex items-center gap-2">
                  <Clock size={14} aria-hidden="true" />
                  {activePost.readTime}
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit Max Lead LinkedIn Profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

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

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">

              <h2 className="text-2xl font-bold text-gray-900 pt-6">Introduction</h2>
              <p className="text-base text-gray-600">Launching a restaurant in Dubai presents exciting opportunities, but attracting customers in a competitive dining market requires a well-planned marketing strategy. From creating brand awareness to encouraging first-time visits, effective restaurant launch marketing can help establish your business and build a loyal customer base. Combining digital marketing, local advertising, and promotional campaigns can help your restaurant reach potential customers across Dubai.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">1. Build a Strong Online Presence</h2>
              <p className="text-base text-gray-600">Before opening your restaurant, establish a professional online presence. Create an attractive, mobile-friendly website featuring your menu, location, opening hours, contact details, and reservation options.</p>
              <p className="text-base text-gray-600">Set up and optimise your Google Business Profile with accurate business information, high-quality food photography, and relevant descriptions. This helps customers discover your restaurant when searching for dining options nearby.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">2. Promote Your Restaurant on Social Media</h2>
              <p className="text-base text-gray-600">Instagram, Facebook, and TikTok provide opportunities to showcase your restaurant's atmosphere, signature dishes, and dining experience. Start promoting before the official opening with behind-the-scenes videos, kitchen preparations, menu previews, and countdown posts.</p>
              <p className="text-base text-gray-600">During the launch, publish engaging food photography, short videos, and customer experiences. Consistent content helps increase brand visibility and encourages potential customers to visit.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">3. Use Influencer Marketing</h2>
              <p className="text-base text-gray-600">Collaborating with Dubai-based food bloggers and influencers can introduce your restaurant to audiences interested in dining experiences. Invite selected influencers for a tasting session and encourage them to share authentic reviews, food photography, and videos.</p>
              <p className="text-base text-gray-600">Choose influencers whose audiences match your restaurant's cuisine, location, and target customers to reach people who may genuinely be interested in visiting.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">4. Distribute Flyers in Nearby Communities</h2>
              <p className="text-base text-gray-600">Flyer distribution can introduce your restaurant to residents, office employees, and families living or working nearby. Use professionally designed flyers featuring your restaurant's name, location, signature dishes, opening offers, and contact information.</p>
              <p className="text-base text-gray-600">Target suitable residential communities, apartment buildings, offices, and commercial areas around your restaurant. A QR code linking to your menu or Google Maps location can make it easier for customers to find you.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">5. Create Attractive Opening Offers</h2>
              <p className="text-base text-gray-600">Special launch promotions can encourage customers to experience your restaurant for the first time. Consider introductory discounts, complimentary desserts, family meal packages, or limited-time offers on selected dishes.</p>
              <p className="text-base text-gray-600">Promote offers through social media, Google Business Profile updates, WhatsApp campaigns, and printed marketing materials. Clearly communicate the offer's validity and conditions.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">6. Invest in Local SEO and Google Ads</h2>
              <p className="text-base text-gray-600">Local SEO helps your restaurant appear when customers search for relevant dining options in Dubai. Use location-specific phrases such as “Italian restaurant in Dubai Marina” or “family restaurant in Dubai” where appropriate throughout your website.</p>
              <p className="text-base text-gray-600">Google Ads can complement organic visibility by displaying advertisements to people searching for restaurants, cuisines, or dining experiences in your service area. Use relevant keywords, location targeting, and compelling ad copy to support your launch campaign.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10">7. Encourage Customer Reviews and Repeat Visits</h2>
              <p className="text-base text-gray-600">Invite satisfied customers to leave honest reviews on Google. Respond professionally to feedback and use customer suggestions to improve your service. Loyalty programmes, returning-customer offers, and seasonal promotions can also encourage repeat visits.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">Conclusion</h2>
              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">A successful restaurant launch in Dubai requires a combination of digital marketing, local advertising, promotional offers, and excellent customer experiences. By building online visibility, connecting with nearby communities, and encouraging customer engagement, restaurants can introduce their brand to potential diners and establish a foundation for long-term growth.</p>
              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10"><strong>Planning a restaurant launch in Dubai?</strong> A well-executed marketing campaign can help your restaurant reach the right audience and create awareness from day one.</p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Launch Your Restaurant in Dubai with a Powerful Marketing Strategy!</h3>
                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">Attract more customers and build awareness for your new restaurant with professional digital marketing, flyer distribution, social media advertising, and local SEO services.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                      <PhoneCall size={16} aria-hidden="true" /> Get a Free Consultation
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