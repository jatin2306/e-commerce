import React from "react";
import HeroSection from "./HeroSection";
import TrendingProducts from "./TrendingProducts";
import PopularCategories from "./PopularCategories";
import FooterTop from "./FooterTop";
import Footer from "./Footer";
import MainHeader from "../Header/MainHeader";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMediaQuery } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));
const HomaPage = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <>
      {isMobile ? (
        <AppBar position="static" style={{ backgroundColor: "#2C3E50" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <img
              src="logo.png"
              alt="morata.market"
              style={{ marginRight: "auto", height: 40 }}
            />
            {isMobile && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for products…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : (
        <MainHeader />
      )}

      <HeroSection />
      <TrendingProducts />
      <PopularCategories />
      <FooterTop />
      <Footer />
    </>
  );
};

export default HomaPage;
