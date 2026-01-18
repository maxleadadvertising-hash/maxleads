import { useEffect, useState } from "react";
import {
  Lightbulb,
  Target,
  Layout,
  Rocket,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    title: "Understand Business Goals",
    description:
      "We start by understanding your business objectives, brand positioning, and growth expectations.",
    icon: Lightbulb,
  },
  {
    title: "Analyze audience and location targeting",
    description:
      "We analyze your target audience, locations, and demographics to ensure precise and effective targeting.",
    icon: Target,
  },
  {
    title: "Create a tailored marketing strategy",
    description:
      "Based on insights, we create a customized marketing strategy aligned with your goals and budget.",
    icon: Layout,
  },
  {
    title: "Execute distribution or digital campaigns",
    description:
      "We execute flyer distribution, SMS campaigns, digital ads, or outdoor promotions with precision.",
    icon: Rocket,
  },
  {
    title: "Track performance and optimize results",
    description:
      "We track performance, measure results, and optimize campaigns to deliver consistent outcomes.",
    icon: BarChart3,
  },
];

export default function ProcessVertical() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Floating background - Changed to green */}
      <div
        className="absolute w-72 h-72 bg-green-300/20 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <div className="inline-block px-4 py-2 bg-white/60 rounded-full border border-gray-300 mb-6">
          {/* Changed to text-green-500 */}
          <span className="text-green-500 font-semibold">Our Process</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          How We{" "}
          {/* Changed to green gradient */}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Deliver Results
          </span>
        </h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto">
          We follow a structured process to ensure every campaign delivers
          consistent results — not random promotions.
        </p>
      </div>

      {/* PROCESS FLOW */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center relative">
                {/* Changed to green gradient */}
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg animate-bounce">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>

                {idx !== steps.length - 1 && (
                  // Changed to bg-green-300
                  <div className="absolute top-8 right-[-50%] w-full h-px bg-green-300"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-16 max-w-md mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="text-center">
                {/* Changed to green gradient */}
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg animate-bounce">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative - Changed to green */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-green-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
}