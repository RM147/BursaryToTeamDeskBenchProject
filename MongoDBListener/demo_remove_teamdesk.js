var axios = require('axios');

var authtoken = "D2726E2C4E584B93876110EDD0279FF8";

var maxRecords = 96;

function RemoveRecords() {
//DELETE



for (i = 95; i < maxRecords; i++)
{	
	console.log("https://www.teamdesk.net/secure/api/v2/66139/"
	+authtoken
	+"Account/delete.json?id="
	+"453dda424")
	
	axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
	+authtoken
	+"Account/delete.json?id="
	+"453dda424")
  
  
	.then( res => {let result5 = res.data;console.log(result5);})
	.catch( (e) => {  console.log(e.response); });
	console.log("Removed Record At Id " + i)
}
}

RemoveRecords();