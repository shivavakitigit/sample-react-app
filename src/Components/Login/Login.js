// const event = {
//   target: {
//     value: "sse",
//   },
// };

// console.log(data.designation);

// // eventss
// onchange;

// onClick;

// // functions two ways
// const name = "shiva"

// function handlePhoneNumberChange(){
// console.log(this.name);
// }

// // arrow functions

// useState

// we are creating state intilisarion and updation

// state  formData

// updateState  setFormData

// const data = [{ name: "shiva" }];
// const [name] = data;

// const [formData, setFormData] = useState({
//   phoneNumber: null,
// });

//   setFormData("38446583746")

//   formData =  {
//     phoneNumber: null,
//   }

//  const setFormData = (event) =>{
// preventStateValue then we can update current state value
//  }

import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [phoneNumber, updatePhonenumber] = useState();
  const [number,setNumber] = useState(234234)
  // const navigate = useNavigate();

  const handleContinue = () => {
    debugger;
    // if (phoneNumber) {
    //   navigate("/otplogin");
    // } else {
    //   navigate("main-page");
    // }


    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        PhoneNumber: phoneNumber,
      })
      .then((response) => response)
      .then((json) => console.log(json));
    console.log("coninue button clicked");
  };

  const handlePhoneNumberChange = (event) => {
    // this funcionaliry no keypwird
    const phoneNumberValue = event.target.value;
    console.log("handlePhoneNumberChange", phoneNumberValue);

    // 7799044392 === this is previous entered value

    // 435877985345  updated values

    updatePhonenumber(phoneNumberValue);
  };
  return (
    <div>
      <label>PhoneNumber</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

// forms

// events

// onChange

// OnClick

// Navigate
