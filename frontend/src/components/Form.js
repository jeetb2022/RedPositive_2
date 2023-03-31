import {useState } from "react";
import axios from "axios";
const HOME_URL="http://localhost:3001/"
const Form =()=>{
    

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
      axios.post(`http://localhost:3001/add`,{
        intern_name : name,
        intern_email : email,
        intern_phone : phone,
        intern_hobbies : hobbies
      });
    }
    return(
        <div>
            <form  onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="intern_name" value={name} onChange={nameChangeHandler} />
        </label>
        <label>
          Email:
          <input type="email" name="intern_email" value={email} onChange={emailChangeHandler} />
        </label>
        <label>
          Phone:
          <input type="text" name="intern_phone" value={phone} onChange={phoneChangeHandler} />
        </label>
        <label>
          Hobbies :
          <input type="text" name="intern_hobbies" value={hobbies} onChange={hobbiesChangeHandler} />
        </label>
        <button type='submit'>ADD_dat</button>
      </form>
        </div>
    )
}
export default Form;