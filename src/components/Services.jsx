import { useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import {
  Layers,
  Megaphone,
  Printer,
  MapPin,
  
  ArrowRight,
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
    path: "/flyer" // 2. Add Path
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
    path: "/digital" // 2. Add Path
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
    path: "/printing" // 2. Add Path
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
    path: "/outdoor" // 2. Add Path
  },
  {
   
    label: "Delivery Services",
    icon: Printer,
    gradient: "from-green-400 to-emerald-400",
    description:
      "Max Lead Advertising offers reliable gift delivery and corporate delivery services in UAE, helping businesses deliver promotional items, corporate gifts, and marketing materials safely and on time.",
    features: [
      "Corporate Gift Delivery",
      " Promotional Item Delivery",
      "Office-to-Office Delivery"
    ],
    cta: "Explore Delivery Services",
   
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  return (
    <section
      id="services"
      className="relative py-40 min-h-[110vh] bg-gradient-to-b from-white to-gray-100"
    >

      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-4 mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Your One-Stop Advertising, Distribution & Digital Marketing Company 
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-7xl mx-auto">
          Max Lead Advertising was built with one clear mission — to help businesses reach real customers, not just impressions.
We understand that even the best product or service cannot succeed if people don’t know about it. That’s why our solutions focus on visibility, reach, and response. From physical flyer distribution to digital platforms, we create marketing systems that work together.
As a full-service digital marketing company and digital printing company, we combine strategy, execution, and tracking to help brands grow efficiently.

        </p>
      </div>
       <div className="max-w-screen-xl mx-auto px-4 mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Our Advertising, Distribution & Marketing Services 
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-7xl mx-auto">
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
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all
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
        <div className="lg:col-span-3 bg-white rounded-3xl p-14 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {active.label}
          </h3>
          <p className="text-gray-600 mb-12 max-w-4xl leading-relaxed">
            {active.description}
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {active.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-6 py-6 hover:shadow-md transition"
              >
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${active.gradient}`}
                ></div>
                <span className="text-gray-700 text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA - Changed from <button> to <Link> */}
          <Link 
            to={active.path}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {active.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}