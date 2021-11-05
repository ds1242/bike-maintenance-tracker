import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { Card, Col, Row, Container, Button, Spinner, Carousel } from 'react-bootstrap';
import carouselimg1 from '../assets/home-photo-resize.jpg';
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
                <Carousel id='carousel' className="carousel-images">
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            id='carousel-img'
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
                            id='carousel-img'
                            src={carouselimg2}
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h3>Track Any of Your Bikes!</h3>
                            <p>Raod, Mountain, Gravel, Cyclocross, E-bikes!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            id='carousel-img'
                            src={carouselimg3}
                            alt="third slide"
                        />
                        <Carousel.Caption>
                            <h3>Click the buttons below to sign up or login!</h3>
                            <p>Sign up today and start tracking the maintenance for your bikes in one easy place!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                 </Carousel>   
                <Row className="justify-content-md-center" id='signup-buttons'>  
                    <Col lg={2}>
                    </Col>
                    <Col className="justify-content-end align-items-left" lg={4}>
                        <Link to={'/signup'} className='home-links'>
                            <Button>Click Here to Sign Up</Button>
                        </Link>
                    </Col>
                    <Col  lg={4}>
                        <Link to={'/login'}>
                            <Button>Click Here to Login</Button>
                        </Link>
                    </Col>
                    <Col lg={2}>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Home;