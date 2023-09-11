import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './index.css';
import './App.css';
import App from './App';
import Confirm from './components/confirm'

const NewApp = () => {
  return(
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/confirm" element={<Confirm/>} />
    </Routes>  
  )
}

export default NewApp