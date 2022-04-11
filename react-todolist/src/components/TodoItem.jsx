import { useContext } from "react";
import { checkContext } from "../checkContext";
import {VscTrash} from "react-icons/vsc";
import { deleteContext } from "../deleteContext";

const TodoItem = ({item}) => {
  let handleCheck=useContext(checkContext);
  let handleDelete=useContext(deleteContext);
  return (
        <li style={{margin:"1em"}} >
          <span> {item.text} </span> 
          <span> {item.date}</span>
          <span><input type="checkbox"  checked={item.stat} onChange={handleCheck}  id={item.id} /></span> 
           <VscTrash style={{cursor:"pointer",fontSize:"1.3rem"}} onClick={handleDelete} id={`${item.id}r`}/>
        </li>
  )
}

export default TodoItem