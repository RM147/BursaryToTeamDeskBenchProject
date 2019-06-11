var validTest = {
  "firstName": "Name",
  "surname": "Name",
  "Gender":"Male",
  "University":"Uni",
  "Training Start":"now",
  "Training End": "later",
  "Cohort":"Sep 2019",
  "Technology":"DevOps",
  "Email":"rana@email.com",
  "Mobile":"07710123456",
  "GeoFlex":"Yes",
  "SecurityClearance":"None",
  "EmploymentStatus":"Bench - Academy"

};

var invalidTest = {
    "firstName": "Name",
    "surname": "Name",
    "Gender":"Flurple",
    "University":"Uni",
    "Training Start":"now",
    "Training End": "later",
    "Cohort":"Sep 2019",
    "Technology":"DevOps",
    "Email":"rana@email.com",
    "Mobile":"07710123456",
    "GeoFlex":"Maybe",
    "SecurityClearance":"Foreign Spy",
    "EmploymentStatus":"Bench - Academy"
  
  };

validator(validTest);
validator(invalidTest);

function validator(entry){
    if(entry.Gender!=="Male" && entry.Gender!=="Female"){
        entry.Gender="Invalid";
    }
    if(entry.GeoFlex!=="Yes" && entry.GeoFlex!=="No"){
        entry.GeoFlex="Invalid";
    }
    if(entry.SecurityClearance!=="None" && entry.SecurityClearance!=="BPSS"&&
    entry.SecurityClearance!=="SC" && entry.SecurityClearance!=="DV" &&
    entry.SecurityClearance!=="NPPV3"){
        entry.SecurityClearance="Invalid";
    }
    console.log(entry);
}