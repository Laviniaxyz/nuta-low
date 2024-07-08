import styled from 'styled-components';
import { COLORS } from '../../../../../styled';

export const Components = {
  Title: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.white};
    margin-bottom: 16px;
  `,
  Section: styled.div`
    padding: 16px;
    z-index: 2;
    color: ${COLORS.white};
    cursor: pointer;
    max-width: 700px;
    flex-wrap: wrap;

    @media screen and (min-width: 500px) and (max-width: 700px) {
      max-width: 500px;
    }
  `,
  Paragraph: styled.li`
    line-height: 1.5;
    font-size: 18px;
    font-family: 'Roboto';
  `,
};
