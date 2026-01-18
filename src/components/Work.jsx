import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { 
  ShoppingBag, 
  Utensils, 
  HeartPulse, 
  Building2, 
  GraduationCap, 
  Ticket, 
  Briefcase, 
  Smartphone, 
  FerrisWheel,
  ArrowRight
} from "lucide-react";

// *** ADDED: Background Images for Each Industry ***
const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Helping retail brands, supermarkets, FMCG companies, jewelry stores, and furniture brands increase footfall and product visibility through targeted distribution and promotions.",
    color: "from-blue-400 to-indigo-600",
    background: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Utensils,
    title: "Food,Hospitality & Lifestyle ",
    description: "Driving awareness and customer engagement for restaurants, cafes, hotels, luxury brands, and travel businesses using location-based marketing and digital visibility."
,
    color: "from-orange-400 to-red-600",
    background: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description: "Supporting clinics, hospitals, wellness centers, beauty salons, and cosmetic brands with responsible, targeted communication and trust-based marketing.",
    color: "from-emerald-400 to-teal-600",
    background: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Building2,
    title: "Real Estate & Automotive",
    description: "Generating leads and brand visibility for real estate developers, car rentals, and automobile dealers through strategic distribution and digital campaigns.",
    color: "from-purple-400 to-violet-600",
    background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: GraduationCap,
    title: "Education & Institutions",
    description: "Helping schools, universities, training institutes, and driving schools reach parents and students through targeted offline and online campaigns.",
    color: "from-yellow-400 to-orange-500",
    background: "https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg"
  },
  {
    icon: Ticket,
    title: "Events, Exhibitions & Promotions ",
    description: "Promoting exhibitions, events, conferences, and activations with high-impact distribution and promotional strategies.",
    color: "from-pink-400 to-rose-600",
    background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Briefcase,
    title: "Professional & Financial Services",
    description: "Supporting banks, insurance companies, lawyers, advocates, and crypto companies with compliant and effective marketing solutions.",
    color: "from-slate-400 to-slate-600",
    background: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Smartphone,
    title: "E-Commerce & Digital Brands",
    description: "Helping online-first brands and digital platforms grow traffic, visibility, and conversions using digital marketing and performance campaigns.",
    color: "from-cyan-400 to-blue-500",
    background: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: FerrisWheel,
    title: "Entertainment & Leisure ",
    description: "Promoting amusement parks and theme parks with high-reach campaigns designed to drive footfall and engagement.",
    color: "from-fuchsia-400 to-purple-600",
    background: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg"
  },
];

export default function IndustrySolutions() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Changed to bg-green-200/30 */}
          <div 
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-green-200/30 rounded-full blur-[120px]"
            style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)` }}
          />
          <div 
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"
            style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
          />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          {/* Changed to text-green-600 and bg-green-500 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-green-600 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Tailored Strategies
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Industry-Specific Advertisingns <br className="hidden md:block" />
            {/* Changed to green gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-600 to-emerald-500">
               & Marketing Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Different industries require different marketing approaches. That’s why we customize our advertising, distribution, and digital marketing strategies based on industry behavior and audience mindset.
          </p>
        </div>

        {/* --- 3D CARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="group h-[380px] w-full [perspective:1000px]">
              
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                  
                  {/* *** ADDED: Background Image with Gradient Overlay *** */}
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={item.background} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/90" />
                  </div>

                  <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-gray-900" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-200/50 pt-6 mt-6">
                      <span className="text-sm font-medium text-gray-500">0{idx + 1}</span>
                      {/* Changed to text-green-600 */}
                      <div className="flex items-center gap-2 text-sm font-bold text-green-600 group-hover:gap-3 transition-all">
                        Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                {/* Changed to shadow-green-500/10 */}
                <div className="absolute inset-0 h-full w-full bg-gray-900 rounded-[2rem] p-10 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-2xl shadow-green-500/10">
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
                  {/* Changed to green gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                        <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                      {item.description}
                    </p>

                    <Link 
  to="/contact"  // ✅ Changed to an existing route defined in App.js
  className="block w-full px-6 py-3 rounded-full bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
>
  Explore Strategy
</Link>
                  </div>
                  
                  {/* Decorative faint icon bg */}
                  <item.icon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}