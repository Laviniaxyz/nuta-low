import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import FooterSection from './sections/FooterSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const Homepage = () => {
  return (
    <div>
      <NavigationMenu />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
