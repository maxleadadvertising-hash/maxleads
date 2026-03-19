import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target,Clock, User, LayoutGrid, FileText, MessageSquare, MousePointer2,Globe, Users, Zap} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* Keywords: 
  best marketing agency for small business, choose digital marketing agency, 
  digital marketing services, social media marketing services 
*/

const blogs = [
  {
    id: 3,
    title: "How to Choose the Right Digital Marketing Agency for Your Business",
    description: "Find the best digital marketing agency for your business with simple and effective tips. Learn how to evaluate services, budget, performance, and choose the right partner for long-term success.",
    author: "MaxLead Strategy Team",
    date: "March 19, 2026",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg",
    tags: ["Agency Guide", "Digital Strategy"],
    link: "/blog/best-digital-marketing-agency-uae/"
  },
  {
    id: 1,
    title: "2026 Guide to Leaflet Distribution Companies in Dubai",
    description: "Find the best leaflet distribution companies in Dubai for 2026. Reach your target audience, increase brand awareness, and grow your business with targeted flyer campaigns.",
    author: "MaxLead Strategy Team",
    date: "March 9, 2026",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Leaflet Distribution"],
    link: "/blog/best-leaflet-distribution-companies-in-uae/"
  },
  {
    id: 2,
    title: "The Psychology Behind Flyers",
    description: "Discover why physical marketing still works and how touch triggers emotional responses that digital ads can't match.",
    author: "MaxLead Team",
    date: "March 6, 2026",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Psychology"],
    link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/"
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

export default function DigitalMarketingAgencyBlog() {
  const activePost = blogs[0];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleCategoryClick = (path) => { window.location.href = path; };
  const openWhatsapp = () => { window.open("https://wa.me/+971557222605", "_blank"); };
  const goToContact = () => { window.location.href = "/contact/"; };

  return (
    <>
      <Helmet>
        <title>How to Choose the Right Digital Marketing Agency for Your Business</title>
        <meta name="description" content="Find the best digital marketing agency for your business with simple and effective tips. Learn how to evaluate services, budget, performance, and choose the right partner for long-term success." />
        <link rel="canonical" href="https://www.maxleadadvertising.com/blog/best-digital-marketing-agency-uae/" />
      </Helmet>
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="bg-white min-h-screen">
        
        {/* --- HERO SECTION (H1) --- */}
        <section className="relative pt-32 pb-16 px-6 bg-[#fcfcfc] border-b border-gray-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-6 mt-16">
                        <Globe className="w-3 h-3" />
                        <span>MaxLead Performance Guide 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                        How to choose a reliable <span className="text-blue-600">digital marketing agency</span> for small businesses
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {activePost.readTime}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4" /> {activePost.author}</span>
                    </div>
                </FadeIn>
            </div>
        </section>

        {/* --- CATEGORY SELECTOR --- */}
        <section className="py-8 px-6 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <button 
                  onClick={() => handleCategoryClick(cat.path)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
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
                    
                    <div className="mb-12">
                        <p className="text-base text-gray-600">
                        Choosing the right digital marketing agency is very important for small businesses that want to grow online. A reliable agency can help you attract more customers, improve your brand visibility, and increase your sales through effective strategies. However, with so many agencies offering different services, it can be confusing to pick the right one.
                        </p>
                        <p className="text-base text-gray-600">
                        Before making a decision, it’s important to understand your business goals and what you expect from digital marketing. Look for an agency that has experience working with small businesses and a proven track record of success. Check their past work, client reviews, and the range of services they offer, such as social media marketing, SEO, and paid advertising.
                        </p>
                        <p className="text-base text-gray-600">
                        Good communication and transparency are also key factors. A trustworthy agency will keep you informed and provide regular updates. By choosing the right partner, you can build a strong online presence and achieve long-term growth.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Know Your Business Goals</h2>
                    <p className="text-base text-gray-600">Before you start searching, understand what you need:</p>
                    
                    <div className="grid md:grid-cols-1 gap-6 mt-8">
                        {[
                            { t: "Do you want more leads?", d: "Generating more leads helps you connect with people who are genuinely interested in your products or services. It builds a strong pipeline of potential customers and increases your chances of future sales and long-term growth." },
                            { t: "Do you want more website visitors?", d: "Increasing website traffic allows more people to discover your business online and learn about what you offer. It boosts brand awareness, improves engagement, and creates more opportunities to convert visitors into customers." },
                            { t: "Do you want to increase sales?", d: "Increasing sales focuses on converting your audience into paying customers through effective and targeted marketing strategies. This not only improves revenue but also strengthens your business and supports sustainable growth." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                                <h4 className="font-bold text-gray-900 mb-2">{item.t}</h4>
                                <p className="text-sm text-gray-600">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Choose an Agency with Small Business Experience</h2>
                    <p className="text-base text-gray-600">Small businesses have different needs compared to big companies. A good agency should:</p>
                    
                    <div className="space-y-6 mt-8">
                        {[
                            { t: "Understand your budget", icon: Zap, d: "Before choosing an agency, decide how much you are willing to spend on marketing. A clear budget helps you plan better and choose services that fit your needs. It also prevents overspending and ensures smarter decisions." },
                            { t: "Offer cost-effective solutions", icon: Target, d: "Choose an agency that delivers quality services within your budget. Cost-effective solutions focus on getting the best results without unnecessary expenses. This helps you maximize your return on investment." },
                            { t: "Have experience working with similar businesses", icon: Users, d: "An agency with industry experience understands your audience and market better. They can create more effective strategies based on past success. This increases your chances of achieving better results." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 hover:bg-blue-50/50 rounded-xl transition-colors">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <feature.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{feature.t}</h4>
                                    <p className="text-sm text-gray-600">{feature.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Choose the Right Services for Your Business Growth</h2>
                    <p className="text-base text-gray-600">Before choosing a digital marketing agency, make sure they offer the services that match your business needs and goals. Not every business requires all services, so it’s important to focus on what will bring the best results for you.</p>
                    <p className="text-base text-gray-600 mt-4">Look for key services such as social media marketing to build brand awareness and engage with your audience, Google Ads to generate quick and targeted traffic, SEO (Search Engine Optimization) to improve your website’s visibility on search engines, and content marketing to attract and educate potential customers.</p>
                    
                    <ul className="space-y-6 mt-8 list-none p-0">
                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Social media marketing</h4>
                                <p className="text-sm text-gray-600">Social media marketing helps you connect with your audience, build brand awareness, and increase engagement across platforms like Instagram and Facebook. It’s a powerful way to grow your online presence and attract potential customers.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Google Ads</h4>
                                <p className="text-sm text-gray-600">Google Ads allows you to reach customers instantly through targeted paid campaigns. It drives quick traffic to your website and helps generate leads or sales by showing your business to people actively searching for your services.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                            <div>
                                <h4 className="font-bold text-gray-900">SEO (Search Engine Optimization)</h4>
                                <p className="text-sm text-gray-600">SEO improves your website’s visibility on search engines like Google. It helps your business rank higher in search results, bringing in organic traffic and long-term growth without relying on paid ads.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">4</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Content marketing</h4>
                                <p className="text-sm text-gray-600">Content marketing focuses on creating valuable and relevant content to attract and engage your audience. It builds trust, educates customers, and supports your overall marketing strategy for better results.</p>
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Track Performance with Clear Results & Reports</h2>
                    <p className="text-base text-gray-600">A reliable digital marketing agency should always be transparent about performance and progress. Clear reporting helps you understand how your campaigns are performing and whether your investment is delivering real value.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                            <h5 className="font-bold text-blue-900 mb-2 text-sm">How will you measure results?</h5>
                            <p className="text-[10px] text-blue-800">Ask how the agency tracks success, such as leads, website traffic, or conversions. Clear metrics help you understand what’s working.</p>
                        </div>
                        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                            <h5 className="font-bold text-blue-900 mb-2 text-sm">Will I get regular reports?</h5>
                            <p className="text-[10px] text-blue-800">Regular reports keep you updated on campaign performance and progress. They ensure transparency and keep you informed.</p>
                        </div>
                        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                            <h5 className="font-bold text-blue-900 mb-2 text-sm">What results can I expect?</h5>
                            <p className="text-[10px] text-blue-800">Set realistic expectations about growth, leads, and sales outcomes. Knowing expected results helps you plan better.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-6">Choose a Trusted Partner for Long-Term Growth</h2>
                    <p className="text-base text-gray-600">A great digital marketing agency is more than just a service provider—it acts as a partner invested in your success. The right agency works closely with you to understand your goals and supports your business growth every step of the way.</p>
                    
                    <div className="grid md:grid-cols-1 gap-4 mt-6">
                      {[
                        { t: "Understands your business", d: "A reliable agency takes time to learn about your brand, target audience, and goals. This helps them create strategies that truly match your business needs." },
                        { t: "Helps you grow", d: "The right partner focuses on long-term success, not just short-term results. They use effective strategies to increase your visibility, leads, and sales." },
                        { t: "Gives the right advice", d: "An experienced agency provides honest and expert guidance for better decisions. Their insights help you avoid mistakes and achieve better marketing outcomes." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 border-l-4 border-blue-600 bg-gray-50 rounded-r-xl">
                          <div>
                            <h4 className="font-bold text-gray-900">{item.t}</h4>
                            <p className="text-sm text-gray-600">{item.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 pt-10">Conclusion</h2>
                    <p className="text-base text-gray-600">
                    Choosing a reliable digital marketing agency can make a big difference for your small business. Focus on experience, transparency, and communication. If you are looking for trusted support, contact the experts at <a href="/contact/" className="text-blue-600 font-bold hover:underline">Max Lead Advertising</a>. We help small businesses grow with simple and effective digital marketing strategies. Start growing your business today with the right team.
                    </p>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[3rem] mt-12 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">Ready to Scale Online?</h3>
                            <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto font-medium">
                                If you want to grow your business with a trusted <a href="/contact/" className="text-white underline font-bold">digital marketing agency</a>, contact our experts to discuss your growth strategy.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={goToContact} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm flex items-center gap-2">
                                    <MousePointer2 size={16} /> Contact Our Experts
                                </button>
                                <button onClick={openWhatsapp} className="bg-blue-500/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500/40 transition-all text-sm flex items-center gap-2">
                                    <MessageSquare size={16} /> WhatsApp Now
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
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">Growth Intelligence Hub</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.filter(b => b.id !== activePost.id).slice(0, 3).map((blog) => (
                            <a key={blog.id} href={blog.link} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full text-blue-600 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{blog.title}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{blog.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={12}/> {blog.readTime}</span>
                                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read Story <ArrowRight size={12}/></span>
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

const ArrowRight = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);