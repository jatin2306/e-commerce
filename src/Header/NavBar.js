// NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  margin: '0 15px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

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
          <NavButton
            aria-controls="shop-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
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
        <Box display="flex" alignItems="center">
          <NavButton>Home</NavButton>
          <NavButton>Shop</NavButton>
          <NavButton>Product</NavButton>
          <NavButton>Pages</NavButton>
          <NavButton>Blog</NavButton>
          <NavButton>Contact Us</NavButton>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}>
            Sale $20 Off Your First Order
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
