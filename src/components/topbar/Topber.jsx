import React from 'react';
import "./topber.css";
import {Search,Person,Chat,Notifications} from "@mui/icons-material";

export default function topber() {
  return (
    <div className='topbercontainer'>
      <div className="topLeft">
        <span className='logo'>Social</span>
      </div>
      <div className="topCenter">
        <div className='searchbar'>
         <Search className='searchIcon'/>
         <input placeholder='search for Friends,post or vedio' className='serarchInput'/>
        </div>
      </div>
      <div className="topRight">
        <div className='topLinks'>
          <span className='topLink'>HomePage</span>
          <span className='topLink'>TimeLine</span>
        </div>
        <div className='topIcons'>
          <div className='topIconItem'>
            <Person/>
            <span className='topIconBadge'>1</span>
            

          </div>
          <div className='topIconItem'>
            <Chat/>
            <span className='topIconBadge'>2</span>
            </div>
            <div className='topIconItem'>
            <Notifications/>
            <span className='topIconBadge'>1</span>
            

          </div>
          
        </div>
        <img src='/asset/person/ak.jpeg' alt='' className='topImg'/>
      </div>
    
    </div>
  )
}
