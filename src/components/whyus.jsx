import { useEffect, useState, useRef } from "react";
import { 
  ShieldCheck, 
  Layers, 
  Users, 
  MessageSquare, 
  Map, 
  TrendingUp, 
  CheckCircle2 
} from "lucide-react";

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

const features = [
  { 
    title: "Trusted Company", 
    desc: "Trusted advertising and distribution company in UAE.",
    icon: ShieldCheck 
  },
  { 
    title: "360° Solutions", 
    desc: "Complete offline & online marketing solutions .",
    icon: Layers 
  },
  { 
    title: "Expert Team", 
    desc: "Experienced team with deep industry knowledge.",
    icon: Users 
  },
  { 
    title: "Transparency", 
    desc: "Transparent communication and execution.",
    icon: MessageSquare 
  },
  { 
    title: "Wide Reach", 
    desc: "UAE-wide coverage.",
    icon: Map 
  },
  { 
    title: "Result Oriented", 
    desc: "focus on delivering real business results.",
    icon: TrendingUp 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-green-700 uppercase tracking-wide">
                Why Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Max Lead Advertising?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              We combine local expertise with integrated strategies to deliver campaigns that actually work.
            </p>
          </FadeIn>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- BOTTOM CTA BOX --- */}
        <FadeIn delay={400}>
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-snug">
                "We don’t believe in one-size-fits-all marketing. <br className="hidden md:block" />
                <span className="text-green-400">Every strategy is customized to your business needs."</span>
              </h3>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}