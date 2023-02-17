import React, { useState } from "react";
import { IContact, IFormData } from "./Models";
import { images } from "./images";
import "./DisplayDetails.css"
import { ContactServices } from "./ContactServices";
let contactServices:ContactServices=new ContactServices();
export function DisplayDetails({contact,setStatesObj, statesObj}:{contact:IContact,setStatesObj:Function,statesObj:any}){  
function editHandler(){
    let varForm:IFormData;
    // varForm={...statesObj.selectedContact,action="edit"}
setStatesObj({...statesObj,showForm:true,showDisplayDetails:false})
}
        return(            
        <div className="displayDetails">
        <div>
          <span id="nameOfContact">{contact.name}</span>
          <img id="editimage" src={images.editIcon} />
          <a className="viewbtns" id="editlink" onClick={editHandler}>Edit</a>
          <img id="deleteimage" src={images.deleteIcon} />
          <a className="viewbtns" id="deletelink">Delete</a>
           </div>
        <div className="details">
          <div>
            <p>
              <span className="subheads">Email: </span>
              <span id="emailOfContact">{contact.email}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Mobile: </span
              ><span id="mobileOfContact">{contact.mobile}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Landline: </span>
              <span id="landlineOfContact">{contact.landline}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Website: </span>
              <span id="websiteOfContact">{contact.website}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Address: </span>
              <span id="addressOfContact">{contact.address}</span>
            </p>
          </div>
        </div>
        </div>
        )
}