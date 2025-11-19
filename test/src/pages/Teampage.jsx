import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Linkedin, Mail, Users, Check, ChevronRight, Activity, TrendingUp, Star, Zap } from 'lucide-react';

// Extract data to separate constants for better maintainability
const TEAM_DATA = {
  departments: [
    {
      name: "Leadership",
      description: "Visionary leaders shaping our company's future",
      members: [
        {
          name: "AbuBakar Ahmed",
          position: "Co-Founder & President",
          image: "/AbuBakar.jpeg",
          bio: "Operations expert specializing in process optimization.",
          linkedin: "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/"
        },
        {
          name: "Maaz Abbasi",
          position: "Co-Founder & CEO",
          image: "/Maaz Abbasi.JPG",
          bio: "10+ years in BPO industry, driving company strategy and growth.",
          linkedin: "https://www.linkedin.com/in/maaz-abbasi-989865172/"
        },
        {
          name: "Sameer Malik",
          position: "Co-Founder",
          image: "/Sameer Malik.JPG",
          bio: "Strategic business development with extensive industry connections."
        }
      ]
    },
    {
      name: "Operations",
      description: "Experts ensuring seamless service delivery",
      members: [
        {
          name: "Muhammad Yasir",
          image: "/Muhammad Yasir.JPG",
          position: "Operations Manager",
          bio: "Experienced operations manager with expertise in team leadership and process optimization."
        },
        {
          name: "Waleed Khan",
          image: "/Waleed Khan.JPG",
          position: "Operations Specialist",
          bio: "Specialized in operational efficiency and client relationship management."
        },
        {
          name: "Abdul Moeed",
          image: "/Abdul Moed.JPG",
          position: "Operations Coordinator",
          bio: "Skilled in coordinating daily operations and ensuring service quality standards."
        }
      ]
    }
  ],
  metrics: [
    { label: "Team Members", value: "50+", icon: <Users className="w-5 h-5" /> },
    { label: "Departments", value: "8", icon: <Star className="w-5 h-5" /> },
    { label: "Experience", value: "10+ Years", icon: <Activity className="w-5 h-5" /> }
  ],
  benefits: [
    "Competitive compensation & benefits",
    "Flexible work environment",
    "Continuous learning & growth",
    "Impactful work with global clients"
  ]
};

