import React from 'react';
import '../index.css';
import '../App.css';
import iconList from "../Images/icon-list.svg";

const TextSection = () => {
  return(
    <div className="p-4 md:p-2">
      <h1 className="text-darkGrey text-4xl font-bold py-4">Stay updated!</h1>

      <p className="pb-4">Join 60,000+ product managers receiving monthly updates on:</p>

      <div>
        <div className="flex items-start gap-4 pb-3">
          <img alt="icon" src={iconList} class="icon"/>
          <p>Product discovery and building what matters</p>
        </div>
        
        <div className="flex items-start gap-4 pb-3">
          <img alt="icon" src={iconList} class="icon"/>
          <p>Measuring to ensure updates are a success</p>
        </div>
        
        <div className="flex items-start gap-4 pb-1">
          <img alt="icon" src={iconList} class="icon"/>
          <p>And much more!</p>
        </div>
      </div>
    </div>  
  )
}

export default TextSection;
