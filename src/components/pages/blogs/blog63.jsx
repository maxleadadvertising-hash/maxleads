import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  TrendingUp,
  Target,
  CheckCircle2,
  Clock,
  User,
  PhoneCall,
  LayoutGrid,
  Zap,
  FileText,
  MessageSquare,
  Linkedin
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- BLOG DATA --- */

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
    link: "/blog/best-digital-printing-services-uae/"
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
    title:
      "Grand Opening Advertising in Dubai: Build Business Awareness Before Launch Day",
    description:
      "Build awareness before your Dubai business launch with flyer distribution, digital marketing, Google Ads, social media and outdoor advertising.",
    author: "MaxLead Strategy Team",
    date: "November 25, 2026",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Grand Opening", "Dubai Advertising"],
    link: "/blog/grand-opening-advertising-dubai/"
  }
];

/* --- BLOG CATEGORIES --- */

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  {
    name: "Leaflet Distribution",
    icon: FileText,
    path: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    name: "Digital Strategy",
    icon: Target,
    path: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    name: "Fitness Marketing",
    icon: Zap,
    path: "/blog/fitness-lead-generation-dubai-door-to-door-flyer-distribution/"
  }
];

/* --- FADE IN ANIMATION --- */

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        setIsVisible(entry.isIntersecting)
      );
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

