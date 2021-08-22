

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

export const QUERY_SINGLE_BIKE = gql`
    query getSingleBike($_id: ID) {
        bike(_id: $_id) {
        _id
        make
        model
        year
        bikeType
        forkMake
        forkModel
        forkHours
        cassetteMake
        cassetteModel
        cassetteMiles
        chainringMake
        chainringModel
        chainringMiles
        chainName
        chainMiles
        shockMake
        shockModel
        shockHours
        frontDeraileurMake
        frontDeraileurModel
        frontDeraileurModel
        frontDeraileurMiles
        rearDeraileurMake
        rearDeraileurModel
        rearDeraileurMiles
        bikePhoto    
        }
    }
`;