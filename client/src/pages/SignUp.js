import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../utils/mutations';
import { Button } from 'react-bootstrap';
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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <input type='email' name='email' placeholder="Email" value={formState.email} onChange={handleChange} />
                <input type='name' name='name' placeholder='Name' value={formState.name} onChange={handleChange} />
                <input type='username' name='username' placeholder='Username' value={formState.username} onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' value={formState.password} onChange={handleChange} />
                <Button as='input' type='submit' value='Sign Up!' />{' '}
            </form>
            {error ? (
                <div>
                    <p className='error-text'>Something went wrong signing up</p>
                </div>
            ) : null}
            <Link to={'/login'}>Click here to login if already a user</Link>
        </div>
    )
};

export default SignUp;