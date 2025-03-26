export default function Humidity ({humidity}){
    return (
        <div className="pt-10">
            <img src="/humidity.png" alt="humidity image" className="ml-3" />
            <p className="py-9">Humidity: {humidity}%</p>
            
        </div>
    )
}