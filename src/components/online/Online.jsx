import React from 'react'
import "./online.css";

export default function Online({user}) {
  return (
    <li className='rightFrnd'>
            <div className='profileImg'>
     <img className='rightProfileImg' src={user.profilePicture} />
      <span className='rightOnline'></span>
            </div>
            <span className='rightUserName'>{user.username}</span>
          </li>
  )
}
