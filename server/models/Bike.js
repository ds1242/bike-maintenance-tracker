const { Schema, model, mongo } = require('mongoose');
const bcrypt = require('bcrypt');

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
        }
        
    }
)