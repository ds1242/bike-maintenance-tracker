import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Nav.css';

function Nav() {
    function showNav() {
        if(Auth.loggedIn()) {
            return (
                <li className='navActive'>
                    <Link to={'/profile'} className='nav-link active'>
                        <h3>Profile</h3>
                    </Link>
                </li>
            )
        } else {
            return (
                <li className='navActive'>
                    <Link to={'/profile'} className='nav-link active'>
                        <h3>Profile</h3>
                    </Link>
                </li>
            )
        }
    }
    
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className="container-fluid" >
                <Link to={'/'} className="navbar-brand">
                    <h1>Bike Maintenance Tracker</h1>
                </Link>
                <ul className="navbar-nav">
                    {showNav()}
                </ul>
            </div>
        </nav>
    )
};

export default Nav;