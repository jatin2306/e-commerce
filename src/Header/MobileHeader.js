import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, useMediaQuery, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '90%', // Adjust this value as needed
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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const MobileHeader = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <AppBar position="static" style={{ backgroundColor: '#0B3D91', height: '120px', justifyContent: 'center' }}>
      <Toolbar style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Box style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ alignSelf: 'flex-start' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ textAlign: 'center' }}
          >
            morata.market
          </Typography>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
        {isMobile && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default MobileHeader;
