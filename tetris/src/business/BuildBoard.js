import { defaultCell } from "./Cells";
const BuildBoard = ({rows, columns}) => {
    const builtRows=Array.from({length:rows},()=>Array.from({length:columns},()=>({...defaultCell})))
  return (
      {rows:builtRows,
      size: {rows, columns}}
  )
    
  
}

export default BuildBoard