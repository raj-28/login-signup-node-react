import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');

    // new code start
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     const { email, password } = event.target.elements;
    
    //     const url = `/api/auth/signup`;
    
    //     const body = {
    //         email,
    //         password,
    //     };
    
    //     fetch(url, {
    //         method: "POST",
    //         body: JSON.stringify(body),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then((response) => {
    //         if (response.status === 201) {
    //             // Redirect the user to the home page.
    //             window.location.href = "/";
    //         } else {
    //             // Display an error message.
    //             alert("There was an error signing up. Please try again.");
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };
    // end

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Make a Post request to the backend API to register the user
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (response.ok) {
                // User Registered Successfully
                alert('User registered Successfully');
                history('/login'); // Redirect to the login page
            } else {
                // Handle registration error\
                const data = await response.text();
                try{
                    const error=JSON.parse(data)
                    alert(error.message);

                }catch(err){
                    console.error('Error:',err)
                    alert("An Error occured. Please try again");

                }
            }
        } catch (error) {
            console.log('Error:', error);
            alert('An error occured. Please Try Again')
        }
    }

    return (
        <div className='signup-containert'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => SetPassword(e.target.value)} />
                <button type='submit'>Signup</button>

            </form>
        </div>
    )
}
export default Signup