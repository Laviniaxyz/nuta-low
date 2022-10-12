import React from 'react';
import { Components } from './styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterSection = () => {
  return (
    <Components.FooterContainer>
      <Components.FooterWrap>
        <Components.SocialMedia>
          <Components.SocialMediaWrap>
            <Components.WebsiteRights>
              Alexandru Nuță © {new Date().getFullYear()} All rights reserved
            </Components.WebsiteRights>
            <Components.SocialIcons>
              <Components.SocialIconLink
                href='https://www.facebook.com/alexandru.nuta.9'
                target='_blank'
                aria-label='Facebook'>
                <FacebookIcon />
              </Components.SocialIconLink>
              <Components.SocialIconLink
                href='https://www.linkedin.com/in/alexandru-nu%C5%A3%C4%83-ba93811ab/?originalSubdomain=ro'
                target='_blank'
                aria-label='Instagram'>
                <LinkedInIcon />
              </Components.SocialIconLink>
              <Components.SocialIconLink href='tel:+40722697542' target='_blank' aria-label='Twitter'>
                <PhoneIcon />
              </Components.SocialIconLink>
              <Components.SocialIconLink
                href='/'
                target='_blank'
                aria-label='LinkedinIn'
                onClick={() => window.open('mailto:alexandru.nuta@gmail.com')}>
                <EmailIcon />
              </Components.SocialIconLink>
            </Components.SocialIcons>
          </Components.SocialMediaWrap>
        </Components.SocialMedia>
      </Components.FooterWrap>
    </Components.FooterContainer>
  );
};

export default FooterSection;
