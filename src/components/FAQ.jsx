import { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does MaxLead Advertising offer?',
    answer:
      'We provide complete advertising solutions including flyer printing and distribution, bulk SMS marketing, digital advertising (Google & Meta Ads), social media marketing, and outdoor advertising such as kiosks and brand activations.',
  },
  {
    question: 'How long does it take to launch an advertising campaign?',
    answer:
      'Campaign timelines vary by service. Flyer distribution and SMS campaigns can begin within a few days, while digital advertising campaigns typically take 1–2 weeks for planning and setup.',
  },
  {
    question: 'Can you target specific locations or audiences?',
    answer:
      'Yes. We offer area-wise flyer distribution, targeted SMS campaigns, location-based digital ads, and region-specific outdoor advertising to reach the right audience effectively.',
  },
  {
    question: 'Do you handle both printing and flyer distribution?',
    answer:
      'Absolutely. We manage the entire process—from designing and printing flyers, posters, and banners to door-to-door and targeted distribution—so you don’t need multiple vendors.',
  },
  {
    question: 'Is SMS marketing effective for promotions and leads?',
    answer:
      'Yes. SMS marketing has very high open rates and works extremely well for promotions, offers, events, and lead generation when combined with proper targeting.',
  },
  {
    question: 'Do you provide performance reports?',
    answer:
      'Yes. We provide clear reporting based on the campaign type, including distribution coverage, SMS delivery reports, and digital advertising performance metrics.',
  },
  {
    question: 'Can you manage both online and offline advertising together?',
    answer:
      'Yes. MaxLead specializes in integrated campaigns that combine offline advertising (print, flyers, outdoor) with online channels (SMS and digital ads) for better results.',
  },
  {
    question: 'How does pricing and payment work?',
    answer:
      'Pricing depends on campaign scope, volume, and duration. We follow transparent pricing and discuss all costs and payment options clearly during consultation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Floating blobs - changed to green */}
      <div
        className="absolute w-72 h-72 bg-green-300/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)` }}
      />
      <div
        className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{ transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)` }}
      />

      {/* Header */}
      <div className="text-center mb-20 px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Frequently Asked{' '}
          {/* Changed to green gradient */}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Answers to common questions about our advertising services and campaign execution.
        </p>
      </div>

      {/* FAQ List – WIDTH INCREASED */}
      <div className="relative z-10 max-w-screen-xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{ marginLeft: idx % 2 === 1 ? '2rem' : '0' }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              {/* Changed to green gradient */}
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out px-8 overflow-hidden bg-gray-50 ${
                openIndex === idx
                  ? 'max-h-96 opacity-100 scale-100'
                  : 'max-h-0 opacity-0 scale-95'
              }`}
            >
              <p className="pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 relative z-10 text-center px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Our team is here to help. Get in touch and we’ll respond within 24 hours.
        </p>
        <button
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          // Changed to green gradient and green hover shadow
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}