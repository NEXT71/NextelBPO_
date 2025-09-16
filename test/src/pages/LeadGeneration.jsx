import { useState, useRef, useEffect } from 'react';
import { Search, Phone, Shield, TrendingUp, Users, ArrowRight, CheckCircle, Target, Zap, Activity, Star } from 'lucide-react';

const LeadGeneration = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            Lead Generation
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              High-Quality Leads That Convert Into Sales
            </p>
            <p className="text-lg text-purple-200/80">
              Targeted • Qualified • Results-Driven
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: "Conversion Rate", value: "3-5x", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Lead Quality Score", value: "95%", icon: <Target className="w-5 h-5" /> },
              { label: "Industries Served", value: "15+", icon: <Activity className="w-5 h-5" /> }
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

          <button 
            onClick={scrollToContent}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentSectionRef} className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
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
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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
              {/* Process Tab */}
              {activeTab === 'process' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                      <Search className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-100 font-medium">Strategic Approach</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Lead Generation Process</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">A systematic approach to identifying, engaging, and qualifying your ideal prospects</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
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
                    ].map((step, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300">
                          <div className="text-purple-400 group-hover:text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{step.title}</h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Comprehensive Lead Nurturing</h3>
                        <p className="text-purple-200">From first contact to deal closure</p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Our team doesn't stop at initial contact. We nurture leads through personalized follow-ups, 
                      providing valuable content, and addressing objections until they're ready to convert. This results 
                      in higher conversion rates and better ROI for your marketing investment.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Email Sequences", "CRM Integration", "Behavior Tracking", "Lead Scoring", "Follow-up Automation"].map((item, i) => (
                        <span key={i} className="bg-white/10 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-medium text-purple-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-100 font-medium">Proven Results</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Why Our Lead Generation Works</h2>
                    <p className="text-xl text-slate-400">Measurable outcomes that drive revenue growth</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
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
                    ].map((benefit, index) => (
                      <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <div className="text-green-400">
                              {benefit.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                              <div className="text-2xl font-bold text-purple-400">{benefit.metric}</div>
                            </div>
                            <p className="text-slate-400">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Tab */}
              {activeTab === 'industries' && (
                <div className="p-8 md:p-12">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                      <Star className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-100 font-medium">Specialized Expertise</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
                    <p className="text-xl text-slate-400">Deep expertise across multiple verticals</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                      { name: "Insurance", icon: <Shield className="w-6 h-6" /> },
                      { name: "Real Estate", icon: <Target className="w-6 h-6" /> },
                      { name: "Healthcare", icon: <Activity className="w-6 h-6" /> },
                      { name: "Technology", icon: <Zap className="w-6 h-6" /> },
                      { name: "Telecommunications", icon: <Phone className="w-6 h-6" /> },
                      { name: "Financial Services", icon: <TrendingUp className="w-6 h-6" /> }
                    ].map((industry, index) => (
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
                    {[
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
                    ].map((faq, index) => (
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
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Generate Quality Leads?</h2>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Join successful companies that trust NextelBPO for high-converting lead generation campaigns.
                </p>
                <div className="space-y-3">
                  {[
                    "3-5x higher conversion rates",
                    "Dedicated lead generation team",
                    "Real-time campaign reporting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Start Generating Leads Today</h3>
                <div 
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6 cursor-pointer hover:bg-purple-500/20 transition-colors duration-300"
                  onClick={() => {
                    const subject = encodeURIComponent("Lead Generation Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your lead generation services.\n\nBest regards,\n[Your Name]");
                    window.location.href = `mailto:info@nextelbpo.co?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Search className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Contact us at</p>
                      <div className="text-xl font-semibold text-purple-400">
                        info@nextelbpo.co
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">
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
