import React, { useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import { Target, MapPin, Clock, User, CheckCircle2, LayoutGrid, MessageSquare, ArrowRight, Zap, BarChart3, FileText, TrendingUp, Sparkles } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "../../ScrollToTop";
import Whatsapp from '../whatsapp';

/* --- FULL DATA ARRAYS UNCHANGED --- */
const blogs = [
  { id: 1, title: "Why UAE Businesses Rely on Flyer Distribution", description: "In an era of digital noise, physical flyers cut through the clutter. Learn why door-to-door distribution remains a top ROI channel in Dubai.", author: "MaxLead Team", date: "Feb 24, 2026", readTime: "8 min read", image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Insights", "ROI"], link: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { id: 2, title: " How to Choose the Best Digital Marketing Agency in UAE 2026", description: "A comprehensive guide to identifying a performance-focused partner that converts clicks into revenue in the competitive UAE landscape.", author: "Strategy Team", date: "Feb 24, 2026", readTime: "9 min read", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Agency", "Digital"], link: "/blog/best-digital-marketing-agency-uae/" },
  { id: 3, title: "Dos and Don'ts of Flyer Distribution in UAE", description: "Avoid common pitfalls. Learn the expert rules for successful door to door flyer distribution in Dubai and the wider Emirates.", author: "Operations Lead", date: "Feb 24, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/6565757/pexels-photo-6565757.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Expert Tips", "Compliance"], link: "/blog/dos-and-donts-of-flyer-distribution-in-uae/" },
  { id: 4, title: "Ultimate Guide to Flyer Distribution Strategies in Dubai", description: "Discover 10 proven ways to get results. Learn how hyper-local targeting and multi-touch strategies build brand dominance.", author: "MaxLead Team", date: "Feb 24, 2026", readTime: "10 min read", image: "https://images.pexels.com/photos/7682345/pexels-photo-7682345.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Strategy", "Dominance"], link: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { id: 5, title: "Future Trends in Flyer Distribution in UAE", description: "How technology and AI are shaping the future of offline marketing. See what’s coming next in the 2026 UAE market.", author: "Innovation Team", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Future", "AI"], link: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { id: 6, title: "Best Locations for Flyer Distribution in the UAE", description: "Identify high-ROI zones from villa communities like Arabian Ranches to high-density apartment clusters in Dubai Marina.", author: "Market Researcher", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/3767172/pexels-photo-3767172.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Locations", "Demographics"], link: "/blog/best-locations-for-flyer-distribution-in-the-uae/" },
  { id: 7, title: "Marketing with Max Lead Advertising", description: "Our story of transformation: combining the reliability of offline marketing with modern data precision since 2015.", author: "CEO Office", date: "Feb 24, 2026", readTime: "10 min read", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["MaxLead", "History"], link: "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" },
  { id: 8, title: "What is the Role of a Flyer Distributor?", description: "More than just a simple job. Learn how professional distributors act as brand ambassadors and the final bridge to your customer.", author: "HR Director", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/7787200/pexels-photo-7787200.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Operations", "Brand"], link: "/blog/what-is-the-role-of-a-flyer-distributor/" },
  { id: 9, title: "How to Increase Sales with Flyer Distribution: 10 Proven Tips", description: "Unlock growth with these 10 proven tips. Learn how to craft irresistible offers and use timing to drive immediate revenue.", author: "Sales Head", date: "Feb 24, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/5849581/pexels-photo-5849581.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Sales", "Growth"], link: "/blog/how-to-increase-sales-with-flyer-distribution/" },
  { id: 10, title: "Online and Offline Strategies for Flyer Success", description: "Learn how integrating flyers with QR codes and social media targeting can double your conversion rates.", author: "Marketing Strategist", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Integration", "QR Codes"], link: "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/" },
  { id: 11, title: "Local Advertising with Door Hangers", description: "The 100% attention tool. Discover why door hangers are the most powerful local marketing weapon for neighborhood businesses.", author: "MaxLead Team", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Local Ads", "Neighborhood"], link: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" },
  { id: 12, title: "Social Media Marketing Services Cost", description: "Understanding the pricing factors and investment required for social media growth in the UAE market for 2026.", author: "MaxLead Team", date: "Feb 24, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Pricing", "Digital"], link: "/blog/social-media-marketing-services-cost-uae/" },
  { id: 13, title: "Affordable Digital Marketing Packages for Startups", description: "Discover cost-effective marketing bundles designed to help UAE startups scale visibility and leads without overextending their budget.", author: "Growth Strategy Team", date: "Feb 28, 2026", readTime: "10 min read", image: "https://images.pexels.com/photos/5900226/pexels-photo-5900226.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Startups", "Packages"], link: "/blog/affordable-digital-marketing-packages-uae/" },
  { id: 14, title: "Best flyer-distribution", description: "Discover cost-effective marketing bundles designed to help UAE startups scale visibility and leads without overextending their budget.", author: "Growth Strategy Team", date: "Feb 28, 2026", readTime: "10 min read", image: "https://images.pexels.com/photos/6565761/pexels-photo-6565761.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Startups", "Packages"], link: "/blog/best-flyer-distribution-services-uae/" },
  { id: 15, title: "Best Leaflet Distribution Companies in UAE", description: "A 2026 guide to finding reliable leaflet partners that guarantee GPS-tracked delivery and high-impact area coverage across Dubai.", author: "MaxLead Strategy Team", date: "March 7, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Leaflet Distribution", "Dubai 2026"], link: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { id: 16, title: "The Psychology Behind Flyers: Why Physical Marketing Still Works", description: "Explore the neuro-marketing aspect of touch and physical presence. Learn why tangible ads trigger stronger emotional responses in Dubai consumers.", author: "MaxLead Team", date: "March 6, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/6937946/pexels-photo-6937946.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Psychology", "Insights"], link: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" },
  { id: 17, title: "7 Creative Flyer Distribution Ideas That Actually Work in Dubai", description: "Stop being ignored. Discover innovative ways to distribute flyers, from mystery door drops to QR code treasure hunts in residential hubs.", author: "Creative Team", date: "March 6, 2026", readTime: "10 min read", image: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Creative Strategy", "ROI"], link: "/blog/creative-flyer-distribution-ideas-that-work-in-dubai/" },
  { id: 18, title: "Measuring ROI on Physical Marketing Campaigns", description: "Learn how to accurately track the performance of your offline campaigns using promo codes, dedicated landing pages, and call-tracking.", author: "Data Analytics Lead", date: "March 8, 2026", readTime: "9 min read", image: "https://images.pexels.com/photos/7970812/pexels-photo-7970812.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Data", "ROI Tracking"], link: "/blog/measuring-roi-on-physical-marketing-campaigns/" },
  { id: 19, title: "How to Choose the Right Digital Marketing Agency for Your Business", description: "How to choose a reliable digital marketing agency for small businesses.", author: "Production Specialist", date: "March 12, 2026", readTime: "7 min read", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Printing", "Branding"], link: "/blog/best-digital-marketing-agency-uae/" },
  { id: 20, title: "Best Flyer Distribution Company Near You | Max Lead UAE", description: "How to choose a flyer distribution company near me.", author: "Creative Director", date: "March 15, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Design", "Conversion"], link: "/blog/flyer-distribution-company-near-me/" },
  { id: 21, title: "Pamphlets vs Flyers UAE: Which One Brings More Customers?", description: "Did you know that over 80% of consumers are more likely to respond to a well-designed printed advertisement.", author: "Creative Director", date: "March 15, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/5900226/pexels-photo-5900226.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Design", "Conversion"], link: "/blog/flyer-vs-pamphlet-distribution-marketing-which-strategy-brings-more-customers/" },
  { id: 22, title: "Affordable Flyer Distribution – Boost Sales with Cost-Effective Marketing", description: "Drive more traffic & sales with affordable flyer distribution services. Targeted door-to-door delivery, competitive pricing & proven results. Get started with a free quote!", author: "Marketing Team", date: "April 02, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/20257683/pexels-photo-20257683.jpeg", tags: ["Design", "Conversion"], link: "/blog/7-tips-affordable-flyer-distribution-company/" }, 
  { id: 23, title: "Flyer Distribution vs Digital Marketing in UAE 2026 | Max Lead Advertising", description: "Flyers Distribution vs Digital Marketing? Find the best strategy for your UAE business and boost results today with expert solutions from Max Lead Advertising.", author: "Marketing Team", date: "April 02, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg", tags: ["Design", "Conversion"], link: "/blog/flyer-distribution-vs-digital-marketing-in-the-uae/" }, 
  { id: 24, title: "Best Digital Printing Company in Dubai (2026) | Ultimate Guide", description: "Stand out in Dubai’s competitive market in 2026. Find the best digital printing company with expert tips, high-quality solutions, and reliable printing partners.", author: "Sri Ram", date: "April 07, 2026", readTime: "12 min read", image: "https://images.pexels.com/photos/19843566/pexels-photo-19843566.jpeg", tags: ["Design", "Conversion"], link: "/blog/best-digital-printing-company-dubai-2026/" }, 
  
  { id: 25, title: "The Future of Offline Marketing in UAE: Trends for 2026", description: "Explore how hyper-local targeting and sensory branding are revolutionizing offline marketing. Stay ahead with the latest trends in flyer and pamphlet distribution.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Future Trends", "Innovation"], link: "/blog/future-offline-marketing-trends-uae-2026/" },
   { id: 26, title: "Effective Flyer Distribution Strategies UAE | Max Lead Advertising", description: "Boost your business in the UAE with effective flyer distribution strategies. Max Lead Advertising offers targeted campaigns to increase reach, leads, and sales.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg", tags: ["Future Trends", "Innovation"], link: "/blog/uae-flyer-distribution-strategies-for-business-growth/" },
    { id: 27, title: "Best Digital Printing Services in UAE | Max Lead Ads", description: "Find the best digital printing services in the UAE. High-quality printing across all Emirates. Contact Max Lead Advertising for fast and reliable service.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/7651739/pexels-photo-7651739.jpeg", tags: ["Future Trends", "Innovation"], link: "/blog/Best-Digital-Printing-Services/" },
     { id: 28, title: "Best Printing Services Near Me | Max Lead Advertising", description: "Searching for printing services near me in Dubai? Get affordable, high-quality prints with fast turnaround from trusted local experts today.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/6937946/pexels-photo-6937946.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Future Trends", "Innovation"], link: "/blog/Best-Printing-Services-NearMe/" },
      { id: 29, title: "Flyer Distribution Trends in UAE for Business Growth", description: "Explore modern flyer distribution strategies in the UAE. Improve targeting, design, and campaign tracking to reach more customers and grow your business.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/5900226/pexels-photo-5900226.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Future Trends", "Innovation"], link: "/blog/flyer-distribution-trends-uae-business-guide/" },
       { id: 30, title: "Social Media Marketing Company UAE | Growth Strategies", description: "Boost your UAE business with expert strategies from a social media marketing agency in the UAE. Drive engagement, leads, and growth across all platforms.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg", tags: ["Future Trends", "Innovation"], link: "/blog/social-media-marketing-company-in-dubai-uae/" },
         { id: 31, title: " Small Space Scent Diffuser Guide | Choose the Best One", description: " Discover how to choose the best scent diffuser for small spaces. Learn tips on selecting the right scent diffuser machine and aroma diffuser machine UAE.", author: "MaxLead Strategy Team", date: "April 14, 2026", readTime: "11 min read", image: "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg", tags: ["Future Trends", "Innovation"], link: "/blog/Small-Space-Scent-Diffuser/" },
  

];

