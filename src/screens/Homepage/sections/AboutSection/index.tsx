import React, { useContext, useState } from 'react';
import { Components } from './styled';
import { COLORS } from '../../../../styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lawyerImage = require('../../../../assets/alexandru-nuta.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const associateImage = require('../../../../assets/irina-postelnicu-avocat.jpeg');

const AboutSection = () => {
  const { siteLanguage } = useContext(SiteLanguageContext);
  const isRo = siteLanguage === 'ro';

  const [showDetails, setShowDetails] = useState(false);

  const onArrowPress = () => setShowDetails(!showDetails);

  return (
    <Components.Container id='about'>
      <Components.QuoteBox>
        {/*<DoneAllIcon style={{ color: COLORS.white }} fontSize={'large'} />*/}
        <Components.QuoteTitle>{isRo ? 'Despre echipa Nuță și asociații' : ' About the team'}</Components.QuoteTitle>

        {isRo ? (
          <Components.Quote>
            Experiență bogată în asistarea și reprezentarea persoanelor fizice și juridice române și străine în diverse
            litigii din domeniul dreptului civil, comercial, muncii, asigurărilor, administrativ și fiscal. Asistarea și
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
            Consultanță juridică orientată spre nevoile clientului în vederea negocierii, redactării și încheierii de
            contracte civile și comerciale. Preocupare permanentă pentru pregătirea și perfecționarea profesională prin
            participarea cu regularitate la conferințe, seminare, cursuri.
          </Components.Quote>
        ) : (
          <Components.Quote>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Legal consultancy oriented towards the client's needs in order to negotiate, draft and conclude civil and
            commercial contracts. Permanent concern for training and professional development through regular
            participation in conferences, seminars, courses.
          </Components.Quote>
        )}
        {showDetails ? (
          <Components.DetailsWrapper>
            <Components.DetailsSingle>
              <Components.ImageWrapper>
                <Components.Image src={lawyerImage} />
              </Components.ImageWrapper>
              {isRo ? (
                <Components.Quote>
                  Cu peste 8 ani de experiență în avocatură, Alexandru Nuță este specializat în drept comercial, dreptul
                  muncii și dreptul imigrării. Absolvent al studiilor de licență și master din cadrul Facultății de
                  Drept, Universitatea București, avocat definitiv și membru în Baroul București.
                </Components.Quote>
              ) : (
                <Components.Quote>
                  With over 7 years of experience, Alexandru Nuță specializes in litigation, labor law and immigration.
                  Graduated from Bachelor and Master studies at the Faculty of Law, University Bucharest, permanent
                  lawyer and member of the Bucharest Bar.
                </Components.Quote>
              )}
            </Components.DetailsSingle>
            <Components.DetailsSingle>
              <Components.ImageWrapper>
                <Components.Image src={associateImage} />
              </Components.ImageWrapper>
              {isRo ? (
                <Components.Quote>
                  Avocat definitiv in Baroul București cu peste 5 ani de experiență, absolventa a studiilor de licență
                  la Facultatea de Drept, Universitatea din București. Titular al Cabinetului de Avocat - Postelnicu
                  Irina-Alexandra. Specializata în dreptul muncii, dreptul imigrării, drept civil și drept comercial.
                  Având o vastă experiență în consultanță juridică precum și în litigii în fața instanțelor de judecată.
                </Components.Quote>
              ) : (
                <Components.Quote>
                  Permanent lawyer at the Bucharest Bar with over 5 years of experience, graduate of bachelor studies at
                  the Faculty of Law, University of Bucharest. Owner of the Law Office - Postelnicu Irina-Alexandra.
                  Specialized in labor law, immigration law, civil law and commercial law. Having an extensive
                  experience in legal consultancy as well as in litigation in front of the courts.
                </Components.Quote>
              )}
            </Components.DetailsSingle>
          </Components.DetailsWrapper>
        ) : null}
        <Components.IconWrapper>
          {showDetails ? (
            <Components.Icon onClick={onArrowPress}>
              <KeyboardArrowUpIcon style={{ color: COLORS.white }} fontSize={'large'} />
            </Components.Icon>
          ) : (
            <Components.Icon onClick={onArrowPress}>
              <ExpandMoreIcon style={{ color: COLORS.white }} fontSize={'large'} />
            </Components.Icon>
          )}
        </Components.IconWrapper>
      </Components.QuoteBox>
    </Components.Container>
  );
};

export default AboutSection;
