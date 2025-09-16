import { useState, useEffect } from 'react';
import { ArrowRight, Users, Clock, Check, Shield, Mail, Linkedin, Star, Zap, TrendingUp, Activity } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To empower businesses with innovative Nextel BPO solutions that drive success. We aim to deliver exceptional lead generation, life insurance sales, quality assurance, inbound and customer services, and transcription services tailored to meet the unique needs of our clients."
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading provider of comprehensive Nextel BPO services globally. We envision a future where our innovative solutions and dedicated service transform how businesses operate, enabling them to thrive in a competitive marketplace."
    },
    values: {
      title: "Our Values",
      content: "Excellence, Integrity, Innovation, and Partnership drive everything we do. We are committed to building long-term relationships based on trust, transparency, and mutual success."
    }
  };

  const milestones = [
    { year: "2018", event: "NextelBPO Founded", description: "Started with a vision to transform business operations" },
    { year: "2022", event: "200+ Employees", description: "Reached a major milestone in team growth" },
    { year: "2024", event: "Global Recognition", description: "Named Industry Leader by BPO Excellence Awards" }
  ];

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

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            About NextelBPO
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Pioneering BPO Excellence Since 2018
            </p>
            <p className="text-lg text-purple-200/80">
              Innovation-driven • Globally-focused • Future-ready solutions
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Years of Excellence", value: "6+", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Global Professionals", value: "200+", icon: <Users className="w-5 h-5" /> },
              { label: "Client Satisfaction", value: "99.9%", icon: <Activity className="w-5 h-5" /> }
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

      {/* Story Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Our Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-slate-400">Building the future of business process outsourcing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  Founded in 2018
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  NextelBPO was born from a vision to transform how businesses operate. Starting as a small team of dedicated professionals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  Global Growth
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Today, our team of over 200+ professionals spans multiple continents, delivering exceptional service worldwide.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-xl border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6+</div>
                  <div className="text-purple-100">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-purple-100">Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">USA</div>
                  <div className="text-purple-100">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-purple-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-purple-100 font-medium">Core Values</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">What Drives Us</h2>
              <p className="text-xl text-slate-400">The foundation of everything we do at NextelBPO</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-8">
                  <div className="space-y-4">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                          activeTab === tab
                            ? 'bg-white text-purple-600 shadow-lg'
                            : 'text-white hover:bg-white hover:bg-opacity-20'
                        }`}
                      >
                        {tabContent[tab].title}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="animate-fadeIn">
                    <h3 className="text-3xl font-bold text-white mb-6">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {tabContent[activeTab].content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-purple-100 font-medium">Timeline</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-xl text-slate-400">Key milestones that shaped our company</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-950 shadow-lg"></div>
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
                    <div className="flex items-center mb-2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                    </div>
                    <p className="text-slate-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-purple-100 font-medium">Leadership</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-slate-400">The visionary leaders driving NextelBPO's innovation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Maaz Abbasi",
                  position: "Co-Founder & CEO",
                  description: "Visionary leader with 10+ years in BPO industry, driving company strategy and growth.",
                  image: "/Maaz Abbasi.JPG",
                  social: [
                    { platform: "LinkedIn", url: "https://www.linkedin.com/in/maaz-abbasi-989865172/", icon: <Linkedin size={18} /> },
                  ]
                },
                {
                  name: "AbuBakar Ahmed",
                  position: "Co-Founder & President",
                  description: "Operations expert specializing in process optimization and team development.",
                  image: "/AbuBakar.jpeg",
                  social: [
                    { platform: "LinkedIn", url: "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/", icon: <Linkedin size={18} /> }
                  ]
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:border-purple-500/50"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500"></div>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium">
                        {member.position}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Social links */}
                    <div className="flex justify-center space-x-3">
                      {member.social.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:text-white hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:shadow-lg transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Join the thousands of companies that trust NextelBPO for their business transformation.
                </p>
                <div className="space-y-3">
                  {[
                    "Customized BPO solutions",
                    "24/7 customer support",
                    "Industry-leading expertise"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-purple-200 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div 
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6 cursor-pointer hover:bg-purple-500/20 transition-colors duration-200"
                  onClick={() => {
                    const subject = encodeURIComponent("Partnership Inquiry - NextelBPO");
                    const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your services.\n\nBest regards,\n[Your Name]");
                    window.location.href = `mailto:info@nextelbpo.co?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email us at</p>
                      <div className="text-xl font-semibold text-purple-400">
                        info@nextelbpo.co
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">
                  Our team typically responds within 24 hours to discuss your business needs and how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
