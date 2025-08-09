import React, { useState, useEffect } from 'react';
import { MapPin, Zap, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';

const OfficeLocationsMap = () => {
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Updated office locations with complete addresses
  const offices = [
    { 
      id: 1, 
      name: 'Nextel BPO - Main Branch', 
      city: 'Rawalpindi, Pakistan', 
      x: 450, 
      y: 200,
      address: 'Sabah Plaza Saddar, Rawalpindi',
      description: 'Our flagship location in the heart of Rawalpindi\'s commercial district.',
      coordinates: '33.59813938627853, 73.04900650108829'
    },
    { 
      id: 2, 
      name: 'NextelBPO 2.0', 
      city: 'Rawalpindi, Pakistan', 
      x: 500, 
      y: 250,
      address: 'Near Corner Food Saddar, Rawalpindi',
      description: 'Centrally located office providing comprehensive business solutions.',
      coordinates: '33.600000, 73.050000'
    },
    { 
      id: 3, 
      name: 'NextelBPO 3.0', 
      city: 'Rawalpindi, Pakistan', 
      x: 650, 
      y: 100,
      address: 'Commercial Market B Block, Satellite Town',
      description: 'Modern facility in the bustling Satellite Town commercial area.',
      coordinates: '33.6385163826533, 73.06287297064223'
    },
    { 
      id: 4, 
      name: 'NextelBPO 4.0', 
      city: 'Rawalpindi, Pakistan', 
      x: 600, 
      y: 300,
      address: 'Kalma Chowk, Rawalpindi',
      description: 'Community-focused office delivering personalized business services.',
      coordinates: '33.575514505093224, 73.03289072639484'
    },
    { 
      id: 5, 
      name: 'NextelBPO 5.0', 
      city: 'Rawalpindi, Pakistan', 
      x: 550, 
      y: 100,
      address: 'Commercial Market D Block, Satellite Town',
      description: 'Our newest location with state-of-the-art facilities and services.',
      coordinates: '33.640000, 73.065000'
    }
  ];

  // Auto-rotate offices highlight
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
    // Use coordinates if available for precise location, otherwise use address
    const mapUrl = office.coordinates 
      ? `https://www.google.com/maps?q=${office.coordinates}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
    
    window.open(mapUrl, '_blank');
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
              <MapPin className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Offices
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8 font-light">
            Strategically located across Rawalpindi to provide you with world-class BPO services 
            and exceptional customer support wherever you are.
          </p>

          {/* Control Panel */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">{offices.length} Locations</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-medium">Premium Service</span>
            </div>
          </div>
        </div>

        {/* World Map with Office Locations */}
        <div className="relative w-full bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-16">
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-auto"
            style={{ minHeight: '500px' }}
          >
            {/* Dotted pattern definition */}
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="#9CA3AF" opacity="0.7"/>
              </pattern>
              
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#f0f9ff', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#e0f2fe', stopOpacity:1}} />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <linearGradient id="pinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3B82F6'}} />
                <stop offset="100%" style={{stopColor: '#1D4ED8'}} />
              </linearGradient>
              <linearGradient id="pinGradientHover" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#DC2626'}} />
                <stop offset="100%" style={{stopColor: '#B91C1C'}} />
              </linearGradient>
            </defs>
            
            {/* Ocean background */}
            <rect width="1000" height="500" fill="url(#oceanGradient)"/>
            
            {/* World map continents */}
            <path d="M 50 80 L 80 50 L 120 45 L 160 50 L 200 60 L 240 70 L 280 80 L 320 90 L 340 100 L 350 120 L 345 140 L 330 160 L 310 180 L 290 190 L 270 195 L 250 190 L 230 185 L 210 175 L 190 165 L 170 155 L 150 145 L 130 135 L 110 125 L 90 115 L 70 105 L 55 90 Z" fill="url(#dotPattern)"/>
            <path d="M 380 40 L 420 35 L 450 50 L 460 80 L 455 110 L 440 120 L 420 115 L 400 105 L 385 90 L 375 70 L 375 50 Z" fill="url(#dotPattern)"/>
            <path d="M 280 210 L 300 200 L 320 205 L 340 215 L 360 230 L 370 250 L 375 270 L 380 290 L 385 310 L 390 330 L 385 350 L 375 370 L 360 385 L 340 395 L 320 400 L 300 395 L 280 385 L 265 370 L 255 350 L 250 330 L 248 310 L 250 290 L 255 270 L 265 250 L 275 230 Z" fill="url(#dotPattern)"/>
            <path d="M 480 80 L 520 70 L 560 75 L 590 85 L 610 95 L 620 110 L 615 125 L 600 135 L 580 140 L 560 138 L 540 135 L 520 130 L 500 125 L 485 115 L 475 100 L 478 85 Z" fill="url(#dotPattern)"/>
            <path d="M 500 160 L 540 150 L 580 155 L 610 165 L 630 180 L 640 200 L 645 220 L 648 240 L 650 260 L 648 280 L 645 300 L 640 320 L 630 340 L 615 355 L 595 365 L 575 370 L 555 368 L 535 365 L 515 360 L 500 350 L 490 335 L 485 320 L 483 300 L 485 280 L 490 260 L 495 240 L 498 220 L 500 200 L 502 180 Z" fill="url(#dotPattern)"/>
            <path d="M 630 70 L 680 60 L 730 65 L 780 70 L 830 75 L 880 80 L 920 90 L 950 100 L 970 115 L 975 130 L 970 145 L 960 160 L 945 170 L 925 175 L 900 178 L 875 180 L 850 178 L 825 175 L 800 170 L 775 165 L 750 158 L 725 150 L 700 140 L 680 130 L 665 115 L 655 100 L 650 85 L 645 70 Z" fill="url(#dotPattern)"/>
            <path d="M 680 180 L 720 175 L 750 185 L 770 200 L 780 220 L 775 240 L 765 255 L 750 265 L 730 270 L 710 268 L 690 265 L 675 255 L 665 240 L 662 225 L 665 210 L 672 195 Z" fill="url(#dotPattern)"/>
            <path d="M 780 240 L 820 235 L 850 245 L 870 260 L 880 275 L 875 285 L 865 290 L 850 288 L 835 285 L 820 280 L 805 275 L 790 268 L 778 255 Z" fill="url(#dotPattern)"/>
            <path d="M 840 320 L 890 310 L 930 320 L 960 335 L 970 350 L 965 365 L 950 375 L 930 380 L 910 378 L 890 375 L 870 370 L 850 365 L 835 355 L 828 340 L 832 325 Z" fill="url(#dotPattern)"/>
            <path d="M 900 130 L 920 125 L 935 135 L 940 150 L 935 165 L 925 170 L 910 168 L 900 160 L 895 145 L 898 135 Z" fill="url(#dotPattern)"/>
            <path d="M 485 95 L 500 90 L 510 100 L 508 115 L 500 120 L 490 118 L 485 110 L 483 102 Z" fill="url(#dotPattern)"/>
            
            {/* Office location markers */}
            {offices.map((office, index) => (
              <g key={office.id}>
                {/* Highlight indicator for current office */}
                {currentIndex === index && !isHovering && (
                  <g>
                    <circle 
                      cx={office.x} 
                      cy={office.y} 
                      r="25" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="2" 
                      opacity="0.6"
                      className="animate-pulse"
                    />
                    <circle 
                      cx={office.x} 
                      cy={office.y} 
                      r="35" 
                      fill="none" 
                      stroke="#3B82F6" 
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
                  {/* Pin shadow */}
                  <ellipse cx="1" cy="22" rx="8" ry="3" fill="rgba(0,0,0,0.2)"/>
                  
                  {/* Pin body with gradient */}
                  <path
                    d="M0 0 C-8 0 -15 7 -15 15 C-15 20 -10 25 0 35 C10 25 15 20 15 15 C15 7 8 0 0 0 Z"
                    fill={hoveredOffice === office.id ? "url(#pinGradientHover)" : "url(#pinGradient)"}
                    stroke="white"
                    strokeWidth="3"
                  />
                  
                  {/* Pin center */}
                  <circle cx="0" cy="15" r="6" fill="white"/>
                  <circle cx="0" cy="15" r="3" fill={hoveredOffice === office.id ? "#DC2626" : "#3B82F6"}/>
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

        {/* Office Cards Grid - Updated for 5 offices */}
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
                relative bg-white rounded-2xl overflow-hidden
                border border-gray-200 hover:border-blue-400
                shadow-lg hover:shadow-xl
                transform transition-all duration-500
                ${hoveredOffice === office.id ? 'scale-105 -translate-y-2' : ''}
                ${currentIndex === index && !isHovering ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-white' : ''}
                h-full
              `}>
                
                {/* Highlight Indicator */}
                {currentIndex === index && !isHovering && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                    <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                )}

                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{office.name}</h3>
                      <p className="text-blue-100 text-sm">{office.city}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    <Star className="w-4 h-4 inline mr-1" />
                    Active Location
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col h-auto">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {office.description}
                  </p>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    📍 {office.address}
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
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
          <div className="mt-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 animate-fadeIn shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedOffice.name}</h3>
              <p className="text-blue-600 font-semibold text-lg">{selectedOffice.city}</p>
              <p className="text-gray-500">{selectedOffice.address}</p>
            </div>
            
            <div className="flex justify-center">
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
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
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 shadow-xl">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-semibold">Ready to visit us?</span>
            </div>
            <button 
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
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
