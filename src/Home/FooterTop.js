import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const FooterTop = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1e', padding: '20px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <LocalShippingIcon sx={{ color: '#00bcd4', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            Free Delivery
          </Typography>
          <Typography color="grey">For all orders over $120</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <CreditCardIcon sx={{ color: '#00bcd4', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            Safe Payment
          </Typography>
          <Typography color="grey">100% secure payment</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <SupportAgentIcon sx={{ color: '#00bcd4', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            24/7 Help Center
          </Typography>
          <Typography color="grey">Dedicated 24/7 support</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <ShoppingBagIcon sx={{ color: '#00bcd4', fontSize: 40 }} />
          <Typography variant="h6" color="white">
            Shop With Confidence
          </Typography>
          <Typography color="grey">If goods have problems</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterTop;