const HR_CONTACT = {
  name: "Rana Qamar Ali",
  phone: "03705546296"
};

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('Leadership');
  const [showNoOpeningsModal, setShowNoOpeningsModal] = useState(false);
  const [showHrContactModal, setShowHrContactModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Memoized values for performance
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "NextelBPO Team",
    "description": "Meet the leadership and operations team at NextelBPO",
    "mainEntity": {
      "@type": "Organization",
      "name": "NextelBPO",
      "employee": [
        {
          "@type": "Person",
          "name": "AbuBakar Ahmed", 
          "jobTitle": "Co-Founder & President",
          "description": "Operations expert specializing in process optimization.",
          "sameAs": "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/"
        },
        {
          "@type": "Person",
          "name": "Maaz Abbasi",
          "jobTitle": "Co-Founder & CEO",
          "description": "10+ years in BPO industry, driving company strategy and growth.",
          "sameAs": "https://www.linkedin.com/in/maaz-abbasi-989865172/"
        },
        
        {
          "@type": "Person",
          "name": "Sameer Malik",
          "jobTitle": "Co-Founder",
          "description": "Strategic business development with extensive industry connections."
        }
      ]
    }
  }), []);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'NextelBPO Team - Meet Our Leadership & Operations Experts';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the NextelBPO leadership team and operations experts. Learn about our Co-Founders Maaz Abbasi, AbuBakar Ahmed, Sameer Malik and our dedicated operations professionals.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet the NextelBPO leadership team and operations experts. Learn about our Co-Founders Maaz Abbasi, AbuBakar Ahmed, Sameer Malik and our dedicated operations professionals.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'NextelBPO team, BPO leadership, operations team, Maaz Abbasi CEO, AbuBakar Ahmed President, Sameer Malik Co-Founder, BPO professionals';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'NextelBPO Team - Meet Our Leadership & Operations Experts' },
      { property: 'og:description', content: 'Meet the NextelBPO leadership team and operations experts driving innovation in business process outsourcing.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
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

    return () => clearInterval(timer);
  }, [structuredData]);

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
  );

  // Metrics Dashboard Component
  const MetricsDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {TEAM_DATA.metrics.map((metric, idx) => (
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

  // Team Member Card Component with Perspective Effect
  const TeamMemberCard = ({ member, index, totalCards }) => {
    const isLeftEdge = index === 0;
    const isRightEdge = index === totalCards - 1;
    const isCenterCard = index === 1 && totalCards === 3;
    
    let transformStyle = {};
    let cardOpacity = 1;
    let zIndex = 10;
    let scale = 1;
    
    if (isLeftEdge) {
      transformStyle = { 
        transform: 'perspective(1500px) rotateY(35deg) translateX(80px) translateZ(-100px)',
        transformOrigin: 'center right'
      };
      cardOpacity = 0.6;
      zIndex = 1;
      scale = 0.92;
    } else if (isRightEdge) {
      transformStyle = { 
        transform: 'perspective(1500px) rotateY(-35deg) translateX(-80px) translateZ(-100px)',
        transformOrigin: 'center left'
      };
      cardOpacity = 0.6;
      zIndex = 1;
      scale = 0.92;
    } else if (isCenterCard) {
      transformStyle = {
        transform: 'perspective(1500px) translateZ(50px) scale(1.05)',
        transformOrigin: 'center'
      };
      zIndex = 20;
      scale = 1.05;
    }
    
    return (
      <div
        className="group relative border border-black/5 hover:border-black overflow-hidden transition-all duration-700 w-[320px] flex-shrink-0 hover:z-30"
        style={{
          ...transformStyle,
          opacity: cardOpacity,
          zIndex,
          scale: `${scale}`,
          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isLeftEdge || isRightEdge ? '0 20px 60px rgba(0,0,0,0.15)' : '0 25px 80px rgba(0,0,0,0.2)'
        }}
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="relative p-8 flex flex-col h-full bg-white group-hover:bg-black/[0.02] transition-colors duration-500">
          {/* Profile image */}
          <div className="relative mb-6 mx-auto w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-black/5 group-hover:bg-black/10 transition-all duration-500"></div>
          
            <div className="w-full h-full rounded-full bg-black/5 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0"
                itemProp="image"
                loading="lazy"
                style={{
                  filter: isLeftEdge || isRightEdge ? 'brightness(0.8)' : 'brightness(1)',
                  transition: 'filter 0.5s ease'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center flex-grow flex flex-col">
            <h3 className="text-2xl font-bold mb-2 transition-colors duration-500" itemProp="name">
              {member.name}
            </h3>
            
            <div className="mb-4">
              <span className="inline-block px-4 py-2 border border-black/10 text-xs uppercase tracking-wider text-black/60" itemProp="jobTitle">
                {member.position}
              </span>
            </div>
            
            <p className="text-black/60 mb-6 leading-relaxed flex-grow text-sm" itemProp="description">
              {member.bio}
            </p>
            
            {/* Social links */}
            {member.linkedin && (
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-black/5 hover:bg-black border border-black/10 hover:border-black text-black/40 hover:text-white transition-all duration-500"
                  itemProp="sameAs"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Department Section Component
  const DepartmentSection = ({ department }) => (
    <section 
      key={department.name}
      id={department.name.toLowerCase()}
      className="mb-32 last:mb-0"
    >
      <div className="mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-black/40">{department.name} Division</span>
        </div>
        <h2 className="text-[56px] font-bold tracking-tight mb-6 leading-tight">
          {department.name} <span className="text-black/30">Team</span>
        </h2>
        <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
          {department.description}
        </p>
      </div>

      {/* Team cards container with perspective effect */}
      <div 
        className="flex justify-center gap-12 overflow-visible perspective-container py-12"
        style={{
          perspective: '1500px',
          perspectiveOrigin: 'center center',
          transformStyle: 'preserve-3d'
        }}
      >
        {department.members.map((member, idx) => (
          <TeamMemberCard key={member.name} member={member} index={idx} totalCards={department.members.length} />
        ))}
      </div>
    </section>
  );

  // Modal Components
  const NoOpeningsModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white max-w-md w-full p-8 space-y-4 border border-black/10">
        <h3 className="text-2xl font-bold">No Current Openings</h3>
        <p className="text-black/60">There are no job openings available at the moment. Please check back later.</p>
        <button
          onClick={() => setShowNoOpeningsModal(false)}
          className="w-full mt-4 px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-colors duration-500"
        >
          Close
        </button>
      </div>
    </div>
  );

  const HrContactModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white max-w-md w-full p-8 space-y-4 border border-black/10">
        <h3 className="text-2xl font-bold">HR Team Contact</h3>
        <div className="space-y-4 border-t border-black/5 pt-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-black/40 mb-1">Name</p>
            <p className="text-lg font-medium">{HR_CONTACT.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-black/40 mb-1">Phone Number</p>
            <p className="text-lg font-medium">{HR_CONTACT.phone}</p>
          </div>
        </div>
        <button
          onClick={() => setShowHrContactModal(false)}
          className="w-full mt-4 px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-colors duration-500"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>NextelBPO Team - Leadership and Operations Experts</h1>
        <p>
          Meet the NextelBPO leadership team including Co-Founders Maaz Abbasi (CEO), AbuBakar Ahmed (President), 
          and Sameer Malik. Our leadership brings decades of combined experience in the BPO industry, driving innovation
          and excellence in business process outsourcing.
        </p>
        <p>
          Our operations team includes Muhammad Yasir (Operations Manager), Waleed Khan (Operations Specialist),
          and Abdul Moeed (Operations Coordinator) who ensure seamless service delivery and client satisfaction.
        </p>
        <p>
          NextelBPO was founded in 2018 and has grown to over 50 professionals across multiple departments,
          serving clients worldwide with lead generation, customer support, life insurance sales, and transcription services.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 bg-black text-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-8 max-w-[1600px]">
          <div className="max-w-5xl">
            <h1 className="text-[96px] md:text-[120px] font-bold mb-12 tracking-tight leading-[0.85]">
              Meet Our
              <br />
              <span className="text-white/30">Leadership Team</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              Global talent • Expert leadership • Innovative thinking • Unified vision
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {TEAM_DATA.metrics.map((metric, idx) => (
                <div key={idx} className="border-l border-white/10 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-white/40">{metric.icon}</div>
                    <span className="text-sm uppercase tracking-wider text-white/40">{metric.label}</span>
                  </div>
                  <div className="text-4xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation */}
      <section className="sticky top-0 z-20 bg-white backdrop-blur-sm py-4 border-b border-black/5">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {TEAM_DATA.departments.map((dept) => (
              <button
                key={dept.name}
                onClick={() => {
                  setActiveDepartment(dept.name);
                  document.getElementById(dept.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`whitespace-nowrap px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeDepartment === dept.name
                    ? 'bg-black text-white'
                    : 'border border-black/10 text-black/60 hover:border-black/20'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="relative bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)' }}></div>
        </div>
        
        <div className="container mx-auto px-8 max-w-[1600px] py-32">
          {TEAM_DATA.departments.map((department) => (
            <DepartmentSection key={department.name} department={department} />
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">Career Opportunities</span>
            </div>
            <h2 className="text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">Join Our <span className="text-white/30">Growing Team</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Be part of the next generation of BPO excellence</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Benefits Grid */}
              {TEAM_DATA.benefits.map((item, index) => (
                <div key={item} className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.split('&')[0].trim()}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.includes('compensation') && 'Competitive salary packages with comprehensive health and wellness benefits'}
                        {item.includes('Flexible') && 'Remote work options and flexible scheduling to maintain work-life balance'}
                        {item.includes('learning') && 'Professional development programs and skill enhancement opportunities'}
                        {item.includes('Impactful') && 'Collaborate with Fortune 500 companies and make a real difference'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-6">
              <button 
                onClick={() => setShowNoOpeningsModal(true)}
                className="group relative bg-white text-black px-8 py-6 text-base font-semibold hover:bg-white/90 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="uppercase tracking-wider">View Open Positions</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </button>
              
              <button 
                onClick={() => setShowHrContactModal(true)}
                className="group relative border-2 border-white/20 text-white px-8 py-6 text-base font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-500"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="uppercase tracking-wider">Contact HR Team</span>
                  <Mail className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Active Positions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showNoOpeningsModal && <NoOpeningsModal />}
      {showHrContactModal && <HrContactModal />}
    </div>
  );
};

export default TeamPage;