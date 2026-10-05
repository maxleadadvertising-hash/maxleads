import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  Target,
  CheckCircle2,
  BarChart3,
  Clock,
  User,
  LayoutGrid,
  Zap,
  FileText,
  MessageSquare,
  ArrowRight,
  MapPin,
  TrendingUp,
  Printer,
  PhoneCall,
  Linkedin,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- FULL STRATEGIC BLOG DATA --- */

const blogs = [
  {
    id: 1,
    title: "Why UAE Businesses Rely on Flyer Distribution",
    description:
      "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Insights", "ROI"],
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution/",
  },

  {
    id: 2,
    title: "How to Choose the Best Digital Marketing Agency in UAE 2026",
    description:
      "A comprehensive guide to identifying a performance-focused partner that converts clicks into revenue in the competitive UAE landscape.",
    author: "Strategy Team",
    date: "Feb 24, 2026",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Agency", "Digital"],
    link: "/blog/best-digital-marketing-agency-uae/",
  },

  {
    id: 3,
    title: "Flyer Marketing for Schools and Nurseries in Dubai",
    description:
      "Discover effective flyer marketing strategies to reach local parents, promote admissions, and generate more enquiries in Dubai.",
    author: "MaxLead Team",
    date: "Oct 3, 2026",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Schools", "Nurseries"],
    link: "/blog/school-nursery-marketing-dubai-admission-enquiries/",
  },

  {
    id: 4,
    title: "Ultimate Guide to Flyer Distribution Strategies in Dubai",
    description:
      "Discover 10 proven ways to get results. Learn how hyper-local targeting and multi-touch strategies build brand dominance.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/7682345/pexels-photo-7682345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Strategy", "Dominance"],
    link:
      "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/",
  },

  {
    id: 5,
    title: "Future Trends in Flyer Distribution in UAE",
    description:
      "How technology and AI are shaping the future of offline marketing. See what’s coming next in the 2026 UAE market.",
    author: "Innovation Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Future", "AI"],
    link:
      "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/",
  },

  {
    id: 6,
    title: "Best Locations for Flyer Distribution in the UAE",
    description:
      "Identify high-ROI zones from villa communities like Arabian Ranches to high-density apartment clusters in Dubai Marina.",
    author: "Market Researcher",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/3767172/pexels-photo-3767172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Locations", "Demographics"],
    link: "/blog/best-locations-for-flyer-distribution-in-the-uae/",
  },

  {
    id: 7,
    title: "Marketing with Max Lead Advertising",
    description:
      "Our story of transformation: combining the reliability of offline marketing with modern data precision since 2015.",
    author: "CEO Office",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["MaxLead", "History"],
    link:
      "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/",
  },

  {
    id: 8,
    title: "What is the Role of a Flyer Distributor?",
    description:
      "More than just a simple job. Learn how professional distributors act as brand ambassadors and the final bridge to your customer.",
    author: "HR Director",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/7787200/pexels-photo-7787200.jpeg",
    tags: ["Operations", "Brand"],
    link: "/blog/what-is-the-role-of-a-flyer-distributor/",
  },

  {
    id: 9,
    title: "How to Increase Sales with Flyer Distribution: 10 Proven Tips",
    description:
      "Unlock growth with these 10 proven tips. Learn how to craft irresistible offers and use timing to drive immediate revenue.",
    author: "Sales Head",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/5849581/pexels-photo-5849581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Sales", "Growth"],
    link: "/blog/how-to-increase-sales-with-flyer-distribution/",
  },

  {
    id: 10,
    title: "Online and Offline Strategies for Flyer Success",
    description:
      "Learn how integrating flyers with QR codes and social media targeting can double your conversion rates.",
    author: "Marketing Strategist",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Integration", "QR Codes"],
    link:
      "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/",
  },

  {
    id: 11,
    title: "Local Advertising with Door Hangers",
    description:
      "The 100% attention tool. Discover why door hangers are the most powerful local marketing weapon for neighborhood businesses.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Local Ads", "Neighborhood"],
    link:
      "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/",
  },
];

