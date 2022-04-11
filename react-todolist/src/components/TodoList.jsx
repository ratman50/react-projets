import TodoItem from "./TodoItem";
const TodoList = ({list, option}) => {
  let rows=[];
 
 
  list.forEach((item, index) => {
      if (item.stat==option)
        rows.push((<TodoItem item={item} key={`r${index}`}/>))
        else if(option==null)
        rows.push((<TodoItem item={item} key={`r${index}`}/>))

    })

  return (
    <div className="todo__container">
        <ul className="todo__list">
            {rows}
        </ul>
    </div>
  )
}

export default TodoList