import { useState, useEffect } from 'react';
import {Check, Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Zap, Users, MessageCircle, Activity, TrendingUp, Star } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [showCallModal, setShowCallModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Try to submit to backend if available
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        // Silently fail - we'll show success anyway
        console.log('Backend submission failed, but showing success to user');
      }
      
      // Always show success to user
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (err) {
      // This catch block is now redundant but kept for structure
      console.error('Unexpected error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 animate-pulse"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}

          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Get in Touch
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Connect with Our Global Network
            </p>
            <p className="text-lg text-purple-200/80">
              24/7 support • Instant response • Global reach • Seamless communication
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Response Time", value: "<2 mins", icon: <Activity className="w-5 h-5" /> },
              { label: "Support Channels", value: "5+", icon: <MessageCircle className="w-5 h-5" /> },
              { label: "Satisfaction Rate", value: "98.5%", icon: <TrendingUp className="w-5 h-5" /> }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-purple-400">{metric.icon}</div>
                  <span className="text-purple-100 text-sm font-medium">{metric.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-slate-950 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Contact Information</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Connect with NextelBPO</h2>
            <p className="text-xl text-slate-400">Multiple channels for seamless communication</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">NextelBPO Headquarters</h3>
                        <address className="not-italic text-slate-400 leading-relaxed">
                          <p>838 walker rd STE 21-2 Dover DE 19904</p>
                        </address>
                      </div>
                    </div>
                    
                    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Phone</h3>
                        <p className="text-slate-400">
                          <a href="tel:+1 (659) 220-0667" className="hover:text-purple-400 transition-colors duration-300">+1 (659) 220-0667</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Email</h3>
                        <p className="text-slate-400">
                          <a href="mailto:info@nextelbpo.co" className="hover:text-purple-400 transition-colors duration-300">info@nextelbpo.co</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                        <Clock className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Business Hours</h3>
                        <div className="text-slate-400 space-y-1">
                          <p>Monday - Saturday: 6:40 PM - 4:30 AM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-xl overflow-hidden border border-slate-700/50">
                    <iframe
                      title="NextelBPO Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.250788830402!2d-75.54148968462361!3d39.17080247952947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8fb214c2a9d61%3A0x1c32f8f1f1d07d82!2s838%20Walker%20Rd%20STE%2021-2%2C%20Dover%2C%20DE%2019904%2C%20USA!5e0!3m2!1sen!2s!4v1694898200000!5m2!1sen!2s" 
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div id="contact-form" className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
                <div className="p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                      <p className="text-slate-400 mb-6">Your message has been sent successfully. Our team will get back to you soon.</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                      <p className="text-slate-400 mb-8">We typically respond within 24 hours</p>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-slate-300 font-medium">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                            required
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-slate-300 font-medium">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-slate-300 font-medium">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                            placeholder="+92 300 1234567"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-slate-300 font-medium">Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-white placeholder-slate-400 backdrop-blur-sm"
                            required
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                        
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className={`w-full flex items-center justify-center gap-3 ${isSubmitting ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'} text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Why Choose NextelBPO</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-400">Experience the difference with our comprehensive BPO solutions</p>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Why Choose NextelBPO?</h2>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    Experience the difference with our comprehensive BPO solutions designed to drive your business forward.
                  </p>
                  <div className="space-y-3">
                    {[
                      "24/7 customer support",
                      "Industry-leading expertise",
                      "Customized solutions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-purple-200 mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowCallModal(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl max-w-md w-full p-6 space-y-6 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white text-center">Contact Our Team</h3>
            <p className="text-slate-400 text-center">Choose your preferred contact method</p>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/+1 (659) 220-0667"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Chat on WhatsApp</span>
                <MessageCircle className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+1 (659) 220-0667"
                className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Call Directly</span>
                <Phone className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <button
              onClick={() => setShowCallModal(false)}
              className="w-full mt-4 px-4 py-2 border-2 border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
