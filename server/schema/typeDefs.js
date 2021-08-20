const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        name: String
        username: String
        email: String
        userImage: String
        userBio: String
        bikes: [Bike]
        friends: [User]
    }
    type Bike {
        _id: ID
        make: String
        model: String
        year: String
        bikeType: String
        forkMake: String
        forkModel: String
        forkHours: String
        cassetteMake: String
        cassetteModel: String
        cassetteMiles: String
        chainringMake: String
        chainringModel: String
        chainringMiles: String
        chainName: String
        chainMiles: String
        shockMake: String
        shockModel: String
        shockHours: String
        frontDeraileurMake: String
        frontDeraileurModel: String
        frontDeraileurMiles: String
        rearDeraileurMake: String
        rearDeraileurModel: String
        rearDeraileurMiles: String
        bikePhoto: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        bikes:[Bike]
    }
    type Mutation {
        addUser(name: String!, username: String!, email: String!, userImage: String, userBio: String: password: String!): User
        
    }
`;

module.exports = typeDefs;