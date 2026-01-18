import { useState } from "react";
import { MessageCircle, Phone, X, MessageSquare } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your actual numbers
  const whatsappNumber = "971522286401";
  const phoneNumber = "+971522286401";
  const whatsappMessage = "Hello MaxLead, I would like to inquire about your services.";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* --- EXPANDED MENU --- */}
      <div
        className={`flex flex-col gap-3 transition-all duration-200 origin-bottom-right ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg group"
        >
          <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute right-16 bg-white text-gray-800 px-2 py-1 rounded shadow-sm whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg group"
        >
          <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute right-16 bg-white text-gray-800 px-2 py-1 rounded shadow-sm whitespace-nowrap">
            Call Us Now
          </span>
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* --- MAIN TOGGLE BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "bg-gray-800 rotate-90" : "bg-gradient-to-r from-green-500 to-emerald-600"
        }`}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageSquare className="w-8 h-8 text-white" />
        )}
        
        {/* Notification Dot (Static) */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
}