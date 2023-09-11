import React from 'react';
import './index.css';
import './App.css';

import TextSection from "./components/textSection";
import Form from "./components/form";
import BackgroundImage from "./components/backgroundImage"


import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Regular.ttf";

function App() {
  return (
    <div className="app text-primaryColor flex flex-col md:flex-row-reverse md:justify-center md:py-4 md:pl-8">
      
      <BackgroundImage/>
      <div className="md:py-12">
        <TextSection/>
        <Form/>
      </div>
    </div>
  );
}
 
export default App;
