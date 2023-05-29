import React from 'react'
import Topber from "../../components/topbar/Topber";
import Slide from "../../components/slidebar/Slide"
import Feed from "../../components/feed/Feed"
import Right from "../../components/rightbar/Right"
import "./home.css"

export default function home() {
  return (
    <>
    <Topber/>
    <div className='homecontainer'>
    <Slide/>
    <Feed/>
    <Right/>
    </div>
    
    </>
    
  )
}
