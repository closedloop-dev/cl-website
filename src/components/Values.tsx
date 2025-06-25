import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, Users, Globe, Award } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We value transparency, trust, and professionalism in every partnership. Artists are empowered to express themselves authentically and freely.",
      highlightedWords: ["transparency, trust, and professionalism", "authentically and freely"]
    },
    {
      icon: Palette,
      title: "Creativity",
      description: "Innovation is at our core—we thrive on bold ideas and unforgettable experiences. We aim to create entertainment that becomes a lasting memory.",
      highlightedWords: ["bold ideas and unforgettable experiences", "lasting memory"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe success is built together. Through global partnerships, we drive shared growth and make the world feel more connected.",
      highlightedWords: ["built together", "shared growth"]
    },
    {
      icon: Globe,
      title: "Diversity & Inclusion",
      description: "We celebrate diverse voices and global cultures. Our platform gives space to stories that challenge norms and inspire change.",
      highlightedWords: ["diverse voices and global cultures", "challenge norms and inspire change"]
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence is our mindset—reflected in every detail, from planning to performance. We aim to exceed expectations and create a lasting impact.",
      highlightedWords: ["exceed expectations", "lasting impact"]
    }
  ];

  return (
    <section id="values" className="relative py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-[#60A5FA]/5 rounded-full blur-3xl top-0 left-1/4" />
        <div className="absolute w-[500px] h-[500px] bg-[#3B82F6]/4 rounded-full blur-3xl bottom-0 right-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            <span className="text-gray-300">Our Core</span>
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do, from artist relationships to audience experiences.
          </p>
        </motion.div>

        {/* Spacious Values Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Value Card */}
              <div className="relative bg-white/3 backdrop-blur-sm border border-white/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#60A5FA]/10 to-[#3B82F6]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-[#60A5FA]/20 group-hover:to-[#3B82F6]/20 transition-all duration-300"
                >
                  <value.icon className="w-10 h-10 text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-light text-white mb-6 group-hover:text-[#60A5FA] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description with Highlighted Words */}
                <div className="text-gray-400 leading-relaxed text-base">
                  {value.description.split(' ').map((word, wordIndex) => {
                    const isHighlighted = value.highlightedWords.some(highlighted => 
                      word.toLowerCase().includes(highlighted.toLowerCase().split(' ')[0])
                    );
                    
                    return (
                      <span
                        key={wordIndex}
                        className={isHighlighted ? "text-[#60A5FA] font-medium" : ""}
                      >
                        {word}{' '}
                      </span>
                    );
                  })}
                </div>

                {/* Subtle Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#60A5FA]/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Spacing and Decorative Element */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full" />
            <span className="text-gray-400 text-sm font-light">Guiding every decision we make</span>
            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
