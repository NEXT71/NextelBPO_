import { useState, useEffect } from 'react';
import { MapPin, Zap, TrendingUp, Star, CheckCircle, ArrowRight, Users, Activity, Clock } from 'lucide-react';

const OfficeLocationsMap = () => {
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Office locations data
  const offices = [
    {
      id: 1,
      name: "Nextel BPO - Main Branch",
      city: "Rawalpindi",
      address: "Sabah Plaza Saddar, Rawalpindi, Pakistan",
      description: "Our flagship location in the heart of Rawalpindi's commercial district.",
      x: 520,
      y: 180,
      coordinates: "33.6000,73.0679"
    },
    {
      id: 2,
      name: "NextelBPO 2.0",
      city: "Rawalpindi",
      address: "Near Corner Food Saddar, Rawalpindi, Pakistan",
      description: "Centrally located office providing comprehensive business solutions.",
      x: 540,
      y: 190,
      coordinates: "33.5980,73.0714"
    },
    {
      id: 3,
      name: "NextelBPO 3.0",
      city: "Rawalpindi",
      address: "Commercial Market B Block, Satellite Town, Rawalpindi, Pakistan",
      description: "Modern facility in the bustling Satellite Town commercial area.",
      x: 580,
      y: 220,
      coordinates: "33.6204,73.1587"
    },
    {
      id: 4,
      name: "NextelBPO 4.0",
      city: "Rawalpindi",
      address: "Kalma Chowk, Rawalpindi, Pakistan",
      description: "Community-focused office delivering personalized business services.",
      x: 500,
      y: 280,
      coordinates: "33.5607,73.0011"
    },
    {
      id: 5,
      name: "NextelBPO 5.0",
      city: "Rawalpindi",
      address: "Commercial Market D Block, Satellite Town, Rawalpindi, Pakistan",
      description: "Our newest location with state-of-the-art facilities and services.",
      x: 450,
      y: 160,
      coordinates: "33.5931,73.0494"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoRotate && !isHovering) {
        setCurrentIndex((prev) => (prev + 1) % offices.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoRotate, offices.length, isHovering]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOfficeClick = (office) => {
    setSelectedOffice(selectedOffice?.id === office.id ? null : office);
    setAutoRotate(false);
  };

  const handleMouseEnter = (officeId) => {
    setIsHovering(true);
    setHoveredOffice(officeId);
    setAutoRotate(false);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoveredOffice(null);
    setAutoRotate(true);
  };

  const openGoogleMaps = (office) => {
    const mapUrl = office.coordinates 
      ? `https://www.google.com/maps?q=${office.coordinates}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
    
    window.open(mapUrl, '_blank');
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
            <span className="text-purple-100 text-sm font-mono">Global Network: ACTIVE</span>
            <div className="w-1 h-4 bg-purple-500/30"></div>
            <span className="text-purple-100 text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Offices
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Strategic Global Network
            </p>
            <p className="text-lg text-purple-200/80">
              Positioned across Pakistan • Ready to serve • Always connected
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { label: "Active Locations", value: offices.length.toString(), icon: <MapPin className="w-5 h-5" /> },
              { label: "Coverage Area", value: "100%", icon: <TrendingUp className="w-5 h-5" /> },
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

        {/* World Map */}
        <div className="relative w-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-auto"
            style={{ minHeight: '500px' }}
          >
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="#64748B" opacity="0.7"/>
              </pattern>
              
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#0F172A', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#1E293B', stopOpacity:1}} />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <linearGradient id="pinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#8B5CF6'}} />
                <stop offset="100%" style={{stopColor: '#7C3AED'}} />
              </linearGradient>
              <linearGradient id="pinGradientHover" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#EC4899'}} />
                <stop offset="100%" style={{stopColor: '#DB2777'}} />
              </linearGradient>
            </defs>
            
            <rect width="1000" height="500" fill="url(#oceanGradient)"/>
            
            {/* World map continents - Pakistan region focused */}
            <path d="M 480 150 L 520 140 L 560 145 L 590 155 L 610 165 L 620 180 L 615 195 L 600 205 L 580 210 L 560 208 L 540 205 L 520 200 L 500 195 L 485 185 L 475 170 L 478 155 Z" fill="url(#dotPattern)"/>
            <path d="M 500 210 L 540 200 L 580 205 L 610 215 L 630 230 L 640 250 L 645 270 L 648 290 L 650 310 L 648 330 L 645 350 L 640 370 L 630 390 L 615 405 L 595 415 L 575 420 L 555 418 L 535 415 L 515 410 L 500 400 L 490 385 L 485 370 L 483 350 L 485 330 L 490 310 L 495 290 L 498 270 L 500 250 L 502 230 Z" fill="url(#dotPattern)"/>

            {/* Office location markers */}
            {offices.map((office, index) => (
              <g key={office.id}>
                {/* Highlight indicator */}
                {currentIndex === index && !isHovering && (
                  <g>
                    <circle 
                      cx={office.x} 
                      cy={office.y} 
                      r="25" 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="2" 
                      opacity="0.6"
                      className="animate-pulse"
                    />
                    <circle 
                      cx={office.x} 
                      cy={office.y} 
                      r="35" 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="1" 
                      opacity="0.3"
                      className="animate-ping"
                    />
                  </g>
                )}

                {/* Marker pin */}
                <g
                  transform={`translate(${office.x}, ${office.y})`}
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => handleMouseEnter(office.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOfficeClick(office)}
                  filter={currentIndex === index && !isHovering ? "url(#glow)" : "none"}
                >
                  <ellipse cx="1" cy="22" rx="8" ry="3" fill="rgba(0,0,0,0.2)"/>
                  
                  <path
                    d="M0 0 C-8 0 -15 7 -15 15 C-15 20 -10 25 0 35 C10 25 15 20 15 15 C15 7 8 0 0 0 Z"
                    fill={hoveredOffice === office.id ? "url(#pinGradientHover)" : "url(#pinGradient)"}
                    stroke="white"
                    strokeWidth="3"
                  />
                  
                  <circle cx="0" cy="15" r="6" fill="white"/>
                  <circle cx="0" cy="15" r="3" fill={hoveredOffice === office.id ? "#EC4899" : "#8B5CF6"}/>
                </g>
                
                {/* Enhanced Tooltip */}
                {hoveredOffice === office.id && (
                  <g>
                    <rect
                      x={office.x - 90}
                      y={office.y - 70}
                      width="180"
                      height="55"
                      rx="12"
                      fill="#1F2937"
                      opacity="0.95"
                      filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
                    />
                    <text
                      x={office.x}
                      y={office.y - 45}
                      textAnchor="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="700"
                    >
                      {office.name}
                    </text>
                    <text
                      x={office.x}
                      y={office.y - 25}
                      textAnchor="middle"
                      fill="#D1D5DB"
                      fontSize="12"
                    >
                      {office.address}
                    </text>
                    <polygon
                      points={`${office.x-8},${office.y-15} ${office.x+8},${office.y-15} ${office.x},${office.y-8}`}
                      fill="#1F2937"
                      opacity="0.95"
                    />
                  </g>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Interactive Google Map */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="p-6 border-b border-slate-700/50">
            <h3 className="text-2xl font-bold text-white text-center">Interactive Office Locations</h3>
            <p className="text-slate-400 text-center mt-2">Click on markers to get directions</p>
          </div>
          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0123456789!2d73.049137!3d33.598017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzUyLjkiTiA3M8KwMDInNTYuOSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NextelBPO Office Locations"
            ></iframe>
          </div>
        </div>

        

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={office.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                currentIndex === index && !isHovering ? 'scale-105' : ''
              } ${selectedOffice?.id === office.id ? 'scale-110' : ''}`}
              onMouseEnter={() => handleMouseEnter(office.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleOfficeClick(office)}
            >
              <div className={`
                relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl overflow-hidden
                border border-slate-700/50 hover:border-purple-500/50
                shadow-lg hover:shadow-xl
                transform transition-all duration-500
                ${hoveredOffice === office.id ? 'scale-105 -translate-y-2' : ''}
                ${currentIndex === index && !isHovering ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-950' : ''}
                h-full
              `}>
                
                {/* Highlight Indicator */}
                {currentIndex === index && !isHovering && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                    <div className="absolute top-0 w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                )}

                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{office.name}</h3>
                      <p className="text-purple-100 text-sm">{office.city}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    <Star className="w-4 h-4 inline mr-1" />
                    Active Location
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col h-auto">
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {office.description}
                  </p>
                  
                  <div className="text-xs text-slate-500 mb-4">
                    📍 {office.address}
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    className="w-full group/btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGoogleMaps(office);
                    }}
                  >
                    <span>Visit Office</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Office Details */}
        {selectedOffice && (
          <div className="mt-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl animate-fadeIn">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{selectedOffice.name}</h3>
              <p className="text-purple-400 font-semibold text-lg">{selectedOffice.city}</p>
              <p className="text-slate-400">{selectedOffice.address}</p>
            </div>
            
            <div className="flex justify-center">
              <button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => openGoogleMaps(selectedOffice)}
              >
                <MapPin className="w-5 h-5" />
                Get Directions on Google Maps
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 shadow-xl">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-semibold">Ready to visit us?</span>
            </div>
            <button 
              className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const office = selectedOffice || offices[0];
                openGoogleMaps(office);
              }}
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsMap;
