import React, { useContext,useRef, useState } from 'react'
import { UserContext } from '../context/userContext';
import {useNavigate} from "react-router-dom";


const SignInModal = () => {
    const {modalState, toggleModals, signIn}=useContext(UserContext);
    const navigate=useNavigate()
    const [validation, setValidation] = useState("");
    const inputs=useRef([]);
    const formRef=useRef();
    const addInputs=el=>{
        if (el && !inputs.current.includes(el))
            inputs.current.push(el);
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            await signIn(inputs.current[0].value, inputs.current[1].value);
            console.log();
            formRef.current.reset();
            setValidation("");
            navigate("/private/private-home");
            handleClose("close")
        } catch  {
           setValidation("Wopsy, email and/or password incorrect ");
        }
    }
    const handleClose=()=>{
        toggleModals("close");
        setValidation("");
    }
  return (
    <>
        {modalState.signInModal && (

        <div className="position-fixed top-0 vw-100 vh-100">
            <div className="w-100 h-100 bg-dark bg-opacity-75" onClick={()=>handleClose()}>
            </div>

                <div className="position-absolute top-50 start-50 translate-middle" style={{maxWidth:"500px"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button className="btn-close" onClick={()=>handleClose()}></button>

                            </div>
                            <div className="modal-body">
                                <form  className="sign-up-form" onSubmit={handleSubmit} ref={formRef}>
                                    <div className="mb-3">
                                        <label htmlFor="SignInEmail" className='form-label'>Email adress</label>
                                        <input  ref={addInputs}type="email" required className="form-control" id="SignInEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="SignInPwd" className='form-label'>Password</label>
                                        <input  ref={addInputs}type="password" required className="form-control" id="SignInPwd" />
                                        <div className="text-danger mt-1">{validation}</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        )
        }
    </>
  )
}

export default SignInModal