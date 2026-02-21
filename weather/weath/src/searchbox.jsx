import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';

export default function Searchbox({ setData }) {  // Receive from App
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "200e0d9f2a632693aff0b910df534260";
  const [city, setCity] = useState("");

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      let jsonResponse = await response.json();
      
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };
      setData(result);  // ✅ Now works - calls App's setWeatherData
    } catch (error) {
      console.error('Error:', error);
      setData(null);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    if (city.trim()) {
      getWeatherInfo();
      setCity("");
    }
  };

  return (
    <div className='search'>
      <h2>Search for weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City name"
          variant="outlined" 
          required 
          value={city} 
          onChange={handleChange}
        />
        <br /><br />
         

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
    
  );
 
}

