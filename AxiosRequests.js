import axios from 'axios';

var authtoken = "D2726E2C4E584B93876110EDD0279FF8";

//CREATE

axios.post("https://www.teamdesk.net/secure/api/v2/66139/"
+authtoken
+"/Account/create.json",
{
    "@row.id": 9,
    "Id": "9",
    "Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
    "_id": "9",
    "name": "Joe",
    "address": "Somewhere"
  }
  //placeholder request body - change for output of listener?

)

//UPDATE - just a post request that overwrites details that are different
//e.g. excluded address in request body, but address remains the same as it was in the table

axios.post("https://www.teamdesk.net/secure/api/v2/66139/"
+authtoken
+"/Account/update.json",
{
    "@row.id": 9,
    "Id": "9",
    "Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
    "_id": "9",
    "name": "Steve"
  }
)
  //placeholder request body - change for output of listener?

  //DELETE

  axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
  +authtoken
  +"Account/delete.json?id="
  +"12") //number has to be @row_id not sure how you would deal with that on the Mongo side.