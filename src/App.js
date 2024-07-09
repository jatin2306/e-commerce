import React from 'react'
import TopBar from './Header/TopBar'
import MiddleBar from './Header/MiddleBar'
import HeroSection from './HeroSection'
import NavBar from './Header/NavBar'
import TrendingProducts from './TrendingProducts'

const App = () => {
  return (
   <>
   <TopBar/>
   <MiddleBar/>
   <NavBar/>
   <HeroSection/>
   <TrendingProducts/>
   </>
  )
}

export default App