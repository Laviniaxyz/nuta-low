import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../../styled';

export const Components = {
  FooterContainer: styled.div`
    background-color: ${COLORS.textColor};
  `,

  FooterWrap: styled.div`
    padding: 4px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  SocialMedia: styled.div`
    width: 100%;
  `,

  SocialMediaWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
  `,

  WebsiteRights: styled.h5`
    color: ${COLORS.whiteBeige};
    font-size: 14px;
  `,

  SocialIcons: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
  `,

  SocialIconLink: styled.a`
    color: ${COLORS.whiteBeige};

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  `,
};
