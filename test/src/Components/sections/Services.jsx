import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap, Play, Pause, TrendingUp, Star } from "lucide-react";
import SERVICES from "../../data/services";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-rotate services highlight
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoRotate) {
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Map service titles to their corresponding routes
  const serviceRoutes = {
    "Lead Generation": "/services/lead-generation",
    "Inbound Services": "/services/inbound-services",
    "Transcriptions": "/services/transcriptions",
    "Life Insurance Sales": "/services/life-insurance-sales"
  };

  const handleLearnMoreClick = (serviceTitle) => {
    const route = serviceRoutes[serviceTitle];
    if (route) {
      navigate(route);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
    setAutoRotate(false);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

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

      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
            Our Core{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8 font-light">
            Comprehensive BPO solutions designed to streamline your operations, 
            enhance customer experience, and drive exponential business growth.
          </p>

          {/* Control Panel */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3">
              <span className="text-gray-700 font-medium">Auto-rotate</span>
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="p-2 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 shadow-sm"
              >
                {autoRotate ? (
                  <Pause className="w-4 h-4 text-gray-700" />
                ) : (
                  <Play className="w-4 h-4 text-gray-700" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">{SERVICES.length} Services</span>
            </div>
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
                relative bg-white rounded-2xl overflow-hidden
                border border-gray-200 hover:border-blue-400
                shadow-lg hover:shadow-xl
                transform transition-all duration-500
                ${hoveredService === service.id ? 'scale-105 -translate-y-2' : ''}
                ${currentIndex === index ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-white' : ''}
                h-full
              `}>
                
                {/* Highlight Indicator */}
                {currentIndex === index && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                    <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl transform transition-all duration-500 group-hover:scale-110">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">Premium</span>
                      </div>
                      <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col h-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features?.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMoreClick(service.title);
                    }}
                    className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <div className="mt-8 bg-gray-50 rounded-3xl p-8 border border-gray-200 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{selectedService.description}</p>
                <div className="space-y-3">
                  {selectedService.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="rounded-2xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-semibold">Ready to get started?</span>
            </div>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;