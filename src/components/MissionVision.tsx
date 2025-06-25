import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MissionVision: React.FC = () => {
    const visionPoints = [
        "Redefining live events by connecting talent, opportunity, and audience.",
        "Giving every artist a chance to grow, collaborate, and succeed.",
    ];

    const missionPoints = [
        "Empowering artists through management, partnerships, and events.",
        "Delivering seamless live experiences from planning to performance.",
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] backdrop-blur-md relative overflow-hidden">
            {/* Creative Background Patterns */}
            <div className="absolute inset-0">
                {/* Wave Pattern */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
                        <path d="M0,60 Q300,30 600,60 T1200,60" stroke="#60A5FA" strokeWidth="2" />
                        <path d="M0,80 Q300,50 600,80 T1200,80" stroke="#3B82F6" strokeWidth="1" />
                    </svg>
                </div>
                
                {/* Subtle Circular Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 border border-[#60A5FA]/10 rounded-full" />
                <div className="absolute bottom-20 left-20 w-24 h-24 border border-[#3B82F6]/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[#06B6D4]/5 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header with Clean Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                            <span className="text-gray-300">Our</span>
                            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                                Vision & Mission
                            </span>
                        </h2>
                        
                        {/* Subtle Decorative Elements */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#60A5FA]/20 rounded-tl-lg"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#3B82F6]/20 rounded-br-lg"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        />
                    </div>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Guiding principles that drive our commitment to excellence and innovation in the entertainment industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Vision Section - Clean Design */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.01,
                            boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)"
                        }}
                        className="relative"
                    >
                        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 glass-card">
                            
                            {/* Clean Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-light text-white mb-2">🎯 Our Vision</h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] mx-auto"></div>
                            </div>
                            
                            {/* Vision Points */}
                            <div className="space-y-6">
                                {visionPoints.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-[#60A5FA] rounded-full"></div>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 leading-relaxed text-lg">{item}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Section - Clean Design */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.01,
                            boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)"
                        }}
                        className="relative"
                    >
                        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 glass-card">
                            
                            {/* Clean Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-light text-white mb-2">🚀 Our Mission</h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto"></div>
                            </div>
                            
                            {/* Mission Points */}
                            <div className="space-y-6">
                                {missionPoints.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 leading-relaxed text-lg">{item}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision; 