const categories = [
  { name: "All Blogs", icon: LayoutGrid, path: "/blog/" },
  { name: "Why UAE Flyer Distribution", icon: MapPin, path: "/blog/why-uae-businesses-rely-on-flyer-distribution/" },
  { name: "Best Digital Agency Guide", icon: Target, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Dos and Don'ts", icon: CheckCircle2, path: "/blog/dos-and-donts-of-flyer-distribution-in-uae/" },
  { name: "Ultimate Strategy Guide", icon: BarChart3, path: "/blog/ultimate-guide-to-flyer-distribution-strategies-in-dubai/" },
  { name: "Future Marketing Trends", icon: Zap, path: "/blog/future-trends-in-flyer-distribution-what-to-expect-in-the-uae-market/" },
  { name: "Best UAE Locations", icon: MapPin, path: "/blog/best-locations-for-flyer-distribution-in-the-uae/" },
  { name: "MaxLead Transformation", icon: TrendingUp, path: "/blog/transforming-marketing-with-max-lead-advertising-your-trusted-distribution-company/" },
  { name: "Distributor Role Guide", icon: User, path: "/blog/what-is-the-role-of-a-flyer-distributor/" },
  { name: "How to Increase Sales", icon: FileText, path: "/blog/how-to-increase-sales-with-flyer-distribution/" },
  { name: "Online & Offline Success", icon: MessageSquare, path: "/blog/integrating-online-and-offline-strategies-for-flyer-distribution/" },
  { name: "Online & Offline Success", icon: MessageSquare, path: "/blog/unlock-the-power-of-local-advertising-with-door-hanger-marketing/" },
  { name: "Social Media Cost", icon: Zap, path: "/blog/social-media-marketing-services-cost-uae/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/affordable-digital-marketing-packages-uae/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/best-flyer-distribution-services-uae/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/best-leaflet-distribution-companies-in-uae/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/the-psychology-behind-flyers-why-physical-marketing-still-works/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/creative-flyer-distribution-ideas-that-work-in-dubai/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/measuring-roi-on-physical-marketing-campaigns/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/best-digital-marketing-agency-uae/" },
  { name: "Startup Packages", icon: Zap, path: "/blog/flyer-distribution-company-near-me/" },
  { name: "Flyer Distribution UAE", icon: MapPin, path: "/blog/flyer-vs-pamphlet-distribution-marketing-which-strategy-brings-more-customers/" },
  { name: "Flyer Distribution UAE", icon: MapPin, path: "/blog/7-tips-affordable-flyer-distribution-company/" },
  { name: "Flyers Distribution vs Digital Marketing?", icon: MapPin, path: "/blog/flyer-distribution-vs-digital-marketing-in-the-uae/" },
  { name: "Best Digital Printing Company in Dubai", icon: MapPin, path: "/blog/best-digital-printing-company-dubai-2026/" },
  { name: "Effective Flyer Distribution Strategies UAE", icon: MapPin, path: "/blog/uae-flyer-distribution-strategies-for-business-growth/" },
  { name: "Social Media Marketing Company UAE | Growth Strategies", icon: MapPin, path: "/blog/social-media-marketing-company-in-dubai-uae/" },
];

/* --- HARD FIX: REMOVED ALL COMPLICATED ANIMATIONS --- */
const StaticFadeIn = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Kill once it's seen
      }
    }, { threshold: 0.01 }); // Trigger instantly

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 300px' }}
    >
      {children}
    </div>
  );
};

