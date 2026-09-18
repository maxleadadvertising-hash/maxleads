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
      "Hand-to-Hand Flyer Distribution in Dubai: How to Capture Attention and Generate Local Leads",
    description:
      "Discover how hand-to-hand flyer distribution in Dubai can capture attention, reach targeted local audiences, increase awareness, and generate valuable leads.",
    author: "MaxLead Strategy Team",
    date: "September 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Flyer Distribution", "Local Lead Generation"],
    link:
      "/blog/hand-to-hand-flyer-distribution-dubai-local-leads/"
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

export default function HandToHandFlyerDistributionDubaiBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    /* --- SEO META TAGS --- */
    document.title =
      "Hand-to-Hand Flyer Distribution in Dubai | Max Lead Advertising";

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
      "Discover how hand-to-hand flyer distribution in Dubai can capture attention, reach targeted local audiences, increase awareness, and generate valuable leads. Contact Us!"
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
      "https://www.maxleadadvertising.com/blog/hand-to-hand-flyer-distribution-dubai-local-leads/"
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
                Hand-to-Hand{" "}
                <span className="text-blue-600">
                  Flyer Distribution in Dubai
                </span>
                : How to Capture Attention and Generate Local Leads
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

              {/* INTRODUCTION */}

              <p className="text-base text-gray-600">
                Dubai is one of the most competitive markets in the UAE, where
                businesses constantly look for effective ways to reach
                potential customers. While digital marketing continues to
                grow,{" "}
                <strong>
                  hand-to-hand flyer distribution in Dubai
                </strong>{" "}
                remains a practical way to connect with local audiences
                directly.
              </p>

              <p className="text-base text-gray-600">
                When flyers are professionally designed, strategically
                distributed, and delivered to the right people, they can
                create awareness, encourage enquiries, and generate valuable
                local leads.
              </p>

              {/* WHY HAND-TO-HAND WORKS */}

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                Why Hand-to-Hand Flyer Distribution Still Works
              </h2>

              <p className="text-base text-gray-600">
                Hand-to-hand flyer distribution provides businesses with a
                direct connection to their target audience. Instead of waiting
                for customers to discover an online advertisement, your
                promotional message is placed directly in front of potential
                customers.
              </p>

              <p className="text-base text-gray-600">
                This approach can be particularly useful for businesses
                targeting specific locations, communities, shopping areas,
                offices, restaurants, and high-footfall areas across Dubai.
                A well-designed flyer can quickly communicate your{" "}
                <strong>
                  offer, service, contact details, location, and call to
                  action
                </strong>
                , making it easy for customers to take the next step.
              </p>

              {/* SECTION 1 */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                1. Create a Flyer That Gets Attention
              </h2>

              <p className="text-base text-gray-600">
                The first few seconds matter. Your flyer should have a clear
                headline that immediately communicates the main benefit or
                offer.
              </p>

              <ul className="space-y-4 list-none p-0">

                {[
                  "A strong and easy-to-read headline",
                  "High-quality images",
                  "Short and clear promotional content",
                  "Your company logo and contact details",
                  "Website or QR code",
                  "A strong call to action",
                  "Limited-time offers where appropriate"
                ].map((item, index) => (

                  <li
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2
                      className="text-blue-600 shrink-0 mt-1"
                      size={18}
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>

                ))}

              </ul>

              <p className="text-base text-gray-600 mt-6">
                Avoid overcrowding the flyer with too much information. A
                clean and professional design makes it easier for people to
                understand your message quickly.
              </p>

              {/* SECTION 2 */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                2. Target the Right Dubai Locations
              </h2>

              <p className="text-base text-gray-600">
                One of the biggest advantages of{" "}
                <strong>flyer distribution in Dubai</strong>{" "}
                is location targeting. Instead of distributing flyers
                randomly, businesses can focus on areas where their potential
                customers are concentrated.
              </p>

              <p className="text-base text-gray-600">
                For example, restaurants can target residential communities
                and nearby offices, while real estate companies may focus on
                high-density residential areas. Retail stores, salons,
                clinics, gyms, and home-service companies can also select
                locations based on their ideal customer profile.
              </p>

              <p className="text-base text-gray-600">
                Strategic distribution can help reduce wasted flyers and
                improve the chances of reaching relevant prospects.
              </p>

              {/* SECTION 3 */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                3. Use a Strong Offer or Call to Action
              </h2>

              <p className="text-base text-gray-600">
                A flyer should give people a reason to respond. Depending on
                your business, this could be a special discount, free
                consultation, introductory offer, new product announcement,
                or limited-time promotion.
              </p>

              <p className="text-base text-gray-600">
                A simple CTA such as{" "}
                <strong>
                  “Call Now,” “Book Today,” “Visit Us,” “Scan to Learn
                  More,”
                </strong>{" "}
                or{" "}
                <strong>“Get Your Special Offer”</strong>{" "}
                can encourage immediate action.
              </p>

              <p className="text-base text-gray-600">
                Adding a QR code connected to a landing page or WhatsApp can
                also make it easier to convert offline interest into
                measurable online enquiries.
              </p>

              {/* SECTION 4 */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                4. Distribute Professionally
              </h2>

              <p className="text-base text-gray-600">
                The effectiveness of a flyer campaign depends not only on the
                design but also on how and where the flyers are distributed.
              </p>

              <p className="text-base text-gray-600">
                Professional{" "}
                <strong>
                  hand-to-hand flyer distribution services in Dubai
                </strong>{" "}
                can help businesses plan distribution routes, identify
                suitable areas, and reach specific audiences. Distribution
                can be conducted around residential communities, commercial
                districts, offices, retail locations, events, and other
                suitable public areas, subject to applicable permissions and
                site rules.
              </p>

              {/* SECTION 5 */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                5. Track Your Local Leads
              </h2>

              <p className="text-base text-gray-600">
                To understand campaign performance, businesses should make
                the flyer measurable. Use a dedicated WhatsApp number, phone
                number, landing page, QR code, promotional code, or offer
                code.
              </p>

              <p className="text-base text-gray-600">
                This allows you to identify how many enquiries or customers
                came from the campaign and helps you improve future flyer
                distribution strategies.
              </p>

              {/* TURN FLYERS INTO LEADS */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Turn Flyers into Local Lead Generation
              </h2>

              <p className="text-base text-gray-600">
                Hand-to-hand flyer distribution is more than simply handing
                out printed materials. With the right{" "}
                <strong>
                  design, location targeting, offer, distribution strategy,
                  and tracking system
                </strong>
                , flyers can become an effective part of a local marketing
                campaign.
              </p>

              <p className="text-base text-gray-600">
                For businesses looking to increase visibility and reach
                customers in specific Dubai areas, professional flyer
                distribution can complement digital advertising and other
                marketing channels.
              </p>

              <p className="text-base text-gray-600">
                <strong>Max Lead Advertising</strong> provides professional
                flyer distribution and local marketing solutions across Dubai
                and the UAE, helping businesses reach targeted audiences
                through strategically planned campaigns.
              </p>

              {/* CONCLUSION */}

              <h2 className="text-2xl font-bold text-gray-900 pt-10 text-center">
                Conclusion
              </h2>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                Hand-to-hand flyer distribution can help businesses connect
                directly with local audiences, build awareness, and create
                opportunities for enquiries. With a clear message, targeted
                locations, professional execution, and measurable calls to
                action, printed marketing can become a useful part of a local
                lead-generation strategy in Dubai.
              </p>

              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mt-6 mb-10">
                If you want to reach more potential customers across Dubai,
                Max Lead Advertising can help you plan and execute a
                professional hand-to-hand flyer distribution campaign
                tailored to your business objectives.
              </p>

              {/* --- CTA BANNER --- */}

              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">
                    Reach More Customers Across Dubai
                  </h3>

                  <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                    Professional Hand-to-Hand Flyer Distribution to Connect
                    Your Business with the Right Local Audience.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    {/* GET A FREE QUOTE */}

                    <button
                      onClick={goToContact}
                      className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall
                        size={16}
                        aria-hidden="true"
                      />

                      Get a Free Quote
                    </button>

                    {/* LINKEDIN */}

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

                    {/* WHATSAPP */}

                    <button
                      onClick={openWhatsapp}
                      className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
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