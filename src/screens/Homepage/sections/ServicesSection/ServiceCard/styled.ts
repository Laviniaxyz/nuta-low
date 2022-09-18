import styled from 'styled-components';
import { COLORS } from '../../../../../styled';

export const Components = {
  ServicesCard: styled.div`
    background-color: ${COLORS.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in-out;
    z-index: 2;
    opacity: 0.85;
    margin: 6px;

    &:hover {
      transform: scale(1.03);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    @media screen and (max-width: 850px) {
      //height: 90px;
      //width: 100px;
    }
    @media screen and (max-width: 480px) {
      height: 100px;
      //width: 80px;
    }
  `,
  ServicesH2: styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
    z-index: 2;
  `,
};
