import { useEffect, useState, useRef } from "react";
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
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Zap,
  Globe
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

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

/* --- INDUSTRIES DATA --- */
const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Boost footfall and product visibility for retail brands, supermarkets, and furniture stores through targeted hyper-local distribution.",
    background: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Utensils,
    title: "Food & Hospitality",
    description: "Drive bookings for restaurants, cafes, and hotels using location-based marketing and appetizing visual campaigns.",
    background: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Build trust for clinics, hospitals, and wellness centers with responsible, targeted communication strategies.",
    background: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Generate high-quality leads for developers and agents through strategic community distribution and premium collateral.",
    background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Help schools and training institutes reach parents and students effectively during key enrollment periods.",
    background: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Ticket,
    title: "Events",
    description: "Maximize attendance for exhibitions and conferences with high-reach promotional activations.",
    background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Briefcase,
    title: "Prof. Services",
    description: "Compliant marketing solutions for banks, law firms, and financial consultants to build authority.",
    background: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: Smartphone,
    title: "E-Commerce",
    description: "Bridge the gap between offline and online for digital brands using QR-driven physical campaigns.",
    background: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500"
  },
  {
    icon: FerrisWheel,
    title: "Entertainment",
    description: "Drive excitement and ticket sales for theme parks and leisure centers with engaging visual print media.",
    background: "https://images.unsplash.com/photo-1605840275083-b1d8c66699b1?auto=format&fit=crop&q=80&w=500"
  },
];

export default function Industries() {
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

      <main className="relative overflow-hidden bg-white mt-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
          
          {/* Interactive Floating Icons Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Large Blobs */}
             <div 
               className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-green-200/20 blur-[120px] rounded-full mix-blend-multiply animate-blob"
               style={{ transform: `translate(${cursor.x * 0.01}px, ${cursor.y * 0.01}px)` }}
             />
             <div 
               className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-emerald-200/20 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"
               style={{ transform: `translate(${cursor.x * -0.01}px, ${cursor.y * -0.01}px)` }}
             />

             {/* Floating Icons */}
             <div className="absolute top-1/4 left-10 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
                <Layers size={120} className="text-green-900" />
             </div>
             <div className="absolute bottom-1/4 right-10 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
                <Zap size={140} className="text-emerald-900" />
             </div>
             <div className="absolute top-1/3 right-1/4 opacity-5 animate-float" style={{ animationDelay: '4s' }}>
                <Globe size={100} className="text-gray-900" />
             </div>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-100 px-5 py-2.5 rounded-full shadow-lg mb-10 ring-1 ring-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-700 tracking-widest uppercase">Sector Expertise</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
                Solutions for Every <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500">
                  Major Industry.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                We don't believe in one-size-fits-all. Our marketing strategies are customized to the unique behavior of your specific audience and industry standards.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* --- INDUSTRIES GRID (3D FLIP CARDS) --- */}
        <section className="py-24 bg-gray-50 relative">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {industries.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 50}>
                  <div className="group h-[450px] w-full [perspective:1000px] cursor-pointer">
                    
                    <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl group-hover:shadow-2xl rounded-[2.5rem]">
                      
                      {/* --- FRONT SIDE --- */}
                      <div className="absolute inset-0 h-full w-full bg-white rounded-[2.5rem] flex flex-col justify-between overflow-hidden [backface-visibility:hidden] border border-gray-100">
                        
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                          <img 
                            src={item.background} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-inner">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>

                          <div>
                            <h3 className="text-4xl font-bold text-white leading-none mb-3 tracking-tight">
                              {item.title}
                            </h3>
                            <div className="h-1.5 w-16 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                          </div>
                        </div>
                        
                        {/* Hover Hint */}
                        <div className="absolute bottom-10 right-10 z-10">
                           <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-0 transition-transform">
                              <ArrowRight className="w-6 h-6 text-white" />
                           </div>
                        </div>
                      </div>

                      {/* --- BACK SIDE --- */}
                      <div className="absolute inset-0 h-full w-full bg-gray-900 rounded-[2.5rem] p-12 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-gray-800">
                        {/* Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
                        
                        <div className="relative z-10 flex flex-col items-center h-full justify-center">
                          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8 border border-green-500/20">
                              <item.icon className="w-8 h-8 text-green-400" />
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-6">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-400 leading-relaxed mb-10 text-base font-medium">
                            {item.description}
                          </p>

                          <Link 
                            to="/contact" 
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
                          >
                            Get Strategy
                          </Link>
                        </div>
                        
                        {/* Background Icon */}
                        <item.icon className="absolute -bottom-12 -right-12 w-64 h-64 text-white/[0.03] rotate-12" />
                      </div>

                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US FOR INDUSTRIES --- */}
        <section className="py-32 bg-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -skew-x-12 translate-x-32 z-0 pointer-events-none" />

           <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <FadeIn>
                 <div className="relative">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                      Why Industry <br/>
                      <span className="text-green-600">Expertise Matters</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                      Understanding the nuances of your specific sector allows us to craft campaigns that don't just reach people, but resonate with them. We comply with industry regulations while maximizing impact.
                    </p>

                    <div className="space-y-6">
                       {[
                          "Tailored messaging for specific demographics",
                          "Compliance with UAE advertising regulations",
                          "Strategic location targeting for retail & events",
                          "Proven track record in high-competition sectors"
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 group">
                             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <CheckCircle2 className="w-5 h-5" />
                             </div>
                             <span className="text-gray-800 font-bold text-lg">{item}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </FadeIn>

              <FadeIn delay={200}>
                 <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white bg-gray-100">
                    <img 
                       src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                       alt="Business Growth" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-12 left-12 right-12">
                        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-lg">
                           <div className="flex items-start gap-6 text-white">
                              <div className="p-4 bg-green-500 rounded-2xl shadow-lg shadow-green-500/40">
                                 <TrendingUp className="w-8 h-8 text-white" />
                              </div>
                              <div>
                                 <p className="font-bold text-2xl mb-1">Scalable Solutions</p>
                                 <p className="text-gray-200 text-lg">From startups to enterprises, we scale with you.</p>
                              </div>
                           </div>
                        </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn>
              <div className="bg-gray-900 rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center shadow-2xl shadow-gray-900/50">
                {/* Animated Gradient Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[150px] animate-pulse delay-700" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                    Don't see your industry?
                  </h2>
                  <p className="text-2xl text-gray-400 leading-relaxed font-light">
                    We adapt quickly. Contact us to discuss how our marketing frameworks can be applied to your unique business model.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link to="/contact">
                      <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold shadow-xl shadow-green-500/30 hover:shadow-green-500/50 flex items-center justify-center gap-4 transform hover:-translate-y-2 transition-all text-xl group">
                        Talk to an Expert
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </Link>
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
      `}</style>
    </>
  );
}