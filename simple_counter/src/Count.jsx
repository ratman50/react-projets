import "./count.css";
import { useState } from "react";
export default function Count() {
    let [value, setValue]=useState(0);
  return (
    <div className="counter">
        <h1>Counter</h1>
        <div className="screen">{value}</div>
        <div className="button-group">
            <button className="b1" type="button" onClick={()=>setValue(prevValue=>prevValue + 1)} >+</button>
            <button className="b2" type="button" onClick={()=>setValue(prevValue=>prevValue - 1)}>-</button>
        </div>
    </div>
  )
}
