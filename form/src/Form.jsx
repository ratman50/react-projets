import "./Form.css";
import { useState } from "react";
export default function Form() {
    let [values,setValue]=useState({
        firstName:"",
        lastName:"",
        email:""
    });
    const [submitted, setSubmitted]=useState(false);
    const [valid,setValid]=useState(false);
    const handleValid=()=>
    {
        !values.email || !values.firstName || !values.email ?setValid(false):setValid(true);

    }
    const handleChangeFirstName=(evnt)=>{
        setValue({...values,firstName:evnt.target.value});
       
    }
    const handleChangeLastName=(evnt)=>{
        setValue({...values,lastName:evnt.target.value});
    }
    const handleChangeEmail=(evnt)=>{
        setValue({...values,email:evnt.target.value});
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        handleValid();
        setSubmitted(true);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        {valid && <div className="success-message" style={{color:"white",backgroundColor:"blue",padding:".4em"}}>Success! Thanks for your register</div>
        }
        <input type="text" placeholder="First Name" onChange={handleChangeFirstName} />
        {submitted && !values.firstName ? <span style={{color:"red"}}>Please enter a first name</span> :null}
        <input type="text" placeholder="Last Name" onChange={handleChangeLastName} />
        {submitted && !values.lastName && <span style={{color:"red"}}>Please enter a last name</span>}

        <input type="email" placeholder="Email" onChange={handleChangeEmail} />
        {submitted && !values.email && <span style={{color:"red"}}>Please enter a mail address</span>}

        <button type="submit" >Register</button>
    </form>
    )
}
