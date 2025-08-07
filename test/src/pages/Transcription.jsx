import { useState, useRef } from 'react';
import { Mic, FileText, Clock, CheckCircle, Shield, ArrowRight, Users, Calendar } from 'lucide-react';

const Transcription = () => {
  const [activeTab, setActiveTab] = useState('services');
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
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
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">Professional</span> Transcription Services
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Accurate, fast, and secure transcription solutions for all industries
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
      <section ref={contentRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'services', label: 'Our Services' },
                { id: 'industries', label: 'Industries' },
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
              {/* Services Tab */}
              {activeTab === 'services' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Transcription Services</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "General Transcription",
                        description: "Interviews, meetings, podcasts, and more",
                        icon: <Mic className="w-6 h-6 text-blue-500" />,
                        features: ["98%+ accuracy", "Speaker identification", "Timestamps available"]
                      },
                      {
                        title: "Legal Transcription",
                        description: "Court proceedings, depositions, affidavits",
                        icon: <Shield className="w-6 h-6 text-blue-500" />,
                        features: ["99%+ accuracy", "Certified transcribers", "Confidentiality guaranteed"]
                      },
                      {
                        title: "Medical Transcription",
                        description: "Patient records, doctor's notes, medical reports",
                        icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>,
                        features: ["HIPAA compliant", "Medical terminology", "Secure transfer"]
                      },
                      {
                        title: "Academic Transcription",
                        description: "Lectures, research interviews, focus groups",
                        icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>,
                        features: ["Specialist terminology", "Citation formatting", "Research standards"]
                      }
                    ].map((service, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
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
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-8 border border-blue-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast Turnaround Times</h3>
                    <p className="text-gray-700 mb-6">
                      We offer flexible turnaround options to meet your deadlines, from same-day emergency transcription to standard 3-5 business day delivery.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Same-day", "24-hour", "48-hour", "Standard"].map((option, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Industries We Serve</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        industry: "Legal",
                        description: "Court reporters, law firms, and legal departments",
                        icon: <Shield className="w-6 h-6 text-blue-500" />
                      },
                      {
                        industry: "Medical",
                        description: "Hospitals, clinics, and healthcare providers",
                        icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      },
                      {
                        industry: "Media",
                        description: "Journalists, filmmakers, and content creators",
                        icon: <Mic className="w-6 h-6 text-blue-500" />
                      },
                      {
                        industry: "Academic",
                        description: "Researchers, universities, and students",
                        icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      }
                    ].map((item, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6 flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{item.industry}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Transcription</h3>
                    <p className="text-gray-700 mb-6">
                      We work with specialized terminology across industries including technical, financial, and scientific fields.
                    </p>
                    <button className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 group">
                      Request specialized service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Transcription Services</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Security & Confidentiality",
                        description: "Enterprise-grade security with encrypted file transfer and strict confidentiality agreements",
                        icon: <Shield className="w-6 h-6 text-green-500" />,
                        features: ["HIPAA Compliance", "GDPR Ready", "NDA Protection"]
                      },
                      {
                        title: "Accuracy Guarantee",
                        description: "Three-step quality assurance process ensures 99%+ accuracy",
                        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                        features: ["Native speakers", "Professional editors", "Quality control"]
                      },
                      {
                        title: "Fast Turnaround",
                        description: "Flexible options from same-day to standard delivery",
                        icon: <Clock className="w-6 h-6 text-green-500" />,
                        features: ["Same-day service", "24-hour turnaround", "Standard 3-5 days"]
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                        <div className="p-6">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            {benefit.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                          <p className="text-gray-600 text-center mb-4">{benefit.description}</p>
                          <ul className="space-y-2">
                            {benefit.features.map((feature, i) => (
                              <li key={i} className="flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
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
                        question: "What file formats do you accept?",
                        answer: "We accept all common audio and video formats including MP3, WAV, MP4, MOV, and more. We can also work with digital dictation files from most systems."
                      },
                      {
                        question: "How do you handle poor quality recordings?",
                        answer: "Our team is experienced with challenging audio. We'll assess your files and let you know if we anticipate any issues. For extremely poor quality, we may recommend audio enhancement services."
                      },
                      {
                        question: "Can you timestamp transcripts?",
                        answer: "Yes, we can provide timestamps at regular intervals or for speaker changes, whichever you prefer."
                      },
                      {
                        question: "Do you offer verbatim transcription?",
                        answer: "Yes, we offer both verbatim (word-for-word) and clean read (edited for readability) transcription options."
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

export default Transcription;