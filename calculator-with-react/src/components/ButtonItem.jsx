import {React,useContext,useState,useEffect} from 'react';
import ContextButton from './ContextButton';

const ButtonItem = ({item,index}) => {
    let op;
    const {handleExpress,evalExpress} = useContext(ContextButton);

    if(index==3 || index==7 || index==11 || index==15)
        op="item_op";
    else
        op="";
    if(index==14)
        return(

            <button type='button'  value={item} id={index} onClick={evalExpress} className={`buttonGroup__item${index} ${op}`}>{item}</button>
        );
  return (
    <button type='button' onClick={handleExpress} id={index}  value={item} className={`buttonGroup__item${index} ${op}`}>{item}</button>
    )
}

export default ButtonItem