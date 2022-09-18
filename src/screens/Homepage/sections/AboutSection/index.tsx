import React from 'react';
import { Components } from './styled';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../ServicesSection/images/lawyer-image.jpg');

const AboutSection = () => {
  return (
    <Components.AboutContainer>
      <Components.BackgroundImage src={image} />

      <Components.Description>
        <Components.Title>Despre noi</Components.Title>
        <Components.DescriptionText>
          Serviciile juridice oferite de avocații Rațiu & Rațiu se bazează pe o bună înțelegere a nevoilor clientului,
          atât din perspectiva detaliilor problemei juridice, cât și din perspectiva raportului cost-beneficiu, iar
          soluțiile juridice propuse de avocații noștri corespund în mod optim așteptărilor clientului.
        </Components.DescriptionText>
        <Components.DescriptionText>
          Echipa Rațiu și Rațiu este formată din avocați cu bogată experiență pe domeniile de activitate în care
          activează și funcționează sub coordonarea atentă a partenerilor societății: profesioniști reputați în zona
          educației juridice.
        </Components.DescriptionText>
      </Components.Description>
    </Components.AboutContainer>
  );
};

export default AboutSection;
