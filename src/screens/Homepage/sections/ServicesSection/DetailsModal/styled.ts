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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${COLORS.whiteBeige};
    border-radius: 2px;
    padding: 24px;
    width: 90vw;
    overflow-y: auto;
    flex-grow: 1;
    max-height: 700px;
  `,
  Paragraph: styled.li`
    line-height: 1.5;
    font-size: 18px;
    font-family: 'Roboto';
  `,
};
