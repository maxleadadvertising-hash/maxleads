import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Added for SEO Meta Tags
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from '../components/pages/whatsapp';
import {
  Layers,
  Megaphone,
  Printer,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  GitMerge,
  PhoneCall
} from "lucide-react";

const services = [
  {
    id: "distribution",
    label: "Flyer Distribution Services",
    icon: MapPin,
    gradient: "from-green-400 to-emerald-500",
    description:
      "As an experienced distribution company in UAE, we help businesses connect directly with customers through professional flyer and leaflet distribution. Our flyer distribution services are ideal for local promotions, store launches, events & exhibitions, and brand awareness campaigns. Every distribution campaign is planned based on location, audience behavior, and campaign objective — ensuring maximum relevance and impact.",
    features: [
      "Door to door flyer distribution",
      "Door to door leaflet distribution",
      "Residential area distribution",
      "Commercial area distribution",
      "Targeted area campaigns",
      "Professional execution",
    ],
    cta: "Explore Flyer Distribution Services",
    path: "/flyer-distribution-services/"
  },
   {
    id: "digital",
    label: "Digital Marketing Services",
    icon: Megaphone,
    gradient: "from-emerald-500 to-green-500",
    description:
      "Max Lead Advertising is also a performance-focused digital marketing agency in UAE, helping businesses grow online through strategic planning and execution. We don’t chase vanity metrics. Our focus is on real outcomes — leads, enquiries, and conversions that support business growth.",
    features: [
      "Social media marketing",
      "Search engine optimization (SEO)",
      "Google Ads & paid campaigns",
      "WhatsApp & SMS marketing",
      "Lead generation strategies",
      "Strategic planning & execution",
    ],
    cta: "Explore Digital Marketing Services",
    path: "/digital-marketing-agency/"
  },
  {
    id: "print",
    label: "Digital Printing Services",
    icon: Printer,
    gradient: "from-green-400 to-emerald-400",
    description:
      "As a reliable digital printing company in UAE, we provide high-quality printed materials that represent your brand professionally across all touchpoints. Our printing solutions focus on quality, consistency, and timely delivery.",
    features: [
      "Marketing & promotional campaigns",
      "Corporate branding",
      "Events & exhibitions",
      "Retail and outdoor visibility",
      "Flyers and brochures",
      "Banners and large-format prints",
    ],
    cta: "Explore Digital Printing Services",
    path: "/digital-printing-services/"
  },
  {
    id: "outdoor",
    label: "Outdoor Advertising Services",
    icon: Layers,
    gradient: "from-green-400 to-emerald-400",
    description:
      "For brands that want large-scale visibility, we offer professional outdoor and OOH advertising solutions across the UAE. Outdoor advertising helps businesses build trust, brand recall, and continuous visibility in high-traffic locations.",
    features: [
      "Billboards & hoardings",
      "LED screen advertising",
      "Lamp post & bridge banners",
      "Rooftop advertising",
      "Vehicle branding & mobile ads",
      "Continuous visibility solutions",
    ],
    cta: "Explore Outdoor Advertising Services",
    path: "/outdoor-advertising-company/"
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  // ADDED: Meta Tags Logic
      useEffect(() => {
        document.title = "Leaflet Distribution Company, Digital Marketing Company | MaxLead";
        
        // Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.name = "description";
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute("content", "Grow your brand with Max Lead Advertising — the UAE’s trusted partner for flyer and leaflet distribution, digital marketing, high-quality printing, and impactful outdoor advertising.");
  
        // Canonical URL
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
          linkCanonical = document.createElement('link');
          linkCanonical.rel = "canonical";
          document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/services/");
      }, []);
  
  return (
    <>
      <Helmet>
        <meta name="keywords" content="Leaflet Distribution Company, Digital Marketing Company" />
        <link rel="canonical" href="https://www.maxleadadvertising.com/services/" /></Helmet>
          
      <ScrollToTop />
      <Navigation />
      <Whatsapp />

      <main>
        <section
          id="services"
          className="relative py-40 min-h-[110vh] bg-gradient-to-b from-white to-gray-100"
        >
          {/* Hero Section */}
          <div className="max-w-screen-xl mx-auto px-4 mb-24 text-center mt-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Marketing, Advertising & Distribution Services in UAE
              </span>
            </h1>
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 font-medium">
                At Max Lead Advertising, we are a trusted advertising and distribution company in UAE helping businesses reach the right audience through strategic offline and online marketing solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We support brands across Dubai and the UAE with flyer distribution services, digital printing, digital marketing, and outdoor advertising, all managed under one roof with a clear focus on visibility, reach, and results. Instead of offering disconnected services, we build integrated marketing systems that help businesses attract attention, generate leads, and grow consistently.
              </p>
            </div>
          </div>

          {/* Core Services Header */}
          <div className="max-w-screen-xl mx-auto px-4 mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Advertising & Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide end-to-end advertising solutions designed to meet different business goals, industries, and budgets.
            </p>
          </div>

          {/* Layout */}
          <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* LEFT MENU */}
            <div className="lg:col-span-1 space-y-4">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(item)}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-left transition-all
                    ${
                      active.id === item.id
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-green-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {active.label}
              </h2>
              <p className="text-gray-600 mb-12 max-w-4xl leading-relaxed text-lg">
                {active.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                {active.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-5 hover:shadow-md transition"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                    <span className="text-gray-700 text-sm font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                to={active.path}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                {active.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="max-w-screen-xl mx-auto px-4 mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
              Why Choose Max Lead Advertising?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Full-service advertising and distribution company",
                "UAE-wide coverage",
                "Integrated offline & online solutions",
                "In-house printing & execution",
                "Transparent communication",
                "Result-focused strategies"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-800 font-bold">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl font-bold text-emerald-700 italic">
              We don’t sell services — we build marketing systems that work.
            </p>
          </div>

          {/* Industries Served */}
          <div className="max-w-screen-xl mx-auto px-4 mt-32 py-20 bg-gray-900 rounded-[3rem] text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
              {[
                "Retail & FMCG", "Restaurants & hospitality", "Real estate & automotive", "Healthcare & wellness",
                "Education & training institutes", "Events, exhibitions & promotions", "Professional & financial services"
              ].map((industry, idx) => (
                <div key={idx} className="space-y-3">
                  <Building2 className="w-8 h-8 text-green-400 mx-auto" />
                  <p className="font-semibold text-gray-300">{industry}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-16 text-gray-400 max-w-3xl mx-auto">
              Each industry requires a different approach, and our team tailors every campaign accordingly.
            </p>
          </div>

          {/* Integrated Approach */}
          <div className="max-w-screen-xl mx-auto px-4 mt-32 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Our Integrated Marketing Approach</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 font-medium">
              Successful marketing is not about doing more — it’s about doing the right things together.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <div className="p-10 bg-white rounded-3xl shadow-lg border-2 border-green-50 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Offline Visibility</h3>
                <p className="text-gray-500 font-medium">Flyers, printing, outdoor ads</p>
              </div>
              <GitMerge className="w-12 h-12 text-gray-300 hidden md:block" />
              <div className="p-10 bg-white rounded-3xl shadow-lg border-2 border-emerald-50 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">Online Reach</h3>
                <p className="text-gray-500 font-medium">Digital marketing, lead generation</p>
              </div>
            </div>
            <p className="mt-16 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              This hybrid approach helps businesses build trust, improve recall, and increase conversions across multiple touchpoints.
            </p>
          </div>

          {/* CTA Footer */}
          <div className="max-w-screen-xl mx-auto px-4 mt-32 text-center bg-gradient-to-br from-green-600 to-emerald-700 rounded-[4rem] py-20 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Promote Your Business Across UAE?</h2>
            <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto font-medium">
              If you are looking for a reliable advertising and distribution company in UAE, Max Lead Advertising is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact/" className="px-10 py-5 bg-white text-green-700 rounded-full font-bold text-xl hover:bg-green-50 transition-all flex items-center justify-center gap-2">
                <PhoneCall className="w-6 h-6" /> Get a free consultation
              </Link>
              <a href="https://wa.me/+971557222605" target="_blank" rel="noreferrer" className="px-10 py-5 bg-emerald-900 text-white rounded-full font-bold text-xl hover:bg-emerald-950 transition-all flex items-center justify-center gap-2">
                Request a custom quote today
              </a>
            </div>
            <p className="mt-10 font-bold text-green-100">
              Let’s create visibility, generate leads, and grow your business the right way.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}