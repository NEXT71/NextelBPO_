import { useState, useRef } from 'react';
import { Shield, Calendar, TrendingUp, Users, Check, ArrowRight, CheckCircle, Phone, Search } from 'lucide-react';

const LifeInsuranceSales = () => {
  const [activeTab, setActiveTab] = useState('approach');
  const contentSectionRef = useRef(null);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">Life Insurance</span> Sales Solutions
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Specialized outbound sales services to grow your insurance business
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
                { id: 'approach', label: 'Our Approach' },
                { id: 'services', label: 'Services' },
                { id: 'results', label: 'Results' },
                { id: 'faq', label: 'FAQ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              {/* Approach Tab */}
              {activeTab === 'approach' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Sales Approach</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        icon: <Users className="w-8 h-8 text-blue-600" />,
                        title: "Targeted Prospecting",
                        description: "We identify and qualify ideal candidates for your products"
                      },
                      {
                        icon: <Phone className="w-8 h-8 text-blue-600" />,
                        title: "Needs-Based Selling",
                        description: "Consultative approach focused on client needs and goals"
                      },
                      {
                        icon: <Shield className="w-8 h-8 text-blue-600" />,
                        title: "Compliance Focused",
                        description: "All interactions follow strict regulatory guidelines"
                      }
                    ].map((step, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Insurance Sales</h3>
                    <p className="text-gray-700 mb-6">
                      Our agents are specifically trained in life insurance products including term life, whole life, 
                      universal life, and final expense policies. We understand the nuances of each product type and 
                      how to effectively communicate their benefits.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Term Life", "Whole Life", "Universal Life", "Final Expense", "Annuities"].map((product, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Life Insurance Sales Services</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Lead Generation & Qualification",
                        description: "We identify and pre-qualify potential clients based on your ideal customer profile",
                        icon: <Search className="w-6 h-6 text-blue-500" />,
                        features: ["Demographic targeting", "Financial qualification", "Needs assessment"]
                      },
                      {
                        title: "Appointment Setting",
                        description: "Book qualified appointments for your in-house sales team",
                        icon: <Calendar className="w-6 h-6 text-blue-500" />,
                        features: ["Calendar coordination", "Reminder follow-ups", "Pre-call briefing"]
                      },
                      {
                        title: "Full Sales Cycle",
                        description: "End-to-end sales process from initial contact to policy issuance",
                        icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
                        features: ["Needs analysis", "Product presentation", "Application completion"]
                      },
                      {
                        title: "Client Onboarding",
                        description: "Complete policy setup and initial premium collection",
                        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
                        features: ["Application submission", "Underwriting coordination", "First premium collection"]
                      }
                    ].map((service, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                        <div className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                              <p className="text-gray-600">{service.description}</p>
                            </div>
                          </div>
                          <div className="pl-14">
                            <h4 className="font-medium text-gray-700 mb-2">Service Includes:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Proven Results</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        metric: "15-25%",
                        description: "Average conversion rate on qualified leads",
                        icon: <TrendingUp className="w-6 h-6 text-green-500" />
                      },
                      {
                        metric: "3-5x",
                        description: "ROI compared to in-house sales teams",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      },
                      {
                        metric: "40-60%",
                        description: "Reduction in customer acquisition costs",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                      }
                    ].map((result, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            {result.icon}
                          </div>
                          <p className="text-3xl font-bold text-blue-600 mb-2">{result.metric}</p>
                          <p className="text-gray-700">{result.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Success Stories</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          quote: "NextelBPO helped us increase our policy sales by 35% in just six months while reducing our acquisition costs.",
                          author: "Regional Insurance Provider"
                        },
                        {
                          quote: "Their agents are as knowledgeable as our in-house team, and their compliance standards are impeccable.",
                          author: "National Life Insurance Carrier"
                        }
                      ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                          <p className="font-medium text-gray-800">— {testimonial.author}</p>
                        </div>
                      ))}
                    </div>
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
                        question: "How do you ensure compliance with insurance regulations?",
                        answer: "All our agents complete rigorous compliance training and we implement multiple layers of quality assurance. Our processes are designed to meet state insurance regulations and carrier requirements."
                      },
                      {
                        question: "What type of life insurance products can you sell?",
                        answer: "We're licensed and experienced in selling term life, whole life, universal life, final expense, and annuities. Our agents receive product-specific training for each campaign."
                      },
                      {
                        question: "How do you handle client data security?",
                        answer: "We implement enterprise-grade security measures including encrypted data transfer, secure storage, and strict access controls to protect sensitive client information."
                      },
                      {
                        question: "Can you integrate with our CRM and quoting systems?",
                        answer: "Yes, we have experience integrating with all major insurance CRMs and quoting platforms to ensure seamless workflow and data accuracy."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                        <button className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center">
                          <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{faq.question}</span>
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

export default LifeInsuranceSales;