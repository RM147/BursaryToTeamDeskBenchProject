var axios = require('axios');

var authtoken = "D2726E2C4E584B93876110EDD0279FF8";

var maxRecords = 96;

function UpdateRecords() {

axios.post("https://www.teamdesk.net/secure/api/v2/66139/"
+authtoken
+"/Account/update.json",
{
    "Id": "5cf03dfa779d5a345439b5c9",
    "Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
    "_id": "5cf03dfa779d5a345439b5c9",
    "name": "GREG",
  }
).then( res => {let result5 = res.data;console.log(result5);})
	.catch( (e) => {  console.log(e.response); });

}
UpdateRecords();

