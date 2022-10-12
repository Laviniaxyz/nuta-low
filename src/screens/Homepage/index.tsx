import React, { useContext } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import FooterSection from './sections/FooterSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import QuoteSection from './sections/QuoteSection';
import MainServicesSection from './sections/MainServicesSection';
import WhyWorkWithUs from './sections/WhyWorkWithUs';

const Homepage = () => {
  return (
    <div>
      <NavigationMenu />
      <HeroSection />
      <QuoteSection />
      <WhyWorkWithUs />
      <MainServicesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
