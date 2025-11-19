import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Zap, Play, Pause, TrendingUp, Star, Users, Activity, Search, Phone, FileText, Shield } from "lucide-react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const SERVICES = [
    {
      id: 1,
      title: "Lead Generation",
      description: "Targeted lead generation services to help you build a high-quality sales pipeline and increase conversions.",
      icon: <Search className="w-8 h-8" />,
      features: [
        "Targeted lead sourcing",
        "Lead qualification",
        "CRM integration",
        "Performance analytics"
      ],
      industries: ["Insurance", "Financial Services", "Real Estate", "Healthcare"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Inbound Services",
      description: "Professional inbound call handling and customer service to enhance your customer experience.",
      icon: <Phone className="w-8 h-8" />,
      features: [
        "24/7 availability",
        "Multilingual support",
        "Call routing",
        "Customer satisfaction tracking"
      ],
      industries: ["E-commerce", "Healthcare", "Telecommunications", "Financial Services"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Transcriptions",
      description: "Accurate and fast transcription services for medical, legal, and general business needs.",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "99% accuracy guarantee",
        "Fast turnaround",
        "Secure handling",
        "Multiple file formats"
      ],
      industries: ["Medical", "Legal", "Media", "Education"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Life Insurance Sales",
      description: "Specialized outbound sales services for life insurance providers to boost policy sales.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Trained insurance agents",
        "Lead nurturing",
        "Appointment setting",
        "Sales reporting"
      ],
      industries: ["Life Insurance", "Financial Planning", "Estate Planning", "Retirement Services"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop"
    }
  ];

  // Auto-rotate services highlight
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoRotate) {
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoRotate, SERVICES.length]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLearnMoreClick = (serviceTitle) => {
    const routes = {
      "Lead Generation": "/services/lead-generation",
      "Inbound Services": "/services/inbound-services", 
      "Transcriptions": "/services/transcriptions",
      "Life Insurance Sales": "/services/life-insurance-sales"
    };
    
    const route = routes[serviceTitle];
    if (route) {
      console.log(`Navigating to: ${route}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
    setAutoRotate(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Status Bar */}
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-100 text-sm font-mono">Service Network: OPERATIONAL</span>
            <div className="w-1 h-4 bg-purple-500/30"></div>
            <span className="text-purple-100 text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
          </div>

          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Comprehensive Business Solutions
            </p>
            <p className="text-lg text-purple-200/80">
              Tailored services designed to drive growth, efficiency, and customer satisfaction across industries.
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {[
              { label: "Happy Clients", value: "500+", icon: <Users className="w-5 h-5" /> },
              { label: "Projects Completed", value: "1200+", icon: <CheckCircle className="w-5 h-5" /> },
              { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Response Time", value: "<1hr", icon: <Activity className="w-5 h-5" /> }
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                currentIndex === index ? 'scale-105' : ''
              } ${selectedService?.id === service.id ? 'scale-110' : ''}`}
              onMouseEnter={() => {
                setHoveredService(service.id);
                setAutoRotate(false);
              }}
              onMouseLeave={() => {
                setHoveredService(null);
                setAutoRotate(true);
              }}
              onClick={() => handleServiceClick(service)}
            >
              {/* Card */}
              <div className={`
                relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl overflow-hidden
                border border-slate-700/50 hover:border-purple-500/50
                shadow-lg hover:shadow-xl
                transform transition-all duration-500
                ${hoveredService === service.id ? 'scale-105 -translate-y-2' : ''}
                ${currentIndex === index ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-950' : ''}
                h-full
              `}>
                
                {/* Highlight Indicator */}
                {currentIndex === index && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                    <div className="absolute top-0 w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl transform transition-all duration-500 group-hover:scale-110 border border-white/20">
                    <div className="text-purple-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-400 fill-current" />
                        <span className="text-sm font-medium">Premium</span>
                      </div>
                      <div className="text-sm bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30 text-green-300">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col h-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features?.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.industries.slice(0, 2).map((industry, idx) => (
                        <span key={idx} className="text-xs bg-slate-800/50 text-slate-400 px-3 py-1 rounded-full border border-slate-700/50">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMoreClick(service.title);
                    }}
                    className="w-full group/btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <div className="mt-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">{selectedService.description}</p>
                <div className="space-y-3">
                  {selectedService.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="rounded-2xl shadow-lg max-w-full h-auto border border-slate-700/50"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 shadow-xl">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-semibold">Ready to get started?</span>
            </div>
            <a 
              href="/contact"
              className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
