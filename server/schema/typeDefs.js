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
        chainMake: String
        chainModel: String
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
        user_id: String
        bikeName: String
    }
    type Query {
        me: User
        users: [User]
        user(_id: ID): User
        bikes: [Bike]
        bike(_id: ID): Bike
        userBikes(user_id: String): [Bike]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(name: String!, username: String!, email: String!, userImage: String, userBio: String, password: String!): Auth
        updateUser(name: String, username: String, email: String, userImage: String, userBio: String, password: String): User
        addBike(make: String!, model: String!, year: String, bikeType: String, forkMake: String, forkModel: String, forkHours: String, cassetteMake: String, cassetteModel: String, cassetteMiles: String, chainringMake: String, chainringModel: String, chainringMiles: String, chainMake:String, chainModel: String, chainMiles: String, shockMake: String, shockModel: String, shockHours: String, frontDeraileurMake: String, frontDeraileurModel: String, frontDeraileurMiles: String, rearDeraileurMake: String, rearDeraileurModel: String, rearDeraileurMiles: String, bikePhoto: String, user_id: String, bikeName: String): Bike
        updateBike(_id:ID, make: String, model: String, year: String, bikeType: String, forkMake: String, forkModel: String, forkHours: String, cassetteMake: String, cassetteModel: String, cassetteMiles: String, chainringMake: String, chainringModel: String, chainringMiles: String, chainMake:String, chainModel: String, chainMiles: String, shockMake: String, shockModel: String, shockHours: String, frontDeraileurMake: String, frontDeraileurModel: String, frontDeraileurMiles: String, rearDeraileurMake: String, rearDeraileurModel: String, rearDeraileurMiles: String, bikePhoto: String, user_id: String, bikeName: String): Bike
    }
`;

module.exports = typeDefs;