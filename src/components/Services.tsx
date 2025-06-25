import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  Megaphone,
  Camera,
  Settings,
  Music,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      description: "Full-spectrum artist career guidance, branding, and talent development."
    },
    {
      icon: Music,
      title: "Talent Booking",
      description: "Connecting top-tier performers with the right audience and events."
    },
    {
      icon: Calendar,
      title: "Event Production",
      description: "Creative, seamless planning and production of unforgettable experiences."
    },
    {
      icon: Megaphone,
      title: "Brand Partnerships",
      description: "Strategic alliances that amplify both artist and brand identities."
    },
    {
      icon: Camera,
      title: "Media & PR",
      description: "Targeted publicity and media storytelling to elevate your presence."
    },
    {
      icon: Settings,
      title: "Production Setup",
      description: "End-to-end technical execution including staging, lighting, and AV support."
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[#60A5FA]/10 rounded-full blur-3xl top-20 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            <span className="text-gray-300">What</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              We Offer
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Full-circle entertainment services built to amplify your event and elevate talent.
          </p>
        </motion.div>

        {/* Alternating Timeline with End-to-End Connector Line */}
        <div className="relative space-y-20">
          <svg className="absolute left-0 top-0 h-full w-full z-0" viewBox="0 0 1000 1400" preserveAspectRatio="none">
            <path
              d={services.map((_, i) => {
                const x = i % 2 === 0 ? 150 : 850;
                const y = i * 240 + 90;
                return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
              }).join(' ') + ` L 500,${services.length * 240 + 180}`}
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group flex ${isLeft ? 'justify-start' : 'justify-end'} z-10`}
              >
                <div className={`flex flex-col items-${isLeft ? 'start' : 'end'} max-w-md px-6 py-4 bg-[#1A1A1A] rounded-2xl shadow-lg shadow-black/10 border border-gray-800 ${isLeft ? 'ml-6 text-left' : 'mr-6 text-right'}`}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] flex items-center justify-center shadow-md shadow-[#3B82F6]/20">
                    <service.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-40 z-10 relative"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white font-medium rounded-2xl hover:shadow-lg hover:shadow-[#60A5FA]/30 transition-all duration-300 inline-flex items-center gap-3"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
