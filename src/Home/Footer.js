import React from 'react';
import { Box, Grid, Typography, Button, TextField, IconButton, Link } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import TumblrIcon from '@mui/icons-material/Tumblr';
// import SnapchatIcon from '@mui/icons-material/Snapchat';
// import TiktokIcon from '@mui/icons-material/TikTok';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1e', color: 'white' }}>
      <Box sx={{ padding: '20px 0' }}>
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

      <Box sx={{ padding: '40px 20px' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ '&:hover': { color: '#00bcd4' } }}>
              Download App
            </Typography>
            <Typography variant="body2">
              Morata App is now available on App Store & Google Play. Get it now.
            </Typography>
            <Box mt={2} display="flex" justifyContent="space-between" maxWidth={200}>
              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { borderColor: '#00bcd4' },
                }}
              >
                App Store
              </Button>
              <Button
                variant="outlined"
                startIcon={<AndroidIcon />}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { borderColor: '#00bcd4' },
                }}
              >
                Google Play
              </Button>
            </Box>
            <Box mt={2} display="flex" justifyContent="space-between" maxWidth={240}>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                <PinterestIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                {/* <TumblrIcon /> */}
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                {/* <SnapchatIcon /> */}
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}>
                {/* <TiktokIcon /> */}
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ '&:hover': { color: '#00bcd4' } }}>
              My Account
            </Typography>
            {['Product Support', 'Checkout', 'Shopping Cart', 'Wishlist', 'Custom Link', 'Redeem Voucher'].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: '#00bcd4', textDecoration: 'underline' } }}
              >
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ '&:hover': { color: '#00bcd4' } }}>
              Customer Service
            </Typography>
            {['Help Center', 'Contact Us', 'Report Abuse', 'Submit a Dispute', 'Policies & Rules', 'Online Returns Policy'].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: '#00bcd4', textDecoration: 'underline' } }}
              >
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ '&:hover': { color: '#00bcd4' } }}>
              Help & Customer Care
            </Typography>
            {['New Customers', 'How to use My Account', 'Placing an Order', 'Payment Methods', 'Problems with your Order'].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: '#00bcd4', textDecoration: 'underline' } }}
              >
                {item}
              </Typography>
            ))}
            <Typography
              variant="body2"
              sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: '#00bcd4', textDecoration: 'underline' } }}
            >
              <Link href="#" sx={{ textDecoration: 'none', color: 'inherit' }}>
                Delivery & Dispatch
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ '&:hover': { color: '#00bcd4' } }}>
              Sign Up To Newsletter
            </Typography>
            <Typography variant="body2">
              Join 60,000+ subscribers and get a new discount coupon on every Saturday.
            </Typography>
            <Box mt={2} display="flex">
              <TextField
                variant="outlined"
                placeholder="Your email address..."
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '4px 0 0 4px',
                  flexGrow: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00bcd4',
                  borderRadius: '0 4px 4px 0',
                  '&:hover': { backgroundColor: '#0097a7' },
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
            <Typography variant="caption" display="block" mt={2}>
              By providing your email address, you agree to our Privacy Policy and Terms of Service.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
