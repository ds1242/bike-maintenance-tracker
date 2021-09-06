import React from 'react';
// import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={me.userImage}/>
            <Card.Body>
                <Card.Title>{me.name}</Card.Title>
                <Card.Text>{me.userBio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Card>
    )
};


export default Profile;