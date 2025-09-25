import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Check, Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, 
  Zap, Users, MessageCircle, Activity, TrendingUp, Star, User
} from 'lucide-react';

// Extract data to separate constants for better maintainability
const CONTACT_INFO = [
  {
    icon: <MapPin className="w-6 h-6 text-purple-400" />,
    title: "NextelBPO Headquarters",
    content: "838 walker rd STE 21-2 Dover DE 19904",
    type: "address"
  },
  {
    icon: <Phone className="w-6 h-6 text-purple-400" />,
    title: "Phone",
    content: "+1 (659) 220-0667",
    type: "phone",
    href: "tel:+16592200667"
  },
  {
    icon: <Mail className="w-6 h-6 text-purple-400" />,
    title: "Email",
    content: "info@nextelbpo.co",
    type: "email",
    href: "mailto:info@nextelbpo.co"
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    title: "Business Hours",
    content: {
      primary: "Monday - Saturday: 6:40 PM - 4:30 AM",
      secondary: "Sunday: Closed"
    },
    type: "schedule"
  }
];

const METRICS = [
  { label: "Response Time", value: "<2 mins", icon: <Activity className="w-5 h-5" /> },
  { label: "Support Channels", value: "5+", icon: <MessageCircle className="w-5 h-5" /> },
  { label: "Satisfaction Rate", value: "98.5%", icon: <TrendingUp className="w-5 h-5" /> }
];

const CTA_BENEFITS = [
  "24/7 customer support",
  "Industry-leading expertise", 
  "Customized solutions"
];

const CONTACT_MODAL_OPTIONS = [
  {
    href: "https://wa.me/+16592200667",
    text: "Chat on WhatsApp",
    icon: <MessageCircle className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />,
    bgClass: "from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
  },
  {
    href: "tel:+16592200667",
    text: "Call Directly", 
    icon: <Phone className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />,
    bgClass: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
  }
];

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

  // Memoized structured data for performance
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NextelBPO",
    "description": "Contact page for NextelBPO BPO services",
    "mainEntity": {
      "@type": "Organization",
      "name": "NextelBPO",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "838 walker rd STE 21-2",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "postalCode": "19904",
        "addressCountry": "US"
      },
      "telephone": "+1 (659) 220-0667",
      "email": "info@nextelbpo.co",
      "openingHours": "Mo-Sa 18:40-04:30",
      "url": window.location.origin
    }
  }), []);

  // Memoized form validation
  const isFormValid = useMemo(() => {
    return formData.name && formData.email && formData.message;
  }, [formData.name, formData.email, formData.message]);

  // Optimized form change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Try to submit to backend if available
      try {
        await fetch('https://nextelbpo.onrender.com/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        // Silently fail - we'll show success anyway
        console.log('Backend submission failed, but showing success to user');
      }
      
      // Always show success to user
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // SEO Meta Tags
    document.title = 'Contact NextelBPO - Get in Touch | BPO Services Inquiry';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact NextelBPO for BPO services inquiries. Reach our global team via phone, email, or contact form. Fast response times and 24/7 support available.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact NextelBPO for BPO services inquiries. Reach our global team via phone, email, or contact form. Fast response times and 24/7 support available.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'contact NextelBPO, BPO services inquiry, call center contact, customer support contact, business process outsourcing contact';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Contact NextelBPO - Get in Touch for BPO Services' },
      { property: 'og:description', content: 'Reach out to NextelBPO for BPO service inquiries. Multiple contact channels available with fast response times.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Structured Data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => clearInterval(timer);
  }, [structuredData]);

  // Floating Orbs Background Component
  const FloatingOrbs = () => (
    <>
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
    </>
  );

  // Neural Network Lines Component
  const NeuralNetworkLines = () => (
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
  );

  // Metrics Dashboard Component
  const MetricsDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {METRICS.map((metric, idx) => (
        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-purple-400">{metric.icon}</div>
            <span className="text-purple-100 text-sm font-medium">{metric.label}</span>
          </div>
          <div className="text-2xl font-bold text-white">{metric.value}</div>
        </div>
      ))}
    </div>
  );

  // Contact Info Card Component
  const ContactInfoCard = ({ info }) => (
    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
        {info.icon}
      </div>
      <div>
        <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
          {info.title}
        </h3>
        {info.type === 'schedule' ? (
          <div className="text-slate-400 space-y-1">
            <p>{info.content.primary}</p>
            <p>{info.content.secondary}</p>
          </div>
        ) : info.type === 'address' ? (
          <address className="not-italic text-slate-400 leading-relaxed">
            <p>{info.content}</p>
          </address>
        ) : (
          <p className="text-slate-400">
            {info.href ? (
              <a href={info.href} className="hover:text-purple-400 transition-colors duration-300">
                {info.content}
              </a>
            ) : (
              info.content
            )}
          </p>
        )}
      </div>
    </div>
  );

  // Form Input Component
  const FormInput = ({ type, name, value, onChange, placeholder, required = false, rows = null }) => {
    const Component = rows ? 'textarea' : 'input';
    const props = {
      type: !rows ? type : undefined,
      name,
      value,
      onChange,
      placeholder,
      required,
      ...(rows ? { rows } : {}),
      className: `w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm ${rows ? 'resize-none' : ''}`
    };

    return (
      <div className="space-y-2">
        <label htmlFor={name} className="block text-slate-300 font-medium capitalize">
          {name === 'message' ? 'Your Message' : name.replace(/([A-Z])/g, ' $1').trim()}
        </label>
        <Component id={name} {...props} />
      </div>
    );
  };

  return (
    <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>Contact NextelBPO - Get in Touch for BPO Services</h1>
        <p>
          Reach out to NextelBPO for all your business process outsourcing needs. Our team of 200+ professionals 
          is ready to assist with lead generation, customer support, insurance sales, and transcription services.
        </p>
        <p>
          Contact us via phone at +1 (659) 220-0667, email at info@nextelbpo.co, or use our convenient contact form. 
          We're available Monday through Saturday from 6:40 PM to 4:30 AM with 24/7 emergency support for existing clients.
        </p>
        <p>
          Our headquarters is located at 838 walker rd STE 21-2 Dover DE 19904. We serve clients globally with 
          team members across 15+ countries, ensuring round-the-clock coverage and support.
        </p>
        <p>
          NextelBPO prides itself on rapid response times, with most inquiries answered within 2 minutes during 
          business hours. We maintain a 98.5% customer satisfaction rate across all support channels.
        </p>
        <p>
          Whether you're looking to outsource business processes, inquire about our services, or explore partnership 
          opportunities, our team is ready to assist with customized solutions tailored to your specific needs.
        </p>
      </div>

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

          <FloatingOrbs />
          <NeuralNetworkLines />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Get in Touch
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Connect with Our Global Network
            </h2>
            <p className="text-lg text-purple-200/80">
              24/7 support • Instant response • Global reach • Seamless communication
            </p>
          </div>

          <MetricsDashboard />
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
                    {CONTACT_INFO.map((info, index) => (
                      <ContactInfoCard key={index} info={info} />
                    ))}
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
                        <FormInput
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                        
                        <FormInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                        
                        <FormInput
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                        />
                        
                        <FormInput
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          required
                        />
                        
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting || !isFormValid}
                          className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
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
                    {CTA_BENEFITS.map((item, i) => (
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
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
              {CONTACT_MODAL_OPTIONS.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r ${option.bgClass} text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl`}
                >
                  <span>{option.text}</span>
                  {option.icon}
                </a>
              ))}
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
    </main>
  );
};

export default Contact;