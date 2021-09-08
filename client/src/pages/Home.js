import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { Card, Col, Row } from 'react-bootstrap';


const Home = () => {

    const loggedIn = Auth.loggedIn()
    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return(
            <h2>Loading...</h2>
        )
    }
    
    if(loggedIn) {

        return (
            <div className="homeContainer">
               {data.me.bikes.length ? (
                   <Row>
                   {data.me?.bikes.map(bike => {
                       return(
                           <Col md={3}>
                            <Link to={`/mybikes/${bike._id}`} key={bike._id}>
                                <Card>
                                    <Card.Img variant="top" src={bike.bikeImage} />
                                <h3>{bike.bikeName}</h3>

                                </Card>
                            </Link>
                           </Col>
                   )})}
                </Row>
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