import React, { useEffect, useState, useRef } from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { TrendingUp, Target, Clock, User, LayoutGrid, FileText, MessageSquare, MousePointer2, Globe, Linkedin, Zap, CheckCircle2} from "lucide-react"; 
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL STRATEGIC BLOG DATA --- */
const blogs = [
  {
    id: 1,
    title: "Looking for the Best Printing Services Near Me in Dubai? Here’s How to Pick the Best One Near You",
    description: "Searching for printing services near me in Dubai? Get affordable, high-quality prints with fast turnaround from trusted local experts today.",
    author: "MaxLead Strategy Team",
    date: "March 12, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Printing Services", "Dubai Local"],
    link: "/blog/best-digital-printing-services-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description: "Discover why physical marketing still works and how touch triggers emotional responses that digital ads can't match.",
    author: "MaxLead Team",
    date: "March 6, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Psychology", "Insights"],
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
  },
  {
    id: 3,
    title: "Best Digital Marketing Agency in UAE",
    description: "Hiring an agency in 2026? Learn how to choose a performance partner that converts clicks into revenue.",
    author: "Strategy Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Agency Guide"],
    link: "/blog/best-digital-marketing-agency-uae/"
  }
];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Leaflet Distribution", icon: FileText, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Digital Strategy", icon: Globe, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Psychology", icon: Target, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" }
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

