import "./Temp.css";
import { useState } from "react"; 
export default function Temp() {
    let [count,setCount]=useState(10);
    let [color,setColor]=useState("cold");
    const increaseTemp=()=>
    {
        const newTemp=count+1;
        setCount(newTemp);
        handleColor(newTemp);
    }
    const decreaseTemp=()=>{
        const newTemp=count-1;
        setCount(newTemp);
        handleColor(newTemp);
    }
    function handleColor(val) {
        if (val < 25)
                setColor('cold');
        else if(val < 40)
            setColor("red");
                        
        else
            setColor("hot");        
    }
    
  return (
    <div className="Temperature">
        <div className={`screen ${color}`}>{count}°C</div>
        <div className="button-group">
            <button type="button" onClick={increaseTemp}>+</button>
            <button type="button" onClick={decreaseTemp}>-</button>
        </div>
    </div>
  )
}
