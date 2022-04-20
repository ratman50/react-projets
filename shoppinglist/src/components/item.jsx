import React, { useRef } from 'react';
// import {FontAwesome} from "react-icons/fa";
import {FaCircle, FaCheckCircle, FaChevronLeft, FaChevronRight} from "react-icons/fa"
const Item = (props) => {
    const el=useRef(null);
    const {nameIt,count, checked}=props.ri;
    const {handleCount, handleCheck}=props.handle;
  return (
    <div className='item'>
        <div className="item__name">
            {
                checked ?
                < >
                    <FaCheckCircle onClick={()=>handleCheck(el)} />
                    <span className="completed" ref={el}>{nameIt}</span>
                </> :
                <>
                    <FaCircle color='white' onClick={()=>handleCheck(el)} />
                    <span className="uncompleted" ref={el} >{nameIt}</span>
                </>
            }
        </div>
        <div className="item__quantity">
            <button className='btn_plus' onClick={()=>handleCount("less", el)}> <FaChevronLeft /> </button>
            <span className='number'>{count}</span>
            <button className='btn_less' onClick={()=>handleCount("plus", el)}> <FaChevronRight /> </button>
        </div>
    </div>
  )
}

export default Item;