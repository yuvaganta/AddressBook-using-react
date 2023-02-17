import React from "react";
import {Guid} from "guid-typescript";
import { IContact, IFormData } from "./Models";
import { contactList } from "./Data";
import './FormSection.css'
import { ContactServices } from "./ContactServices";
import { ValidateForm } from "./Validations";
let validateForm:ValidateForm=new ValidateForm();
let contactServices:ContactServices=new ContactServices();
export function FormSection({id,statesObj,setStatesObj}:{id:string,statesObj:any,setStatesObj:Function}){
let tempContact:IContact;
tempContact=contactServices.getContactById(id);
  function handleChange(e: any) {
    let lableName=e.target.name;
    let formData=statesObj.formData;
    setStatesObj({...statesObj,formData:{...formData,[lableName]:e.target.value}});
  }
  function cancelHandler(){
    let varForm:IFormData={...statesObj.formData,name:"",id:"",mobile:"",address:"",email:"",website:"",landline:""}
    setStatesObj({...statesObj,formData:varForm,showForm:false,showDisplayDetails:false,validates:{isNameValidate:false,isEmailValidate:false,isMobileValidate:false}});
  }
  function submitHandler(e:any){
    e.preventDefault();
    let isName:boolean,isEmail:boolean,isMobile:boolean;
    isName=validateForm.ValidateName(statesObj.formData.name);
    console.log(isName);
    isEmail=validateForm.ValidateEmail(statesObj.formData.email);
    isMobile=validateForm.ValidateMobile(statesObj.formData.mobile);
    if(!isEmail&&!isMobile&&!isName){
      console.log('in the ')
    if(statesObj.formData.action=="add"){
      let newContact:IContact;
    newContact={id:Guid.create().toString(),name:statesObj.formData.name,email:statesObj.formData.email,mobile:statesObj.formData.mobile,address:statesObj.formData.address,website:statesObj.formData.website,landline:statesObj.formData.landline}
    contactServices.AddContact(newContact)
    let varForm:IFormData={...statesObj.formData,name:"",id:"",mobile:"",address:"",email:"",website:"",landline:""}
    setStatesObj({...statesObj,formData:varForm,showForm:false,showDisplayDetails:true,selectedContact:newContact});
    }
    else{
      let newContact:IContact;
      newContact={id:statesObj.selectedContact.id,name:statesObj.formData.name,email:statesObj.formData.email,mobile:statesObj.formData.mobile,address:statesObj.formData.address,website:statesObj.formData.website,landline:statesObj.formData.landline}
      contactServices.UpdateContact(newContact.id,newContact)
      let varForm:IFormData={...statesObj.formData,name:"",id:"",mobile:"",address:"",email:"",website:"",landline:""}
      setStatesObj({...statesObj,formData:varForm,showForm:false,showDisplayDetails:true,selectedContact:contactServices.getContactById(newContact.id)});
    }}
    else{
      setStatesObj({...statesObj,validates:{...statesObj.validates,isNameValidate:isName,isEmailValidate:isEmail,isMobileValidate:isMobile}});
    }
  }
return(
    <div className="addingDetails">
        <form id="addingDetailsForm" onSubmit={submitHandler}>
          <div><label>Name</label><span className="star">*</span></div>
          <div>
    <input type="text" id="addName" className="inbox" name="name" value={statesObj.formData.name} onChange={handleChange}/></div>
          { statesObj.validates.isNameValidate && <div className="warnings" id="nameWarning">Enter your name</div>}
          <div><label>Email</label></div>
          <div>
    <input type="text" id="addEmail" className="inbox" name="email" value={statesObj.formData.email} onChange={handleChange}/></div>
    { statesObj.validates.isEmailValidate && <div className="warnings" id="emailWarning"> Enter EmailId</div>}
          <div>
            <label id="mobilelabel">Mobile<span className="star">*</span></label
            ><label>LandLine</label>
          </div>
          <div>
    <input type="text" id="addMobile" name="mobile" value={statesObj.formData.mobile}onChange={handleChange}/>
    <input
              type="text"
              id="addLandline"
              name="landline"
              value={statesObj.formData.landline}
              onChange={handleChange}
            />
          </div>
          { statesObj.validates.isMobileValidate && <div className="warnings" id="mobileWarning">Enter Mobile Number</div>}
          <div><label>Website</label></div>
          <div>
    <input type="text" className="inbox" name="website" id="addWebsite" value={statesObj.formData.website} onChange={handleChange}/></div>
          <div className="warnings" id="websiteWarning"></div>
          <div><label>Address</label></div>
          <div>
    <textarea id="addAddress" name="address" value={statesObj.formData.address} onChange={handleChange}></textarea></div>
          <div className="buttondiv">
           {statesObj.formData.action=="add" && <button className="formbutton" id="addButton" type="submit" >Add</button>}
           {statesObj.formData.action=="edit" && <button className="formbutton" id="editButton" type="submit" >Edit</button>}
            <button id="cancelButton" onClick={cancelHandler}>Cancel</button>
          </div>
        </form>
  </div>)
}
