import styled from 'styled-components';
import { COLORS } from '../../../../styled';

export const Components = {
  Container: styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    z-index: 1;
    overflow: hidden;
  `,
  TitleWrapper: styled.div`
    font-size: 18px;
    padding: 4px 8px;
  `,
  SectionTitle: styled.div`
    font-weight: bold;
    color: ${COLORS.white};
    font-family: Open Sans;
    font-size: 24px;
  `,
  Title: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.white};
    margin-bottom: 16px;
  `,
  SectionWrapper: styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  `,
  Section: styled.div`
    padding: 32px;
    z-index: 2;
    color: ${COLORS.white};
    cursor: pointer;

    :hover {
      background-color: black;
    }
  `,
  Paragraph: styled.li`
    line-height: 1.5;
    font-size: 18px;
    font-family: 'Roboto';
  `,
  BackgroundImage: styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex: 1;
    opacity: 0.2;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0px 1px 1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,
};
