import React from 'react';
import { Components } from './styled';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <Components.ServicesContainer>
      <Components.ServicesH1>Domenii de practică</Components.ServicesH1>
      <Components.ServicesWrapper>
        <ServiceCard title={'Drept comercial & societar'} icon={'commercial'} />
        <ServiceCard title={'Dreptul muncii'} icon={'work'} />
        <ServiceCard title={'Dreptul imigrarii'} icon={'migration'} />
        <ServiceCard title={'Dreptul asigurarilor'} icon={'ensurance'} />
        <ServiceCard title={'Drept imobiliar'} icon={'real-estate'} />
        <ServiceCard title={'Protectia datelor cu caracter personal'} icon={'gdpr'} />
        <ServiceCard title={'Drept administrativ si fiscal'} icon={'money'} />
        <ServiceCard title={'Drept civil'} icon={'civil'} />
      </Components.ServicesWrapper>
    </Components.ServicesContainer>
  );
};

export default ServicesSection;
