import React,{useState} from 'react';
import {ImCheckboxUnchecked} from 'react-icons/im';
import {TiInputChecked} from 'react-icons/ti';
import {ImArrowRight, ImArrowLeft} from 'react-icons/im';
import Pawn from './Pawn';
import "./Home.css";
const Home = () => {
    const [options, setOptions] = useState({
        choice_blue:false,
        choice_yellow:false,
        choice_green:false,
        choice_red:false,
    });

    const [value, setValue] = useState(1)
   
    const handleCheck=(val)=>{
        const copy={...options};
        const tab=Object.entries(copy);
        let count=0;
        tab.forEach(item=>{
            if(item[1]==true)
                count++;
        })
        console.log(count);
        copy[val]=!copy[val];
        setOptions(copy)
        console.log(options);
    }
    const handleCount=(val)=>{
        if(value === 4 || value==1)
        {
            return;
        }
        if (val==='right')
            setValue(()=>value + 1 );
        else
        {
           setValue(()=> value - 1);

        }
    }

  return (
    <div className='home__container'>
        <div className="home__option">
            <div className="home__select">
                <h2>Select number of player</h2>
                <div className="select">
                    <ImArrowLeft onClick={()=>handleCount("left")}/>
                    <span className="select__val">{value}</span>
                    <ImArrowRight onClick={()=>handleCount('right')}/>
                </div>
            </div>
            <h2 className="home__title">Select your team</h2>
                <ul className="home__choice">
                    <li 
                    className="choice choice_green"  
                    onClick={()=>handleCheck("choice_green")}>
                        { options.choice_green ? 
                            <TiInputChecked fontSize={"1.8rem"}/>:
                            <ImCheckboxUnchecked/>
                        }
                        <Pawn color="green" />
                    </li>
                    <li className="choice choice_yellow"  onClick={()=>handleCheck('choice_yellow')}>
                        { options.choice_yellow ? 
                            <TiInputChecked fontSize={"1.8rem"}/>:
                            <ImCheckboxUnchecked/>
                        }

                        <Pawn color="yellow" />
                    </li>
                    <li className="choice choice_blue"  onClick={()=>handleCheck('choice_blue')}>
                        { options.choice_blue ? 
                            <TiInputChecked fontSize={"1.8rem"}/>:
                            <ImCheckboxUnchecked/>
                        }

                        <Pawn color="blue" />

                    </li>
                    <li className="choice choice_red"   onClick={()=>handleCheck('choice_red')}>
                        { options.choice_red ? 
                            <TiInputChecked fontSize={"1.8rem"}/>:
                            <ImCheckboxUnchecked />
                        }

                        <Pawn color="red" />

                    </li>
                </ul>
                <button className="choice_validate">Validate</button>
        </div>
    </div>
  )
}

export default Home