import { useContext } from "react";
import { checkContext } from "../checkContext";

const TodoItem = ({item}) => {
  let handleCheck=useContext(checkContext);
  return (
        <li>
          <span> {item.text}</span> <span><input type="checkbox"  checked={item.stat} onChange={handleCheck}  id={item.id} /></span> 
        </li>
  )
}

export default TodoItem