export default function BlogSectionModern() {
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({ 
      lerp: 0.1, 
      smoothWheel: true,
      syncTouch: true // Better for mobile lag
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

 useEffect(() => {
    // ADDED: Meta Tags Logic
    document.title = "Blog | Digital Advertising & Distribution Tips in UAE";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Explore MaxLead's blog for expert tips on flyer distribution, leaflet distribution, digital marketing, printing & outdoor advertising in the UAE.");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", "https://www.maxleadadvertising.com/blog/");
  }, []);
  
   return (
    <div className="bg-white min-h-screen">
      <Whatsapp />
      <ScrollToTop />
      <Navigation />

      <main className="overflow-x-hidden">
        {/* --- HERO --- */}
        <section className="relative pt-32 pb-12 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold mb-4">
              <Sparkles size={12} /> <span>MaxLead Strategic Insights 2026</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4">
              The Future of <span className="text-blue-600 text-balance">Advertising</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
              21 strategic guides to dominate the UAE market through integrated marketing solutions.
            </p>
          </div>
        </section>

        {/* --- CATEGORIES (Sticky) --- */}
        <section className="py-4 bg-white border-b border-gray-50 sticky top-[70px] z-30 shadow-sm overflow-x-auto no-scrollbar">
          <div className="max-w-6xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 px-4">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => navigate(cat.path)} 
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap"
              >
                <cat.icon size={14} />
                <span className="font-bold text-[9px] uppercase tracking-wider">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* --- BLOGS (Optimized Grid) --- */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <StaticFadeIn key={blog.id}>
                <div 
                  onClick={() => navigate(blog.link)}
                  className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-44 md:h-52 overflow-hidden relative bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      loading="lazy" 
                      className="w-full h-full object-cover transform-gpu" // GPU forced
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1 pr-10">
                      {blog.tags.map((tag, i) => (
                        <span key={i} className="bg-white/95 px-2 py-0.5 rounded text-[8px] font-black uppercase text-gray-900">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-gray-400 text-[10px] mb-3 font-bold uppercase">
                      <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-6 line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>
                    <div className="mt-auto flex items-center gap-1 font-bold text-blue-600 text-[11px] uppercase tracking-wider">
                      Read Full Article <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </StaticFadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}