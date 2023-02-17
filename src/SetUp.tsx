import React, { useState } from "react";
import { contactList } from "./Data";
import { DisplayDetails } from "./DisplayDetails";
import { IContact } from "./Models";
export function DisplayMiniDetails({contact, displayDetailsState,selectedContact}:{contact:IContact ,displayDetailsState:Function,selectedContact:IContact}){    
    return(
        <div>
        <li className="eachContact" id={contact.id} onClick={(e)=>displayDetailsState(e.currentTarget.id)} ><p className='Name'>
        {contact.name} 
        </p><p className='email'>
        {contact.email}
        </p><p className='mobile'>
        {contact.mobile} 
        </p></li>
        </div>
    )
}
