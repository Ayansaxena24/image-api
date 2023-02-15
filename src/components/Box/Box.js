import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function box() {
  return (
    <div className='mb-1'>
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    </div>
  );
}