import { useState, useEffect, useMemo } from "react";
import { Play, ChevronDown, ArrowRight, Zap } from "lucide-react";

// Extract data to separate constants for better maintainability
const HERO_TEXTS = [
  "Your Global BPO Partner",
  "Scale Your Business Globally", 
  "Excellence in Every Process",
  "Elevate to the Next"
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <FloatingOrbs />
        <NeuralNetworkLines />
      </div>
      
      <AnimatedParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-block relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Zap className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <div className="mb-8 overflow-hidden h-20 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-0 transition-all duration-1000 transform">
            {HERO_TEXTS[currentText]}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
          Scalable, secure, and intelligent business process outsourcing solutions 
          powered by cutting-edge technology and expert professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
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