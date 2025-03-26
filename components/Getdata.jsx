import React, { useEffect, useState } from "react";


export default function Getdata({ city ,setWeatherData,setError }) {
  console.log("Received city in Getdata component:", city);

 
  const API_KEY = "395ed93e5b9361491c4f0f84a4e09109";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
      // console.log(`${API_URL}${city}&appid=${API_KEY}`);
      const data = await response.json();
       console.log("Fetched weather data:", data);
       if (data.cod !== 200) {
        setError("Invalid city name. Please try again."); 
        setWeatherData(null); 
        return;
      }
      setWeatherData(data);
      setError("");
 
    } catch (error) {
      console.log("Error fetching weather data:", error);
      setError(error)
    }
  };


  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]); 

  return null;
 
}
