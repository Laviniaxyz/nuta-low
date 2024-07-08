import * as React from 'react';
import { Components } from './styled';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { SiteLanguageContext } from '../../providers/siteLanguage/context';
import { WindowSizeContext } from '../../providers/windowSize/context';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo: string = require('../../assets/logoImage.svg').default;

const NavigationMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isRo, setSiteLanguage } = useContext(SiteLanguageContext);
  const { windowSize } = useContext(WindowSizeContext);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const onClickRomanianFlag = () => {
    if (!isRo) {
      setSiteLanguage('ro');
    }
  };

  const onClickUSFlag = () => {
    if (isRo) {
      setSiteLanguage('engl');
    }
  };

  const redirectToBlog = () => {
    window.location.href = 'https://blog.nutasiasociatii.ro/';
  };

  const redirectToCalendly = () => {
    window.location.href = 'https://calendly.com/office-89ix/consultanta';
  };

  return (
    <Components.Container>
      <Components.LogoContainer>
        <Components.Logo src={logo} />
      </Components.LogoContainer>
      <Components.MenuWithFlag>
        {!showMobileMenu || windowSize.innerWidth > 700 ? (
          <>
            <Components.Flag onClick={onClickUSFlag}>🇺🇸</Components.Flag>
            <Components.Flag onClick={onClickRomanianFlag}>🇷🇴</Components.Flag>
          </>
        ) : null}
        <Components.MenuContainer>
          {/*<Components.MenuItem to='about' smooth={true} duration={500} spy={true} offset={-80} activeClass='active'>*/}
          {/*  {isRo ? 'Despre' : 'About'}*/}
          {/*</Components.MenuItem>*/}
          <Components.MenuItem to='services' smooth={true} duration={500} spy={true} offset={-80} activeClass='active'>
            {isRo ? 'Servicii juridice' : 'Legal Services'}
          </Components.MenuItem>
          <Components.MenuItem
            to='practice-areas'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass='active'>
            {isRo ? 'Arii de practică' : 'Practice Areas'}
          </Components.MenuItem>
          <Components.MenuButton onClick={redirectToBlog}>Blog</Components.MenuButton>
          <Components.MenuItem to='contact' smooth={true} duration={500} spy={true} offset={-80} activeClass='active'>
            Contact
          </Components.MenuItem>
          <Components.MenuButton onClick={redirectToCalendly}>{isRo? 'Programează o întâlnire': 'Schedule a meeting'}</Components.MenuButton>
        </Components.MenuContainer>
        <Components.MobileMenuWrapper>
          <Components.MenuIconWrapper onClick={toggleMobileMenu}>
            <MenuIcon />
          </Components.MenuIconWrapper>
          <Components.MobileMenu showMobileMenu={showMobileMenu}>
            <Components.MobileMenuItem
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              activeClass='active'>
              {isRo ? 'Despre' : 'About'}
            </Components.MobileMenuItem>
            <Components.MobileMenuItem
              to='practice-areas'
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              activeClass='active'>
              {isRo ? 'Arii de practică' : 'Practice Areas'}
            </Components.MobileMenuItem>
            <Components.MobileMenuItem
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              activeClass='active'>
              {isRo ? 'Servicii juridice' : 'Legal Services'}
            </Components.MobileMenuItem>
            <Components.MobileMenuButton onClick={redirectToBlog}>Blog</Components.MobileMenuButton>
            <Components.MobileMenuItem
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              offset={-10}
              activeClass='active'>
              Contact
            </Components.MobileMenuItem>
          </Components.MobileMenu>
        </Components.MobileMenuWrapper>
      </Components.MenuWithFlag>
    </Components.Container>
  );
};

export default NavigationMenu;
