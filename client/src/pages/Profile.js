import React from 'react';
// import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries'

function Profile() {

    const { loading, data } = useQuery(QUERY_ME);

    const me = data?.me || {};
    // console.log(me);
    if(loading) {
        return <h3>Loading...</h3>
    };


    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <Card>
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
            <Row className="justify-content-center g-4" xs={1} md={2} id="bike-cards">
                {me.bikes.length ? (
                    <Col lg={3}>
                        {me.bikes.map(bike => {
                            return(
                                <Link to={`/mybikes/${bike._id}`} key={bike._id} >
                                    <Card key={bike._id} xs={3} lg={8}>
                                        <Card.Img src={bike.bikePhoto} />
                                        <Card.Body>
                                                <Card.Title>{bike.bikeName}</Card.Title>
                                        </Card.Body>
                                    </Card> 
                                </Link>
                            )
                        })}
                    </Col>
                ) : (   
                    <h2>No bikes to view</h2>
                )}
            </Row>
        </Container>
    )
};


export default Profile;