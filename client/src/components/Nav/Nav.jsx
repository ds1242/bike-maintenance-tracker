import React from 'react';
// import Auth from '../../utils/auth';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Nav() {

    
    return (
        <nav className='navbar navbar-expand-sm'>
            <div className="containerfluid" >
                <Link to={'/'}>
                    <Button variant="primary">Primary</Button>{' '}
                </Link>
            </div>
        </nav>
    )
};

export default Nav;