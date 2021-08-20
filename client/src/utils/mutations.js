import gql from 'graphql-tag';


export const CREATE_USER = gql`
    mutation AddUser($name: String!, $username: String!, $email: String!, $password: String!) {
        addUser(name: $name, username: $username, email: $email, password: $password) {
            token
            user {
                _id
                name
                username
                email            
            }
        }
    }
`;