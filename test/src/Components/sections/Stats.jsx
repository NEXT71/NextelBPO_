// Stats.jsx
import { useState, useEffect } from "react";
import { Globe, Clock, Award, Users } from "lucide-react";
import {motion} from "framer-motion";

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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counts[stat.key]}{stat.suffix}
                </div>
                <div className="text-purple-200 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;