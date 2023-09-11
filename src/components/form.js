import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css';
import '../App.css';

const Form = () => {
  
  const [inputValue, setInputValue] = useState("")
  const [isTrue, setIsTrue] = useState(true)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const navigate = useNavigate()
  
  
  
  const validateForm = (e) => {
    e.preventDefault()
    // eslint-disable-next-line
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputValue.match(mailformat)){
      setIsTrue(true) 
      navigate('confirm')
    } else{
      setIsTrue(false)
      
    }
    
  }
  
  
  const errorMessage = "Valid email required"
  //{isTrue?"border border-grey pl-4 py-3 rounded-lg mb-5": "border border-tomato pl-4 py-3 rounded-lg mb-5"}
  
  return(
    
    <form className="p-4 flex flex-col">
      <name className="text-darkGrey font-bold flex justify-between" value="address"><small>Email address</small><small className={isTrue?"right":"error"}>{errorMessage}</small></name>
      <input className={`border pl-4 py-3 rounded-lg mb-5 ${isTrue?"border-grey":"border-tomato text-tomato"}`} placeholder="email@company.com" value={inputValue} onChange={handleChange}/>
      
      <button className="border bg-darkGrey py-3 text-white rounded-lg hover:bg-tomato" onClick={validateForm}>Subscribe to monthly newsletter</button>
    </form>
    
  )
}

export default Form;