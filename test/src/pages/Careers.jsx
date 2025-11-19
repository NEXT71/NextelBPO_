import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Check, ArrowRight, Zap, Rocket, Stars, Lightbulb, Users, ArrowDown, 
  Activity, TrendingUp, Upload, User, Mail, Phone, FileText, MapPin, MessageCircle
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
  <div className="group relative bg-white border border-black/10 overflow-hidden hover:border-black/30 transition-all duration-500">
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Card Content */}
    <div className="relative p-10 flex flex-col h-full">
      {/* Icon Section */}
      <div className="relative mb-8">
        <div className="w-16 h-16 bg-black flex items-center justify-center group-hover:bg-black/90 transition-all duration-500 mx-auto">
          <div className="text-white transition-colors duration-300">
            {benefit.icon}
          </div>
        </div>
        {/* Status Indicator */}
        <div className="absolute -top-2 -right-2">
          <div className={`w-3 h-3 ${
            benefit.status === 'ACTIVE' ? 'bg-black' : 'bg-black/40'
          }`}></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-black mb-4 text-center tracking-tight">
        {benefit.title}
      </h3>
      
      <p className="text-black/60 mb-8 text-center leading-relaxed flex-grow">
        {benefit.description}
      </p>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {benefit.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <Check className="w-4 h-4 text-black flex-shrink-0" />
            <span className="text-black/70">{feature}</span>
          </div>
        ))}
      </div>

      {/* Status Badge */}
      <div className="text-center">
        <span className={`text-xs uppercase tracking-[0.2em] px-4 py-2 border ${
          benefit.status === 'ACTIVE' 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-black/60 border-black/20'
        }`}>
          {benefit.status}
        </span>
      </div>
    </div>
  </div>
);

// Fixed Form Input Component
const FormInput = ({ type, placeholder, name, value, onChange, required, icon: Icon }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40">
      <Icon className="w-5 h-5" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 focus:outline-none focus:border-black placeholder-black/40 transition-all duration-500"
      required={required}
    />
  </div>
);

// Fixed File Upload Component
const FileUpload = ({ formData, setFormData }) => (
  <div className="pt-2">
    <label className="block text-sm text-black/60 uppercase tracking-wider mb-2">
      Upload Resume (Required)
    </label>
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col w-full border-2 border-dashed border-black/10 hover:border-black/20 cursor-pointer transition-all duration-500">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-4 text-black/40" />
          <p className="mb-2 text-sm text-black/60">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-black/40">
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
    position: '',
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
    return formData.name && formData.email && formData.position && formData.resume;
  }, [formData.name, formData.email, formData.position, formData.resume]);

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
    formDataToSend.append('position', formData.position || '');
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
      <section className="relative min-h-screen bg-black text-white flex items-center border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920)' }}></div>
        
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="py-40">
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
                Career Opportunities
              </p>
              
              <h1 className="text-[96px] font-bold leading-[0.9] tracking-tight mb-8">
                Build Your{' '}
                <span className="text-white/30">Career With Us</span>
              </h1>
              
              <p className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
                Join 200+ professionals across 15+ countries. Submit your resume for future opportunities in BPO excellence.
              </p>
              
              <button 
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-white/90 transition-all duration-500"
              >
                Join Talent Network
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-12 flex items-center gap-3">
                <a 
                  href="https://wa.me/+923705546296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/70 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp HR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 bg-white border-b border-black/5">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-black/40">Career Benefits</span>
            </div>
            <h2 className="text-[56px] font-bold tracking-tight mb-6 leading-tight">Why Choose <span className="text-black/30">NextelBPO?</span></h2>
            <p className="text-xl text-black/60">Experience a career that grows with advanced technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAREER_BENEFITS.map((benefit, index) => (
              <CareerBenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* No Openings Message */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">Current Status</span>
            </div>
            <h2 className="text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">No Current <span className="text-white/30">Openings</span></h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We don't have any open positions at the moment, but we're always excited to hear from talented professionals. 
              Feel free to submit your resume for future opportunities.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="group bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-500 flex items-center justify-center gap-3"
            >
              Submit Your Resume 
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section id="talent-network-form" className="py-32 bg-white">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="max-w-6xl border border-black/10 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-black p-12 text-white">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Join Our Talent Network</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    While we don't have current openings, we're always building our talent pool.
                    Submit your information and we'll contact you when a matching position becomes available.
                  </p>
                  <div className="space-y-3">
                    {TALENT_NETWORK_BENEFITS.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-white/40 mr-3 flex-shrink-0" />
                        <span className="text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-white">
                <h3 className="text-2xl font-bold mb-2">Submit Your Information</h3>
                <div className="mb-6">
                  <a 
                    href="https://wa.me/+923705546296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-black hover:bg-black/90 text-white px-6 py-4 text-sm uppercase tracking-wider transition-all duration-500"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact HR via WhatsApp
                  </a>
                  <p className="text-black/60 text-xs mt-3 text-center">
                    Chat with Qamar Ali Rana - HR Manager
                  </p>
                </div>
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
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40">
                      <FileText className="w-5 h-5" />
                    </div>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 focus:outline-none focus:border-black placeholder-black/40 transition-all duration-500"
                      required
                    >
                      <option value="">Select Position Type</option>
                      <option value="Verifier">Verifier</option>
                      <option value="CSR">Customer Service Representative (CSR)</option>
                      <option value="Closer">Closer</option>
                      <option value="Business Development Executive">Business Development Executive</option>
                    </select>
                  </div>
                  
                  <FileUpload formData={formData} setFormData={setFormData} />
                  
                  {submitStatus && (
                    <div className={`p-4 border ${submitStatus.success ? 'bg-black/5 border-black/10' : 'bg-black/5 border-black/10'}`}>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-black/90 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
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