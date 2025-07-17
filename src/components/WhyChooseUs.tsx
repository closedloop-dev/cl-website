import React, { useEffect, useState } from 'react';
import { Users, CalendarCheck2, LayoutGrid, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Elite Talent Network',
      description:
        'Carefully selected performers, including musicians, DJs, dancers, and emcees—each vetted for originality, professionalism, and event-readiness.',
    },
    {
      icon: CalendarCheck2,
      title: 'Diverse Event Expertise',
      description:
        'From corporate launches to weddings, we bring hands-on planning and coordination expertise for all event types, ensuring flawless execution.',
    },
    {
      icon: LayoutGrid,
      title: 'End-to-End Event Services',
      description:
        'We handle everything: artist sourcing, stage production, branding, and logistics—simplifying your workflow through an integrated approach.',
    },
    {
      icon: Sparkles,
      title: 'Creative Passion, Real Results',
      description:
        'A team that deeply understands your vision and personalizes every experience to deliver memorable moments with impact and soul.',
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

  const getRotatedPosition = (index: number) => {
    const angle = ((index + rotationIndex) % 4) * (Math.PI / 2);
    const x = centerX + radius * Math.cos(angle) - 128;
    const y = centerY + radius * Math.sin(angle) - 110;
    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  };

  return (
    <section className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-10 left-[30%] animate-pulse" />
        <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] bg-[#3B82F6]/20 rounded-full blur-3xl bottom-10 right-[20%] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            <span className="text-gray-300">Why Choose</span>{' '}
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Closed Loop?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Where passion meets precision—bringing entertainment visions to life with style, skill, and soul.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="w-full bg-[#1A1A1A] rounded-2xl border border-gray-800 p-5 shadow-md text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Orbit layout for md+ */}
        <div className="hidden md:block relative w-[600px] h-[600px] mx-auto mt-16">
          {/* Coin Flip */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 perspective">
            <div className="flip-card-inner w-[120px] h-[120px]">
              <div className="flip-card-face">
                <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
                  <path
                    d="M60,50 C45,10 0,10 0,50 C0,90 45,90 60,50 C75,10 120,10 120,50 C120,90 75,90 60,50"
                    stroke="url(#glassGradient)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="glassGradient" x1="0" y1="0" x2="120" y2="0">
                      <stop stopColor="rgba(255, 255, 255, 0.4)" />
                      <stop offset="1" stopColor="rgba(255, 255, 255, 0.1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flip-card-face flip-card-back">
                <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
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

          {/* Orbit Cards */}
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
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coin flip animation */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .flip-card-inner {
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
