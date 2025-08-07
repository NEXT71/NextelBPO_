import { useState, useEffect } from 'react';
import { Search, Phone, FileText, Shield, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Star, Activity } from 'lucide-react';

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
    path: "/services/lead-generation"
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
    path: "/services/inbound-services"
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
    path: "/services/transcriptions"
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
    path: "/services/life-insurance-sales"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredServices = SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'sales') {
      return service.title === 'Lead Generation' || service.title === 'Life Insurance Sales';
    }
    if (activeCategory === 'support') {
      return service.title === 'Inbound Services' || service.title === 'Transcriptions';
    }
    if (activeCategory === 'specialized') {
      return service.title === 'Life Insurance Sales';
    }
    return true;
  });

  const handleServiceClick = (path) => {
    console.log(`Navigating to: ${path}`);
    alert(`Would navigate to: ${path}`);
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
          {/* Status Bar */}
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-100 text-sm font-mono">System Status: OPERATIONAL</span>
            <div className="w-1 h-4 bg-purple-500/30"></div>
            <span className="text-purple-100 text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Our Services
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Next-Generation BPO Solutions
            </p>
            <p className="text-lg text-purple-200/80">
              Engineered for precision • Optimized for scale • Built for the future
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Success Rate", value: "99.7%", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Active Clients", value: "150+", icon: <Users className="w-5 h-5" /> },
              { label: "Response Time", value: "<30s", icon: <Activity className="w-5 h-5" /> }
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
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-slate-950 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Service Categories</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Choose Your Solution</h2>
            <p className="text-xl text-slate-400">Advanced filtering system for optimal service selection</p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: 'all', label: 'All Services', count: 4 },
              { key: 'sales', label: 'Sales & Lead Gen', count: 2 },
              { key: 'support', label: 'Support Services', count: 2 },
              { key: 'specialized', label: 'Specialized Sales', count: 1 }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/25 scale-105'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{label}</span>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
                    {count}
                  </div>
                </div>
                {activeCategory === key && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon Section */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto backdrop-blur-sm border border-purple-500/20">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-purple-100 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 text-center text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
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

                  {/* CTA Button */}

                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Active Campaigns</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Specialized Insurance Operations</h2>
            <p className="text-xl text-slate-400">Mission-critical campaigns powered by advanced technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "FINAL EXPENSE",
                description: "Comprehensive final expense insurance solutions for families.",
                image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&h=300&fit=crop",
                features: ["Guaranteed acceptance", "No medical exams", "Immediate coverage", "Affordable premiums"],
                status: "ACTIVE",
                progress: 94
              },
              {
                title: "MVA",
                description: "Motor vehicle accident insurance protection plans.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop",
                features: ["Accident forgiveness", "24/7 claims", "Rental coverage", "Legal assistance"],
                status: "ACTIVE",
                progress: 87
              },
              {
                title: "Affordable Care Act (ACA)",
                description: "Connecting U.S. clients to ACA insurance plans.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
                features: [
                  "Outbound calls to U.S. clients",
                  "Lead pre-qualification for ACA",
                  "Client handoff to agents",
                  "ACA plan awareness support"
                ],
                status: "OPTIMIZING",
                progress: 76
              },
              {
                title: "Medicare",
                description: "Complete Medicare supplement insurance solutions.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop",
                features: ["Part A/B coverage", "Prescription drugs", "Dental/vision", "No network restrictions"],
                status: "ACTIVE",
                progress: 91
              }
            ].map((campaign, index) => (
              <div key={index} className="group bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      campaign.status === 'ACTIVE' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>

                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{campaign.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-400 mb-4">{campaign.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Performance</span>
                      <span className="text-purple-400 font-medium">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {campaign.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm border border-purple-500/20">
                    Access Campaign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;