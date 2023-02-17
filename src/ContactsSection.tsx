import React from "react";
import { IContact } from "./Models";
import { DisplayMiniDetails } from "./SetUp";
import { contactList } from "./Data";
export function ContactsSection({displayDetailsState, selectedContact}:{displayDetailsState:Function,selectedContact:IContact}){
    return(<div><h3>Contacts</h3>   
    <div className="contactul"><ul className="contact" id="contactBook">
    {contactList.map((contact:IContact)=><DisplayMiniDetails key={contact.id} contact={contact} displayDetailsState={displayDetailsState} selectedContact={selectedContact}></DisplayMiniDetails>)}
     </ul></div></div>)
}