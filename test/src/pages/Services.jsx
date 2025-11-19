import { useState, useEffect, lazy, Suspense } from 'react';
import { Search, Phone, FileText, Shield, TrendingUp, Users, Zap, CheckCircle, Star, Activity, ArrowRight } from 'lucide-react';

// Extract services data to separate file for better maintainability
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

// Campaign data
const CAMPAIGNS = [
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
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Services - Lead Generation, Inbound Support & Insurance Sales';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'NextelBPO offers comprehensive BPO services including lead generation, inbound customer support, life insurance sales, and transcription services. 99.7% success rate with 150+ active clients.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'NextelBPO offers comprehensive BPO services including lead generation, inbound customer support, life insurance sales, and transcription services. 99.7% success rate with 150+ active clients.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'BPO services, lead generation services, inbound call center, transcription services, life insurance sales, customer support outsourcing, business process outsourcing';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Services - Premium BPO Solutions' },
      { property: 'og:description', content: 'Professional BPO services including lead generation, customer support, insurance sales, and transcription services.' },
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

    // Structured Data for Services Page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Process Outsourcing",
      "provider": {
        "@type": "Organization",
        "name": "NextelBPO",
        "description": "Leading BPO company providing comprehensive business process outsourcing services"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "BPO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation",
              "description": "Targeted lead generation services to build high-quality sales pipelines"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inbound Services",
              "description": "Professional inbound call handling and customer service solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transcriptions",
              "description": "Accurate transcription services for medical, legal, and business needs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Life Insurance Sales",
              "description": "Specialized outbound sales services for life insurance providers"
            }
          }
        ]
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

  // Service Card Component (kept in same file)
  const ServiceCard = ({ service, index }) => {
    return (
      <div
        key={service.id}
        className="group relative border border-black/5 hover:border-black overflow-hidden transition-all duration-500 cursor-pointer"
        onClick={() => handleServiceClick(service.path)}
        onMouseEnter={() => setHoveredCard(service.id)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Card Content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Icon Section */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-black/5 group-hover:bg-black flex items-center justify-center group-hover:scale-110 transition-all duration-500 mx-auto">
              <div className="text-black/40 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-center transition-colors">
            {service.title}
          </h3>
          
          <p className="text-black/60 mb-6 text-center text-sm leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-black/40 flex-shrink-0" />
                <span className="text-black/70 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {service.industries.slice(0, 2).map((industry, idx) => (
                <span key={idx} className="text-xs border border-black/10 text-black/60 px-3 py-1 uppercase tracking-wider">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-black text-white py-3 px-6 hover:bg-black/90 transition-all duration-500 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
            Explore Service
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
        </div>
      </div>
    );
  };

  // Campaign Card Component (kept in same file)
  const CampaignCard = ({ campaign, index }) => {
    return (
      <div 
        key={index} 
        className="group border border-black/5 hover:border-black overflow-hidden transition-all duration-500"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={campaign.image} 
            alt={campaign.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              campaign.status === 'ACTIVE' 
                ? 'bg-black text-white' 
                : 'border border-black/20 text-black/60'
            }`}>
              {campaign.status}
            </span>
          </div>

          <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-black">{campaign.title}</h3>
        </div>
        
        <div className="p-8">
          <p className="text-black/60 mb-6">{campaign.description}</p>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-black/60 uppercase tracking-wider text-xs">Performance</span>
              <span className="font-medium">{campaign.progress}%</span>
            </div>
            <div className="w-full bg-black/5 h-2">
              <div 
                className="bg-black h-2 transition-all duration-1000"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {campaign.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-black/40 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-black/70 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-black text-white font-semibold py-3 px-6 hover:bg-black/90 transition-all duration-500 text-sm uppercase tracking-wider">
            View Campaign Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Services - Comprehensive BPO Solutions</h1>
        <p>
          NextelBPO provides industry-leading business process outsourcing services including professional 
          lead generation, inbound customer support, transcription services, and specialized life insurance sales. 
          With a 99.7% success rate and serving 150+ active clients, we deliver exceptional results through 
          our team of 200+ professionals.
        </p>
        <p>
          Our lead generation services help businesses build high-quality sales pipelines with targeted 
          lead sourcing, qualification, CRM integration, and performance analytics. We serve industries 
          including insurance, financial services, real estate, and healthcare.
        </p>
        <p>
          NextelBPO's inbound services provide 24/7 customer support with multilingual capabilities, 
          call routing, and customer satisfaction tracking for e-commerce, healthcare, telecommunications, 
          and financial services companies.
        </p>
        <p>
          Our transcription services guarantee 99% accuracy with fast turnaround times, secure handling, 
          and support for multiple file formats. We specialize in medical, legal, media, and education sectors.
        </p>
        <p>
          The life insurance sales division features trained insurance agents, lead nurturing, appointment 
          setting, and comprehensive sales reporting for life insurance providers, financial planning firms, 
          and retirement services companies.
        </p>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-40 bg-black text-white overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-12" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}></div>
        
        <div className="relative z-10 container mx-auto px-8 max-w-[1600px] text-center">
          {/* Status Bar */}
          <div className="inline-flex items-center gap-4 border border-white/10 px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white/60 text-xs font-mono uppercase tracking-wider">System Status: OPERATIONAL</span>
            <div className="w-px h-4 bg-white/10"></div>
            <span className="text-white/60 text-xs font-mono uppercase tracking-wider">{currentTime.toLocaleTimeString()}</span>
          </div>

          <h1 className="text-[96px] font-bold mb-8 tracking-tight">
            Our <span className="text-white/30">Services</span>
          </h1>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl text-white/60 mb-4 font-light">
              Next-Generation BPO Solutions
            </p>
            <p className="text-lg text-white/40 uppercase tracking-wider">
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
              <div key={idx} className="border border-white/10 p-6 group hover:border-white/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-white/40 group-hover:text-white transition-colors duration-500">{metric.icon}</div>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-medium">{metric.label}</span>
                </div>
                <div className="text-3xl font-bold">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-32 bg-white border-b border-black/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/subtle-white-feathers.png)' }}></div>
        </div>
        
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Service Categories</p>
            <h2 className="text-[56px] font-bold tracking-tight mb-6">Choose Your <span className="text-black/30">Solution</span></h2>
            <p className="text-xl text-black/60">Advanced filtering system for optimal service selection</p>
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
                className={`group relative px-8 py-4 font-semibold transition-all duration-500 text-sm uppercase tracking-wider ${
                  activeCategory === key
                    ? 'bg-black text-white'
                    : 'border border-black/10 hover:border-black'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{label}</span>
                  <div className="w-6 h-6 bg-white/10 flex items-center justify-center text-xs">
                    {count}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="relative py-32 bg-white border-t border-black/5">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920)' }}></div>
        
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Active Campaigns</p>
            <h2 className="text-[56px] font-bold tracking-tight mb-6">Specialized Insurance <span className="text-black/30">Operations</span></h2>
            <p className="text-xl text-black/60">Mission-critical campaigns powered by advanced technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAMPAIGNS.map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;