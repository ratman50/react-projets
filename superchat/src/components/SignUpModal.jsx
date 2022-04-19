import React, { useContext,useRef, useState } from 'react'
import { UserContext } from '../context/userContext';
import {useNavigate} from "react-router-dom";


const SignUpModal = () => {
    const {modalState, toggleModals, signUp}=useContext(UserContext);
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
        if(inputs.current[1].value.length < 6 || inputs.current[2].value.length < 6)
        {
            setValidation("6 characters min");
            return;
        }
        else if(inputs.current[1].value.length !== inputs.current[2].value.length)
        {
            setValidation("Password do not match");
            return;
        }
        try {
            await signUp(inputs.current[0].value, inputs.current[1].value);
            formRef.current.reset();
            setValidation("");
            navigate("/private/private-home");
            handleClose("close")
            // console.log(cred);
            // <Navigate/>
        } catch (error) {
            if(error.code==="auth/email-already-in-use")
            {
                setValidation("Email already use");
            }
            if(error.code=== "auth/invalid-email")
                setValidation("Email format invalid")
        }
    }
    const handleClose=()=>{
        toggleModals("close");
        setValidation("");
    }
  return (
    <>
        {modalState.signUpModal && (

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
                                        <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                                        <input onChange={()=>setValidation("")} ref={addInputs}type="email" required className="form-control" id="signUpEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signUpPwd" className='form-label'>Password</label>
                                        <input onChange={()=>setValidation("")} ref={addInputs}type="password" required className="form-control" id="signUpPwd" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="repeatPwd" className='form-label'>Repeat Password</label>
                                        <input onChange={()=>setValidation("")} ref={addInputs}type="password" required className="form-control" id="repeatPwd" />
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

export default SignUpModal