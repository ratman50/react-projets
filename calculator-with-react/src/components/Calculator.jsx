import {React,useState} from 'react'
import ButtonGroup from './ButtonGroup';
import "./Calculator.css";
import ContextButton from './ContextButton';
const Calculator = () => {
  const [expres, setExpres]=useState({exp:"",res:""});
  function handleExpress(e) {
    const val=e.target.value;
    const id=e.target.id;
    const {exp,res}=expres;
    const update={
      exp: exp+""+val,
  
    }
    if(id==3 || id==7 || id==11 || id==15)
        if(exp)
        update.exp=eval(exp)+""+val;
        else
        update.exp=""
    setExpres({...update});
  }
  function handleClear() {
    const clear={
      exp:"",res:""
    }
    setExpres({...clear})
  }
  function evalExpress() {
    const exp=expres.exp;
    const update={
      res:exp+"="+eval(exp),
      exp:exp,
    }
    setExpres({...update});
  }
  
  return (
    <form className='calculator' >
        <div className="screen" >{expres.exp}</div>
        <div className="result">{expres.res}</div>
        <ContextButton.Provider value={{handleExpress,evalExpress}}>
            <ButtonGroup/>
        </ContextButton.Provider>
        <button type='button' onClick={handleClear} className='btn__clear'>clear</button>
        {/* <button type='button'  className='btn_equal' onClick={evalExpress}>=</button> */}
    </form>
  )
}

export default Calculator