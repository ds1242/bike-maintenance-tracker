const { Schema, model, mongo } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {   
        name: {
            type: String
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minLength: [6, 'Password must be longer than six characters']
        },
        userImage: {
            type: String,
            default: 'https://user-images.githubusercontent.com/79877350/129462845-207566b3-125a-42dd-88ba-f518b41a4c3b.png'
        },
        userBio: {
            type: String,
            maxLength: 280
        },
        bikes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Bike'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);
userSchema.virtual('friendCount').get(function() {
    return this.friends.minLength;
})
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;