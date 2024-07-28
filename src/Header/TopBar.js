import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'


const TopBar = () => {
  return (
    <div style={{display:"flex"}}>
    <LeftNav/>
    <RightNav/>
   </div>
  )
}

export default TopBar