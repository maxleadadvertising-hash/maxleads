import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";

// Importing from current directory
import Navigation from "./Navigation"; 
import Footer from "./Footer";

/* --- LOCAL ANIMATION COMPONENT --- */
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

export default function ThankYou() {
  const whatsappLink = "https://wa.me/971522286401?text=Hi Max Lead, I just submitted a form on your website.";

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <CheckCircle className="w-24 h-24 text-green-600 relative z-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Your message has been received successfully. One of our experts from <span className="font-bold text-green-600">Max Lead Advertising</span> will get back to you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black transition-all transform hover:-translate-y-1"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}