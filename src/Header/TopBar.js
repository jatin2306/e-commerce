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
          sx={{ color: 'white', marginRight: '10px' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Español</MenuItem>
        </Select>
        <Select
          value="usd"
          variant="standard"
          disableUnderline
          sx={{ color: 'white', marginRight: '10px' }}
        >
          <MenuItem value="usd">United States (USD $)</MenuItem>
          <MenuItem value="eur">Europe (EUR €)</MenuItem>
        </Select>
        <Typography 
          variant="body2"
          sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}
        >
          Need Help? +001 123 456 789
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          width: { xs: '100%', sm: 'auto' },
          '& > *': { marginLeft: { sm: '20px' } },
        }}
      >
        {['About Us', 'Order Tracking', 'Contact Us', 'FAQs'].map((text, index) => (
          <Typography 
            key={index}
            variant="body2"
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
              marginRight: index < 3 ? { xs: '0', sm: '20px' } : '0', // Add margin-right except for the last item
              marginBottom: { xs: '8px', sm: '0' }, // Add margin-bottom for xs
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TopBar;
