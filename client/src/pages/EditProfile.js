import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries'
import { UPDATE_USER } from '../utils/mutations';

const EditProfile = () => {

    const { loading, data } = useQuery(QUERY_ME)

    const { name, username, email, userBio, userImage } = data?.me || {}
    const [userData, setUserData] = useState({
        name: name,
        username: username,
        email: email,
        userBio: userBio,
        userImage: userImage
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    if(loading) {
        return(
            <h2>Loading...</h2>
        )
    }
    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={userData.username} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={userData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User Bio</Form.Label>
                    <Form.Control type="text" name="username" value={userData.userBio} onChange={handleChange} />
                </Form.Group>
            </Form>
        </Container>
    )
};

export default EditProfile;