import React, { useState }  from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Signupstyling.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import './Signup';
import './Home';
import { auth } from "../firebase";

function Signin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.password) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/Home");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg("User does not exist!");
        });
    };   
        return (
        <div className='signupmain'>
            <div className='signupbox'>
                <div className='ui container'>
                    <div className='ui main'>
                            <h2>Login</h2>
                            <form className='ui form'>

                                <div className='field'>
                                    <label>Email</label>
                                    <input 
                                        type='text' 
                                        name='email' 
                                        placeholder='Email' 
                                        onChange={(event) =>
                                            setValues((prev) => ({ ...prev, email: event.target.value }))
                                          }
                                    />
                                </div>
                                <div className='field'>
                                    <label>Password</label>
                                    <input 
                                        type='text' 
                                        name='password' 
                                        placeholder='Password' 
                                        onChange={(event) =>
                                            setValues((prev) => ({ ...prev, password: event.target.value }))
                                          }
                                    />
                                </div>

                                <div className='field' >
                                <b>{errorMsg}</b>
                                </div>
                                
                                <button className='ui button blue' type='submit' disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                                <div className='field'>
                                    <label>Don't have an account?</label>
                                    <Link to='/Signup'> Click to Sign Up! </Link>
                                    
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            <div className='signuplogo'>
                <img src='https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png' alt='logo' width='100px' height ='100px'  />            </div>
        </div>

        );
    
  }

export default Signin;