import React from "react";
import './ErrorModal.css'
import {useState } from "react";
import axios from "axios";
const ErrorModal = (props)=>{

const [name,setName]= useState("");
const nameChangeHandler = (ele) => {
  setName(ele.target.value);
};
const [email,setEmail]= useState("");
const emailChangeHandler = (ele) => {
  setEmail(ele.target.value);
};
const [phone,setPhone]= useState("");
const phoneChangeHandler = (ele) => {
  setPhone(ele.target.value);
};
const [hobbies,setHobbies]= useState("");
const hobbiesChangeHandler = (ele) => {
  setHobbies(ele.target.value);
};
const handleSubmit = (event) => {
  event.preventDefault();
  clickHandler();
  axios.post('http://localhost:3000/add',{
    intern_name : name,
    intern_email : email,
    intern_phone : phone,
    intern_hobbies : hobbies
  });
}
const clickHandler = ()=>{
    props.onCancel();
}
return (
    <div>
        <div className="backdrop" onClick={clickHandler}>

        </div>
    
        <div className="box">
            <h1>Add an intern</h1>
            <form  onSubmit={handleSubmit}>
        <label className="box-inside">
          Name:
          <input type="text" name="intern_name" value={name} onChange={nameChangeHandler} />
        </label>
        <br />
        <label className="box-inside">
          Email:
          <input type="text" name="intern_email" value={email} onChange={emailChangeHandler} />
        </label >
        <br />
        <label className="box-inside">
          Phone:
          <input type="text" name="intern_phone" value={phone} onChange={phoneChangeHandler} />
        </label >
        <br />
        <label className="box-inside">
          Hobbies :
          <input type="text" name="intern_hobbies" value={hobbies} onChange={hobbiesChangeHandler} />
        </label >
        <br />
        <button style={{margin:"8px"}} type='submit' onClick={handleSubmit}>ADD</button>
      </form>
        </div>
    </div>
);
};

export default ErrorModal;