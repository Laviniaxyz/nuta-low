import * as React from 'react';
import Box from '@mui/material/Box';
import { Components } from './styled';
import { COLORS } from '../../styled';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Components.Container style={{ color: COLORS.textColor }} />
    </Box>
  );
}
