import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, MenuItem, Select } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartSidebar from '../ShoppingCartSidebar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

const MiddleBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="primary" elevation={0} sx={{ padding: '8px 0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" component="a" href="/" sx={{ color: '#fff', textDecoration: 'none', marginRight: 2 }}>
              morata <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 4 }}>MARKET</span>
            </Typography>
            <Select
              defaultValue="All Categories"
              sx={{
                color: 'white',
                backgroundColor: 'transparent',
                border: 'none',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
              inputProps={{
                style: {
                  color: 'white'
                }
              }}
            >
              <MenuItem value="All Categories">All Categories</MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </Select>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ color: 'white', marginRight: 2 }}>
              Riya Gupta
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <FavoriteIcon sx={{ color: 'white' }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon sx={{ color: 'white' }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <ShoppingCartSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default MiddleBar;
