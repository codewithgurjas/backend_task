const express = require('express');
const router = express.Router();

const personController = require('../controllers/personController');

// Create a person using their general information
router.post('/person/general', personController.createUsingGeneralInfo);

// Add qualifications to a person
router.put('/person/qualifications', personController.addQualifications);

// Add personal information to a person
router.put('/person/personal-info', personController.addPersonalInfo);

// Get all details of person with email
router.get('/person/:email', personController.getPersonByEmail);

// Get general information of a person by id or email
router.get('/person/general-info/:_id?/:email?', personController.getGeneralInfo);

// Get educational information of a person by id or email
router.get('/person/educational-info/:_id?/:email?', personController.getEducationalInfo);

// Get personal information of a person by id or email
router.get('/person/personal-info/:id([a-zA-Z0-9]+)?/:email([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?', personController.getPersonalInfo);

module.exports = router;
 