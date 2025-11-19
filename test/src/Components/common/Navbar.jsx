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
    <div className="grid grid-cols-1 gap-2">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-center p-4 border border-transparent hover:border-black/5 hover:bg-black/[0.02] transition-all duration-500 group"
        >
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-black/40 group-hover:text-black transition-all duration-500">
            {item.icon}
          </div>
          <div className="ml-4 flex-1">
            <h4 className="text-sm font-medium text-black group-hover:text-black transition-all duration-500">
              {item.title}
            </h4>
            <p className="text-xs text-black/40 mt-0.5">
              {item.description}
            </p>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-black/20 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </a>
      ))}
    </div>
  );

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
     {/* Top Info Bar */}
<div className="hidden lg:block bg-black border-b border-white/10 text-white py-3">
  <div className="max-w-[1600px] mx-auto px-8">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Phone className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
          <a href="tel:+16592200667" className="text-sm text-white/70 hover:text-white transition-colors">+1 (659) 220-0667</a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
          <a href="mailto:info@nextelbpo.co" className="text-sm text-white/70 hover:text-white transition-colors">info@nextelbpo.co</a>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-white/40" />
          <span className="text-xs uppercase tracking-wider text-white/50">24/7 Support</span>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <span className="text-xs uppercase tracking-wider text-white/40">Follow</span>
        <div className="flex space-x-4">
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/company/nextel-bpo-3-0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-all duration-500"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Facebook Icon */}
          <a 
            href="https://www.facebook.com/p/Nextel-BPO-100094110325568/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-all duration-500"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white shadow-sm border-black/10' 
          : 'bg-white/90 backdrop-blur-md border-white/20'
      }`}>
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex justify-between items-center py-6">
 <a href="/" className="flex items-center group cursor-pointer">
  {/* Logo container */}
  <div className="relative mr-3">
    {/* Logo image */}
    <div className="w-12 h-12 flex items-center justify-center overflow-hidden relative transition-all duration-700">
      <img 
        src="/nextelbpologo1.png" 
        alt="NextelBPO Logo"
        className="w-full h-full object-contain transition-all duration-700 group-hover:opacity-70"
      />
    </div>
  </div>
  
  {/* Text container */}
  <div>
    <div className="text-xl font-bold tracking-tight text-black transition-all duration-700 group-hover:text-black/70">
      NEXTELBPO
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 mt-0.5">
      Elevate To The Next
    </div>
  </div>
</a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a 
                href="/" 
                className="text-sm text-black/70 hover:text-black font-medium transition-all duration-500 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
              </a>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-sm text-black/70 hover:text-black font-medium transition-all duration-500 group">
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-500 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
                </button>

                {/* Services Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white border border-black/10 transition-all duration-500 mt-4 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    {renderDropdownItems(servicesDropdown)}
                    <div className="mt-4 pt-4 border-t border-black/5">
                      <a 
                        href="/services" 
                        className="flex items-center justify-center w-full py-3 px-4 bg-black text-white text-xs uppercase tracking-wider hover:bg-black/80 transition-all duration-500 group"
                      >
                        View All
                        <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
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
                <button className="flex items-center text-sm text-black/70 hover:text-black font-medium transition-all duration-500 group">
                  About
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-500 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
                </button>

                {/* About Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white border border-black/10 transition-all duration-500 mt-4 ${
                  activeDropdown === 'about' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    {renderDropdownItems(aboutDropdown)}
                    <div className="mt-4 pt-4 border-t border-black/5">
                      <a 
                        href="/about" 
                        className="flex items-center justify-center w-full py-3 px-4 bg-black text-white text-xs uppercase tracking-wider hover:bg-black/80 transition-all duration-500 group"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple links */}
              <a 
                href="/careers" 
                className="text-sm text-black/70 hover:text-black font-medium transition-all duration-500 relative group"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
              </a>

              <a 
                href="/contact" 
                className="text-sm text-black/70 hover:text-black font-medium transition-all duration-500 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
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
