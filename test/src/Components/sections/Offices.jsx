import { MapPin, ArrowRight } from 'lucide-react';

const OfficeLocationsMap = () => {
  const offices = [
    { 
      id: 1, 
      name: 'Nextel BPO - Main Branch', 
      address: 'Sabah Plaza Saddar, Rawalpindi',
      coordinates: '33.59813938627853, 73.04900650108829'
    },
    { 
      id: 2, 
      name: 'NextelBPO 2.0', 
      address: 'Near Corner Food Saddar, Rawalpindi',
      coordinates: '33.600000, 73.050000'
    },
    { 
      id: 3, 
      name: 'NextelBPO 3.0', 
      address: 'Commercial Market B Block, Satellite Town',
      coordinates: '33.6385163826533, 73.06287297064223'
    },
    { 
      id: 4, 
      name: 'NextelBPO 4.0', 
      address: 'Kalma Chowk, Rawalpindi',
      coordinates: '33.575514505093224, 73.03289072639484'
    },
    { 
      id: 5, 
      name: 'NextelBPO 5.0', 
      address: 'Commercial Market D Block, Satellite Town',
      coordinates: '33.640000, 73.065000'
    }
  ];

  const openGoogleMaps = (office) => {
    const mapUrl = `https://www.google.com/maps?q=${office.coordinates}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-sm tracking-[0.2em] uppercase text-black/40 font-medium mb-6 block">
            Our Presence
          </span>
          <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-black leading-[0.9] tracking-[-0.02em] mb-8">
            Locations
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-black/40 max-w-[700px] font-light leading-[1.4]">
            Five offices across Pakistan
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {offices.map((office) => (
            <div
              key={office.id}
              className="group bg-black/5 p-8 md:p-10 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer border border-black/5 hover:border-black"
              onClick={() => openGoogleMaps(office)}
            >
              {/* Icon */}
              <div className="mb-8">
                <MapPin className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Office Name */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {office.name}
              </h3>

              {/* Address */}
              <p className="text-black/40 group-hover:text-white/50 mb-8 font-light leading-relaxed">
                {office.address}
              </p>

              {/* Get Directions Link */}
              <div className="inline-flex items-center gap-3 text-sm uppercase tracking-wider font-medium group-hover:gap-4 transition-all">
                <span>Directions</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsMap;
