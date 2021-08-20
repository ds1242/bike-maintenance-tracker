const { Schema, model } = require('mongoose');


const bikeSchema = new Schema(
    {
        make: {
            type: String,
            required: 'Please enter a make',
        },
        model: {
            type: String,
            required: 'Please enter a model'
        },
        year: {
            type: String
        },
        bikeType: {
            type: String
        },
        forkMake: {
            type: String
        },
        forkModel: {
            type: String
        },
        forkHours: {
            type: String
        },
        cassetteMake: {
            type: String
        },
        cassetteModel: {
            type: String
        },
        cassetteMiles: {
            type: String
        },
        chainringMake: {
            type: String
        },
        chainringModel: {
            type: String
        },
        chainringMiles: {
            type: String
        },
        chainName: {
            type: String
        },
        chainMiles: {
            type: String
        },
        shockMake: {
            type: String
        },
        shockModel: {
            type: String
        },
        shockHours: {
            type: String
        },
        frontDeraileurMake: {
            type: String
        },
        frontDeraileurModel: {
            type: String
        },
        frontDeraileurMiles: {
            type: String
        },
        rearDeraileurMake: {
            type: String
        },
        rearDeraileurModel: {
            type: String
        },
        rearDeraileurMiles: {
            type: String
        },
        bikePhoto: {
            type: String
        }        
    }
);

const Bike = model('Bike', bikeSchema);

module.exports = Bike;