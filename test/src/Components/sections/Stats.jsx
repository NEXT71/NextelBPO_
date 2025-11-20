import { useState, useEffect } from "react";
import { Globe, Clock, Award, Users, TrendingUp, Activity } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, retention: 0, agents: 0, uptime: 0 });

  const stats = [
    { key: 'clients', value: 100, suffix: '+', label: 'Global Clients', icon: <Globe className="w-8 h-8 text-purple-400" /> },
    { key: 'uptime', value: 98.9, suffix: '%', label: 'Uptime Guarantee', icon: <Clock className="w-8 h-8 text-purple-400" /> },
    { key: 'retention', value: 98, suffix: '%', label: 'Client Retention', icon: <Award className="w-8 h-8 text-purple-400" /> },
    { key: 'agents', value: 200, suffix: '+', label: 'Expert Agents', icon: <Users className="w-8 h-8 text-purple-400" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let start = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: stat.key === 'uptime' ? start.toFixed(1) : Math.floor(start)
          }));
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
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
        {[...Array(4)].map((_, i) => ( // Reduced from 8 for better performance
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 animate-pulse"
            style={{
              width: `${Math.random() * 150 + 75}px`, // Smaller size
              height: `${Math.random() * 150 + 75}px`,
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
          {[...Array(6)].map((_, i) => ( // Reduced from 12 for better performance
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
        <div className="text-center mb-16">
          {/* Status Bar */}
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-purple-100 text-sm font-mono">Performance Metrics</span>
          </div>

          <h2 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Performance That Speaks Volumes
            </p>
            <p className="text-lg text-purple-200/80">
              Real-time metrics • Proven results • Unmatched excellence
            </p>
          </div>

          {/* Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { label: "System Status", value: "OPTIMAL", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Data Accuracy", value: "99.9%", icon: <Activity className="w-5 h-5" /> },
              { label: "Response Time", value: "<1ms", icon: <Clock className="w-5 h-5" /> }
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto backdrop-blur-sm border border-purple-500/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                  {counts[stat.key]}{stat.suffix}
                </div>

                {/* Label */}
                <div className="text-purple-200 font-medium">
                  {stat.label}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-slate-800/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-2000"
                    style={{ 
                      width: isVisible ? 
                        (stat.key === 'uptime' || stat.key === 'retention' ? `${stat.value}%` : '100%') 
                        : '0%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our track record speaks for itself. Join hundreds of satisfied clients worldwide who trust NextelBPO for their business transformation.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
