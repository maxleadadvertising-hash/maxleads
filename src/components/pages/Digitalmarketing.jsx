import { useEffect, useState, useRef } from "react";
import { 
  Search, 
  Mail, 
  BarChart, 
  Target, 
  Smartphone, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Globe,
  Share2,
  Video,
  Linkedin,
  MousePointerClick,
  Monitor,
  

} from "lucide-react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Whatsapp from '../pages/whatsapp';

/* IMAGES - Using placeholders, replace with specific digital marketing assets */
import marketingHero from "../../assests/digitalmarketing/dm2.webp"; 
import marketingService1 from "../../assests/digitalmarketing/dm1.webp";

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

export default function DigitalMarketing() {
  
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
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Results-Driven Agency</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Digital Marketing Agency in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Dubai, UAE
                </span> <br/>
                That Delivers Real Business Growth
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                At Max Lead Advertising, we are a results-driven digital marketing agency in Dubai, UAE helping brands attract the right audience, convert visitors into leads, and turn those leads into loyal customers.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                  Get a Free Digital Marketing Strategy
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:border-green-200 hover:bg-green-50 transition-all duration-300">
                  Request a Quick Quote
                </button>
              </div>
            </FadeIn>

            {/* Right Image */}
            <FadeIn delay={200} className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-green-200">
                <img 
                  src={marketingHero} 
                  alt="Digital Marketing Dubai" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[260px] animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-gray-900 text-lg">ROI Focused</span>
                  </div>
                  <p className="text-sm text-gray-600">We focus on leads and sales, not just likes and clicks.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- INTRO: RESULTS FOCUSED --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                A Results-Focused Digital Marketing Company in the UAE
              </h2>
              <div className="h-1.5 w-24 bg-green-500 rounded-full mb-8" />
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Max Lead Advertising is more than just an online marketing agency. We are a growth partner for businesses across Dubai and the UAE. Our team of marketers, strategists, designers, and ad specialists work together to create marketing systems that generate consistent leads and sales.
                </p>
                <p>
                  As a full-service digital marketing company, we don’t believe in one-size-fits-all solutions. Every business is different, which is why we build custom online marketing strategies based on your goals, industry, and target market. Whether you are a startup, a local shop, or an established brand, our digital marketing services are designed to help you grow in a measurable and sustainable way.
                </p>
                <p>
                  We don’t run random ads or post content without a purpose. Every campaign we manage is built around one goal: helping your business make more money. That is why many businesses choose us as their internet marketing agency for long-term success.
                </p>
                <p className="font-medium text-green-700">
                  From increasing brand awareness to driving qualified leads and boosting conversions, our digital marketing approach is practical, transparent, and focused on ROI.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-green-50 rounded-[2rem] p-10 border border-green-100 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-[50px] opacity-50" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Our Core Philosophy</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "We serve as a growth partner, not just a service provider.",
                    "We build marketing systems that generate consistent leads.",
                    "Custom strategies for startups, locals shops, and brands.",
                    "Practical, transparent approaches focused on ROI.",
                    "Long-term success over short-term tricks."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- COMPLETE SERVICES GRID --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-4xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Complete Digital Marketing Services That Work Together</h2>
              <p className="text-xl text-gray-600">
                Real growth happens when all your digital channels work together. That is why we provide a full range of digital marketing services in UAE, allowing you to reach your customers wherever they are online. Instead of managing multiple agencies, you get everything under one roof with one clear strategy.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Social Media Marketing", icon: Share2, desc: "Facebook, Instagram, LinkedIn, TikTok, Snapchat & YouTube strategies." },
                { title: "Search Engine Optimization (SEO)", icon: Search, desc: "Rank higher on Google and drive organic traffic." },
                { title: "Search Engine Marketing (Google Ads)", icon: Target, desc: "Instant leads via targeted PPC campaigns." },
                { title: "Email Marketing", icon: Mail, desc: "Automated campaigns to build loyalty and repeat sales." },
                { title: "SMS Marketing", icon: MessageCircle, desc: "Direct reach to customers for offers and updates." },
                { title: "WhatsApp Marketing", icon: Phone, desc: "Build relationships and follow up leads directly." },
                
              ].map((service, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- DEEP DIVE: SOCIAL MEDIA --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                 {/* Visual trigger for social media ecosystem */}
                 

[Image of social media marketing ecosystem diagram]

                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[650px] group mt-6">
                   <img src={marketingService1} alt="Social Media Marketing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                      <h3 className="text-white text-3xl font-bold mb-2">Complete Social Media System</h3>
                      <p className="text-gray-200 text-lg">
                        Content planning • Creative design • Paid ad campaigns • Audience targeting • Lead generation
                      </p>
                   </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Social Media Marketing That Builds Your Brand and Drives Sales</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Social media is where your customers spend a large part of their time. As a leading digital marketing agency, we use platforms like Facebook, Instagram, TikTok, LinkedIn, Snapchat, YouTube, and WhatsApp to help businesses grow their audience and generate real enquiries.
                </p>
                
                <div className="space-y-8">
                  {/* Platform 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Facebook & Instagram Marketing</h4>
                      <p className="text-gray-600 mt-2">We run highly targeted Facebook and Instagram campaigns that put your brand in front of people who are most likely to buy from you. Whether your goal is leads, website traffic, or sales, our campaigns are designed for performance.</p>
                    </div>
                  </div>

                  {/* Platform 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">YouTube Marketing</h4>
                      <p className="text-gray-600 mt-2">Video is one of the most powerful tools in digital marketing. We help businesses use YouTube ads and video campaigns to increase brand awareness and conversions.</p>
                    </div>
                  </div>

                  {/* Platform 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">LinkedIn Marketing</h4>
                      <p className="text-gray-600 mt-2">For B2B companies, LinkedIn is a goldmine. We help you reach decision-makers, business owners, and professionals through strategic LinkedIn marketing.</p>
                    </div>
                  </div>

                  {/* Platform 4 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">TikTok & Snapchat Marketing</h4>
                      <p className="text-gray-600 mt-2">These platforms are perfect for brands that want to reach younger audiences with creative and engaging content. We build campaigns that capture attention and drive action.</p>
                    </div>
                  </div>

                  {/* Platform 5 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">WhatsApp Marketing</h4>
                      <p className="text-gray-600 mt-2">We help you use WhatsApp to follow up leads, send offers, and build relationships that lead to sales.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- DEEP DIVE: SEO & SEM & EMAIL --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Col: SEO & Ads */}
              <FadeIn>
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-8 h-8 text-green-600" />
                        <h3 className="text-3xl font-bold text-gray-900">Search Engine Optimization (SEO)</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      When people search for your products or services on Google, you want your business to appear at the top. Our search engine optimization services help you rank higher for important keywords in Dubai and across the UAE.
                    </p>
                    <p className="text-gray-600 text-lg mt-4">
                      We optimize your website, content, and structure so that Google understands your business and sends you qualified traffic. SEO is not about tricks. It is about building long-term visibility that keeps bringing customers even when you are not running ads.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                        <MousePointerClick className="w-8 h-8 text-green-600" />
                        <h3 className="text-3xl font-bold text-gray-900">Search Engine Marketing (Google Ads)</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      If you need instant leads, Google Ads is one of the fastest ways to get them. As a professional digital marketing company, we create and manage Google Ads campaigns that target people who are already searching for what you offer.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-4">
                      We focus on ensuring you get the best return on your ad spend.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {["Keyword Targeting", "Ad Copywriting", "Landing Page Optimization", "Conversion Tracking"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                {item}
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right Col: Email & SMS + Box */}
              <FadeIn delay={200}>
                  <div className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-xl h-full flex flex-col justify-center">
                    <div className="mb-10">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Email Marketing & SMS Marketing</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Not every customer buys the first time. That is why follow-up is critical.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-4">
                            Our email marketing and SMS marketing services help you stay connected with your leads and customers. We create automated campaigns that send the right message at the right time, increasing repeat sales and customer loyalty.
                        </p>
                    </div>
                  </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Digital Marketing System Works</h2>
              <p className="text-gray-600 text-lg">We follow a clear process to make sure every campaign delivers results.</p>
              {/* Visual trigger for marketing process */}
              
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Business & Market Analysis", text: "We understand your business, your audience, and your competition." },
                { title: "Customer Targeting", text: "We identify who is most likely to buy from you and where to find them online." },
                { title: "Strategy Development", text: "We select the best platforms and create a custom digital marketing plan." },
                { title: "Campaign Execution", text: "Our team designs creatives, writes ads, and launches campaigns." },
                { title: "Optimization", text: "We monitor performance and improve campaigns continuously." },
                { title: "Reporting & Scaling", text: "You receive clear reports, and we scale what works." },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors" />
                    <span className="relative text-5xl font-black text-green-200 mb-4 block group-hover:text-green-600 transition-colors">0{i + 1}</span>
                    <h3 className="relative text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="relative text-gray-600">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="py-24 bg-green-900 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Why Businesses Choose Max Lead Advertising</h2>
              <p className="text-green-100 text-xl leading-relaxed">
                Businesses across the UAE choose us because we deliver results, not excuses. That is what makes us a trusted digital marketing agency and a preferred online marketing agency for growing businesses.
              </p>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="space-y-6">
                {[
                  "We understand the Dubai and UAE market",
                  "We focus on leads and sales, not just likes and clicks",
                  "We use data to improve performance",
                  "We offer complete digital marketing services under one roof",
                  "We provide honest reporting and clear communication"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What does a digital marketing agency do?", a: "A digital marketing agency helps businesses attract customers online through social media, search engines, email, and online advertising." },
                { q: "How much do digital marketing services cost in the UAE?", a: "Costs depend on your goals, platforms, and competition. We provide custom plans based on your business." },
                { q: "How long does SEO take to show results?", a: "SEO usually starts showing results within 4 to 6 months minimum, but it delivers long-term growth." },
                { q: "Which platform is best for my business?", a: "That depends on your audience. Our team helps you choose the right platforms for maximum return." }
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
                  Start Growing Your Business with a Professional Digital Marketing Agency
                </h2>
                <p className="text-xl text-gray-600">
                  If you are looking for a best digital marketing agency in Dubai, Max Lead Advertising is here to help. Whether you need leads, sales, or brand visibility, our digital marketing services are designed to move your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all text-lg">
                      <Monitor className="w-6 h-6" />
                      Get Your Free Digital Marketing Strategy
                    </button>
                  </a>
                  <a href="/contact">
                    <button className="px-10 py-5 bg-white border border-gray-300 text-gray-800 rounded-full font-bold hover:bg-gray-50 flex items-center justify-center gap-3 transition-all text-lg hover:border-gray-400">
                      <Users className="w-6 h-6 text-green-600" />
                      Talk to Our Digital Marketing Experts
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