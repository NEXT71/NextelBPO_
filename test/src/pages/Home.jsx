import { useState, useEffect } from "react";
import Head from 'next/head';
import Hero from '../Components/sections/Hero.jsx';
import Services from '../Components/sections/Services.jsx';
import Testimonials from '../Components/sections/Testimonials.jsx';
import Stats from '../Components/sections/Stats.jsx';
import OfficeLocationsMap from '../Components/sections/Offices.jsx';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Nextel BPO - Global Business Process Outsourcing Solutions & Services</title>
        <meta name="description" content="Nextel BPO provides scalable, secure, and intelligent business process outsourcing solutions powered by cutting-edge technology and expert professionals." />
        <meta name="keywords" content="BPO, business process outsourcing, lead generation, inbound services, transcriptions, life insurance sales, call center, customer service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.nextelbpo.com/" />
        <meta property="og:title" content="Nextel BPO - Global Business Process Outsourcing Solutions" />
        <meta property="og:description" content="Scalable, secure, and intelligent business process outsourcing solutions powered by cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextelbpo.com/" />
        <meta property="og:image" content="https://www.nextelbpo.com/og-image.jpg" />
      </Head>
      
      <Hero />
      <Services />
      <OfficeLocationsMap />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;