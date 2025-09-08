import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, ArrowRight, Globe, Shield, Award, Users, BookOpen, Briefcase, HeartHandshake, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesDropdown = [
    {
      title: "Lead Generation",
      description: "Targeted lead generation to boost your sales pipeline",
      icon: <Phone className="w-5 h-5" />,
      href: "/services/lead-generation"
    },
    {
      title: "Inbound Services",
      description: "Professional inbound call handling and customer service",
      icon: <Shield className="w-5 h-5" />,
      href: "/services/inbound-services"
    },
    {
      title: "Transcriptions",
      description: "Accurate transcription services for various industries",
      icon: <Globe className="w-5 h-5" />,
      href: "/services/transcriptions"
    },
    {
      title: "Life Insurance Sales",
      description: "Specialized outbound sales for insurance providers",
      icon: <Award className="w-5 h-5" />,
      href: "/services/life-insurance-sales"
    }
  ];

  const aboutDropdown = [
    {
      title: "Our Team",
      description: "Meet our leadership and experts",
      icon: <Users className="w-5 h-5" />,
      href: "/about/team"
    }
  ];

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const renderDropdownItems = (items) => (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 group"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
            {item.icon}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500">
              {item.description}
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  );

  return (
    <>
     {/* Top Info Bar - Updated with Social Icons */}
<div className="hidden lg:block bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white py-2">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-purple-300" />
          <span>+1 (659) 220-0667</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-purple-300" />
          <span>info@nextelbpo.co</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-purple-300" />
          <span>24/7 Support Available</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-purple-200">Follow us:</span>
        <div className="flex space-x-3">
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/company/nextel-bpo-3-0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Facebook Icon */}
          <a 
            href="https://www.facebook.com/p/Nextel-BPO-100094110325568/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
 <div className="flex items-center group cursor-pointer relative">
  {/* Animated logo container */}
  <div className="relative mr-4">
    {/* Logo image with futuristic border effect */}
    <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden relative z-10 bg-gray-900 border border-gray-700 group-hover:border-purple-500 transition-all duration-500">
      <img 
        src="/nextelbpologo.jpg" 
        alt="NextelBPO Logo"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Hover-activated circuit board effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[pulse_3s_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-[pulse_3s_infinite_1s]"></div>
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[pulse_3s_infinite_0.5s]"></div>
        <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-[pulse_3s_infinite_1.5s]"></div>
      </div>
    </div>
    
    {/* Active indicator with glow effect */}
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full border-2 border-white z-20 animate-pulse shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]"></div>
    
    {/* Floating particles */}
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-purple-400 opacity-70"
        style={{
          top: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 10 + 50}px`,
          animation: `float 5s ease-in-out ${i * 0.5}s infinite`
        }}
      />
    ))}
  </div>
  
  {/* Text container */}
  <div className="relative overflow-hidden">
    {/* Main logo text with advanced gradient animation */}
    <div className="relative">
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-size-300 group-hover:bg-pos-100 transition-all duration-1000 tracking-tighter">
        NEXTEL<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">BPO</span>
      </span>
      
      {/* Subtle reflection effect */}
      <div className="absolute top-full left-0 w-full h-1 bg-gradient-to-b from-purple-500/20 to-transparent opacity-50 blur-[1px]"></div>
    </div>
    
    {/* Futuristic tagline with sliding effect */}
    <div className="flex items-center mt-0.5">
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 relative h-4 overflow-hidden">
        <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-4">
          <span>ELEVATE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">To The NEXT</span>
        </div>
      </div>
      
      {/* Animated chevrons */}
      <div className="ml-1.5 flex space-x-0.5">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-1.5 h-1.5 bg-gradient-to-br from-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-all duration-300"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              animation: `bounce 1.5s infinite ${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
  
  {/* Hover-activated energy pulse */}
  <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    <div className="absolute inset-0 border border-purple-500/30 rounded-xl animate-[pulse_3s_infinite]"></div>
    <div className="absolute inset-0 border border-pink-500/30 rounded-xl animate-[pulse_3s_infinite_1s]"></div>
  </div>
</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="/" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Services Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-2' 
                    : 'opacity-0 invisible translate-y-0'
                }`}>
                  <div className="p-6">
                    {renderDropdownItems(servicesDropdown)}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href="/services" 
                        className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  About
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* About Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                  activeDropdown === 'about' 
                    ? 'opacity-100 visible translate-y-2' 
                    : 'opacity-0 invisible translate-y-0'
                }`}>
                  <div className="p-6">
                    {renderDropdownItems(aboutDropdown)}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href="/about" 
                        className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                      >
                        Learn More About Us
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple links */}
              <a 
                href="/careers" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a 
                href="/contact" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center space-x-4">
             

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                <a 
                  href="/" 
                  className="block text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                >
                  Home
                </a>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => handleDropdown('mobile-services')}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === 'mobile-services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2 mt-2">
                      {servicesDropdown.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile About Dropdown */}
                <div>
                  <button
                    onClick={() => handleDropdown('mobile-about')}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                  >
                    About
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'mobile-about' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === 'mobile-about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2 mt-2">
                      {aboutDropdown.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-center p-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                        >
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a 
                  href="/careers" 
                  className="block text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                >
                  Careers
                </a>
                <a 
                  href="/contact" 
                  className="block text-gray-700 hover:text-purple-600 font-medium py-3 px-4 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                >
                  Contact
                </a>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Navbar;
