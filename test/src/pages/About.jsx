import { useState, useEffect } from 'react';
import { ArrowRight, Users, Clock, Check, Shield, Mail } from 'lucide-react';
import { Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
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
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `
          }}></div>
          
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">About</span> NextelBPO
          </h1>
          
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Pioneering the future of business process outsourcing since 2018
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Founded in 2018</h3>
                  <p className="text-gray-600 leading-relaxed">
                    NextelBPO was born from a vision to transform how businesses operate. Starting as a small team of dedicated professionals.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, our team of over 200+ professionals spans multiple continents, delivering exceptional service worldwide.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">6+</div>
                    <div className="text-blue-200">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <div className="text-blue-200">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">USA</div>
                    <div className="text-blue-200">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-200">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Drives Us</h2>
              <p className="text-xl text-gray-600">The foundation of everything we do at NextelBPO</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8">
                  <div className="space-y-4">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                          activeTab === tab
                            ? 'bg-white text-blue-600 shadow-lg'
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
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones that shaped our company</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.event}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The visionary leaders driving NextelBPO's innovation and global success
        </p>
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
            className="group relative bg-white rounded-3xl p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl border border-gray-200/80 hover:border-blue-400/30"
          >
            {/* Gradient background effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"
                style={{
                  maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)"
                }}
              ></div>
            </div>

            {/* Avatar with futuristic border */}
            <div className="relative mb-6 mx-auto w-32 h-32">
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/20 group-hover:border-purple-400/50 transition-all duration-500 delay-75"></div>
              <div className="absolute inset-0 rounded-full border border-indigo-400/10 group-hover:border-indigo-400/30 transition-all duration-500 delay-150"></div>
              
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-gray-200/80 text-blue-600 text-sm font-medium group-hover:from-blue-100 group-hover:to-purple-100 group-hover:border-blue-200 transition-all duration-300">
                  {member.position}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.description}
              </p>
              
              {/* Social links with futuristic hover effect */}
              <div className="flex justify-center space-x-3">
                {member.social.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200/80 text-gray-500 hover:text-white hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:shadow-lg transition-all duration-300"
                    aria-label={`${member.name}'s ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/about/team"
          className="inline-flex items-center px-8 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <span className="mr-2">Explore Full Team</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
      <div className="lg:flex">
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Join the thousands of companies that trust NextelBPO for their business transformation.
          </p>
          <div className="space-y-3">
            {[
              "Customized BPO solutions",
              "24/7 customer support",
              "Industry-leading expertise"
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <Check className="w-5 h-5 text-blue-200 mr-3" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
          <div 
            className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors duration-200"
            onClick={() => {
              const subject = encodeURIComponent("Partnership Inquiry - NextelBPO");
              const body = encodeURIComponent("Hello NextelBPO team,\n\nI'm interested in learning more about your services.\n\nBest regards,\n[Your Name]");
              window.location.href = `mailto:support@nextelbpo.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email us at</p>
                <div className="text-xl font-semibold text-blue-600">
                  support@nextelbpo.com
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
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