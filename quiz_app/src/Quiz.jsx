import question from "./data";
import Question from "./Question";
import QuestionRow from './QuestionRow';
import { useState } from "react";
import "./Quiz.css"; 
export default function Quiz() {
    let [change,setChange]=useState({
      index:0,
      value:"",
    });
    let [res,setRest]=useState(0)
    
    const handleClick=(event)=>{
      if(event.target.textContent===question[change.index].answer)
      {
        setRest(prevRest=>prevRest+1)
      }
      setChange({...change,index:change.index+1,value:event.target.textContent});
    }
    const ind=change.index;    
    let options;
    var qst;
    let rows=[];
    if(ind<question.length)
    {

      options=question[ind].options;
      var {qst}=question[ind];
      options.forEach(item => {
          rows.push(<QuestionRow opt={item} handleClick={handleClick} key={`${question[ind]}-${item}`}/>);
      });
    }
  return (
    <div className="quiz">
        {ind < question.length ?
            <>
                <header>
                <h1>Question {`${ind+1}`}<span style={{fontSize:"1.2rem"}}>{`/${question.length}`}</span></h1>
                <Question quest={qst}/>

                </header>
                <div className="option-group">
                  {rows}
                </div>
            </>
            :
            <div className="Total">Vous avez eu un résutat de {(res/question.length)*100} %</div>
        }
        </div>
  )
}
