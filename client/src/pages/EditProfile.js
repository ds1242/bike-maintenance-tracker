import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';
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
        <h2>Edit Profile</h2>
    )
};

export default EditProfile;