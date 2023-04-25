const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    parentAge: {
        type: Number,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    courseName: {
        type : String,
    },
    courseCompletedYear: {
        type: Number,
    },
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