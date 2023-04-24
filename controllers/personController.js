const Person = require('../models/person');

exports.createUsingGeneralInfo = async (req, res) => {
    try {
        const person = new Person({
            name: req.body.name,
            parentage: req.body.parentage,
            age: req.body.age,
            email: req.body.email
        });

        await person.save();
        res.status(201).send({ message: 'Person created successfully with y.' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.addQualifications = async (req, res) => {
    try {
        const { email } = req.body;
        const qualifications = req.body.qualifications;

        const person = await Person.findOneAndUpdate({ email }, { qualifications });

        if (!person) {
            res.status(404).send({ message: 'Person not found.' });
        } else {
            res.status(200).send({ message: 'Qualifications added successfully.' });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.addPersonalInfo = async (req, res) => {
    try {
        const { email } = req.body;
        const gender = req.body.gender;
        const dob = req.body.dob;

        const person = await Person.findOneAndUpdate({ email }, { gender, dob });

        if (!person) {
            res.status(404).send({ message: 'Person not found.' });
        } else {
            res.status(200).send({ message: 'Personal information added successfully.' });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// getbyemail
exports.getPersonByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        const person = await Person.findOne({ email });

        if (!person) {
            res.status(404).send({ message: 'Person not found.' });
        } else {
            res.status(200).send(person);
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getGeneralInfo = async (req, res) => {
    try {
        const { id, email } = req.params;
        let query = {};

        if (id) {
            query = { id };
        } else if (email) {
            query = { email:email };
        }
        console.log("query",query);
        const person = await Person.findOne(query, { name: 1, parentage: 1, age: 1, email: 1 });

        if (!person) {
            res.status(404).send({ message: 'Person not found.' });
        } else {
            res.status(200).send(person);
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getEducationalInfo = async (req, res) => {
    try {
        const { id, email } = req.params;
        let query = {};

        if (id) {
            query = { id };
        } else if (email) {
            query = { email:email };
        }

        const person = await Person.findOne(query, { qualifications: 1 });

        if (!person) {
            res.status(404).send({ message: 'Person not found.' });
        } else {
            res.status(200).send(person);
        }
    } catch (err) {
        console.log("hello");
        res.status(500).send({ message: err.message });
    }
};

exports.getPersonalInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const email = req.params.email;
        let person;
        console.log("email---------------",email);
        console.log("id-------------",id)


        if (id) {
            person = await Person.findById(id);
        } else if (email) {

            person = await Person.findOne({ email: email });

        } else {
            return res.status(400).json({ message: 'Please provide either an id or email' });
        }

        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        const personalInfo = {
            gender: person.gender,
            dob: person.dob
        };

        res.status(200).json(personalInfo);
    } catch (error) {
        console.log("hellooo----------------------");
        res.status(500).json({ message: 'Server Error' });
    }
};
