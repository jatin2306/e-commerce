import React from "react";
import HeroSection from "./HeroSection";
import TrendingProducts from "./TrendingProducts";
import PopularCategories from "./PopularCategories";
import Footer from "./Footer";
import MobileHeader from "../Header/MobileHeader";
import { useMediaQuery } from "@mui/material";
import MainHeader from "../Header/MainHeader";
import DealsOfTheDay from "./DealsOfTheDay";

const HomaPage = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <MainHeader />
      )}

      <HeroSection />
      <TrendingProducts />
      <PopularCategories />
<DealsOfTheDay/>
      <Footer />
    </>
  );
};

export default HomaPage;
