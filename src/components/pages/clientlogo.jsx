
/* --- IMPORT LOGOS --- */
import alkLogo from "../../assests/clientlogo/alk logo_converted.webp";
import almLogo from "../../assests/clientlogo/alm logo_converted.webp";
import alsaLogo from "../../assests/clientlogo/alsa logo_converted.webp";
import cfLogo from "../../assests/clientlogo/cf logo_converted.webp";
import galaLogo from "../../assests/clientlogo/gala_converted.webp";
import hrLogo from "../../assests/clientlogo/hr logo_converted.webp";
import kalLogo from "../../assests/clientlogo/kal logo_converted.webp";
import kamLogo from "../../assests/clientlogo/kamlogo_converted.webp";
import luluLogo from "../../assests/clientlogo/lulu logo_converted.webp";
import mpcLogo from "../../assests/clientlogo/mpc logo_converted.webp";
import msLogo from "../../assests/clientlogo/ms logo_converted.webp";
import nesLogo from "../../assests/clientlogo/nes logo_converted.webp";
import smLogo from "../../assests/clientlogo/smlogo_converted.webp";

// Array of logo objects
const logos = [
  { name: "LuLu", src: luluLogo },
  { name: "Nesto", src: nesLogo },
  { name: "Gala", src: galaLogo },
  { name: "Al Madina", src: almLogo },
  { name: "Kalyan", src: kalLogo },
  { name: "MPC", src: mpcLogo },
  { name: "Al Saeedi", src: alsaLogo },
  { name: "Car Fare", src: cfLogo },
  { name: "Kam", src: kamLogo },
  { name: "HR Group", src: hrLogo },
  { name: "MS Group", src: msLogo },
  { name: "SM Group", src: smLogo },
  { name: "ALK", src: alkLogo },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* --- INFINITE SCROLL WRAPPER --- */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left/Right Fade Gradients for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex animate-infinite-scroll w-max">
          
          {/* 1. Original Set */}
          <div className="flex items-center gap-16 px-8">
            {logos.map((logo, index) => (
              <div 
                key={`logo-1-${index}`} 
                // Removed grayscale/opacity. Added scale on hover.
                className="w-32 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
            ))}
          </div>

          {/* 2. Duplicate Set (for seamless loop) */}
          <div className="flex items-center gap-16 px-8">
            {logos.map((logo, index) => (
              <div 
                key={`logo-2-${index}`} 
                // Removed grayscale/opacity. Added scale on hover.
                className="w-32 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Styles for Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        /* Pause animation on hover if desired */
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}