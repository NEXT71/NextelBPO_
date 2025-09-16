import { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Twitter, Mail, Users, Check, ChevronRight, Activity, TrendingUp, Star, Zap } from 'lucide-react';

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('Leadership');
  const [showNoOpeningsModal, setShowNoOpeningsModal] = useState(false);
  const [showHrContactModal, setShowHrContactModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

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

    // Structured Data for Team Page
    const structuredData = {
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
            "name": "Maaz Abbasi",
            "jobTitle": "Co-Founder & CEO",
            "description": "10+ years in BPO industry, driving company strategy and growth.",
            "sameAs": "https://www.linkedin.com/in/maaz-abbasi-989865172/"
          },
          {
            "@type": "Person",
            "name": "AbuBakar Ahmed", 
            "jobTitle": "Co-Founder & President",
            "description": "Operations expert specializing in process optimization.",
            "sameAs": "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/"
          },
          {
            "@type": "Person",
            "name": "Sameer Malik",
            "jobTitle": "Co-Founder",
            "description": "Strategic business development with extensive industry connections."
          }
        ]
      }
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => clearInterval(timer);
  }, []);

  const departments = [
    {
      name: "Leadership",
      description: "Visionary leaders shaping our company's future",
      members: [
        {
          name: "Maaz Abbasi",
          position: "Co-Founder & CEO",
          image: "/Maaz Abbasi.JPG",
          bio: "10+ years in BPO industry, driving company strategy and growth.",
          linkedin: "https://www.linkedin.com/in/maaz-abbasi-989865172/"
        },
        {
          name: "AbuBakar Ahmed",
          position: "Co-Founder & President",
          image: "/AbuBakar.jpeg",
          bio: "Operations expert specializing in process optimization.",
          linkedin: "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/"
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
  ];

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
            Meet Our Team
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-purple-100 mb-4 font-light">
              The Minds Behind Innovation
            </p>
            <p className="text-lg text-purple-200/80">
              Global talent • Expert leadership • Innovative thinking • Unified vision
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Team Members", value: "50+", icon: <Users className="w-5 h-5" /> },
              { label: "Departments", value: "8", icon: <Star className="w-5 h-5" /> },
              { label: "Experience", value: "10+ Years", icon: <Activity className="w-5 h-5" /> }
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

      {/* Team Navigation */}
      <section className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-sm shadow-lg py-4 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {departments.map((dept) => (
              <button
                key={dept.name}
                onClick={() => {
                  setActiveDepartment(dept.name);
                  document.getElementById(dept.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeDepartment === dept.name
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="bg-slate-950">
        <div className="container mx-auto px-6 py-20">
          {departments.map((department) => (
            <section 
              key={department.name}
              id={department.name.toLowerCase()}
              className="mb-28 last:mb-0"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-100 font-medium">{department.name} Division</span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  {department.name} Team
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  {department.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((member) => (
                  <div
                    key={member.name}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-8 flex flex-col h-full">
                      {/* Profile image with futuristic border */}
                      <div className="relative mb-6 mx-auto w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500"></div>
                        <div className="absolute inset-0 rounded-full border border-pink-400/20 group-hover:border-pink-400/50 transition-all duration-500 delay-75"></div>
                        
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-50/10 to-pink-50/10 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500 border border-slate-700/50">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            itemProp="image"
                          />
                        </div>
                        
                        {/* Status Indicator */}
                        <div className="absolute -top-2 -right-2">
                          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300" itemProp="name">
                          {member.name}
                        </h3>
                        
                        <div className="mb-4">
                          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium group-hover:from-purple-500/20 group-hover:to-pink-500/20 group-hover:border-purple-400/40 transition-all duration-300" itemProp="jobTitle">
                            {member.position}
                          </span>
                        </div>
                        
                        <p className="text-slate-400 mb-6 leading-relaxed flex-grow" itemProp="description">
                          {member.bio}
                        </p>
                        
                        {/* Social links */}
                        {member.linkedin && (
                          <div className="flex justify-center">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:text-white hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:shadow-lg transition-all duration-300"
                              itemProp="sameAs"
                              aria-label={`Connect with ${member.name} on LinkedIn`}
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-100 font-medium">Career Opportunities</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Join Our Growing Team</h2>
            <p className="text-xl text-slate-400">Be part of the next generation of BPO excellence</p>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    We're always looking for talented professionals to join the NextelBPO family.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Competitive compensation & benefits",
                      "Flexible work environment",
                      "Continuous learning & growth",
                      "Impactful work with global clients"
                    ].map((item) => (
                      <div key={item} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-6">Explore Opportunities</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowNoOpeningsModal(true)}
                    className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span>View Open Positions</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setShowHrContactModal(true)}
                    className="w-full group flex items-center justify-between px-6 py-4 border-2 border-purple-600 text-purple-400 rounded-xl font-semibold hover:bg-purple-500/10 transition-all"
                  >
                    <span>Contact HR Team</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Openings Modal */}
      {showNoOpeningsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl max-w-md w-full p-6 space-y-4 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white">No Current Openings</h3>
            <p className="text-slate-400">There are no job openings available at the moment. Please check back later.</p>
            <button
              onClick={() => setShowNoOpeningsModal(false)}
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HR Contact Modal */}
      {showHrContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl max-w-md w-full p-6 space-y-4 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white">HR Team Contact</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-slate-500">Name</p>
                <p className="text-white font-medium">Rana Qamar Ali</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone Number</p>
                <p className="text-white font-medium">03705546296</p>
              </div>
            </div>
            <button
              onClick={() => setShowHrContactModal(false)}
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;