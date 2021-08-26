import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Nav.css';

function Nav() {  
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
        function showNav() {
        if(Auth.loggedIn()) {
            return (
                <ul className="navbar-nav">
                    <li className='navActive'>
                        <Link to={'/profile'} className='nav-link active'>
                            <h3>Profile</h3>
                        </Link>
                    </li>
                    <li className='navActive' onClick={logout}>
                        <Link to={'/'} className='nav-link active'>
                            <h3>Logout</h3>
                        </Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <li className='navActive'>
                        <Link to={'/signup'} className='nav-link active'>
                            <h3>SignUp</h3>
                        </Link>
                    </li>
                    <li className='navActive'>
                        <Link to={'/login'} className='nav-link active'>
                            <h3>Login</h3>
                        </Link>
                    </li>
                </ul>
            )
        }
    }
    
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className="container-fluid" >
                <Link to={'/'} className="navbar-brand">
                    <h1>Bike Maintenance Tracker</h1>
                </Link>                
                {showNav()}                
            </div>
        </nav>
    )
};

export default Nav;