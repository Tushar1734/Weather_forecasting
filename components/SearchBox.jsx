import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Getdata from "./Getdata";
function SearchBox({setWeatherData ,setError}) {
    const [city,setCity] = useState("");
    const[searchCity,setSearchCity] = useState("");
    
    const search =(e)=>{
        e.preventDefault();
        setCity(e.target.value);
    }
    const getWeather =(e)=>{
        setSearchCity(city);
        setError("");
    }
  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-md p-2 w-1/3 mx-auto">
        <input
          type="text"
          className="w-full border-none focus:outline-none px-2"
          placeholder="Enter City Name"
          value={city}
            onChange={search}
            
        />
        <button type="submit" className="bg-blue-400  p-2 rounded-md" onClick={getWeather}>
          <IoSearch className="h-5 w-5" />
        </button>
      </div>
     {searchCity && <Getdata city={searchCity} setWeatherData={setWeatherData} setError={setError}/>}
    </>
  );
}

export default SearchBox;
