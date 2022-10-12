import styled from 'styled-components';
import { COLORS } from '../../../../styled';
import React from 'react';

export const Components = {
  Container: styled.div`
    background-color: ${COLORS.textColor};
    display: flex;
    flex-direction: column;
    padding: 16px;

    @media screen and (max-width: 800px) {
      padding: 24px;
    }
  `,

  CardsContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 16px;
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
  QuoteTitle: styled.div`
    line-height: 2;
    font-size: 18px;
    color: ${COLORS.white};
    border-bottom: 0.5px solid white;
    font-weight: bold;
    margin-bottom: 24px;
    padding-right: 4px;
    width: fit-content;
  `,
};
