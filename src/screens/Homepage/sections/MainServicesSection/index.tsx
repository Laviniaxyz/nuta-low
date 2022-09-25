import React from 'react';
import { Components } from './styled';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/lawyer-image-small-height.png');

const MainServicesSection = () => {
  return (
    <Components.Container>
      {/*<Components.TitleWrapper>*/}
      {/*  <Components.SectionTitle>Arii de practică</Components.SectionTitle>*/}
      {/*</Components.TitleWrapper>*/}
      <Components.SectionWrapper>
        <Components.BackgroundImage src={image} />
        <Components.Section>
          <Components.Title> I. Litigii</Components.Title>
          <Components.Paragraph>
            analiza situației de fapt prelitigioasa și a înscrisurilor puse la dispoziție de către client
          </Components.Paragraph>
          <Components.Paragraph>
            identificarea temeiurilor de drept aplicabile (încadrarea situației de fapt), precum și tuturor mijloacelor
            legale favorabile intereselor clientului
          </Components.Paragraph>
          <Components.Paragraph>
            negocierea și medierea în vedere incheierii unei tranzacții și stingerii litigiului pe cale amiabila
          </Components.Paragraph>
          <Components.Paragraph>
            redactarea tuturor actelor procesuale în numele clientului (cereri de chemare în judecată, intampinare, note
            scrise, șamd.)
          </Components.Paragraph>
          <Components.Paragraph>
            reprezentarea și asistarea clientului în fata instanțelor judecatoresti competente și a altor instituții în
            orice stadiu procesual (fond, apel, recurs, executare silită)
          </Components.Paragraph>
        </Components.Section>
        <Components.Section>
          <Components.Title> II. Consultanță</Components.Title>
          <Components.Paragraph>
            intelegerea problemelor de natura juridica ale clientului si identificarea soluțiilor legale
          </Components.Paragraph>
          <Components.Paragraph>
            prezentarea cadrului legislativ, identificarea corectă a normelor aplicabile și interpretarea acestora
          </Components.Paragraph>
          <Components.Paragraph>
            redactarea opiniilor legale detaliate si personalizate în funcție de cerințele clientului
          </Components.Paragraph>
          <Components.Paragraph>
            analiza și interpretarea clauzelor contractuale, asistarea și reprezentarea clientului în negocieri și
            medieri
          </Components.Paragraph>
          <Components.Paragraph>
            redactarea și revizuirea actelor juridice (contracte, acte aditionale, notificari, etc.)
          </Components.Paragraph>
          <Components.Paragraph>
            asistarea și reprezentarea în fața oricăror instituții publice pentru parcurgerea cu celeritatea a unor
            proceduri administrative
          </Components.Paragraph>
        </Components.Section>
      </Components.SectionWrapper>
    </Components.Container>
  );
};

export default MainServicesSection;
