import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartSidebar from "./ShoppingCartSidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  color: "black",
  marginRight: theme.spacing(3),
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
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
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ padding: "8px 0", backgroundColor: "#0046B3" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{ color: "#fff", textDecoration: "none", marginRight: 2 }}
            >
              morata{" "}
              <span style={{ color: "red", fontSize: "0.7em", marginLeft: 4 }}>
                MARKET
              </span>
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              <Select
                defaultValue="All Categories"
                sx={{
                  color: "black",
                  backgroundColor: "transparent",
                  border: "none",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  minWidth: 150,
                }}
                inputProps={{
                  style: {
                    color: "black",
                  },
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
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <IconButton color="inherit">
                <AccountCircleIcon sx={{ color: "white", fontSize: 28 }} />
                <Typography sx={{ color: "white", marginLeft: 1 }}>
                  Login
                </Typography>
              </IconButton>
            </Link>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <FavoriteIcon sx={{ color: "white", fontSize: 28 }} />
              </Badge>
              <Typography sx={{ color: "white", marginLeft: 1 }}>
                My Wishlist
              </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <Badge badgeContent={5} color="secondary">
                <ShoppingCartIcon sx={{ color: "white", fontSize: 28 }} />
              </Badge>
              <Typography sx={{ color: "white", marginLeft: 1 }}>
                Your Cart $0.00
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <ShoppingCartSidebar
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

export default MiddleBar;
