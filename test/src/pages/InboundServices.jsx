import { useState, useRef } from 'react';
import { Phone, Headset, Clock, Users, ArrowRight, CheckCircle, Shield, Calendar, ShoppingCart, AlertTriangle } from 'lucide-react';

const InboundServices = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
              <Headset className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">Inbound Services</span> Solutions
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            24/7 professional customer support and call handling for your business
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
                { id: 'overview', label: 'Overview' },
                { id: 'services', label: 'Our Services' },
                { id: 'benefits', label: 'Benefits' },
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
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Inbound Call Handling</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        icon: <Headset className="w-8 h-8 text-blue-600" />,
                        title: "Multilingual Support",
                        description: "Agents fluent in 10+ languages to serve your global customer base"
                      },
                      {
                        icon: <Shield className="w-8 h-8 text-blue-600" />,
                        title: "Quality Assurance",
                        description: "Rigorous monitoring and scoring to maintain service excellence"
                      },
                      {
                        icon: <Users className="w-8 h-8 text-blue-600" />,
                        title: "Scalable Teams",
                        description: "Easily adjust capacity based on your business needs"
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
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">24/7 Customer Support</h3>
                    <p className="text-gray-700 mb-6">
                      Our teams work around the clock to ensure your customers always reach a live agent when they need assistance, 
                      with average response times under 30 seconds.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["365 Days/Year", "Holiday Coverage", "Emergency Support", "Multi-channel"].map((item, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Inbound Service Offerings</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Customer Support",
                        description: "Technical support, product inquiries, and account management",
                        icon: <Headset className="w-6 h-6 text-blue-500" />
                      },
                      {
                        title: "Order Processing",
                        description: "Order taking, payment processing, and shipping updates",
                        icon: <ShoppingCart className="w-6 h-6 text-blue-500" />
                      },
                      {
                        title: "Appointment Scheduling",
                        description: "Calendar management and booking coordination",
                        icon: <Calendar className="w-6 h-6 text-blue-500" />
                      },
                      {
                        title: "Emergency Dispatch",
                        description: "24/7 emergency call handling and response coordination",
                        icon: <AlertTriangle className="w-6 h-6 text-blue-500" />
                      }
                    ].map((service, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Inbound Services</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "98% Customer Satisfaction",
                        description: "Our professionally trained agents deliver exceptional service that boosts your CSAT scores",
                        icon: <CheckCircle className="w-6 h-6 text-green-500" />
                      },
                      {
                        title: "60% Cost Reduction",
                        description: "Reduce overhead costs compared to in-house teams",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      },
                      {
                        title: "24-hour Ramp-up",
                        description: "Quickly scale up or down based on seasonal demand",
                        icon: <Clock className="w-6 h-6 text-green-500" />
                      },
                      {
                        title: "Omnichannel Support",
                        description: "Phone, email, chat and social media customer service",
                        icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "What languages do your agents support?",
                        answer: "Our agents are fluent in English, Spanish, French, German, and several other languages. We can provide support in over 10 languages."
                      },
                      {
                        question: "How do you ensure quality with remote agents?",
                        answer: "We implement rigorous quality assurance measures including call monitoring, scoring, and regular training sessions."
                      },
                      {
                        question: "Can you integrate with our existing CRM?",
                        answer: "Yes, we have experience integrating with all major CRM platforms including Salesforce, HubSpot, and Zendesk."
                      },
                      {
                        question: "What's your average response time?",
                        answer: "Our average speed to answer is under 30 seconds for standard service levels, with emergency lines answered immediately."
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

export default InboundServices;