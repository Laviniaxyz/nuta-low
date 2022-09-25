import React from 'react';
import { Components } from './styled';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { COLORS } from '../../../../styled';

const QuoteSection = () => {
  return (
    <Components.Container>
      <Components.QuoteBox>
        {/*<Components.QuoteTitle>Principiile noastre</Components.QuoteTitle>*/}
        <FormatQuoteIcon style={{ color: COLORS.white }} fontSize={'large'} />
        <Components.Quote>
          În desfășurarea activității de zi cu zi de ghidăm după un set de principii ferme, menite să diferențieze între
          un avocat de succes de restul avocaților. Seriozitatea, punctualitatea, integritatea, perseverența,
          tenacitatea și onestitatea sunt doar câteva dintre caracteristicile muncii noastre care ne-au adus o reputație
          impecabilă în fața clienților.
        </Components.Quote>
      </Components.QuoteBox>
    </Components.Container>
  );
};

export default QuoteSection;
