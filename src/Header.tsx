import React, { useState } from 'react';
import "./Header.css"
import { images } from './images';
import { IFormData, IStatesObj } from './Models';
export function HeaderComponent({statesObj,setStatesObj}:{statesObj:IStatesObj,setStatesObj:Function}){
  function setShowForm() {
    let varForm:IFormData={...statesObj.formData,name:"",id:"",mobile:"",address:"",email:"",website:"",landline:"",action:"add"}
    setStatesObj({...statesObj,formData:varForm,showForm:true,showDisplayDetails:false,selectedContact:{...statesObj.selectedContact,id:""}});
  }

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