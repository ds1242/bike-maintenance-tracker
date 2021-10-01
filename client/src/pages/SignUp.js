import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../utils/mutations';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Auth from '../utils/auth';


function SignUp() {
    const [formState, setFormState] = useState({ email: '', name: '', username: '', password: '' });
    const [addUser, { error }]  = useMutation(CREATE_USER);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Sign Up</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control className='form-input' name='email' type='email' placeholder='Enter Your Email' value={formState.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control className='form-input' name='name' type='text' placeholder='Enter Your Name' value={formState.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control className='form-input' name='username' type='text' placeholder='Create a Username' value={formState.username} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control className='form-input' name='password' type='password' placeholder='Create a Password' value={formState.password} onChange={handleChange} />
                        </Form.Group>
                        <Button as='input' type='submit' value='Sign Up!' />{' '}
                    </Form>
                </Col>
            </Row>
            {error ? (
                <div>
                    <p className='error-text'>Something went wrong signing up</p>
                </div>
            ) : null}
            <Link to={'/login'}>Click here to login if already a user</Link>
        </Container>
    )
};

export default SignUp;