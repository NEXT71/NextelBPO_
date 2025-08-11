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
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          bio: "10+ years in BPO industry, driving company strategy and growth.",
          
        },
        {
          name: "AbuBakar Ahmed",
          position: "Co-Founder & President",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          bio: "Operations expert specializing in process optimization.",
          
        },
        {
          name: "Sameer Malik",
          position: "Co-Founder",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
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
          position: "Operations Manager",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
          bio: "Experienced operations professional ensuring smooth workflow and quality delivery.",
        },
        {
          name: "Waleed Khan",
          position: "Senior Operations Specialist",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
          bio: "Quality assurance expert with focus on client satisfaction and process improvement.",
          
        },
        {
          name: "Abdul Moeed",
          position: "Operations Coordinator",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
          bio: "Detail-oriented coordinator managing multiple client projects efficiently.",
          
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
                {department.members.map((member, index) => (
                  <div
                    key={member.name}
                    className="group relative bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90 rounded-2xl p-8 overflow-hidden transform hover:-translate-y-8 hover:rotateX-5 transition-all duration-1000 hover:shadow-2xl border border-emerald-400/30 hover:border-emerald-400/80"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                      boxShadow: '0 0 0 1px rgba(16, 185, 129, 0.2), 0 0 50px rgba(16, 185, 129, 0.1)'
                    }}
                  >
                    {/* Matrix rain effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 overflow-hidden">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute top-0 text-emerald-400 text-xs font-mono animate-pulse"
                          style={{
                            left: `${i * 7}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            transform: `translateY(-100%)`,
                            animation: `matrix-rain ${3 + Math.random() * 2}s linear infinite`
                          }}
                        >
                          {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                      ))}
                    </div>

                    {/* Holographic scan lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                      <div className="absolute inset-0" style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16, 185, 129, 0.03) 2px, rgba(16, 185, 129, 0.03) 4px)'
                      }}></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    {/* 3D floating elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                      <div className="absolute top-4 right-4 w-3 h-3 border border-emerald-400/60 transform rotate-45 animate-spin" style={{ animationDuration: '4s' }}></div>
                      <div className="absolute bottom-8 left-6 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/2 right-6 w-4 h-4 border-l-2 border-b-2 border-emerald-400/40 animate-pulse"></div>
                    </div>

                    {/* Profile image with 3D hologram effect */}
                    <div className="relative mb-8 mx-auto w-40 h-40 group-hover:scale-110 transition-transform duration-1000"
                         style={{ transformStyle: 'preserve-3d' }}>
                      
                      {/* Hologram base */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-purple-400/10 to-emerald-400/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-1000 animate-pulse"></div>
                      
                      {/* 3D rotating frame */}
                      <div className="absolute inset-0 border-2 border-emerald-400/40 rounded-full group-hover:border-emerald-400/80 transition-all duration-1000">
                        <div className="absolute inset-2 border border-purple-400/30 rounded-full group-hover:border-purple-400/60 transition-all duration-1000"></div>
                        <div className="absolute inset-4 border border-emerald-400/20 rounded-full group-hover:border-emerald-400/50 transition-all duration-1000"></div>
                      </div>

                      {/* Image container with hologram effect */}
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 group-hover:bg-slate-700 transition-colors duration-1000"
                           style={{
                             transform: 'translateZ(20px)',
                             boxShadow: 'inset 0 0 50px rgba(16, 185, 129, 0.1)'
                           }}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:brightness-125 group-hover:contrast-110 transition-all duration-1000"
                          style={{
                            filter: 'sepia(0.1) hue-rotate(120deg) saturate(1.2)'
                          }}
                        />
                        
                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full"></div>
                      </div>

                      {/* ID Badge floating effect */}
                      <div className="absolute -bottom-2 -right-2 bg-slate-800/90 backdrop-blur-sm border border-emerald-400/40 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-100 scale-75"
                           style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                        <span className="text-emerald-400 text-xs font-mono">ID: {String(index + 1).padStart(3, '0')}</span>
                      </div>
                    </div>

                    {/* Content with futuristic styling */}
                    <div className="relative z-10 text-center" style={{ transform: 'translateZ(10px)' }}>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-all duration-700 font-mono tracking-wider"
                          style={{ 
                            textShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                            transform: 'translateZ(15px)'
                          }}>
                        {member.name}
                      </h3>
                      
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-emerald-400/40 rounded text-emerald-300 text-sm font-mono group-hover:border-emerald-400/80 group-hover:bg-slate-700/80 transition-all duration-700"
                              style={{
                                boxShadow: 'inset 0 0 20px rgba(16, 185, 129, 0.1)',
                                transform: 'translateZ(10px)'
                              }}>
                          &gt; {member.position}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-700 font-mono text-sm"
                         style={{ 
                           textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                           transform: 'translateZ(5px)'
                         }}>
                        {member.bio}
                      </p>

                      {/* Access level indicator */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-1 ${i < 4 ? 'bg-emerald-400' : 'bg-gray-600'} rounded-full animate-pulse`}
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
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
