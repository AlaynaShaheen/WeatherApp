import React from 'react';
import {useNavigate} from "react-router-dom";
import './initial.css';
import drizzle from './Assets/drizzle.png';
import './WeatherApp/WeatherApp.css';
const Initial = () => {
    const navigate=useNavigate();
    function handleClick(){
      navigate("/weather");
    }
  return (
   
        <div className='container'>
      <div className='weather-img'>
        <img src={drizzle}/>
      </div>
      <div className='title'><p className='weather'>Weather</p><p className='quill'>Quill</p></div>
      <div class='but'><button className='getstarted' onClick={handleClick}>Get started</button></div>
    </div>
  )
}

export default Initial

