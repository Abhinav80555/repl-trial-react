import './Featured.css';
import React from "react"
const Featured=()=>{
  return(
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.24xrentals.com/wp-content/uploads/2021/08/B1_Netflix_Twitter_1920x1080-2-e1630439163404-300x300.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Camera</h1>
          <h2>10+ brands</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.24xrentals.com/wp-content/uploads/2021/08/maxresdefault.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lens</h1>
          <h3>pixel Perfect</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.24xrentals.com/wp-content/uploads/2022/03/COMBO2.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Combos</h1>
          <h2>Cinema needs</h2>
        </div>
      </div>
    </div>
  )
}
export default Featured