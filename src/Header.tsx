import React, { useState } from 'react';
import "./Header.css"
import { images } from './images';
export function HeaderComponent({setShowForm}:{setShowForm:Function}){
    return(
        <div><h1 className="heading">Address Book</h1>
        <nav>
          <div className="navigation">
            <div className="navlinks">
              <div className="navigationitem">HOME</div>
              <div className="navigationitem">
                <a href="#" id="addlink" onClick={()=>setShowForm()}>+ADD</a>
              </div>
            </div>
            <div className="blogimage"><img src={images.blogIcon} /></div>
          </div>
        </nav>
        </div>
        )
}