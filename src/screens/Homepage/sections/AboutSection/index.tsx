import React from 'react';
import { Components } from './styled';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { COLORS } from '../../../../styled';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const AboutSection = () => {
  return (
    <Components.Container>
      <Components.QuoteBox>
        <DoneAllIcon style={{ color: COLORS.white }} fontSize={'large'} />
        <Components.QuoteTitle>Despre echipa Nuță & colaboratori</Components.QuoteTitle>
        <Components.Quote>
          Experiența bogată în asistarea și reprezentarea persoanelor fizice și juridice române și străine în diverse
          litigii din domeniul dreptului civil, comercial, muncii, asigurărilor, administrativ si fiscal. Asistarea și
          reprezentarea clienților pentru parcurgerea cu celeritate a diferitelor proceduri administrative în fața
          instituțiilor și autorităților publice locale și centrale.
        </Components.Quote>
        <Components.Quote>
          Consultanța juridică orientată spre nevoile clientului în vederea negocierii, redactării și încheierii de
          contracte civile și comerciale. Preocupare permanentă pentru pregătirea și perfecționarea profesională prin
          participarea cu regularitate la conferințe, seminarii, cursuri.
        </Components.Quote>
      </Components.QuoteBox>
    </Components.Container>
  );
};

export default AboutSection;
