import React, { useContext } from 'react';
import { Components } from './styled';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { COLORS } from '../../../../styled';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

const QuoteSection = () => {
  const { isRo } = useContext(SiteLanguageContext);
  return (
    <Components.Container>
      <Components.QuoteBox>
        {/*<Components.QuoteTitle>Principiile noastre</Components.QuoteTitle>*/}
        <FormatQuoteIcon style={{ color: COLORS.white }} fontSize={'large'} />
        {isRo ? (
          <Components.Quote>
            În desfășurarea activității de zi cu zi de ghidăm după un set de principii ferme, menite să diferențieze
            între un avocat de succes de restul avocaților. Seriozitatea, punctualitatea, integritatea, perseverența,
            tenacitatea și onestitatea sunt doar câteva dintre caracteristicile muncii noastre care ne-au adus o
            reputație impecabilă în fața clienților.
          </Components.Quote>
        ) : (
          <Components.Quote>
            In carrying out our daily activities, we are guided by a set of firm principles designed to differentiate a
            successful lawyer from the rest of the lawyers. Seriousness, punctuality, integrity, perseverance, tenacity
            and honesty are just some of the characteristics of our work that have brought us an impeccable reputation
            in front of our clients.
          </Components.Quote>
        )}
      </Components.QuoteBox>
    </Components.Container>
  );
};

export default QuoteSection;
