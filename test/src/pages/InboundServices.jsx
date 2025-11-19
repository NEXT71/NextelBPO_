import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Headset, Clock, Users, ArrowRight, CheckCircle, Shield, Calendar, ShoppingCart, AlertTriangle, Activity, Zap, TrendingUp, Search } from 'lucide-react';

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
      <section className="relative bg-black text-white py-40 border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920)' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Inbound Services</div>
            <h1 className="text-[96px] font-bold leading-[0.9] tracking-tight mb-8">
              24/7 Customer<br />
              <span className="text-white/30">Support Solutions</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
              Professional 24/7 inbound customer support services with multilingual agents, 98% satisfaction rate, and seamless CRM integration.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-white/90 transition-all duration-500 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentSectionRef} className="py-32 bg-white border-b border-black/5">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'overview', label: 'Overview', icon: <Headset className="w-5 h-5" /> },
                { id: 'services', label: 'Services', icon: <Phone className="w-5 h-5" /> },
                { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="w-5 h-5" /> },
                { id: 'faq', label: 'FAQ', icon: <Shield className="w-5 h-5" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'border border-black/10 text-black/60 hover:text-black hover:border-black'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white border border-black/10 overflow-hidden">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Professional Call Handling</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">24/7{' '}<span className="text-black/30">Customer Support Excellence</span></h2>
                    <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">Experience seamless customer interactions with our multilingual support teams</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="w-12 h-12 bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black transition-all duration-500">
                          <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-black/70 transition-colors">{step.title}</h3>
                        <p className="text-black/60 leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border border-black/5 hover:border-black p-8 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-black/5 p-4">
                        <Clock className="w-8 h-8 text-black/40" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-black/60">Always available when your customers need assistance</p>
                      </div>
                    </div>
                    <p className="text-black/70 mb-6 leading-relaxed">
                      Our teams work around the clock to ensure your customers always reach a live agent when they need assistance, 
                      with average response times under 30 seconds and 98% customer satisfaction rates.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["365 Days/Year", "Holiday Coverage", "Emergency Support", "Multi-channel"].map((item, i) => (
                        <span key={i} className="border border-black/10 px-4 py-2 text-xs uppercase tracking-wider text-black/60">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Service Portfolio</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Our Inbound <span className="text-black/30">Service Offerings</span></h2>
                    <p className="text-xl text-black/60">Comprehensive solutions for every customer interaction</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-black/5 group-hover:bg-black flex items-center justify-center transition-all duration-500">
                            <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold transition-colors">{service.title}</h3>
                            <p className="text-black/60 text-sm">{service.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-black/40 mr-2" />
                              <span className="text-black/70">{feature}</span>
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
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Key Advantages</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Why Choose <span className="text-black/30">Our Services</span></h2>
                    <p className="text-xl text-black/60">Measurable results that drive business growth</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-black/5 group-hover:bg-black flex items-center justify-center transition-all duration-500">
                            <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                              {benefit.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold transition-colors">{benefit.title}</h3>
                              <div className="text-2xl font-bold">{benefit.metric}</div>
                            </div>
                            <p className="text-black/60 text-sm">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Common Questions</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Frequently <span className="text-black/30">Asked Questions</span></h2>
                    <p className="text-xl text-black/60">Everything you need to know about our services</p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black overflow-hidden transition-all duration-500">
                        <div className="p-8">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold transition-colors text-lg">{faq.question}</h4>
                            <ArrowRight className="w-5 h-5 text-black/40 transform group-hover:rotate-90 transition-transform duration-500" />
                          </div>
                          <p className="text-black/60 leading-relaxed text-sm">{faq.answer}</p>
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
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="max-w-6xl border border-white/10 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-white p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Customer Service?</h2>
                <p className="text-black/60 mb-6 leading-relaxed">
                  Join thousands of companies that trust NextelBPO for exceptional inbound customer service solutions.
                </p>
                <div className="space-y-3">
                  {[
                    "24/7 multilingual support",
                    "98% customer satisfaction rate",
                    "Seamless CRM integration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-black/40 mr-3" />
                      <span className="text-black/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-black text-white">
                <h3 className="text-2xl font-bold mb-6">Start Your Service Journey</h3>
                <div 
                  className="border border-white/10 p-6 mb-6 cursor-pointer hover:border-white/30 transition-all duration-500"
                  onClick={() => {
                    const subject = encodeURIComponent("Inbound Services Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your inbound customer service solutions.\n\nBest regards,\n[Your Name]");
                    window.location.href = `mailto:info@nextelbpo.co?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-white/5 p-3 mr-4">
                        <Mail className="w-6 h-6 text-white/40" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Email us at</p>
                        <div className="text-lg font-semibold">info@nextelbpo.co</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/5 p-3 mr-4">
                        <Phone className="w-6 h-6 text-white/40" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Call us at</p>
                        <div className="text-lg font-semibold">+1 (659) 220-0667</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm">
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
