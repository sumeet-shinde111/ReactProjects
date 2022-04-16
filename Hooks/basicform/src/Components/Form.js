import React, { useState } from "react";
import "../form.css";
import Button from "./Button";

function Form() {
  //set initial input values in hook1
  //hook1
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });
  
//get hook1 values in hook2

//hook2
  const [Fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });

  
//get input values on change and store in hook1
  function getValues(e) {
    let inputName = e.target.value;
    let attrName = e.target.name;
 
    setName((prev) => {
      if (attrName === "fname") {
        return {
          fname: inputName,
          lname: prev.lname,
        };
      } else if (attrName === "lname") {
        return {
          fname: prev.fname,
          lname: inputName,
        };
      }
    });
  }

//submit copy hook1 values in hook 2 and submit form
  function submitData(e) {
    e.preventDefault();
    setFullname(() => {
      return {
        firstname: name.fname,
        lastname: name.lname,
      };
    });

    setName(() => {
      return {
        fname: "",
        lname: "",
      };
    });
  }

  return (
    <div className="data">
      <form onSubmit={submitData}>
        <h1>
          Hello {Fullname.firstname} {Fullname.lastname}
        </h1>
        <input
          type="text"
          id="firstname"
          name="fname"
          placeholder="Enter your firstname"
          value={name.fname}
          onChange={getValues}
        />
        <input
          type="text"
          id="lastname"
          name="lname"
          placeholder="Enter your lastname"
          value={name.lname}
          onChange={getValues}
        />
        <Button />
      </form>
    </div>
  );
}
export default Form;
