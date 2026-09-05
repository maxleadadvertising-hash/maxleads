import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import {
  Target,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Clock,
  User,
  LayoutGrid,
  Zap,
  ArrowRight,
  PhoneCall,
  Linkedin
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from "../whatsapp";

/* --- POST CONSTANTS --- */
const POST_ID = 12;
const POST_SLUG =
  "/blog/pamphlet-distribution-services-dubai-vs-digital-advertising-in-uae/";
const POST_URL =
  "https://www.maxleadadvertising.com/blog/pamphlet-distribution-services-dubai-vs-digital-advertising-in-uae/";
const PUBLISHED_ISO = "2026-09-05";
const UPDATED_ISO = "2026-09-05";
const LAST_UPDATED_LABEL = "Sep 5, 2026";

/* --- BLOG DATA --- */
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
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution/"
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
    link: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    id: 3,
    title: "Dos and Don'ts of Flyer Distribution in UAE",
    description:
      "Avoid common pitfalls. Learn the expert rules for successful door to door flyer distribution in Dubai and the wider Emirates.",
    author: "Operations Lead",
    date: "Feb 24, 2026",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Expert Tips", "Compliance"],
    link: "/blog/dos-and-donts-of-flyer-distribution-in-uae/"
  },
  {
    id: 11,
    title: "Affordable Digital Marketing Packages for Startups in UAE",
    description:
      "Affordable digital marketing packages in the UAE. We offer cost-effective SEO, social media, ads, and content services to help startups grow.",
    author: "MaxLead Team",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Startups"],
    link: "/blog/affordable-digital-marketing-packages-uae/"
  },
  {
    id: POST_ID,
    title:
      "Pamphlet Distribution Services Dubai vs Digital Advertising: Which Is Better for Local Reach?",
    description:
      "Compare pamphlet distribution services in Dubai with digital advertising and discover which marketing approach is better for reaching local customers.",
    author: "MaxLead Team",
    date: "Sep 5, 2026",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pamphlet Distribution", "Local Marketing"],
    link: POST_SLUG
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
    icon: MapPin,
    path: "/blog/why-uae-businesses-rely-on-flyer-distribution/"
  },
  {
    name: "Pamphlet Distribution",
    icon: Target,
    path: POST_SLUG
  },
  {
    name: "Digital Marketing",
    icon: Zap,
    path: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    name: "Local Marketing",
    icon: MapPin,
    path: POST_SLUG
  }
];

/* --- STAT CARDS --- */
const stats = [
  {
    figure: "01",
    label: "Physical reach",
    note:
      "Pamphlets put your offer directly in front of people in selected communities and business areas."
  },
  {
    figure: "02",
    label: "Digital targeting",
    note:
      "Digital advertising can target audiences by location, interests, demographics, and online behaviour."
  },
  {
    figure: "03",
    label: "Best of both",
    note:
      "Combining offline distribution with digital campaigns can create multiple customer touchpoints."
  }
];

/* --- FIVE TACTICS --- */
const tactics = [
  {
    title: "1. Target the right locations",
    body:
      "Select residential communities, commercial areas, retail locations, or other places where your ideal customers are most likely to be."
  },
  {
    title: "2. Make the message easy to act on",
    body:
      "Use a clear offer, strong call to action, contact details, website, or QR code so recipients know exactly what to do next."
  },
  {
    title: "3. Use digital advertising for precision",
    body:
      "Digital campaigns can support local promotion with audience targeting, flexible messaging, and measurable results such as clicks, leads, and conversions."
  },
  {
    title: "4. Connect offline and online",
    body:
      "A pamphlet can direct customers to a website, landing page, WhatsApp conversation, or social media account, turning physical exposure into digital engagement."
  },
  {
    title: "5. Measure and improve",
    body:
      "Track enquiries, campaign codes, QR scans, landing-page visits, and lead quality to understand which locations and messages perform best."
  }
];