export default function GrandOpeningAdvertisingDubaiBlog() {
  const activePost = blogs[2];

  /* --- SEO META TAGS --- */

  useEffect(() => {
    document.title =
      "Grand Opening Advertising in Dubai | Max Lead Advertising";

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
      "Build awareness before your Dubai business launch with flyer distribution, digital marketing, Google Ads, social media and outdoor advertising from Max Lead Advertising. Contact Us!"
    );

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
      "Grand opening advertising Dubai, Grand opening marketing Dubai, Flyer distribution Dubai, Digital marketing Dubai"
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
      "https://www.maxleadadvertising.com/blog/grand-opening-advertising-dubai/"
    );
  }, []);

  /* --- LENIS SMOOTH SCROLL --- */

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

  /* --- BUTTON FUNCTIONS --- */

  const handleCategoryClick = (path) => {
    window.location.href = path;
  };

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/971557222605",
      "_blank"
    );
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

  /* --- PAGE CONTENT --- */

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

                Grand Opening Advertising in{" "}
                <span className="text-blue-600">
                  Dubai
                </span>
                : Build Business Awareness Before Launch Day

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

        {/* --- MAIN BLOG CONTENT --- */}

        <section className="pb-24 bg-white px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">

              <p className="text-base text-gray-600">

                Opening a new business in Dubai is an exciting milestone, but attracting customers from day one requires more than simply putting up a “Grand Opening” sign. A well-planned{" "}
                <strong>
                  grand opening advertising campaign in Dubai
                </strong>{" "}
                can build awareness before launch day, create anticipation and bring potential customers through your doors.

              </p>

              <p className="text-base text-gray-600">

                At <strong>Max Lead Advertising</strong>, we help businesses promote their grand openings through a combination of{" "}
                <strong>
                  flyer distribution, digital marketing, social media advertising, Google Ads, outdoor advertising and other targeted media solutions
                </strong>.

              </p>

              {/* WHY GRAND OPENING ADVERTISING MATTERS */}

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                Why Grand Opening Advertising Matters
              </h2>

              <p className="text-base text-gray-600">

                Your business may have a great location, attractive offers and quality products, but customers need to know that you exist. Starting your advertising before the opening gives you an opportunity to introduce your brand, promote your launch offer and create local awareness.

              </p>

              <p className="text-base text-gray-600">
                A pre-launch campaign can help you:
              </p>

              <ul className="space-y-3 list-none p-0">

                {[
                  "Build awareness in your target area",
                  "Generate customer interest before opening day",
                  "Promote grand opening offers and discounts",
                  "Reach nearby residents and businesses",
                  "Increase website, WhatsApp and social media enquiries",
                  "Create stronger footfall on launch day"
                ].map((item, i) => (

                  <li key={i} className="flex gap-3 items-start">

                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-1"
                      size={16}
                    />

                    <span>{item}</span>

                  </li>

                ))}

              </ul>

              {/* FLYER DISTRIBUTION */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Flyer Distribution Across Dubai
              </h2>

              <p className="text-base text-gray-600">

                Traditional advertising remains an effective way to reach customers locally, particularly for businesses targeting residents and communities.

              </p>

              <p className="text-base text-gray-600">

                <strong>Flyer distribution in Dubai</strong> can target villas, apartments, residential communities, offices, retail areas and nearby businesses. Your grand opening flyer can include your location, opening date, promotional offers, QR code, contact information and a strong call to action.

              </p>

              <p className="text-base text-gray-600">

                Targeted distribution helps put your business directly in front of potential customers who live or work around your new location.

              </p>

              {/* DIGITAL MARKETING */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Digital Marketing Before Your Grand Opening
              </h2>

              <p className="text-base text-gray-600">

                Digital marketing allows you to reach potential customers before they physically visit your business. A grand opening digital marketing campaign can include:

              </p>

              <ul className="space-y-3 list-none p-0">

                {[
                  "Facebook and Instagram advertising",
                  "Google Search Ads",
                  "Performance Max campaigns",
                  "Social media marketing",
                  "Local SEO",
                  "WhatsApp marketing",
                  "Website and landing page promotions",
                  "Remarketing campaigns"
                ].map((item, i) => (

                  <li key={i} className="flex gap-3 items-start">

                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-1"
                      size={16}
                    />

                    <span>{item}</span>

                  </li>

                ))}

              </ul>

              <p className="text-base text-gray-600">

                For example, a restaurant opening in Dubai can promote its launch offer to people searching for restaurants in the surrounding area, while a salon can use Instagram and Facebook ads to generate appointment enquiries before opening.

              </p>

              {/* SOCIAL MEDIA */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Social Media Creates Launch-Day Excitement
              </h2>

              <p className="text-base text-gray-600">

                Social media is an important part of building anticipation. Start posting several days or weeks before the opening with content such as “Coming Soon,” behind-the-scenes videos, product previews, opening offers and countdown posts.

              </p>

              <p className="text-base text-gray-600">

                You can also use paid social media advertising to reach people based on location, interests and other relevant audience characteristics.

              </p>

              {/* OUTDOOR ADVERTISING */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Outdoor and Other Media Advertising
              </h2>

              <p className="text-base text-gray-600">

                Depending on your location and target audience, outdoor advertising can provide additional visibility. Options may include banners, signage, promotional displays and other suitable outdoor media.

              </p>

              <p className="text-base text-gray-600">

                Combining outdoor advertising with flyer distribution and digital campaigns creates multiple touchpoints with potential customers.

              </p>

              {/* CAMPAIGN PLANNING */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Create a Complete Grand Opening Campaign
              </h2>

              <p className="text-base text-gray-600">

                The most effective approach is not to depend on one advertising channel. Instead, combine multiple channels around one clear message.

              </p>

              <div className="space-y-4 mt-5">

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Before Launch
                  </h3>
                  <p className="text-base text-gray-600">
                    Social media + Google Ads + local awareness campaign.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    1 Week Before Opening
                  </h3>
                  <p className="text-base text-gray-600">
                    Flyer distribution + promotional advertising + countdown content.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Launch Day
                  </h3>
                  <p className="text-base text-gray-600">
                    Outdoor visibility + social media coverage + promotional offers.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    After Launch
                  </h3>
                  <p className="text-base text-gray-600">
                    Remarketing + customer reviews + ongoing digital advertising.
                  </p>
                </div>

              </div>

              <p className="text-base text-gray-600 mt-6">

                This integrated approach helps your business move from{" "}
                <strong>awareness to enquiries, visits and sales</strong>.

              </p>

              {/* MAX LEAD ADVERTISING */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Promote Your Dubai Grand Opening with Max Lead Advertising
              </h2>

              <p className="text-base text-gray-600">

                Whether you are opening a restaurant, salon, retail store, clinic, showroom, office, supermarket or another business, Max Lead Advertising can help you build awareness before launch day.

              </p>

              <p className="text-base text-gray-600">

                From{" "}
                <strong>
                  flyer distribution and digital marketing to social media, Google Ads and outdoor advertising
                </strong>, we can help create a campaign designed around your location, audience and launch objectives.

              </p>

              <p className="text-base text-gray-600">

                Start promoting your business before the doors officially open, and give your grand opening the visibility it deserves.

              </p>

              {/* CONCLUSION */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">
                Conclusion
              </h2>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">

                A successful grand opening starts with making the right people aware of your business before launch day. Combining flyer distribution, digital marketing, social media and outdoor advertising can help build local awareness, generate enquiries and encourage customers to visit.

              </p>

              {/* CTA SECTION */}

              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">
                    Make Your Grand Opening a Big Success in Dubai
                  </h3>

                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">

                    Reach More Customers Before Launch Day with Flyer Distribution, Digital Marketing &amp; Targeted Advertising.

                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Plan Your Grand Opening Campaign
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