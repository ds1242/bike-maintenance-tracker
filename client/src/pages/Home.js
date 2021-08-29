import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_SINGLE_USER_BIKES, QUERY_ME } from '../utils/queries';


const Home = () => {

    const loggedIn = Auth.loggedIn()


    if(loggedIn) {
        return (
            <div className="homeContainer">
                Logged In!
            </div>
        )
    } else {
    return (
        <div className="homeContainer">
            <Link to={'/signup'} className='home-links'>
                <h3>Click Here to Sign Up</h3>
            </Link>
            <Link to={'/login'}>
                <h3>Already a member? Click Here to Login</h3>
            </Link>
        </div>
    );
    }
};

export default Home;