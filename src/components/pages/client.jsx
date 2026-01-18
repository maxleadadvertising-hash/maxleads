import { useEffect, useState, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import { 
  CheckCircle2, 
  Trophy, 
  Users, 
  ArrowRight,
  Handshake,
  Star,
  
  Globe,
  
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Whatsapp from '../pages/whatsapp';

/* --- IMPORTED LOGOS --- */
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

/* --- ANIMATION COMPONENT --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- CLIENTS DATA --- */
const clients = [
  { name: "LuLu Hypermarket", category: "Retail Giant", logo: luluLogo, color: "bg-red-50" },
  { name: "Nesto Group", category: "Retail", logo: nesLogo, color: "bg-blue-50" },
  { name: "Gala Supermarket", category: "Retail", logo: galaLogo, color: "bg-orange-50" },
  { name: "Al Madina", category: "Retail", logo: almLogo, color: "bg-green-50" },
  { name: "Kalyan", category: "Retail", logo: kalLogo, color: "bg-yellow-50" },
  { name: "MPC", category: "Healthcare", logo: mpcLogo, color: "bg-teal-50" },
  { name: "Al Saeedi", category: "Automotive", logo: alsaLogo, color: "bg-gray-50" },
  { name: "Car Fare", category: "Services", logo: cfLogo, color: "bg-indigo-50" },
  { name: "Kam", category: "Corporate", logo: kamLogo, color: "bg-purple-50" },
  { name: "HR Group", category: "Corporate", logo: hrLogo, color: "bg-pink-50" },
  { name: "MS Group", category: "Construction", logo: msLogo, color: "bg-amber-50" },
  { name: "SM Group", category: "General", logo: smLogo, color: "bg-cyan-50" },
  { name: "ALK", category: "General", logo: alkLogo, color: "bg-lime-50" },
];

const stats = [
  { label: "Active Clients", value: "500+", icon: Users },
  { label: "Projects Completed", value: "1200+", icon: CheckCircle2 },
  { label: "Industry Awards", value: "15", icon: Trophy },
  { label: "Years of Trust", value: "10+", icon: Handshake },
];

export default function Clients() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="relative overflow-hidden bg-slate-50 mt-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
             {/* Gradient Blobs */}
             <div 
               className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-green-300/20 blur-[120px] rounded-full mix-blend-multiply animate-blob"
               style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
             />
             <div 
               className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-emerald-300/20 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"
               style={{ transform: `translate(${cursor.x * -0.02}px, ${cursor.y * -0.02}px)` }}
             />
             
             {/* Floating Background Icons (Replacing PNGs for performance) */}
             <div className="absolute top-1/4 left-10 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
                <Users size={120} className="text-green-800" />
             </div>
             <div className="absolute bottom-1/4 right-10 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
                <Trophy size={140} className="text-emerald-800" />
             </div>
             <div className="absolute top-1/3 right-1/3 opacity-5 animate-float" style={{ animationDelay: '4s' }}>
                <Globe size={80} className="text-gray-900" />
             </div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-green-200/50 px-6 py-2.5 rounded-full shadow-xl mb-10 ring-1 ring-green-100">
                <Star className="w-4 h-4 text-green-600 fill-current animate-pulse" />
                <span className="text-sm font-bold text-green-800 tracking-widest uppercase">Our Prestigious Portfolio</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
                Trusted by the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500">
                  Industry Giants.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                We are the chosen marketing partner for the biggest names in Retail, Healthcare, and Corporate sectors across the UAE.
              </p>
            </FadeIn>

            {/* Massive Stats Row */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <stat.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- INTERACTIVE LOGO GRID --- */}
        <section className="py-24 relative bg-white">
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
              {clients.map((client, idx) => (
                <FadeIn key={idx} delay={idx * 50}>
                  <div className="group relative h-64 w-full flex flex-col items-center justify-center bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 cursor-pointer overflow-hidden">
                    
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white via-white to-${client.color ? client.color.replace('bg-', '') : 'green-50'}`} />
                    
                    {/* Active Border Gradient */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-100 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />

                    {/* Logo Image */}
                    <div className="relative z-10 p-6 transition-transform duration-500 transform group-hover:scale-110">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="w-full h-24 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                    </div>

                    {/* Reveal Content on Hover */}
                    <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col items-center">
                      <div className="h-1 w-12 bg-green-500 rounded-full mb-3" />
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                        {client.category}
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute -top-[100%] -left-[100%] w-full h-full bg-gradient-to-br from-transparent via-white/50 to-transparent group-hover:animate-shine pointer-events-none" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERSHIP BANNER --- */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn>
              <div className="bg-[#0a0a0a] rounded-[3.5rem] p-12 md:p-32 relative overflow-hidden text-center shadow-2xl">
                {/* Glowing Orbs */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                  <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/10 shadow-inner">
                    <Handshake className="w-12 h-12 text-green-400" />
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                    Ready to join our <br />
                    <span className="text-green-500">Success Stories?</span>
                  </h2>
                  
                  <p className="text-2xl text-gray-400 font-light leading-relaxed">
                    We bring the same level of dedication and results to every client, whether you are a global brand or a local startup.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <a href="/contact">
                      <button className="px-12 py-6 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold shadow-xl shadow-green-900/30 flex items-center justify-center gap-4 transform hover:-translate-y-2 transition-all text-xl group">
                        Become a Client
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shine {
            0% { top: -100%; left: -100%; }
            100% { top: 100%; left: 100%; }
        }
        .animate-shine {
            animation: shine 1.5s ease-out;
        }
      `}</style>
    </>
  );
}