import { useState, useRef, useEffect } from 'react';
import { Phone, Headset, Clock, Users, ArrowRight, CheckCircle, Shield, Calendar, ShoppingCart, AlertTriangle, Activity, Zap, TrendingUp } from 'lucide-react';

const InboundServices = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Inbound Services - 24/7 Customer Support Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional 24/7 inbound customer support services with multilingual agents, 98% satisfaction rate, and seamless CRM integration. Enhance your customer experience with NextelBPO.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional 24/7 inbound customer support services with multilingual agents, 98% satisfaction rate, and seamless CRM integration. Enhance your customer experience with NextelBPO.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'inbound customer service, 24/7 support, call center services, customer support outsourcing, multilingual support, help desk services';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Inbound Services - 24/7 Customer Support' },
      { property: 'og:description', content: 'Professional 24/7 inbound customer support services with multilingual agents and 98% satisfaction rate.' },
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
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Customer Support",
      "provider": {
        "@type": "Organization",
        "name": "NextelBPO",
        "description": "Leading provider of inbound customer support services"
      },
      "description": "24/7 professional inbound customer support services with multilingual agents",
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": "+1-659-220-0667",
        "serviceUrl": window.location.href
      }
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Service data
  const services = [
    {
      title: "Customer Support",
      description: "Technical support, product inquiries, and account management",
      icon: <Headset className="w-6 h-6" />,
      features: ["Technical troubleshooting", "Product information", "Account assistance"]
    },
    {
      title: "Order Processing",
      description: "Order taking, payment processing, and shipping updates",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Order entry", "Payment processing", "Status updates"]
    },
    {
      title: "Appointment Scheduling",
      description: "Calendar management and booking coordination",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Calendar coordination", "Booking management", "Reminder services"]
    },
    {
      title: "Emergency Dispatch",
      description: "24/7 emergency call handling and response coordination",
      icon: <AlertTriangle className="w-6 h-6" />,
      features: ["Emergency response", "Dispatch coordination", "24/7 availability"]
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "98% Customer Satisfaction",
      description: "Our professionally trained agents deliver exceptional service that boosts your CSAT scores",
      icon: <CheckCircle className="w-6 h-6" />,
      metric: "98%"
    },
    {
      title: "60% Cost Reduction",
      description: "Reduce overhead costs compared to in-house teams",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "60%"
    },
    {
      title: "24-hour Ramp-up",
      description: "Quickly scale up or down based on seasonal demand",
      icon: <Clock className="w-6 h-6" />,
      metric: "24h"
    },
    {
      title: "Omnichannel Support",
      description: "Phone, email, chat and social media customer service",
      icon: <Zap className="w-6 h-6" />,
      metric: "Multi"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What languages do your agents support?",
      answer: "Our agents are fluent in English, Spanish, French, German, and several other languages. We can provide support in over 10 languages with native-level proficiency."
    },
    {
      question: "How do you ensure quality with remote agents?",
      answer: "We implement rigorous quality assurance measures including real-time call monitoring, regular scoring, ongoing training sessions, and customer feedback analysis."
    },
    {
      question: "Can you integrate with our existing CRM?",
      answer: "Yes, we have experience integrating with all major CRM platforms including Salesforce, HubSpot, Zendesk, and custom solutions. Our technical team ensures seamless data flow."
    },
    {
      question: "What's your average response time?",
      answer: "Our average speed to answer is under 30 seconds for standard service levels, with emergency lines answered immediately. We maintain 98% customer satisfaction across all interactions."
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Inbound Services - Professional Customer Support Solutions</h1>
        <p>
          NextelBPO provides industry-leading 24/7 inbound customer support services with multilingual agents, 
          achieving a 98% customer satisfaction rate. Our services include technical support, order processing, 
          appointment scheduling, and emergency dispatch for businesses worldwide.
        </p>
        <p>
          With average response times under 30 seconds and support for over 10 languages, we deliver exceptional 
          customer experiences that drive loyalty and growth. Our quality assurance processes ensure consistent 
          service excellence across all customer interactions.
        </p>
        <p>
          NextelBPO's inbound services help businesses reduce operational costs by up to 60% while maintaining 
          high-quality customer support. We seamlessly integrate with your existing CRM systems and provide 
          detailed analytics to track performance metrics.
        </p>
        <p>
          Contact NextelBPO today to enhance your customer service capabilities with our professional 
          inbound support solutions. Email info@nextelbpo.co or call +1 (659) 220-0667 to get started.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Floating Orbs - Reduced number for performance */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 animate-pulse"
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

          {/* Neural Network Lines - Reduced number for performance */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
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
          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 tracking-tight">
            Inbound Services
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">
              24/7 Professional Customer Support Solutions
            </p>
            <p className="text-lg text-blue-200/80">
              Multilingual • Always Available • Quality Guaranteed
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Average Response Time", value: "<30s", icon: <Clock className="w-5 h-5" /> },
              { label: "Customer Satisfaction", value: "98%", icon: <Activity className="w-5 h-5" /> },
              { label: "Languages Supported", value: "10+", icon: <Users className="w-5 h-5" /> }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">{metric.icon}</div>
                  <span className="text-blue-100 text-sm font-medium">{metric.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollToContent}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentSectionRef} className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'overview', label: 'Overview', icon: <Headset className="w-4 h-4" /> },
                { id: 'services', label: 'Our Services', icon: <Phone className="w-4 h-4" /> },
                { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'faq', label: 'FAQ', icon: <Shield className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Headset className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Professional Call Handling</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">24/7 Customer Support Excellence</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">Experience seamless customer interactions with our multilingual support teams</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        icon: <Headset className="w-8 h-8" />,
                        title: "Multilingual Support",
                        description: "Agents fluent in 10+ languages to serve your global customer base"
                      },
                      {
                        icon: <Shield className="w-8 h-8" />,
                        title: "Quality Assurance",
                        description: "Rigorous monitoring and scoring to maintain service excellence"
                      },
                      {
                        icon: <Users className="w-8 h-8" />,
                        title: "Scalable Teams",
                        description: "Easily adjust capacity based on your business needs"
                      }
                    ].map((step, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                          <div className="text-blue-400 group-hover:text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">24/7 Customer Support</h3>
                        <p className="text-blue-200">Always available when your customers need assistance</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Our teams work around the clock to ensure your customers always reach a live agent when they need assistance, 
                      with average response times under 30 seconds and 98% customer satisfaction rates.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["365 Days/Year", "Holiday Coverage", "Emergency Support", "Multi-channel"].map((item, i) => (
                        <span key={i} className="bg-white/10 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium text-blue-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Service Portfolio</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Inbound Service Offerings</h2>
                    <p className="text-xl text-slate-400">Comprehensive solutions for every customer interaction</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-blue-400">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{service.title}</h3>
                            <p className="text-slate-400">{service.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Key Advantages</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Inbound Services</h2>
                    <p className="text-xl text-slate-400">Measurable results that drive business growth</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-green-400">
                              {benefit.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{benefit.title}</h3>
                              <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
                            </div>
                            <p className="text-slate-400">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Common Questions</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-400">Everything you need to know about our services</p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-lg">{faq.question}</h4>
                            <ArrowRight className="w-5 h-5 text-blue-400 transform group-hover:rotate-90 transition-transform duration-300" />
                          </div>
                          <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Customer Service?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Join thousands of companies that trust NextelBPO for exceptional inbound customer service solutions.
                </p>
                <div className="space-y-3">
                  {[
                    "24/7 multilingual support",
                    "98% customer satisfaction rate",
                    "Seamless CRM integration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Service Journey</h3>
                <div 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-6 cursor-pointer hover:bg-blue-500/20 transition-colors duration-300"
                  onClick={() => {
                    const subject = encodeURIComponent("Inbound Services Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your inbound customer service solutions.\n\nBest regards,\n[Your Name]");
                    window.location.href = `mailto:info@nextelbpo.co?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Contact us at</p>
                      <div className="text-xl font-semibold text-blue-400">
                        info@nextelbpo.co
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">
                  Our customer service experts typically respond within 24 hours to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InboundServices;