const categories = [
  {
    name: "All Blogs",
    icon: LayoutGrid,
    path: "/blog/",
  },

  {
    name: "Why UAE Flyer Distribution",
    icon: MapPin,
    path: "/blog/why-uae-businesses-rely-on-flyer-distribution/",
  },

  {
    name: "Best Digital Agency Guide",
    icon: Target,
    path: "/blog/best-digital-marketing-agency-uae/",
  },

  {
    name: "School & Nursery Marketing",
    icon: CheckCircle2,
    path: "/blog/school-nursery-marketing-dubai-admission-enquiries/",
  },

  {
    name: "Ultimate Strategy Guide",
    icon: BarChart3,
    path:
      "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/",
  },

  {
    name: "Future Trends",
    icon: Zap,
    path:
      "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/",
  },

  {
    name: "Best UAE Locations",
    icon: MapPin,
    path: "/blog/best-locations-for-flyer-distribution-in-the-uae/",
  },

  {
    name: "MaxLead Transformation",
    icon: TrendingUp,
    path:
      "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/",
  },

  {
    name: "Distributor Role Guide",
    icon: User,
    path: "/blog/what-is-the-role-of-a-flyer-distributor/",
  },

  {
    name: "How to Increase Sales",
    icon: FileText,
    path: "/blog/how-to-increase-sales-with-flyer-distribution/",
  },

  {
    name: "Online & Offline Success",
    icon: MessageSquare,
    path:
      "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/",
  },

  {
    name: "Door Hanger Marketing",
    icon: Printer,
    path:
      "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/",
  },
];

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}) => {
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
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default function FlyerDistributionBlog() {
  const activePost = blogs[2];

  useEffect(() => {
    /* ================================
       SEO META TITLE
    ================================= */

    document.title =
      "School & Nursery Flyer Marketing in Dubai | Reach Parents | Max Lead";

    /* ================================
       SEO META DESCRIPTION
    ================================= */

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
      "Discover effective flyer marketing strategies for schools and nurseries in Dubai to reach local parents, promote admissions and generate more enquiries. Contact Us!"
    );

    /* ================================
       SEO META KEYWORDS
    ================================= */

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
      "flyer marketing for schools in Dubai, nursery flyer distribution in Dubai, school flyer distribution in Dubai"
    );

    /* ================================
       CANONICAL URL
    ================================= */

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
      "https://www.maxleadadvertising.com/blog/school-nursery-marketing-dubai-admission-enquiries/"
    );
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
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

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">

        {/* HERO SECTION */}

        <section className="relative pt-28 pb-12 px-6 bg-[#f9fafb] border-b border-gray-100">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

          <div className="max-w-6xl mx-auto relative z-10 text-center">

            <FadeIn>

              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">

                <MapPin className="w-3 h-3" />

                <span>
                  Flyer Marketing for Schools &amp; Nurseries in Dubai
                </span>

              </div>

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                Flyer Marketing for Schools and Nurseries in Dubai:
                Strategies to Reach Local Parents
              </h1>

              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">

                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {activePost.readTime}
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full" />

                <span
                  className="flex items-center gap-2 transition-colors hover:text-blue-600 cursor-pointer"
                  onClick={openLinkedin}
                >
                  <Linkedin className="w-3 h-3" />
                  Linkedin
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full" />

                <span className="flex items-center gap-2">
                  <User className="w-3 h-3" />
                  {activePost.author}
                </span>

              </div>

            </FadeIn>

          </div>

        </section>

        {/* CATEGORY SELECTOR */}

        <section className="py-6 px-6 bg-white border-b border-gray-50">

          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">

            {categories.map((cat, idx) => (

              <FadeIn
                key={idx}
                delay={idx * 30}
              >

                <button
                  onClick={() =>
                    handleCategoryClick(cat.path)
                  }
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group"
                >

                  <cat.icon
                    size={14}
                    className="text-gray-400 group-hover:text-white"
                  />

                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">
                    {cat.name}
                  </span>

                </button>

              </FadeIn>

            ))}

          </div>

        </section>

        {/* MAIN CONTENT */}

        <section className="pb-24 bg-white px-6">

          <FadeIn className="max-w-4xl mx-auto">

            <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">

              <div className="mb-12">

                <p className="text-lg text-gray-600 mb-6 font-medium">
                  Dubai’s competitive education sector requires schools
                  and nurseries to use effective marketing strategies to
                  reach parents in the right communities. While digital
                  marketing is important, <strong>flyer marketing</strong>
                  remains a practical way to connect with families living
                  near your school or nursery.
                </p>

                <p className="text-base">
                  Flyer distribution allows educational institutions to
                  promote admissions, open days, new academic programmes,
                  nursery registrations, and special events directly to
                  households. By distributing flyers in carefully selected
                  residential communities, schools can reach parents who
                  live within their target catchment areas.
                </p>

              </div>

              <h3 className="text-2xl font-bold text-gray-900 pt-6">
                Why Flyer Marketing Works for Schools and Nurseries
              </h3>

              <p className="text-base">
                Flyers allow educational institutions to promote
                admissions, open days, new academic programmes, nursery
                registrations, and special events directly to households.
                They provide a practical way to build local awareness
                among families living near your school or nursery.
              </p>

              <h3 className="text-3xl font-black text-gray-900 pt-10 mb-6">
                Strategies for School &amp; Nursery Flyer Marketing in Dubai
              </h3>

              <div className="space-y-8">

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    1. Target the Right Residential Areas
                  </h4>

                  <p className="text-base">
                    The success of flyer distribution depends heavily on
                    location. Instead of distributing flyers randomly
                    across Dubai, identify residential areas with
                    families, children, and suitable household profiles.
                    Areas surrounding your school can be prioritised to
                    improve local awareness and make it easier for
                    parents to consider your institution.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    2. Create an Attractive Flyer
                  </h4>

                  <p className="text-base">
                    Your flyer should communicate the most important
                    information quickly. Include your school or nursery
                    name, curriculum, key facilities, age groups,
                    location, admission information, website, phone
                    number, and a clear call to action. Use professional
                    images of classrooms, facilities, activities, and
                    learning environments to create a positive first
                    impression.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    3. Promote Admissions and Open Days
                  </h4>

                  <p className="text-base">
                    Rather than simply promoting the school, use flyers
                    to advertise specific opportunities such as
                    <strong>
                      {" "}
                      new admissions, open days, school tours,
                      assessment days, and early registration
                    </strong>
                    . A clear offer or reason to respond can encourage
                    parents to visit your website, contact the admissions
                    team, or schedule a tour.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    4. Use QR Codes for Easy Enquiries
                  </h4>

                  <p className="text-base">
                    Adding a QR code can connect traditional flyer
                    marketing with your digital campaigns. Parents can
                    scan the code to visit an admission landing page,
                    submit an enquiry form, book a school tour, or
                    contact the admissions team through WhatsApp. Use a
                    unique QR code or landing page for each distribution
                    campaign so you can measure results accurately.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    5. Distribute at the Right Time
                  </h4>

                  <p className="text-base">
                    Timing can influence campaign performance. Schools
                    and nurseries can plan flyer campaigns around
                    admission periods, new academic terms, open days,
                    registration deadlines, and school events. Planning
                    campaigns in advance gives your admissions team
                    enough time to respond to enquiries and follow up
                    with interested parents.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    6. Combine Flyers with Digital Marketing
                  </h4>

                  <p className="text-base">
                    Flyer distribution can become even more effective
                    when combined with digital marketing. After parents
                    receive a flyer, they may search for the school
                    online or visit its social media profiles. Use Google
                    Ads, social media advertising, SEO, and remarketing
                    to reinforce your message and maintain visibility
                    among potential parents.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    7. Track Your Results
                  </h4>

                  <p className="text-base">
                    Every campaign should have measurable goals. Track
                    enquiries, phone calls, WhatsApp messages, QR-code
                    scans, website visits, school tour bookings, and
                    applications generated from the campaign. You can
                    use a dedicated landing page, promotional code, or
                    campaign-specific phone number to understand which
                    distribution areas generate the most enquiries.
                  </p>

                </div>

              </div>

              <h3 className="text-2xl font-bold text-gray-900 pt-12">
                Reach Local Parents with Strategic Flyer Distribution
              </h3>

              <p className="text-base">
                <strong>
                  Flyer marketing for schools and nurseries in Dubai
                </strong>{" "}
                can be an effective way to build local awareness and
                reach parents directly in targeted communities. With the
                right locations, attractive design, clear messaging, QR
                codes, strategic timing, and proper tracking, flyer
                campaigns can support your wider admission marketing
                strategy and generate valuable enquiries.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-6">
                Conclusion
              </h3>

              <p className="text-base mb-10">
                Flyer marketing for schools and nurseries in Dubai can
                support your wider admission marketing strategy when
                campaigns are planned carefully. By selecting the right
                communities, creating attractive flyers, using clear
                calls to action, connecting campaigns with digital
                channels, and tracking results, schools and nurseries
                can reach more local parents and generate valuable
                enquiries.
              </p>

              {/* CTA BANNER */}

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-10 md:p-12 rounded-[2rem] mt-10 text-white relative overflow-hidden text-center shadow-2xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-4xl font-bold mb-4">
                    Reach More Parents Across Dubai
                  </h3>

                  <p className="text-green-50 text-base mb-8 max-w-2xl mx-auto">
                    Promote your school or nursery directly to families
                    in your target communities with strategic flyer
                    distribution.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-all text-sm flex items-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Get a Free Consultation
                    </button>

                    <button
                      onClick={openLinkedin}
                      className="bg-blue-800 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-900 transition-all text-sm flex items-center gap-2 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </button>

                    <button
                      onClick={openWhatsapp}
                      className="bg-emerald-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-950 transition-all text-sm flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp Now
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </FadeIn>

        </section>

        {/* RELATED BLOGS */}

        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">

          <div className="max-w-7xl mx-auto">

            <FadeIn>

              <h2 className="text-2xl font-black text-gray-900 mb-8">
                Strategic Intelligence Hub
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs
                  .filter((b) => b.id !== activePost.id)
                  .slice(0, 3)
                  .map((blog) => (

                    <a
                      key={blog.id}
                      href={blog.link}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full"
                    >

                      <div className="h-48 overflow-hidden relative">

                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">

                          {blog.tags.map((tag) => (

                            <span
                              key={tag}
                              className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-green-600"
                            >
                              {tag}
                            </span>

                          ))}

                        </div>

                      </div>

                      <div className="p-6 flex flex-col flex-grow">

                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                          {blog.title}
                        </h4>

                        <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">
                          {blog.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">

                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {blog.readTime}
                          </span>

                          <ArrowRight
                            size={14}
                            className="text-green-600"
                          />

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