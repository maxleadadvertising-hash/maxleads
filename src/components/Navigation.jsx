import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Printer, 
  MapPin, 
  Globe, 
  Signpost, 
  ArrowRight
} from "lucide-react";
import logo from "../assests/logo.png"; 

const services = [
  { 
    name: "Door to Door Flyer Distribution", 
    path: "/flyer", 
    icon: Printer,
    desc: "High-quality offset & digital prints" 
  },
  { 
    name: "Printing Services", 
    path: "/printing", 
    icon: MapPin,
    desc: "Door-to-door targeted campaigns" 
  },
   { 
    name: "Digital Marketing", 
    path: "/digital", 
    icon: Globe,
    desc: "SEO, PPC & Social Media ads" 
  },
  { 
    name: "Outdoor Ads", 
    path: "/outdoor", 
    icon: Signpost,
    desc: "Billboards & transit advertising" 
  },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4">
      <nav 
        className={`
          w-full max-w-7xl transition-all duration-300 ease-in-out
          ${scrolled 
            ? "bg-black/80 backdrop-blur-xl border-gray-800 shadow-2xl py-3" 
            : "bg-black/60 backdrop-blur-lg border-transparent py-5"
          }
          border rounded-2xl px-6 flex justify-between items-center text-white relative
        `}
      >
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <div className="relative">
             {/* Changed bg-orange-500 to bg-green-500 */}
             <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <img 
               src={logo} 
               alt="MaxLead" 
               className="relative h-12 w-12 md:h-20 md:w-20 rounded-full object-cover border border-white/10" 
             />
          </div>
          {/* Changed text-orange-500 to text-green-500 */}
          <span className="font-bold text-xl tracking-tight">MaxLead<span className="text-green-500">.</span></span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => `text-sm font-medium hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-gray-300'}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm font-medium hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-gray-300'}`}>
            About
          </NavLink>
           <NavLink to="/blog" className={({isActive}) => `text-sm font-medium hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-gray-300'}`}>
           Blog
          </NavLink>


          {/* SERVICES MEGA DROPDOWN */}
          <div 
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-green-500 transition-colors py-2">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Content */}
            <div 
              className={`
                absolute top-full -left-20 mt-2 w-[600px] bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-left
                ${servicesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}
              `}
            >
                <div className="grid grid-cols-2 gap-2 p-3">
                  {services.map((item, idx) => (
                    <Link 
                      key={idx}
                      to={item.path}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      {/* Updated hover colors to green */}
                      <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors text-gray-400">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white flex items-center gap-1">
                          {item.name}
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="bg-gray-900/50 p-3 text-center border-t border-gray-800">
                  <Link to="/flyer" className="text-xs font-semibold text-green-500 hover:text-green-400">View All Services →</Link>
                </div>
            </div>
          </div>

          <NavLink to="/industries" className={({isActive}) => `text-sm font-medium hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-gray-300'}`}>
            Industries
          </NavLink>
          <NavLink to="/work" className={({isActive}) => `text-sm font-medium hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-gray-300'}`}>
            Clients
          </NavLink>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-green-600 hover:text-white transition-all shadow-lg hover:shadow-green-500/25"
          >
            Get a Quote
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`
          md:hidden fixed inset-x-4 top-24 rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-800 shadow-2xl overflow-hidden transition-all duration-300 origin-top
          ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <div className="p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">About Us</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Blog</NavLink>
          <div className="space-y-3">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Services</div>
            <div className="grid grid-cols-1 gap-2">
              {services.map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path} 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10"
                >
                  <item.icon className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-200">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/industries" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Industries</NavLink>
          <NavLink to="/work" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Clients</NavLink>
          
          <Link 
            to="/contact" 
            onClick={() => setMenuOpen(false)}
            className="w-full py-4 bg-green-600 text-white font-bold rounded-xl text-center mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}