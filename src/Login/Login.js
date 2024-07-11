import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import CategoryIcon from '@mui/icons-material/Category';
import PagesIcon from '@mui/icons-material/Pages';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  margin: '0 15px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const menuItems = [
  'Computer & Desktop',
  'Laptop & iPad',
  'Cameras & Photos',
  'Smart Phones & Tablets',
  'Home & Kitchen',
  'TV & Audios',
  'Health & Beauty',
  'Watches & Eyewear',
  'Top Deals',
  'Top Selling Products',
  'Top Featured Products'
];

const navButtons = [
  { label: 'Home', icon: <HomeIcon /> },
  { label: 'Shop', icon: <ShopIcon /> },
  { label: 'Product', icon: <CategoryIcon /> },
  { label: 'Pages', icon: <PagesIcon /> },
  { label: 'Contact Us', icon: <ContactMailIcon /> }
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#1a73e8', height: '64px', padding: '0 16px' }}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick} sx={{ color: 'white', padding: '0' }}>
            <MenuIcon />
          </IconButton>
          <NavButton
            aria-controls="shop-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            sx={{ padding: '0 8px' }} // Adjust the padding to reduce space
          >
            Shop by Department
          </NavButton>
          <Menu
            id="shop-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>{item}</MenuItem>
            ))}
          </Menu>
        </Box>
        <Box display="flex" alignItems="center">
          {navButtons.map((button, index) => (
            <NavButton key={index} startIcon={button.icon}>
              {button.label}
            </NavButton>
          ))}
        </Box>
        <Box display="flex" alignItems="center">
          <LocalOfferIcon sx={{ color: 'white', marginRight: '8px' }} />
          <Typography variant="body2" sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}>
            Sale $20 Off Your First Order
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
