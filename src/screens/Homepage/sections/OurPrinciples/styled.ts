import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  Container: styled.div`
    background-color: ${COLORS.textColor};
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: center;
    align-items: center;
  `,

  CardsContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    max-width: 1488px;
    margin: 32px 72px;

    @media screen and (max-width: 1500px) {
      margin: 32px 72px;
      grid-gap: 16px;
    }

    @media screen and (max-width: 1200px) {
      margin: 16px 64px;
      grid-gap: 16px;
    }

    @media screen and (max-width: 700px) {
      margin: 16px 56px;
      grid-gap: 16px;
    }

    @media screen and (max-width: 500px) {
      margin: 8px 24px;
      padding: 8px;
      grid-gap: 16px;
    }

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    //padding: 16px;
    padding: 32px;
    margin-bottom: 32px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    position: relative;
  `,
  CardImage: styled.img`
    object-fit: contain;
    max-width: 100px;
    max-height: 120px;
  `,
  CardTitle: styled.div`
    text-align: center;
    margin-bottom: 16px;
    line-height: 2;
    font-size: 18px;
    font-weight: bold;
  `,
  CardImageWrapper: styled.div`
    width: 100px;
    height: 120px;
    display: flex;
    justify-content: center;
  `,
  CardDescription: styled.div`
    text-align: center;
    margin-bottom: 16px;
    line-height: 1.2;
    font-size: 16px;
    font-family: 'Roboto';
  `,
  QuoteTitle: styled.h2`
    //line-height: 2;
    //font-size: 18px;
    //border-bottom: 0.5px solid white;
    //padding-right: 4px;
    //width: fit-content;
    color: ${COLORS.white};
    font-size: 36px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  `,
  BackgroundImage: styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex: 1;
    opacity: 0.15;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0px 1px 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,
};
