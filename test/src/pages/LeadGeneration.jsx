import { useState, useRef, useEffect } from 'react';
import { Mail, Check, Search, Phone, Shield, TrendingUp, Users, ArrowRight, CheckCircle, Target, Zap, Activity, Star } from 'lucide-react';

const LeadGeneration = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Lead Generation Services - High-Converting Sales Leads';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional B2B lead generation services with 3-5x higher conversion rates. BANT qualified leads, dedicated teams, and real-time reporting. Boost your sales pipeline with NextelBPO.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional B2B lead generation services with 3-5x higher conversion rates. BANT qualified leads, dedicated teams, and real-time reporting. Boost your sales pipeline with NextelBPO.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'B2B lead generation, qualified leads, sales leads, lead qualification, BANT leads, telemarketing services, appointment setting, sales outsourcing';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Lead Generation - High-Converting Sales Leads' },
      { property: 'og:description', content: 'Professional B2B lead generation services with 3-5x higher conversion rates and BANT qualified prospects.' },
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
      "serviceType": "Lead Generation",
      "provider": {
        "@type": "Organization",
        "name": "NextelBPO",
        "description": "Professional B2B lead generation and sales development services"
      },
      "description": "High-quality B2B lead generation services with BANT qualification and dedicated teams",
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
  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Target Identification",
      description: "We analyze your ideal customer profile and identify high-potential targets using advanced data analytics"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Outreach Campaign",
      description: "Multi-channel approach including calls, emails, and social media with personalized messaging"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Lead Qualification",
      description: "Rigorous BANT qualification process to ensure only sales-ready leads reach your team"
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Higher Conversion Rates",
      description: "Our qualified leads convert 3-5x better than purchased lists or cold marketing campaigns",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "3-5x"
    },
    {
      title: "Cost Effective ROI",
      description: "Pay only for qualified leads, not vague marketing metrics or unqualified prospects",
      icon: <Target className="w-6 h-6" />,
      metric: "ROI+"
    },
    {
      title: "Dedicated Team",
      description: "Your own trained professionals focused exclusively on your campaign and industry",
      icon: <Users className="w-6 h-6" />,
      metric: "24/7"
    },
    {
      title: "Real-time Reporting",
      description: "Transparent metrics and insights into your lead pipeline with live dashboard access",
      icon: <Activity className="w-6 h-6" />,
      metric: "Live"
    }
  ];

  // Industries data
  const industries = [
    { name: "Insurance", icon: <Shield className="w-6 h-6" /> },
    { name: "Real Estate", icon: <Target className="w-6 h-6" /> },
    { name: "Healthcare", icon: <Activity className="w-6 h-6" /> },
    { name: "Technology", icon: <Zap className="w-6 h-6" /> },
    { name: "Telecommunications", icon: <Phone className="w-6 h-6" /> },
    { name: "Financial Services", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do you ensure lead quality?",
      answer: "We use a comprehensive multi-step verification process including BANT qualification (Budget, Authority, Need, Timeline), custom criteria you specify, and behavioral scoring to ensure only high-quality prospects reach your sales team."
    },
    {
      question: "What's the typical lead volume we can expect?",
      answer: "Volume depends on your industry, target market, and budget, but most clients see 50-200 qualified leads per month from our campaigns. We provide detailed projections during our initial consultation."
    },
    {
      question: "How quickly can you start generating leads?",
      answer: "After our initial strategy session and campaign setup (1-2 days), we can typically start delivering qualified leads within 5-7 business days. Rush setup is available for urgent projects."
    },
    {
      question: "Do you work with international markets?",
      answer: "Yes, we have extensive experience generating leads across North America, Europe, Middle East, and Asia-Pacific regions. Our multilingual team ensures cultural and linguistic accuracy in all markets."
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Lead Generation Services - Professional B2B Sales Lead Solutions</h1>
        <p>
          NextelBPO delivers industry-leading B2B lead generation services with 3-5x higher conversion rates 
          than traditional marketing methods. Our BANT qualified leads, dedicated teams, and multi-channel 
          approach drive measurable revenue growth for businesses across 15+ industries.
        </p>
        <p>
          With advanced target identification, personalized outreach campaigns, and rigorous lead qualification, 
          we ensure your sales team receives only the highest quality prospects. Our real-time reporting and 
          dedicated account management provide complete transparency into campaign performance.
        </p>
        <p>
          Our lead generation services include comprehensive prospect research, multi-touch campaigns across 
          phone, email, and social channels, BANT qualification, CRM integration, and ongoing lead nurturing 
          until prospects are sales-ready.
        </p>
        <p>
          Contact NextelBPO today to boost your sales pipeline with high-converting qualified leads. 
          Email info@nextelbpo.co or call +1 (659) 220-0667 to discuss your lead generation requirements.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-40 border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920)' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Lead Generation</div>
            <h1 className="text-[96px] font-bold leading-[0.9] tracking-tight mb-8">
              High-Converting<br />
              <span className="text-white/30">Sales Leads</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
              Professional B2B lead generation services with 3-5x higher conversion rates. BANT qualified leads, dedicated teams, and real-time reporting.
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
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'process', label: 'Our Process', icon: <Search className="w-4 h-4" /> },
                { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'industries', label: 'Industries', icon: <Star className="w-4 h-4" /> },
                { id: 'faq', label: 'FAQ', icon: <Shield className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-500 ${
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
              {/* Process Tab */}
              {activeTab === 'process' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Strategic Approach</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Our{' '}<span className="text-black/30">Process</span></h2>
                    <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">A systematic approach to identifying, engaging, and qualifying your ideal prospects</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {processSteps.map((step, index) => (
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

                  <div className="border border-black/10 p-8 bg-black/[0.02]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-black flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">Comprehensive Lead Nurturing</h3>
                        <p className="text-black/50 text-sm">From first contact to deal closure</p>
                      </div>
                    </div>
                    <p className="text-black/70 mb-8 leading-relaxed">
                      Our team doesn't stop at initial contact. We nurture leads through personalized follow-ups, 
                      providing valuable content, and addressing objections until they're ready to convert. This results 
                      in higher conversion rates and better ROI for your marketing investment.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Email Sequences", "CRM Integration", "Behavior Tracking", "Lead Scoring", "Follow-up Automation"].map((item, i) => (
                        <span key={i} className="border border-black/10 px-4 py-2 text-xs uppercase tracking-wider text-black/60">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Proven Results</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Why Our{' '}<span className="text-black/30">Lead Generation Works</span></h2>
                    <p className="text-xl text-black/60">Measurable outcomes that drive revenue growth</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="group border border-black/5 hover:border-black p-8 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-black/5 flex items-center justify-center group-hover:bg-black transition-all duration-500">
                            <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                              {benefit.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-semibold group-hover:text-black/70 transition-colors">{benefit.title}</h3>
                              <div className="text-2xl font-bold text-black/40">{benefit.metric}</div>
                            </div>
                            <p className="text-black/60 leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Tab */}
              {activeTab === 'industries' && (
                <div className="p-12 md:p-16">
                  <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Specialized Expertise</p>
                    <h2 className="text-[56px] font-bold tracking-tight mb-6">Industries{' '}<span className="text-black/30">We Serve</span></h2>
                    <p className="text-xl text-black/60">Deep expertise across multiple verticals</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {industries.map((industry, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-purple-400">
                              {industry.icon}
                            </div>
                          </div>
                          <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">{industry.name}</h3>
                          <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-purple-400" />
                      Custom Solutions
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Don't see your industry listed? We specialize in creating tailored lead generation 
                      programs for unique business needs. Our team researches your market, understands 
                      your buyer personas, and develops custom strategies that deliver results.
                    </p>
                    <button className="group inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors">
                      Request custom solution 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-100 font-medium">Common Questions</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-400">Everything you need to know about our lead generation services</p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-lg">{faq.question}</h4>
                            <ArrowRight className="w-5 h-5 text-purple-400 transform group-hover:rotate-90 transition-transform duration-300" />
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
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 max-w-[1600px]">
          <div className="max-w-6xl mx-auto border border-white/10 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-white p-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Transform Your Lead Generation</h3>
                  <p className="text-black/60 mb-6 leading-relaxed">
                    Partner with NextelBPO for data-driven lead generation campaigns that deliver measurable results.
                  </p>
                  <div className="space-y-3">
                    {[
                      "AI-powered lead qualification",
                      "Dedicated campaign managers",
                      "Real-time analytics dashboard",
                      "Multi-channel outreach"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-black/40 mr-3" />
                        <span className="text-black/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-black text-white">
                <h3 className="text-2xl font-bold mb-6">Start Generating Leads Today</h3>
                <div 
                  className="border border-white/10 p-6 mb-6 cursor-pointer hover:border-white/30 transition-all duration-500"
                  onClick={() => {
                    const subject = encodeURIComponent("Lead Generation Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your lead generation services.\n\nBest regards,\n[Your Name]");
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
                  Our lead generation specialists typically respond within 24 hours to discuss your campaign strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
