import './Tetris.css';
import { Board } from '../components';
import useBoard from '../hooks/useBoard';
const Tetris = ({ setGameOver}) => {
  const [board, setBoard]= useBoard();
  return (
    <Board board={board}/>
  )
}

export default Tetris