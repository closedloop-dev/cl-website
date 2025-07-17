import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send
} from 'lucide-react';
import React, { useState } from 'react';
import FloatingElements from '../components/FloatingElements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormComplete =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.service.trim() &&
    formData.message.trim();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: (
        <a
          href="mailto:Media@closedloop.in"
          className="text-[#60A5FA] hover:underline"
        >
          Media@closedloop.in
        </a>
      ),
      response: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: (
        <a
          href="tel:+919663558202"
          className="text-[#60A5FA] hover:underline"
        >
          +91 96635 58202
        </a>
      ),
      response: "Available Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with our support team in real-time",
      contact: (
        <a
          href="https://wa.me/917760090695"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#60A5FA] hover:underline"
        >
          Start Chat on WhatsApp
        </a>
      ),
      response: "Average response time: 2 minutes"
    }
  ];

  const offices = [
    {
      city: 'Bangalore',
      country: 'India',
      address: 'Race Course Road Bengaluru, Karnataka 560001',
      phone: '+91 96635 58202',
      email: 'Media@closedloop.in',
      hours: 'Mon-Fri: 9AM-6PM IST',
      badgeColor: 'bg-blue-500'
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      phone: '+91 96635 58202',
      email: 'Media@closedloop.in',
      hours: 'Mon-Fri: 9AM-6PM IST',
      badgeColor: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <FloatingElements />
      <Navbar />

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 glass-card text-center"
                >
                  <IconComponent className="h-12 w-12 text-[#60A5FA] mx-auto mb-6" />
                  <h3 className="text-xl font-light text-white mb-4">{method.title}</h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <div className="text-[#60A5FA] font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.response}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-8">
                <span className="text-gray-300">Send us a</span>
                <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                  Message
                </span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#60A5FA]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-white/10">
                          <SelectItem value="artist-management">Artist Management</SelectItem>
                          <SelectItem value="talent-booking">Talent Booking</SelectItem>
                          <SelectItem value="event-production">Event Production</SelectItem>
                          <SelectItem value="brand-partnerships">Brand Partnerships</SelectItem>
                          <SelectItem value="media-pr">Media & PR</SelectItem>
                          <SelectItem value="production-setup">Production Setup</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA] min-h-[120px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  {isFormComplete && (
                    <a
                      href={`https://wa.me/917760090695?text=${encodeURIComponent(
                        `Hello, I'm ${formData.name}. I’m interested in ${formData.service}. My company: ${formData.company || "N/A"}. Here's my message:\n${formData.message}\nYou can reach me at ${formData.email}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 mt-4"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Send via WhatsApp
                      </Button>
                    </a>
                  )}
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-light text-white mb-4">Our Offices</h2>
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10"
                >
                  <Badge className={`${office.badgeColor} text-white mb-4`}>{office.country}</Badge>
                  <h4 className="text-xl font-light text-white mb-2">{office.city}</h4>
                  <p className="text-gray-400 mb-1">{office.address}</p>
                  <p className="text-gray-400 mb-1"> {office.phone}</p>
                  <p className="text-gray-400 mb-1"> {office.email}</p>
                  <p className="text-gray-400"> {office.hours}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
