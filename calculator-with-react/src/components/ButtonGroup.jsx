import React from 'react'
import ButtonItem from './ButtonItem';

const ButtonGroup = () => {
    const tab=[7, 8, 9, "/",4,5,6,"*",1,2,3,"-",".",0,"=","+"];
    let rows=[];
    tab.forEach((item,index)=>{
        rows.push(<ButtonItem  key={`b${index}`} item={item} index={index} />);

    })
  return (
      <>
        {rows}
      </>
  )
}

export default ButtonGroup