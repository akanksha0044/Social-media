import React from 'react'

export default function CloseFrnd({user}) {
  return (
    <li className='sidefrnd'>
        <img className='sideFrndImage' src={user.profilePicture}/>
        <span className='sidefrndname'>{user.username}</span>

       </li>
  )
}
