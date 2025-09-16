import { useState, useRef, useEffect } from 'react';
import { Mic, FileText, Clock, CheckCircle, Shield, ArrowRight, Users, Calendar, Target, Zap, Activity, Star } from 'lucide-react';

const Transcription = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Transcription Services - Accurate & Secure Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional transcription services with 99%+ accuracy, HIPAA compliance, and 24-48 hour turnaround. Legal, medical, academic, and general transcription solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional transcription services with 99%+ accuracy, HIPAA compliance, and 24-48 hour turnaround. Legal, medical, academic, and general transcription solutions.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'transcription services, audio transcription, video transcription, medical transcription, legal transcription, academic transcription, HIPAA compliant transcription';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Transcription Services - Accurate & Secure Solutions' },
      { property: 'og:description', content: 'Professional transcription services with 99%+ accuracy, HIPAA compliance, and 24-48 hour turnaround.' },
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
      "serviceType": "Transcription Services",
      "provider": {
        "@type": "Organization",
        "name": "NextelBPO",
        "description": "Professional transcription services provider"
      },
      "description": "Accurate and secure transcription services for legal, medical, academic, and general purposes",
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
    contentRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Services data
  const services = [
    {
      title: "General Transcription",
      description: "Interviews, meetings, podcasts, and more",
      icon: <Mic className="w-6 h-6" />,
      features: ["98%+ accuracy", "Speaker identification", "Timestamps available", "Multiple formats"]
    },
    {
      title: "Legal Transcription",
      description: "Court proceedings, depositions, affidavits",
      icon: <Shield className="w-6 h-6" />,
      features: ["99%+ accuracy", "Certified transcribers", "Confidentiality guaranteed", "Court-ready formatting"]
    },
    {
      title: "Medical Transcription",
      description: "Patient records, doctor's notes, medical reports",
      icon: <Activity className="w-6 h-6" />,
      features: ["HIPAA compliant", "Medical terminology", "Secure transfer", "Quality assurance"]
    },
    {
      title: "Academic Transcription",
      description: "Lectures, research interviews, focus groups",
      icon: <Users className="w-6 h-6" />,
      features: ["Specialist terminology", "Citation formatting", "Research standards", "Peer review ready"]
    }
  ];

  // Industries data
  const industries = [
    {
      industry: "Legal",
      description: "Court reporters, law firms, and legal departments",
      icon: <Shield className="w-6 h-6" />,
      specialties: ["Court proceedings", "Depositions", "Legal interviews", "Contract reviews"]
    },
    {
      industry: "Medical",
      description: "Hospitals, clinics, and healthcare providers",
      icon: <Activity className="w-6 h-6" />,
      specialties: ["Patient consultations", "Medical conferences", "Research interviews", "Clinical notes"]
    },
    {
      industry: "Media & Entertainment",
      description: "Journalists, filmmakers, and content creators",
      icon: <Mic className="w-6 h-6" />,
      specialties: ["Podcasts", "Interviews", "Documentary footage", "Media conferences"]
    },
    {
      industry: "Academic & Research",
      description: "Universities, researchers, and students",
      icon: <Users className="w-6 h-6" />,
      specialties: ["Research interviews", "Academic lectures", "Focus groups", "Thesis defense"]
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Security & Confidentiality",
      description: "Enterprise-grade security with encrypted file transfer and strict confidentiality agreements",
      icon: <Shield className="w-6 h-6" />,
      features: ["HIPAA Compliance", "GDPR Ready", "NDA Protection", "Encrypted Transfer"]
    },
    {
      title: "Accuracy Guarantee",
      description: "Three-step quality assurance process ensures 99%+ accuracy",
      icon: <CheckCircle className="w-6 h-6" />,
      features: ["Native speakers", "Professional editors", "Quality control", "Proofreading"]
    },
    {
      title: "Fast Turnaround",
      description: "Flexible options from same-day to standard delivery",
      icon: <Clock className="w-6 h-6" />,
      features: ["Same-day service", "24-hour turnaround", "Standard 3-5 days", "Bulk processing"]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What file formats do you accept?",
      answer: "We accept all common audio and video formats including MP3, WAV, MP4, MOV, WMV, and more. We can also work with digital dictation files from most systems. If you have an unusual format, our technical team can usually accommodate it."
    },
    {
      question: "How do you handle poor quality recordings?",
      answer: "Our team is experienced with challenging audio conditions. We use professional audio enhancement tools and techniques to improve clarity. We'll assess your files and provide recommendations for improvement if needed."
    },
    {
      question: "Can you provide timestamps in transcripts?",
      answer: "Yes, we can provide timestamps at regular intervals (every 30 seconds, 1 minute, etc.) or at speaker changes, whichever you prefer. We can also provide precise timestamps for specific sections upon request."
    },
    {
      question: "Do you offer verbatim transcription?",
      answer: "Yes, we offer both verbatim (word-for-word including filler words and false starts) and clean read (edited for readability while maintaining meaning) transcription options. You can specify your preference when placing your order."
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Transcription Services - Professional Audio & Video Transcription</h1>
        <p>
          NextelBPO provides professional transcription services with 99%+ accuracy rates, HIPAA compliance, 
          and fast turnaround times. Our services include legal transcription, medical transcription, academic 
          transcription, and general transcription for various industries.
        </p>
        <p>
          With enterprise-grade security measures, encrypted file transfer, and strict confidentiality agreements, 
          we ensure your sensitive information remains protected. Our three-step quality assurance process guarantees 
          accurate transcripts every time.
        </p>
        <p>
          We serve legal professionals, healthcare providers, academic institutions, media companies, and businesses 
          worldwide. Our transcribers are specialized in industry-specific terminology and formatting requirements.
        </p>
        <p>
          Contact NextelBPO today for professional transcription solutions. Email info@nextelbpo.co or call 
          +1 (659) 220-0667 to discuss your transcription needs.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Floating Orbs - Reduced for performance */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-600/10 animate-pulse"
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

          {/* Neural Network Lines - Reduced for performance */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
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

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 tracking-tight">
            Transcription Services
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-indigo-100 mb-4 font-light">
              Accurate, Fast, and Secure Transcription Solutions
            </p>
            <p className="text-lg text-indigo-200/80">
              Professional • HIPAA Compliant • Multi-Industry
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Accuracy Rate", value: "99%+", icon: <Target className="w-5 h-5" /> },
              { label: "Turnaround Time", value: "24-48h", icon: <Clock className="w-5 h-5" /> },
              { label: "Industries Served", value: "10+", icon: <Activity className="w-5 h-5" /> }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-indigo-400">{metric.icon}</div>
                  <span className="text-indigo-100 text-sm font-medium">{metric.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollToContent}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6lx mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'services', label: 'Our Services', icon: <FileText className="w-4 h-4" /> },
                { id: 'industries', label: 'Industries', icon: <Star className="w-4 h-4" /> },
                { id: 'benefits', label: 'Benefits', icon: <Shield className="w-4 h-4" /> },
                { id: 'faq', label: 'FAQ', icon: <CheckCircle className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
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
              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-100 font-medium">Professional Transcription</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Transcription Services</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive transcription solutions across multiple industries and formats</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-indigo-400">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                            <p className="text-slate-400">{service.description}</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                                <span className="text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Fast Turnaround Times</h3>
                        <p className="text-indigo-200">Flexible delivery options to meet your deadlines</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      We offer flexible turnaround options to meet your deadlines, from same-day emergency transcription 
                      to standard 3-5 business day delivery. Our streamlined workflow and dedicated team ensure consistent, 
                      reliable delivery times without compromising on quality.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Same-day (Rush)", "24-hour", "48-hour", "Standard (3-5 days)", "Bulk Projects"].map((option, i) => (
                        <span key={i} className="bg-white/10 border border-indigo-500/30 px-4 py-2 rounded-full text-sm font-medium text-indigo-200">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Tab */}
              {activeTab === 'industries' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
                      <Star className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-100 font-medium">Industry Expertise</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
                    <p className="text-xl text-slate-400">Specialized knowledge across diverse sectors</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {industries.map((item, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-indigo-400">
                              {item.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">{item.industry}</h3>
                            <p className="text-slate-400">{item.description}</p>
                          </div>
                        </div>
                        <div className="pl-16">
                          <h4 className="text-slate-300 font-medium mb-2">Specializations:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {item.specialties.map((specialty, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                                <span className="text-slate-300 text-sm">{specialty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-indigo-400" />
                      Specialized Transcription
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      We work with specialized terminology across industries including technical, financial, and scientific fields. 
                      Our transcribers are trained in industry-specific language and formatting requirements to ensure accuracy 
                      and professional presentation.
                    </p>
                    <button className="group inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                      Request specialized service 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
                      <Shield className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-100 font-medium">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Transcription Services</h2>
                    <p className="text-xl text-slate-400">Professional standards that exceed industry expectations</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                          <div className="text-green-400">
                            {benefit.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-indigo-300 transition-colors">{benefit.title}</h3>
                        <p className="text-slate-400 text-center mb-4">{benefit.description}</p>
                        <div className="space-y-2">
                          {benefit.features.map((feature, i) => (
                            <div key={i} className="flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              <span className="text-slate-300">{feature}</span>
                            </div>
                          ))}
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
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-6">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      <span className="text-indigo-100 font-medium">Common Questions</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-400">Everything you need to know about our transcription services</p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500">
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold text-white group-hover:text-indigo-300 transition-colors text-lg">{faq.question}</h4>
                            <ArrowRight className="w-5 h-5 text-indigo-400 transform group-hover:rotate-90 transition-transform duration-300" />
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
              <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready for Professional Transcription?</h2>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Join professionals who trust NextelBPO for accurate, secure, and timely transcription services.
                </p>
                <div className="space-y-3">
                  {[
                    "99%+ accuracy guarantee",
                    "HIPAA compliant processes",
                    "24-48 hour turnaround"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Quote Today</h3>
                <div 
                  className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6 cursor-pointer hover:bg-indigo-500/20 transition-colors duration-300"
                  onClick={() => {
                    const subject = encodeURIComponent("Transcription Services Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your transcription services.\n\nBest regards,\n[Your Name]");
                    window.location.href = `mailto:info@nextelbpo.co?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                      <FileText className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Contact us at</p>
                      <div className="text-xl font-semibold text-indigo-400">
                        info@nextelbpo.co
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">
                  Our transcription specialists typically respond within 24 hours with a detailed quote and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transcription;