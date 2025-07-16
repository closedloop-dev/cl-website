import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Users, 
  Calendar, 
  Megaphone, 
  Camera, 
  Settings, 
  Star, 
  Check, 
  ArrowRight, 
  Play, 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Heart,
  Clock,
  Target,
  Award,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Users,
      title: "Artist Management",
      subtitle: "Careers don't just happen — they're built. And we build them right.",
      description: "We offer end-to-end artist management services tailored to each individual's unique vision, goals, and artistic identity. Our team works closely with creatives to shape career trajectories through strategic planning, talent development, branding, and personal guidance.",
      tagline: "We don't just manage careers - we cultivate artistry, impact, and legacy.",
      features: [
        "Strategic career planning & long-term development",
        "Booking & contract negotiations",
        "Tour management & logistics",
        "Personal branding & image consulting",
        "Rights management & financial advisory",
        "Mental wellness and career sustainability support"
      ],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Music,
      title: "Talent Booking",
      subtitle: "The right talent. The right crowd. Every time.",
      description: "Closed Loop connects event organisers, brands, and venues with a diverse roster of high-calibre performers and influencers. Whether it's a high-energy festival, an exclusive corporate event, or a curated showcase, we ensure that talent and audience align seamlessly.",
      tagline: "We bring talent to stages, screens, and spaces where their impact resonates.",
      features: [
        "Customised artist curation for events and campaigns",
        "Domestic and international talent sourcing",
        "Corporate, festival, nightlife, and private event bookings",
        "Technical and hospitality rider coordination",
        "Real-time artist availability and response management"
      ],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Calendar,
      title: "Event Production",
      subtitle: "From concept to curtain call - we create unforgettable moments.",
      description: "Our production team handles events with precision, flair, and creative direction that leaves a lasting impression. We specialize in immersive, culturally-relevant experiences that blend entertainment, storytelling, and seamless execution.",
      tagline: "From intimate showcases to large-scale productions, we turn events into experiences.",
      features: [
        "Full-service event conceptualisation and planning",
        "Stage and lighting design, AV, and technical coordination",
        "Artist and guest logistics",
        "Creative direction and programming",
        "Staffing, vendor management, and onsite execution",
        "Post-event analytics and impact reporting"
      ],
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Megaphone,
      title: "Brand Partnerships",
      subtitle: "Authentic collaborations that amplify both artist and brand.",
      description: "We pair artists with bold, forward-thinking brands to create campaigns, experiences, and content that resonate deeply with audiences. Every partnership is built on creative alignment and mutual value, with storytelling at the core.",
      tagline: "We build partnerships that last - because they're real.",
      features: [
        "Brand-artist matchmaking and creative integration",
        "Endorsements, campaigns, and experiential marketing",
        "Social media and digital activations",
        "Collaborative content production",
        "Long-term brand ambassadorship development",
        "Negotiations, contracts, and brand protection"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Camera,
      title: "Media & PR",
      subtitle: "Visibility is power. We craft narratives that break through the noise.",
      description: "In a fast-moving digital world, strategic publicity and media presence are vital. Our team elevates your voice through targeted media campaigns, press coverage, and reputation management that amplifies your personal brand and artistic identity.",
      tagline: "We don't just get you seen — we get you remembered.",
      features: [
        "Media relations and press outreach",
        "Social media strategy and growth campaigns",
        "Content creation, storytelling, and branding",
        "Influencer collaborations",
        "Crisis communication & reputation management",
        "Interview coaching and media training"
      ],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Artist Manager",
      content: "Closed Loop transformed our artist's career with their strategic approach to management and branding. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Event Director",
      content: "Their event management services are exceptional. They handled everything from concept to execution flawlessly, making our corporate event a huge success.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "The brand collaboration they facilitated between our company and the artist was incredibly successful. Our engagement rates increased by 300%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <FloatingElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[20%] left-[10%] z-[-1] animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[15%] right-[15%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              <span className="text-gray-300">What</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                We Offer
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                At <strong className="text-[#60A5FA]">Closed Loop</strong>, we provide a fully integrated suite of services designed to support artists, brands, and event organisers at every stage of their journey.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're a rising talent or an established name, we create a continuous loop of creative growth, visibility, and opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Service Header with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#60A5FA]/25">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <div>
                          <h2 className="text-4xl lg:text-5xl font-light text-white mb-2">
                            {service.title}
                          </h2>
                          <p className="text-xl text-[#60A5FA] font-medium leading-relaxed">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative overflow-hidden rounded-3xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/20 to-[#3B82F6]/20 z-10" />
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
                        <Target className="w-6 h-6 text-[#60A5FA]" />
                        What's Included
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#60A5FA]/30 hover:bg-white/8 transition-all duration-300"
                          >
                            <Check className="w-6 h-6 text-[#60A5FA] mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-base leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Service Highlights */}
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-[#60A5FA]/10 to-[#3B82F6]/10 rounded-3xl p-8 border border-[#60A5FA]/20">
                        <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                          <Sparkles className="w-6 h-6 text-[#60A5FA]" />
                          Our Promise
                        </h4>
                        <p className="text-gray-300 italic leading-relaxed text-lg">
                          "{service.tagline}"
                        </p>
                      </div>

                      <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                        <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                          <Shield className="w-6 h-6 text-[#60A5FA]" />
                          Why Choose Us
                        </h4>
                        <ul className="space-y-4 text-gray-300">
                          <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-[#60A5FA]" />
                            <span>Proven track record</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-[#60A5FA]" />
                            <span>Industry expertise</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-[#60A5FA]" />
                            <span>Personalized approach</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-[#60A5FA]" />
                            <span>End-to-end support</span>
                          </li>
                        </ul>
                      </div>

                      {/* <Button className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:shadow-xl hover:shadow-[#60A5FA]/25 transition-all duration-300 py-6 text-lg font-medium">
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Button> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gray-300">What Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#60A5FA]/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Services; 