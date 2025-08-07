import { useState, useRef } from 'react';
import { Search, Phone, Shield, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const LeadGeneration = () => {
  const [activeTab, setActiveTab] = useState('process');
  const contentSectionRef = useRef(null);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `
          }}></div>
          
          {/* Floating Elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              <Search className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Lead Generation</span> Services
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            High-quality leads that convert into sales and grow your business
          </p>

          <div className="flex justify-center">
            <button 
              onClick={scrollToContent}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentSectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'process', label: 'Our Process' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'industries', label: 'Industries' },
                { id: 'faq', label: 'FAQ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              {/* Process Tab */}
              {activeTab === 'process' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Lead Generation Process</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        icon: <Search className="w-8 h-8 text-purple-600" />,
                        title: "Target Identification",
                        description: "We analyze your ideal customer profile and identify high-potential targets"
                      },
                      {
                        icon: <Phone className="w-8 h-8 text-purple-600" />,
                        title: "Outreach Campaign",
                        description: "Multi-channel approach including calls, emails, and social media"
                      },
                      {
                        icon: <Shield className="w-8 h-8 text-purple-600" />,
                        title: "Lead Qualification",
                        description: "Rigorous vetting process to ensure only sales-ready leads"
                      }
                    ].map((step, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Lead Nurturing</h3>
                    <p className="text-gray-700 mb-6">
                      Our team doesn't stop at initial contact. We nurture leads through personalized follow-ups, 
                      providing valuable content, and addressing objections until they're ready to convert.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Email Sequences", "CRM Integration", "Behavior Tracking", "Lead Scoring"].map((item, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Our Lead Generation Works</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Higher Conversion Rates",
                        description: "Our qualified leads convert 3-5x better than purchased lists",
                        icon: <TrendingUp className="w-6 h-6 text-green-500" />
                      },
                      {
                        title: "Cost Effective",
                        description: "Pay only for qualified leads, not vague marketing metrics",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      },
                      {
                        title: "Dedicated Team",
                        description: "Your own trained professionals focused on your campaign",
                        icon: <Users className="w-6 h-6 text-green-500" />
                      },
                      {
                        title: "Real-time Reporting",
                        description: "Transparent metrics and insights into your lead pipeline",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Industries We Serve</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Insurance",
                      "Real Estate",
                      "Healthcare",
                      "Technology",
                      "Telecommunications",
                    ].map((industry, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="font-medium text-gray-800">{industry}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Don't see your industry listed? We specialize in creating tailored lead generation 
                      programs for unique business needs.
                    </p>
                    <button className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-800 group">
                      Request custom solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "How do you ensure lead quality?",
                        answer: "We use a multi-step verification process including BANT qualification (Budget, Authority, Need, Timeline) and custom criteria you specify."
                      },
                      {
                        question: "What's the typical lead volume we can expect?",
                        answer: "Volume depends on your industry and target market, but most clients see 50-200 qualified leads per month from our campaigns."
                      },
                      {
                        question: "How quickly can you start generating leads?",
                        answer: "After our initial strategy session (1-2 days), we can typically start delivering leads within 1 week."
                      },
                      {
                        question: "Do you work with international markets?",
                        answer: "Yes, we have experience generating leads across North America, Europe, Middle East, and Asia-Pacific regions."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                        <button className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center">
                          <span className="font-semibold text-gray-800">{faq.question}</span>
                          <svg className="w-5 h-5 text-gray-500 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="px-6 pb-6">
                          <p className="text-gray-600">{faq.answer}</p>
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
    </div>
  );
};

export default LeadGeneration;