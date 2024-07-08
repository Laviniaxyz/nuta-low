import React, { useContext } from 'react';
import { Components } from './styled';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';
import { ConsultancySectionEngl, ConsultancySectionRo, LitigationSectionRo } from './LitigationAndConsultancy';
import { LitigationSectionEngl } from './LitigationAndConsultancy';
import { WindowSizeContext } from '../../../../providers/windowSize/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contractImage = require('../../../../assets/contract.jpeg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const briefCaseImage = require('../../../../assets/briefcases.jpeg');

const MainServicesSection = () => {
  const { isRo } = useContext(SiteLanguageContext);
  const { windowSize } = useContext(WindowSizeContext);

  return (
    <Components.Container id='services'>
      <Components.TitleWrapper>
        <Components.SectionTitle>{isRo ? 'Arii de practică' : 'Practice Areas'}</Components.SectionTitle>
      </Components.TitleWrapper>
      <Components.SectionWrapper>
        {isRo ? <LitigationSectionRo /> : <LitigationSectionEngl />}
        <Components.ImageWrapper>
          <Components.Image src={contractImage} />
        </Components.ImageWrapper>
      </Components.SectionWrapper>
      <Components.SectionWrapper>
        {windowSize.innerWidth > 1200 ? (
          <Components.ImageWrapper>
            <Components.Image src={briefCaseImage} />
          </Components.ImageWrapper>
        ) : null}
        {isRo ? <ConsultancySectionRo /> : <ConsultancySectionEngl />}
        {windowSize.innerWidth > 1200 ? null : (
          <Components.ImageWrapper>
            <Components.Image src={briefCaseImage} />
          </Components.ImageWrapper>
        )}
      </Components.SectionWrapper>
    </Components.Container>
  );
};

export default MainServicesSection;
