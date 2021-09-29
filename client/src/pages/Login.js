import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth';
import { Button, Form, FormControl, Col, Row} from 'react-bootstrap'

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
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control className='form-input' name='email' type='email' id='email' placeholder='Email' value={formState.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control className='form-input' name='password' type='password' id='password' placeholder='Password' value={formState.password} onChange={handleChange} />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />{' '}
            </Form>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
        </div>
    )


}

export default Login;