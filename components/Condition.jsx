function Condition ({Condition}){   

    let condition = Condition;
        switch(Condition){
            case "clear sky":
                return "./clear.png";
            case "few clouds":
                return "./clouds.png";
            case "scattered clouds":
                return "/drizzle.png";
            case "broken clouds":
                return "Broken Clouds";
            case "smoke":
                return "Smoke";
            case "rain":
                return "/rain.png";
            case "thunderstorm":
                return "Thunderstorm";
            case "snow":
                return "/snow.png";
            case "mist":
                return "/mist.png";
            default:
                return condition;
        }


    
}

export default Condition;