let validate = {};
const validSecurity = ["None", "BPSS", "SC", "DV", "NPPV3"];
const validTech = ["DevOps", "Java", "API Development"];
const emailRegex = /@\w*\.com/;
const QAEmail = /@qa.com/;
const traineeEmail = /@academytrainee.com/;


var validTest = {
    "firstName": "Name",
    "surname": "Name",
    "gender": "Male",
    "university": "Uni",
    "trainingStart": "now",
    "trainingEnd": "later",
    "cohort": "Sep 2019",
    "technology": "DevOps",
    "businessEmail": "rana@academytrainee.com",
    "personalEmail": "rana@email.com",
    "mobile": "07710123456",
    "geoFlex": "Yes",
    "securityClearance": "SC",
    "employmentStatus": "Bench - Academy"

};

var invalidTest = {
    "firstName": "Name",
    "surname": "Name",
    "gender": "Flurple",
    "university": "Uni",
    "trainingStart": "now",
    "trainingEnd": "later",
    "cohort": "Sep 2019",
    "technology": "Js",
    "businessEmail": "rana@email.com",
    "personalEmail": "rana@email.com",
    "mobile": "07710123456",
    "geoFlex": "Maybe",
    "securityClearance": "BPSDGG",
    "employmentStatus": "Bench - Academy"

};

validator(validTest);
validator(invalidTest);


function validator(entry) {
    
    if (entry.gender !== "Male" && entry.gender !== "Female") {
        entry.gender = "Invalid";
    }
    if (entry.geoFlex !== "Yes" && entry.geoFlex !== "No") {
        entry.geoFlex = "Invalid";
    }
    if (!validSecurity.includes(entry.securityClearance)) {
        entry.securityClearance = "Invalid";
    }
    if (!validTech.includes(entry.technology)) {
        entry.technology = "Invalid";
    }
    emailValidate(entry);
    console.log(entry);
    //for testing purposes
}

function emailValidate(entry) {
    if (!emailRegex.test(entry.personalEmail)) {
        entry.personalEmail = "Invalid";
    }
    if (!QAEmail.test(entry.businessEmail) && !traineeEmail.test(entry.businessEmail)) {
        entry.businessEmail = "Invalid";
    }
}

function invalidCount(entry){
    
}


module.exports = validate;