/* --- MEASUREMENT CHECKLIST --- */
const measurement = [
  {
    label: "Distribution area",
    text:
      "Record the communities, commercial areas, and locations covered by the campaign."
  },
  {
    label: "Response tracking",
    text:
      "Use unique offers, QR codes, landing pages, or contact numbers to identify campaign responses."
  },
  {
    label: "Digital performance",
    text:
      "Monitor impressions, clicks, enquiries, leads, and conversions from supporting digital campaigns."
  },
  {
    label: "Lead quality",
    text:
      "Compare not just the number of responses, but also the quality and conversion potential of the leads generated."
  }
];

/* --- FAQ --- */
const faqs = [
  {
    q: "Are pamphlet distribution services effective in Dubai?",
    a:
      "Pamphlet distribution can be effective for businesses that want direct exposure within selected residential communities, commercial areas, retail locations, and other local markets."
  },
  {
    q: "Is pamphlet distribution better than digital advertising?",
    a:
      "Neither is universally better. Pamphlet distribution provides physical local exposure, while digital advertising offers online targeting, flexibility, and detailed campaign measurement."
  },
  {
    q: "Can pamphlet distribution and digital advertising be used together?",
    a:
      "Yes. A pamphlet can include a QR code, website, phone number, or social media account, while digital advertising can reinforce the same campaign message online."
  },
  {
    q: "What businesses can benefit from pamphlet distribution in Dubai?",
    a:
      "Local businesses such as restaurants, retail stores, home-service companies, real estate businesses, educational providers, and other location-focused services can benefit from targeted distribution."
  },
  {
    q: "Why use a professional pamphlet distribution company?",
    a:
      "Professional distribution can help businesses plan suitable locations and audiences, organize campaigns, and improve the efficiency of offline promotional activity."
  }
];

