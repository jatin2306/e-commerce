import React from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';

const TopBar = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      bgcolor="#1a73e8" 
      color="white" 
      padding="8px 16px"
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        '& > *': { marginBottom: { xs: '8px', sm: '0' } },
      }}
    >
      <Box
        display="flex" 
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          '& > *': { marginBottom: { xs: '8px', sm: '0' }, marginRight: { sm: '20px' } },
        }}
      >
        <Select
          value="en"
          variant="standard"
          disableUnderline
          sx={{ color: 'white' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
        </Select>
        <Select
          value="usd"
          variant="standard"
          disableUnderline
          sx={{ color: 'white' }}
        >
          <MenuItem value="usd">United States (USD $)</MenuItem>
          <MenuItem value="eur">Europe (EUR €)</MenuItem>
        </Select>
      </Box>
      <Typography 
        variant="body2"
        sx={{
          textAlign: { xs: 'left', sm: 'right' },
          marginLeft: { xs: '0', sm: 'auto' }
        }}
      >
        Need Help? +001 123 456 789
      </Typography>
    </Box>
  );
};

export default TopBar;
