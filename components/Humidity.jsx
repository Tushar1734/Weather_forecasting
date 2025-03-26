export default function Humidity ({humidity}){
    return (
        <div className="pt-10">
            <img src="/humidity.png" alt="humidity image" className="ml-3 w-20 h-20" />
            <p className="py-9">Humidity: {humidity}%</p>
            
        </div>
    )
}