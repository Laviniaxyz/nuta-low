import React, { useContext } from 'react';
import { Components } from './styled';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const desk = require('../../../../assets/desk.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const book = require('../../../../assets/book.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const scale = require('../../../../assets/scale.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const documents = require('../../../../assets/documentation-desk.jpeg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const contract = require('../../../../assets/contract.jpeg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const courtHammer = require('../../../../assets/court-hammer.jpg');

const OurPrinciples = () => {
  const { isRo } = useContext(SiteLanguageContext);

  return (
    <Components.Container>
      <Components.QuoteTitle>{isRo ? 'Principiile noastre' : 'Our principles'}</Components.QuoteTitle>
      <Components.CardsContainer>
        <Components.Card>
          <Components.BackgroundImage src={courtHammer} />
          <Components.CardImageWrapper>
            <Components.CardImage src={scale} />
          </Components.CardImageWrapper>
          <Components.CardTitle>
            {isRo ? 'Calitate bazată pe cunoștințe temeinice' : 'Quality based on thorough knowledge'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Calitatea serviciilor oferite nu este o opțiune, este o certitudine. Pentru a oferi întotdeauna clienților servicii de cea mai înaltă calitate acordăm o mare importanță pregătirii profesionale continue. Ne aprofundăm și consolidăm periodic cunoștințele juridice deja existente și totodată suntem în permanență la curent cu noutățile legislative și jurisprudențiale din domeniile de interes pentru clienții noștri.'
              : 'The quality of the services offered is not an option, it is a certainty. In order to always offer our clients, the highest quality services, we attach great importance to continuous professional training.'}
          </Components.CardDescription>
        </Components.Card>
        <Components.Card>
          <Components.BackgroundImage src={contract} />
          <Components.CardImageWrapper>
            <Components.CardImage src={book} />
          </Components.CardImageWrapper>
          <Components.CardTitle>
            {isRo ? 'Încredere bazată pe informarea corectă' : 'Trust based on correct information'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Ne propunem să fim un partener de încredere pentru clienții noștri. Cheia încrederii în relația cu clienții o reprezintă informarea corectă și completă a acestora cu privire la opțiunile legale existente. Pe baza informațiilor pertinente oferite, clienții vor fi in măsură să ia cele mai bune decizii.'
              : 'We aim to be a reliable partner for our clients. The key of trust in the relationship with clients is the correct and complete information about the existing legal options. Based on the relevant information provided, the clients will be able to make the best decisions.'}
          </Components.CardDescription>
        </Components.Card>
        <Components.Card>
          <Components.BackgroundImage src={documents} />
          <Components.CardImageWrapper>
            <Components.CardImage src={desk} />
          </Components.CardImageWrapper>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Components.CardTitle>
            {isRo ? 'Servicii orientate spre nevoia clientului' : 'Services oriented towards the client’s need'}
          </Components.CardTitle>
          <Components.CardDescription>
            {isRo
              ? 'Pe baza informațiilor primite de la client ne preocupăm în primul rând să înțelegem particularitățile fiecărui caz în parte și să identificam împreună cu acesta nevoile concrete. În acest fel suntem în măsură să oferim soluții optime, personalizate și centrate pe interesele clientului.'
              : 'Based on the information received from the client, we are primarily concerned with understanding the particularities of each individual case and identifying together their specific needs.'}
          </Components.CardDescription>
        </Components.Card>
      </Components.CardsContainer>
    </Components.Container>
  );
};

export default OurPrinciples;
