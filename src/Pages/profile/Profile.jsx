import React from 'react'
import "./profile.css";
import Topber from "../../components/topbar/Topber";
import Slide from "../../components/slidebar/Slide"
import Feed from "../../components/feed/Feed"
import Right from "../../components/rightbar/Right"


export default function profile() {
  return (
    <>
      <Topber />
      <div className="profile">
        <Slide/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="asset/person/nature.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="asset/person/5.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Akanksha Maurya</h4>
                <span className="profileInfoDesc">Hey akanksha there!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Right profile/>
          </div>
        </div>
      </div>
    </>
  )
}
