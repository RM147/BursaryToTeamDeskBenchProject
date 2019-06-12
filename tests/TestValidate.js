let assert = require('assert');
let validate = require('../MongoDBListener/demo_mongodb_validation');

var validTest = {
    "firstName": "Name",
    "surname": "Name",
    "gender": "Male",
    "university": "Uni",
    "trainingStart": "now",
    "trainingEnd": "later",
    "cohort": "Sep 2019",
    "technology": "DevOps",
    "businessEmail": "rana@email.com",
    "personalEmail": "rana@email.com",
    "mobile": "07710123456",
    "geoFlex": "Yes",
    "securityClearance": "None",
    "employmentStatus": "Bench - Academy"

};

var invalidGender = {
    "firstName": "Name",
    "surname": "Name",
    "gender": "Male",
    "university": "Uni",
    "trainingStart": "now",
    "trainingEnd": "later",
    "cohort": "Sep 2019",
    "technology": "DevOps",
    "businessEmail": "rana@email.com",
    "personalEmail": "rana@email.com",
    "mobile": "07710123456",
    "geoFlex": "Yes",
    "securityClearance": "None",
    "employmentStatus": "Bench - Academy"

};

