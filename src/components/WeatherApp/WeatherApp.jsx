import React from 'react';
import { useState } from 'react';
import './WeatherApp.css';
import drizzle from '../Assets/drizzle.png';
import humidity from '../Assets/humidity.png'
import search from '../Assets/search.png';
import windy from '../Assets/windy.png';
import feelslike from '../Assets/feelslike.png';
const WeatherApp = () => {
  let api_key="38eb6e4df1d830270a50fefb4d4f3e4e";
  const [wicon,setwicon]=useState(drizzle);
  const [cityInput, setCityInput] = useState('');
  const searc=async ()=>{
        const element=document.getElementsByClassName('cityInput');
        if(element[0].value==="")
        {
          return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;
        try{
          let response=await fetch(url);
          let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temp=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        const feels=document.getElementsByClassName("feelslike");
        const tmax=document.getElementsByClassName("temp-max");
        const tmin=document.getElementsByClassName("temp-min");
        console.log(data.name);
        if (data.wind && data.wind.speed !== undefined) {
          wind[0].innerHTML = Math.floor(data.wind.speed)+" km/hr";
      } else {
          wind[0].innerHTML = 'N/A';
      }

      if (data.main && data.main.temp !== undefined) {
          temp[0].innerHTML = Math.floor(data.main.temp)+"°C";
      } else {
          temp[0].innerHTML = 'N/A';
      }

      if (data.name !== undefined) {
          location[0].innerHTML = data.name;
      } else {
          location[0].innerHTML = 'N/A';
      }

      if (data.main && data.main.humidity !== undefined) {
          humidity[0].innerHTML = data.main.humidity+" %";
      } else {
          humidity[0].innerHTML = 'N/A';
      }
      
      if (data.main && data.main.feels_like !== undefined) {
        feels[0].innerHTML = Math.floor(data.main.feels_like)+"°C";
    } else {
        feels[0].innerHTML = 'N/A';
    }
    if (data.main && data.main.temp_min !== undefined) {
      tmin[0].innerHTML = Math.floor(data.main.temp_min)+"°C";
  } else {
      tmin[0].innerHTML = 'N/A';
  }
  if (data.main && data.main.temp_max!== undefined) {
   tmax[0].innerHTML = Math.floor(data.main.temp_max)+"°C";
} else {
    tmax[0].innerHTML = 'N/A';
}
    setwicon(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    
  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
    }
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        searc();
      }
    };
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeHolder='search' onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={handleKeyPress}/>
              <div className='search' onClick={()=>{searc()}}>
                <img src={search} alt=""/>
              </div>
        </div>
        <div className='weather-image'>
          <img src={wicon} alt=""/>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity} alt='' className='icon'/>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={windy} alt='' className='icon'/>
            <div className='data'>
              <div className='wind-rate'>4 km/hr</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        
        <div className='element'>
            <img src={feelslike} alt='' className='icont'/>
            <div className='data'>
              <div className='feelslike'>26°C</div>
              <div className='text'>Feels like</div>
            </div>
          </div>
          </div>
          <div className='data-container'>
          <div className='data-min'>
              <div className='temp-max'>28°C</div>
              <div className='text'>Maximum</div>
            </div>
            <div className='data-max'>
              <div className='temp-min'>24°C</div>
              <div className='text'>Minimum</div>
            </div>
            </div>
    </div>
  )
}

export default WeatherApp
