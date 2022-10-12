import React, { useContext } from 'react';
import { Components } from './styled';
import { COLORS } from '../../../../styled';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

const AboutSection = () => {
  const { siteLanguage } = useContext(SiteLanguageContext);
  const isRo = siteLanguage === 'ro';
  return (
    <Components.Container id='about'>
      <Components.QuoteBox>
        <DoneAllIcon style={{ color: COLORS.white }} fontSize={'large'} />
        <Components.QuoteTitle>{isRo ? 'Despre echipa Nuță & colaboratori' : ' About the team'}</Components.QuoteTitle>

        {isRo ? (
          <Components.Quote>
            Experiența bogată în asistarea și reprezentarea persoanelor fizice și juridice române și străine în diverse
            litigii din domeniul dreptului civil, comercial, muncii, asigurărilor, administrativ si fiscal. Asistarea și
            reprezentarea clienților pentru parcurgerea cu celeritate a diferitelor proceduri administrative în fața
            instituțiilor și autorităților publice locale și centrale.{' '}
          </Components.Quote>
        ) : (
          <Components.Quote>
            Rich experience in assistance and the representation individuals and companies both Romanian and foreigners
            in various disputes in the field of civil law, commercial law, labor law, insurance law, administrative and
            fiscal law. Assisting and representing clients to go through various administrative procedures in front of
            the local and central public institutions and authorities.{' '}
          </Components.Quote>
        )}

        {isRo ? (
          <Components.Quote>
            Consultanța juridică orientată spre nevoile clientului în vederea negocierii, redactării și încheierii de
            contracte civile și comerciale. Preocupare permanentă pentru pregătirea și perfecționarea profesională prin
            participarea cu regularitate la conferințe, seminarii, cursuri.
          </Components.Quote>
        ) : (
          <Components.Quote>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Legal consultancy oriented towards the client's needs in order to negotiate, draft and conclude civil and
            commercial contracts. Permanent concern for training and professional development through regular
            participation in conferences, seminars, courses.
          </Components.Quote>
        )}
      </Components.QuoteBox>
    </Components.Container>
  );
};

export default AboutSection;
