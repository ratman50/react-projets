import React from 'react'
import Pawn from './Pawn';
import './Team.css';
const Team = ({teamClass, circle_color, val}) => {
  return (
    <div className={`team ${teamClass}`}>
        <div className="Team__container">
            <div className={`circle ${circle_color}`}> <Pawn color={val} height="32" width={"32"}/> </div>
            <div className={`circle ${circle_color}`}><Pawn color={val} height="32" width={"32"}/></div>
            <div className={`circle ${circle_color}`}><Pawn color={val} height="32" width={"32"}/></div>
            <div className={`circle ${circle_color}`}><Pawn color={val} height="32" width={"32"}/></div>
        </div>
    </div>
  )
}

export default Team