import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';
import {
  Target,
  Award,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  TrendingUp,
  MapPin,
  Smile,
  CheckCircle2,
  Printer,
  Megaphone,
  Globe
} from "lucide-react";

/* --- IMPORTED IMAGES --- */
import image1 from "../../assests/Flyers/flyerService2.webp";
import image2 from "../../assests/printing/printingService2.webp";
import image3 from "../../assests/digitalmarketing/dm1.webp";
import image4 from "../../assests/Outdoorads/od1.webp";

/* Stats Section Data */
const stats = [
  { label: "Campaigns Launched", value: "500+", icon: Rocket },
  { label: "Flyers Distributed", value: "1M+", icon: MapPin },
  { label: "Happy Clients", value: "200+", icon: Smile },
  { label: "Years in Business", value: "10+", icon: Award },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  /* Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* Cursor background effect */
  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <section
        id="about"
        className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden mt-10"
      >
        {/* Interactive background circles */}
        <div
          className="absolute rounded-full w-72 h-72 bg-green-200/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute rounded-full w-64 h-64 bg-emerald-300/30 blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
          }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* ==================== 
              1. HEADER / INTRO 
             ==================== */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
              <span className="text-green-600 font-semibold uppercase tracking-wider">About Max Lead Advertising</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              A Leading Advertising & <br/>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                 Distribution Company in UAE
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed text-justify md:text-center">
              Max Lead Advertising is a trusted advertising and distribution company in UAE that helps businesses connect with the right audience through powerful offline and online marketing. From door-to-door flyer distribution and digital printing to SMS marketing and digital marketing services, we provide everything businesses need to increase visibility, generate leads, and grow revenue.
              <br /><br />
              Since our establishment in 2015, we have supported hundreds of businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah with reliable, cost-effective, and result-driven advertising solutions. We don’t believe in guesswork or generic campaigns. Every strategy we create is based on data, location targeting, and audience behavior.
            </p>
          </div>

          {/* ==================== 
              1.5 IMAGE GALLERY SECTION 
             ==================== */}
          <div className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
             {[image1, image2, image3, image4].map((img, idx) => (
                <div key={idx} className={`relative overflow-hidden rounded-3xl shadow-lg group h-full ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
                   <img 
                     src={img} 
                     // FIXED: Removed words like "Image" to satisfy linter
                     alt={`Max Lead Advertising Service ${idx + 1}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
             ))}
          </div>

          {/* ==================== 
              2. WHO WE ARE 
             ==================== */}
          <div className="mb-24 flex flex-col xl:flex-row gap-16 items-center">
            <div className="xl:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 We are more than just a printing or flyer distribution company. Max Lead Advertising is a complete marketing, advertising, and distribution agency in UAE designed to help brands reach people at the right place and at the right time.
               </p>
               <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Our core strength lies in combining:</h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1"><MapPin className="w-5 h-5 text-green-600"/></div>
                      <span className="text-gray-700 text-lg">Physical advertising like door-to-door leaflet distribution, outdoor advertising, and printed marketing materials.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1"><Globe className="w-5 h-5 text-green-600"/></div>
                      <span className="text-gray-700 text-lg">Digital marketing such as Whatsapp marketing, social media promotion, lead generation, and online advertising.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 italic border-t pt-4 border-gray-100">
                    This integrated approach allows businesses to enjoy the benefits of both offline trust and online reach. Whether you are a small local shop, a growing startup, or an established company, we design marketing solutions that fit your budget and your business goals.
                  </p>
               </div>
            </div>
            <div className="xl:w-1/2 relative w-full">
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900 text-white p-10 rounded-[2rem] h-80 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                     <Megaphone className="w-12 h-12 text-green-400" />
                     <span className="text-3xl font-bold">Offline <br/>Impact</span>
                  </div>
                  <div className="bg-green-600 text-white p-10 rounded-[2rem] h-80 mt-16 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                     <MonitorSmartphone className="w-12 h-12 text-white" />
                     <span className="text-3xl font-bold">Online <br/>Reach</span>
                  </div>
               </div>
            </div>
          </div>

          {/* ==================== 
              3. MISSION & VISION 
             ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.01} className="h-full">
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-200 shadow-xl h-full flex flex-col">
                   <div className="inline-flex p-5 rounded-2xl bg-green-100 mb-8 w-fit">
                      <Target className="w-10 h-10 text-green-600" />
                   </div>
                   <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                   <p className="text-gray-600 text-xl leading-relaxed">
                     To help businesses across the UAE grow through smart advertising, targeted distribution, and performance-driven digital marketing.
                   </p>
                </div>
             </Tilt>

             <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.01} className="h-full">
                <div className="bg-gray-900 p-12 rounded-[2.5rem] border border-gray-800 shadow-xl h-full flex flex-col">
                   <div className="inline-flex p-5 rounded-2xl bg-gray-800 mb-8 w-fit">
                      <Lightbulb className="w-10 h-10 text-green-400" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                   <p className="text-gray-300 text-xl leading-relaxed">
                     To become the most trusted and reliable advertising and distribution company in UAE, known for integrity, quality, and results.
                   </p>
                </div>
             </Tilt>
          </div>

          {/* ==================== 
              4. OUR JOURNEY 
             ==================== */}
          <div className="mb-24 bg-green-50/50 p-10 md:p-16 rounded-[3rem] border border-green-100">
             <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Our Journey</h2>
                <div className="space-y-8 text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
                   <p>
                     Max Lead Advertising was founded with a simple goal: <strong>To make marketing more effective, more affordable, and more measurable for businesses in the UAE.</strong>
                   </p>
                   <p>
                     When we started, we noticed a major problem in the market. Many businesses were spending money on flyers, printing, and ads without knowing whether they were reaching the right people. Others were running digital ads without strong brand presence on the ground. There was no connection between offline and online marketing.
                   </p>
                   <p className="font-semibold text-green-700 text-2xl">
                     That’s where Max Lead changed the game.
                   </p>
                   <p>
                     We built a structured system that connects:
                   </p>
                   <ul className="list-disc pl-8 space-y-2 font-medium">
                      <li>Targeted flyer and leaflet distribution</li>
                      <li>High-quality digital printing</li>
                      <li>Local SMS and digital marketing</li>
                   </ul>
                   <p>
                     This system helps businesses not only promote their offers but also track, improve, and scale their marketing. Over the years, we have built strong networks across residential communities, commercial areas, retail zones, and business districts in the UAE, allowing us to distribute and promote brands with precision.
                   </p>
                </div>
             </div>
          </div>

          {/* ==================== 
              5. WHAT WE DO (Services) 
             ==================== */}
          <div className="mb-24">
             <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                What We <span className="text-green-600">Do</span>
             </h2>
             <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
                At Max Lead Advertising, we offer a complete range of advertising and marketing services in the UAE under one roof.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-green-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                   <MapPin className="w-12 h-12 text-green-600 mb-8" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Offline Advertising & Distribution</h3>
                   <ul className="space-y-4 text-gray-600 mb-auto">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Door-to-door flyer distribution in Dubai and UAE</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Door-to-door leaflet distribution</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Residential and commercial area distribution</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Event and promotion distribution</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Outdoor advertising (billboards, banners, vehicle branding)</li>
                   </ul>
                   <p className="mt-8 text-sm text-gray-500 italic">Reaching people directly in their homes, workplaces, and public spaces.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-gray-800 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                   <Printer className="w-12 h-12 text-gray-800 mb-8" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Printing Services</h3>
                   <ul className="space-y-4 text-gray-600 mb-auto">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-800 shrink-0"/> Flyers and leaflets</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-800 shrink-0"/> Posters and banners</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-800 shrink-0"/> Business cards and corporate stationery</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-800 shrink-0"/> Event and exhibition prints</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-800 shrink-0"/> Vehicle branding and signage</li>
                   </ul>
                   <p className="mt-8 text-sm text-gray-500 italic">High-quality printing ensures your brand looks professional.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-green-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                   <MonitorSmartphone className="w-12 h-12 text-green-600 mb-8" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital & SMS Marketing</h3>
                   <ul className="space-y-4 text-gray-600 mb-auto">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Bulk and targeted SMS marketing in UAE</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Social media marketing</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Lead generation campaigns</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/> Digital advertising</li>
                   </ul>
                   <p className="mt-8 text-sm text-gray-500 italic">Reach your audience both offline and online for maximum impact.</p>
                </div>
             </div>
          </div>

         {/* ==================== 
              6. STRATEGIC APPROACH 
             ==================== */}
          <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
             
             {/* Left Text Content */}
             <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center lg:text-left">
                   Our Strategic Marketing Approach
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-10 text-center lg:text-left">
                   Most advertising companies simply deliver what the client asks for. We go one step further.
                </p>
                
                <div className="space-y-6 md:space-y-8">
                   <div className="bg-white border-l-8 border-green-500 pl-6 md:pl-8 py-4 shadow-sm rounded-r-xl">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Before We Start</h4>
                      <p className="text-gray-600 text-base md:text-lg">
                         We focus on your target audience, business location, competition, budget, and marketing goal. This ensures every campaign is designed to bring real results.
                      </p>
                   </div>
                   <div className="bg-white border-l-8 border-gray-800 pl-6 md:pl-8 py-4 shadow-sm rounded-r-xl">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Data-Driven Execution</h4>
                      <p className="text-gray-600 text-base md:text-lg">
                         We use data, experience, and local market knowledge to decide where to distribute, who to target, what message to use, and how often your brand should be seen.
                      </p>
                   </div>
                </div>

                <p className="mt-8 md:mt-10 font-bold text-green-700 text-lg text-center lg:text-left">
                   This approach is what separates Max Lead from ordinary flyer distribution or printing companies.
                </p>
             </div>

             {/* Right Stats Display */}
             <div className="lg:w-1/2 w-full">
                <div className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden w-full shadow-2xl">
                   {/* Background Glow */}
                   <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-green-500/20 rounded-full blur-[60px] md:blur-[80px]"></div>
                   
                   {/* Grid */}
                   <div className="grid grid-cols-2 gap-6 md:gap-10 relative z-10">
                      {stats.map((stat, i) => (
                         <div key={i} className="text-center p-4 md:p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
                            <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-green-400 mx-auto mb-3 md:mb-4" />
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>  
          {/* ==================== 
              7. WHY CHOOSE US 
             ==================== */}
          <div className="mb-24 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Why Businesses Choose <br/>Max Lead Advertising</h2>
             <p className="text-gray-600 mb-16 text-xl max-w-4xl mx-auto">
               Businesses across UAE choose us because we provide more than just services — we provide results. We understand how people in Dubai and other Emirates respond to advertising, and we use that knowledge to help our clients grow.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                   "Strong local presence across UAE",
                   "Reliable distribution network",
                   "In-house printing and branding",
                   "Affordable marketing packages",
                   "Honest and transparent pricing",
                   "Fast turnaround times",
                   "Proven experience in UAE markets",
                   "Result-oriented strategies"
                ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="bg-green-100 p-2 rounded-full shrink-0"><CheckCircle2 className="w-6 h-6 text-green-600" /></div>
                      <span className="text-gray-800 font-semibold text-left text-lg">{item}</span>
                   </div>
                ))}
             </div>
          </div>

          {/* ==================== 
              8. OUR REACH 
             ==================== */}
          <div className="mb-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-[3rem] p-12 lg:p-20 text-white text-center">
             <Globe className="w-16 h-16 text-green-400 mx-auto mb-8" />
             <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Reach Across UAE</h2>
             <p className="text-gray-300 mb-12 text-xl max-w-4xl mx-auto leading-relaxed">
               Max Lead Advertising proudly serves businesses across all Emirates. Our wide reach allows us to help brands target specific communities, neighborhoods, and commercial zones.
             </p>
             <div className="flex flex-wrap justify-center gap-6 mb-12">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"].map((city, idx) => (
                   <span key={idx} className="px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-green-600 hover:border-green-600 transition-colors cursor-default text-lg font-medium">
                      {city}
                   </span>
                ))}
             </div>
             <p className="text-lg text-gray-400">
                We offer flyer distribution, SMS marketing, digital printing, and digital marketing solutions for companies that want to grow locally or regionally.Our wide reach allows us to help brands target specific communities, neighborhoods, and commercial zones.

             </p>
          </div>

          {/* ==================== 
              9. CALL TO ACTION 
             ==================== */}
          <div className="bg-green-50 rounded-[3rem] p-16 border border-green-200 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Ready to Grow Your Business with Max Lead?
                </h3>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                  If you are looking for a professional advertising and distribution company in UAE that understands both offline and online marketing, Max Lead Advertising is your partner.
                  <br/><span className="text-green-700 font-semibold">Let’s build your brand, reach the right audience, and grow your business together.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1"
                   >
                    Get a Free Consultation
                   </button>
                   <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-12 py-5 bg-green-600 text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-green-700 hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1"
                   >
                    Request a Custom Quote <TrendingUp className="w-6 h-6" />
                   </button>
                </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}