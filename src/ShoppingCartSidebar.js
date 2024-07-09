import React from 'react';
import { Drawer, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ShoppingCartSidebar = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: 400,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          bgcolor: '#f5f5f5'
        }}
        role="presentation"
      >
        <Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2 }}
          >
            <Typography variant="h6" component="div">
              Shopping Cart
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: 'center', pt: 4 }}>
            <img src="/path/to/empty-cart-image.png" alt="Empty Cart" style={{ marginBottom: 16, maxWidth: '80%' }} />
            <Typography variant="body1" component="div">
              Your cart is empty.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDrawer(false)}
          sx={{ mt: 2, bgcolor: 'black', '&:hover': { bgcolor: 'black' } }}
        >
          RETURN TO SHOP
        </Button>
      </Box>
    </Drawer>
  );
};

export default ShoppingCartSidebar;
