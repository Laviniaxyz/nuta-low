import * as React from 'react';
import { Components } from './styled';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Components.Container>
      <Components.LogoContainer>
        <Components.LogoText>Alexandru Nuta</Components.LogoText>
        <GavelOutlinedIcon />
      </Components.LogoContainer>
      <Components.MenuContainer>
        <Components.MenuItem>Despre</Components.MenuItem>
        <Components.MenuItem>Servicii juridice</Components.MenuItem>
        <Components.MenuItem>Contact</Components.MenuItem>
      </Components.MenuContainer>
      <Components.MobileMenuWrapper>
        <Components.MenuIconWrapper onClick={toggleMobileMenu}>
          <MenuIcon />
        </Components.MenuIconWrapper>
        <Components.MobileMenu showMobileMenu={showMobileMenu}>
          <Components.MobileMenuItem>Despre</Components.MobileMenuItem>
          <Components.MobileMenuItem>Servicii juridice</Components.MobileMenuItem>
          <Components.MobileMenuItem>Contact</Components.MobileMenuItem>
        </Components.MobileMenu>
      </Components.MobileMenuWrapper>
    </Components.Container>
  );
};

export default NavigationMenu;
