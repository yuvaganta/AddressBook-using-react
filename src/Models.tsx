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