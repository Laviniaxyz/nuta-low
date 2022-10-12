import * as React from 'react';
import { Components } from './styled';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { SiteLanguageContext } from '../../providers/siteLanguage/context';

const NavigationMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isRo, setSiteLanguage } = useContext(SiteLanguageContext);

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

  return (
    <Components.Container>
      <Components.LogoContainer>
        <Components.LogoText>Alexandru Nuta</Components.LogoText>
        <GavelOutlinedIcon />
      </Components.LogoContainer>
      <Components.MenuWithFlag>
        <Components.Flag onClick={onClickUSFlag}>🇺🇸</Components.Flag>
        <Components.Flag onClick={onClickRomanianFlag}>🇷🇴</Components.Flag>
        <Components.MenuContainer>
          <Components.MenuItem to='about' smooth={true} duration={500} spy={true} offset={-80} activeClass='active'>
            {isRo ? 'Despre' : 'About'}
          </Components.MenuItem>
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
          <Components.MenuItem to='contact' smooth={true} duration={500} spy={true} offset={-80} activeClass='active'>
            Contact
          </Components.MenuItem>
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
