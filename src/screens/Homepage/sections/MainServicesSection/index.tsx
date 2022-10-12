import React, { useContext } from 'react';
import { Components } from './styled';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/lawyer-image-small-height.png');

const MainServicesSection = () => {
  const { isRo } = useContext(SiteLanguageContext);

  return (
    <Components.Container id='services'>
      {/*<Components.TitleWrapper>*/}
      {/*  <Components.SectionTitle>Arii de practică</Components.SectionTitle>*/}
      {/*</Components.TitleWrapper>*/}
      <Components.SectionWrapper>
        <Components.BackgroundImage src={image} />
        {isRo ? (
          <Components.Section>
            <Components.Title> I. Litigii</Components.Title>
            <Components.Paragraph>
              analiza situației de fapt prelitigioasa și a înscrisurilor puse la dispoziție de către client
            </Components.Paragraph>
            <Components.Paragraph>
              identificarea temeiurilor de drept aplicabile (încadrarea situației de fapt), precum și tuturor
              mijloacelor legale favorabile intereselor clientului
            </Components.Paragraph>
            <Components.Paragraph>
              negocierea și medierea în vedere incheierii unei tranzacții și stingerii litigiului pe cale amiabila
            </Components.Paragraph>
            <Components.Paragraph>
              redactarea tuturor actelor procesuale în numele clientului (cereri de chemare în judecată, intampinare,
              note scrise, șamd.)
            </Components.Paragraph>
            <Components.Paragraph>
              reprezentarea și asistarea clientului în fata instanțelor judecatoresti competente și a altor instituții
              în orice stadiu procesual (fond, apel, recurs, executare silită)
            </Components.Paragraph>
          </Components.Section>
        ) : (
          <Components.Section>
            <Components.Title> I. Litigation / Dispute</Components.Title>
            <Components.Paragraph>
              analysis of the pre-litigation factual situation and the documents provided by the client
            </Components.Paragraph>
            <Components.Paragraph>
              identification of the applicable legal bases (finding the legal grounds), as well as all legal means
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              favorable to the client's interests
            </Components.Paragraph>
            <Components.Paragraph>
              negotiation and mediation in order to conclude a transaction and settle the dispute amicably
            </Components.Paragraph>
            <Components.Paragraph>
              drafting all procedural documents on behalf of the client (lawsuit claims, counterclaims, written notes
              etc.)
            </Components.Paragraph>
            <Components.Paragraph>
              representing and assisting the client before the competent courts and other institutions at any procedural
              stage (first instance trial, appeal, enforcement)
            </Components.Paragraph>
          </Components.Section>
        )}
        <Components.Section>
          <Components.Title> II. Legal consultancy</Components.Title>
          <Components.Paragraph>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            understanding the client's legal problems and identifying legal solutions
          </Components.Paragraph>
          <Components.Paragraph>
            presentation of the legislation, correct identification of the applicable rules and their interpretation
          </Components.Paragraph>
          <Components.Paragraph>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            drafting detailed and personalized legal opinions according to the client's requirements
          </Components.Paragraph>
          <Components.Paragraph>
            analysis and interpretation of contractual clauses, assisting and representing the client in negotiations
            and mediations
          </Components.Paragraph>
          <Components.Paragraph>
            drafting and revising legal documents (contracts, additional documents, notifications etc.)
          </Components.Paragraph>
          <Components.Paragraph>
            assisting and representing in front of any public institutions for the expeditious completion of
            administrative procedures
          </Components.Paragraph>
        </Components.Section>
      </Components.SectionWrapper>
    </Components.Container>
  );
};

export default MainServicesSection;
