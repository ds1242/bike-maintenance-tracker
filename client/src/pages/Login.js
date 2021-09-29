import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth';
import { Button, Form, FormControl, Col, Row, Container} from 'react-bootstrap'

const Login = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [Login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await Login({
                variables: { ...formState }
            });
            const token = data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Login</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control className='form-input' name='email' type='email' placeholder='Email' value={formState.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control className='form-input' name='password' type='password' placeholder='Password' value={formState.password} onChange={handleChange} />
                        </Form.Group>
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form>
                </Col>
            </Row>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
        </Container>
    )


}

export default Login;