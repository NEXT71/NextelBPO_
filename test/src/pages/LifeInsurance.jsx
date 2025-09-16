import { useState, useRef, useEffect } from 'react';
import { Shield, Calendar, TrendingUp, Users, Check, ArrowRight, CheckCircle, Phone, Search, Target, Zap, Activity, Star } from 'lucide-react';

const LifeInsuranceSales = () => {
  const [activeTab, setActiveTab] = useState('approach');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Life Insurance Sales Services - Compliant Outbound Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional life insurance sales services with 15-25% conversion rates. Compliant outbound sales, licensed agents, and specialized expertise in term life, whole life, and universal life insurance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional life insurance sales services with 15-25% conversion rates. Compliant outbound sales, licensed agents, and specialized expertise in term life, whole life, and universal life insurance.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'life insurance sales, insurance telemarketing, term life insurance, whole life sales, licensed insurance agents, compliant insurance sales, final expense insurance, annuities sales';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Life Insurance Sales - Compliant Outbound Solutions' },
      { property: 'og:description', content: 'Professional life insurance sales services with 15-25% conversion rates and 100% regulatory compliance.' },
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
      "serviceType": "Life Insurance Sales",
      "provider": {
        "@type": "Organization",
        "name": "NextelBPO",
        "description": "Professional life insurance sales and telemarketing services"
      },
      "description": "Licensed life insurance sales agents providing compliant outbound sales solutions with high conversion rates",
      "areaServed": "United States",
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

  // Approach data
  const approachSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Prospecting",
      description: "We identify and qualify ideal candidates for your insurance products using advanced data analytics"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Needs-Based Selling",
      description: "Consultative approach focused on understanding client needs and financial goals"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Focused",
      description: "All interactions follow strict regulatory guidelines and industry best practices"
    }
  ];

  // Services data
  const services = [
    {
      title: "Lead Generation & Qualification",
      description: "We identify and pre-qualify potential clients based on your ideal customer profile",
      icon: <Search className="w-6 h-6" />,
      features: ["Demographic targeting", "Financial qualification", "Needs assessment", "Compliance screening"]
    },
    {
      title: "Appointment Setting",
      description: "Book qualified appointments for your in-house sales team or licensed agents",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Calendar coordination", "Reminder follow-ups", "Pre-call briefing", "Prospect preparation"]
    },
    {
      title: "Full Sales Cycle",
      description: "End-to-end sales process from initial contact to policy issuance",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Needs analysis", "Product presentation", "Application completion", "Objection handling"]
    },
    {
      title: "Client Onboarding",
      description: "Complete policy setup and initial premium collection with ongoing support",
      icon: <CheckCircle className="w-6 h-6" />,
      features: ["Application submission", "Underwriting coordination", "First premium collection", "Policy delivery"]
    }
  ];

  // Results data
  const results = [
    {
      metric: "15-25%",
      description: "Average conversion rate on qualified leads",
      icon: <TrendingUp className="w-6 h-6" />,
      detail: "Industry average: 5-8%"
    },
    {
      metric: "3-5x",
      description: "ROI compared to in-house sales teams",
      icon: <Target className="w-6 h-6" />,
      detail: "Based on client data"
    },
    {
      metric: "40-60%",
      description: "Reduction in customer acquisition costs",
      icon: <Activity className="w-6 h-6" />,
      detail: "Compared to traditional methods"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "NextelBPO helped us increase our policy sales by 35% in just six months while reducing our acquisition costs significantly.",
      author: "Regional Insurance Provider",
      result: "35% increase in sales"
    },
    {
      quote: "Their agents are as knowledgeable as our in-house team, and their compliance standards are absolutely impeccable.",
      author: "National Life Insurance Carrier",
      result: "100% compliance rate"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do you ensure compliance with insurance regulations?",
      answer: "All our agents complete rigorous compliance training specific to insurance regulations in each state we operate. We implement multiple layers of quality assurance, regular compliance audits, and maintain detailed records. Our processes are designed to meet and exceed state insurance regulations and carrier requirements."
    },
    {
      question: "What type of life insurance products can you sell?",
      answer: "We're licensed and experienced in selling term life, whole life, universal life, final expense, and annuities. Our agents receive product-specific training for each campaign and stay updated on the latest product features and benefits."
    },
    {
      question: "How do you handle client data security?",
      answer: "We implement enterprise-grade security measures including encrypted data transfer, secure storage systems, and strict access controls. All client information is protected according to HIPAA guidelines and industry best practices for sensitive financial data."
    },
    {
      question: "Can you integrate with our CRM and quoting systems?",
      answer: "Yes, we have extensive experience integrating with all major insurance CRMs, quoting platforms, and carrier systems. Our technical team ensures seamless workflow integration and real-time data synchronization to maintain accuracy and efficiency."
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Life Insurance Sales Services - Professional Compliant Outbound Solutions</h1>
        <p>
          NextelBPO provides specialized life insurance sales services with 15-25% conversion rates and 100% 
          regulatory compliance. Our licensed agents are trained in term life, whole life, universal life, 
          final expense, and annuities with expertise across all major insurance carriers.
        </p>
        <p>
          Our comprehensive life insurance sales solutions include lead generation, appointment setting, 
          full sales cycle management, and client onboarding. With needs-based selling approaches and 
          advanced data analytics, we deliver 3-5x ROI compared to in-house teams.
        </p>
        <p>
          All interactions follow strict regulatory guidelines with enterprise-grade security measures 
          and HIPAA compliance. Our agents complete rigorous compliance training and quality assurance 
          programs to ensure adherence to state insurance regulations and carrier requirements.
        </p>
        <p>
          Contact NextelBPO today to transform your insurance sales with our compliant, high-converting 
          solutions. Email info@nextelbpo.co or call +1 (659) 220-0667 to discuss your requirements.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
          
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
              className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-600/10 animate-pulse"
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
                <stop offset="100%" stopColor="#6366F1" />
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

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 tracking-tight">
            Life Insurance Sales
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">
              Specialized Outbound Sales Solutions
            </p>
            <p className="text-lg text-blue-200/80">
              Compliant • Expert • Results-Driven
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Conversion Rate", value: "15-25%", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "ROI Increase", value: "3-5x", icon: <Target className="w-5 h-5" /> },
              { label: "Cost Reduction", value: "40-60%", icon: <Activity className="w-5 h-5" /> }
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
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Approach
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
                { id: 'approach', label: 'Our Approach', icon: <Shield className="w-4 h-4" /> },
                { id: 'services', label: 'Services', icon: <Users className="w-4 h-4" /> },
                { id: 'results', label: 'Results', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'faq', label: 'FAQ', icon: <Star className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
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
              {/* Approach Tab */}
              {activeTab === 'approach' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Strategic Sales Approach</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Life Insurance Sales Methodology</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">Compliance-first approach with proven results in the insurance industry</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {approachSteps.map((step, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                          <div className="text-blue-400 group-hover:text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Specialized Insurance Sales</h3>
                        <p className="text-blue-200">Expert knowledge across all insurance product lines</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Our agents are specifically trained in life insurance products including term life, whole life, 
                      universal life, and final expense policies. We understand the nuances of each product type and 
                      how to effectively communicate their benefits while maintaining full regulatory compliance.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Term Life", "Whole Life", "Universal Life", "Final Expense", "Annuities", "Disability Insurance"].map((product, i) => (
                        <span key={i} className="bg-white/10 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium text-blue-200">
                          {product}
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
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Service Portfolio</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Life Insurance Sales Services</h2>
                    <p className="text-xl text-slate-400">Comprehensive solutions for every stage of the sales process</p>
                  </div>
                  
                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-blue-400">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{service.title}</h3>
                            <p className="text-slate-400">{service.description}</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <h4 className="font-medium text-slate-300 mb-3">Service Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <Check className="w-4 h-4 text-blue-400 mr-2" />
                                <span className="text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Tab */}
              {activeTab === 'results' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Proven Performance</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Measurable Results</h2>
                    <p className="text-xl text-slate-400">Data-driven outcomes that transform your insurance business</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {results.map((result, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="text-green-400">
                              {result.icon}
                            </div>
                          </div>
                          <p className="text-4xl font-bold text-blue-400 mb-2">{result.metric}</p>
                          <p className="text-white font-medium mb-2">{result.description}</p>
                          <p className="text-slate-400 text-sm">{result.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                      <Star className="w-8 h-8 text-blue-400" />
                      Client Success Stories
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                          <p className="text-slate-300 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                          <div className="flex justify-between items-center">
                            <p className="font-medium text-white">— {testimonial.author}</p>
                            <span className="bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-sm">
                              {testimonial.result}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                      <Star className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-100 font-medium">Common Questions</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-400">Everything you need to know about our insurance sales services</p>
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
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Insurance Sales?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Join leading insurance carriers and agencies that trust NextelBPO for compliant, high-converting sales solutions.
                </p>
                <div className="space-y-3">
                  {[
                    "15-25% conversion rates",
                    "100% regulatory compliance",
                    "Licensed insurance agents"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Sales Transformation</h3>
                <div 
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6 mb-6 cursor-pointer hover:bg-blue-500/20 transition-colors duration-300"
                  onClick={() => {
                    const subject = encodeURIComponent("Life Insurance Sales Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your life insurance sales services.\n\nBest regards,\n[Your Name]");
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
                  Our insurance sales experts typically respond within 24 hours to discuss your specific requirements and compliance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInsuranceSales;