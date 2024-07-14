import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import CategoryIcon from '@mui/icons-material/Category';
import PagesIcon from '@mui/icons-material/Pages';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  margin: '0 15px',
  '&:hover': {
    backgroundColor: 'transparent', // Remove hover effect
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    margin: '0 10px',
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          bgcolor: '#1a73e8',
          height: '64px',
          padding: { xs: '0 8px', md: '0 16px' },
        }}
      >
        <Box display="flex" alignItems="center">
          <NavButton
            aria-controls="shop-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            sx={{ padding: '0 8px', marginLeft: '8px' }} // Adjust the padding and margin to reduce space
          >
            <Box display="flex" alignItems="center">
              <MenuIcon sx={{ marginRight: '8px' }} />
              <Typography variant="body1">Shop by Department</Typography>
            </Box>
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
            <MenuItem onClick={handleMenuClose}>Computer & Desktop</MenuItem>
            <MenuItem onClick={handleMenuClose}>Laptop & iPad</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cameras & Photos</MenuItem>
            <MenuItem onClick={handleMenuClose}>Smart Phones & Tablets</MenuItem>
            <MenuItem onClick={handleMenuClose}>Home & Kitchen</MenuItem>
            <MenuItem onClick={handleMenuClose}>TV & Audios</MenuItem>
            <MenuItem onClick={handleMenuClose}>Health & Beauty</MenuItem>
            <MenuItem onClick={handleMenuClose}>Watches & Eyewear</MenuItem>
            <MenuItem onClick={handleMenuClose}>Top Deals</MenuItem>
            <MenuItem onClick={handleMenuClose}>Top Selling Products</MenuItem>
            <MenuItem onClick={handleMenuClose}>Top Featured Products</MenuItem>
          </Menu>
        </Box>
        <Box
          display={{ xs: 'none', md: 'flex' }}
          alignItems="center"
          flexGrow={1}
          justifyContent="center"
        >
          <NavButton startIcon={<HomeIcon />}>Home</NavButton>
          <NavButton startIcon={<ShopIcon />}>Shop</NavButton>
          <NavButton startIcon={<CategoryIcon />}>Product</NavButton>
          <NavButton startIcon={<PagesIcon />}>Pages</NavButton>
          <NavButton startIcon={<ContactMailIcon />}>Contact Us</NavButton>
        </Box>
        <Box display="flex" alignItems="center">
          <LocalOfferIcon sx={{ color: 'white', marginRight: '8px' }} />
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              fontSize: '16px',
              textTransform: 'none',
              display: { xs: 'none', md: 'block' },
            }}
          >
            Sale $20 Off Your First Order
          </Typography>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleMobileMenuToggle}
          sx={{ display: { md: 'none' } }}
        >
          {mobileOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Shop</MenuItem>
        <MenuItem onClick={handleMenuClose}>Product</MenuItem>
        <MenuItem onClick={handleMenuClose}>Pages</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
