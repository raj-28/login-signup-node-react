import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>Logo</div>
        <div className='navbar-links'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    </nav>
  )
}
