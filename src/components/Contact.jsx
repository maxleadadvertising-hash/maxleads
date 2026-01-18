import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  Loader2,
  ArrowRight,
  Smartphone,
  AlertCircle // Added for error state
} from 'lucide-react';

/* --- ANIMATION HELPER --- */
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

export default function Contact() {
  // State for controlled inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    service: '',
    message: '',
  });

  // State for submission status: idle, sending, success, error
  const [formStatus, setFormStatus] = useState('idle'); 
  const [result, setResult] = useState(""); // Stores specific message from API

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* --- WEB3FORMS SUBMISSION LOGIC --- */
  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('sending');
    setResult("Sending....");

    const formDataObj = new FormData(event.target);
    
    // ⚠️ REPLACE THIS WITH YOUR ACTUAL ACCESS KEY ⚠️
    formDataObj.append("access_key", "YOUR_ACCESS_KEY_HERE");   

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormStatus('success');
        
        // Reset form fields
        setFormData({ name: '', email: '', mobile: '', company: '', service: '', message: '' });
        
        // Reset status after 5 seconds to allow new submission
        setTimeout(() => {
          setFormStatus('idle');
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("Something went wrong. Please try again.");
      setFormStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "maxleadadvertising@gmail.com",
      sub: "We reply within 24 hours",
      color: "bg-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+971 522286401",
      sub: "Mon-Fri from 9am to 6pm",
      color: "bg-green-500",
      bg: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Visit HQ",
      value: "Dubai, UAE",
      sub: "UAE",
      color: "bg-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <>
      <section id="contact" className="relative min-h-screen pt-32 pb-20 bg-gray-50 overflow-hidden ">
        
        {/* --- DYNAMIC BACKGROUND --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* --- HEADER --- */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-green-600 shadow-sm mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Let's Chat
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                    Start a conversation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">MaxLead.</span>
                </h2>
                <p className="text-xl text-gray-500">
                    Ready to scale? Whether it's flyer distribution or digital ads, we are here to help you grow.
                </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* --- LEFT COLUMN: INFO CARDS --- */}
            <div className="lg:col-span-5 space-y-6">
                <FadeIn delay={100}>
                    <div className="grid gap-6">
                        {contactInfo.map((item, idx) => (
                            <div key={idx} className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-7 h-7 ${item.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-900 font-medium text-lg">{item.value}</p>
                                        <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Map / Decorator Card */}
                <FadeIn delay={200}>
                    <div className="relative h-64 w-full bg-gray-900 rounded-3xl overflow-hidden p-8 flex flex-col justify-end shadow-xl">
                        {/* Abstract Map Pattern */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 blur-[60px] opacity-40"></div>
                        
                        <div className="relative z-10">
                             <h4 className="text-white font-bold text-xl mb-2">Based in UAE</h4>
                             <p className="text-gray-400 text-sm">Serving clients across UAE</p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* --- RIGHT COLUMN: THE FORM --- */}
            <div className="lg:col-span-7">
                <FadeIn delay={300}>
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative Top Line - Green Gradient */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"></div>

                        <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Mobile Number */}
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Mobile Number</label>
                                    <div className="relative">
                                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                        <input
                                            type="tel"
                                            name="mobile"
                                            required
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="+971 50 123 4567"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Company</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Brand Inc."
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Service */}
                            <div className="space-y-2 group">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Interested Service</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full pl-4 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 appearance-none text-gray-600"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="flyer">Flyer Distribution</option>
                                        <option value="printing">Printing Services</option>
                                        <option value="digital">Digital Ads</option>
                                        <option value="outdoor">Outdoor Ads</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2 group">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project goals..."
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus === 'sending' || formStatus === 'success'}
                                className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                                    formStatus === 'success' 
                                    ? 'bg-green-500 text-white' 
                                    : formStatus === 'error'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-900 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30'
                                }`}
                            >
                                {formStatus === 'idle' && (
                                    <>Send Message <Send className="w-5 h-5" /></>
                                )}
                                {formStatus === 'sending' && (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                                )}
                                {formStatus === 'success' && (
                                    <><CheckCircle2 className="w-5 h-5" /> Message Sent!</>
                                )}
                                {formStatus === 'error' && (
                                    <><AlertCircle className="w-5 h-5" /> Failed. Try Again.</>
                                )}
                            </button>

                            {/* Result Text Feedback */}
                            {result && (
                                <div className={`text-center text-sm font-medium mt-2 ${formStatus === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                                    {result}
                                </div>
                            )}

                        </form>
                    </div>
                </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}