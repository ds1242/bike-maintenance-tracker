import React from 'react';
// import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries'

function Profile() {

    const { loading, data } = useQuery(QUERY_ME);

    const me = data?.me || {};
    console.log(me);
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
                            <Button variant="primary">Edit Profile</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};


export default Profile;