import React from "react";
export interface IContact {
    name:string;
    id:string;
    email:string;
    mobile:string;
    website:string;
    landline:string;
    address:string;
}
export interface IFormData{
    action:string;
    id:string;
    name:string;
    email:string;
    mobile:string;
    address:string;
    website:string;
    landline:string;
}
export interface IValidates{
    isNameValidate:boolean;
    isEmailValidate:boolean;
    isMobileValidate:boolean;
}
export interface IStatesObj{
    formData:IFormData;
    showForm:boolean;
    showDisplayDetails:boolean;
      selectedContact:IContact
}