const FadeIn = ({
  children,
  delay = 0,
  className = ""
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
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function PamphletDistributionBlog() {
  const activePost =
    blogs.find((b) => b.id === POST_ID) ||
    blogs[blogs.length - 1];

  useEffect(() => {
    /* --- SEO META --- */
    document.title =
      "Pamphlet Distribution Services in Dubai vs Digital Advertising | Max Lead";

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
      "Compare pamphlet distribution services in Dubai with digital advertising and discover which marketing approach is better for reaching local customers. Contact Us!"
    );

    /* --- CANONICAL URL --- */
    let linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }

    linkCanonical.setAttribute("href", POST_URL);
  }, []);

  useEffect(() => {
    /* --- ARTICLE + FAQ SCHEMA --- */
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline:
            "Pamphlet Distribution Services Dubai vs Digital Advertising: Which Is Better for Local Reach?",
          description:
            "Compare pamphlet distribution services in Dubai with digital advertising and discover which marketing approach is better for reaching local customers. Contact Us!",
          image: activePost.image,
          datePublished: PUBLISHED_ISO,
          dateModified: UPDATED_ISO,
          author: {
            "@type": "Organization",
            name: "Max Lead Advertising & Distribution FZE"
          },
          publisher: {
            "@type": "Organization",
            name: "Max Lead Advertising & Distribution FZE",
            url: "https://www.maxleadadvertising.com/"
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": POST_URL
          }
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a
            }
          }))
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "pamphlet-distribution-schema";
    script.text = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(
        "pamphlet-distribution-schema"
      );

      if (existing) existing.remove();
    };
  }, [activePost.image]);

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

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-12 px-6 bg-[#f8fafc] border-b border-gray-100">

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 text-center">

            <FadeIn>

              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                <MapPin className="w-3 h-3" />
                <span>
                  Pamphlet Distribution &amp; Local Marketing
                </span>
              </div>

              <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                Pamphlet Distribution Services Dubai vs Digital Advertising:
                Which Is Better for Local Reach?
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm mb-2">

                <span className="flex items-center gap-1">
                  <Clock size={14} aria-hidden="true" />
                  {activePost.readTime}
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

                <span
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={openLinkedin}
                  aria-label="Visit our LinkedIn Profile"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </span>

                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>

                <span className="flex items-center gap-1">
                  <User size={14} aria-hidden="true" />
                  {activePost.author}
                </span>

              </div>

              <p className="text-gray-400 text-xs">
                Last updated: {LAST_UPDATED_LABEL}
              </p>

            </FadeIn>

          </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">

          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">

            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>

                <button
                  onClick={() =>
                    handleCategoryClick(cat.path)
                  }
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group"
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

            <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">

              {/* --- FRONT-LOADED ANSWER BLOCK --- */}
              <div className="mb-12 mt-10 bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8">

                <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 mb-3">
                  The short version
                </p>

                <p className="text-base md:text-lg text-gray-800 m-0">
                  Businesses in Dubai can use both pamphlet distribution
                  and digital advertising to reach local customers.
                  Pamphlets provide direct physical exposure in selected
                  areas, while digital advertising offers precise online
                  targeting and measurable campaign data. The right choice
                  depends on your audience, location, objectives, and budget.
                </p>

              </div>

              {/* --- SECTION 1 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                What Are Pamphlet Distribution Services?
              </h2>

              <p className="text-base text-gray-600">
                Pamphlet distribution involves physically delivering
                promotional materials such as pamphlets, flyers, or leaflets
                to potential customers. Distribution can be carried out in
                residential communities, commercial areas, retail locations,
                offices, or other targeted locations.
              </p>

              <p className="text-base text-gray-600">
                Professional{" "}
                <strong>
                  pamphlet distribution companies in Dubai
                </strong>{" "}
                can help businesses select suitable areas and distribute
                promotional materials to specific audiences. This makes
                the method particularly useful for businesses that depend
                on local customers.
              </p>

              {/* --- SECTION 2 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                What Does Digital Advertising Offer?
              </h2>

              <p className="text-base text-gray-600">
                Digital advertising allows businesses to promote their
                products and services through online platforms. Businesses
                can target audiences based on factors such as location,
                interests, demographics, search behaviour, and online activity.
              </p>

              <p className="text-base text-gray-600">
                For example, a business can run campaigns targeting customers
                within specific areas of Dubai. Digital campaigns can also
                provide measurable information such as impressions, clicks,
                leads, and conversions. This makes digital advertising useful
                for businesses looking for detailed campaign tracking and
                online visibility.
              </p>

              {/* --- SECTION 3 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Pamphlet Distribution vs Digital Advertising
              </h2>

              <p className="text-base text-gray-600">
                One major difference is how customers receive the marketing
                message. Digital advertisements appear on screens, while
                pamphlets provide customers with a physical piece of
                information they can read and keep.
              </p>

              <p className="text-base text-gray-600">
                <strong>
                  Pamphlet distribution in Dubai
                </strong>{" "}
                can be particularly useful when businesses want to reach
                customers within specific communities or geographical areas.
                A well-designed pamphlet can communicate services, offers,
                contact details, and other important information in one place.
              </p>

              <p className="text-base text-gray-600">
                Digital advertising, on the other hand, can reach customers
                beyond a single physical location and allows businesses
                to modify campaigns quickly.
              </p>

              {/* --- STAT CARDS --- */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">

                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                  >

                    <p className="text-3xl font-black text-green-600 m-0">
                      {stat.figure}
                    </p>

                    <p className="text-sm font-bold text-gray-900 mt-2 mb-2">
                      {stat.label}
                    </p>

                    <p className="text-xs text-gray-500 m-0">
                      {stat.note}
                    </p>

                  </div>
                ))}

              </div>

              {/* --- SECTION 4 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Which Is Better for Local Businesses?
              </h2>

              <p className="text-base text-gray-600">
                For businesses focused heavily on a specific geographical
                area, pamphlet distribution can be an effective offline
                marketing strategy. Restaurants, retail stores, home-service
                companies, real estate businesses, educational providers,
                and local service providers may benefit from reaching
                customers directly in selected communities.
              </p>

              <p className="text-base text-gray-600">
                Digital advertising can be more suitable when the goal is
                to generate online enquiries, website traffic, or leads
                from a broader audience. However, businesses do not
                necessarily have to choose only one method.
              </p>

              {/* --- SECTION 5 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Combining Offline and Digital Marketing
              </h2>

              <p className="text-base text-gray-600">
                A combination of{" "}
                <strong>
                  pamphlet distribution and digital advertising
                </strong>{" "}
                can create a stronger local marketing campaign.
              </p>

              <p className="text-base text-gray-600">
                For example, a pamphlet can promote a special offer and
                include a website, QR code, phone number, or social media
                account. Customers who receive the pamphlet can then move
                from offline promotion to an online channel.
              </p>

              <p className="text-base text-gray-600">
                At the same time, digital advertising can reinforce the
                brand message and help businesses stay visible to potential
                customers after they have encountered the physical promotion.
              </p>

              {/* --- SECTION 6 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Why Professional Distribution Matters
              </h2>

              <p className="text-base text-gray-600">
                The success of a pamphlet campaign depends not only on the
                design but also on where and how the materials are distributed.
                Poorly targeted distribution can result in wasted materials
                and limited results.
              </p>

              <p className="text-base text-gray-600">
                Professional{" "}
                <strong>
                  flyer distribution services in Dubai
                </strong>{" "}
                can help businesses plan distribution around relevant
                locations and audiences. Accurate targeting, organized
                distribution, and campaign monitoring can make offline
                promotion more effective.
              </p>

              {/* --- SECTION 7 --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                How to Measure a Local Distribution Campaign
              </h2>

              <p className="text-base text-gray-600">
                Measuring the campaign helps businesses understand whether
                their offline and online marketing efforts are generating
                useful responses. Consider tracking:
              </p>

              <ul className="space-y-3 text-base text-gray-600">

                {measurement.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      className="w-5 h-5 text-green-500 shrink-0 mt-1"
                      aria-hidden="true"
                    />

                    <span>
                      <strong>{item.label}:</strong>{" "}
                      {item.text}
                    </span>

                  </li>
                ))}

              </ul>

              {/* --- FAQ --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-6">

                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                  >

                    <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-base text-gray-600 m-0">
                      {faq.a}
                    </p>

                  </div>
                ))}

              </div>

              {/* --- CONCLUSION --- */}
              <h2 className="text-2xl font-bold text-gray-900 pt-10">
                Conclusion
              </h2>

              <p className="text-base text-gray-600">
                So, which is better:{" "}
                <strong>
                  pamphlet distribution services Dubai
                </strong>{" "}
                or digital advertising? The answer depends on your marketing
                objectives. Digital advertising provides targeting,
                flexibility, and measurable online results, while pamphlet
                distribution offers direct physical exposure and strong
                local visibility.
              </p>

              <p className="text-base text-gray-600">
                For businesses targeting specific communities and local
                customers, pamphlet distribution can be a valuable marketing
                channel. When combined with digital advertising, it can
                create a balanced strategy that connects offline promotion
                with online engagement.
              </p>

              <p className="text-base text-gray-600">
                If your business wants to increase local visibility in Dubai,
                choosing the right combination of{" "}
                <strong>
                  offline and digital marketing
                </strong>{" "}
                can help you reach potential customers through multiple
                touchpoints.
              </p>

              {/* --- CTA --- */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-800 p-10 rounded-3xl mt-12 text-white relative overflow-hidden text-center shadow-xl">

                <div className="relative z-10">

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Reach More Customers in Dubai?
                  </h3>

                  <p className="text-green-100 text-base mb-8 max-w-2xl mx-auto">
                    Get professional{" "}
                    <strong>
                      pamphlet distribution services in Dubai
                    </strong>{" "}
                    and connect with your local target audience.
                    Contact us today to start your campaign.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">

                    <button
                      onClick={goToContact}
                      className="bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <PhoneCall size={16} aria-hidden="true" />
                      Contact Us
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
                      className="bg-gray-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-black transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare
                        size={16}
                        aria-hidden="true"
                      />
                      WhatsApp Us
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

              <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
                More Marketing Insights
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs
                  .filter((b) => b.id !== POST_ID)
                  .slice(0, 3)
                  .map((blog) => (
                    <a
                      key={blog.id}
                      href={blog.link}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full"
                    >

                      <div className="h-40 overflow-hidden">

                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                      </div>

                      <div className="p-5 flex flex-col flex-grow">

                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                          {blog.title}
                        </h4>

                        <p className="text-gray-500 text-xs line-clamp-2 mb-6">
                          {blog.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase text-gray-400">

                          <span className="flex items-center gap-1">
                            <Clock
                              size={12}
                              aria-hidden="true"
                            />
                            {blog.readTime}
                          </span>

                          <ArrowRight
                            size={14}
                            className="text-green-600"
                            aria-hidden="true"
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