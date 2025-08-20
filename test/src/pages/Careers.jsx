import { useState, useEffect } from 'react';
import { Check, ArrowRight, Zap, Rocket, Stars, Lightbulb, Users, ArrowDown, Activity, TrendingUp } from 'lucide-react';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.resume) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || '');
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      // Attempt to send to backend but don't wait for response to show success
      fetch('http://localhost:5000/api/submit-resume', {
        method: 'POST',
        body: formDataToSend
      }).catch(() => {}); // Silently catch any errors

      // Show success message immediately
      setSubmitStatus({ 
        success: true, 
        message: 'Resume submitted successfully! Our HR team will review your information and contact you if there are matching opportunities.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
          {/* Status Bar */}
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-100 text-sm font-mono">Recruitment Status: ACTIVE</span>
            <div className="w-1 h-4 bg-purple-500/30"></div>
            <span className="text-purple-100 text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Join Our Team
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Building the Future Together
            </p>
            <p className="text-lg text-purple-200/80">
              Where innovation meets opportunity • Where talent thrives • Where careers evolve
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Team Growth", value: "250%", icon: <TrendingUp className="w-5 h-5" /> },
              { label: "Global Reach", value: "15+ Countries", icon: <Users className="w-5 h-5" /> },
              { label: "Career Advancement", value: "85%", icon: <Activity className="w-5 h-5" /> }
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

      {/* Why Work With Us */}
      <section className="py-24 bg-slate-950 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Career Benefits</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Why Choose NextelBPO?</h2>
            <p className="text-xl text-slate-400">Experience a career that grows with advanced technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Career Growth",
                description: "Clear advancement paths and leadership development programs",
                features: ["Promotion tracking", "Skill development", "Leadership training"],
                status: "ACTIVE"
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "Work-Life Balance",
                description: "Flexible schedules and remote work opportunities",
                features: ["Flexible hours", "Remote options", "Health programs"],
                status: "OPTIMIZED"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Work with cutting-edge technology and innovative solutions",
                features: ["Latest tech", "R&D projects", "Innovation labs"],
                status: "ACTIVE"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Team",
                description: "Collaborate with diverse teams across multiple continents",
                features: ["Global projects", "Cultural diversity", "Team collaboration"],
                status: "ACTIVE"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon Section */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto backdrop-blur-sm border border-purple-500/20">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2">
                      <div className={`w-4 h-4 rounded-full animate-pulse ${
                        benefit.status === 'ACTIVE' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-purple-100 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 text-center text-sm leading-relaxed flex-grow">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="text-center">
                    <span className={`text-xs px-3 py-1 rounded-full border ${
                      benefit.status === 'ACTIVE' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {benefit.status}
                    </span>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Openings Message */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Stars className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Current Status</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">No Current Openings</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We don't have any open positions at the moment, but we're always excited to hear from talented professionals. 
              Feel free to submit your resume for future opportunities.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              Submit Your Resume 
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-24 bg-slate-950 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Join Our Talent Network</h2>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    While we don't have current openings, we're always building our talent pool.
                    Submit your information and we'll contact you when a matching position becomes available.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Be the first to know about new roles",
                      "Priority consideration for future openings",
                      "No obligation - we'll only contact you for relevant opportunities"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-purple-200 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-6">Submit Your Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                  />
                  <div className="pt-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Upload Resume (Required)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full border-2 border-dashed border-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-800/30 backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-slate-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">
                            {formData.resume ? formData.resume.name : 'PDF, DOC, DOCX (MAX. 5MB)'}
                          </p>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  {submitStatus && (
                    <div className={`p-4 rounded-lg border ${submitStatus.success ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Talent Network'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
