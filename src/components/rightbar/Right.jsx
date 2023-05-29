import React from 'react'
import "./right.css"
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Right({profile}) {
  return (
    <div className='right'>
      <div className='rightWrapper'>
        <div className='birthday'>
          <img className='bdyImg' src="/asset/person/bdy.jpg"/>
          <span className='bdyText'><b>Gourav</b> and <b>3 others frnds</b> have bdy today</span>
        </div>
        <img className='rightAdd' src='/asset/person/addd.jpg'/>
        <h4 className='rightTitle'>Online Friends</h4>
        <ul className='rightfrndList'>
        {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      
      </div>
 </div>
  )
}
