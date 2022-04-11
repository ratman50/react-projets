import {  useEffect, useState } from 'react';
import './App.css';
import { checkContext } from './checkContext';
import { deleteContext } from './deleteContext';
import Forms from './components/Forms';
import TodoList from './components/TodoList';



function App() {
  const [inputText, setInputText]=useState("");
  const [list, setList]=useState([]);
  const [option,setOption]=useState(null);
  const [del, setDelete]=useState(0);
  function  handleList(e) {
    e.preventDefault();
    if(inputText)
    {
      const data={
        text: inputText,
        date: new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear() + " | "+new Date().getHours()+":"+new Date().getMinutes()+"."+new Date().getSeconds(),
        stat:false,
        id:Math.round(Math.random()*1000),
        del:false
      };
      setList((prevList) => [...prevList,data]);
      setInputText("");
    }
  }

  function handleText(event) {
    setInputText(event.target.value);

  }

  function handleCheck(e) {
    const ch=e.target.checked;
    const id=e.target.id;
    const ind=list.findIndex(item=>item.id==id);
    let cpy=[...list];
    cpy[ind].stat=ch;
    setList(cpy);
  }

  function handleOption(e) {
    const opt=e.target.value;
    switch (opt) {
      case "uncompleted":
        setOption(false);
        break;
      case "completed":
        setOption(true);
        break;
      default:
        setOption(null);
        break;
    }
  }
  function handleDelete(e) {
    const id=parseInt(e.target.id);
    const ind=list.findIndex(item=>item.id==id);
    let cpy=[...list];
    cpy.splice(ind,1);
    console.log(id);
    setList(cpy);
    setDelete(id);
  }
  useEffect(()=>{

   
  },[option, del])
  return (
    <div className="App">
        <Forms handleText={handleText} handleList={handleList}  inputText={inputText} handleOption={handleOption}/>  
        <checkContext.Provider value={handleCheck}>
            <deleteContext.Provider value={handleDelete}>
              <TodoList list={list} option={option}/>

            </deleteContext.Provider>
        </checkContext.Provider>
    </div>
  );
}

export default App;
