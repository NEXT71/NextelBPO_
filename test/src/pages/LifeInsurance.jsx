import { useState, useRef, useEffect } from 'react';
import { Mail, Shield, Calendar, TrendingUp, Users, Check, ArrowRight, CheckCircle, Phone, Search, Target, Zap, Activity, Star } from 'lucide-react';

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
      <section className="relative min-h-screen bg-black text-white flex items-center border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920)' }}></div>
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="py-40">
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
                Life Insurance Sales
              </p>
              
              <h1 className="text-[96px] font-bold leading-[0.9] tracking-tight mb-8">
                Compliant Insurance{' '}
                <span className="text-white/30">Sales Solutions</span>
              </h1>
              
              <p className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
                15-25% conversion rates with 100% regulatory compliance. Licensed agents specialized in term, whole life, and universal insurance.
              </p>
              
              <button 
                onClick={scrollToContent}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-white/90 transition-all duration-500"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentSectionRef} className="py-32 bg-white border-b border-black/5">
        <div className="container mx-auto px-8 max-w-[1600px]">
          {/* Tabs Navigation */}
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
                  className={`group inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-500 text-sm uppercase tracking-wider ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'border border-black/10 hover:border-black'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="border border-black/5">
              {/* Approach Tab */}
              {activeTab === 'approach' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Strategic Sales Approach</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Our Life Insurance <span className="text-black/30">Sales Methodology</span></h2>
                    <p className="text-xl text-black/60">Compliance-first approach with proven results in the insurance industry</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {approachSteps.map((step, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="bg-black/5 group-hover:bg-black p-4 w-fit mb-6 transition-all duration-500">
                          <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-black/60">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border border-black/5 hover:border-black p-8 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-black/5 p-4">
                        <Zap className="w-8 h-8 text-black/40" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Specialized Insurance Sales</h3>
                        <p className="text-black/60">Expert knowledge across all insurance product lines</p>
                      </div>
                    </div>
                    <p className="text-black/70 mb-6 leading-relaxed">
                      Our agents are specifically trained in life insurance products including term life, whole life, 
                      universal life, and final expense policies. We understand the nuances of each product type and 
                      how to effectively communicate their benefits while maintaining full regulatory compliance.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Term Life", "Whole Life", "Universal Life", "Final Expense", "Annuities", "Disability Insurance"].map((product, i) => (
                        <span key={i} className="border border-black/10 px-4 py-2 text-xs uppercase tracking-wider text-black/60">
                          {product}
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
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Our Life Insurance <span className="text-black/30">Sales Services</span></h2>
                    <p className="text-xl text-black/60">Comprehensive solutions for every stage of the sales process</p>
                  </div>
                  
                  <div className="space-y-8">
                    {services.map((service, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="bg-black/5 group-hover:bg-black p-4 transition-all duration-500">
                            <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-black/60">{service.description}</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <h4 className="font-medium text-black/70 mb-3 text-sm uppercase tracking-wider">Service Features:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <Check className="w-4 h-4 text-black/40 mr-2" />
                                <span className="text-black/70 text-sm">{feature}</span>
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
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Proven Performance</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Measurable <span className="text-black/30">Results</span></h2>
                    <p className="text-xl text-black/60">Data-driven outcomes that transform your insurance business</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {results.map((result, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500 text-center">
                        <div className="bg-black/5 group-hover:bg-black p-4 w-fit mx-auto mb-6 transition-all duration-500">
                          <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                            {result.icon}
                          </div>
                        </div>
                        <p className="text-4xl font-bold mb-3">{result.metric}</p>
                        <p className="font-medium mb-2">{result.description}</p>
                        <p className="text-black/60 text-sm">{result.detail}</p>
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
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Common Questions</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Frequently <span className="text-black/30">Asked Questions</span></h2>
                    <p className="text-xl text-black/60">Everything you need to know about our insurance sales services</p>
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
        </div>
      </section>
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="max-w-6xl border border-white/10 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-white p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Insurance Sales?</h2>
                <p className="text-black/60 mb-6 leading-relaxed">
                  Join leading insurance carriers and agencies that trust NextelBPO for compliant, high-converting sales solutions.
                </p>
                <div className="space-y-3">
                  {[
                    "15-25% conversion rates",
                    "100% regulatory compliance",
                    "Licensed insurance agents"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-black/40 mr-3" />
                      <span className="text-black/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-black text-white">
                <h3 className="text-2xl font-bold mb-6">Start Your Sales Transformation</h3>
                <div 
                  className="border border-white/10 p-6 mb-6 cursor-pointer hover:border-white/30 transition-all duration-500"
                  onClick={() => {
                    const subject = encodeURIComponent("Life Insurance Sales Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your life insurance sales services.\n\nBest regards,\n[Your Name]");
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