import React from 'react';
import "./Header.css"
export function HeaderComponent(){
    return(
        <div><h1 className="heading">Address Book</h1>
        <nav>
          <div className="navigation">
            <div className="navlinks">
              <div className="navigationitem">HOME</div>
              <div className="navigationitem">
                <a href="#" id="addlink">+ADD</a>
              </div>
            </div>
            <div className="blogimage"><img src="./images/blog-icon.png" /></div>
          </div>
        </nav></div>)
}