import styled from 'styled-components';
import { COLORS } from '../../../../styled';
export const Components = {
  Container: styled.div`
    display: flex;
    flex: 1;
    padding: 24px 88px;
    background-color: ${COLORS.whiteBeige};

    @media screen and (max-width: 700px) {
      padding: 24px 32px;
    }

    @media screen and (max-width: 500px) {
      padding: 12px;
    }
  `,
  QuoteBox: styled.div`
    margin: 16px;
    padding: 32px;
    background-color: ${COLORS.darkBrown};
    border-radius: 8px;

    @media screen and (max-width: 500px) {
      padding: 16px;
    }
  `,
  QuoteTitle: styled.div`
    line-height: 1.8;
    font-size: 18px;
    color: ${COLORS.white};
    border-bottom: 0.5px solid white;
    font-weight: bold;
    margin-bottom: 16px;
    padding-right: 4px;
    width: fit-content;
    display: flex;
  `,
  Quote: styled.div`
    line-height: 2;
    font-size: 18px;
    color: ${COLORS.white};
    font-style: italic;
  `,
};
