import { useEffect, useState, useRef } from "react";
import { 
  Signpost, 
  Truck, 
  Monitor, 
  Maximize, 
  LayoutTemplate, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Navigation as NavIcon,
  Eye,
  Building,
  Layers,
  MapPin,
  PenTool,
  FileCheck,
  Printer,
  BarChart3
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* IMAGES - Replace with your actual assets */
import outdoorHero from "../../assests/Outdoorads/od1.webp"; // Placeholder

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

export default function OutdoorAds() {
  
  return (
    <>
     <Whatsapp />
    <ScrollToTop />
      <Navigation />

      <main className="relative overflow-hidden bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-b from-green-50/40 to-white">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-green-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob"
            />
            <div 
              className="absolute top-[20%] -right-[10%] w-[40rem] h-[40rem] bg-emerald-200/30 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"
            />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <FadeIn className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full shadow-sm">
                <Signpost className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Premier Outdoor Advertising UAE</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Outdoor Advertising & Other Advertising Company in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Dubai, UAE
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                From billboards and hoardings to LED screens, lamp post banners, bridge banners, rooftop ads, glass graphics, and vehicle branding, we help your business get noticed where it matters most – on the streets, roads, malls, and commercial hubs of the UAE.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                  Get a Free Outdoor Media Plan
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:border-green-200 hover:bg-green-50 transition-all duration-300">
                  Request a Quote
                </button>
              </div>
            </FadeIn>

            {/* Right Image */}
            <FadeIn delay={200} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-green-200">
                <img 
                  src={outdoorHero} 
                  alt="Outdoor Advertising Dubai" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[260px] animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-gray-900 text-lg">Mass Visibility</span>
                  </div>
                  <p className="text-sm text-gray-600">Your message seen by thousands every single day.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- INTRO SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                What Is Outdoor Advertising & Why It Works in the UAE
              </h2>
              <div className="h-1.5 w-24 bg-green-500 rounded-full mb-8" />
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Outdoor advertising, also known as OOH advertising, refers to any advertising that reaches people outside their homes. In Dubai and across the UAE, this includes billboards, road banners, LED displays, lamp posts, building wraps, vehicle branding, and hoardings placed in high-traffic areas.
                </p>
                <p>
                  In a fast-moving city like Dubai, people spend hours every day commuting, shopping, dining, and traveling. That means outdoor advertising gives your brand repeated exposure to thousands of potential customers every single day. Whether you want to launch a new product, promote a retail offer, advertise a real estate project, or build long-term brand awareness, our outdoor advertising solutions in UAE deliver consistent, high-visibility results.
                </p>
                <p>
                  Max Lead Advertising is a leading outdoor advertising company in Dubai, UAE, helping brands gain powerful visibility through high-impact OOH (Out of Home) advertising solutions.Heavy daily traffic,


Busy business districts,


Large residential communities,


Shopping malls and entertainment hubs,


Millions of tourists every year,

                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-green-50 rounded-[2rem] p-10 border border-green-100 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-[50px] opacity-50" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Why Businesses in Dubai Choose Outdoor Advertising</h3>
                <ul className="space-y-5 relative z-10">
                  {[
                    "Mass Visibility – Your brand is seen by thousands of people daily",
                    "High Trust – Large outdoor ads create strong brand credibility",
                    "Local Targeting – Advertise in specific areas, communities, or roads",
                    "Tourist Reach – Reach visitors who may not see your online ads",
                    "Long-Term Impact – Your ad stays visible day and night"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-4xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Outdoor Advertising Services in UAE</h2>
              <p className="text-xl text-gray-600">
                At Max Lead Advertising, we provide complete outdoor advertising and OOH media solutions in Dubai and across the UAE. From planning and printing to approvals and installation, we manage everything for you.
              </p>
            </FadeIn>
            
            {/* Visual trigger for outdoor formats */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {[
                { title: "Billboard & Hoarding Advertising", icon: Maximize, desc: "Our billboard advertising and hoarding services in UAE place your brand on high-visibility roads, highways, and busy commercial areas. These large-format displays are perfect for promoting:   High-visibility roads, highways, and busy commercial areas. Perfect for real estate projects, retail offers, events, and brand campaigns." },
                { title: "LED Billboard Advertising", icon: Monitor, desc: "With LED screen advertising in Dubai, your ads become dynamic and eye-catching. LED billboards allow:  Dynamic, bright visuals with video and animation. Day and night visibility ideal for malls, main roads, and busy intersections." },
                { title: "Bridge Banner Advertising", icon: LayoutTemplate, desc: "Bridge banners and road banners are placed on flyovers and overhead bridges, capturing the attention of drivers and commuters. These ads are perfect for limited-time offers, events, and brand promotions." },
                { title: "Lamp Post Advertising", icon: NavIcon, desc: "Lamp post advertising in Dubai is a great way to target specific neighborhoods, streets, and commercial zones. These ads are highly effective for:  Target specific neighborhoods, streets, and commercial zones. Highly effective for local retail, restaurants, and clinics." },
                { title: "Rooftop & Building-Top Advertising", icon: Building, desc: "Rooftop hoardings and building-top ads give your brand skyline visibility. These are especially powerful in areas with high-rise buildings, highways, and business districts." },
                { title: "Glass Graphics & Window Branding", icon: Layers, desc: "We provide glass branding, window graphics, and shop-front advertising for malls, showrooms, offices, and retail outlets. This helps turn your physical location into a marketing tool." },
                { title: "Taxi, Van & Truck Advertising", icon: Truck, desc: "With vehicle branding and mobile billboard advertising, your message moves across the city. Branded taxis, vans, and trucks create thousands of impressions daily across different locations in the UAE." },
              ].map((service, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- DEEP DIVE: PROCESS --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Outdoor Advertising Process</h2>
              <p className="text-gray-600 text-lg">We follow a proven process to ensure your OOH advertising campaign in Dubai delivers results.</p>
              {/* Visual trigger for workflow */}
              
            </FadeIn>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  { title: "Location Research", text: "We study traffic flow, footfall, and audience movement.", icon: MapPin },
                  { title: "Media Planning", text: "We choose the best billboards, roads, and zones for your brand.", icon: LayoutTemplate },
                  { title: "Design Support", text: "We help optimize your creatives for outdoor visibility.", icon: PenTool },
                  { title: "Government Approvals", text: "We handle permits and compliance.", icon: FileCheck },
                  { title: "High-Quality Printing", text: "Using durable outdoor-grade materials.", icon: Printer },
                  { title: "Professional Installation", text: "Safe and secure mounting.", icon: Layers },
                  { title: "Monitoring & Reporting", text: "Ensuring your ads stay visible and effective.", icon: BarChart3 },
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 h-full text-center group">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg ring-4 ring-white mx-auto relative z-10">
                        <item.icon className="w-6 h-6" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">{i + 1}</div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US & COMPARISON --- */}
        <section className="py-24 bg-green-50">
           <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Max Lead Advertising</h2>
                 <p className="text-lg text-gray-600 mb-6">
                   Max Lead is more than just an outdoor advertising agency in Dubai. We are a full-service advertising and branding company in UAE with deep local expertise.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "Prime advertising locations across UAE",
                        "In-house printing and branding",
                        "Transparent pricing",
                        "Local market knowledge",
                        "Fast turnaround times",
                        "Integrated offline and digital marketing solutions"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="font-medium text-gray-700">{item}</span>
                        </div>
                    ))}
                 </div>
                 <p className="mt-6 text-green-700 font-medium italic">
                    We don’t just place your ad – we help you get real visibility and real results.
                 </p>
              </FadeIn>

              <FadeIn delay={200}>
                 <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Advertising vs Digital Marketing</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                        Outdoor advertising builds brand awareness and trust, while digital marketing drives leads and conversions. The most successful businesses in Dubai use both.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Signpost className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Strong Offline Presence</h4>
                                <p className="text-sm text-gray-500">Better brand recall & massive visibility.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Online Engagement</h4>
                                <p className="text-sm text-gray-500">Higher conversion rates & targeted leads.</p>
                            </div>
                        </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How much does outdoor advertising cost in Dubai?", a: "Costs depend on location, size, and duration. We provide customized media plans based on your budget." },
                { q: "How long should an outdoor ad run?", a: "Most campaigns run for 2 to 4 weeks, but longer campaigns build stronger brand recall." },
                { q: "Do you handle government approvals?", a: "Yes. We manage all permits and legal requirements." },
                { q: "Which locations are best?", a: "We recommend locations based on your target audience, business type, and campaign goals." }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <details className="group bg-white border border-gray-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-green-300 transition-colors">
                    <summary className="flex items-center justify-between font-bold text-lg text-gray-900">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180 bg-green-50 rounded-full p-1">
                        <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed border-t pt-4 border-gray-100">
                      {faq.a}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 bg-white">
          <FadeIn className="max-w-[1440px] mx-auto px-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Promote Your Brand Across Dubai?
                </h2>
                <p className="text-xl text-gray-600">
                  Put your brand on billboards, LED screens, roads, taxis, malls, and buildings with Max Lead’s professional outdoor advertising services in UAE.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all text-lg">
                      <MapPin className="w-6 h-6" />
                      Get Your Free Media Plan
                    </button>
                  </a>
                  <a href="/contact">
                    <button className="px-10 py-5 bg-white border border-gray-300 text-gray-800 rounded-full font-bold hover:bg-gray-50 flex items-center justify-center gap-3 transition-all text-lg hover:border-gray-400">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      Book a Consultation Today
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      <Footer />

      {/* --- GLOBAL CSS --- */}
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
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </>
  );
}