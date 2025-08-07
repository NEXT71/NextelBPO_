import Hero from '../Components/sections/Hero.jsx';
import Services from '../Components/sections/Services.jsx';
import Testimonials from '../Components/sections/Testimonials.jsx';
import Stats from '../Components/sections/Stats.jsx';
import OfficeLocationsMap from '../Components/sections/Offices.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <OfficeLocationsMap/>
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;