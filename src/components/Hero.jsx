import { useEffect, useState } from "react";
import { 
  ArrowRight,  
  MapPin, 
  Printer, 
  Globe, 
  Signpost,
  CheckCircle2,
  Star
} from "lucide-react";

// Import your assets here
import HeroImage from "../assests/printing/printingService3.webp";
import Printingserv from "../assests/Outdoorads/od2.webp";
import Flyerserv from "../assests/digitalmarketing/dm3.webp";
import Flyerserv1 from "../assests/Flyers/flyerService2.webp";

const heroImages = [
  HeroImage,
  Printingserv,
  Flyerserv,
  Flyerserv1,
];

const carouselItems = [
  { name: "Flyer Distribution", icon: MapPin },
  { name: "Printing Services", icon: Printer },
  { name: "Digital Marketing", icon: Globe },
  { name: "Outdoor Ads", icon: Signpost },
  // Duplicate for infinite scroll
  { name: "Flyer Distribution", icon: MapPin },
  { name: "Printing Services", icon: Printer },
  { name: "Digital Marketing", icon: Globe },
  { name: "Outdoor Ads", icon: Signpost },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Slideshow logic 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-gray-50 via-white to-green-50/20 overflow-hidden pt-32 pb-16">
      
      {/* =========================================
          BACKGROUND BUBBLES (ANIMATED)
      ========================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Bubble */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        {/* Bottom Left Bubble */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        {/* Center/Random Bubble */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* =========================================
          MAIN CONTENT (Split Layout)
      ========================================== */}
      {/* UPDATED: Increased width to max-w-screen-2xl */}
      <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-8 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Star className="w-3 h-3 fill-green-700" />
              #1 Advertising Agency in UAE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 drop-shadow-sm">
            Advertising and Distribution <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">
              Experts in UAE.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            At <strong>Max Lead Advertising</strong>, we help businesses grow by connecting them directly with their customers. 
            We specialize in Flyer Distribution, Digital Printing, Outdoor Ads, and Performance Marketing across the UAE.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-3 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>UAE Wide Coverage</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-3 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Direct to Doorstep</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 bg-gray-900 hover:bg-green-600 text-white rounded-full font-bold transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-green-500/30 flex items-center justify-center gap-3 group transform hover:-translate-y-1 text-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection("services")}
              className="px-10 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-bold border border-gray-200 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 text-lg"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE CAROUSEL */}
        <div className="relative order-1 lg:order-2 w-full h-[450px] sm:h-[550px] lg:h-[700px]">
          {/* Image Container */}
          <div className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-8 border-white bg-gray-100">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img 
                  src={img} 
                  alt={`Service ${index}`} 
                  className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-linear ${
                    index === currentImage ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Floating Element (Decorative) */}
          <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur p-5 rounded-3xl shadow-xl border border-gray-100 hidden xl:flex items-center gap-4 animate-bounce-slow z-20">
             <div className="bg-green-100 p-3 rounded-full">
                <Signpost className="w-8 h-8 text-green-600" />
             </div>
             <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Trusted Partner</p>
                <p className="text-xl text-gray-900 font-black">Since 2015</p>
             </div>
          </div>
        </div>

      </div>

     {/* =========================================
          BOTTOM INFINITE CAROUSEL 
      ========================================== */}
      <div className="relative z-20 mt-16 lg:mt-24 border-t border-white/50 bg-white/40 backdrop-blur-md py-8">
        <div className="flex overflow-hidden relative max-w-screen-2xl mx-auto">
           {/* Side Fades */}
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex animate-infinite-scroll gap-20 px-4 w-max">
            
            {/* 1. ORIGINAL SET */}
            {carouselItems.map((item, index) => (
              <div key={`original-${index}`} className="flex items-center gap-3 text-gray-600 group shrink-0 hover:text-green-700 transition-colors cursor-default">
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform text-green-600/80 group-hover:text-green-600" />
                <span className="text-lg font-bold tracking-tight">{item.name}</span>
              </div>
            ))}

            {/* 2. DUPLICATE SET (Required for seamless loop) */}
            {carouselItems.map((item, index) => (
              <div key={`duplicate-${index}`} className="flex items-center gap-3 text-gray-600 group shrink-0 hover:text-green-700 transition-colors cursor-default">
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform text-green-600/80 group-hover:text-green-600" />
                <span className="text-lg font-bold tracking-tight">{item.name}</span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Bubble Animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}