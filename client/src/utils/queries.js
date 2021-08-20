

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