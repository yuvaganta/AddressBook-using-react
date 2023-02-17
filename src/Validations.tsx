import React from "react";
import { IFormData } from "./Models";
function ValidateForm(tempContact:IFormData):boolean{
    let nameBox:string , emailBox:string,mobileBox:string;
    nameBox=tempContact.name;
    emailBox=tempContact.email;
    mobileBox=tempContact.mobile;
    let flag:number;
    flag=0;

    if (nameBox == "") {
        $("#nameWarning").text("Enter your name");
        console.log(nameBox);
      } else {
        $("#nameWarning").text("");
        flag += 1;
      }
      if (mobileBox == "" || mobileBox.length != 10) {
        $("#mobileWarning").text("Enter Mobile number");
      } else {
        $("#mobileWarning").text("");
        flag += 1;
      }
      if (emailBox == "") {
        $("#emailWarning").text("");
        flag += 1;
      } else {
        var emalRef = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
        if (emalRef.test(emailBox)) {
          $("#emailWarning").text("");
          flag += 1;
        } else {
          $("#emailWarning").text("Please enter a valid EmailID");
        }
      }
      if (flag == 3) {
        return true;
      } else {
        return false;
      }
}