import React from 'react'
import TopBar from '../Header/TopBar'
import MiddleBar from '../Header/MiddleBar'
import Navbar from '../Header/NavBar'
import HeroSection from './HeroSection'
import TrendingProducts from './TrendingProducts'
import PopularCategories from './PopularCategories'
import FooterTop from './FooterTop'
import Footer from './Footer'


const HomaPage = () => {
  return (
 <>
<TopBar/>
<MiddleBar/>
<Navbar/>
<HeroSection/>
<TrendingProducts/>
<PopularCategories/>
<FooterTop/>
<Footer/>
 </>
  )
}

export default HomaPage