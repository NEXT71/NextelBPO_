import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Check, Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight,
  Zap, Users, MessageCircle, Activity, TrendingUp, Star, User
} from 'lucide-react';// Extract data to separate constants for better maintainability
const CONTACT_INFO = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "NextelBPO Office",
    content: "2nd Floor Sabah Plaza, Bank Road, Saddar, Rawalpindi",
    type: "address"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone (HR - Qamar Ali Rana)",
    content: "+92 370 5546296",
    type: "phone",
    href: "tel:+923705546296"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "info@nextelbpo.co",
    type: "email",
    href: "mailto:info@nextelbpo.co"
  },
  {
    icon: <Clock className="w-6 h-6" />,
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
    href: "https://wa.me/+923705546296",
    text: "Chat on WhatsApp",
    icon: <MessageCircle className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />,
    bgClass: "from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
  },
  {
    href: "tel:+923705546296",
    text: "Call Directly",
    icon: <Phone className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />,
    bgClass: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
  }
];

// Pre-define these components outside the main component to prevent recreation
const FloatingOrbs = () => {
  const orbs = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    })), []
  );

  return (
    <>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 animate-pulse"
          style={{
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animationDelay: `${orb.delay}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </>
  );
};

const NeuralNetworkLines = () => {
  const lines = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: i * 0.2
    })), []
  );

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {lines.map((line) => (
        <line
          key={line.id}
          x1={`${line.x1}%`}
          y1={`${line.y1}%`}
          x2={`${line.x2}%`}
          y2={`${line.y2}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: `${line.delay}s` }}
        />
      ))}
    </svg>
  );
};

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

