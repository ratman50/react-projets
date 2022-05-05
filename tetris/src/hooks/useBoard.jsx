import { useState } from 'react';
import BuildBoard from '../business/BuildBoard';
import { MatriceContext } from "../Contexts/MatriceContext";
import { useContext } from "react";

const useBoard = () => {
    const {rows, columns} = useContext(MatriceContext);
    const [board, setBoard] = useState(BuildBoard({rows, columns}));
  return[board, setBoard];
}

export default useBoard