import { useEffect, useState } from "react";
import { Users, Target, Zap, Award } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";

const values = [
  {
    icon: Award,
    title: "10+ Years of Experience",
    description:
      "Since 2015, we’ve successfully executed advertising and distribution campaigns across the UAE with proven results.",
  },
  {
    icon: Target,
    title: "UAE-Wide Coverage",
    description:
      "We operate across Dubai, Abu Dhabi, Sharjah, Ajman, and other Emirates, ensuring reliable on-ground execution.",
  },
  {
    icon: Users,
    title: "Multi-Industry Expertise",
    description:
      "From retail and real estate to education, events, and services — we understand diverse market needs.",
  },
  {
    icon: Zap,
    title: "Customized Marketing Solutions",
    description:
      "Every campaign is tailored to your audience, location, budget, and business goals — no one-size-fits-all.",
  },
];

export default function About() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor background effect
  useEffect(() => {
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="py-36 bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Background blobs - changed to green */}
      <div
        className="absolute w-72 h-72 bg-green-200/30 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-green-300/30 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x * -0.02}px, ${cursorPos.y * -0.02}px)`,
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          {/* Changed to green-50 and border-green-200 */}
          <div className="inline-block px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
            {/* Changed to text-green-600 */}
            <span className="text-green-600 font-semibold">Why MaxLead</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Trusted Advertising & Distribution Partner for{" "}
            {/* Changed to green gradient */}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              UAE Businesses
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since <strong>2015</strong>, MaxLead Advertising has supported
            businesses across <strong>Dubai, Abu Dhabi, Sharjah, Ajman</strong>,
            and other Emirates with reliable marketing execution and measurable
            results.
            <br />
            <br />
            As a growing distribution company and digital marketing agency, we
            focus on building long-term value — not one-time campaigns.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {values.map((value, index) => (
            <Tilt
              key={index}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.05}
              className="w-full"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                {/* Changed to green gradient */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Tilt>
          ))}
        </div>

        {/* CTA */}
        {/* Changed border to green-300 */}
        <div className="bg-gradient-to-r from-white to-gray-300 rounded-3xl p-14 border border-green-300 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Looking for a Reliable Advertising Partner in UAE?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Whether you need flyer distribution, SMS marketing, printing, or
            digital advertising — we deliver campaigns that reach the right
            audience and drive real results.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            // Changed to green gradient and green hover shadow
            className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50"
          >
            Request a Quick Quote
          </button>
        </div>
      </div>
    </section>
  );
}