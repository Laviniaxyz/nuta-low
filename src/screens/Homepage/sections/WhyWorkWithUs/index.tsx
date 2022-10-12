import React, { useContext } from 'react';
import { Components } from './styled';
import desk from '../../../../assets/desk.png';
import book from '../../../../assets/book.png';
import scale from '../../../../assets/scale.png';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

const WhyWorkWithUs = () => {
  const { isRo } = useContext(SiteLanguageContext);

  return (
    <Components.Container>
      <Components.QuoteTitle>{isRo ? 'Serviciile noastre' : 'Our services'}</Components.QuoteTitle>
      <Components.CardsContainer>
        <Components.Card>
          <Components.CardImageWrapper>
            <Components.CardImage src={scale} />
          </Components.CardImageWrapper>
          <Components.CardTitle>
            {isRo ? 'Calitate bazată pe cunoștințe temeinice' : 'Quality based on thorough knowledge'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Calitatea serviciilor oferite nu este o opțiune, este o certitudine. Pentru a oferi întotdeauna clienților servicii de cea mai înaltă calitate acordăm o mare importanta pregatirii profesionale continue.'
              : 'The quality of the services offered is not an option, it is a certainty. In order to always offer our clients, the highest quality services, we attach great importance to continuous professional training.'}
          </Components.CardDescription>
        </Components.Card>
        <Components.Card>
          <Components.CardImageWrapper>
            <Components.CardImage src={book} />
          </Components.CardImageWrapper>
          <Components.CardTitle>
            {isRo ? 'Încredere bazată pe informarea corectă' : 'Trust based on correct information'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Ne propunem sa fim un partener de încredere pentru clienții noștri. Cheia încrederii în relația cu clienții o reprezinta informarea corecta si completa a acestora cu privire la opțiunile legale existente. Pe baza informațiilor pertinente oferite, clienții vor fi în masura sa ia cele mai bune decizii.'
              : 'We aim to be a reliable partner for our clients. The key of trust in the relationship with clients is the correct and complete information about the existing legal options. Based on the relevant information provided, the clients will be able to make the best decisions.'}
          </Components.CardDescription>
        </Components.Card>
        <Components.Card>
          <Components.CardImageWrapper>
            <Components.CardImage src={desk} />
          </Components.CardImageWrapper>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Components.CardTitle>
            {isRo ? 'Servicii orientate spre nevoia clientului' : 'Services oriented towards the client’s need'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Pe baza informațiilor primite de la client ne preocupam în primul rand sa intelegem particularitățile fiecărui caz în parte și să identificăm împreună cu acesta nevoile concrete. În acest fel suntem în măsura să oferim soluții optime, personalizate și centrate interesele clientului.'
              : 'Based on the information received from the client, we are primarily concerned with understanding the particularities of each individual case and identifying together their specific needs.'}
          </Components.CardDescription>
        </Components.Card>
      </Components.CardsContainer>
    </Components.Container>
  );
};

export default WhyWorkWithUs;
