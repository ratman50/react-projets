

import React from 'react'
import { Menu } from '../components';

import {useGameOver} from "../hooks";
import Tetris from './Tetris';
const Game = () => {

  const [gameOver, setGameOver, resetGameOver]=useGameOver();
  const start=()=>{
    resetGameOver();
   }
  return (
    <div className='Game'>
      {
        gameOver ? 
          <Menu onClick={start}/>
          : <Tetris  setGameOver={setGameOver}/>
      }
    </div>
  )
}

export default Game;