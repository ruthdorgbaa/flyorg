import React from 'react';
import './background.css';
import FadeInOutMessage from '../animation/animation';




export default function Background() {
  return (
    <div className="background">
      <div className="elipse1">
        <div className="elipse2">
          <div sytle={{background: "red", zIndex: "1000", position: "fixed", bottom: "0"}}>
            <h1>Welcome</h1>
          <FadeInOutMessage/>  
          </div>
        </div>
      </div>
    </div>
  )
}
