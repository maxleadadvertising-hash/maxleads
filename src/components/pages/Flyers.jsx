import { useEffect, useState, useRef } from "react";
import { 
  MapPin, 
  Users, 
  Megaphone, 
  CheckCircle, 
  Layers, 
  Clock, 
  ShieldCheck, 
  BarChart, 
  Home,
  Building2,
  Phone,
  MessageCircle,
  ShoppingBag,
  Target,
  Calendar
} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* IMAGES */
import flyerHero from "../../assests/Flyers/flyerhero.gif";
import flyerService1 from "../../assests/Flyers/flyerService1.webp";
import flyerService2 from "../../assests/Flyers/flyerService2.webp";
import flyerService3 from "../../assests/Flyers/ddf2.webp";
import flyerCTA from "../../assests/Flyers/ddf.webp"; 
import Flyer1 from "../../assests/Flyers/ddf3.webp";

/* --- ANIMATION COMPONENT --- */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function FlyerDistribution() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Service Data Mapping */
  const services = [
    {
      title: "Door-to-Door Flyer Distribution",
      desc: "Our door to door flyer distribution service involves delivering flyers directly to homes in villas, apartments, and residential communities. This method is ideal for businesses targeting local customers, families, and neighborhood audiences. Every distribution is planned area-wise to ensure proper coverage.",
      icon: Home,
      img: flyerService1,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Hand-to-Hand flyer Distribution",
      desc: "Hand-to-hand distribution allows direct interaction with potential customers. Flyers are distributed personally in busy streets, malls, metro stations, and commercial zones. This method works well for promotions, events, and time-sensitive campaigns.",
      icon: Users,
      img: Flyer1,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Retail and In-Store Distribution",
      desc: "We place flyers inside supermarkets, retail outlets, shopping malls, and stores where customers are already in a buying mindset. This increases the chances of response and engagement, especially for FMCG brands, restaurants, and service providers.",
      icon: ShoppingBag,
      img: flyerService3,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      title: "Residential Area Distribution",
      desc: "Residential area distribution focuses on specific communities based on demographics, income groups, and lifestyle. We distribute flyers in apartments, villas, gated communities, and housing societies to ensure precise targeting.",
      icon: MapPin,
      img: flyerService1,
      color: "text-teal-600",
      bg: "bg-teal-100"
    },
    {
      title: "Commercial Area Distribution",
      desc: "For B2B and service-based businesses, commercial area distribution is highly effective. Flyers are distributed in offices, business centers, and corporate locations across Dubai and UAE.",
      icon: Building2,
      img: flyerService3,
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    },
    {
      title: "Targeted Area Distribution",
      desc: "Targeted flyer distribution helps businesses reach customers based on location, area type, and audience behavior. This approach improves conversion and avoids unnecessary distribution in irrelevant zones.",
      icon: Target,
      img: flyerService2,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      title: "Event / Promotion Distribution",
      desc: "We support exhibitions, events, roadshows, and promotional campaigns with on-ground flyer distribution. This service is ideal for increasing footfall and immediate visibility during events.",
      icon: Calendar,
      img: flyerService3,
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  return (
    <>
     <Whatsapp />
    <ScrollToTop />
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#f0fdf4] via-white to-[#f0fdf4] overflow-hidden">
        {/* BACKGROUND BLOBS (Green Theme) */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px] mix-blend-multiply filter"
          style={{ transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px] mix-blend-multiply filter"
          style={{ transform: `translate(${cursorPos.x * -0.03}px, ${cursorPos.y * -0.03}px)` }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 space-y-32">

          {/* 1. HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
            <FadeIn>
              <div className="space-y-8 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 px-4 py-1.5 rounded-full">
                    <Megaphone className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold text-green-800 tracking-wide uppercase">#1 Flyer Distribution UAE</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  Flyer Distribution Services in <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    Dubai, UAE
                  </span>
                </h1>

                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>
                    In a competitive market like the UAE, visibility plays a major role in business growth. At Max Lead Advertising, we provide professional flyer distribution services in Dubai, UAE that help businesses connect directly with their target audience. From residential communities to commercial hubs, our structured and strategic distribution approach ensures your message reaches the right people at the right location.
                  </p>
                  <p>
                   
As one of the trusted flyer distribution companies in Dubai UAE, we specialize in door to door flyer distribution, leaflet distribution, and targeted offline marketing campaigns designed to create real awareness and response.

                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold shadow-lg hover:shadow-green-500/30 transition transform hover:-translate-y-1">
                    Get a Quote
                  </button>
                  <button className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-bold shadow-sm hover:bg-gray-50 transition">
                    View Areas
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-teal-400 rounded-[2rem] transform rotate-3 opacity-20 blur-lg"></div>
                <img
                  src={flyerHero}
                  alt="Flyer distribution services in Dubai"
                  className="relative w-full rounded-[2rem] shadow-2xl border-4 border-white"
                />
              </div>
            </FadeIn>
          </div>

        {/* 2. ABOUT / INTRO SECTION (Existing Code) */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Professional Door to Door Flyer Distribution in Dubai, UAE
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Flyer distribution remains one of the most effective offline marketing methods when executed correctly. Unlike digital ads that can be skipped or ignored, physical flyers are tangible, visible, and memorable. Our door to door leaflet distribution services are designed to maximize reach while maintaining accuracy and compliance.
                </p>
                <p>
                  Whether you are a small business or an established brand, our flyer distribution solutions are customized to your goals and audience.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-green-100 p-2 rounded-lg"><Layers className="w-5 h-5 text-green-600"/></span>
                  We help businesses promote:
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "New product launches",
                    "Store openings",
                    "Offers and discounts",
                    "Events and exhibitions",
                    "Brand awareness campaigns"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* --- NEW BOTTOM IMAGE SECTION --- */}
          <FadeIn delay={400}>
            <div className="mt-16 relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img 
                src={flyerService3} 
                alt="Door to Door Distribution Service" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Overlay for better depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </FadeIn>

          {/* 3. SERVICES SECTION */}
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Flyer Distribution Services</h2>
               <p className="text-lg text-gray-600">
                 At Max Lead Advertising, we offer a complete range of flyer and leaflet distribution solutions across Dubai and UAE. Each service is planned carefully to ensure coverage, targeting, and effectiveness.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <FadeIn key={index} delay={index * 100}>
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 flex-1">{service.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
          </div>

          {/* 4. WHY IT WORKS (Grid) */}
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>

             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Flyer Distribution Still Works in Dubai, UAE</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Despite the growth of digital platforms, flyer distribution in Dubai continues to deliver strong results. The UAE’s diverse population, high residential density, and strong retail culture make physical marketing highly impactful.
                    </p>
                    <h4 className="text-xl font-bold mb-4 text-green-400">Flyer distribution works because:</h4>
                    <ul className="space-y-4">
                        {[
                            "Flyers are visible and tangible",
                            "Customers can read at their convenience",
                            "It creates local brand familiarity",
                            "It is cost-effective compared to mass media"
                        ].map((item, i) =>(
                            <li key={i} className="flex items-center gap-3">
                                <span className="bg-green-500/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-green-400"/></span>
                                <span className="text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
                
                {/* BENEFITS SECTION INTEGRATED */}
                <FadeIn delay={200}>
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 text-white">Benefits of Our Services</h3>
                        <p className="text-gray-300 mb-6">Choosing the right flyer distribution company is essential for campaign success. Our services offer:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             {[
                                "Direct reach to potential customers",
                                "Area-specific and audience-based targeting",
                                "High brand recall and visibility",
                                "Suitable for all types of businesses",
                                "Cost-effective offline advertising",
                                "Supports quick promotions and launches"
                             ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1"><Clock className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-sm font-medium text-gray-200">{benefit}</span>
                                </div>
                             ))}
                        </div>
                    </div>
                </FadeIn>
             </div>
          </div>

          {/* 5. PROCESS SECTION */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Our Door-to-Door Flyer Distribution Process</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">We follow a structured process to deliver consistent and reliable results:</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { title: "Understanding Your Objective", icon: ShieldCheck, desc: "We discuss your campaign goals, target audience, and expected outcome." },
                    { title: "Area & Audience Planning", icon: MapPin, desc: "Based on your objective, we identify suitable residential, commercial, or targeted areas." },
                    { title: "Distribution Strategy", icon: Layers, desc: "We select the right distribution method — door to door, hand to hand, retail, or event-based." },
                    { title: "Execution", icon: Users, desc: "Our trained distribution team executes the campaign according to the plan." },
                    { title: "Monitoring & Reporting", icon: BarChart, desc: "We track the distribution process and provide transparency wherever applicable." },
                ].map((step, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-green-200 shadow-lg">
                                {i + 1}
                            </div>
                            <h4 className="font-bold text-lg mb-2 leading-tight">{step.title}</h4>
                            <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
          </div>

           {/* 6. WHY CHOOSE US & AREAS */}
           <div className="grid md:grid-cols-2 gap-12 bg-green-50 rounded-3xl p-10 border border-green-100">
               <div>
                   <h3 className="text-2xl font-bold mb-6">Why Choose Max Lead Advertising?</h3>
                   <p className="mb-6 text-gray-600">As an experienced flyer distribution company in Dubai UAE, Max Lead Advertising stands out for its professionalism, planning, and execution.</p>
                   <ul className="space-y-4">
                       {[
                           "Experienced advertising and distribution company",
                           "UAE-wide coverage",
                           "Trained and supervised distribution teams",
                           "Transparent and ethical practices",
                           "Customized campaign planning",
                           "Integrated offline and online marketing support"
                       ].map((point, i) => (
                           <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                               <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                               <span className="text-gray-700 font-medium">{point}</span>
                           </li>
                       ))}
                   </ul>
                   <p className="mt-6 text-sm italic text-gray-500">We don’t believe in simply distributing flyers. We focus on delivering campaigns that align with business objectives.</p>
               </div>
               <div className="flex flex-col justify-center">
                   <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                             <MapPin className="text-green-600"/> Areas We Cover Across UAE
                        </h3>
                        <p className="mb-6 text-gray-600">Our flyer and leaflet distribution services are available across major locations in UAE. Whether you want local distribution or wider coverage, we can plan accordingly.</p>
                        <div className="flex flex-wrap gap-3">
                            {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Other Emirates"].map((city) => (
                                <span key={city} className="px-5 py-3 bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:border-green-400 hover:bg-green-50 transition cursor-default">
                                    {city}
                                </span>
                            ))}
                        </div>
                   </div>
               </div>
           </div>


          {/* 7. FAQ SECTION */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: "What is door to door flyer distribution in Dubai?",
                  a: "Door to door flyer distribution involves delivering flyers directly to homes in selected residential areas. It helps businesses reach local customers effectively.",
                },
                {
                  q: "Is flyer distribution legal in UAE?",
                  a: "Yes, flyer distribution is allowed when conducted responsibly and in compliance with local guidelines. We ensure ethical and professional execution.",
                },
                {
                  q: "Which businesses benefit from flyer distribution?",
                  a: "Retail stores, restaurants, real estate, clinics, events, education institutes, and service providers benefit greatly from flyer distribution.",
                },
                {
                  q: "How do you choose distribution areas?",
                  a: "Areas are selected based on your target audience, business type, and campaign objective.",
                },
                {
                  q: "Do you offer targeted flyer distribution?",
                  a: "Yes, we provide targeted area distribution based on location, audience type, and campaign goals.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 50}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-green-300 transition cursor-default">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-green-500">?</span> {item.q}
                    </h3>
                    <p className="text-gray-600 pl-5 border-l-2 border-gray-100">{item.a}</p>
                    </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 8. CTA SECTION */}
          <FadeIn>
            <div id="contact" className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 text-white text-center p-12 md:p-24">
              
              <div className="absolute inset-0 opacity-40">
                <img
                  src={flyerCTA}
                  alt="Background"
                  className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Start Your Flyer Distribution Campaign in Dubai Today
                </h2>

                <p className="text-lg text-gray-300">
                  If you are looking for reliable flyer distribution services in Dubai, UAE, Max Lead Advertising is here to help. As a trusted flyer distribution company in Dubai UAE, we ensure your brand message reaches the right audience with precision and professionalism.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                  {/* CONTACT US */}
                  <a href="/contact">
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-teal-700 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-500/40 transition flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact us today
                    </button>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/+971522286401"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      WhatsApp us
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </>
  );
}