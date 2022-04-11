import {FaPlusSquare} from  "react-icons/fa";
const Forms = ({handleText, handleList,inputText, handleOption}) => {
  return (
    <form className="todo" onSubmit={handleList}>
        <input type="text"  className="todo__input" value={inputText}  onChange={handleText}/>
        <button className="todo__button" type="submit"  >
            <FaPlusSquare/>
        </button>
        <div className="select">
            <select name="todos" className="todo__filter" onChange={handleOption}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Forms