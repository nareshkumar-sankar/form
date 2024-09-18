import React, { useState } from "react";
import "../components/Main.css";

const Main = () => {
  const [count,setCount]=useState(0)
  
  function checkBox(e){
    let countAlphabet=0; 

    if (e.target.value=="") {
      setCount(0)
    }
    else{
      for (let index = 0; index <=e.target.value.length-1; index++) {
        countAlphabet=countAlphabet+1
      }
      setCount(countAlphabet)
    }
  }


  return (
    <>
      <div className="container">
        <div id="left">
          <div>
            <p>First name<span>*</span></p>
            <input type="text" className="input-style" required/>
          </div>

          <div>
            <p>Email<span>*</span></p>
            <input type="email" className="input-style" required/>
          </div>

          <div>
            <p>Industry<span>*</span></p>
            <input type="text" className="input-style" required/>
          </div>
        </div>

        <div id="right">
          <div>
            <p>Last name <span>*</span></p>
            <input type="text" className="input-style" required/>
          </div>

          <div>
            <p>Organization<span>*</span></p>
            <input type="text" className="input-style" required/>
          </div>

          <div>
            <p>How can we help you?<span>*</span></p>
            <input type="text" id="input-text" onChange={checkBox} maxLength={2000}/>
            <div id="txt-count">({count}/2000)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
