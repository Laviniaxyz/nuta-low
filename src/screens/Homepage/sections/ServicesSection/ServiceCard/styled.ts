import styled from 'styled-components';
import { COLORS } from '../../../../../styled';

export const Components = {
  ServicesCard: styled.div<{ blackBg?: boolean; tabletBg?: boolean; mobileBg?: boolean }>`
    background-color: ${(p) => (p.blackBg ? 'black' : 'gray')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    padding: 30px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in-out;
    z-index: 2;
    opacity: 0.85;

    &:hover {
      transform: scale(1.03);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    @media screen and (max-width: 850px) {
      background-color: ${(p) => (p.blackBg ? 'black' : 'gray')};
    }

    @media screen and (max-width: 850px) {
      background-color: ${(p) => (p.tabletBg ? 'black' : 'gray')};
    }
    @media screen and (max-width: 500px) {
      background-color: ${(p) => (p.mobileBg ? 'black' : 'gray')};
    }
  `,
  ServicesH2: styled.h2`
    color: white;
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
    z-index: 2;
  `,
};
