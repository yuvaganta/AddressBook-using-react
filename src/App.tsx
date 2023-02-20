import React, { useState } from 'react';
import './App.css';
import { HeaderComponent } from './Header';
import { MainSection } from './MainSection';
import { DisplayMiniDetails } from './DisplayMiniDetails';
import { IContact, IStatesObj } from './Models';
import { IFormData } from './Models';
import { ContactServices } from './ContactServices';
import { IValidates } from './Models';
let contactServices:ContactServices=new ContactServices();

function App() {
  const [statesObj, setStatesObj]=useState<IStatesObj>({
    formData:{
      action:"",
      id:"",
      name:"",
      email:"",
      mobile:"",
      address:"",
      website:"",
      landline:""
    },showForm:false,showDisplayDetails:false,
    selectedContact:{id:"",
    name:"",
    email:"",
    mobile:"",
    address:"",
    website:"",
    landline:""}
  });
  // const showForm = ()=>{
  //   setStatesObj({...statesObj,showForm:true,showDisplayDetails:false});
  // }
  const displayDetailsState = (id:string)=>{
      setStatesObj({...statesObj,showForm:false,showDisplayDetails:true,selectedContact:contactServices.getContactById(id)});
  }
  return (
    <div className="App">
      <HeaderComponent statesObj={statesObj} setStatesObj={setStatesObj}></HeaderComponent>
      <MainSection statesObj={statesObj} displayDetailsState={displayDetailsState} setStatesObj={setStatesObj}></MainSection>   
    </div>
  );
}

export default App;
