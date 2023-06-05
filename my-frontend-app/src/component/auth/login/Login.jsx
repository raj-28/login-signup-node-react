import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, SetPassword] = useState('');

const handleSubmit=async (e)=>{
    e.preventDefault();
    // our login logic
    // Make a POST request to the backendAPI to perform login
    try{
        const response = await fetch('/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({email,password}),
        });
        if(response.ok){
            // User logged in Successfully 
            alert('User logged in successfully');
            navigate('/welcome'); //Redirect to the Welcome/home page
        }else{
            // handle login error
            const data = await response.json();
            alert(data.message);
        }
    }catch(error){
        console.log('Error',error);
        alert('An error occured. please try again');
    }
}
    
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
export default Login;