export default function LeafletDistributionBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    // Injecting SEO Meta Tags manually since Helmet was removed per previous guidelines
    document.title = "Door-to-Door Booklet Distribution for Local Promotions | Max Lead";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Boost your local marketing with Door-to-Door Booklet Distribution and connect directly with potential customers effectively. Contact Us Today!");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/door-to-door-booklet-distribution-local-promotions/");
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
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">
                        <TrendingUp className="w-3 h-3" />
                        <span>MaxLead UAE Printing Expert</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight text-center">
                        Why Businesses Choose <span className="text-blue-600">Door-to-Door Booklet Distribution for </span> Local Promotions
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2 cursor-pointer transition-colors hover:text-blue-600" onClick={openLinkedin} aria-label="Visit Max Lead LinkedIn Profile"><Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" aria-hidden="true" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 bg-white border-b border-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-white" aria-hidden="true" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-gray-600 group-hover:text-white">{cat.name}</span>
                </button>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- MAIN CONTENT SECTION --- */}
        <section className="pb-24 bg-white px-6">
            <FadeIn className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed pt-12">
                    
                    <p className="text-base text-gray-600">
                        In today’s competitive marketing environment, businesses are constantly searching for effective ways to connect with local customers and increase brand awareness. While digital advertising continues to dominate online platforms, traditional marketing methods still play an important role in reaching targeted audiences. One of the most effective offline strategies is door-to-door booklet distribution.
                    </p>
                    <p className="text-base text-gray-600">
                        Booklet distribution allows businesses to share detailed information directly with potential customers in specific neighborhoods and communities. Unlike short digital ads that disappear quickly, booklets provide customers with physical marketing materials they can read, keep, and revisit later.
                    </p>
                    <p className="text-base text-gray-600">
                        Businesses across industries including real estate, healthcare, restaurants, retail stores, educational institutions, and service providers continue to invest in booklet distribution because of its ability to create strong local visibility and customer engagement.
                    </p>
                    <p className="text-base text-gray-600">
                        When planned correctly, door-to-door marketing campaigns help businesses reach the right audience while improving trust, recognition, and response rates.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Why Door-to-Door Booklet Distribution Still Works</h2>
                    <p className="text-base text-gray-600">Despite the rapid growth of online marketing, physical advertising materials continue to deliver strong results for local promotions. One reason businesses choose Door-to-Door Booklet Distribution is because it creates direct exposure within targeted residential and commercial areas.</p>
                    <p className="text-base text-gray-600">Customers often receive countless digital ads every day, many of which are ignored within seconds. Printed booklets, however, provide a more personal and lasting marketing experience. Customers can browse information at their convenience, making booklet marketing highly effective for detailed promotions and local business awareness.</p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Product Catalogs:</strong> Showcase your complete range of products with detailed descriptions, specifications, images, and features to help customers make informed purchasing decisions.</li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Service Details:</strong> Clearly explain your services, key benefits, processes, pricing options, and how your solutions meet your customers' specific business needs.</li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Promotional Offers:</strong> Highlight exclusive discounts, limited-time deals, seasonal promotions, and special packages to encourage customers to take immediate action.</li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Price Lists:</strong> Present transparent and well-organized pricing information, allowing customers to compare products or services and choose the best option confidently.</li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Company Information:</strong> Introduce your company, mission, experience, achievements, and core values to build trust, credibility, and long-term customer relationships.</li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" /> <strong>Customer Testimonials:</strong> Share genuine customer reviews and success stories that demonstrate satisfaction, build credibility, and inspire confidence in your products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Benefits of Professional Booklet Distribution Services</h2>
                    <p className="text-base text-gray-600">Many businesses choose professional distribution companies to ensure campaigns are organized, efficient, and properly managed.</p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                            <h4 className="font-bold text-gray-900 mb-2">Better Area Targeting</h4>
                            <p className="text-sm text-gray-600">Professional distribution teams understand which locations produce stronger customer engagement based on business type and target audience.</p>
                            <p className="text-sm text-gray-600">This allows businesses to avoid wasting promotional materials in irrelevant areas while maximizing campaign performance.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                            <h4 className="font-bold text-gray-900 mb-2">Increased Brand Awareness</h4>
                            <p className="text-sm text-gray-600">Repeated exposure to marketing materials helps customers remember your brand. Even if customers do not respond immediately, they may contact your business later when they need your services.</p>
                            <p className="text-sm text-gray-600">Consistent booklet distribution helps businesses stay visible within local communities.</p>
                        </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                            <h4 className="font-bold text-gray-900 mb-2">Cost-Effective Local Marketing</h4>
                            <p className="text-sm text-gray-600">Compared to many advertising methods, door-to-door booklet distribution remains relatively affordable while delivering strong local reach.</p>
                            <p className="text-sm text-gray-600">Small and medium-sized businesses especially benefit because booklet campaigns allow them to compete with larger brands without massive advertising budgets.</p>
                        </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                            <h4 className="font-bold text-gray-900 mb-2">Supports Multi-Channel Marketing</h4>
                            <p className="text-sm text-gray-600">Booklet marketing works even better when combined with digital campaigns. Businesses can direct customers from printed materials to websites, social media pages, WhatsApp inquiries, or online booking systems.</p>
                            <p className="text-sm text-gray-600">This creates a stronger customer journey between offline and online platforms.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">How to Make Booklet Distribution Campaigns More Effective</h2>
                    <p className="text-base text-gray-600">To achieve the best results, businesses need more than simply printing and distributing booklets. Successful campaigns require strategic planning and high-quality presentation.</p>
                    <div className="space-y-4 mt-6">
                        <div className="p-4 bg-blue-50/50 rounded-xl">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Use Professional Designs</h4>
                            <p className="text-xs text-gray-600">Booklets should be visually appealing, easy to read, and professionally designed. Clear layouts and strong headlines improve customer attention.Booklets should be visually appealing, easy to read, and professionally designed. Clear layouts and strong headlines improve customer attention.</p>
                        </div>
                        <div className="p-4 bg-blue-50/50 rounded-xl">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Include Clear Calls-to-Action</h4>
                            <p className="text-xs text-gray-600">Guide customers to take the next step with a clear call-to-action. Encourage them to call, visit your website, scan a QR code, or book a consultation.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Choose the Right Distribution Areas</h2>
                    <p className="text-base text-gray-600">Targeting the right locations helps your marketing campaign reach the most relevant audience. Selecting the best neighborhoods increases visibility, response rates, and return on investment.</p>
                    <ul className="space-y-4 list-none p-0">
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Target the Right Audience:</strong> Distribute your flyers in communities where your ideal customers live, work, or frequently visit to maximize campaign effectiveness.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Focus on High-Potential Locations:</strong> Choose residential areas, commercial zones, or business districts that align with your products or services for better engagement.</li>
                        <li className="flex gap-4 items-start"><Zap className="text-blue-600 shrink-0 mt-1" /> <strong>Work with Distribution Experts:</strong> Professional flyer distribution companies can recommend the most suitable areas based on customer demographics, local insights, and campaign objectives.</li>
                    </ul>

                   <h2 className="text-2xl font-bold text-gray-900 pt-10">Conclusion</h2>
                    <p className="text-base text-gray-600">
                        Door-to-door booklet distribution continues to be one of the most effective marketing strategies for businesses looking to improve local visibility and customer engagement. While digital marketing is essential, physical promotional materials still offer unique advantages that help businesses connect directly with local audiences.
                    </p>
                    <p className="text-base text-gray-600">
                        By using professional distribution services, targeted locations, and high-quality booklet designs, businesses can increase brand awareness, generate leads, and strengthen customer trust.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase text-white">Reach More Local Customers With Targeted Booklet Distribution</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                Promote your business directly to nearby audiences and increase local brand awareness effectively across communities.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                                    <MousePointer2 size={16} aria-hidden="true" /> Contact Experts
                                </button>
                                <button onClick={openLinkedin} className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-950 transition-all text-sm flex items-center justify-center gap-2 shadow-lg" aria-label="Visit Max Lead LinkedIn Profile">
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Strategy Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all font-bold text-[10px]">Read Story <ArrowRightIcon size={12} aria-hidden="true" /></span>
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

const ArrowRightIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);