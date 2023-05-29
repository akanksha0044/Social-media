import React from 'react'
import {Users} from "../../dummyData"
import { useState } from 'react';

import './post.css';
import {MoreVert} from "@mui/icons-material";
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,issetLiked] = useState(false)
    const Likehandler=()=>{
        setLike(isliked ? like-1:like+1 );
        issetLiked(!isliked)
    }  
    
  return (
    <div className='post'>
        <div className='postwrapper'>
            <div className='posttop'>
                <div className='postTopLeft'>
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='postProfile'/>
                    <span className='postUserName'>{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className='postdate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
                
            </div>
            <div className='postcenter'>
                <span className='postText'>{post?.desc}</span>
                <img src={post.photo} className='postImg'/>
            </div>
            <div className='postbottom'>
                <div className='postBottomLeft'>
                <img src="/asset/person/like.png" className='likeIcon' onClick={Likehandler}/>
                <img src="/asset/person/heart.png" className='heartIcon' onClick={Likehandler}/>
                <span className='postlikeCounter'>{like} people liked it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postComment'>{post.comment} comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
