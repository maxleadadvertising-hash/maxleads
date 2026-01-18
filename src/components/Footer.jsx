import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Loader2,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // --- NEWSLETTER LOGIC ---
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
    formData.append("subject", "New Footer Newsletter Subscriber");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        setMessage("Subscribed successfully!");
        // Reset after 3 seconds
        setTimeout(() => {
            setStatus("idle");
            setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage("Error. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection failed.");
    }
  };

  return (
    <footer className="relative bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
      
      {/* --- STATIC BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* --- TOP SECTION (CTA & BRAND) --- */}
        <div className="grid lg:grid-cols-2 gap-12 border-b border-white/10 pb-16 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to scale your business?
            </h2>
            <p className="text-gray-400 max-w-md">
              Join 500+ businesses across UAE who trust MaxLead for their advertising needs.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="lg:flex lg:justify-end items-center">
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
              
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-green-500 text-sm transition-colors"
                />
                
                <button 
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors ${
                    status === 'success' ? 'bg-green-600 text-white' : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>

              {/* Feedback Message */}
              {message && (
                <p className={`text-xs mt-2 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-xl font-bold text-green-500">MaxLead.</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your premier partner for digital printing, flyer distribution, and integrated marketing solutions across the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/flyer' }, // Generic services page anchor if exists
                { name: 'Our Work', link: '/work' }, // Or whatever your portfolio route is
                { name: 'Contact', link: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link} className="hover:text-green-500 flex items-center gap-1 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Mapped to Specific Routes */}
          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/printing" className="hover:text-green-500 transition-colors">Printing Services</Link>
              </li>
              <li>
                <Link to="/flyer" className="hover:text-green-500 transition-colors">Flyer Distribution</Link>
              </li>
              <li>
                <Link to="/digital" className="hover:text-green-500 transition-colors">Digital Ads</Link>
              </li>
              <li>
                <Link to="/outdoor" className="hover:text-green-500 transition-colors">Outdoor Media</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 shrink-0" />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <a href="mailto:maxleadadvertising@gmail.com" className="hover:text-white transition-colors">info@maxleadadvertising.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+971522286401" className="hover:text-white transition-colors">+971 52 228 6401</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} MaxLead Advertising. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}