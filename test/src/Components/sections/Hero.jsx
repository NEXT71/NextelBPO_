import { useState, useEffect, useMemo } from "react";
import { Play, ChevronDown, ArrowRight, Zap } from "lucide-react";

// Extract data to separate constants for better maintainability
const HERO_TEXTS = [
  "Scale Your Business Globally with 24/7 Outsourcing Solutions",
  "Reduce Costs by 60% with Expert BPO Services",
  "Transform Operations with Next-Gen Business Solutions"
];

const HERO_CONFIG = {
  textRotationInterval: 3000,
  totalParticles: 50,
  totalNeuralLines: 12
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  // Memoized particle generation for performance
  const particles = useMemo(() => 
    [...Array(HERO_CONFIG.totalParticles)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`
    })), []
  );

  // Memoized neural lines generation for performance
  const neuralLines = useMemo(() => 
    [...Array(HERO_CONFIG.totalNeuralLines)].map((_, i) => ({
      id: i,
      x1: `${Math.random() * 100}%`,
      y1: `${Math.random() * 100}%`,
      x2: `${Math.random() * 100}%`,
      y2: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.2}s`
    })), []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % HERO_TEXTS.length);
    }, HERO_CONFIG.textRotationInterval);
    return () => clearInterval(interval);
  }, []);

  // Floating Orbs Background Component
  const FloatingOrbs = () => (
    <>
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
    </>
  );

  // Neural Network Lines Component
  const NeuralNetworkLines = () => (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {neuralLines.map((line) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: line.animationDelay }}
        />
      ))}
    </svg>
  );

  // Animated Particles Component
  const AnimatedParticles = () => (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920"
        >
          <source src="https://player.vimeo.com/external/370362851.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6d8c3e4f7d&profile_id=165" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920" 
            alt="Global business operations" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <FloatingOrbs />
        <NeuralNetworkLines />
      </div>
      
      <AnimatedParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div>
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <div className="mb-8 min-h-48 flex items-center justify-center px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-0 transition-all duration-1000 transform leading-tight text-center">
              {HERO_TEXTS[currentText]}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
            Join 500+ companies saving up to 60% on operational costs with our 
            comprehensive BPO solutions. 24/7 support, 99.9% accuracy, global scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/contact" className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 hover:from-orange-600 hover:to-red-600">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3">
              View Services
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;