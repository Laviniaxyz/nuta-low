import styled from 'styled-components';
import { COLORS } from '../../../../../styled';
import Box from '@mui/material/Box';

export const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  backgroundColor: COLORS.whiteBeige,
  borderRadius: 2,
  p: 4,
};
export const Components = {
  Box: styled(Box)`
    padding: 24px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${COLORS.whiteBeige};
    border-radius: 2px;
    width: 90vw;
    overflow-y: auto;
    flex-grow: 1;
    max-height: 100%;

    @media screen and (max-width: 800px) {
      top: 50%;
    }
  `,
  Paragraph: styled.li<{ isLast?: boolean }>`
    line-height: 1.5;
    font-size: 18px;
    font-family: 'Roboto';
    margin-bottom: ${(p) => (p.isLast ? 12 : 4)}px;

    @media screen and (max-width: 500px) {
      margin-bottom: ${(p) => (p.isLast ? 18 : 4)}px;
    }
  `,
};
