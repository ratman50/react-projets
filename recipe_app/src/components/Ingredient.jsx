import React, {useState} from 'react'
import {GrClose} from "react-icons/gr";
const Ingredient = ({ingr}) => {
    const [shown, setShown] = useState(false);
    function handleShown()
    {
        setShown(!shown);
    }
    let rows= ingr.map((item,index)=><li key={`r${index}`}>{item}</li>)
                
  return (
    <div className="ingredient">
         <button className='toggle' type='button' onClick={handleShown}>Ingredients</button>
        {  
            <ul className={shown ? "more active":"more"}>
                <button className='close' type='button' onClick={()=>setShown(false)}>
                <GrClose className='closeB' ></GrClose>
                </button>

                {
                    rows
                }
            </ul>
        }
    </div>
  )
}

export default Ingredient