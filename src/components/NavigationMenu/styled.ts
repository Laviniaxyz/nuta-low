import styled from 'styled-components';
import { COLORS } from '../../styled/index';
import { Link as LinkS } from 'react-scroll';

export const Components = {
  Container: styled.div`
    background-color: ${COLORS.darkBrown};
    color: ${COLORS.whiteBeige};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 64px;

    @media screen and (max-width: 800px) {
      padding: 16px 32px;
    }

    @media screen and (max-width: 500px) {
      padding: 16px;
    }
  `,
  LogoContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  LogoText: styled.div`
    margin-right: 4px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      display: none;
    }
  `,
  MenuContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      display: none;
    }
  `,
  MenuItem: styled(LinkS)`
    margin-left: 12px;
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  `,
  MenuButton: styled.div`
    margin-left: 12px;
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  `,
  MobileMenuWrapper: styled.div`
    display: none;
    @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
  `,

  MobileMenu: styled.div<{ showMobileMenu: boolean }>`
    display: ${(p) => (p.showMobileMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
  `,
  MobileMenuItem: styled(LinkS)`
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
  `,
  MobileMenuButton: styled.div`
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
  `,
  MenuIconWrapper: styled.div`
    cursor: pointer;
    margin-left: 12px;
  `,
  MenuWithFlag: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Flag: styled.div`
    margin-left: 4px;
    cursor: pointer;
    height: 100%;
  `,
  Logo: styled.img`
    width: 32px;
    height: 32px;
  `,
};