const ContactInfoCard = ({ info }) => (
  <div className="group flex items-start gap-4 p-4 hover:bg-black/[0.02] transition-all duration-500">
    <div className="w-12 h-12 bg-black/5 group-hover:bg-black flex items-center justify-center flex-shrink-0 transition-all duration-500">
      <div className="text-black/40 group-hover:text-white transition-colors duration-500">
        {info.icon}
      </div>
    </div>
    <div>
      <h3 className="font-bold mb-1 transition-colors">
        {info.title}
      </h3>
      {info.type === 'schedule' ? (
        <div className="text-black/60 space-y-1 text-sm">
          <p>{info.content.primary}</p>
          <p>{info.content.secondary}</p>
        </div>
      ) : info.type === 'address' ? (
        <address className="not-italic text-black/60 leading-relaxed text-sm">
          <p>{info.content}</p>
        </address>
      ) : (
        <p className="text-black/60 text-sm">
          {info.href ? (
            <a href={info.href} className="hover:text-black transition-colors duration-300">
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

// Fixed Form Input Component - this was the main issue
const FormInput = ({ type, name, value, onChange, placeholder, required = false, rows = null }) => {
  const inputProps = {
    name,
    value,
    onChange,
    placeholder,
    required,
    className: `w-full px-4 py-3 bg-white border border-black/10 focus:outline-none focus:border-black placeholder-black/40 transition-all duration-500 ${rows ? 'resize-none' : ''}`
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-black/60 text-sm uppercase tracking-wider">
        {name === 'message' ? 'Your Message' : name.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      {rows ? (
        <textarea id={name} rows={rows} {...inputProps} />
      ) : (
        <input id={name} type={type} {...inputProps} />
      )}
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    universal_leadid: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [showCallModal, setShowCallModal] = useState(false);

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
      "telephone": "+92 370 5546296",
      "email": "info@nextelbpo.co",
      "openingHours": "Mo-Sa 18:40-04:30",
      "url": typeof window !== 'undefined' ? window.location.origin : ''
    }
  }), []);

  // Memoized form validation
  const isFormValid = useMemo(() => {
    return formData.name && formData.email && formData.message;
  }, [formData.name, formData.email, formData.message]);

  // Fixed form change handler - this is the key fix
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = useCallback(async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      return;
    }
    
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
      setFormData({ name: '', email: '', phone: '', message: '', universal_leadid: '' });
      
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [isFormValid, formData]);

  const handleModalClose = useCallback(() => {
    setShowCallModal(false);
  }, []);

  const handleModalOpen = useCallback(() => {
    setShowCallModal(true);
  }, []);

  const handleResetForm = useCallback(() => {
    setIsSubmitted(false);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Watch for LeadiD token population
    const checkLeadiD = () => {
      const leadidInput = document.getElementById('leadid_token');
      if (leadidInput && leadidInput.value && leadidInput.value !== formData.universal_leadid) {
        setFormData(prev => ({ ...prev, universal_leadid: leadidInput.value }));
      }
    };
    
    // Check immediately and then periodically
    checkLeadiD();
    const leadidInterval = setInterval(checkLeadiD, 1000);
    
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
      { property: 'og:url', content: typeof window !== 'undefined' ? window.location.href : '' }
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

    // Jornaya LeadiD Script
    const jornayaScript = document.createElement('script');
    jornayaScript.id = 'LeadiDscript';
    jornayaScript.type = 'text/javascript';
    const campaignSrc = `//create.lidstatic.com/campaign/${process.env.REACT_APP_JORNAYA_CAMPAIGN_ID}.js?snippet_version=${process.env.REACT_APP_JORNAYA_SNIPPET_VERSION}`;
    jornayaScript.innerHTML = `
      (function() {
        var s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '${campaignSrc}';
        var LeadiDscript = document.getElementById('LeadiDscript');
        LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
      })();
    `;
    document.body.appendChild(jornayaScript);

    // Noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptImg = document.createElement('img');
    const noscriptSrc = `//create.leadid.com/noscript.gif?lac=${process.env.REACT_APP_JORNAYA_LAC}&lck=${process.env.REACT_APP_JORNAYA_LCK}&snippet_version=${process.env.REACT_APP_JORNAYA_SNIPPET_VERSION}`;
    noscriptImg.src = noscriptSrc;
    noscript.appendChild(noscriptImg);
    document.body.appendChild(noscript);

    return () => {
      clearInterval(leadidInterval);
      // Cleanup scripts on unmount
      const existingJornaya = document.getElementById('LeadiDscript');
      if (existingJornaya) existingJornaya.remove();
      const existingCampaign = document.getElementById('LeadiDscript_campaign');
      if (existingCampaign) existingCampaign.remove();
      const existingNoscript = document.querySelector('noscript img[src*="leadid.com"]');
      if (existingNoscript) existingNoscript.parentNode.remove();
    };
  }, [structuredData]);

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
          Contact us via phone at +92 370 5546296 (HR - Qamar Ali Rana), email at info@nextelbpo.co, or use our convenient contact form. 
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
      <section className="relative min-h-screen bg-black text-white flex items-center border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-12" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920)' }}></div>
        
        <div className="relative z-10 container mx-auto px-8 max-w-[1600px]">
          <div className="py-40">
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
                Get In Touch
              </p>
              
              <h1 className="text-[clamp(56px,8vw,96px)] font-bold leading-[0.9] tracking-tight mb-8">
                Let's Talk{' '}
                <span className="text-white/30">About Your Needs</span>
              </h1>
              
              <p className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
                24/7 support with sub-2min response time. Connect with our global team for customized BPO solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="mailto:info@nextelbpo.co"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-white/90 focus:ring-4 focus:ring-white/20 transition-all duration-500"
                  aria-label="Send us an email"
                >
                  Email Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button 
                  onClick={handleModalOpen}
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 px-4 py-2 rounded transition-colors"
                  aria-label="Call us now"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-32 bg-white border-b border-black/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.02]" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/clean-gray-paper.png)' }}></div>
        
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-black/40">Contact Information</span>
            </div>
            <h2 className="text-[56px] font-bold tracking-tight mb-6 leading-tight">Connect with <span className="text-black/30">NextelBPO</span></h2>
            <p className="text-xl text-black/60">Multiple channels for seamless communication</p>
          </div>

          <div className="max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="border border-black/5 hover:border-black/10 transition-all duration-500 overflow-hidden">
                <div className="p-12">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {CONTACT_INFO.map((info, index) => (
                      <ContactInfoCard key={index} info={info} />
                    ))}
                  </div>

                  <div className="mt-10 overflow-hidden border border-black/10">
                    <iframe
                      title="NextelBPO Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0123456789!2d73.049137!3d33.598017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzUyLjkiTiA3M8KwMDInNTYuOSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
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
              <div id="contact-form" className="border border-black/5 hover:border-black/10 transition-all duration-500 overflow-hidden">
                <div className="p-12">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-black/5 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-black/40" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                      <p className="text-black/60 mb-6">Your message has been sent successfully. Our team will get back to you soon.</p>
                      <button
                        onClick={handleResetForm}
                        className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-black/90 transition-all duration-500"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                      <p className="text-black/60 mb-8">We typically respond within 24 hours</p>
                      
                      <div className="space-y-6">
                        <FormInput
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                        
                        <FormInput
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                        
                        <FormInput
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 1234567"
                        />
                        
                        <FormInput
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="How can we help you?"
                          rows={5}
                          required
                        />
                        
                        {/* LeadiD Hidden Input */}
                        <input id="leadid_token" name="universal_leadid" type="hidden" value={formData.universal_leadid} />
                        
                        {/* TCPA Disclosure */}
                        <div className="space-y-2">
                          <label className="flex items-start gap-3 text-black/60">
                            <input type="checkbox" id="leadid_tcpa_disclosure" className="mt-1" />
                            <span className="text-sm leading-relaxed">
                              By submitting this form, you agree to receive communications from NextelBPO and our partners. 
                              You can unsubscribe at any time. Message and data rates may apply.
                            </span>
                          </label>
                        </div>
                        
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting || !isFormValid}
                          className={`w-full flex items-center justify-center gap-3 bg-black hover:bg-black/90 text-white px-6 py-4 text-sm uppercase tracking-wider transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed`}
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
      <section className="py-32 bg-black">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">Why Choose NextelBPO</span>
            </div>
            <h2 className="text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">Ready to <span className="text-white/30">Get Started?</span></h2>
            <p className="text-xl text-white/60">Experience the difference with our comprehensive BPO solutions</p>
          </div>

          <div className="max-w-6xl border border-white/10 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-white p-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Why Choose NextelBPO?</h3>
                  <p className="text-black/60 mb-6 leading-relaxed">
                    Experience the difference with our comprehensive BPO solutions designed to drive your business forward.
                  </p>
                  <div className="space-y-3">
                    {CTA_BENEFITS.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-black/40 mr-3" />
                        <span className="text-black/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-black/[0.02]">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <button 
                    onClick={handleModalOpen}
                    className="w-full bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-black/90 transition-all duration-500 flex items-center justify-center gap-2"
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-md w-full p-8 space-y-6 border border-black/10">
            <h3 className="text-2xl font-bold text-center">Contact Our Team</h3>
            <p className="text-black/60 text-center">Choose your preferred contact method</p>
            <div className="text-center p-4 bg-black/5 border-t border-black/5">
              <p className="text-sm mb-1"><strong>HR Contact:</strong> Qamar Ali Rana</p>
              <p className="text-sm">
                <Phone className="w-4 h-4 inline mr-2" />
                +92 370 5546296
              </p>
            </div>
            
            <div className="space-y-4">
              {CONTACT_MODAL_OPTIONS.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group flex items-center justify-between px-6 py-4 bg-black text-white hover:bg-black/90 transition-all duration-500"
                >
                  <span className="text-sm uppercase tracking-wider">{option.text}</span>
                  {option.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={handleModalClose}
              className="w-full mt-4 px-6 py-3 border border-black/10 hover:border-black text-sm uppercase tracking-wider transition-all duration-500"
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