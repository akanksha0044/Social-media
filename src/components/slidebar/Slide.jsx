import React from 'react'
import "./slide.css";
import {HelpOutline, RssFeed, School,Event, Bookmark, Chat, Groups,Work} from "@mui/icons-material";
import {Users} from "../../dummyData"
import CloseFrnd from "../closeFrnd/CloseFrnd";


export default function Slide({user}) {
  return (
    <div className='sidebar'>
      <div className='sideWrapper'>
        <ul className='sideList'>
          <li className='sideListItem'>
          <RssFeed className='sideIcon'/>
          <span className='sideText'>Feed</span>
          </li>

          <li className='sideListItem'>
          <Event className='sideIcon'/>
          <span className='sideText'>Event</span>
          </li>

          <li className='sideListItem'>
          <School className='sideIcon'/>
          <span className='sideText'>School</span>
          </li>

          <li className='sideListItem'>
          <HelpOutline className='sideIcon'/>
          <span className='sideText'>HelpOutline</span>
          </li>

          <li className='sideListItem'>
          <Bookmark className='sideIcon'/>
          <span className='sideText'>Bookmark</span>
          </li>
            
          <li className='sideListItem'>
          <Chat className='sideIcon'/>
          <span className='sideText'>Chat</span>
          </li>

          

          <li className='sideListItem'>
          <Groups className='sideIcon'/>
          <span className='sideText'>Groups</span>
          </li>

          <li className='sideListItem'>
          <Work className='sideIcon'/>
          <span className='sideText'>Work</span>
          </li>

          <li className='sideListItem'>
          <Bookmark className='sideIcon'/>
          <span className='sideText'>Bookmark</span>
          </li>

        </ul>
        <button className='sideButton'>Show More</button>
        <hr className='sideHr'/>
        <ul className='sideFrndList'>
        {Users.map((u) => (
            <CloseFrnd key={u.id} user={u} />
          ))}
       
        </ul>

      </div>
    </div>
  )
}
