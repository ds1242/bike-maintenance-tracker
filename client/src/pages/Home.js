import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';


const Home = () => {

    const loggedIn = Auth.loggedIn()
    const { loading, data } = useQuery(QUERY_ME);
    const meId = data?.me._id || {}
    console.log(meId)
    console.log(data?.me.bikes)

    if(loading) {
        return(
            <div>Loading...</div>
        )
    }
    
    if(loggedIn) {

        return (
            <div className="homeContainer">
               {data?.me.bikes.length ? (
                <Link to={`/mybikes/:${meId}`} >
                    <h3>Click here to view your bikes!</h3>
                </Link>

               ) : (
                   <h2>No bikes to view</h2>
               )} 
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