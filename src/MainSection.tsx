import React, { Children } from 'react';
import { DisplayMiniDetails } from './DisplayMiniDetails';
import { contactList } from './Data';
import { IContact, IStatesObj } from './Models';
import "./MainSection.css";
import { DisplayDetails } from './DisplayDetails';
import { ContactsSection } from './ContactsSection';
import { FormSection } from './FormSection';
export function MainSection({statesObj,displayDetailsState,setStatesObj}:{statesObj:IStatesObj, displayDetailsState:Function,setStatesObj:any}){
      return(
        <div className='MainSection'>
           <ContactsSection displayDetailsState={displayDetailsState} selectedContact={statesObj.selectedContact}></ContactsSection> 
           {statesObj.showDisplayDetails&&  <DisplayDetails contact={statesObj.selectedContact} statesObj={statesObj} setStatesObj={setStatesObj}></DisplayDetails>}  
          {statesObj.showForm && <FormSection id={statesObj.formData.id} statesObj={statesObj} setStatesObj={setStatesObj}></FormSection> }
        </div>)
}