import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowRight, Users, Clock, Check, Shield, Mail, Linkedin, 
  Star, Zap, TrendingUp, Activity 
} from 'lucide-react';

// Extract data to separate constants for better maintainability
const MILESTONES = [
  { year: "2018", event: "NextelBPO Founded", description: "Started with a vision to transform business operations" },
  { year: "2022", event: "200+ Employees", description: "Reached a major milestone in team growth" },
  { year: "2024", event: "Global Recognition", description: "Named Industry Leader by BPO Excellence Awards" }
];

const LEADERSHIP_TEAM = [
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
];

const TAB_CONTENT = {
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

const METRICS = [
  { label: "Years of Excellence", value: "6+", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Global Professionals", value: "200+", icon: <Users className="w-6 h-6" /> },
  { label: "Client Satisfaction", value: "99.9%", icon: <Activity className="w-6 h-6" /> }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Memoized values for performance
  const currentTabContent = useMemo(() => TAB_CONTENT[activeTab], [activeTab]);
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NextelBPO",
      "foundingDate": "2018",
      "description": "NextelBPO is a leading BPO company founded in 2018, specializing in lead generation, customer support, life insurance sales, and transcription services.",
      "numberOfEmployees": "200+",
      "founder": [
        {
          "@type": "Person",
          "name": "Maaz Abbasi",
          "jobTitle": "Co-Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/maaz-abbasi-989865172/"
        },
        {
          "@type": "Person",
          "name": "AbuBakar Ahmed", 
          "jobTitle": "Co-Founder & President",
          "sameAs": "https://www.linkedin.com/in/abubakar-ahmad-77baa91a6/"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "838 walker rd STE 21-2",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "postalCode": "19904",
        "addressCountry": "US"
      },
      "email": "info@nextelbpo.co",
      "telephone": "+1-659-220-0667"
    }
  }), []);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // SEO Meta Tags
    document.title = 'About NextelBPO - Our Story, Mission & Leadership | Founded 2018';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about NextelBPO\'s journey since 2018. Meet our leadership team, discover our mission to transform business operations, and see why 200+ professionals trust our vision.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about NextelBPO\'s journey since 2018. Meet our leadership team, discover our mission to transform business operations, and see why 200+ professionals trust our vision.';
      document.head.appendChild(meta);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'NextelBPO company history, BPO leadership team, Maaz Abbasi CEO, AbuBakar Ahmed President, company mission vision values, BPO company founded 2018, Delaware BPO company';

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'About NextelBPO - Our Story, Mission & Leadership' },
      { property: 'og:description', content: 'Learn about NextelBPO\'s journey since 2018. Meet our leadership team and discover our mission to transform business operations.' },
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

  // Leadership Card Component
  const LeadershipCard = ({ member, index }) => (
    <article
      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:border-purple-500/50"
      itemScope
      itemType="https://schema.org/Person"
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
            itemProp="image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300" itemProp="name">
          {member.name}
        </h3>
        
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium" itemProp="jobTitle">
            {member.position}
          </span>
        </div>
        
        <p className="text-slate-400 mb-6 leading-relaxed" itemProp="description">
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
              itemProp="sameAs"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </article>
  );

  // Timeline Item Component
  const TimelineItem = ({ milestone, index }) => (
    <div className="relative pl-20 pb-12 last:pb-0">
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
  );

  return (
    <main className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hidden SEO content */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
        <h1>About NextelBPO - Premier BPO Company Since 2018</h1>
        <p>
          NextelBPO was founded in 2018 by visionary leaders Maaz Abbasi (CEO) and AbuBakar Ahmed (President) 
          with a mission to transform business process outsourcing. Based in Dover, Delaware, our company has grown 
          to over 200 professionals serving clients worldwide.
        </p>
        <p>
          Our comprehensive BPO services include lead generation, inbound customer support, life insurance sales, 
          and transcription services. We maintain a 99.9% client satisfaction rate and have been recognized as 
          an industry leader in BPO excellence.
        </p>
        <p>
          Maaz Abbasi, our Co-Founder and CEO, brings over 10 years of BPO industry experience, driving company 
          strategy and growth. AbuBakar Ahmed, our Co-Founder and President, specializes in operations and process 
          optimization, ensuring exceptional service delivery.
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-40 border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">About NextelBPO</div>
            <h1 className="text-[96px] font-bold leading-[0.9] tracking-tight mb-8">
              Transforming<br />
              <span className="text-white/30">Business Operations</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Since 2018, we've been delivering excellence in business process outsourcing with cutting-edge technology and expert professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-24 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-black/40">{metric.icon}</div>
                <div className="text-[96px] font-bold leading-[0.9] tracking-tight text-black">
                  {metric.value}
                </div>
                <div className="text-sm text-black/40">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-black text-white py-32 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Our Journey</div>
            <h2 className="text-[72px] font-bold leading-[0.9] tracking-tight">
              Our<br />
              <span className="text-white/30">Story</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Founded in 2018
                </h3>
                <p className="text-white/60 leading-relaxed">
                  NextelBPO was born from a vision to transform how businesses operate. Starting as a small team of dedicated professionals, 
                  our founders Maaz Abbasi and AbuBakar Ahmed set out to create a BPO company that would redefine industry standards.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Global Growth
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Today, our team of over 200+ professionals spans multiple continents, delivering exceptional service worldwide. 
                  We've maintained our core values while scaling our operations to serve diverse industries and markets.
                </p>
              </div>
            </div>

            <div className="bg-white border border-white/10 p-8 text-black">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center border-b border-r border-black/10 pb-6 pr-6">
                  <div className="text-5xl font-bold mb-2">6+</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">Years of Excellence</div>
                </div>
                <div className="text-center border-b border-black/10 pb-6">
                  <div className="text-5xl font-bold mb-2">200+</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">Professionals</div>
                </div>
                <div className="text-center border-r border-black/10 pr-6 pt-6">
                  <div className="text-5xl font-bold mb-2">USA</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">Primary Market</div>
                </div>
                <div className="text-center pt-6">
                  <div className="text-5xl font-bold mb-2">99.9%</div>
                  <div className="text-black/40 text-sm uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-32 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Our Foundation</div>
              <h2 className="text-[72px] font-bold leading-[0.9] tracking-tight text-black mb-8">
                What Drives<br />
                <span className="text-black/30">Our Work</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex space-x-4 border-b border-black/10 pb-6">
                {Object.keys(TAB_CONTENT).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs uppercase tracking-wider px-4 py-2 transition-all duration-500 ${
                      activeTab === tab
                        ? 'text-black border-b-2 border-black'
                        : 'text-black/40 hover:text-black/70'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">{currentTabContent.title}</h3>
                <p className="text-black/60 leading-relaxed text-lg">
                  {currentTabContent.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black text-white py-32 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Our Journey</div>
            <h2 className="text-[72px] font-bold leading-[0.9] tracking-tight">
              Company<br />
              <span className="text-white/30">Milestones</span>
            </h2>
          </div>

          <div className="space-y-12 max-w-3xl">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className="flex gap-12 border-b border-white/10 pb-12 last:border-0">
                <div className="text-[48px] font-bold leading-none text-white/20 min-w-[120px]">
                  {milestone.year}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    {milestone.event}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-32 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Leadership</div>
            <h2 className="text-[72px] font-bold leading-[0.9] tracking-tight text-black">
              Meet Our<br />
              <span className="text-black/30">Founders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {LEADERSHIP_TEAM.map((member, index) => (
              <article
                key={index}
                className="group border border-black/5 hover:border-black transition-all duration-700 bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-8 border-t border-black/5 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {member.name}
                    </h3>
                    <div className="text-xs uppercase tracking-[0.2em] text-black/40">
                      {member.position}
                    </div>
                  </div>
                  
                  <p className="text-black/60 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex space-x-3 pt-4">
                    {member.social.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border border-black/10 text-black/40 hover:text-black hover:border-black transition-all duration-500"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-8 max-w-[1600px]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">Get Started</span>
            </div>
            <h2 className="text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">Ready to Partner <span className="text-white/30">With Us?</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Join the thousands of companies that trust NextelBPO for their business transformation.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: <Check className="w-6 h-6" />, title: "Customized BPO solutions", desc: "Tailored strategies designed for your specific business needs" },
                { icon: <Users className="w-6 h-6" />, title: "24/7 customer support", desc: "Round-the-clock assistance from our dedicated team" },
                { icon: <Star className="w-6 h-6" />, title: "Industry-leading expertise", desc: "Decades of combined experience in BPO excellence" }
              ].map((item, i) => (
                <div key={i} className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/contact"
                className="group bg-white text-black px-8 py-6 text-base font-semibold hover:bg-white/90 transition-all duration-500 flex items-center justify-between"
              >
                <span className="uppercase tracking-wider">Start Your Project</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
              </a>
              
              <a
                href="mailto:info@nextelbpo.co"
                className="group border-2 border-white/20 text-white px-8 py-6 text-base font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-500 flex items-center justify-between"
              >
                <span className="uppercase tracking-wider">Email Us</span>
                <Mail className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm">Our team typically responds within 24 hours to discuss your business needs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;