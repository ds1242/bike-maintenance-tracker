

export const QUERY_ME = gql`
    me {
        _id
        name
        username
        email
        userImage
        userBio
        bikes {
            _id
        }
        friends {
            _id
        }
    }
`;

export const QUERY_ALL_USERS = gql`
    query queryUsers {
        users {
            _id
            name
            username
            email
            userImage
            userBio
            bikes {
                _id
            }
            friends {
                _id
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query querySingleUser($_id: ID) {
        user(_id: $_id) {
        _id
        name
        username
        email
        userImage
        userBio
        bikes {
            _id
        }
        friends {
            _id
        }
    }
  }
`;