import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css';
import '../App.css';
import iconList from "../Images/icon-list.svg";


const Confirm = () => {
  
  const navigate = useNavigate()
  
  const emailValue = localStorage.getItem("email")
  
  return(
    <div className="flex flex-col px-6 pt-24 gap-56 md:w-2/5 md:gap-8 md:m-auto">
      <div>
        <img alt="icon" src={iconList} className="icon w-16 p-1" />
        <h1 className="text-darkGrey text-4xl font-bold py-4">Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{emailValue}</b>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <div>
        <button className="border bg-darkGrey py-3 text-white rounded-lg w-full hover:bg-tomato" onClick={() => navigate(-1)} >Dismiss message</button>
      </div>
    </div>  
  ) 
}

export default Confirm