import { useState } from "react";
import { 
  ArrowUpRight, 
  Calendar, 
  User, 
  Sparkles, 
  Mail,
  ChevronRight,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

/* --- MOCK DATA --- */
const categories = ["All", "Marketing", "Growth", "Digital Ads", "Events"];

const blogs = [
  {
    id: 1,
    title: "How Flyer Distribution Drives Local Business Growth",
    description: "In a digital-first world, tangible marketing stands out. Learn how targeted flyer distribution can increase local visibility, foot traffic, and customer inquiries by over 30% in just one month.",
    author: "Sarah Jenkins",
    date: "Oct 1, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Marketing",
    featured: true
  },
  {
    id: 2,
    title: "Bulk SMS Marketing: Best Practices",
    description: "Discover proven strategies to run effective bulk SMS campaigns that boost engagement.",
    author: "David Lee",
    date: "Sep 22, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Growth",
    featured: false
  },
  {
    id: 3,
    title: "Print Advertising in the Digital Age",
    description: "Why flyers, posters, and banners remain powerful tools for brand awareness.",
    author: "MaxLead Team",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Marketing",
    featured: false
  },
  {
    id: 4,
    title: "Generating Leads with Google & Meta Ads",
    description: "A practical guide to running paid ad campaigns that deliver qualified leads.",
    author: "Alex Rivera",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Digital Ads",
    featured: false
  },
];

export default function BlogSectionPremium() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Newsletter Logic
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if(!email) return;

    setStatus("sending");
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);
    // ⚠️ REPLACE WITH YOUR ACTUAL ACCESS KEY ⚠️
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
    formData.append("subject", "New Newsletter Subscriber");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        setMessage("You've successfully subscribed!");
        setTimeout(() => {
            setStatus("idle");
            setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection failed.");
    }
  };

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden min-h-screen">
      
      {/* Decorative Background Elements (Static) */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-gray-50 z-0" />
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-green-100/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER & FILTERS --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm mb-6 text-green-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">The MaxLead Journal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Growth.</span>
            </h2>
          </div>

          <div className="w-full lg:w-auto">
              <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
                  {categories.map((cat) => (
                      <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold ${
                              activeCategory === cat 
                              ? "bg-gray-900 text-white shadow-md" 
                              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                      >
                          {cat}
                      </button>
                  ))}
               </div>
          </div>
        </div>

        {/* --- FEATURED HERO CARD --- */}
        <div className="mb-20">
            <Link to="/blog/1" className="block overflow-hidden rounded-[2.5rem] bg-white shadow-lg border border-gray-100 group">
              <div className="grid lg:grid-cols-12 min-h-[500px]">
                
                {/* Image Side (7 cols) */}
                <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-full">
                    <img 
                      src={blogs[0].image} 
                      alt={blogs[0].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-green-500" /> Featured
                      </span>
                    </div>
                </div>

                {/* Content Side (5 cols) */}
                <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
                    <div className="flex items-center gap-4 text-sm font-medium text-gray-400 mb-6">
                        <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">{blogs[0].category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{blogs[0].readTime}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-green-600 transition-colors">
                        {blogs[0].title}
                    </h3>

                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        {blogs[0].description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 border border-white shadow-sm flex items-center justify-center">
                                <User className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 leading-none">{blogs[0].author}</p>
                                <p className="text-xs text-gray-400 mt-1">{blogs[0].date}</p>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-900 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
              </div>
            </Link>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {blogs.slice(1).map((blog, idx) => (
            <div key={idx}>
              <Link to={`/blog/${blog.id}`} className="flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-gray-900 uppercase tracking-wide border border-gray-100">
                            {blog.category}
                        </span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                        {blog.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {blog.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        Read Story <ChevronRight className="w-4 h-4 text-green-500" />
                    </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* --- NEWSLETTER SECTION --- */}
        <div className="relative rounded-[3rem] bg-gray-900 overflow-hidden p-12 md:p-20 text-center">
            {/* Abstract Background (Static) */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-green-400" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Join our newsletter.
                </h2>
                <p className="text-gray-400 text-lg">
                    Get the latest marketing insights and strategies delivered directly to your inbox. No spam, just value.
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
                    <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-green-500 transition-all"
                    />
                    <button 
                      type="submit" 
                      disabled={status === 'sending' || status === 'success'}
                      className={`px-8 py-4 font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 ${
                        status === 'success' 
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-green-500 text-white hover:bg-green-400'
                      }`}
                    >
                        {status === 'sending' ? (
                          <><Loader2 className="w-4 h-4 animate-spin"/> Sending</>
                        ) : status === 'success' ? (
                          <><CheckCircle2 className="w-4 h-4"/> Subscribed</>
                        ) : (
                          "Subscribe"
                        )}
                    </button>
                </form>
                
                {message && (
                  <p className={`text-sm mt-4 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                    {message}
                  </p>
                )}

                <p className="text-xs text-gray-500 mt-6">
                    By subscribing, you agree to our Privacy Policy.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}