import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  Container: styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    z-index: 1;
    overflow: hidden;
    padding: 32px 0;

    @media screen and (max-width: 1500px) {
      padding: 32px 72px;
    }

    @media screen and (max-width: 1200px) {
      padding: 16px 64px;
    }

    @media screen and (max-width: 700px) {
      padding: 16px 56px;
    }

    @media screen and (max-width: 500px) {
      padding: 8px 24px;
    }

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  `,
  TitleWrapper: styled.div`
    font-size: 18px;
    padding: 4px 8px;
  `,
  SectionTitle: styled.div`
    font-weight: bold;
    margin: 16px;
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
  Title: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.white};
    margin-bottom: 16px;
  `,
  SectionWrapper: styled.div`
    padding: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
      padding: 16px;
      flex-direction: column;
    }
  `,
  Section: styled.div`
    padding: 16px 32px;
    z-index: 2;
    color: ${COLORS.white};
    cursor: pointer;
    max-width: 700px;
    flex-wrap: wrap;

    @media screen and (min-width: 500px) and (max-width: 700px) {
      max-width: 500px;
      padding: 32px 8px;
    }
  `,
  Paragraph: styled.li`
    line-height: 1.5;
    font-size: 18px;
    font-family: 'Roboto';
  `,
  ImageWrapper: styled.div`
    padding: 16px 32px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
      padding: 8px;
    }
  `,
  Image: styled.img`
    max-width: 600px;
  `,
};
