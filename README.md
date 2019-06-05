# BursaryToTeamDeskBenchProject feature/encryption

# Purpose 

This features uses cryptoJS to encrpyt information being entered through the scripts into the mongo database. Then decrypt information that sends to the API TeamDesk. 

# 1 . Install Node
# 2 . in the \MongoDBListener folder open up your command console and run npm install

# How to use CryptoJS

When your adding in one or many records to the database, call the crypto package at the top of the page: 

        var CryptoJS = require("crypto-js");

To set up your encryptiong currently call: 

    CryptoJS.AES.encrypt("what you want encrypted",'Key').toString(),

Example:

    name: CryptoJS.AES.encrypt("Aberdeen Inc",'9ZQsIE2mLQ5a').toString(),

When encrypting you should add the .toString() and when decrypting I add .toString(CryptoJS.enc.Utf8) to format it correctly. 
Put what you want to be encrypted or decrypted into the first quotes within the brackets "", then call your Key.

The "Key" can be randomly generated or created by you. But you will need to call this key when you decrpyt and encrpyt information.
Otherwise it wont decrpyt correctly and you will get a "Null", I created my own Key so that I know which key to call. 

When your want to get the record back, we will call the decrypt like so: 

    CryptoJS.AES.decrypt("what you want tp", 'key').toString(CryptoJS.enc.Utf8)
    
Example: 
     
    CryptoJS.AES.decrypt(result[0].name, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8)
    
I make sure to call the same key I used to decrypt it.
       
# Progress 
This branch is built from the master 04/06/2019 
1. encrypt the "name" and "address" has been used to add one or many to the database thorugh the scripts. 
2. can decrypt the "name" and "address" in the demo_mongodb_findone script. 
3. decrypt record and send them to the API

# Team Desk Trial Version

Link to trial database this proof of concept was tested on: https://www.teamdesk.net/secure/api/v2/66139/D2726E2C4E584B93876110EDD0279FF8/Account/Default%20View/select.json

Note: Trial uses a temporary token which expires in 14 days.

