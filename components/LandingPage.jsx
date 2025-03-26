import { useState } from "react";
import SearchBox from "../components/SearchBox";
import Temp from "../components/Temp";
import Humidity from "../components/Humidity";
import Wind from "../components/Wind";
import Error from "../components/Error";
import Condition from "./Condition";

function LandingPage() {
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");

  const getWeatherCondition = (condition) => {

        switch(condition.toLowerCase()){
            case "clear sky":
                return "./clear.png";
            case "few clouds":
                return "./clouds.png";
            case "scattered clouds":
                return "./drizzle.png";
            case "broken clouds":
                return "./broken_clouds.png";
            case "smoke":
                return "./smoke.png";
            case "rain":
                return "./rain.png";
            case "thunderstorm":
                return "./thunderstorm.png";
            case "snow":
                return "./snow.png";
            case "mist":
                return "./mist.png";
            default:
                return "./default.png";
        }

  }
  
  return (
    <div className="border-2 border-gray-950  h-screen w-screen px-10 py-10  bg-[url(./background.png)] ">
      <header className="flex justify-center items-start">
        <h1>Weather Forcasting</h1>
      </header>
      <div className="flex justify-center pt-20 pb-12">
        {" "}
        <SearchBox setWeatherData={setWeatherData} setError={setError} />
      </div>

      {error && <Error error={error} />}

      {weatherData && !error && (
        <div className="text-black text-center">
          <h2 className="text-2xl font-bold py-2.5 my-1.5">
            {weatherData.name}
          </h2>
          {
            <div className="flex justify-evenly pt-8">
              <Temp temp={weatherData.main.temp} />

              <Humidity humidity={weatherData["main"]["humidity"]} />

              <Wind wind={weatherData.wind.speed} />
       
            {/* <Condition Condition={weatherData.weather[0].main}/> */}
        <p className="pt-4"><img src= {getWeatherCondition(weatherData?.weather[0]?.description)} alt=""  className="w-30 h-30"/> {weatherData?.weather[0]?.description}</p>
            
            </div>
          }
        </div>
      )}
    </div>
  );
}
export default LandingPage;
