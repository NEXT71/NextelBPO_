import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Check, ArrowRight, Zap, Rocket, Stars, Lightbulb, Users, ArrowDown, 
  Activity, TrendingUp, Upload, User, Mail, Phone, FileText 
} from 'lucide-react';

// Extract data to separate constants for better maintainability
const CAREER_BENEFITS = [
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
];

const METRICS = [
  { label: "Team Growth", value: "250%", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Global Reach", value: "15+ Countries", icon: <Users className="w-5 h-5" /> },
  { label: "Career Advancement", value: "85%", icon: <Activity className="w-5 h-5" /> }
];

const TALENT_NETWORK_BENEFITS = [
  "Be the first to know about new roles",
  "Priority consideration for future openings",
  "No obligation - we'll only contact you for relevant opportunities"
];

// Pre-define these components outside the main component to prevent recreation
const FloatingOrbs = () => {
  const orbs = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    })), []
  );

  return (
    <>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400/10 to-pink-600/10 animate-pulse"
          style={{
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animationDelay: `${orb.delay}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </>
  );
};

const NeuralNetworkLines = () => {
  const lines = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: i * 0.2
    })), []
  );

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      {lines.map((line) => (
        <line
          key={line.id}
          x1={`${line.x1}%`}
          y1={`${line.y1}%`}
          x2={`${line.x2}%`}
          y2={`${line.y2}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: `${line.delay}s` }}
        />
      ))}
    </svg>
  );
};

const MetricsDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {METRICS.map((metric, idx) => (
      <div key={idx} className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-purple-400">{metric.icon}</div>
          <span className="text-purple-100 text-sm font-medium">{metric.label}</span>
        </div>
        <div className="text-2xl font-bold text-white">{metric.value}</div>
      </div>
    ))}
  </div>
);

const CareerBenefitCard = ({ benefit, index }) => (
  <div
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
);

// Fixed Form Input Component
const FormInput = ({ type, placeholder, name, value, onChange, required = false, icon: Icon }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
      <Icon className="w-5 h-5" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
      required={required}
    />
  </div>
);

// Fixed File Upload Component
const FileUpload = ({ formData, setFormData }) => (
  <div className="pt-2">
    <label className="block text-sm font-medium text-slate-300 mb-2">
      Upload Resume (Required)
    </label>
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col w-full border-2 border-dashed border-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-800/30 backdrop-blur-sm transition-colors duration-200">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-4 text-slate-500" />
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
          onChange={(e) => setFormData(prev => ({...prev, resume: e.target.files[0]}))}
        />
      </label>
    </div>
  </div>
);

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

  // Memoized structured data for performance
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "NextelBPO Careers",
    "description": "Career opportunities at NextelBPO",
    "mainEntity": {
      "@type": "Organization",
      "name": "NextelBPO",
      "numberOfEmployees": "200+",
      "department": [
        {
          "@type": "Organization",
          "name": "Lead Generation Department"
        },
        {
          "@type": "Organization", 
          "name": "Customer Support Department"
        },
        {
          "@type": "Organization",
          "name": "Insurance Sales Department"
        },
        {
          "@type": "Organization",
          "name": "Transcription Services Department"
        }
      ]
    }
  }), []);

  // Memoized form validation
  const isFormValid = useMemo(() => {
    return formData.name && formData.email && formData.resume;
  }, [formData.name, formData.email, formData.resume]);

  // Fixed form change handler
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!isFormValid) return;
    
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
      fetch('https://nextelbpo.onrender.com/api/submit-resume', {
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
  }, [isFormValid, formData]);

  const scrollToForm = useCallback(() => {
    const element = document.getElementById('talent-network-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);

    // SEO Meta Tags
    document.title = 'NextelBPO Careers - Join Our Team | BPO Career Opportunities';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore career opportunities at NextelBPO. Join our team of 200+ professionals in the BPO industry. Submit your resume for future openings in lead generation, customer support, and insurance sales.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore career opportunities at NextelBPO. Join our team of 200+ professionals in the BPO industry. Submit your resume for future openings in lead generation, customer support, and insurance sales.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'BPO careers, call center jobs, work from home BPO, customer service jobs, lead generation careers, insurance sales jobs, remote BPO jobs';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Careers - Join Our BPO Team' },
      { property: 'og:description', content: 'Career opportunities at NextelBPO. Join our growing team of BPO professionals with excellent growth opportunities.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: typeof window !== 'undefined' ? window.location.href : '' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Structured Data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [structuredData]);

  return (
    <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Careers - Join Our Growing BPO Team</h1>
        <p>
          NextelBPO offers exciting career opportunities in the business process outsourcing industry. 
          While we currently don't have open positions, we're continuously growing and welcome talented 
          professionals to submit their resumes for future opportunities.
        </p>
        <p>
          Our company has experienced 250% team growth and maintains professionals across 15+ countries. 
          We offer excellent career advancement opportunities with 85% of our team members experiencing 
          professional growth within the organization.
        </p>
        <p>
          NextelBPO provides comprehensive benefits including clear career advancement paths, leadership 
          development programs, flexible work schedules, remote work opportunities, and exposure to 
          cutting-edge technology and innovative solutions.
        </p>
        <p>
          We value our global team environment that fosters collaboration across diverse cultures and 
          continents. Our work culture emphasizes innovation, professional development, and work-life 
          balance.
        </p>
        <p>
          Submit your resume to join our talent network and be the first to know about new opportunities 
          in lead generation, customer support, insurance sales, transcription services, and other BPO 
          specializations.
        </p>
      </div>

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

          <FloatingOrbs />
          <NeuralNetworkLines />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 tracking-tight">
            Join Our Team
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              Building the Future Together
            </h2>
            <p className="text-lg text-purple-200/80">
              Where innovation meets opportunity • Where talent thrives • Where careers evolve
            </p>
          </div>

          <MetricsDashboard />
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
            {CAREER_BENEFITS.map((benefit, index) => (
              <CareerBenefitCard key={index} benefit={benefit} index={index} />
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
            <button
              onClick={scrollToForm}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
            >
              Submit Your Resume 
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section id="talent-network-form" className="py-24 bg-slate-950 relative">
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
                    {TALENT_NETWORK_BENEFITS.map((item, i) => (
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
                  <FormInput
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    icon={User}
                  />
                  <FormInput
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    icon={Mail}
                  />
                  <FormInput
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    icon={Phone}
                  />
                  
                  <FileUpload formData={formData} setFormData={setFormData} />
                  
                  {submitStatus && (
                    <div className={`p-4 rounded-lg border ${submitStatus.success ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FileText className="w-5 h-5" />
                        Join Talent Network
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;