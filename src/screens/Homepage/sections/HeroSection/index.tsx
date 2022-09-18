import React from 'react';
import { Components } from './styled';
import { Button } from '@mui/material';
import { COLORS } from '../../../../styled';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const video = require('./video/video-lawyer.mp4');

const HeroSection = () => {
  return (
    <Components.HeroSectionContainer>
      <Components.HeroBg>
        <Components.VideoBg autoPlay loop muted src={video} />
      </Components.HeroBg>
      <Components.HeroContent>
        <Components.HeroH1>Servicii juridice și consultanță fiscală</Components.HeroH1>
        <Button
          sx={{
            'backgroundColor': COLORS.buttonColor,
            'justify-content': 'center',
            'padding': 2,
            'align-items': 'center',
            'font-weight': 'bold',
            '&: hover': {
              backgroundColor: COLORS.textColor,
            },
          }}
          variant='contained'>
          Vezi detalii <KeyboardDoubleArrowRightIcon fontSize={'small'} />
        </Button>
      </Components.HeroContent>
    </Components.HeroSectionContainer>
  );
};

export default HeroSection;
