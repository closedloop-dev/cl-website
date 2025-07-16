import React, { useEffect, useState } from 'react';
import { Users, CalendarCheck2, LayoutGrid, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Elite Talent Network",
      description:
        "Carefully selected performers, including musicians, DJs, dancers, and emcees—each vetted for originality, professionalism, and event-readiness.",
    },
    {
      icon: CalendarCheck2,
      title: "Diverse Event Expertise",
      description:
        "From corporate launches to weddings, we bring hands-on planning and coordination expertise for all event types, ensuring flawless execution.",
    },
    {
      icon: LayoutGrid,
      title: "End-to-End Event Services",
      description:
        "We handle everything: artist sourcing, stage production, branding, and logistics—simplifying your workflow through an integrated approach.",
    },
    {
      icon: Sparkles,
      title: "Creative Passion, Real Results",
      description:
        "A team that deeply understands your vision and personalizes every experience to deliver memorable moments with impact and soul.",
    },
  ];

  const [rotationIndex, setRotationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const radius = 220;
  const centerX = 300;
  const centerY = 300;

  const getRotatedPosition = (index) => {
    const angle = ((index + rotationIndex) % 4) * (Math.PI / 2);
    const x = centerX + radius * Math.cos(angle) - 128;
    const y = centerY + radius * Math.sin(angle) - 110;
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };

  return (
    <section className="relative bg-[#0D0D0D] py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-10 left-1/3 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/20 rounded-full blur-3xl bottom-10 right-1/4 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            <span className="text-gray-300">Why Choose</span>{' '}
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Closed Loop?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Where passion meets precision—bringing entertainment visions to life with style, skill, and soul.
          </p>
        </div>

        <div className="relative w-[600px] h-[600px] mx-auto">
          {/* Spinning Infinity Coin Flip */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 perspective">
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-face">
                <svg
                  className="w-[120px] h-[120px]"
                  viewBox="0 0 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60,50 C45,10 0,10 0,50 C0,90 45,90 60,50 C75,10 120,10 120,50 C120,90 75,90 60,50"
                    stroke="url(#glassGradient)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="glassGradient" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="rgba(255, 255, 255, 0.4)" />
                      <stop offset="1" stopColor="rgba(255, 255, 255, 0.1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* BACK */}
              <div className="flip-card-face flip-card-back">
                <svg
                  className="w-[120px] h-[120px]"
                  viewBox="0 0 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60,50 C45,10 0,10 0,50 C0,90 45,90 60,50 C75,10 120,10 120,50 C120,90 75,90 60,50"
                    stroke="url(#glassGradient)"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Orbiting Cards (Back Again!) */}
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const pos = getRotatedPosition(index);
            return (
              <div
                key={index}
                className="absolute w-64 min-h-[230px] p-5 bg-[#1A1A1A] rounded-2xl border border-gray-800 shadow-md text-center transition-all duration-1000 ease-in-out z-20"
                style={{ ...pos }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 break-words">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-snug break-words">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coin Flip CSS */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }

        .flip-card-inner {
          width: 120px;
          height: 120px;
          position: relative;
          transform-style: preserve-3d;
          animation: coin-flip 4s linear infinite;
        }

        .flip-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes coin-flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(720deg);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
