import React from 'react'
import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material";


export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
            <img className='shareProfile' src="/asset/person/ak.jpeg"/>
            <input placeholder='whats  in your mind' className='shareInput' />

        </div>
        <hr className='shareHr'/>
        <div className='shareButtom'>
            <div className='shareOptions'>
            <div className='shareOption'>
                <PermMedia htmlColor='tomato'className='shareIcon'/>
                <span className='shareoptionTesxt'>Photo/Video</span>
                </div>

                <div className='shareOption'>
                <Label htmlColor='green' className='shareIcon'/>
                <span className='shareoptionTesxt'>Tag</span>
                </div>

                <div className='shareOption'>
                <Room  htmlColor='blue'className='shareIcon'/>
                <span className='shareoptionTesxt'>Location</span>
                </div>

                <div className='shareOption'>
                <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                <span className='shareoptionTesxt'>Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
