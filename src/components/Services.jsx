import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Megaphone,
  Printer,
  MapPin,
  ArrowRight,
  Truck, 
} from "lucide-react";

const services = [
  {
    id: "distribution",
    label: "Flyer Distribution Services",
    icon: MapPin,
    gradient: "from-green-400 to-emerald-500",
    description:
      "Our door to door leaflet distribution and door to door flyer distribution services help brands reach customers directly at their homes, workplaces, and shopping locations across the UAE. We ensure precise targeting, proper coverage, and professional execution.",
    features: [
      "Door-to-Door Distribution",
      "Hand-to-Hand Distribution",
      "Retail & In-Store Distribution",
      "Residential Area Distribution",
      "Commercial Area Distribution",
      "Targeted Area Distribution",
      "Event & Promotion Distribution",
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
      "As a performance-focused digital marketing agency, we help brands grow online using data-driven strategies. We don’t just manage tools — we focus on visibility, traffic, leads, and conversions.",
    features: [
      "Social Media Marketing",
      "Facebook & Instagram Marketing",
      "YouTube & LinkedIn Marketing",
      "Snapchat, TikTok & WhatsApp Marketing",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Email Marketing",
      "SMS Marketing Services",
    ],
    cta: "Explore Digital Marketing Services",
    path: "/digital-marketing-agency/"
  },
  {
    id: "print",
    label: "Printing Services",
    icon: Printer,
    gradient: "from-green-400 to-emerald-400",
    description:
      "As a reliable digital printing company in UAE, we deliver high-quality prints that reflect your brand identity and marketing goals. From flyers and brochures to banners and branding materials, we handle everything with precision and speed.",
    features: [
      "Marketing & Promotional Prints",
      "Corporate & Office Printing",
      "Large Format Printing",
      "Event & Exhibition Printing",
      "Branding & Custom Prints",
      "Specialty Printing Solutions",
    ],
    cta: "Explore Printing Services",
    path: "/digital-printing-services/"
  },
  {
    id: "outdoor",
    label: "Outdoor Advertising",
    icon: Layers,
    gradient: "from-green-400 to-emerald-400",
    description:
      "For large-scale brand visibility, we offer outdoor advertising solutions across the UAE, ideal for mass reach and high-impact brand recall.",
    features: [
      "Bridge Banners",
      "Unipoles",
      "Lamp Post Advertising",
      "Rooftop Advertising",
      "LED Billboards",
      "Glass Graphics",
      "Hoardings",
      "Taxi, Truck & Van Advertising",
    ],
    cta: "Explore Outdoor Advertising Solutions",
    path: "/outdoor-advertising-company/"
  },
  {
    id: "delivery", // Fixed: Added ID
    label: "Delivery Services",
    icon: Truck, // Improved Icon
    gradient: "from-green-400 to-emerald-400",
    description:
      "Max Lead Advertising offers reliable gift delivery and corporate delivery services in UAE, helping businesses deliver promotional items, corporate gifts, and marketing materials safely and on time.",
    features: [
      "Corporate Gift Delivery",
      "Promotional Item Delivery",
      "Office-to-Office Delivery",
      "Timed Document Delivery",
      "Bulk Item Logistics"
    ],
    cta: "Explore Delivery Services",
    path: "/delivery-services/" // Fixed: Added Path
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  return (
    <section
      id="services"
      className="relative py-40 min-h-[110vh] bg-gradient-to-b from-white to-gray-100"
    >
      {/* Header 1 */}
      <div className="max-w-screen-xl mx-auto px-4 mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Your One-Stop Advertising, Distribution & Digital Marketing Company
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed">
          Max Lead Advertising was built with one clear mission — to help businesses reach real customers, not just impressions. 
          We understand that even the best product or service cannot succeed if people don’t know about it. From physical flyer distribution 
          to digital platforms, we create marketing systems that work together as a full-service digital marketing and printing company.
        </p>
      </div>

      {/* Header 2 */}
      <div className="max-w-screen-xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Our Core Strategic Solutions
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer complete advertising and promotional solutions under one roof. Click on any service to explore detailed solutions.
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
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all text-left
                ${
                  active.id === item.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-[1.02]"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-green-50"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {active.label}
          </h3>
          <p className="text-gray-600 mb-12 max-w-4xl leading-relaxed text-lg">
            {active.description}
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {active.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-md transition group"
              >
                <div
                  className={`w-2 h-2 shrink-0 rounded-full bg-gradient-to-r ${active.gradient} group-hover:scale-150 transition-transform`}
                ></div>
                <span className="text-gray-700 text-sm font-semibold">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <Link 
            to={active.path || "/contact/"}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            {active.cta}
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}