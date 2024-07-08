import styled from 'styled-components';
import { COLORS } from '../../../../styled';
export const Components = {
  Container: styled.div`
    display: flex;
    flex: 1;
    background-color: ${COLORS.whiteBeige};
    align-self: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
      padding: 24px 32px;
    }

    @media screen and (max-width: 500px) {
      padding: 12px;
    }
  `,
  QuoteBox: styled.div`
    margin: 52px 104px;
    padding: 42px;
    background-color: ${COLORS.darkBrown};
    border-radius: 8px;
    max-width: 1440px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    @media screen and (max-width: 1500px) {
      margin: 72px;
      padding: 42px;
    }

    @media screen and (max-width: 1200px) {
      margin: 64px;
      padding: 32px;
    }

    @media screen and (max-width: 700px) {
      margin: 36px;
      padding: 32px;
    }

    @media screen and (max-width: 500px) {
      margin: 24px;
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
