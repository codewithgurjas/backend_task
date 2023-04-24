const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    parentage: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    qualifications: [String],
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    dob: {
        type: Date
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;