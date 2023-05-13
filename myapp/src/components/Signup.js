import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Signupstyling.css';
import './Signin';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

function Signup(){
        const navigate = useNavigate();
        const [values, setValues] = React.useState({
            name: "",
            email: "",
            password: "",


        });

        const [errorMsg, setErrorMsg] = React.useState("");
        const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false);
        
        
        const handleSubmission = () => {
            if(!values.name || !values.email || !values.password){
                setErrorMsg("Please fill all the fields!");
                return;
            }
            setErrorMsg("");

            setSubmitButtonDisabled(true);
            
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async(res)=> {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/Home");
            })
            .catch((err)=> {
                setSubmitButtonDisabled(false);
                setErrorMsg("User already exists!");
                console.log("error", err);
            });
        };
        return (
        <div className='signupmain'>
            <div className='signupbox'>
                <div className='ui container'>
                    <div className='ui main'>
                            <h2>Sign Up</h2>
                            <form className='ui form'>
                                <div className='field'>
                                    <label>Username</label>
                                    <input 
                                        type='text' 
                                        name='username' 
                                        placeholder='Username'
                                        onChange={(event)=>
                                            setValues((prev)=> ({...prev, name: event.target.value}))
                                        }
                                    />
                                </div>
                                <div className='field'>
                                    <label>Email</label>
                                    <input 
                                        type='text' 
                                        name='email' 
                                        placeholder='Email' 
                                        onChange={(event)=>
                                            setValues((prev)=> ({...prev, email: event.target.value}))
                                        }
                                    />
                                </div>
                                <div className='field'>
                                    <label>Password</label>
                                    <input 
                                        type='text' 
                                        name='password' 
                                        placeholder='Password'  
                                        onChange={(event)=>
                                         setValues((prev)=> ({...prev, password: event.target.value}))
                                        }
                                    />

                                </div>
                                <div className='field' >
                                <b>{errorMsg}</b>
                                </div>
                                
                                <button 
                                    className='ui button blue' 
                                    type='submit' 
                                    onClick={handleSubmission} 
                                    disabled={submitButtonDisabled}
                                >Sign Up
                                </button>

                                <div className='field'>
                                    <label>Already Registered? </label>
                                    <Link to='/Signin'> Click to Login! </Link>
                                    
                                </div>
                                
                            </form>
                            
                    </div>
                </div>
            </div>
            <div className='signuplogo'>
                <img src='https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png' alt='logo' width='100px' height ='100px' />            </div>
        </div>

        );
    }
  

export default Signup;