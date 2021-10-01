import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { Card, Col, Row, Container, Button, Spinner, Carousel } from 'react-bootstrap';
import carouselimg1 from '../assets/home-photo.jpg';
import carouselimg2 from '../assets/resizeimg2.jpg';
import carouselimg3 from '../assets/resizeimg3.jpg';


const Home = () => {

    const loggedIn = Auth.loggedIn()

    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
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
            <Container fluid className="homeContainer">
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={carouselimg1}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Bike Tracker</h3>
                            <p>Sign up today and start tracking the maintenance for your bikes in one easy place!</p>
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={carouselimg2}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Bike Tracker</h3>
                            <p>Sign up today and start tracking the maintenance for your bikes in one easy place!</p>
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={carouselimg2}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Bike Tracker</h3>
                            <p>Sign up today and start tracking the maintenance for your bikes in one easy place!</p>
                        </Carousel.Caption>


                    </Carousel.Item>
                 </Carousel>   
                <Row>

                    <Link to={'/signup'} className='home-links'>
                        <h3>Click Here to Sign Up</h3>
                    </Link>
                    <Link to={'/login'}>
                        <h3>Already a member? Click Here to Login</h3>
                    </Link>
                </Row>
            </Container>
        );
    }
};

export default Home;