import './App.css';
import Item from './components/item';
import {FaPlus} from "react-icons/fa";
import { useState } from 'react';

function App() {
  const [items, setItems]=useState([
    {nameIt:"item1",count:1,checked:false},
    {nameIt:"item2",count:3,checked:false},
    {nameIt:"item3",count:9,checked:false},
  ]);
  const [nameItem, setNameItem] = useState("");
  const handleValue=(e)=>{
    setNameItem(e.target.value);
  }
  
  const handleAdd=(value)=>{
    if(value && items.findIndex(cur=>cur.nameIt===value)===-1)
    {
      const copy=[...items];
      copy.push({
        nameIt:value,
        count:1,
        checked:false
      })
      setItems(copy);
    }
  }
  const handleCount=(op,target)=>{
    const value=target.current.textContent;
    console.log(value)
    const index=items.findIndex(cur=>value===cur.nameIt);
    let cop=[...items];
    switch (op) {
      case "plus":
        cop[index].count++;
        break;
      case "less":
        if(cop[index].count > 0)
          cop[index].count--;
        break;
      default:
        throw new Error();
    }
    setItems(cop);
  }
  const handleCheck=(target)=>{
      const value=target.current.textContent;
      const index=items.findIndex(cur=>value===cur.nameIt);
      let cop=[...items];
      cop[index].checked=!cop[index].checked;
      setItems(cop);



  }
  return (
    <div className="App">
      <div className="container">
        <div className="add">
            <input type="text" placeholder='Add an item...' className='add__text'onChange={handleValue}  />
            <FaPlus style={{color:"#e75a51",fontSize:"1.2rem",cursor:"pointer"}} onClick={()=>handleAdd(nameItem)}/>
        </div>
        <div className="items">
          {
            items.map((it, index)=><Item key={`i${index}`} handle={{handleCount,handleCheck}}  ri={it} />)
          }

        </div>
        <div className="total">
         Total: {items.reduce((sum, current)=>!current.checked ? sum+current.count : sum,0)}
        </div>
      </div>
    </div>
  );
}

export default App;
