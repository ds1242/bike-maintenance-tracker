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
            type: String,
            default: 0
        },
        cassetteMake: {
            type: String
        },
        cassetteModel: {
            type: String
        },
        cassetteMiles: {
            type: String,
            default: 0
        },
        chainringMake: {
            type: String
        },
        chainringModel: {
            type: String
        },
        chainringMiles: {
            type: String,
            default: 0
        },
        chainName: {
            type: String
        },
        chainMiles: {
            type: String,
            default: 0
        },
        shockMake: {
            type: String
        },
        shockModel: {
            type: String
        },
        shockHours: {
            type: String,
            default: 0
            
        },
        frontDeraileurMake: {
            type: String
        },
        frontDeraileurModel: {
            type: String
        },
        frontDeraileurMiles: {
            type: String,
            default: 0
        },
        rearDeraileurMake: {
            type: String
        },
        rearDeraileurModel: {
            type: String
        },
        rearDeraileurMiles: {
            type: String,
            default: 0
        },
        bikePhoto: {
            type: String
        },
        user_id: {
            type: String
        }        
    }
);

const Bike = model('Bike', bikeSchema);

module.exports = Bike;