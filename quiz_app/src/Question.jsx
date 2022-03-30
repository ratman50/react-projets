import React from 'react'

export default function Question(props) {
    const quest=props.quest;
  return (
    <div className='question' style={{fontSize:"1.2rem"}}>{quest}</div>
  )
}
