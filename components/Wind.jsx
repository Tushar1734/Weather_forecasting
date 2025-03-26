export default function Wind({wind}){
    return (
        <div className="pt-9 ">
            <img src="/wind.png" alt="wind image" className="ml-7 "  />
            <p className="py-7">Wind Speed:{wind} m/s</p>
        </div>
    )
}