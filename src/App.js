import axios from "axios"
import {useState} from "react"
function App(){
    const[deg,setdeg]=useState("234")
    const[city,setcity]=useState("France")
    const[desc,setdesc]=useState("Raining")
    const[enteredvalue,setenteredvalue]=useState("")

    function handleInput(event){
             setenteredvalue(event.target.value)
    }

    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=fa07564e3834aefc3f9ccd4e0eebd5e6`)
       
        weather.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
        })
    }
    return(
        <div className="flex flex-row justify-center h-[100vh] items-center">
   <div style={{backgroundImage:"linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-2 rounded-md shadow">


        <h2 className="font-medium">Hey!⛅</h2>
        <p className="text-xs">Do you want to know the weather Report :)</p>
        <input onChange={handleInput} className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?"></input>
        <br/>
    <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
   <p className="text-xs mt-2">Degree: {deg} | City : {city} | Weather: {desc}</p>
    </div>
    </div>)
}

export default App