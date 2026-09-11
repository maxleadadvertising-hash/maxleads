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
      "Professional Commercial Flyer Distribution in Dubai for Maximum Local Reach",
    description:
      "Reach more local customers with professional commercial flyer distribution in Dubai. Promote your business, increase visibility, and generate more leads.",
    author: "MaxLead Strategy Team",
    date: "September 8, 2026",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Dubai Marketing"],
    link: "/blog/commercial-flyer-distribution-dubai/"
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
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
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

export default function CommercialFlyerDistributionDubaiBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    /* --- SEO META TAGS --- */
    document.title =
      "Commercial Flyer Distribution Dubai | Max Lead Advertising";

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
      "Boost your local reach with professional commercial flyer distribution in Dubai. Reach targeted customers, promote your business, and generate more leads."
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
      "https://www.maxleadadvertising.com/blog/commercial-flyer-distribution-dubai/"
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
                Professional Commercial{" "}
                <span className="text-blue-600">
                  Flyer Distribution in Dubai
                </span>{" "}
                for Maximum Local Reach
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

              <p className="text-base text-gray-600">
                In a competitive market like Dubai, businesses need effective
                ways to reach potential customers directly. While digital
                marketing is essential,{" "}
                <strong>commercial flyer distribution in Dubai</strong>{" "}
                remains a powerful way to connect with local audiences and
                create awareness for your products or services.
              </p>

              <p className="text-base text-gray-600">
                A professionally planned flyer campaign can put your brand
                directly into the hands of potential customers across
                residential communities, commercial areas, offices, retail
                locations, and other high-traffic locations.
              </p>

              {/* WHY CHOOSE */}
              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                Why Choose Commercial Flyer Distribution in Dubai?
              </h2>

              <p className="text-base text-gray-600">
                Dubai has a diverse and rapidly growing customer base. Reaching
                the right audience requires more than simply distributing
                flyers randomly. Professional{" "}
                <strong>commercial flyer distribution services in Dubai</strong>{" "}
                help businesses plan their campaigns according to their target
                location, audience, and marketing objectives.
              </p>

              <p className="text-base text-gray-600">
                Whether you are launching a new business, promoting a special
                offer, opening a new branch, or generating awareness about your
                services, flyer distribution can provide direct local
                exposure.
              </p>

              {/* TARGET CUSTOMERS */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Reach Your Target Customers Directly
              </h2>

              <p className="text-base text-gray-600">
                One of the biggest advantages of flyer marketing is direct
                communication. Instead of waiting for customers to discover
                your business online, you can take your marketing message
                directly to them.
              </p>

              <p className="text-base text-gray-600">
                Your flyers can be distributed in carefully selected areas
                based on your business requirements. For example, restaurants
                can target residential communities and office areas, while
                real estate companies can focus on specific neighborhoods and
                property markets.
              </p>

              <p className="text-base text-gray-600">
                This location-focused approach helps businesses improve their
                local visibility and reach customers who are more relevant to
                their products or services.
              </p>

              {/* BRAND AWARENESS */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Build Strong Local Brand Awareness
              </h2>

              <p className="text-base text-gray-600">
                Consistent brand visibility plays an important role in
                attracting customers. A professionally designed flyer
                containing your business name, services, offers, contact
                details, and call to action can help customers remember your
                brand.
              </p>

              <p className="text-base text-gray-600">
                With the right{" "}
                <strong>commercial flyer distribution in Dubai</strong>,
                businesses can increase awareness within their target
                communities and create more opportunities for enquiries and
                sales.
              </p>

              {/* PROMOTIONS */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Promote Offers, Services & New Launches
              </h2>

              <p className="text-base text-gray-600">
                Flyers are particularly effective for promoting time-sensitive
                campaigns. Businesses can use flyer distribution to advertise:
              </p>

              <ul className="space-y-4 list-none p-0">
                {[
                  "Special discounts and promotions",
                  "New product launches",
                  "Restaurant offers",
                  "Real estate projects",
                  "Retail promotions",
                  "Business services",
                  "Events and openings",
                  "Seasonal campaigns"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-1"
                      size={18}
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base text-gray-600 mt-6">
                A clear offer combined with an effective call to action can
                encourage customers to contact your business, visit your
                location, or enquire about your services.
              </p>

              {/* PROFESSIONAL DISTRIBUTION */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Why Professional Distribution Matters
              </h2>

              <p className="text-base text-gray-600">
                Simply printing thousands of flyers does not guarantee results.
                The success of a campaign depends heavily on{" "}
                <strong>where, when, and how</strong> the flyers are
                distributed.
              </p>

              <div className="space-y-8 mt-6">

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    1. Strategic Area Selection
                  </h4>

                  <p className="text-sm text-gray-600">
                    Selecting the right locations helps your marketing message
                    reach customers who are more likely to be interested in
                    your products or services.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    2. Targeted Distribution
                  </h4>

                  <p className="text-sm text-gray-600">
                    Professional distribution focuses on your selected
                    audience and campaign objectives instead of relying on
                    random flyer placement.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    3. Consistent Campaign Execution
                  </h4>

                  <p className="text-sm text-gray-600">
                    A structured distribution process helps businesses
                    maintain consistent campaign coverage across their
                    selected areas.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    4. Better Local Visibility
                  </h4>

                  <p className="text-sm text-gray-600">
                    Professional flyer distribution can help businesses
                    increase their visibility within targeted residential,
                    commercial, and retail areas.
                  </p>
                </div>
              </div>

              {/* INDUSTRIES */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Businesses That Can Benefit from Flyer Distribution
              </h2>

              <p className="text-base text-gray-600">
                Commercial flyer distribution can support marketing campaigns
                across a wide range of industries in Dubai.
              </p>

              <p className="font-bold text-gray-900">
                Industries that benefit include:
              </p>

              <div className="flex flex-wrap gap-2 my-4">
                {[
                  "Restaurants",
                  "Real Estate",
                  "Retail",
                  "Healthcare",
                  "Education",
                  "Fitness",
                  "Home Services",
                  "Beauty & Salons",
                  "Startups"
                ].map((ind, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold"
                  >
                    {ind}
                  </span>
                ))}
              </div>

              {/* MAX LEAD */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Choose Max Lead Advertising for Flyer Distribution in Dubai
              </h2>

              <p className="text-base text-gray-600">
                At <strong>Max Lead Advertising</strong>, we help businesses
                reach their target customers through professional commercial
                flyer distribution campaigns in Dubai. Our approach focuses on
                strategic locations, targeted distribution, and effective local
                marketing.
              </p>

              <p className="text-base text-gray-600">
                Whether you are a startup looking to build awareness or an
                established business planning a promotional campaign, our team
                can help you reach the right audience and maximize your local
                marketing exposure.
              </p>

              <p className="text-base text-gray-600">
                <strong>
                  Ready to promote your business across Dubai?
                </strong>{" "}
                Choose professional{" "}
                <strong>commercial flyer distribution in Dubai</strong> and
                put your brand directly in front of potential customers.
              </p>

              {/* CONCLUSION */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">
                Conclusion
              </h2>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                Commercial flyer distribution remains an effective way for
                businesses to build local visibility, promote offers, and reach
                targeted customers across Dubai. With strategic location
                selection and professional campaign execution, businesses can
                make their printed marketing more impactful.
              </p>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                If you want to expand your local reach and connect with more
                potential customers, Max Lead Advertising can help you plan and
                execute a professional flyer distribution campaign tailored to
                your business goals.
              </p>

              {/* --- CTA BANNER --- */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">
                    Reach More Customers Across Dubai with Professional Flyer
                    Distribution
                  </h3>

                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                    Put your business directly in front of your target
                    customers with strategic, reliable, and professional
                    commercial flyer distribution services.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Get Your Free Quote
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