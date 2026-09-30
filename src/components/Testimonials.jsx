import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    company: "Urban Mart",
    role: "Business Owner",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Max Lead Advertising handled our flyer printing and Door to Door Flyer Distribution in Dubai perfectly. Their team was professional, the distribution was well targeted, and we noticed a clear increase in walk-in customers within just a week.",
    rating: 5,
  },
  {
    name: "Anitha Sharma",
    company: "GreenLeaf Clinic",
    role: "Marketing Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Max Lead Advertising, a trusted Leaflet Distribution Company, delivered excellent results for our campaign across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Al Ain, and Umm Al Quwain. Their targeted distribution helped us reach the right customers, resulting in more enquiries and appointment bookings.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    company: "Prime Real Estate",
    role: "Founder",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Max Lead Advertising, a trusted Brochures Distribution Company in Dubai, Sharjah, and Ajman, helped us promote our property launch with targeted brochure distribution and digital advertising. The campaign generated quality leads, increased local visibility, and helped us reach the right audience.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    company: "StyleStreet Boutique",
    role: "Store Owner",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "From printing banners to Door Hangers Distribution and outdoor promotions, Max Lead Advertising delivered everything on time with excellent quality. Their professional service across Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, Al Ain, and Umm Al Quwain helped make our store opening a great success.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    company: "EduGrow Academy",
    role: "Director",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Max Lead Advertising’s Door to Door Flyer Distribution Services, combined with targeted digital advertising, helped us reach more customers across Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, Al Ain, and Umm Al Quwain. The campaign increased enquiries, improved local visibility, and helped us generate more qualified leads. Their reporting and communication were clear and professional throughout.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    company: "HealthPlus Pharmacy",
    role: "Operations Head",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "We partnered with Max Lead Advertising, a trusted Pamphlet Distribution Company, for targeted flyer distribution and local promotions across Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, Al Ain, and Umm Al Quwain. The campaign increased our local reach, generated more customer enquiries, and improved our response rate. Their team delivered excellent coverage and professional service throughout the campaign.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    // Changed hover border to green
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-green-400/50 shadow-md hover:shadow-xl transition-all duration-300 w-full">
      {/* Changed quote icon color to green */}
      <div className="absolute top-6 right-6 text-green-400/10 group-hover:text-green-400/20 transition-colors">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-gray-100"
          />
          <div>
            <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Changed blobs to green/emerald */}
          <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            {/* Changed text to green */}
            <span className="text-green-600 font-bold text-sm uppercase tracking-wide">
              Client Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Businesses</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how MaxLead helps brands across the UAE grow their visibility and revenue.
          </p>
        </div>

        {/* --- SCROLLING COLUMNS --- */}
        <div className="relative h-[600px] overflow-hidden mask-fade-vertical">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Column 1 (Scrolls Up) */}
            <div className="relative h-full overflow-hidden">
                <div className="flex flex-col gap-6 animate-scroll-up">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`c1-${i}`} testimonial={t} />
                    ))}
                </div>
            </div>

            {/* Column 2 (Scrolls Down) - Hidden on mobile */}
            <div className="hidden md:block relative h-full overflow-hidden">
                <div className="flex flex-col gap-6 animate-scroll-down">
                    {[...testimonials, ...testimonials].reverse().map((t, i) => (
                        <TestimonialCard key={`c2-${i}`} testimonial={t} />
                    ))}
                </div>
            </div>

            {/* Column 3 (Scrolls Up) - Hidden on tablet */}
            <div className="hidden lg:block relative h-full overflow-hidden">
                <div className="flex flex-col gap-6 animate-scroll-up" style={{ animationDelay: '-10s' }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`c3-${i}`} testimonial={t} />
                    ))}
                </div>
            </div>

          </div>
          
          {/* Top/Bottom Fade Overlay */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />
        </div>

        {/* STATS BAR */}
        <div className="mt-20 border-t border-gray-200 pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { label: "Client Satisfaction", val: "98%" },
                    { label: "Campaigns Delivered", val: "500+" },
                    { label: "Repeat Business", val: "85%" },
                    { label: "Years of Experience", val: "10+" }
                ].map((stat, i) => (
                    <div key={i}>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.val}</h3>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
        }
        .animate-scroll-up {
            animation: scrollUp 40s linear infinite;
        }
        .animate-scroll-down {
            animation: scrollDown 40s linear infinite;
        }
        /* Pause on Hover */
        .animate-scroll-up:hover, 
        .animate-scroll-down:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}