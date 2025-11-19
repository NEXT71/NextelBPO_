const Stats = () => {
  const stats = [
    { value: '100+', label: 'Global Clients', ariaLabel: 'Over 100 global clients' },
    { value: '98.9%', label: 'Uptime', ariaLabel: '98.9 percent uptime guarantee' },
    { value: '98%', label: 'Retention', ariaLabel: '98 percent client retention rate' },
    { value: '200+', label: 'Team Members', ariaLabel: 'Over 200 team members worldwide' }
  ];

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40" aria-label="Company statistics">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div 
                className="text-[clamp(40px,6vw,96px)] font-bold text-black mb-3 md:mb-4 leading-[0.9] tracking-[-0.02em]"
                aria-label={stat.ariaLabel}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-lg text-black/40 font-light tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
