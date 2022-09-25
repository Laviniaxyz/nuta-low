import styled from 'styled-components';
import { COLORS } from '../../styled/index';

export const Components = {
  Container: styled.div`
    background-color: ${COLORS.darkBrown};
    color: ${COLORS.whiteBeige};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
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
  MenuItem: styled.div`
    margin-left: 8px;
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  `,
  MobileMenuWrapper: styled.div`
    display: none;
    @media screen and (max-width: 500px) {
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
  MobileMenuItem: styled.div`
    cursor: pointer;
    :hover {
      border-bottom: 0.5px solid ${COLORS.whiteBeige};
    }
  `,
  MenuIconWrapper: styled.div`
    cursor: pointer;
  `,
};
