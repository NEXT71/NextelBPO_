import { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Twitter, Mail, Users, Check, ChevronRight } from 'lucide-react';

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState('Leadership');
  const [showNoOpeningsModal, setShowNoOpeningsModal] = useState(false);
  const [showHrContactModal, setShowHrContactModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
          
        },
        {
          name: "AbuBakar Ahmed",
          position: "Co-Founder & President",
          image: "/AbuBakar.jpeg",
          bio: "Operations expert specializing in process optimization.",
          
        },
        {
          name: "Sameer Malik",
          position: "Co-Founder",
          image: "/Sameer Malik.JPG",
          bio: "Strategic business development with extensive industry connections.",
        
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
        },
        {
          name: "Waleed Khan",
          image: "/Waleed Khan.JPG",
          
        },
        {
          name: "Abdul Moeed",
          image: "/Abdul Moed.JPG",
          
        }
      ]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%)
            `
          }}></div>
          
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
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
          <div className="inline-flex items-center justify-center relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            The talented professionals driving NextelBPO's global success
          </p>
        </div>
      </section>

      {/* Team Navigation */}
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
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
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {departments.map((department) => (
            <section 
              key={department.name}
              id={department.name.toLowerCase()}
              className="mb-28 last:mb-0"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  {department.name} Team
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {department.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((member) => (
                  <div
                    key={member.name}
                    className="group relative bg-white rounded-3xl p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl border border-gray-200/80 hover:border-blue-400/50"
                  >
                    {/* Animated background effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"
                        style={{
                          maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
                          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)"
                        }}
                      ></div>
                    </div>

                    {/* Profile image with futuristic border */}
                    <div className="relative mb-6 mx-auto w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500"></div>
                      <div className="absolute inset-0 rounded-full border border-purple-400/20 group-hover:border-purple-400/50 transition-all duration-500 delay-75"></div>
                      
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
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
                        {member.bio}
                      </p>
                      
                      {/* Social links */}
                      <div className="flex justify-center space-x-3">
                        {member.social.map((social) => (
                          <a
                            key={social.platform}
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
            </section>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200/80">
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
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
                      <Check className="w-5 h-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Explore Opportunities</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowNoOpeningsModal(true)}
                    className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span>View Open Positions</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setShowHrContactModal(true)}
                    className="w-full group flex items-center justify-between px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all"
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
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">No Current Openings</h3>
            <p className="text-gray-600">There are no job openings available at the moment. Please check back later.</p>
            <button
              onClick={() => setShowNoOpeningsModal(false)}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HR Contact Modal */}
      {showHrContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">HR Team Contact</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-gray-800 font-medium">Rana Qamar Ali</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-gray-800 font-medium">03705546296</p>
              </div>
            </div>
            <button
              onClick={() => setShowHrContactModal(false)}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
