import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';


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
            <Container fluid='md' className="homeContainer">
                <Row className="justify-content-md-center g-5" id='add-ride-row' >
                    <Link to={`/addbike`} className="add-bike">
                        <Button variant="primary" size="lg" active>Add Bike</Button>{' '}
                    </Link>
                </Row>
               {data.me.bikes.length ? (
                   <Row className="justify-content-md-center g-4">
                   {data.me?.bikes.map(bike => {
                       return(
                           <Col md={3} key={bike._id}>
                            <Link to={`/mybikes/${bike._id}`} key={bike._id} id='card-title'>
                                <Card key={bike._id}>
                                    <Card.Img variant="top" src={bike.bikePhoto} />
                                    <Card.Title key={bike._id} >{bike.bikeName}</Card.Title>
                                </Card>
                            </Link>
                           </Col>
                   )})}
                </Row>
               ) : (
                   <h2>No bikes to view</h2>
               )} 
            </Container>
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