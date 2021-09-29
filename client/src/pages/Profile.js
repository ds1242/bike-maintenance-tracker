import React from 'react';
// import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries'

function Profile() {

    const { loading, data } = useQuery(QUERY_ME);

    const me = data?.me || {};
    // console.log(me);
    if(loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    )};


    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Card className="profile-card">
                        <Card.Img variant="top" src={me.userImage}/>
                        <Card.Body>
                            <Card.Title>{me.name}</Card.Title>
                            <Card.Text>{me.userBio}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Username: {me.username}</ListGroupItem>
                            <ListGroupItem>Email: {me.email}</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <Link to='/editprofile'>
                                <Button variant="primary">Edit Profile</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <h3>My Bikes: </h3>
            </Row>
                {me.bikes.length ? (
                <Row className="justify-content-center g-4"  id="bike-cards">
                        {me.bikes.map(bike => {
                            return(
                                <Col sm={4}>
                                    <Link to={`/mybikes/${bike._id}`} key={bike._id} >
                                        <Card key={bike._id} xs={3} lg={8}>
                                            <Card.Img src={bike.bikePhoto} />
                                            <Card.Body>
                                                    <Card.Title>{bike.bikeName}</Card.Title>
                                            </Card.Body>
                                        </Card> 
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                ) : (   
                    <h2>No bikes to view</h2>
                )}
        </Container>
    )
};


export default Profile;