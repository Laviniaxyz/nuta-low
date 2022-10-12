import React, { useContext } from 'react';
import { Components } from './styled';
import { Button } from '@mui/material';
import { COLORS } from '../../../../styled';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const video = require('../../../../assets//video/video-lawyer.mp4');

const HeroSection = () => {
  const { isRo } = useContext(SiteLanguageContext);

  return (
    <Components.HeroSectionContainer>
      <Components.HeroBg>
        <Components.VideoBg autoPlay loop muted src={video} />
      </Components.HeroBg>
      <Components.HeroContent>
        <Components.HeroH1>
          {isRo ? ' Litigii și consultanță juridică' : 'Litigation and legal consultancy'}
        </Components.HeroH1>
        <Button
          sx={{
            'backgroundColor': COLORS.darkBrown,
            'justify-content': 'center',
            'padding': 2,
            'align-items': 'center',
            'font-weight': 'bold',
            '&: hover': {
              backgroundColor: COLORS.textColor,
            },
          }}
          variant='contained'>
          <Components.HeroButtonText
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            offset={-10}
            activeClass='active'>
            {isRo ? 'Vezi detalii' : 'See more'}
          </Components.HeroButtonText>
          <KeyboardDoubleArrowRightIcon fontSize={'small'} />
        </Button>
      </Components.HeroContent>
    </Components.HeroSectionContainer>
  );
};

export default HeroSection;
