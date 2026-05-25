import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, MapPin, CheckCircle2, MessageSquare, Clock, User, FileText, TrendingUp, LayoutGrid,ArrowRight, PhoneCall, DollarSign, MousePointer2, BrainCircuit, Linkedin } from "lucide-react"; // Added Linkedin
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';


/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Unlock the Power of Local Advertising with Door Hangers",
    description: "Door hangers are different. They hang alone. They demand attention. Learn why they are the most powerful weapon for local businesses.",
    author: "MaxLead Strategy Team",
    date: "Feb 24, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Local Ads", "Neighborhood"],
    link: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/"
  },
  {
    id: 2,
    title: "Why UAE Businesses Rely on Flyer Distribution",
    description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.",
    author: "MaxLead Team",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Insights", "ROI"],
    link: "/blog/why-uae-businesses-rely-on-flyer-distribution/"
  },
  {
    id: 3,
    title: "How much do social media marketing services cost in the UAE?",
    description: "Explore social media marketing services cost in the UAE and learn what factors influence pricing and growth strategy.",
    author: "MaxLead Strategy Team",
    date: "Feb 24, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Pricing", "Digital Marketing"],
    link: "/blog/social-media-marketing-services-cost-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Door Hangers", icon: MapPin, path: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" },
  { name: "Flyer Distribution", icon: FileText, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "SMM Cost Guide", icon: DollarSign, path: "/blog/social-media-marketing-services-cost-uae/" },
  { name: "Digital Strategy", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" }
];

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
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function DoorHangerBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // ADDED: Meta Tags Logic via useEffect
    document.title = "Local Advertising with Door Hangers | Strategy Guide 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Unlock the power of local advertising with door hanger marketing. Reach your target audience directly at their doorstep with an affordable and effective strategy.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/");
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/+971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };
  const openLinkedin = () => { window.open("https://www.linkedin.com/company/max-lead-advertising-distribution/", "_blank"); };

  return (
    <>
    
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4 mt-8">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead Hyper-Local Strategy</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                        Unlock the Power of <span className="text-green-600">Local Advertising</span> with Door Hanger Marketing
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin size={14} aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><User size={14} aria-hidden="true" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-6 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button onClick={() => handleCategoryClick(cat.path)} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white transition-all group">
                  <cat.icon size={14} className="text-gray-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
                    
                    <div className="mb-12">
                        <p className="text-xl font-medium text-gray-900 leading-normal border-l-4 border-green-500 pl-6 mb-8">
                            Think about the last time you checked your mailbox. What did you find? Bills. Magazines. Maybe a package slip. And probably some flyers. Now think about the last time you opened your front door and found something hanging right there. A door hanger. Waiting for you. Impossible to miss.
                        </p>
                        <p className="text-base text-gray-600">
                            There is a difference between these two moments. Mailbox flyers compete with other mail. They get sorted, stacked, and sometimes thrown away without a glance. Door hangers are different. They hang alone. They demand attention. They say, "This is for you. Right here. Right now."
                        </p>
                        <p className="text-base text-gray-600">
                            This is the power of door hanger marketing. And in this blog, we will show you how to unlock it for your business.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">What Makes Door Hanger Marketing So Powerful?</h2>
                    <p className="text-base text-gray-600">Door hangers are not new. But they remain one of the most effective local advertising tools available. Here is why:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {[
                            { t: "100% Attention", d: "When someone opens their door, your message is the first thing they see. Not mixed with other ads. Not buried in a pile." },
                            { t: "Physical Presence", d: "In a digital world, physical things stand out. A door hanger is real. This physical connection builds trust." },
                            { t: "Targeted Reach", d: "You choose exactly where your door hangers go. Specific buildings. Specific communities. Specific neighborhoods." },
                            { t: "High Retention", d: "People keep door hangers. They put them on the fridge. They leave them on the counter." },
                            { t: "No Competition", d: "When your door hanger hangs alone, there is no competing ad next to it. No scrolling past. Just your message." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">{item.t}</h4>
                                <p className="text-sm text-gray-600">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Types of Businesses That Benefit Most</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                        {[
                            "Restaurants and Cafes", "Home Services (Plumbers/Cleaners)", "Pizza and Food Delivery", 
                            "Salons and Spas", "Gyms and Fitness Centers", "Healthcare Providers", 
                            "Schools and Nurseries", "Car Wash and Auto Services"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-green-50/50 rounded-xl">
                                <CheckCircle2 size={16} className="text-green-600 shrink-0" aria-hidden="true" />
                                <span className="text-sm font-bold text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Designing Door Hangers That Get Results</h2>
                    <ul className="space-y-4 list-none p-0 text-gray-600">
                        <li><strong>Shape and Size:</strong> Standard door hangers are often shaped to fit over door handles. The hook shape is important.</li>
                        <li><strong>Paper Quality:</strong> Thicker paper feels more professional. It lasts longer and doesn't get damaged by weather.</li>
                        <li><strong>Colors:</strong> Use your brand colors. Make the design clean and avoid clutter.</li>
                        <li><strong>Headline:</strong> Your headline must grab attention in seconds. "Hungry?" or "Special offer for neighbors."</li>
                        <li><strong>Offer:</strong> Include a clear, attractive offer. First time discount. Free consultation. BOGO.</li>
                        <li><strong>Call to Action:</strong> Tell people exactly what to do. Call now. Scan the QR code.</li>
                        <li><strong>Contact Information:</strong> Phone number. Website. QR code. Social media.</li>
                        <li><strong>Map or Location:</strong> If you have a physical location nearby, include a simple map.</li>
                    </ul>

                    <div className="bg-gray-950 text-white rounded-[2rem] p-10 my-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><BrainCircuit className="text-green-500" aria-hidden="true" /> The Psychology Behind Door Hanger Success</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-green-500 font-bold mb-2">Territoriality</h4>
                                <p className="text-sm text-gray-400">Your front door is personal. When something hangs there, it feels important and specifically placed for you.</p>
                            </div>
                            <div>
                                <h4 className="text-green-500 font-bold mb-2">Curiosity</h4>
                                <p className="text-sm text-gray-400">Finding something on your door creates curiosity. What is it? Who left it? People want to know.</p>
                            </div>
                            <div>
                                <h4 className="text-green-500 font-bold mb-2">Convenience</h4>
                                <p className="text-sm text-gray-400">The message arrives exactly where and when it matters—like a pizza menu when you're hungry.</p>
                            </div>
                            <div>
                                <h4 className="text-green-500 font-bold mb-2">Obligation</h4>
                                <p className="text-sm text-gray-400">Some feel a slight sense of obligation because someone took the time to hang this on their door.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Timing Your Door Hanger Campaigns</h2>
                    <ul className="space-y-3 mt-4 text-gray-600">
                        <li><strong>Evenings and Weekends:</strong> Best for residential areas. People are home to see the hanger soon after placement.</li>
                        <li><strong>Before Weekends:</strong> Distribute on Thursday or Friday for weekend offers when people plan their time.</li>
                        <li><strong>Seasonal Timing:</strong> AC companies before summer, gyms in January, schools before enrollment.</li>
                        <li><strong>Event-Based:</strong> Before a community holiday or long weekend. Match your timing to customer needs.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Integrating Door Hangers with Digital Marketing</h2>
                    <p className="text-base text-gray-600">Door hangers are offline tools that work beautifully with digital strategies:</p>
                    <div className="flex flex-wrap gap-2 my-6">
                        {["QR Codes for Tracking", "Social Media Handles", "Hanger-Only Offers", "Neighborhood Retargeting", "Google Review QR"].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">{tag}</span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Measuring Door Hanger Success</h2>
                    <p className="text-base text-gray-600">How do you know if your campaign worked?</p>
                    <ul className="space-y-2 list-none p-0 text-gray-600">
                        <li className="flex gap-3"><MousePointer2 size={18} className="text-green-600 shrink-0" aria-hidden="true" /> Trackable Offers (unique discount codes)</li>
                        <li className="flex gap-3"><MousePointer2 size={18} className="text-green-600 shrink-0" aria-hidden="true" /> Dedicated Phone Numbers for the campaign</li>
                        <li className="flex gap-3"><MousePointer2 size={18} className="text-green-600 shrink-0" aria-hidden="true" /> QR Code Scan counts</li>
                        <li className="flex gap-3"><MousePointer2 size={18} className="text-green-600 shrink-0" aria-hidden="true" /> Ask Customers: "How did you hear about us?"</li>
                        <li className="flex gap-3"><MousePointer2 size={18} className="text-green-600 shrink-0" aria-hidden="true" /> Compare sales periods (before vs after)</li>
                    </ul>

                    <div className="my-12 p-8 border-2 border-red-50 rounded-3xl bg-red-50/20">
                        <h3 className="text-xl font-bold text-red-600 mb-6 uppercase tracking-wider">Common Door Hanger Mistakes to Avoid</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Poor Design (Cluttered/Ugly)", "Weak Offer (No reason to act)", "Wrong Locations", 
                                "Bad Timing (Hangers sitting out too long)", "No Tracking", "Unprofessional Distribution"
                            ].map((m, i) => (
                                <div key={i} className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" aria-hidden="true" /> {m}
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Why Professional Distribution Matters</h2>
                    <p className="text-base text-gray-600">Professional distribution makes a huge difference in ROI:</p>
                    <div className="space-y-4 my-8">
                        <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Proper Placement & Complete Coverage</h4>
                                <p className="text-xs text-gray-500">Trained professionals ensure hangers stay on handles and cover every single door in the target area without skipping.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><CheckCircle2 className="text-green-600" aria-hidden="true" /></div>
                            <div>
                                <h4 className="font-bold text-sm">Legal Compliance & Proof</h4>
                                <p className="text-xs text-gray-500">We follow community rules and provide full delivery reports with photos and GPS data.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10 mb-8">Door Hanger Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-black text-xs text-blue-600 uppercase mb-2">The Pizza Place</h4>
                            <p className="text-xs text-gray-500">Distributed 5,000 hangers in nearby buildings with a BOGO offer. Result: 187 online orders in the first week. Revenue increased by 40%.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-black text-xs text-blue-600 uppercase mb-2">Home Cleaning</h4>
                            <p className="text-xs text-gray-500">Targeted a villa community with 20% off. Result: 32 enquiries in two weeks. 18 became regular monthly customers.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-black text-xs text-blue-600 uppercase mb-2">Dental Clinic</h4>
                            <p className="text-xs text-gray-500">Free first consultation offer with QR code booking. Result: 45 booked consultations in the first month.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Unlock Your Local Market with Door Hangers</h2>
                    <p className="text-base text-gray-600">
                        Door hanger marketing is powerful because it is personal. It reaches people in their homes. It gets attention. It drives action. At Max Lead Advertising, we handle design, printing, and distribution with professional reports and proof of delivery.
                    </p>

                    <div className="bg-gradient-to-br from-green-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to start?</h3>
                            <p className="text-green-100 text-base mb-8 max-w-2xl mx-auto">
                                Whether you are a restaurant, home service provider, or any local business, door hangers can grow your revenue.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <PhoneCall size={16} aria-hidden="true" /> Free Consultation
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <Linkedin size={16} aria-hidden="true" /> LinkedIn Profile
                                </button>
                                <button onClick={openWhatsapp} className="bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MessageSquare size={16} aria-hidden="true" /> WhatsApp Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>

        {/* --- RELATED BLOGS --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-100 px-6">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Related Strategy Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded text-blue-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-6 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read Story <ArrowRight size={12} aria-hidden="true" /></span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}